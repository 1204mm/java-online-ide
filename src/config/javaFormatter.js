export const setupJavaFormatter = (monaco) => {
  monaco.languages.registerDocumentFormattingEditProvider('java', {
    provideDocumentFormattingEdits: (model) => {
      const content = model.getValue()
      const formatted = formatJavaCode(content)
      
      return [{
        range: model.getFullModelRange(),
        text: formatted
      }]
    }
  })

  monaco.languages.registerDocumentRangeFormattingEditProvider('java', {
    provideDocumentRangeFormattingEdits: (model, range) => {
      const content = model.getValueInRange(range)
      const formatted = formatJavaCode(content)
      
      return [{
        range: range,
        text: formatted
      }]
    }
  })
}

const formatJavaCode = (code) => {
  let lines = code.split('\n')
  let result = []
  let indentLevel = 0
  const indentUnit = '    '
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]
    let trimmed = line.trim()
    
    if (trimmed === '') {
      result.push('')
      continue
    }
    
    let closingBeforeOpen = false
    if (trimmed.startsWith('}')) {
      closingBeforeOpen = true
    }
    
    const openCount = (trimmed.match(/\{/g) || []).length
    const closeCount = (trimmed.match(/\}/g) || []).length
    
    if (closingBeforeOpen) {
      indentLevel = Math.max(0, indentLevel - closeCount)
      if (openCount > 0) {
        indentLevel += openCount
      }
    }
    
    const currentIndent = indentUnit.repeat(Math.max(0, indentLevel))
    result.push(currentIndent + trimmed)
    
    if (!closingBeforeOpen) {
      indentLevel = Math.max(0, indentLevel + openCount - closeCount)
    }
  }
  
  let formatted = result.join('\n')
  
  formatted = formatted.replace(/[ \t]+$/gm, '')
  
  formatted = formatted.replace(/\n{3,}/g, '\n\n')
  
  return formatted.trimEnd() + '\n'
}

export const formatJavaCodeSimple = (code) => {
  return formatJavaCode(code)
}
