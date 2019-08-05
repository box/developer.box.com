const unindent = require('strip-indent')
const openRegex = new RegExp(/< *([\w]+) *[\w=\"']* *>/, 'g')

const unIndentNestedMarkdown = (contents) => {
  while ((match = openRegex.exec(contents)) !== null) {
    const tagName = match[1]
    const startIndex = openRegex.lastIndex+1
    const after = contents.substring(startIndex)
    const [body] = after.split(new RegExp(`<\/ *${tagName} *>`, 'ig'), 2)
    const unindentedBody = unindent(body)
    contents = contents.replace(body, unindentedBody)
  }
  return contents
}

module.exports = unIndentNestedMarkdown