const unindent = require('strip-indent')
const openRegex = new RegExp(/< *([\w]+) *[\w="' ]* *>/, 'g')

const unIndentNestedMarkdown = (contents) => {
  let newContents = `${contents}`

  while ((match = openRegex.exec(contents)) !== null) {
    const tagName = match[1]
    const startIndex = openRegex.lastIndex+1
    const after = newContents.substring(startIndex)
    const [body] = after.split(new RegExp(`<\/ *${tagName} *>`, 'ig'), 2)
    const unindentedBody = unindent(body)
    newContents = newContents.replace(body, unindentedBody)
  }

  const oldParts = contents.split('```')
  const newParts = newContents.split('```')
  
  return newParts.map((_, index) => {
    if (index % 2 === 0) return newParts[index]
    else return oldParts[index]
  }).join('```')
}

module.exports = unIndentNestedMarkdown