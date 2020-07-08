const regex = new RegExp(/< *[\w]* ?[^>]*>/, 'g')

const expandSelfClosingTags = (contents) => {
  while ((match = regex.exec(contents)) !== null) {
    const precededByTicks = (contents.slice(0, match.index).split('`').length-1) % 2 === 1
    if (!precededByTicks) {
      const originalTag = match[0]
      const newTag = originalTag.replace(/\n/gm, ' ')
 
      contents = contents.replace(originalTag, newTag)
    }
  }
  return contents
}

module.exports = expandSelfClosingTags