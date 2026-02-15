<template>
  <div class="editor-container">
    <ToolBar
      @new-file="handleNewFile"
      @open-file="handleOpenFile"
      @save-file="handleSaveFile"
      @format-code="handleFormatCode"
      @undo="handleUndo"
      @redo="handleRedo"
      @find="handleFind"
      @replace="handleReplace"
      @toggle-settings="toggleSettings"
      @reset-code="handleResetCode"
      @toggle-markdown="toggleMarkdown"
      @run-code="handleRunCode"
      @language-change="handleLanguageChange"
      :show-markdown="showMarkdown"
      :is-running="isRunning"
      :language="currentLanguage"
    />
    <div class="main-content">
      <Transition name="slide">
        <div 
          v-if="showMarkdown" 
          class="markdown-sidebar"
          :style="{ width: markdownWidth + 'px' }"
        >
          <MarkdownPanel ref="markdownRef" @close="showMarkdown = false" />
          <div 
            class="resize-handle"
            @mousedown="startResize"
          ></div>
        </div>
      </Transition>
      <div class="editor-wrapper" :class="{ 'with-sidebar': showMarkdown, 'with-result': showResult }">
        <MonacoEditor
          ref="editorRef"
          :initial-content="codeContent"
          :language="currentLanguage"
          @change="handleCodeChange"
        />
      </div>
    </div>
    <ResultPanel 
      :visible="showResult" 
      :result="runResult" 
      :loading="isRunning"
      :execution-time="runResult.executionTime"
      :input="userInput"
      @update:input="userInput = $event"
      @close="showResult = false"
    />
    <StatusBar :line="currentLine" :column="currentColumn" :language="languageDisplay" />
    <SettingsPanel v-if="showSettings" @close="showSettings = false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import MonacoEditor from './components/MonacoEditor.vue'
import ToolBar from './components/ToolBar.vue'
import StatusBar from './components/StatusBar.vue'
import SettingsPanel from './components/SettingsPanel.vue'
import MarkdownPanel from './components/MarkdownPanel.vue'
import ResultPanel from './components/ResultPanel.vue'
import { codeApi } from './api/codeApi'

const DEFAULT_JAVA_CODE = `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`

const DEFAULT_CPP_CODE = `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    return 0;
}`

const DEFAULT_C_CODE = `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    scanf("%d", &n);
    return 0;
}`

const editorRef = ref(null)
const markdownRef = ref(null)
const codeContent = ref(DEFAULT_JAVA_CODE)
const currentLine = ref(1)
const currentColumn = ref(1)
const showSettings = ref(false)
const showMarkdown = ref(false)
const markdownWidth = ref(400)
const showResult = ref(false)
const isRunning = ref(false)
const runResult = ref({})
const userInput = ref('')
const currentLanguage = ref('java')

const languageDisplay = computed(() => {
  const langMap = {
    'java': 'Java',
    'cpp': 'C++',
    'c': 'C'
  }
  return langMap[currentLanguage.value] || 'Java'
})

const handleLanguageChange = (lang) => {
  currentLanguage.value = lang
  let defaultCode = DEFAULT_JAVA_CODE
  if (lang === 'cpp') {
    defaultCode = DEFAULT_CPP_CODE
  } else if (lang === 'c') {
    defaultCode = DEFAULT_C_CODE
  }
  codeContent.value = defaultCode
  editorRef.value?.setLanguage(lang)
  editorRef.value?.setContent(defaultCode)
  userInput.value = ''
  showResult.value = false
}

const handleNewFile = () => {
  handleLanguageChange(currentLanguage.value)
}

const handleResetCode = () => {
  handleLanguageChange(currentLanguage.value)
}

const handleOpenFile = () => {
  const input = document.createElement('input')
  input.type = 'file'
  const extensions = currentLanguage.value === 'java' ? '.java' : 
                     currentLanguage.value === 'cpp' ? '.cpp,.cxx,.cc' : '.c'
  input.accept = extensions
  input.onchange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const content = event.target.result
        codeContent.value = content
        editorRef.value?.setContent(content)
      }
      reader.readAsText(file)
    }
  }
  input.click()
}

const handleSaveFile = () => {
  const content = editorRef.value?.getContent() || codeContent.value
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  const ext = currentLanguage.value === 'java' ? 'java' : 
              currentLanguage.value === 'cpp' ? 'cpp' : 'c'
  a.download = `Untitled.${ext}`
  a.click()
  URL.revokeObjectURL(url)
}

const handleFormatCode = () => {
  editorRef.value?.formatCode()
}

const handleUndo = () => {
  editorRef.value?.undo()
}

const handleRedo = () => {
  editorRef.value?.redo()
}

const handleFind = () => {
  editorRef.value?.showFind()
}

const handleReplace = () => {
  editorRef.value?.showReplace()
}

const toggleSettings = () => {
  showSettings.value = !showSettings.value
}

const toggleMarkdown = () => {
  showMarkdown.value = !showMarkdown.value
}

const handleCodeChange = ({ line, column }) => {
  currentLine.value = line
  currentColumn.value = column
}

const handleRunCode = async () => {
  const code = editorRef.value?.getContent()
  if (!code) return
  
  const needsInput = /Scanner.*\.next|System\.in|cin\s*>>|scanf|getchar|gets\s*\(/.test(code)
  
  if (needsInput && !userInput.value.trim()) {
    showResult.value = true
    runResult.value = {
      success: false,
      error: '程序需要输入数据，请先在输入框中填写数据后再运行！\n\n例如：\n- 如果程序需要读取一个整数，输入框填写：10\n- 如果程序需要读取多个值，每行填写一个值'
    }
    return
  }
  
  isRunning.value = true
  showResult.value = true
  runResult.value = {}
  
  try {
    const result = await codeApi.runCode(code, userInput.value, currentLanguage.value, 30000)
    runResult.value = result
  } catch (error) {
    runResult.value = {
      success: false,
      error: error.message || '运行失败'
    }
  } finally {
    isRunning.value = false
    userInput.value = ''
  }
}

let isResizing = false

const startResize = (e) => {
  isResizing = true
  document.addEventListener('mousemove', handleResize)
  document.addEventListener('mouseup', stopResize)
  document.body.style.cursor = 'ew-resize'
  document.body.style.userSelect = 'none'
}

const handleResize = (e) => {
  if (!isResizing) return
  const newWidth = e.clientX
  if (newWidth >= 200 && newWidth <= 800) {
    markdownWidth.value = newWidth
  }
}

const stopResize = () => {
  isResizing = false
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
}

onMounted(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'F5') {
      e.preventDefault()
      handleRunCode()
    }
  }
  window.addEventListener('keydown', handleKeyDown)
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
})
</script>

<style scoped>
.editor-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #1e1e1e;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}

.markdown-sidebar {
  position: relative;
  flex-shrink: 0;
  height: 100%;
  z-index: 10;
}

.resize-handle {
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  background-color: transparent;
  cursor: ew-resize;
  transition: background-color 0.2s;
  z-index: 20;
}

.resize-handle:hover {
  background-color: #4a90d9;
}

.editor-wrapper {
  flex: 1;
  overflow: hidden;
  position: relative;
  min-width: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
