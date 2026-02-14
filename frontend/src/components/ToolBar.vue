<template>
  <div class="toolbar">
    <div class="toolbar-left">
      <div class="toolbar-group">
        <button class="toolbar-btn" @click="$emit('newFile')" title="新建文件 (Ctrl+N)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
          </svg>
          <span>新建</span>
        </button>
        <button class="toolbar-btn" @click="$emit('openFile')" title="打开文件 (Ctrl+O)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
          </svg>
          <span>打开</span>
        </button>
        <button class="toolbar-btn" @click="$emit('saveFile')" title="保存文件 (Ctrl+S)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
          </svg>
          <span>保存</span>
        </button>
      </div>
      
      <div class="toolbar-divider"></div>
      
      <div class="toolbar-group">
        <button class="toolbar-btn" @click="$emit('undo')" title="撤销 (Ctrl+Z)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
          </svg>
        </button>
        <button class="toolbar-btn" @click="$emit('redo')" title="重做 (Ctrl+Shift+Z)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
          </svg>
        </button>
      </div>
      
      <div class="toolbar-divider"></div>
      
      <div class="toolbar-group">
        <button class="toolbar-btn" @click="$emit('find')" title="查找 (Ctrl+F)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
        <button class="toolbar-btn" @click="$emit('replace')" title="替换 (Ctrl+R)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.5l1.5-1.5-4.86-4.86z"/>
          </svg>
        </button>
      </div>
      
      <div class="toolbar-divider"></div>
      
      <div class="toolbar-group">
        <button class="toolbar-btn run-btn" @click="$emit('runCode')" :disabled="isRunning" title="运行代码 (F5)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span>{{ isRunning ? '运行中...' : '运行' }}</span>
        </button>
        <button class="toolbar-btn" @click="$emit('formatCode')" title="格式化代码 (Ctrl+Alt+L)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>
          </svg>
          <span>格式化</span>
        </button>
        <button class="toolbar-btn" @click="$emit('resetCode')" title="重置为默认代码">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
          <span>重置</span>
        </button>
      </div>
    </div>
    
    <div class="toolbar-right">
      <div class="toolbar-group">
        <button 
          class="toolbar-btn" 
          :class="{ active: showMarkdown }" 
          @click="$emit('toggleMarkdown')" 
          title="Markdown笔记"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6h17.12c.79 0 1.44.63 1.44 1.41v9.18c0 .78-.65 1.41-1.44 1.41zM6.81 15.19v-3.66l1.92 2.35 1.92-2.35v3.66h1.93V8.81h-1.93l-1.92 2.35-1.92-2.35H4.89v6.38h1.92zM19.69 12h-1.92V8.81h-1.92V12h-1.93l2.89 3.28L19.69 12z"/>
          </svg>
          <span>MD</span>
        </button>
        <button class="toolbar-btn" @click="showShortcuts = true" title="快捷键帮助">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/>
          </svg>
        </button>
        <button class="toolbar-btn" @click="$emit('toggleSettings')" title="设置">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
        </button>
      </div>
    </div>
    
    <Teleport to="body">
      <div v-if="showShortcuts" class="shortcuts-modal" @click.self="showShortcuts = false">
        <div class="shortcuts-content">
          <div class="shortcuts-header">
            <h3>快捷键列表</h3>
            <button class="close-btn" @click="showShortcuts = false">×</button>
          </div>
          <div class="shortcuts-body">
            <div class="shortcut-category">
              <h4>文件操作</h4>
              <div class="shortcut-item">
                <span class="shortcut-name">新建文件</span>
                <span class="shortcut-key">Ctrl+N</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">打开文件</span>
                <span class="shortcut-key">Ctrl+O</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">保存文件</span>
                <span class="shortcut-key">Ctrl+S</span>
              </div>
            </div>
            
            <div class="shortcut-category">
              <h4>编辑操作</h4>
              <div class="shortcut-item">
                <span class="shortcut-name">撤销</span>
                <span class="shortcut-key">Ctrl+Z</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">重做</span>
                <span class="shortcut-key">Ctrl+Shift+Z</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">复制当前行</span>
                <span class="shortcut-key">Ctrl+D</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">删除当前行</span>
                <span class="shortcut-key">Ctrl+Y</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">上移当前行</span>
                <span class="shortcut-key">Alt+Shift+↑</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">下移当前行</span>
                <span class="shortcut-key">Alt+Shift+↓</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">开始新行</span>
                <span class="shortcut-key">Shift+Enter</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">完成语句</span>
                <span class="shortcut-key">Ctrl+Shift+Enter</span>
              </div>
            </div>
            
            <div class="shortcut-category">
              <h4>代码操作</h4>
              <div class="shortcut-item">
                <span class="shortcut-name">格式化代码</span>
                <span class="shortcut-key">Ctrl+Alt+L</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">优化导入</span>
                <span class="shortcut-key">Ctrl+Alt+O</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">注释/取消注释</span>
                <span class="shortcut-key">Ctrl+/</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">块注释</span>
                <span class="shortcut-key">Ctrl+Shift+/</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">代码补全</span>
                <span class="shortcut-key">Ctrl+Space</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">智能补全</span>
                <span class="shortcut-key">Ctrl+Shift+Space</span>
              </div>
            </div>
            
            <div class="shortcut-category">
              <h4>查找替换</h4>
              <div class="shortcut-item">
                <span class="shortcut-name">查找</span>
                <span class="shortcut-key">Ctrl+F</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">替换</span>
                <span class="shortcut-key">Ctrl+R</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">跳转到行</span>
                <span class="shortcut-key">Ctrl+G</span>
              </div>
            </div>
            
            <div class="shortcut-category">
              <h4>选择操作</h4>
              <div class="shortcut-item">
                <span class="shortcut-name">扩展选择</span>
                <span class="shortcut-key">Ctrl+W</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">缩小选择</span>
                <span class="shortcut-key">Ctrl+Shift+W</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">全选</span>
                <span class="shortcut-key">Ctrl+A</span>
              </div>
            </div>
            
            <div class="shortcut-category">
              <h4>其他操作</h4>
              <div class="shortcut-item">
                <span class="shortcut-name">切换大小写</span>
                <span class="shortcut-key">Ctrl+Shift+U</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">合并行</span>
                <span class="shortcut-key">Ctrl+Shift+J</span>
              </div>
              <div class="shortcut-item">
                <span class="shortcut-name">环绕代码</span>
                <span class="shortcut-key">Ctrl+Alt+T</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  showMarkdown: {
    type: Boolean,
    default: false
  },
  isRunning: {
    type: Boolean,
    default: false
  }
})

const showShortcuts = ref(false)

defineEmits(['newFile', 'openFile', 'saveFile', 'formatCode', 'undo', 'redo', 'find', 'replace', 'toggleSettings', 'resetCode', 'toggleMarkdown', 'runCode'])
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background-color: var(--toolbar-bg, #323232);
  border-bottom: 1px solid var(--border-color, #3c3c3c);
  min-height: 40px;
}

.toolbar-left,
.toolbar-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.toolbar-group {
  display: flex;
  align-items: center;
  gap: 2px;
}

.toolbar-divider {
  width: 1px;
  height: 24px;
  background-color: var(--border-color, #3c3c3c);
  margin: 0 8px;
}

.toolbar-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: var(--text-primary, #d4d4d4);
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.15s;
}

.toolbar-btn:hover {
  background-color: var(--bg-tertiary, #3c3c3c);
}

.toolbar-btn:active {
  background-color: var(--accent-color, #4a90d9);
}

.toolbar-btn.active {
  background-color: var(--accent-color, #4a90d9);
  color: white;
}

.toolbar-btn.run-btn {
  background-color: #2ea043;
  color: white;
}

.toolbar-btn.run-btn:hover {
  background-color: #3fb950;
}

.toolbar-btn.run-btn:disabled {
  background-color: #484f58;
  color: #8b949e;
  cursor: not-allowed;
}

.toolbar-btn svg {
  flex-shrink: 0;
}

.toolbar-btn span {
  display: none;
}

@media (min-width: 768px) {
  .toolbar-btn span {
    display: inline;
  }
}

.shortcuts-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.shortcuts-content {
  background-color: var(--bg-secondary, #2d2d2d);
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.shortcuts-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color, #3c3c3c);
}

.shortcuts-header h3 {
  margin: 0;
  color: var(--text-primary, #d4d4d4);
  font-size: 16px;
}

.close-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary, #808080);
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.close-btn:hover {
  color: var(--text-primary, #d4d4d4);
}

.shortcuts-body {
  padding: 16px 20px;
  overflow-y: auto;
}

.shortcut-category {
  margin-bottom: 20px;
}

.shortcut-category:last-child {
  margin-bottom: 0;
}

.shortcut-category h4 {
  margin: 0 0 12px 0;
  color: var(--accent-color, #4a90d9);
  font-size: 14px;
  font-weight: 600;
}

.shortcut-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color, #3c3c3c);
}

.shortcut-item:last-child {
  border-bottom: none;
}

.shortcut-name {
  color: var(--text-primary, #d4d4d4);
  font-size: 13px;
}

.shortcut-key {
  background-color: var(--bg-tertiary, #3c3c3c);
  padding: 4px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  color: var(--text-primary, #d4d4d4);
}
</style>
