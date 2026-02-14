# Java算法刷题编辑器

一个轻量级的Java代码编辑器网页版，基于Vue3 + Monaco Editor构建，提供IntelliJ IDEA风格的开发体验，适用于算法学习和日常练习。

## 功能特性

### 核心功能
- 📝 **Java代码编辑** - 基于Monaco Editor的高性能编辑器
- 🎨 **IntelliJ IDEA主题** - 熟悉的深色主题和配色方案
- 📋 **自动括号匹配** - 自动补全括号，提升编码效率
- 🔧 **代码补全** - 关键词联想、变量识别、代码片段
- ⌨️ **IntelliJ快捷键** - 熟悉的键盘操作，如Ctrl+D复制行
- 🔍 **查找替换** - 内置的查找和替换功能
- 📐 **代码格式化** - 简单的Java代码格式化

### Markdown笔记面板
- 📝 **Markdown编辑器** - 支持实时预览
- 🔄 **三种视图模式** - 编辑模式、预览模式、分屏模式
- 📐 **LaTeX公式** - 支持数学公式渲染
- 📋 **代码块复制** - 一键复制题目样例输入输出
- 📱 **可收缩面板** - 类似Trae的可调整宽度侧边栏
- 💾 **自动保存** - Markdown内容自动保存到本地存储

### 变量和方法补全
- 🔍 **变量识别** - 自动识别代码中的变量并补全
- 🔧 **方法识别** - 自动识别自定义方法
- 📦 **构造方法识别** - 支持构造方法补全

## 快捷键

| 功能 | 快捷键 |
|------|--------|
| 复制当前行 | `Ctrl+D` |
| 删除当前行 | `Ctrl+Y` |
| 上移当前行 | `Alt+Shift+↑` |
| 下移当前行 | `Alt+Shift+↓` |
| 格式化代码 | `Ctrl+Alt+L` |
| 注释/取消注释 | `Ctrl+/` |
| 查找 | `Ctrl+F` |
| 替换 | `Ctrl+R` |
| 代码补全 | `Ctrl+Space` |
| 缩放字体 | `Ctrl+滚轮` |

## 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Monaco Editor** - VS Code同款编辑器组件
- **Vite** - 下一代前端构建工具

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 使用场景

这个编辑器特别适合：

1. **算法刷题** - 配合左侧Markdown记录题目描述和笔记
2. **算法学习** - 一边写代码一边记录思路
3. **日常练习** - 不需要打开完整的IDE
4. **快速原型** - 快速编写和测试Java代码片段

## 项目结构

```
代码编辑器网页版/
├── src/
│   ├── components/
│   │   ├── MonacoEditor.vue    # 核心编辑器组件
│   │   ├── ToolBar.vue         # 工具栏
│   │   ├── StatusBar.vue       # 状态栏
│   │   ├── SettingsPanel.vue   # 设置面板
│   │   └── MarkdownPanel.vue   # Markdown笔记面板
│   ├── config/
│   │   ├── javaConfig.js       # Java语法配置
│   │   ├── autoBrackets.js     # 自动括号匹配
│   │   ├── javaCompletion.js   # Java代码补全
│   │   ├── codeSnippets.js     # 代码片段
│   │   ├── keybindings.js      # IntelliJ快捷键
│   │   └── javaFormatter.js    # Java代码格式化
│   ├── styles/
│   │   └── main.css             # 全局样式
│   ├── App.vue                  # 主应用组件
│   └── main.js                  # 入口文件
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 浏览器支持

- Chrome (推荐)
- Edge
- Firefox
- Safari

## License

MIT License
