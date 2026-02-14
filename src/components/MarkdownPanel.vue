<template>
  <div class="markdown-panel">
    <div class="markdown-header">
      <span class="panel-title">Markdown 笔记</span>
      <div class="header-actions">
        <button 
          class="action-btn" 
          :class="{ active: viewMode === 'edit' }" 
          @click="viewMode = 'edit'"
          title="编辑模式"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </button>
        <button 
          class="action-btn" 
          :class="{ active: viewMode === 'preview' }" 
          @click="viewMode = 'preview'"
          title="预览模式"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
        </button>
        <button 
          class="action-btn" 
          :class="{ active: viewMode === 'split' }" 
          @click="viewMode = 'split'"
          title="分屏模式"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7v2h16V6H4z"/>
          </svg>
        </button>
        <button class="action-btn close-btn" @click="$emit('close')" title="关闭">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="markdown-body" :class="viewMode">
      <div v-show="viewMode === 'edit' || viewMode === 'split'" class="editor-section">
        <textarea 
          ref="textareaRef"
          v-model="markdownContent"
          class="markdown-textarea"
          placeholder="在此输入 Markdown 内容..."
          @input="handleInput"
        ></textarea>
      </div>
      
      <div v-show="viewMode === 'preview' || viewMode === 'split'" class="preview-section">
        <div class="markdown-preview" ref="previewRef" v-html="renderedMarkdown" @click="handlePreviewClick"></div>
      </div>
    </div>
    
    <div class="markdown-footer">
      <span class="char-count">{{ markdownContent.length }} 字符</span>
      <button class="clear-btn" @click="clearContent" title="清空内容">清空</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const emit = defineEmits(['close', 'resize'])

const textareaRef = ref(null)
const previewRef = ref(null)
const viewMode = ref('edit')
const markdownContent = ref('')

const renderedMarkdown = computed(() => {
  return parseMarkdown(markdownContent.value)
})

const handleInput = () => {
  localStorage.setItem('markdownContent', markdownContent.value)
}

const clearContent = () => {
  markdownContent.value = ''
  localStorage.removeItem('markdownContent')
}

const handlePreviewClick = (e) => {
  const target = e.target
  if (target.classList.contains('copy-btn') || target.closest('.copy-btn')) {
    const btn = target.classList.contains('copy-btn') ? target : target.closest('.copy-btn')
    const codeBlock = btn.closest('.code-block-wrapper')
    const code = codeBlock?.querySelector('code')
    if (code) {
      copyToClipboard(code.textContent, btn)
    }
  }
}

const copyToClipboard = async (text, btn) => {
  try {
    await navigator.clipboard.writeText(text)
    const originalHtml = btn.innerHTML
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.innerHTML = originalHtml
      btn.classList.remove('copied')
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}

const parseMarkdown = (text) => {
  if (!text) return ''
  
  let html = text
  
  html = html.replace(/\$\$([\s\S]+?)\$\$/g, '<div class="math-block">$1</div>')
  
  html = html.replace(/\$([^$\n]+?)\$/g, '<span class="math-inline">$1</span>')
  
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const langLabel = lang ? `<span class="code-lang">${lang}</span>` : ''
    const trimmedCode = code.replace(/^\n+|\n+$/g, '')
    return `<div class="code-block-wrapper">${langLabel}<button class="copy-btn" title="复制代码"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></button><pre><code class="language-${lang}">${trimmedCode}</code></pre></div>`
  })
  
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>')
  
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>')
  
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  html = html.replace(/~~(.+?)~~/g, '<del>$1</del>')
  
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
  
  html = html.replace(/^[-*] (.+)$/gm, '<li>$1</li>')
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
  
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
    if (match.includes('<ul>')) return match
    return '<ol>' + match + '</ol>'
  })
  
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
  
  html = html.replace(/^---$/gm, '<hr>')
  
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
  
  html = html.replace(/\n\n/g, '</p><p>')
  html = html.replace(/\n/g, '<br>')
  html = '<p>' + html + '</p>'
  
  html = html.replace(/<p><\/p>/g, '')
  html = html.replace(/<p>(<h[1-6]>)/g, '$1')
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1')
  html = html.replace(/<p>(<ul>)/g, '$1')
  html = html.replace(/(<\/ul>)<\/p>/g, '$1')
  html = html.replace(/<p>(<ol>)/g, '$1')
  html = html.replace(/(<\/ol>)<\/p>/g, '$1')
  html = html.replace(/<p>(<pre>)/g, '$1')
  html = html.replace(/(<\/pre>)<\/p>/g, '$1')
  html = html.replace(/<p>(<blockquote>)/g, '$1')
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1')
  html = html.replace(/<p>(<hr>)<\/p>/g, '$1')
  html = html.replace(/<p>(<div class="math-block">)/g, '$1')
  html = html.replace(/(<\/div>)<\/p>/g, '$1')
  
  html = renderMathSymbols(html)
  
  return html
}

const renderMathSymbols = (html) => {
  const symbolMap = {
    '\\le': '≤',
    '\\ge': '≥',
    '\\ne': '≠',
    '\\lt': '<',
    '\\gt': '>',
    '\\leq': '≤',
    '\\geq': '≥',
    '\\neq': '≠',
    '\\approx': '≈',
    '\\equiv': '≡',
    '\\pm': '±',
    '\\mp': '∓',
    '\\times': '×',
    '\\div': '÷',
    '\\cdot': '·',
    '\\sum': '∑',
    '\\prod': '∏',
    '\\int': '∫',
    '\\infty': '∞',
    '\\partial': '∂',
    '\\nabla': '∇',
    '\\alpha': 'α',
    '\\beta': 'β',
    '\\gamma': 'γ',
    '\\delta': 'δ',
    '\\epsilon': 'ε',
    '\\zeta': 'ζ',
    '\\eta': 'η',
    '\\theta': 'θ',
    '\\iota': 'ι',
    '\\kappa': 'κ',
    '\\lambda': 'λ',
    '\\mu': 'μ',
    '\\nu': 'ν',
    '\\xi': 'ξ',
    '\\pi': 'π',
    '\\rho': 'ρ',
    '\\sigma': 'σ',
    '\\tau': 'τ',
    '\\upsilon': 'υ',
    '\\phi': 'φ',
    '\\chi': 'χ',
    '\\psi': 'ψ',
    '\\omega': 'ω',
    '\\Gamma': 'Γ',
    '\\Delta': 'Δ',
    '\\Theta': 'Θ',
    '\\Lambda': 'Λ',
    '\\Xi': 'Ξ',
    '\\Pi': 'Π',
    '\\Sigma': 'Σ',
    '\\Phi': 'Φ',
    '\\Psi': 'Ψ',
    '\\Omega': 'Ω',
    '\\in': '∈',
    '\\notin': '∉',
    '\\subset': '⊂',
    '\\supset': '⊃',
    '\\subseteq': '⊆',
    '\\supseteq': '⊇',
    '\\cup': '∪',
    '\\cap': '∩',
    '\\emptyset': '∅',
    '\\forall': '∀',
    '\\exists': '∃',
    '\\neg': '¬',
    '\\land': '∧',
    '\\lor': '∨',
    '\\Rightarrow': '⇒',
    '\\Leftarrow': '⇐',
    '\\Leftrightarrow': '⇔',
    '\\rightarrow': '→',
    '\\leftarrow': '←',
    '\\leftrightarrow': '↔',
    '\\to': '→',
    '\\gets': '←',
    '\\lfloor': '⌊',
    '\\rfloor': '⌋',
    '\\lceil': '⌈',
    '\\rceil': '⌉',
    '\\sqrt': '√',
    '\\frac': '',
    '\\quad': ' ',
    '\\qquad': '  ',
    '\\,': ' ',
    '\\;': ' ',
    '\\!': '',
    '\\ ': ' ',
    '\\{': '{',
    '\\}': '}',
    '\\_': '_',
    '\\^': '^',
    '\\$': '$',
    '\\%': '%',
    '\\&': '&',
    '\\#': '#',
  }
  
  let result = html
  for (const [latex, symbol] of Object.entries(symbolMap)) {
    result = result.split(latex).join(symbol)
  }
  
  result = result.replace(/\^{([^}]+)}/g, '<sup>$1</sup>')
  result = result.replace(/\^{(\w)}/g, '<sup>$1</sup>')
  result = result.replace(/_{([^}]+)}/g, '<sub>$1</sub>')
  result = result.replace(/_(\w)/g, '<sub>$1</sub>')
  
  result = result.replace(/\\frac{([^}]+)}{([^}]+)}/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>')
  
  return result
}

watch(() => markdownContent.value, () => {
  handleInput()
}, { immediate: false })

if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('markdownContent')
  if (saved) {
    markdownContent.value = saved
  }
}
</script>

<style scoped>
.markdown-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #1e1e1e;
  border-right: 1px solid #3c3c3c;
}

.markdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: #252526;
  border-bottom: 1px solid #3c3c3c;
  min-height: 40px;
}

.panel-title {
  color: #d4d4d4;
  font-size: 13px;
  font-weight: 500;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: #808080;
  cursor: pointer;
  transition: all 0.15s;
}

.action-btn:hover {
  background-color: #3c3c3c;
  color: #d4d4d4;
}

.action-btn.active {
  background-color: #4a90d9;
  color: white;
}

.close-btn:hover {
  background-color: #e81123;
  color: white;
}

.markdown-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.markdown-body.edit .editor-section,
.markdown-body.preview .preview-section {
  flex: 1;
}

.markdown-body.split {
  flex-direction: row;
}

.markdown-body.split .editor-section,
.markdown-body.split .preview-section {
  flex: 1;
  border-right: 1px solid #3c3c3c;
}

.markdown-body.split .preview-section {
  border-right: none;
}

.editor-section {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.markdown-textarea {
  flex: 1;
  width: 100%;
  padding: 12px;
  background-color: #1e1e1e;
  border: none;
  color: #d4d4d4;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.6;
  resize: none;
  outline: none;
}

.markdown-textarea::placeholder {
  color: #606060;
}

.preview-section {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
}

.markdown-preview {
  flex: 1;
  padding: 12px;
  overflow-y: auto;
  color: #d4d4d4;
  font-size: 14px;
  line-height: 1.6;
}

.markdown-preview :deep(h1) {
  font-size: 24px;
  font-weight: 600;
  margin: 16px 0 8px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #3c3c3c;
  color: #ffffff;
}

.markdown-preview :deep(h2) {
  font-size: 20px;
  font-weight: 600;
  margin: 14px 0 6px 0;
  color: #ffffff;
}

.markdown-preview :deep(h3) {
  font-size: 16px;
  font-weight: 600;
  margin: 12px 0 4px 0;
  color: #ffffff;
}

.markdown-preview :deep(p) {
  margin: 8px 0;
}

.markdown-preview :deep(code) {
  background-color: #2d2d2d;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #ce9178;
}

.markdown-preview :deep(.code-block-wrapper) {
  position: relative;
  margin: 8px 0;
}

.markdown-preview :deep(.code-lang) {
  position: absolute;
  top: 6px;
  left: 10px;
  font-size: 11px;
  color: #808080;
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  pointer-events: none;
  z-index: 1;
}

.markdown-preview :deep(.copy-btn) {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  background-color: #3c3c3c;
  border: none;
  border-radius: 4px;
  color: #808080;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.15s;
  z-index: 1;
}

.markdown-preview :deep(.code-block-wrapper:hover .copy-btn) {
  opacity: 1;
}

.markdown-preview :deep(.copy-btn:hover) {
  background-color: #4a90d9;
  color: white;
}

.markdown-preview :deep(.copy-btn.copied) {
  background-color: #4caf50;
  color: white;
}

.markdown-preview :deep(pre) {
  background-color: #2d2d2d;
  padding: 8px 10px;
  padding-top: 28px;
  border-radius: 4px;
  overflow-x: auto;
  margin: 0;
}

.markdown-preview :deep(pre code) {
  background: none;
  padding: 0;
  color: #d4d4d4;
  font-size: 13px;
  line-height: 1.4;
}

.markdown-preview :deep(ul),
.markdown-preview :deep(ol) {
  margin: 8px 0;
  padding-left: 24px;
}

.markdown-preview :deep(li) {
  margin: 4px 0;
}

.markdown-preview :deep(blockquote) {
  border-left: 3px solid #4a90d9;
  padding-left: 12px;
  margin: 8px 0;
  color: #808080;
}

.markdown-preview :deep(a) {
  color: #4a90d9;
  text-decoration: none;
}

.markdown-preview :deep(a:hover) {
  text-decoration: underline;
}

.markdown-preview :deep(strong) {
  color: #ffffff;
  font-weight: 600;
}

.markdown-preview :deep(em) {
  color: #ce9178;
}

.markdown-preview :deep(del) {
  color: #808080;
  text-decoration: line-through;
}

.markdown-preview :deep(hr) {
  border: none;
  border-top: 1px solid #3c3c3c;
  margin: 16px 0;
}

.markdown-preview :deep(img) {
  max-width: 100%;
  border-radius: 4px;
}

.markdown-preview :deep(.math-inline) {
  font-style: italic;
}

.markdown-preview :deep(.math-block) {
  margin: 12px 0;
  text-align: center;
  font-style: italic;
  overflow-x: auto;
}

.markdown-preview :deep(.frac) {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin: 0 2px;
}

.markdown-preview :deep(.frac .num) {
  border-bottom: 1px solid #d4d4d4;
  padding: 0 4px 2px;
}

.markdown-preview :deep(.frac .den) {
  padding: 2px 4px 0;
}

.markdown-preview :deep(sup) {
  font-size: 0.75em;
  vertical-align: super;
}

.markdown-preview :deep(sub) {
  font-size: 0.75em;
  vertical-align: sub;
}

.markdown-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background-color: #252526;
  border-top: 1px solid #3c3c3c;
  min-height: 32px;
}

.char-count {
  color: #808080;
  font-size: 12px;
}

.clear-btn {
  background: transparent;
  border: none;
  color: #808080;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.15s;
}

.clear-btn:hover {
  background-color: #3c3c3c;
  color: #d4d4d4;
}
</style>
