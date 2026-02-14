export const setupAutoBrackets = (monaco) => {
  monaco.languages.setLanguageConfiguration('java', {
    autoClosingPairs: [
      { open: '{', close: '}', notIn: ['string', 'comment'] },
      { open: '[', close: ']', notIn: ['string', 'comment'] },
      { open: '(', close: ')', notIn: ['string', 'comment'] },
      { open: '"', close: '"', notIn: ['string', 'comment'] },
      { open: "'", close: "'", notIn: ['string', 'comment'] },
      { open: '`', close: '`', notIn: ['string', 'comment'] },
      { open: '<', close: '>', notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' },
      { open: '<', close: '>' }
    ],
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
      ['<', '>']
    ],
    colorizedBracketPairs: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')']
    ],
    onEnterRules: [
      {
        beforeText: /^\s*\/\*\*$/,
        afterText: /^\s*\*\/$/,
        action: {
          indentAction: monaco.languages.IndentAction.IndentOutdent,
          appendText: ' * '
        }
      },
      {
        beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
        action: {
          indentAction: monaco.languages.IndentAction.None,
          appendText: ' * '
        }
      },
      {
        beforeText: /^\s*\*(\/|[^\*])*$/,
        action: {
          indentAction: monaco.languages.IndentAction.None,
          appendText: ' * '
        }
      },
      {
        beforeText: /^\s*\*\/$/,
        action: {
          indentAction: monaco.languages.IndentAction.None,
          removeText: 1
        }
      },
      {
        beforeText: /^\s*\*[^/]*\*\/\s*$/,
        action: {
          indentAction: monaco.languages.IndentAction.None,
          removeText: 1
        }
      }
    ]
  })

  const bracketCompletionProvider = {
    triggerCharacters: ['{', '(', '[', '"', "'", '<'],
    provideCompletionItems: (model, position) => {
      const textUntilPosition = model.getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column
      })

      const charBefore = textUntilPosition.slice(-1)
      const charAfter = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: position.column,
        endLineNumber: position.lineNumber,
        endColumn: position.column + 1
      })

      return {
        suggestions: []
      }
    }
  }

  monaco.languages.registerCompletionItemProvider('java', bracketCompletionProvider)
}

export const getAutoBracketClose = (openBracket) => {
  const bracketMap = {
    '{': '}',
    '(': ')',
    '[': ']',
    '"': '"',
    "'": "'",
    '<': '>',
    '`': '`'
  }
  return bracketMap[openBracket] || ''
}

export const isBracketPair = (open, close) => {
  const pairs = {
    '{': '}',
    '(': ')',
    '[': ']',
    '<': '>',
    '"': '"',
    "'": "'",
    '`': '`'
  }
  return pairs[open] === close
}
