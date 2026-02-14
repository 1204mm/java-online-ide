const API_BASE_URL = 'http://localhost:8080/api'

export const codeApi = {
  async runCode(code, timeout = 5000) {
    try {
      const response = await fetch(`${API_BASE_URL}/run`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          timeout,
        }),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('运行代码失败:', error)
      return {
        success: false,
        error: error.message || '网络错误，请检查后端服务是否启动',
      }
    }
  },

  async getCompletions(className, prefix) {
    try {
      const params = new URLSearchParams()
      if (className) params.append('className', className)
      if (prefix) params.append('prefix', prefix)
      
      const response = await fetch(`${API_BASE_URL}/completions?${params.toString()}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('获取补全失败:', error)
      return []
    }
  },

  async getAllClasses() {
    try {
      const response = await fetch(`${API_BASE_URL}/classes`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('获取类列表失败:', error)
      return []
    }
  },

  async checkHealth() {
    try {
      const response = await fetch(`${API_BASE_URL}/health`)
      return response.ok
    } catch (error) {
      return false
    }
  },
}
