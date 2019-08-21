const regex = new RegExp(/< *([\w]+) *[\w=\"']* *\/>/, 'g')

const expandSelfClosingTags = (contents) => {
  while ((match = regex.exec(contents)) !== null) {
    const originalTag = match[0]
    const openingTag = originalTag.replace('/>', '>')
    const tagName = match[1]
    const closingTag = `</${tagName}>`
    const expandedTag = `${openingTag}${closingTag}`
    
    contents = contents.replace(originalTag, expandedTag)
  }
  return contents
}

module.exports = expandSelfClosingTags