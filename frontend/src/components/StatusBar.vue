<template>
  <div class="status-bar">
    <div class="status-left">
      <span class="status-item">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        就绪
      </span>
      <span class="status-item" v-if="lineCount > 0">
        共 {{ lineCount }} 行
      </span>
    </div>
    
    <div class="status-center">
      <span class="status-item language-badge">
        {{ language }}
      </span>
    </div>
    
    <div class="status-right">
      <span class="status-item">
        行 {{ line }}, 列 {{ column }}
      </span>
      <span class="status-item">
        UTF-8
      </span>
      <span class="status-item cursor-type">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"/>
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  line: {
    type: Number,
    default: 1
  },
  column: {
    type: Number,
    default: 1
  },
  language: {
    type: String,
    default: 'Java'
  }
})

const lineCount = ref(0)

onMounted(() => {
  lineCount.value = 1
})
</script>

<style scoped>
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 12px;
  background-color: var(--statusbar-bg, #007acc);
  color: white;
  font-size: 12px;
  min-height: 24px;
}

.status-left,
.status-center,
.status-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 2px;
  cursor: default;
  user-select: none;
}

.status-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.status-item svg {
  opacity: 0.9;
}

.language-badge {
  background-color: rgba(255, 255, 255, 0.15);
  font-weight: 500;
}

.cursor-type {
  cursor: pointer;
}
</style>
