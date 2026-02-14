export const setupIntelliJKeybindings = (editor, monaco) => {
  const keybindings = []

  keybindings.push(
    editor.addAction({
      id: 'intellij-duplicate-line',
      label: 'Duplicate Line',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyD],
      run: (ed) => {
        const position = ed.getPosition()
        const model = ed.getModel()
        if (!model || !position) return

        const lineNumber = position.lineNumber
        const lineContent = model.getLineContent(lineNumber)
        const lineCount = model.getLineCount()

        ed.executeEdits('duplicate-line', [{
          range: new monaco.Range(lineNumber, model.getLineMaxColumn(lineNumber), lineNumber, model.getLineMaxColumn(lineNumber)),
          text: '\n' + lineContent
        }])

        ed.setPosition({ lineNumber: lineNumber + 1, column: position.column })
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-delete-line',
      label: 'Delete Line',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyY],
      run: (ed) => {
        const position = ed.getPosition()
        const model = ed.getModel()
        if (!model || !position) return

        const lineNumber = position.lineNumber
        const lineCount = model.getLineCount()

        if (lineCount === 1) {
          ed.executeEdits('delete-line', [{
            range: new monaco.Range(1, 1, 1, model.getLineMaxColumn(1)),
            text: ''
          }])
        } else if (lineNumber === lineCount) {
          ed.executeEdits('delete-line', [{
            range: new monaco.Range(lineNumber - 1, model.getLineMaxColumn(lineNumber - 1), lineNumber, model.getLineMaxColumn(lineNumber)),
            text: ''
          }])
        } else {
          ed.executeEdits('delete-line', [{
            range: new monaco.Range(lineNumber, 1, lineNumber + 1, 1),
            text: ''
          }])
        }
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-move-line-up',
      label: 'Move Line Up',
      keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.Shift | monaco.KeyCode.UpArrow],
      run: (ed) => {
        const position = ed.getPosition()
        const model = ed.getModel()
        if (!model || !position) return

        const lineNumber = position.lineNumber
        if (lineNumber <= 1) return

        const currentLine = model.getLineContent(lineNumber)
        const previousLine = model.getLineContent(lineNumber - 1)

        ed.executeEdits('move-line-up', [{
          range: new monaco.Range(lineNumber - 1, 1, lineNumber, model.getLineMaxColumn(lineNumber)),
          text: currentLine + '\n' + previousLine
        }])

        ed.setPosition({ lineNumber: lineNumber - 1, column: position.column })
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-move-line-down',
      label: 'Move Line Down',
      keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.Shift | monaco.KeyCode.DownArrow],
      run: (ed) => {
        const position = ed.getPosition()
        const model = ed.getModel()
        if (!model || !position) return

        const lineNumber = position.lineNumber
        const lineCount = model.getLineCount()
        if (lineNumber >= lineCount) return

        const currentLine = model.getLineContent(lineNumber)
        const nextLine = model.getLineContent(lineNumber + 1)

        ed.executeEdits('move-line-down', [{
          range: new monaco.Range(lineNumber, 1, lineNumber + 1, model.getLineMaxColumn(lineNumber + 1)),
          text: nextLine + '\n' + currentLine
        }])

        ed.setPosition({ lineNumber: lineNumber + 1, column: position.column })
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-copy-line-up',
      label: 'Copy Line Up',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyD],
      contextMenuGroupId: 'navigation',
      run: (ed) => {
        const position = ed.getPosition()
        const model = ed.getModel()
        if (!model || !position) return

        const lineNumber = position.lineNumber
        const lineContent = model.getLineContent(lineNumber)

        ed.executeEdits('copy-line-up', [{
          range: new monaco.Range(lineNumber, 1, lineNumber, 1),
          text: lineContent + '\n'
        }])
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-start-new-line',
      label: 'Start New Line',
      keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.Enter],
      run: (ed) => {
        const position = ed.getPosition()
        const model = ed.getModel()
        if (!model || !position) return

        const lineNumber = position.lineNumber
        const maxColumn = model.getLineMaxColumn(lineNumber)

        ed.executeEdits('start-new-line', [{
          range: new monaco.Range(lineNumber, maxColumn, lineNumber, maxColumn),
          text: '\n'
        }])

        ed.setPosition({ lineNumber: lineNumber + 1, column: 1 })
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-complete-statement',
      label: 'Complete Current Statement',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Enter],
      run: (ed) => {
        const position = ed.getPosition()
        const model = ed.getModel()
        if (!model || !position) return

        const lineNumber = position.lineNumber
        const lineContent = model.getLineContent(lineNumber).trim()
        const maxColumn = model.getLineMaxColumn(lineNumber)

        if (lineContent.startsWith('if') || lineContent.startsWith('while') || lineContent.startsWith('for')) {
          if (!lineContent.endsWith('{')) {
            ed.executeEdits('complete-statement', [{
              range: new monaco.Range(lineNumber, maxColumn, lineNumber, maxColumn),
              text: ' {\n\t\n}'
            }])
            ed.setPosition({ lineNumber: lineNumber + 1, column: 2 })
          }
        } else if (lineContent.startsWith('else')) {
          if (!lineContent.endsWith('{')) {
            ed.executeEdits('complete-statement', [{
              range: new monaco.Range(lineNumber, maxColumn, lineNumber, maxColumn),
              text: ' {\n\t\n}'
            }])
            ed.setPosition({ lineNumber: lineNumber + 1, column: 2 })
          }
        } else {
          ed.executeEdits('complete-statement', [{
            range: new monaco.Range(lineNumber, maxColumn, lineNumber, maxColumn),
            text: ';\n'
          }])
        }
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-reformat-code',
      label: 'Reformat Code',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyL],
      run: (ed) => {
        ed.getAction('editor.action.formatDocument')?.run()
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-optimize-imports',
      label: 'Optimize Imports',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyO],
      run: (ed) => {
        const model = ed.getModel()
        if (!model) return

        const content = model.getValue()
        const lines = content.split('\n')
        const importLines = []
        const otherLines = []
        let inImportSection = true

        for (const line of lines) {
          if (inImportSection && line.trim().startsWith('import ')) {
            importLines.push(line)
          } else {
            if (inImportSection && !line.trim().startsWith('import ') && line.trim() !== '' && !line.trim().startsWith('package ')) {
              inImportSection = false
            }
            otherLines.push(line)
          }
        }

        const uniqueImports = [...new Set(importLines)].sort()
        const newContent = uniqueImports.join('\n') + (uniqueImports.length > 0 ? '\n\n' : '') + otherLines.join('\n')

        ed.setValue(newContent)
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-comment-line',
      label: 'Comment/Uncomment Line',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Slash],
      run: (ed) => {
        ed.getAction('editor.action.commentLine')?.run()
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-block-comment',
      label: 'Block Comment',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Slash],
      run: (ed) => {
        ed.getAction('editor.action.blockComment')?.run()
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-find',
      label: 'Find',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyF],
      run: (ed) => {
        ed.getAction('actions.find')?.run()
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-replace',
      label: 'Replace',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyR],
      run: (ed) => {
        ed.getAction('editor.action.startFindReplaceAction')?.run()
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-find-in-files',
      label: 'Find in Files',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyF],
      run: (ed) => {
        ed.getAction('actions.find')?.run()
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-go-to-line',
      label: 'Go to Line',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyG],
      run: (ed) => {
        ed.getAction('editor.action.gotoLine')?.run()
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-select-word',
      label: 'Select Word at Caret',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyW],
      run: (ed) => {
        ed.getAction('editor.action.smartSelect.grow')?.run()
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-unselect-word',
      label: 'Unselect Word',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyW],
      run: (ed) => {
        ed.getAction('editor.action.smartSelect.shrink')?.run()
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-toggle-case',
      label: 'Toggle Case',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyU],
      run: (ed) => {
        const selection = ed.getSelection()
        if (!selection) return

        const model = ed.getModel()
        if (!model) return

        const selectedText = model.getValueInRange(selection)
        let newText

        if (selectedText === selectedText.toUpperCase()) {
          newText = selectedText.toLowerCase()
        } else if (selectedText === selectedText.toLowerCase()) {
          newText = selectedText.toUpperCase()
        } else {
          newText = selectedText.toUpperCase()
        }

        ed.executeEdits('toggle-case', [{
          range: selection,
          text: newText
        }])
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-join-lines',
      label: 'Join Lines',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyJ],
      run: (ed) => {
        const position = ed.getPosition()
        const model = ed.getModel()
        if (!model || !position) return

        const lineNumber = position.lineNumber
        if (lineNumber >= model.getLineCount()) return

        const currentLine = model.getLineContent(lineNumber)
        const nextLine = model.getLineContent(lineNumber + 1)

        ed.executeEdits('join-lines', [{
          range: new monaco.Range(lineNumber, model.getLineMaxColumn(lineNumber), lineNumber + 1, 1),
          text: currentLine.endsWith(' ') || nextLine.startsWith(' ') ? '' : ' '
        }])
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-surround-with',
      label: 'Surround with...',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyT],
      run: (ed) => {
        const selection = ed.getSelection()
        if (!selection || selection.isEmpty()) return

        const model = ed.getModel()
        if (!model) return

        const selectedText = model.getValueInRange(selection)

        ed.executeEdits('surround-with-try', [{
          range: selection,
          text: `try {\n\t${selectedText}\n} catch (Exception e) {\n\t\n}`
        }])
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-save-all',
      label: 'Save All',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
      run: (ed) => {
        ed.trigger('keyboard', 'editor.action.formatDocument', null)
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-undo',
      label: 'Undo',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyZ],
      run: (ed) => {
        ed.trigger('keyboard', 'undo', null)
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-redo',
      label: 'Redo',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyZ],
      run: (ed) => {
        ed.trigger('keyboard', 'redo', null)
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-cut',
      label: 'Cut',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyX],
      run: (ed) => {
        ed.trigger('keyboard', 'editor.action.clipboardCutAction', null)
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-copy',
      label: 'Copy',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyC],
      run: (ed) => {
        ed.trigger('keyboard', 'editor.action.clipboardCopyAction', null)
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-paste',
      label: 'Paste',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyV],
      run: (ed) => {
        ed.trigger('keyboard', 'editor.action.clipboardPasteAction', null)
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-select-all',
      label: 'Select All',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyA],
      run: (ed) => {
        ed.trigger('keyboard', 'editor.action.selectAll', null)
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-code-completion',
      label: 'Basic Code Completion',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Space],
      run: (ed) => {
        ed.trigger('keyboard', 'editor.action.triggerSuggest', null)
      }
    })
  )

  keybindings.push(
    editor.addAction({
      id: 'intellij-smart-completion',
      label: 'Smart Code Completion',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Space],
      run: (ed) => {
        ed.trigger('keyboard', 'editor.action.triggerParameterHints', null)
      }
    })
  )

  return keybindings
}

export const intelliJKeybindingsInfo = [
  { name: '复制当前行', shortcut: 'Ctrl+D', description: '复制当前行到下一行' },
  { name: '删除当前行', shortcut: 'Ctrl+Y', description: '删除当前行' },
  { name: '上移当前行', shortcut: 'Alt+Shift+↑', description: '将当前行向上移动' },
  { name: '下移当前行', shortcut: 'Alt+Shift+↓', description: '将当前行向下移动' },
  { name: '开始新行', shortcut: 'Shift+Enter', description: '在当前行下方开始新行' },
  { name: '完成语句', shortcut: 'Ctrl+Shift+Enter', description: '完成当前语句' },
  { name: '格式化代码', shortcut: 'Ctrl+Alt+L', description: '格式化当前文件' },
  { name: '优化导入', shortcut: 'Ctrl+Alt+O', description: '优化import语句' },
  { name: '注释/取消注释', shortcut: 'Ctrl+/', description: '切换行注释' },
  { name: '块注释', shortcut: 'Ctrl+Shift+/', description: '切换块注释' },
  { name: '查找', shortcut: 'Ctrl+F', description: '在当前文件中查找' },
  { name: '替换', shortcut: 'Ctrl+R', description: '在当前文件中替换' },
  { name: '跳转到行', shortcut: 'Ctrl+G', description: '跳转到指定行' },
  { name: '选择单词', shortcut: 'Ctrl+W', description: '扩展选择范围' },
  { name: '缩小选择', shortcut: 'Ctrl+Shift+W', description: '缩小选择范围' },
  { name: '切换大小写', shortcut: 'Ctrl+Shift+U', description: '切换选中内容的大小写' },
  { name: '合并行', shortcut: 'Ctrl+Shift+J', description: '将当前行与下一行合并' },
  { name: '环绕代码', shortcut: 'Ctrl+Alt+T', description: '用代码结构环绕选中内容' },
  { name: '代码补全', shortcut: 'Ctrl+Space', description: '触发代码补全建议' },
  { name: '智能补全', shortcut: 'Ctrl+Shift+Space', description: '触发智能代码补全' }
]
