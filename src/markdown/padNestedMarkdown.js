const openRegex = new RegExp(/< *[\w]* ?[^>]*>/, 'g')
const closeRegex = new RegExp(/ *<\/ *([\w]+) *>/, 'g')

if (!String.prototype.splice) {
  String.prototype.splice = function(start, delCount, newSubStr) {
      return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount))
  }
}

const padNestedMarkdownWithNewlines = (contents) => {
  contents = padOpeningLines(contents)
  contents = padClosingLines(contents)
  return contents.trim()
}

const padOpeningLines = (contents) => {
  while ((match = openRegex.exec(contents)) !== null) {
    const nextChars = contents.substring(openRegex.lastIndex, openRegex.lastIndex+2)
    const followedByClosingTag = (nextChars === '</')
    const followedByTwoNewLines = (nextChars === '\n\n')
    const followedByOneNewLine = (nextChars.startsWith('\n'))
    const precededByTicks = (contents.slice(0, match.index).split('`').length-1) % 2 === 1
  
    if (!followedByClosingTag && !followedByTwoNewLines && !followedByOneNewLine && !precededByTicks) {
      contents = contents.splice(openRegex.lastIndex, 0, '\n\n')
    } else if (!followedByClosingTag && !followedByTwoNewLines && followedByOneNewLine && !precededByTicks) {
      contents = contents.splice(openRegex.lastIndex+1, 0, '\n')
    }
  }
  return contents
}

const padClosingLines = (contents) => {
  while ((match = closeRegex.exec(contents)) !== null) {
    const prevChars = contents.substring(0, match.index)
    const precededByTwoNewLines = /\n\n$/.test(prevChars)
    const precededByOneNewLine = /\n$/.test(prevChars)
    const precededByTicks = (contents.slice(0, match.index).split('`').length-1) % 2 === 1
    
    if (!precededByTwoNewLines && !precededByOneNewLine && !precededByTicks) {
      contents = contents.splice(match.index, 0, '\n\n')
    } else if (!precededByTwoNewLines && precededByOneNewLine && !precededByTicks) {
      contents = contents.splice(match.index, 0, '\n')
    }
  }
  return contents
}

module.exports = padNestedMarkdownWithNewlines