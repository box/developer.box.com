const unindent = require('strip-indent')

const unIndentNestedMarkdown = (contents) => {
  let newContents = contents
    .split('\n')
    .map(row => row.trim())
    .join('\n')

  
  newContents = reindentCode(contents, newContents)
  newContents = reindentBullets(contents, newContents)

  return newContents
}

const reindentCode = (contents, newContents) => {
  const oldParts = contents.split(/ *```/g)
  const newParts = newContents.split(/ *```/g)

  // interlace code parts back into the unindented code
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

const reindentBullets = (contents, newContents) => {
  const regex = /(\n *[\-*] .*)+/gm

  while ((match = regex.exec(contents)) !== null) {
    const unpadded = match[0]
      .split('\n')
      .map(row => row.trim())
      .join('\n')

    const padded = unindent(match[0])

    newContents = newContents.replace(unpadded, padded)
  }
  return newContents
}


module.exports = unIndentNestedMarkdown