export const setupIntelliJTheme = (monaco) => {
  monaco.editor.defineTheme('intellij-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'keyword', foreground: 'cc7832', fontStyle: 'bold' },
      { token: 'keyword.control', foreground: 'cc7832', fontStyle: 'bold' },
      { token: 'keyword.declaration', foreground: 'cc7832', fontStyle: 'bold' },
      { token: 'keyword.other', foreground: 'cc7832' },
      { token: 'string', foreground: '6a8759' },
      { token: 'string.quoted', foreground: '6a8759' },
      { token: 'string.escape', foreground: 'cc7832' },
      { token: 'comment', foreground: '808080', fontStyle: 'italic' },
      { token: 'comment.line', foreground: '808080', fontStyle: 'italic' },
      { token: 'comment.block', foreground: '808080', fontStyle: 'italic' },
      { token: 'comment.documentation', foreground: '8a8a8a', fontStyle: 'italic' },
      { token: 'number', foreground: '6897bb' },
      { token: 'constant.numeric', foreground: '6897bb' },
      { token: 'constant.language', foreground: '9876aa', fontStyle: 'bold' },
      { token: 'constant.character', foreground: '6a8759' },
      { token: 'type', foreground: 'a9b7c6' },
      { token: 'type.class', foreground: 'a9b7c6' },
      { token: 'type.interface', foreground: 'a9b7c6' },
      { token: 'type.enum', foreground: 'a9b7c6' },
      { token: 'type.annotation', foreground: 'bbb529' },
      { token: 'function', foreground: 'ffc66d' },
      { token: 'function.call', foreground: 'ffc66d' },
      { token: 'function.declaration', foreground: 'ffc66d' },
      { token: 'method', foreground: 'a9b7c6' },
      { token: 'variable', foreground: 'a9b7c6' },
      { token: 'variable.parameter', foreground: '9876aa' },
      { token: 'variable.local', foreground: 'a9b7c6' },
      { token: 'variable.field', foreground: '9876aa' },
      { token: 'operator', foreground: 'a9b7c6' },
      { token: 'delimiter', foreground: 'a9b7c6' },
      { token: 'delimiter.bracket', foreground: 'a9b7c6' },
      { token: 'delimiter.parenthesis', foreground: 'a9b7c6' },
      { token: 'annotation', foreground: 'bbb529' },
      { token: 'meta.annotation', foreground: 'bbb529' },
      { token: 'meta.tag', foreground: 'e8bf6a' },
      { token: 'meta.attribute', foreground: 'bababa' },
      { token: 'identifier', foreground: 'a9b7c6' },
      { token: 'class.name', foreground: 'a9b7c6' }
    ],
    colors: {
      'editor.background': '#1e1e1e',
      'editor.foreground': '#a9b7c6',
      'editorLineNumber.foreground': '#606366',
      'editorLineNumber.activeForeground': '#a4a3a3',
      'editorLineNumber.dimmedForeground': '#606366',
      'editor.selectionBackground': '#214283',
      'editor.inactiveSelectionBackground': '#1e3a5f',
      'editor.selectionHighlightBackground': '#32593d5e',
      'editor.lineHighlightBackground': '#323232',
      'editor.lineHighlightBorder': '#323232',
      'editorCursor.foreground': '#bbbbbb',
      'editorWhitespace.foreground': '#3c3c3c',
      'editorIndentGuide.background': '#3c3c3c',
      'editorIndentGuide.activeBackground': '#5a5a5a',
      'editorBracketMatch.background': '#0064004d',
      'editorBracketMatch.border': '#888888',
      'editor.findMatchBackground': '#515c6a',
      'editor.findMatchHighlightBackground': '#32593d5e',
      'editorBracketHighlight.foreground1': '#ffc66d',
      'editorBracketHighlight.foreground2': '#cc7832',
      'editorBracketHighlight.foreground3': '#6897bb',
      'editorBracketHighlight.foreground4': '#9876aa',
      'editorSuggestWidget.background': '#2d2d2d',
      'editorSuggestWidget.border': '#3c3c3c',
      'editorSuggestWidget.selectedBackground': '#214283',
      'editorSuggestWidget.highlightForeground': '#4a90d9',
      'editorWidget.background': '#2d2d2d',
      'editorWidget.border': '#3c3c3c',
      'input.background': '#3c3c3c',
      'input.border': '#3c3c3c',
      'input.foreground': '#a9b7c6',
      'scrollbarSlider.background': '#42424280',
      'scrollbarSlider.hoverBackground': '#4f4f4f80',
      'scrollbarSlider.activeBackground': '#6f6f6f80',
      'minimap.background': '#1e1e1e',
      'minimap.selectionHighlight': '#214283',
      'minimapSlider.background': '#42424280',
      'minimapSlider.hoverBackground': '#4f4f4f80'
    }
  })
}

export const setupJavaLanguage = (monaco) => {
  const javaKeywords = [
    'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
    'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
    'extends', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements',
    'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new', 'package',
    'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
    'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient',
    'try', 'void', 'volatile', 'while', 'true', 'false', 'null', 'var', 'record',
    'sealed', 'non-sealed', 'permits', 'yield'
  ]

  const javaTypes = [
    'String', 'Integer', 'Long', 'Double', 'Float', 'Boolean', 'Character',
    'Byte', 'Short', 'Object', 'Class', 'System', 'Math', 'Exception',
    'RuntimeException', 'Thread', 'Runnable', 'List', 'ArrayList', 'LinkedList',
    'Map', 'HashMap', 'TreeMap', 'Set', 'HashSet', 'TreeSet', 'Queue',
    'PriorityQueue', 'Deque', 'ArrayDeque', 'Optional', 'Stream', 'Collectors',
    'Arrays', 'Collections', 'StringBuilder', 'StringBuffer', 'File', 'Path',
    'Scanner', 'BufferedReader', 'BufferedWriter', 'FileReader', 'FileWriter',
    'InputStream', 'OutputStream', 'FileInputStream', 'FileOutputStream',
    'ObjectInputStream', 'ObjectOutputStream', 'Serializable', 'Comparable',
    'Comparator', 'Iterator', 'ListIterator', 'Spliterator', 'Function',
    'Consumer', 'Supplier', 'Predicate', 'BiFunction', 'BiConsumer', 'BiPredicate',
    'UnaryOperator', 'BinaryOperator', 'IntFunction', 'IntConsumer', 'IntSupplier',
    'IntPredicate', 'LongFunction', 'LongConsumer', 'LongSupplier', 'LongPredicate',
    'DoubleFunction', 'DoubleConsumer', 'DoubleSupplier', 'DoublePredicate'
  ]

  monaco.languages.setMonarchTokensProvider('java', {
    defaultToken: '',
    tokenPostfix: '.java',

    keywords: javaKeywords,

    operators: [
      '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
      '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
      '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
      '%=', '<<=', '>>=', '>>>=',
      '->', '::'
    ],

    symbols: /[=><!~?:&|+\-*\/\^%]+/,

    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

    digits: /\d+(_+\d+)*/,

    octaldigits: /[0-7]+(_+[0-7]+)*/,

    binarydigits: /[0-1]+(_+[0-1]+)*/,

    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,

    tokenizer: {
      root: [
        [/[a-zA-Z_$][\w$]*/, {
          cases: {
            '@keywords': { token: 'keyword.$0' },
            '@default': 'identifier'
          }
        }],

        { include: '@whitespace' },

        [/[{}()\[\]]/, '@brackets'],

        [/[<>](?!@symbols)/, '@brackets'],

        [/@symbols/, {
          cases: {
            '@operators': 'delimiter',
            '@default': ''
          }
        }],

        [/\d*\.\d+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
        [/0[xX][0-9a-fA-F_]*[0-9a-fA-F][lL]?/, 'number.hex'],
        [/0[0-7_]*[0-7][lL]?/, 'number.octal'],
        [/0[bB][0-1_]*[0-1][lL]?/, 'number.binary'],
        [/\d+[lL]?/, 'number'],

        [/[;,.]/, 'delimiter'],

        [/"([^"\\]|\\.)*$/, 'string.invalid'],
        [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],

        [/'[^\\']'/, 'string'],
        [/'/, 'string.invalid']
      ],

      whitespace: [
        [/[ \t\r\n]+/, ''],
        [/\/\*/, 'comment', '@comment'],
        [/\/\*\*/, 'comment.documentation', '@comment'],
        [/\/\/.*$/, 'comment.line']
      ],

      comment: [
        [/[^\/*]+/, 'comment'],
        [/\/\*/, 'comment', '@push'],
        ['\\*/', 'comment', '@pop'],
        [/[\/*]/, 'comment']
      ],

      string: [
        [/[^\\"]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
      ],

      annotation: [
        [/@[a-zA-Z_$][\w$]*/, 'annotation']
      ]
    }
  })

  monaco.languages.setLanguageConfiguration('java', {
    comments: {
      lineComment: '//',
      blockComment: ['/*', '*/']
    },
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')']
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' }
    ],
    surroundingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' }
    ],
    folding: {
      markers: {
        start: new RegExp('^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))'),
        end: new RegExp('^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))')
      }
    },
    indentationRules: {
      increaseIndentPattern: new RegExp('^((?!\\/\\/).)*(\\{[^}"\'`]*|\\([^)"\'`]*|\\[[^\\]"\']*)$'),
      decreaseIndentPattern: new RegExp('^(.*\\*\\/)?\\s*[\\}\\]].*$')
    }
  })
}

export const javaKeywords = [
  'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
  'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
  'extends', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements',
  'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new', 'package',
  'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
  'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient',
  'try', 'void', 'volatile', 'while', 'true', 'false', 'null', 'var', 'record',
  'sealed', 'non-sealed', 'permits', 'yield'
]

export const javaTypes = [
  'String', 'Integer', 'Long', 'Double', 'Float', 'Boolean', 'Character',
  'Byte', 'Short', 'Object', 'Class', 'System', 'Math', 'Exception',
  'RuntimeException', 'Thread', 'Runnable', 'List', 'ArrayList', 'LinkedList',
  'Map', 'HashMap', 'TreeMap', 'Set', 'HashSet', 'TreeSet', 'Queue',
  'PriorityQueue', 'Deque', 'ArrayDeque', 'Optional', 'Stream', 'Collectors',
  'Arrays', 'Collections', 'StringBuilder', 'StringBuffer', 'File', 'Path',
  'Scanner', 'BufferedReader', 'BufferedWriter', 'FileReader', 'FileWriter',
  'InputStream', 'OutputStream', 'FileInputStream', 'FileOutputStream',
  'ObjectInputStream', 'ObjectOutputStream', 'Serializable', 'Comparable',
  'Comparator', 'Iterator', 'ListIterator', 'Spliterator'
]
