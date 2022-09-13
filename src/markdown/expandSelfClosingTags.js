const regex = new RegExp(/< *([\w]+) *[\w=:\"'\-_\. ]* *\/>/, 'g')

const expandSelfClosingTags = (contents) => {
  while ((match = regex.exec(contents)) !== null) {
    const precededByTicks = (contents.slice(0, match.index).split('`').length-1) % 2 === 1
    if (!precededByTicks) {
      const originalTag = match[0]
      const openingTag = originalTag.replace('/>', '>')
      const tagName = match[1]
      const closingTag = `</${tagName}>`
      const expandedTag = `${openingTag}${closingTag}`
      
      contents = contents.replace(originalTag, expandedTag)
    }
  }
  return contents
}

module.exports = expandSelfClosingTags