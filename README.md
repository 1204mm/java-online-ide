# Java算法刷题编辑器

一个轻量级的在线代码编辑器网页版，基于Vue3 + Monaco Editor构建，提供IntelliJ IDEA风格的开发体验，支持Java、C、C++三种语言，适用于算法学习和日常练习。

## 功能特性

### 核心功能
- 📝 **多语言支持** - 支持Java、C、C++三种编程语言
- 🎨 **IntelliJ IDEA主题** - 熟悉的深色主题和配色方案
- 📋 **自动括号匹配** - 自动补全括号，提升编码效率
- 🔧 **智能代码补全** - 关键词联想、变量识别、代码片段、常用类方法
- ⌨️ **IntelliJ快捷键** - 熟悉的键盘操作，如Ctrl+D复制行
- 🔍 **查找替换** - 内置的查找和替换功能
- 📐 **代码格式化** - 简单的代码格式化
- 🚀 **代码运行** - 实时运行代码，支持输入输出
- 🔒 **安全沙箱** - 运行代码时的安全保护

### Markdown笔记面板
- 📝 **Markdown编辑器** - 支持实时预览
- 🔄 **三种视图模式** - 编辑模式、预览模式、分屏模式
- 📐 **LaTeX公式** - 支持数学公式渲染
- 📋 **代码块复制** - 一键复制题目样例输入输出
- 📱 **可收缩面板** - 可调整宽度侧边栏
- 💾 **自动保存** - Markdown内容自动保存到本地存储

### 代码补全
- 🔍 **变量识别** - 自动识别代码中的变量并补全
- 🔧 **方法识别** - 自动识别自定义方法
- 📚 **Java常用类** - Math、String、Scanner、Collections、Arrays等
- 📦 **C++ STL** - vector、string、set、map、queue、stack等
- 📖 **C标准库** - stdio、stdlib、string、math等

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
| 运行代码 | `F5` |

## 技术栈

### 前端
- **Vue 3** - 渐进式JavaScript框架
- **Monaco Editor** - VS Code同款编辑器组件
- **Vite** - 下一代前端构建工具

### 后端
- **Spring Boot 2.7** - Java后端框架
- **Java 8** - 兼容Java 8
- **Maven** - 项目管理

## 快速开始

### 前端启动
```bash
cd frontend
npm install
npm run dev
```

### 后端启动
```bash
cd backend
mvn spring-boot:run
```

### 访问
- 前端：http://localhost:5173
- 后端：http://localhost:8080

## 使用流程

1. **选择语言** - 工具栏下拉框选择 Java / C++ / C
2. **编写代码** - 在编辑器中编写代码
3. **运行代码** - 点击运行按钮或按F5
4. **输入数据** - 如果程序需要输入，在输入框中填写数据
5. **查看结果** - 运行结果会显示在输出面板中

## 示例

### Java示例
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a + b);
    }
}
```

### C++示例
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}
```

### C示例
```c
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d\n", a + b);
    return 0;
}
```

**输入：**
```
10
20
```

**输出：**
```
30
```

## 项目结构

```
代码编辑器网页版/
├── backend/                          # Spring Boot后端
│   ├── pom.xml
│   └── src/main/java/com/editor/
│       ├── JavaOnlineIdeApplication.java     # 主类
│       ├── config/CorsConfig.java           # CORS配置
│       ├── controller/CodeController.java   # REST接口
│       ├── dto/                             # 数据传输对象
│       ├── service/                         # 业务服务
│       │   ├── CodeExecutionService.java    # Java执行服务
│       │   ├── CppExecutionService.java     # C/C++执行服务
│       │   └── CodeCompletionService.java   # 代码补全服务
│       └── sandbox/SandboxSecurityManager.java   # 安全沙箱
├── frontend/                          # Vue前端
│   ├── public/
│   ├── src/
│   │   ├── api/codeApi.js             # API服务
│   │   ├── components/
│   │   │   ├── MonacoEditor.vue       # 核心编辑器
│   │   │   ├── ToolBar.vue            # 工具栏
│   │   │   ├── StatusBar.vue          # 状态栏
│   │   │   ├── MarkdownPanel.vue      # Markdown面板
│   │   │   ├── ResultPanel.vue        # 运行结果面板
│   │   │   └── SettingsPanel.vue      # 设置面板
│   │   ├── config/                    # 编辑器配置
│   │   │   ├── javaCompletion.js      # Java补全
│   │   │   ├── cppCompletion.js       # C/C++补全
│   │   │   ├── javaConfig.js          # Java语法配置
│   │   │   ├── autoBrackets.js        # 自动括号
│   │   │   ├── codeSnippets.js        # 代码片段
│   │   │   ├── keybindings.js         # 快捷键
│   │   │   └── javaFormatter.js       # 代码格式化
│   │   ├── styles/                    # 样式文件
│   │   ├── App.vue                    # 主应用
│   │   └── main.js                    # 入口文件
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## API接口

### 1. 代码运行
```
POST /api/run
Content-Type: application/json

{
  "code": "...",
  "input": "",
  "language": "java",  // java / cpp / c
  "timeout": 30000
}
```

### 2. 代码补全
```
GET /api/completions?className=String&prefix=ind&language=java
```

### 3. 获取所有类
```
GET /api/classes?language=java
```

## 代码补全支持

### Java
| 类别 | 类名 |
|------|------|
| 包装类 | Integer, Long, Double, Float, Boolean, Character, Byte, Short |
| 字符串 | String, StringBuilder, StringBuffer |
| 数学 | Math, Random |
| 集合 | List, ArrayList, LinkedList, Set, HashSet, TreeSet, Map, HashMap, TreeMap |
| 队列 | Queue, Deque, Stack, PriorityQueue |
| 工具 | Arrays, Collections, Comparator |
| 输入输出 | Scanner, System |
| 大数 | BigInteger, BigDecimal |

### C++
| 类别 | 内容 |
|------|------|
| STL容器 | vector, string, set, map, queue, stack, deque, priority_queue |
| 算法库 | sort, binary_search, lower_bound, upper_bound, find, min, max... |
| 数学库 | abs, sqrt, pow, floor, ceil, sin, cos, tan... |
| 输入输出 | cin, cout, endl, getline |

### C
| 类别 | 函数 |
|------|------|
| 输入输出 | printf, scanf, getchar, putchar, gets, puts |
| 字符串 | strlen, strcpy, strcat, strcmp |
| 内存 | malloc, free, memcpy, memset |
| 数学 | abs, sqrt, pow, floor, ceil, sin, cos |
| 排序查找 | qsort, bsearch |

## 注意事项

- C/C++运行需要服务器安装 `gcc` 和 `g++` 编译器
- Windows环境需要安装MinGW或类似工具
- 如果未安装编译器，会提示错误信息

## 浏览器支持

- Chrome (推荐)
- Edge
- Firefox
- Safari

## License

MIT License
