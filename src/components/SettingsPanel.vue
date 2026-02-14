<template>
  <div class="settings-overlay" @click.self="$emit('close')">
    <div class="settings-panel">
      <div class="settings-header">
        <h3>设置</h3>
        <button class="close-btn" @click="$emit('close')">×</button>
      </div>
      
      <div class="settings-body">
        <div class="settings-section">
          <h4>编辑器设置</h4>
          
          <div class="setting-item">
            <label for="fontSize">字体大小</label>
            <select id="fontSize" v-model="settings.fontSize" @change="applySettings">
              <option value="12">12px</option>
              <option value="13">13px</option>
              <option value="14">14px</option>
              <option value="15">15px</option>
              <option value="16">16px</option>
              <option value="18">18px</option>
              <option value="20">20px</option>
            </select>
          </div>
          
          <div class="setting-item">
            <label for="fontFamily">字体</label>
            <select id="fontFamily" v-model="settings.fontFamily" @change="applySettings">
              <option value="'JetBrains Mono', monospace">JetBrains Mono</option>
              <option value="'Fira Code', monospace">Fira Code</option>
              <option value="'Consolas', monospace">Consolas</option>
              <option value="'Source Code Pro', monospace">Source Code Pro</option>
              <option value="monospace">系统默认</option>
            </select>
          </div>
          
          <div class="setting-item">
            <label for="lineHeight">行高</label>
            <select id="lineHeight" v-model="settings.lineHeight" @change="applySettings">
              <option value="0">自动</option>
              <option value="18">18px</option>
              <option value="20">20px</option>
              <option value="22">22px</option>
              <option value="24">24px</option>
              <option value="26">26px</option>
            </select>
          </div>
          
          <div class="setting-item">
            <label for="tabSize">Tab大小</label>
            <select id="tabSize" v-model="settings.tabSize" @change="applySettings">
              <option value="2">2空格</option>
              <option value="4">4空格</option>
              <option value="8">8空格</option>
            </select>
          </div>
        </div>
        
        <div class="settings-section">
          <h4>显示设置</h4>
          
          <div class="setting-item checkbox">
            <label>
              <input type="checkbox" v-model="settings.minimap" @change="applySettings">
              显示小地图
            </label>
          </div>
          
          <div class="setting-item checkbox">
            <label>
              <input type="checkbox" v-model="settings.lineNumbers" @change="applySettings">
              显示行号
            </label>
          </div>
          
          <div class="setting-item checkbox">
            <label>
              <input type="checkbox" v-model="settings.wordWrap" @change="applySettings">
              自动换行
            </label>
          </div>
          
          <div class="setting-item checkbox">
            <label>
              <input type="checkbox" v-model="settings.bracketPairColorization" @change="applySettings">
              括号配对着色
            </label>
          </div>
          
          <div class="setting-item checkbox">
            <label>
              <input type="checkbox" v-model="settings.renderLineHighlight" @change="applySettings">
              高亮当前行
            </label>
          </div>
        </div>
        
        <div class="settings-section">
          <h4>主题</h4>
          
          <div class="setting-item">
            <label for="theme">编辑器主题</label>
            <select id="theme" v-model="settings.theme" @change="applySettings">
              <option value="intellij-dark">IntelliJ Dark</option>
              <option value="vs-dark">VS Dark</option>
              <option value="hc-black">High Contrast</option>
            </select>
          </div>
        </div>
        
        <div class="settings-section">
          <h4>代码补全</h4>
          
          <div class="setting-item checkbox">
            <label>
              <input type="checkbox" v-model="settings.quickSuggestions" @change="applySettings">
              自动触发代码补全
            </label>
          </div>
          
          <div class="setting-item checkbox">
            <label>
              <input type="checkbox" v-model="settings.parameterHints" @change="applySettings">
              显示参数提示
            </label>
          </div>
          
          <div class="setting-item checkbox">
            <label>
              <input type="checkbox" v-model="settings.formatOnType" @change="applySettings">
              输入时自动格式化
            </label>
          </div>
        </div>
      </div>
      
      <div class="settings-footer">
        <button class="btn btn-primary" @click="saveSettings">保存设置</button>
        <button class="btn btn-secondary" @click="resetSettings">重置默认</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['close'])

const defaultSettings = {
  fontSize: '14',
  fontFamily: "'JetBrains Mono', monospace",
  lineHeight: '0',
  tabSize: '4',
  minimap: true,
  lineNumbers: true,
  wordWrap: false,
  bracketPairColorization: true,
  renderLineHighlight: true,
  theme: 'intellij-dark',
  quickSuggestions: true,
  parameterHints: true,
  formatOnType: true
}

const settings = ref({ ...defaultSettings })

onMounted(() => {
  const savedSettings = localStorage.getItem('editorSettings')
  if (savedSettings) {
    settings.value = { ...defaultSettings, ...JSON.parse(savedSettings) }
    applySettings()
  }
})

const applySettings = () => {
  const event = new CustomEvent('editorSettingsChange', {
    detail: { ...settings.value }
  })
  window.dispatchEvent(event)
}

const saveSettings = () => {
  localStorage.setItem('editorSettings', JSON.stringify(settings.value))
  applySettings()
  emit('close')
}

const resetSettings = () => {
  settings.value = { ...defaultSettings }
  applySettings()
}
</script>

<style scoped>
.settings-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.settings-panel {
  background-color: var(--bg-secondary, #2d2d2d);
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color, #3c3c3c);
}

.settings-header h3 {
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

.settings-body {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}

.settings-section {
  margin-bottom: 24px;
}

.settings-section:last-child {
  margin-bottom: 0;
}

.settings-section h4 {
  margin: 0 0 16px 0;
  color: var(--accent-color, #4a90d9);
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border-color, #3c3c3c);
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.setting-item:last-child {
  margin-bottom: 0;
}

.setting-item label {
  color: var(--text-primary, #d4d4d4);
  font-size: 13px;
}

.setting-item select {
  background-color: var(--bg-tertiary, #3c3c3c);
  border: 1px solid var(--border-color, #3c3c3c);
  border-radius: 4px;
  color: var(--text-primary, #d4d4d4);
  padding: 6px 12px;
  font-size: 13px;
  cursor: pointer;
}

.setting-item select:focus {
  outline: none;
  border-color: var(--accent-color, #4a90d9);
}

.setting-item.checkbox {
  justify-content: flex-start;
}

.setting-item.checkbox label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.setting-item.checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: var(--accent-color, #4a90d9);
}

.settings-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid var(--border-color, #3c3c3c);
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  border: none;
  transition: background-color 0.15s;
}

.btn-primary {
  background-color: var(--accent-color, #4a90d9);
  color: white;
}

.btn-primary:hover {
  background-color: #3a80c9;
}

.btn-secondary {
  background-color: var(--bg-tertiary, #3c3c3c);
  color: var(--text-primary, #d4d4d4);
}

.btn-secondary:hover {
  background-color: #4c4c4c;
}
</style>
