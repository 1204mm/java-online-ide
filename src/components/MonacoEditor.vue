<template>
  <div ref="editorContainer" class="monaco-editor-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, onUnmounted } from 'vue'
import * as monaco from 'monaco-editor'
import { setupJavaLanguage, setupIntelliJTheme } from '../config/javaConfig'
import { setupAutoBrackets } from '../config/autoBrackets'
import { setupJavaCompletion } from '../config/javaCompletion'
import { setupCodeSnippets } from '../config/codeSnippets'
import { setupIntelliJKeybindings } from '../config/keybindings'
import { setupJavaFormatter } from '../config/javaFormatter'

const props = defineProps({
  initialContent: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['change'])

const editorContainer = ref(null)
let editorInstance = null
let settingsHandler = null
let currentFontSize = ref(14)

onMounted(() => {
  initEditor()
  setupSettingsListener()
  setupZoomListener()
})

onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.dispose()
  }
  if (settingsHandler) {
    window.removeEventListener('editorSettingsChange', settingsHandler)
  }
})

const setupZoomListener = () => {
  const container = editorContainer.value
  if (!container) return

  container.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault()
      
      const delta = e.deltaY > 0 ? -1 : 1
      const newSize = Math.max(8, Math.min(40, currentFontSize.value + delta))
      
      if (newSize !== currentFontSize.value) {
        currentFontSize.value = newSize
        editorInstance.updateOptions({ fontSize: newSize })
      }
    }
  }, { passive: false })
}

const setupSettingsListener = () => {
  settingsHandler = (event) => {
    if (editorInstance && event.detail) {
      applyEditorSettings(event.detail)
    }
  }
  window.addEventListener('editorSettingsChange', settingsHandler)
}

const applyEditorSettings = (settings) => {
  if (!editorInstance) return

  editorInstance.updateOptions({
    fontSize: parseInt(settings.fontSize) || 14,
    fontFamily: settings.fontFamily || "'JetBrains Mono', monospace",
    lineHeight: parseInt(settings.lineHeight) || 22,
    tabSize: parseInt(settings.tabSize) || 4,
    minimap: { enabled: settings.minimap !== false },
    lineNumbers: settings.lineNumbers !== false ? 'on' : 'off',
    wordWrap: settings.wordWrap ? 'on' : 'off',
    bracketPairColorization: { enabled: settings.bracketPairColorization !== false },
    renderLineHighlight: settings.renderLineHighlight !== false ? 'all' : 'none',
    quickSuggestions: settings.quickSuggestions !== false ? {
      other: true,
      comments: false,
      strings: false
    } : false,
    parameterHints: {
      enabled: settings.parameterHints !== false,
      cycle: true
    },
    formatOnType: settings.formatOnType !== false
  })

  if (settings.theme) {
    monaco.editor.setTheme(settings.theme)
  }
}

const initEditor = () => {
  setupIntelliJTheme(monaco)
  setupJavaLanguage(monaco)
  setupAutoBrackets(monaco)
  setupJavaCompletion(monaco)
  setupCodeSnippets(monaco)
  setupJavaFormatter(monaco)
  
  editorInstance = monaco.editor.create(editorContainer.value, {
    value: props.initialContent,
    language: 'java',
    theme: 'intellij-dark',
    fontSize: 14,
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
    fontLigatures: true,
    lineHeight: 0,
    letterSpacing: 0,
    minimap: {
      enabled: true,
      maxColumn: 80,
      renderCharacters: false
    },
    scrollBeyondLastLine: false,
    automaticLayout: true,
    tabSize: 4,
    insertSpaces: true,
    wordWrap: 'off',
    lineNumbers: 'on',
    renderLineHighlight: 'none',
    cursorBlinking: 'smooth',
    cursorSmoothCaretAnimation: 'on',
    smoothScrolling: true,
    padding: { top: 10 },
    occurrencesHighlight: 'off',
    selectionHighlight: false,
    foldingHighlight: false,
    matchBrackets: 'never',
    renderWhitespace: 'none',
    suggest: {
      showKeywords: true,
      showSnippets: true,
      showClasses: true,
      showFunctions: true,
      showVariables: true,
      showModules: true,
      showProperties: true,
      showIcons: true,
      maxVisibleSuggestions: 12,
      snippetsPreventQuickSuggestions: false
    },
    quickSuggestions: {
      other: true,
      comments: false,
      strings: false
    },
    acceptSuggestionOnCommitCharacter: true,
    acceptSuggestionOnEnter: 'on',
    wordBasedSuggestions: 'allDocuments',
    parameterHints: {
      enabled: true,
      cycle: true
    },
    formatOnPaste: true,
    formatOnType: true,
    bracketPairColorization: {
      enabled: true
    },
    guides: {
      bracketPairs: false,
      indentation: true
    }
  })

  setupIntelliJKeybindings(editorInstance, monaco)

  editorInstance.onDidChangeCursorPosition((e) => {
    emit('change', {
      line: e.position.lineNumber,
      column: e.position.column
    })
  })

  editorInstance.onDidChangeModelContent(() => {
    const model = editorInstance.getModel()
    if (model) {
      const lineCount = model.getLineCount()
      if (lineCount > 1000) {
        console.log('Large file detected, performance mode active')
      }
    }
  })
}

const setContent = (content) => {
  if (editorInstance) {
    editorInstance.setValue(content)
  }
}

const getContent = () => {
  if (editorInstance) {
    return editorInstance.getValue()
  }
  return ''
}

const formatCode = () => {
  if (editorInstance) {
    editorInstance.getAction('editor.action.formatDocument')?.run()
  }
}

const undo = () => {
  if (editorInstance) {
    editorInstance.trigger('keyboard', 'undo', null)
  }
}

const redo = () => {
  if (editorInstance) {
    editorInstance.trigger('keyboard', 'redo', null)
  }
}

const showFind = () => {
  if (editorInstance) {
    editorInstance.getAction('actions.find')?.run()
  }
}

const showReplace = () => {
  if (editorInstance) {
    editorInstance.getAction('editor.action.startFindReplaceAction')?.run()
  }
}

defineExpose({
  setContent,
  getContent,
  formatCode,
  undo,
  redo,
  showFind,
  showReplace
})

watch(() => props.initialContent, (newContent) => {
  if (editorInstance && editorInstance.getValue() !== newContent) {
    editorInstance.setValue(newContent)
  }
})
</script>

<style scoped>
.monaco-editor-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
