const unindent = require('strip-indent')

const unIndentNestedMarkdown = (contents) => {
  const newContents = contents
    .split('\n')
    .map(row => row.trim())
    .join('\n')

  const oldParts = contents.split(/ *```/g)
  const newParts = newContents.split(/ *```/g)

  return newParts.map((newPart, index) => (
    (index % 2 === 0) ? newPart : unindentCode(oldParts[index])
  )).join('```')
}

const unindentCode = (block) => {
  const lines = block.split('\n')
  const lang = unindent(lines[0])
  const code = unindent(lines.splice(1).join('\n'))
  return [lang, code].join('\n')
}

module.exports = unIndentNestedMarkdown