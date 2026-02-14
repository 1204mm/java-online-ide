import { javaKeywords, javaTypes } from './javaConfig'

export const setupJavaCompletion = (monaco) => {
  const javaCommonClasses = [
    'String', 'Integer', 'Long', 'Double', 'Float', 'Boolean', 'Character',
    'Byte', 'Short', 'Object', 'Class', 'System', 'Math', 'Exception',
    'RuntimeException', 'Thread', 'Runnable', 'StringBuilder', 'StringBuffer',
    'ArrayList', 'LinkedList', 'HashMap', 'TreeMap', 'HashSet', 'TreeSet',
    'Arrays', 'Collections', 'Optional', 'Stream', 'Collectors', 'File',
    'Path', 'Scanner', 'BufferedReader', 'BufferedWriter', 'FileReader',
    'FileWriter', 'InputStream', 'OutputStream', 'FileInputStream',
    'FileOutputStream', 'Serializable', 'Comparable', 'Comparator',
    'Iterator', 'List', 'Map', 'Set', 'Queue', 'Deque'
  ]

  const javaAnnotations = [
    'Override', 'Deprecated', 'SuppressWarnings', 'FunctionalInterface',
    'SafeVarargs', 'Native', 'Target', 'Retention', 'Documented', 'Inherited',
    'Repeatable'
  ]

  const createCompletionItem = (label, kind, insertText, detail, documentation, sortText) => {
    return {
      label,
      kind,
      insertText,
      detail,
      documentation,
      sortText,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }
  }

  const keywordCompletions = javaKeywords.map(keyword => 
    createCompletionItem(
      keyword,
      monaco.languages.CompletionItemKind.Keyword,
      keyword,
      'Java关键字',
      `Java关键字: ${keyword}`,
      `1${keyword}`
    )
  )

  const typeCompletions = javaTypes.map(type =>
    createCompletionItem(
      type,
      monaco.languages.CompletionItemKind.Class,
      type,
      'Java类',
      `Java类: ${type}`,
      `2${type}`
    )
  )

  const classCompletions = javaCommonClasses.map(cls =>
    createCompletionItem(
      cls,
      monaco.languages.CompletionItemKind.Class,
      cls,
      'Java类',
      `Java类: ${cls}`,
      `2${cls}`
    )
  )

  const annotationCompletions = javaAnnotations.map(anno =>
    createCompletionItem(
      `@${anno}`,
      monaco.languages.CompletionItemKind.Function,
      `@${anno}`,
      'Java注解',
      `Java注解: @${anno}`,
      `3${anno}`
    )
  )

  const methodCompletions = [
    createCompletionItem(
      'System.out.println',
      monaco.languages.CompletionItemKind.Method,
      'System.out.println(${1:args})',
      'System.out.println()',
      '打印输出到标准输出流',
      '4println'
    ),
    createCompletionItem(
      'System.out.print',
      monaco.languages.CompletionItemKind.Method,
      'System.out.print(${1:args})',
      'System.out.print()',
      '打印输出到标准输出流（不换行）',
      '4print'
    ),
    createCompletionItem(
      'System.err.println',
      monaco.languages.CompletionItemKind.Method,
      'System.err.println(${1:args})',
      'System.err.println()',
      '打印输出到标准错误流',
      '4errprintln'
    ),
    createCompletionItem(
      'equals',
      monaco.languages.CompletionItemKind.Method,
      'equals(${1:obj})',
      'equals(Object obj)',
      '比较对象是否相等',
      '4equals'
    ),
    createCompletionItem(
      'hashCode',
      monaco.languages.CompletionItemKind.Method,
      'hashCode()',
      'hashCode()',
      '返回对象的哈希码',
      '4hashCode'
    ),
    createCompletionItem(
      'toString',
      monaco.languages.CompletionItemKind.Method,
      'toString()',
      'toString()',
      '返回对象的字符串表示',
      '4toString'
    ),
    createCompletionItem(
      'getClass',
      monaco.languages.CompletionItemKind.Method,
      'getClass()',
      'getClass()',
      '返回对象的运行时类',
      '4getClass'
    ),
    createCompletionItem(
      'length',
      monaco.languages.CompletionItemKind.Property,
      'length',
      'length',
      '数组或字符串的长度',
      '4length'
    ),
    createCompletionItem(
      'charAt',
      monaco.languages.CompletionItemKind.Method,
      'charAt(${1:index})',
      'charAt(int index)',
      '返回指定索引处的字符',
      '4charAt'
    ),
    createCompletionItem(
      'substring',
      monaco.languages.CompletionItemKind.Method,
      'substring(${1:beginIndex})',
      'substring(int beginIndex)',
      '返回子字符串',
      '4substring'
    ),
    createCompletionItem(
      'indexOf',
      monaco.languages.CompletionItemKind.Method,
      'indexOf(${1:str})',
      'indexOf(String str)',
      '返回指定子字符串的索引',
      '4indexOf'
    ),
    createCompletionItem(
      'trim',
      monaco.languages.CompletionItemKind.Method,
      'trim()',
      'trim()',
      '去除字符串首尾空白',
      '4trim'
    ),
    createCompletionItem(
      'split',
      monaco.languages.CompletionItemKind.Method,
      'split(${1:regex})',
      'split(String regex)',
      '根据正则表达式分割字符串',
      '4split'
    ),
    createCompletionItem(
      'toLowerCase',
      monaco.languages.CompletionItemKind.Method,
      'toLowerCase()',
      'toLowerCase()',
      '转换为小写',
      '4toLowerCase'
    ),
    createCompletionItem(
      'toUpperCase',
      monaco.languages.CompletionItemKind.Method,
      'toUpperCase()',
      'toUpperCase()',
      '转换为大写',
      '4toUpperCase'
    ),
    createCompletionItem(
      'parseInt',
      monaco.languages.CompletionItemKind.Method,
      'Integer.parseInt(${1:s})',
      'Integer.parseInt(String s)',
      '将字符串解析为整数',
      '4parseInt'
    ),
    createCompletionItem(
      'parseLong',
      monaco.languages.CompletionItemKind.Method,
      'Long.parseLong(${1:s})',
      'Long.parseLong(String s)',
      '将字符串解析为长整数',
      '4parseLong'
    ),
    createCompletionItem(
      'parseDouble',
      monaco.languages.CompletionItemKind.Method,
      'Double.parseDouble(${1:s})',
      'Double.parseDouble(String s)',
      '将字符串解析为双精度浮点数',
      '4parseDouble'
    ),
    createCompletionItem(
      'valueOf',
      monaco.languages.CompletionItemKind.Method,
      'valueOf(${1:value})',
      'valueOf(...)',
      '返回指定值的字符串表示',
      '4valueOf'
    ),
    createCompletionItem(
      'format',
      monaco.languages.CompletionItemKind.Method,
      'String.format(${1:format}, ${2:args})',
      'String.format(String format, Object... args)',
      '格式化字符串',
      '4format'
    )
  ]

  const modifierCompletions = [
    createCompletionItem(
      'public static void main',
      monaco.languages.CompletionItemKind.Snippet,
      'public static void main(String[] args) {\n\t${1:}\n}',
      'main方法',
      'Java程序入口方法',
      '0main'
    ),
    createCompletionItem(
      'public',
      monaco.languages.CompletionItemKind.Keyword,
      'public',
      'public',
      '公共访问修饰符',
      '1public'
    ),
    createCompletionItem(
      'private',
      monaco.languages.CompletionItemKind.Keyword,
      'private',
      'private',
      '私有访问修饰符',
      '1private'
    ),
    createCompletionItem(
      'protected',
      monaco.languages.CompletionItemKind.Keyword,
      'protected',
      'protected',
      '受保护访问修饰符',
      '1protected'
    ),
    createCompletionItem(
      'static',
      monaco.languages.CompletionItemKind.Keyword,
      'static',
      'static',
      '静态修饰符',
      '1static'
    ),
    createCompletionItem(
      'final',
      monaco.languages.CompletionItemKind.Keyword,
      'final',
      'final',
      '最终修饰符',
      '1final'
    ),
    createCompletionItem(
      'abstract',
      monaco.languages.CompletionItemKind.Keyword,
      'abstract',
      'abstract',
      '抽象修饰符',
      '1abstract'
    ),
    createCompletionItem(
      'synchronized',
      monaco.languages.CompletionItemKind.Keyword,
      'synchronized',
      'synchronized',
      '同步修饰符',
      '1synchronized'
    )
  ]

  const allCompletions = [
    ...modifierCompletions,
    ...keywordCompletions,
    ...typeCompletions,
    ...classCompletions,
    ...annotationCompletions,
    ...methodCompletions
  ]

  monaco.languages.registerCompletionItemProvider('java', {
    triggerCharacters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._@'.split(''),
    provideCompletionItems: (model, position) => {
      const textUntilPosition = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column
      })

      const lineContent = model.getLineContent(position.lineNumber)
      const textBeforeCursor = lineContent.substring(0, position.column - 1)

      const wordMatch = textBeforeCursor.match(/(\w+)$/)
      const currentWord = wordMatch ? wordMatch[1] : ''

      const fullContent = model.getValue()
      const variableCompletions = extractVariables(fullContent, monaco)
      const methodCompletions = extractMethods(fullContent, monaco)

      const combinedCompletions = [...allCompletions, ...variableCompletions, ...methodCompletions]

      const filteredCompletions = combinedCompletions.filter(item => {
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

const extractVariables = (code, monaco) => {
  const variables = []
  const seenVars = new Set()

  const typePattern = /\b(?:int|long|short|byte|float|double|boolean|char|String|Integer|Long|Double|Float|Boolean|Character|Object|Class|List|ArrayList|Map|HashMap|Set|HashSet|Scanner|StringBuilder|Thread|Runnable|File|Path|InputStream|OutputStream|Reader|Writer|Exception|Runnable|var)\s+(\w+)\s*[=;]/
  
  let match
  const typeRegex = new RegExp(typePattern.source, 'g')
  while ((match = typeRegex.exec(code)) !== null) {
    const varName = match[1]
    if (!seenVars.has(varName) && !javaKeywords.includes(varName)) {
      seenVars.add(varName)
      variables.push({
        label: varName,
        kind: monaco.languages.CompletionItemKind.Variable,
        insertText: varName,
        detail: '局部变量',
        documentation: `变量: ${varName}`,
        sortText: `0${varName}`
      })
    }
  }

  const arrayPattern = /\b(?:int|long|short|byte|float|double|boolean|char|String|Integer|Long|Double|Float|Boolean|Character|Object)\s*\[\]\s+(\w+)\s*[=;]/
  const arrayRegex = new RegExp(arrayPattern.source, 'g')
  while ((match = arrayRegex.exec(code)) !== null) {
    const varName = match[1]
    if (!seenVars.has(varName) && !javaKeywords.includes(varName)) {
      seenVars.add(varName)
      variables.push({
        label: varName,
        kind: monaco.languages.CompletionItemKind.Variable,
        insertText: varName,
        detail: '数组变量',
        documentation: `数组: ${varName}`,
        sortText: `0${varName}`
      })
    }
  }

  const fieldPattern = /(?:private|protected|public)?\s*(?:static\s+)?(?:final\s+)?(?:int|long|short|byte|float|double|boolean|char|String|Integer|Long|Double|Float|Boolean|Character|Object|List|ArrayList|Map|HashMap|Set|HashSet)\s+(\w+)\s*[;=]/
  const fieldRegex = new RegExp(fieldPattern.source, 'g')
  while ((match = fieldRegex.exec(code)) !== null) {
    const varName = match[1]
    if (!seenVars.has(varName) && !javaKeywords.includes(varName)) {
      seenVars.add(varName)
      variables.push({
        label: varName,
        kind: monaco.languages.CompletionItemKind.Field,
        insertText: varName,
        detail: '字段',
        documentation: `字段: ${varName}`,
        sortText: `0${varName}`
      })
    }
  }

  const paramPattern = /\(([^)]*)\)/
  const methodMatches = code.match(/(?:public|private|protected)?\s*(?:static\s+)?(?:\w+(?:<[^>]+>)?)\s+\w+\s*\([^)]*\)/g)
  if (methodMatches) {
    methodMatches.forEach(method => {
      const paramMatch = method.match(paramPattern)
      if (paramMatch) {
        const params = paramMatch[1].split(',')
        params.forEach(param => {
          const paramParts = param.trim().split(/\s+/)
          if (paramParts.length >= 2) {
            const paramName = paramParts[paramParts.length - 1].replace(/\[\]/g, '')
            if (paramName && !seenVars.has(paramName) && !javaKeywords.includes(paramName) && /^[a-zA-Z_]\w*$/.test(paramName)) {
              seenVars.add(paramName)
              variables.push({
                label: paramName,
                kind: monaco.languages.CompletionItemKind.Variable,
                insertText: paramName,
                detail: '参数',
                documentation: `方法参数: ${paramName}`,
                sortText: `0${paramName}`
              })
            }
          }
        })
      }
    })
  }

  const forPattern = /for\s*\(\s*(?:int|long|var)\s+(\w+)\s*:/
  const forRegex = new RegExp(forPattern.source, 'g')
  while ((match = forRegex.exec(code)) !== null) {
    const varName = match[1]
    if (!seenVars.has(varName) && !javaKeywords.includes(varName)) {
      seenVars.add(varName)
      variables.push({
        label: varName,
        kind: monaco.languages.CompletionItemKind.Variable,
        insertText: varName,
        detail: '循环变量',
        documentation: `循环变量: ${varName}`,
        sortText: `0${varName}`
      })
    }
  }

  const forOldPattern = /for\s*\(\s*(?:int|long|var)\s+(\w+)\s*=/
  const forOldRegex = new RegExp(forOldPattern.source, 'g')
  while ((match = forOldRegex.exec(code)) !== null) {
    const varName = match[1]
    if (!seenVars.has(varName) && !javaKeywords.includes(varName)) {
      seenVars.add(varName)
      variables.push({
        label: varName,
        kind: monaco.languages.CompletionItemKind.Variable,
        insertText: varName,
        detail: '循环变量',
        documentation: `循环变量: ${varName}`,
        sortText: `0${varName}`
      })
    }
  }

  return variables
}

const extractMethods = (code, monaco) => {
  const methods = []
  const seenMethods = new Set()

  const methodPattern = /(?:public|private|protected)?\s*(?:static\s+)?(?:final\s+)?(?:abstract\s+)?(?:synchronized\s+)?(?:\w+(?:<[^>]+>)?)\s+(\w+)\s*\(([^)]*)\)\s*(?:throws\s+[\w\s,]+)?\s*\{/
  
  let match
  const methodRegex = new RegExp(methodPattern.source, 'g')
  while ((match = methodRegex.exec(code)) !== null) {
    const methodName = match[1]
    const params = match[2]
    
    if (!seenMethods.has(methodName) && 
        !javaKeywords.includes(methodName) &&
        methodName !== 'main' &&
        !['int', 'long', 'short', 'byte', 'float', 'double', 'boolean', 'char', 'String', 'void', 'Integer', 'Long', 'Double', 'Float', 'Boolean', 'Character', 'Object', 'Class', 'List', 'ArrayList', 'Map', 'HashMap', 'Set', 'HashSet'].includes(methodName)) {
      seenMethods.add(methodName)
      
      let insertText = methodName + '()'
      let detail = '方法'
      
      if (params && params.trim()) {
        const paramList = params.split(',').map(p => p.trim().split(/\s+/).pop()).filter(p => p)
        insertText = methodName + '(' + paramList.map((p, i) => '${' + (i + 1) + ':}').join(', ') + ')'
        detail = `方法 (${params.trim()})`
      }
      
      methods.push({
        label: methodName,
        kind: monaco.languages.CompletionItemKind.Method,
        insertText: insertText,
        detail: detail,
        documentation: `自定义方法: ${methodName}`,
        sortText: `0${methodName}`,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      })
    }
  }

  const constructorPattern = /(?:public|private|protected)?\s+(\w+)\s*\(([^)]*)\)\s*\{/
  const constructorRegex = new RegExp(constructorPattern.source, 'g')
  while ((match = constructorRegex.exec(code)) !== null) {
    const constructorName = match[1]
    const params = match[2]
    
    if (!seenMethods.has(constructorName) && 
        constructorName.charAt(0) === constructorName.charAt(0).toUpperCase() &&
        !['String', 'Integer', 'Long', 'Double', 'Float', 'Boolean', 'Character', 'Object', 'Class', 'Exception', 'Thread', 'Scanner'].includes(constructorName)) {
      seenMethods.add(constructorName)
      
      let insertText = constructorName + '()'
      let detail = '构造方法'
      
      if (params && params.trim()) {
        const paramList = params.split(',').map(p => p.trim().split(/\s+/).pop()).filter(p => p)
        insertText = constructorName + '(' + paramList.map((p, i) => '${' + (i + 1) + ':}').join(', ') + ')'
        detail = `构造方法 (${params.trim()})`
      }
      
      methods.push({
        label: constructorName,
        kind: monaco.languages.CompletionItemKind.Constructor,
        insertText: insertText,
        detail: detail,
        documentation: `构造方法: ${constructorName}`,
        sortText: `0${constructorName}`,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      })
    }
  }

  return methods
}
