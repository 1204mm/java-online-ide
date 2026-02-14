<template>
  <div class="result-panel" v-if="visible">
    <div class="result-header">
      <span class="result-title">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
        运行结果
        <span v-if="executionTime" class="execution-time">{{ executionTime }}ms</span>
      </span>
      <button class="close-btn" @click="$emit('close')">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>
    <div class="result-body">
      <div class="input-section">
        <div class="input-header">
          <div class="result-label">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M15 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9l-6-6zM5 19V5h9v5h5v9H5z"/>
            </svg>
            输入数据
          </div>
          <span class="input-hint">程序需要输入时，请先在此填写数据</span>
        </div>
        <textarea 
          v-model="localInput" 
          class="input-textarea" 
          placeholder="每行一个输入值，例如:&#10;10&#10;hello&#10;3.14"
          @input="$emit('update:input', localInput)"
        ></textarea>
      </div>
      
      <div class="output-section">
        <div class="result-label">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
          </svg>
          输出:
        </div>
        <div v-if="loading" class="result-loading">
          <div class="spinner"></div>
          <span>正在运行...</span>
        </div>
        <pre v-else class="result-output" :class="{ 'error-output': !result.success }"><template v-if="result.success">{{ result.output || '(无输出)' }}</template><template v-else-if="result.compileError">{{ result.compileError }}</template><template v-else-if="result.error">{{ result.error }}</template><template v-else>(无输出)</template></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  result: {
    type: Object,
    default: () => ({})
  },
  loading: {
    type: Boolean,
    default: false
  },
  executionTime: {
    type: Number,
    default: 0
  },
  input: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close', 'update:input'])

const localInput = ref(props.input)

watch(() => props.input, (newVal) => {
  localInput.value = newVal
})
</script>

<style scoped>
.result-panel {
  background-color: #1e1e1e;
  border-top: 1px solid #3c3c3c;
  display: flex;
  flex-direction: column;
  max-height: 400px;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: #252526;
  border-bottom: 1px solid #3c3c3c;
  min-height: 36px;
}

.result-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #d4d4d4;
  font-size: 13px;
  font-weight: 500;
}

.result-title svg {
  color: #2ea043;
}

.execution-time {
  background-color: #3c3c3c;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  color: #808080;
}

.close-btn {
  background: transparent;
  border: none;
  color: #808080;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background-color: #3c3c3c;
  color: #d4d4d4;
}

.result-body {
  flex: 1;
  overflow: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-section {
  display: flex;
  flex-direction: column;
  background-color: #2d2d2d;
  border-radius: 6px;
  padding: 10px;
  border: 1px solid #3c3c3c;
}

.input-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.input-hint {
  font-size: 11px;
  color: #f0b429;
  background-color: rgba(240, 180, 41, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
}

.output-section {
  display: flex;
  flex-direction: column;
}

.result-label {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #808080;
  font-size: 12px;
  margin-bottom: 6px;
}

.input-textarea {
  background-color: #1e1e1e;
  border: 1px solid #3c3c3c;
  border-radius: 4px;
  padding: 10px;
  color: #d4d4d4;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.5;
  resize: vertical;
  min-height: 60px;
  max-height: 120px;
}

.input-textarea:focus {
  outline: none;
  border-color: #4a90d9;
}

.input-textarea::placeholder {
  color: #606060;
}

.result-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #808080;
  padding: 20px;
  background-color: #2d2d2d;
  border-radius: 4px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #3c3c3c;
  border-top-color: #4a90d9;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.result-output {
  background-color: #2d2d2d;
  padding: 10px;
  border-radius: 4px;
  color: #d4d4d4;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
  min-height: 60px;
  text-indent: 0;
}

.result-output::before {
  content: none;
}

.error-output {
  color: #f85149;
  border-left: 3px solid #f85149;
}
</style>
