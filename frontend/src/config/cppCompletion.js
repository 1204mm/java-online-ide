export const setupCppCompletion = (monaco) => {
  const cppKeywords = [
    'int', 'long', 'short', 'char', 'float', 'double', 'void', 'bool', 'auto',
    'const', 'static', 'extern', 'register', 'volatile', 'signed', 'unsigned',
    'if', 'else', 'switch', 'case', 'default', 'break', 'continue',
    'for', 'while', 'do', 'goto', 'return', 'sizeof',
    'struct', 'union', 'enum', 'typedef',
    'class', 'public', 'private', 'protected', 'virtual', 'override', 'friend',
    'new', 'delete', 'this', 'operator', 'template', 'typename',
    'try', 'catch', 'throw', 'namespace', 'using',
    'inline', 'constexpr', 'nullptr', 'decltype', 'noexcept'
  ]

  const cppSTL = [
    'vector', 'list', 'deque', 'queue', 'stack', 'priority_queue',
    'set', 'multiset', 'unordered_set', 'map', 'multimap', 'unordered_map',
    'pair', 'tuple', 'array', 'bitset', 'string',
    'algorithm', 'cmath', 'cstring', 'cstdio', 'iostream', 'fstream', 'sstream',
    'iterator', 'memory', 'utility', 'functional', 'numeric', 'limits'
  ]

  const cppFunctions = {
    'vector': [
      { name: 'push_back', insertText: 'push_back(${1:val})', detail: 'void push_back(const T& val) - 添加元素到末尾' },
      { name: 'pop_back', insertText: 'pop_back()', detail: 'void pop_back() - 删除末尾元素' },
      { name: 'size', insertText: 'size()', detail: 'size_type size() - 返回元素个数' },
      { name: 'empty', insertText: 'empty()', detail: 'bool empty() - 判断是否为空' },
      { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
      { name: 'front', insertText: 'front()', detail: 'reference front() - 访问第一个元素' },
      { name: 'back', insertText: 'back()', detail: 'reference back() - 访问最后一个元素' },
      { name: 'begin', insertText: 'begin()', detail: 'iterator begin() - 返回首迭代器' },
      { name: 'end', insertText: 'end()', detail: 'iterator end() - 返回尾迭代器' },
      { name: 'rbegin', insertText: 'rbegin()', detail: 'reverse_iterator rbegin() - 返回反向首迭代器' },
      { name: 'rend', insertText: 'rend()', detail: 'reverse_iterator rend() - 返回反向尾迭代器' },
      { name: 'insert', insertText: 'insert(${1:pos}, ${2:val})', detail: 'iterator insert(iterator pos, const T& val) - 插入元素' },
      { name: 'erase', insertText: 'erase(${1:pos})', detail: 'iterator erase(iterator pos) - 删除元素' },
      { name: 'resize', insertText: 'resize(${1:n})', detail: 'void resize(size_type n) - 调整大小' },
      { name: 'reserve', insertText: 'reserve(${1:n})', detail: 'void reserve(size_type n) - 预留空间' },
      { name: 'at', insertText: 'at(${1:n})', detail: 'reference at(size_type n) - 访问元素(带边界检查)' },
    ],
    'string': [
      { name: 'size', insertText: 'size()', detail: 'size_type size() - 返回长度' },
      { name: 'length', insertText: 'length()', detail: 'size_type length() - 返回长度' },
      { name: 'empty', insertText: 'empty()', detail: 'bool empty() - 判断是否为空' },
      { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
      { name: 'push_back', insertText: 'push_back(${1:c})', detail: 'void push_back(char c) - 添加字符' },
      { name: 'pop_back', insertText: 'pop_back()', detail: 'void pop_back() - 删除最后一个字符' },
      { name: 'append', insertText: 'append(${1:str})', detail: 'string& append(const string& str) - 追加字符串' },
      { name: 'substr', insertText: 'substr(${1:pos}, ${2:n})', detail: 'string substr(size_type pos, size_type n) - 获取子串' },
      { name: 'find', insertText: 'find(${1:str})', detail: 'size_type find(const string& str) - 查找子串' },
      { name: 'rfind', insertText: 'rfind(${1:str})', detail: 'size_type rfind(const string& str) - 从后查找' },
      { name: 'replace', insertText: 'replace(${1:pos}, ${2:n}, ${3:str})', detail: 'string& replace(...) - 替换' },
      { name: 'insert', insertText: 'insert(${1:pos}, ${2:str})', detail: 'string& insert(size_type pos, const string& str) - 插入' },
      { name: 'erase', insertText: 'erase(${1:pos}, ${2:n})', detail: 'string& erase(size_type pos, size_type n) - 删除' },
      { name: 'c_str', insertText: 'c_str()', detail: 'const char* c_str() - 返回C字符串' },
      { name: 'at', insertText: 'at(${1:pos})', detail: 'char& at(size_type pos) - 访问字符' },
    ],
    'set': [
      { name: 'insert', insertText: 'insert(${1:val})', detail: 'pair<iterator,bool> insert(const T& val) - 插入元素' },
      { name: 'erase', insertText: 'erase(${1:val})', detail: 'size_type erase(const T& val) - 删除元素' },
      { name: 'find', insertText: 'find(${1:val})', detail: 'iterator find(const T& val) - 查找元素' },
      { name: 'count', insertText: 'count(${1:val})', detail: 'size_type count(const T& val) - 统计元素个数' },
      { name: 'size', insertText: 'size()', detail: 'size_type size() - 返回元素个数' },
      { name: 'empty', insertText: 'empty()', detail: 'bool empty() - 判断是否为空' },
      { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
      { name: 'begin', insertText: 'begin()', detail: 'iterator begin() - 返回首迭代器' },
      { name: 'end', insertText: 'end()', detail: 'iterator end() - 返回尾迭代器' },
      { name: 'lower_bound', insertText: 'lower_bound(${1:val})', detail: 'iterator lower_bound(const T& val) - 第一个>=val的位置' },
      { name: 'upper_bound', insertText: 'upper_bound(${1:val})', detail: 'iterator upper_bound(const T& val) - 第一个>val的位置' },
    ],
    'map': [
      { name: 'insert', insertText: 'insert(${1:val})', detail: 'pair<iterator,bool> insert(const pair<K,V>& val) - 插入键值对' },
      { name: 'erase', insertText: 'erase(${1:key})', detail: 'size_type erase(const K& key) - 删除元素' },
      { name: 'find', insertText: 'find(${1:key})', detail: 'iterator find(const K& key) - 查找元素' },
      { name: 'count', insertText: 'count(${1:key})', detail: 'size_type count(const K& key) - 统计元素个数' },
      { name: 'size', insertText: 'size()', detail: 'size_type size() - 返回元素个数' },
      { name: 'empty', insertText: 'empty()', detail: 'bool empty() - 判断是否为空' },
      { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
      { name: 'begin', insertText: 'begin()', detail: 'iterator begin() - 返回首迭代器' },
      { name: 'end', insertText: 'end()', detail: 'iterator end() - 返回尾迭代器' },
      { name: 'lower_bound', insertText: 'lower_bound(${1:key})', detail: 'iterator lower_bound(const K& key) - 第一个>=key的位置' },
      { name: 'upper_bound', insertText: 'upper_bound(${1:key})', detail: 'iterator upper_bound(const K& key) - 第一个>key的位置' },
      { name: 'at', insertText: 'at(${1:key})', detail: 'V& at(const K& key) - 访问元素(带边界检查)' },
    ],
    'queue': [
      { name: 'push', insertText: 'push(${1:val})', detail: 'void push(const T& val) - 入队' },
      { name: 'pop', insertText: 'pop()', detail: 'void pop() - 出队' },
      { name: 'front', insertText: 'front()', detail: 'reference front() - 访问队首' },
      { name: 'back', insertText: 'back()', detail: 'reference back() - 访问队尾' },
      { name: 'size', insertText: 'size()', detail: 'size_type size() - 返回元素个数' },
      { name: 'empty', insertText: 'empty()', detail: 'bool empty() - 判断是否为空' },
    ],
    'priority_queue': [
      { name: 'push', insertText: 'push(${1:val})', detail: 'void push(const T& val) - 入堆' },
      { name: 'pop', insertText: 'pop()', detail: 'void pop() - 出堆' },
      { name: 'top', insertText: 'top()', detail: 'const_reference top() - 访问堆顶' },
      { name: 'size', insertText: 'size()', detail: 'size_type size() - 返回元素个数' },
      { name: 'empty', insertText: 'empty()', detail: 'bool empty() - 判断是否为空' },
    ],
    'stack': [
      { name: 'push', insertText: 'push(${1:val})', detail: 'void push(const T& val) - 入栈' },
      { name: 'pop', insertText: 'pop()', detail: 'void pop() - 出栈' },
      { name: 'top', insertText: 'top()', detail: 'reference top() - 访问栈顶' },
      { name: 'size', insertText: 'size()', detail: 'size_type size() - 返回元素个数' },
      { name: 'empty', insertText: 'empty()', detail: 'bool empty() - 判断是否为空' },
    ],
    'deque': [
      { name: 'push_back', insertText: 'push_back(${1:val})', detail: 'void push_back(const T& val) - 添加到末尾' },
      { name: 'push_front', insertText: 'push_front(${1:val})', detail: 'void push_front(const T& val) - 添加到开头' },
      { name: 'pop_back', insertText: 'pop_back()', detail: 'void pop_back() - 删除末尾元素' },
      { name: 'pop_front', insertText: 'pop_front()', detail: 'void pop_front() - 删除开头元素' },
      { name: 'front', insertText: 'front()', detail: 'reference front() - 访问第一个元素' },
      { name: 'back', insertText: 'back()', detail: 'reference back() - 访问最后一个元素' },
      { name: 'size', insertText: 'size()', detail: 'size_type size() - 返回元素个数' },
      { name: 'empty', insertText: 'empty()', detail: 'bool empty() - 判断是否为空' },
      { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
      { name: 'at', insertText: 'at(${1:n})', detail: 'reference at(size_type n) - 访问元素' },
    ],
    'pair': [
      { name: 'first', insertText: 'first', detail: 'T1 first - 第一个元素' },
      { name: 'second', insertText: 'second', detail: 'T2 second - 第二个元素' },
    ],
  }

  const algorithmFunctions = [
    { name: 'sort', insertText: 'sort(${1:first}, ${2:last})', detail: 'void sort(RandomAccessIterator first, RandomAccessIterator last) - 排序' },
    { name: 'stable_sort', insertText: 'stable_sort(${1:first}, ${2:last})', detail: 'void stable_sort(...) - 稳定排序' },
    { name: 'binary_search', insertText: 'binary_search(${1:first}, ${2:last}, ${3:val})', detail: 'bool binary_search(...) - 二分查找' },
    { name: 'lower_bound', insertText: 'lower_bound(${1:first}, ${2:last}, ${3:val})', detail: 'Iterator lower_bound(...) - 第一个>=val的位置' },
    { name: 'upper_bound', insertText: 'upper_bound(${1:first}, ${2:last}, ${3:val})', detail: 'Iterator upper_bound(...) - 第一个>val的位置' },
    { name: 'find', insertText: 'find(${1:first}, ${2:last}, ${3:val})', detail: 'Iterator find(...) - 查找元素' },
    { name: 'find_if', insertText: 'find_if(${1:first}, ${2:last}, ${3:pred})', detail: 'Iterator find_if(...) - 条件查找' },
    { name: 'count', insertText: 'count(${1:first}, ${2:last}, ${3:val})', detail: 'difference_type count(...) - 统计元素个数' },
    { name: 'reverse', insertText: 'reverse(${1:first}, ${2:last})', detail: 'void reverse(...) - 反转' },
    { name: 'rotate', insertText: 'rotate(${1:first}, ${2:middle}, ${3:last})', detail: 'void rotate(...) - 旋转' },
    { name: 'swap', insertText: 'swap(${1:a}, ${2:b})', detail: 'void swap(T& a, T& b) - 交换' },
    { name: 'min', insertText: 'min(${1:a}, ${2:b})', detail: 'const T& min(const T& a, const T& b) - 最小值' },
    { name: 'max', insertText: 'max(${1:a}, ${2:b})', detail: 'const T& max(const T& a, const T& b) - 最大值' },
    { name: 'min_element', insertText: 'min_element(${1:first}, ${2:last})', detail: 'Iterator min_element(...) - 最小元素位置' },
    { name: 'max_element', insertText: 'max_element(${1:first}, ${2:last})', detail: 'Iterator max_element(...) - 最大元素位置' },
    { name: 'next_permutation', insertText: 'next_permutation(${1:first}, ${2:last})', detail: 'bool next_permutation(...) - 下一个排列' },
    { name: 'prev_permutation', insertText: 'prev_permutation(${1:first}, ${2:last})', detail: 'bool prev_permutation(...) - 上一个排列' },
    { name: 'nth_element', insertText: 'nth_element(${1:first}, ${2:nth}, ${3:last})', detail: 'void nth_element(...) - 第n小元素' },
    { name: 'unique', insertText: 'unique(${1:first}, ${2:last})', detail: 'Iterator unique(...) - 去重' },
    { name: 'remove', insertText: 'remove(${1:first}, ${2:last}, ${3:val})', detail: 'Iterator remove(...) - 移除元素' },
    { name: 'fill', insertText: 'fill(${1:first}, ${2:last}, ${3:val})', detail: 'void fill(...) - 填充' },
    { name: 'copy', insertText: 'copy(${1:first}, ${2:last}, ${3:result})', detail: 'OutputIterator copy(...) - 复制' },
    { name: 'for_each', insertText: 'for_each(${1:first}, ${2:last}, ${3:fn})', detail: 'Function for_each(...) - 遍历' },
    { name: 'accumulate', insertText: 'accumulate(${1:first}, ${2:last}, ${3:init})', detail: 'T accumulate(...) - 累加' },
  ]

  const cmathFunctions = [
    { name: 'abs', insertText: 'abs(${1:x})', detail: 'double abs(double x) - 绝对值' },
    { name: 'fabs', insertText: 'fabs(${1:x})', detail: 'double fabs(double x) - 绝对值' },
    { name: 'floor', insertText: 'floor(${1:x})', detail: 'double floor(double x) - 向下取整' },
    { name: 'ceil', insertText: 'ceil(${1:x})', detail: 'double ceil(double x) - 向上取整' },
    { name: 'round', insertText: 'round(${1:x})', detail: 'double round(double x) - 四舍五入' },
    { name: 'sqrt', insertText: 'sqrt(${1:x})', detail: 'double sqrt(double x) - 平方根' },
    { name: 'pow', insertText: 'pow(${1:base}, ${2:exp})', detail: 'double pow(double base, double exp) - 幂运算' },
    { name: 'exp', insertText: 'exp(${1:x})', detail: 'double exp(double x) - e^x' },
    { name: 'log', insertText: 'log(${1:x})', detail: 'double log(double x) - 自然对数' },
    { name: 'log10', insertText: 'log10(${1:x})', detail: 'double log10(double x) - 以10为底对数' },
    { name: 'sin', insertText: 'sin(${1:x})', detail: 'double sin(double x) - 正弦' },
    { name: 'cos', insertText: 'cos(${1:x})', detail: 'double cos(double x) - 余弦' },
    { name: 'tan', insertText: 'tan(${1:x})', detail: 'double tan(double x) - 正切' },
    { name: 'asin', insertText: 'asin(${1:x})', detail: 'double asin(double x) - 反正弦' },
    { name: 'acos', insertText: 'acos(${1:x})', detail: 'double acos(double x) - 反余弦' },
    { name: 'atan', insertText: 'atan(${1:x})', detail: 'double atan(double x) - 反正切' },
    { name: 'fmod', insertText: 'fmod(${1:x}, ${2:y})', detail: 'double fmod(double x, double y) - 取余' },
  ]

  const iostreamObjects = [
    { name: 'cin', insertText: 'cin', detail: 'istream cin - 标准输入流' },
    { name: 'cout', insertText: 'cout', detail: 'ostream cout - 标准输出流' },
    { name: 'cerr', insertText: 'cerr', detail: 'ostream cerr - 标准错误流' },
    { name: 'endl', insertText: 'endl', detail: 'ostream& endl - 换行并刷新' },
    { name: 'getline', insertText: 'getline(${1:is}, ${2:str})', detail: 'istream& getline(istream& is, string& str) - 读取一行' },
  ]

  const createCompletionItem = (label, kind, insertText, detail, sortText) => {
    return {
      label,
      kind,
      insertText,
      detail,
      documentation: detail,
      sortText,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }
  }

  const keywordCompletions = cppKeywords.map(keyword =>
    createCompletionItem(keyword, monaco.languages.CompletionItemKind.Keyword, keyword, `C++关键字: ${keyword}`, `1${keyword}`)
  )

  const stlCompletions = cppSTL.map(stl =>
    createCompletionItem(stl, monaco.languages.CompletionItemKind.Class, stl, `STL: ${stl}`, `2${stl}`)
  )

  const algorithmCompletions = algorithmFunctions.map(fn =>
    createCompletionItem(fn.name, monaco.languages.CompletionItemKind.Function, fn.insertText, fn.detail, `3${fn.name}`)
  )

  const cmathCompletions = cmathFunctions.map(fn =>
    createCompletionItem(fn.name, monaco.languages.CompletionItemKind.Function, fn.insertText, fn.detail, `3${fn.name}`)
  )

  const iostreamCompletions = iostreamObjects.map(obj =>
    createCompletionItem(obj.name, monaco.languages.CompletionItemKind.Variable, obj.insertText, obj.detail, `2${obj.name}`)
  )

  monaco.languages.registerCompletionItemProvider('cpp', {
    triggerCharacters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._:'.split(''),
    provideCompletionItems: (model, position) => {
      const lineContent = model.getLineContent(position.lineNumber)
      const textBeforeCursor = lineContent.substring(0, position.column - 1)

      const dotMatch = textBeforeCursor.match(/(\w+)\.\s*(\w*)$/)
      if (dotMatch) {
        const className = dotMatch[1]
        const methodPrefix = dotMatch[2]
        
        const methods = cppFunctions[className]
        if (methods) {
          const methodCompletions = methods
            .filter(m => !methodPrefix || m.name.toLowerCase().startsWith(methodPrefix.toLowerCase()))
            .map(m => ({
              label: m.name,
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: m.insertText,
              detail: m.detail,
              documentation: m.detail,
              sortText: `0${m.name}`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range: {
                startLineNumber: position.lineNumber,
                startColumn: position.column - methodPrefix.length,
                endLineNumber: position.lineNumber,
                endColumn: position.column
              }
            }))
          
          return { suggestions: methodCompletions }
        }
      }

      const arrowMatch = textBeforeCursor.match(/(\w+)->\s*(\w*)$/)
      if (arrowMatch) {
        const className = arrowMatch[1]
        const methodPrefix = arrowMatch[2]
        
        const methods = cppFunctions[className]
        if (methods) {
          const methodCompletions = methods
            .filter(m => !methodPrefix || m.name.toLowerCase().startsWith(methodPrefix.toLowerCase()))
            .map(m => ({
              label: m.name,
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: m.insertText,
              detail: m.detail,
              documentation: m.detail,
              sortText: `0${m.name}`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range: {
                startLineNumber: position.lineNumber,
                startColumn: position.column - methodPrefix.length,
                endLineNumber: position.lineNumber,
                endColumn: position.column
              }
            }))
          
          return { suggestions: methodCompletions }
        }
      }

      const wordMatch = textBeforeCursor.match(/(\w+)$/)
      const currentWord = wordMatch ? wordMatch[1] : ''

      const allCompletions = [
        ...keywordCompletions,
        ...stlCompletions,
        ...algorithmCompletions,
        ...cmathCompletions,
        ...iostreamCompletions
      ]

      const filteredCompletions = allCompletions.filter(item => {
        if (!currentWord) return true
        return item.label.toLowerCase().startsWith(currentWord.toLowerCase())
      })

      return {
        suggestions: filteredCompletions.map(item => ({
          ...item,
          range: {
            startLineNumber: position.lineNumber,
            startColumn: position.column - currentWord.length,
            endLineNumber: position.lineNumber,
            endColumn: position.column
          }
        }))
      }
    }
  })

  monaco.languages.registerCompletionItemProvider('c', {
    triggerCharacters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._:'.split(''),
    provideCompletionItems: (model, position) => {
      const lineContent = model.getLineContent(position.lineNumber)
      const textBeforeCursor = lineContent.substring(0, position.column - 1)

      const wordMatch = textBeforeCursor.match(/(\w+)$/)
      const currentWord = wordMatch ? wordMatch[1] : ''

      const cKeywords = [
        'int', 'long', 'short', 'char', 'float', 'double', 'void',
        'const', 'static', 'extern', 'register', 'volatile', 'signed', 'unsigned',
        'if', 'else', 'switch', 'case', 'default', 'break', 'continue',
        'for', 'while', 'do', 'goto', 'return', 'sizeof',
        'struct', 'union', 'enum', 'typedef'
      ]

      const cFunctions = [
        { name: 'printf', insertText: 'printf("${1:format}", ${2:args})', detail: 'int printf(const char* format, ...) - 格式化输出' },
        { name: 'scanf', insertText: 'scanf("${1:format}", ${2:args})', detail: 'int scanf(const char* format, ...) - 格式化输入' },
        { name: 'strlen', insertText: 'strlen(${1:str})', detail: 'size_t strlen(const char* str) - 字符串长度' },
        { name: 'strcpy', insertText: 'strcpy(${1:dest}, ${2:src})', detail: 'char* strcpy(char* dest, const char* src) - 复制字符串' },
        { name: 'strcat', insertText: 'strcat(${1:dest}, ${2:src})', detail: 'char* strcat(char* dest, const char* src) - 连接字符串' },
        { name: 'strcmp', insertText: 'strcmp(${1:str1}, ${2:str2})', detail: 'int strcmp(const char* str1, const char* str2) - 比较字符串' },
        { name: 'memcpy', insertText: 'memcpy(${1:dest}, ${2:src}, ${3:n})', detail: 'void* memcpy(void* dest, const void* src, size_t n) - 内存复制' },
        { name: 'memset', insertText: 'memset(${1:ptr}, ${2:value}, ${3:n})', detail: 'void* memset(void* ptr, int value, size_t n) - 内存填充' },
        { name: 'malloc', insertText: 'malloc(${1:size})', detail: 'void* malloc(size_t size) - 动态分配内存' },
        { name: 'free', insertText: 'free(${1:ptr})', detail: 'void free(void* ptr) - 释放内存' },
        { name: 'abs', insertText: 'abs(${1:x})', detail: 'int abs(int x) - 绝对值' },
        { name: 'sqrt', insertText: 'sqrt(${1:x})', detail: 'double sqrt(double x) - 平方根' },
        { name: 'pow', insertText: 'pow(${1:base}, ${2:exp})', detail: 'double pow(double base, double exp) - 幂运算' },
        { name: 'floor', insertText: 'floor(${1:x})', detail: 'double floor(double x) - 向下取整' },
        { name: 'ceil', insertText: 'ceil(${1:x})', detail: 'double ceil(double x) - 向上取整' },
        { name: 'getchar', insertText: 'getchar()', detail: 'int getchar() - 读取一个字符' },
        { name: 'putchar', insertText: 'putchar(${1:c})', detail: 'int putchar(int c) - 输出一个字符' },
        { name: 'gets', insertText: 'gets(${1:str})', detail: 'char* gets(char* str) - 读取一行(不安全)' },
        { name: 'puts', insertText: 'puts(${1:str})', detail: 'int puts(const char* str) - 输出字符串' },
        { name: 'fopen', insertText: 'fopen(${1:filename}, ${2:mode})', detail: 'FILE* fopen(const char* filename, const char* mode) - 打开文件' },
        { name: 'fclose', insertText: 'fclose(${1:stream})', detail: 'int fclose(FILE* stream) - 关闭文件' },
        { name: 'qsort', insertText: 'qsort(${1:base}, ${2:nmemb}, ${3:size}, ${4:compar})', detail: 'void qsort(...) - 快速排序' },
        { name: 'bsearch', insertText: 'bsearch(${1:key}, ${2:base}, ${3:nmemb}, ${4:size}, ${5:compar})', detail: 'void* bsearch(...) - 二分查找' },
      ]

      const keywordCompletions = cKeywords.map(keyword =>
        createCompletionItem(keyword, monaco.languages.CompletionItemKind.Keyword, keyword, `C关键字: ${keyword}`, `1${keyword}`)
      )

      const functionCompletions = cFunctions.map(fn =>
        createCompletionItem(fn.name, monaco.languages.CompletionItemKind.Function, fn.insertText, fn.detail, `2${fn.name}`)
      )

      const allCompletions = [...keywordCompletions, ...functionCompletions]

      const filteredCompletions = allCompletions.filter(item => {
        if (!currentWord) return true
        return item.label.toLowerCase().startsWith(currentWord.toLowerCase())
      })

      return {
        suggestions: filteredCompletions.map(item => ({
          ...item,
          range: {
            startLineNumber: position.lineNumber,
            startColumn: position.column - currentWord.length,
            endLineNumber: position.lineNumber,
            endColumn: position.column
          }
        }))
      }
    }
  })
}
