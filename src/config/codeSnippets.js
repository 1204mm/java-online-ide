export const setupCodeSnippets = (monaco) => {
  const javaSnippets = [
    {
      label: 'sout',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'System.out.println(${1:});',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'System.out.println()',
      documentation: '打印输出语句',
      sortText: '0sout'
    },
    {
      label: 'soutv',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'System.out.println("${1:value} = " + ${1:value});',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'System.out.println() with variable',
      documentation: '打印变量名和值',
      sortText: '0soutv'
    },
    {
      label: 'souf',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'System.out.printf("${1:format}", ${2:args});',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'System.out.printf()',
      documentation: '格式化打印输出',
      sortText: '0souf'
    },
    {
      label: 'serr',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'System.err.println(${1:});',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'System.err.println()',
      documentation: '错误输出语句',
      sortText: '0serr'
    },
    {
      label: 'psvm',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'public static void main(String[] args) {\n\t${1:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'main方法',
      documentation: 'Java程序入口方法',
      sortText: '0psvm'
    },
    {
      label: 'main',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'public static void main(String[] args) {\n\t${1:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'main方法',
      documentation: 'Java程序入口方法',
      sortText: '0main'
    },
    {
      label: 'fori',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'for (int ${1:i} = 0; ${1:i} < ${2:max}; ${1:i}++) {\n\t${3:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'for循环',
      documentation: '带索引的for循环',
      sortText: '0fori'
    },
    {
      label: 'iter',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'for (${1:Type} ${2:item} : ${3:collection}) {\n\t${4:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '增强for循环',
      documentation: '增强for循环（for-each）',
      sortText: '0iter'
    },
    {
      label: 'itar',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'for (int ${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i}++) {\n\t${3:Type} ${4:element} = ${2:array}[${1:i}];\n\t${5:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '数组遍历',
      documentation: '数组遍历for循环',
      sortText: '0itar'
    },
    {
      label: 'while',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'while (${1:condition}) {\n\t${2:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'while循环',
      documentation: 'while循环语句',
      sortText: '0while'
    },
    {
      label: 'dowhile',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'do {\n\t${1:}\n} while (${2:condition});',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'do-while循环',
      documentation: 'do-while循环语句',
      sortText: '0dowhile'
    },
    {
      label: 'if',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'if (${1:condition}) {\n\t${2:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'if语句',
      documentation: '条件判断语句',
      sortText: '0if'
    },
    {
      label: 'ife',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'if (${1:condition}) {\n\t${2:}\n} else {\n\t${3:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'if-else语句',
      documentation: '条件判断语句（带else）',
      sortText: '0ife'
    },
    {
      label: 'else',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'else {\n\t${1:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'else语句',
      documentation: 'else分支',
      sortText: '0else'
    },
    {
      label: 'elseif',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'else if (${1:condition}) {\n\t${2:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'else if语句',
      documentation: 'else if分支',
      sortText: '0elseif'
    },
    {
      label: 'switch',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'switch (${1:key}) {\n\tcase ${2:value}:\n\t\t${3:}\n\t\tbreak;\n\tdefault:\n\t\t${4:}\n\t\tbreak;\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'switch语句',
      documentation: 'switch分支语句',
      sortText: '0switch'
    },
    {
      label: 'case',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'case ${1:value}:\n\t${2:}\n\tbreak;',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'case分支',
      documentation: 'switch中的case分支',
      sortText: '0case'
    },
    {
      label: 'try',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'try {\n\t${1:}\n} catch (${2:Exception} ${3:e}) {\n\t${4:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'try-catch语句',
      documentation: '异常处理语句',
      sortText: '0try'
    },
    {
      label: 'tryf',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'try {\n\t${1:}\n} finally {\n\t${2:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'try-finally语句',
      documentation: '带finally的异常处理',
      sortText: '0tryf'
    },
    {
      label: 'trycatch',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'try {\n\t${1:}\n} catch (${2:Exception} ${3:e}) {\n\t${4:}\n} finally {\n\t${5:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'try-catch-finally语句',
      documentation: '完整的异常处理语句',
      sortText: '0trycatch'
    },
    {
      label: 'catch',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'catch (${1:Exception} ${2:e}) {\n\t${3:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'catch块',
      documentation: 'catch异常捕获块',
      sortText: '0catch'
    },
    {
      label: 'throw',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'throw new ${1:Exception}(${2:message});',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'throw语句',
      documentation: '抛出异常',
      sortText: '0throw'
    },
    {
      label: 'throws',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'throws ${1:Exception}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'throws声明',
      documentation: '声明方法抛出异常',
      sortText: '0throws'
    },
    {
      label: 'class',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'class ${1:ClassName} {\n\t${2:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '类定义',
      documentation: '定义一个类',
      sortText: '0class'
    },
    {
      label: 'interface',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'interface ${1:InterfaceName} {\n\t${2:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '接口定义',
      documentation: '定义一个接口',
      sortText: '0interface'
    },
    {
      label: 'enum',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'enum ${1:EnumName} {\n\t${2:VALUE1},\n\t${3:VALUE2};\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '枚举定义',
      documentation: '定义一个枚举',
      sortText: '0enum'
    },
    {
      label: 'method',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '${1:public} ${2:void} ${3:methodName}(${4:params}) {\n\t${5:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '方法定义',
      documentation: '定义一个方法',
      sortText: '0method'
    },
    {
      label: 'constructor',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'public ${1:ClassName}(${2:params}) {\n\t${3:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '构造方法',
      documentation: '定义构造方法',
      sortText: '0constructor'
    },
    {
      label: 'getter',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'public ${1:Type} get${2:Property}() {\n\treturn ${3:field};\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'getter方法',
      documentation: '生成getter方法',
      sortText: '0getter'
    },
    {
      label: 'setter',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'public void set${1:Property}(${2:Type} ${3:value}) {\n\tthis.${4:field} = ${3:value};\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'setter方法',
      documentation: '生成setter方法',
      sortText: '0setter'
    },
    {
      label: 'tostring',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '@Override\npublic String toString() {\n\treturn "${1:ClassName}{" +\n\t\t"${2:field}=" + ${3:field} +\n\t\t\'}\';\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'toString方法',
      documentation: '生成toString方法',
      sortText: '0tostring'
    },
    {
      label: 'equals',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '@Override\npublic boolean equals(Object ${1:o}) {\n\tif (this == ${1:o}) return true;\n\tif (${1:o} == null || getClass() != ${1:o}.getClass()) return false;\n\t${2:ClassName} that = (${2:ClassName}) ${1:o};\n\treturn ${3:condition};\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'equals方法',
      documentation: '生成equals方法',
      sortText: '0equals'
    },
    {
      label: 'hashcode',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '@Override\npublic int hashCode() {\n\treturn Objects.hash(${1:fields});\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'hashCode方法',
      documentation: '生成hashCode方法',
      sortText: '0hashcode'
    },
    {
      label: 'lambda',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '(${1:params}) -> ${2:expression}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'Lambda表达式',
      documentation: 'Lambda表达式',
      sortText: '0lambda'
    },
    {
      label: 'stream',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '${1:collection}.stream()\n\t.${2:filter}(${3:})\n\t.${4:collect}(Collectors.toList());',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'Stream操作',
      documentation: 'Stream流操作',
      sortText: '0stream'
    },
    {
      label: 'list',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'List<${1:Type}> ${2:listName} = new ArrayList<>();',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'List声明',
      documentation: '声明ArrayList',
      sortText: '0list'
    },
    {
      label: 'map',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'Map<${1:KeyType}, ${2:ValueType}> ${3:mapName} = new HashMap<>();',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'Map声明',
      documentation: '声明HashMap',
      sortText: '0map'
    },
    {
      label: 'set',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'Set<${1:Type}> ${2:setName} = new HashSet<>();',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'Set声明',
      documentation: '声明HashSet',
      sortText: '0set'
    },
    {
      label: 'opt',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'Optional<${1:Type}> ${2:optName} = Optional.ofNullable(${3:value});',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'Optional声明',
      documentation: '声明Optional',
      sortText: '0opt'
    },
    {
      label: 'anno',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '@${1:Annotation}(${2:params})',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '注解',
      documentation: '添加注解',
      sortText: '0anno'
    },
    {
      label: 'Override',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '@Override\n${1:}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '@Override注解',
      documentation: '方法重写注解',
      sortText: '0Override'
    },
    {
      label: 'Deprecated',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '@Deprecated\n${1:}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '@Deprecated注解',
      documentation: '废弃标记注解',
      sortText: '0Deprecated'
    },
    {
      label: 'SuppressWarnings',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '@SuppressWarnings("${1:unchecked}")\n${2:}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '@SuppressWarnings注解',
      documentation: '抑制警告注解',
      sortText: '0SuppressWarnings'
    },
    {
      label: 'FunctionalInterface',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '@FunctionalInterface\n${1:}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '@FunctionalInterface注解',
      documentation: '函数式接口注解',
      sortText: '0FunctionalInterface'
    },
    {
      label: 'thread',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'Thread ${1:thread} = new Thread(() -> {\n\t${2:}\n});\n${1:thread}.start();',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '创建线程',
      documentation: '创建并启动新线程',
      sortText: '0thread'
    },
    {
      label: 'runnable',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'Runnable ${1:runnable} = () -> {\n\t${2:}\n};',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'Runnable',
      documentation: '创建Runnable',
      sortText: '0runnable'
    },
    {
      label: 'synchronized',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'synchronized (${1:lock}) {\n\t${2:}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '同步代码块',
      documentation: '同步代码块',
      sortText: '0synchronized'
    },
    {
      label: 'singleton',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'private static ${1:ClassName} instance;\n\npublic static ${1:ClassName} getInstance() {\n\tif (instance == null) {\n\t\tsynchronized (${1:ClassName}.class) {\n\t\t\tif (instance == null) {\n\t\t\t\tinstance = new ${1:ClassName}();\n\t\t\t}\n\t\t}\n\t}\n\treturn instance;\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: '单例模式',
      documentation: '双重检查锁定单例模式',
      sortText: '0singleton'
    },
    {
      label: 'builder',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'public static class Builder {\n\tprivate ${1:Type} ${2:field};\n\n\tpublic Builder ${2:field}(${1:Type} ${2:field}) {\n\t\tthis.${2:field} = ${2:field};\n\t\treturn this;\n\t}\n\n\tpublic ${3:ClassName} build() {\n\t\treturn new ${3:ClassName}(this);\n\t}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'Builder模式',
      documentation: 'Builder设计模式',
      sortText: '0builder'
    }
  ]

  monaco.languages.registerCompletionItemProvider('java', {
    triggerCharacters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
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

      const filteredSnippets = javaSnippets.filter(snippet => {
        if (!currentWord) return true
        return snippet.label.toLowerCase().startsWith(currentWord.toLowerCase())
      })

      return {
        suggestions: filteredSnippets.map(snippet => ({
          ...snippet,
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
