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
  const lists = findBulletLists(contents)
  lists.forEach(list => {
    const unpadded = list
      .split('\n')
      .map(row => row.trim())
      .join('\n')

    const padded = unindent(list)
    newContents = newContents.replace(unpadded, padded)
  })
  return newContents
}

const findBulletLists = (contents) => {
  const lists = []
  let currentList = []
  let lastPadding = 0
  let lastHasBullet = false

  const lines = contents.split('\n')

  lines.forEach(line => {
    // if this is a clear bullet, add to current position
    if (line.match(/^ *[\-*]/) || line.match(/^ *\d\./) ) {
      currentList.push(line)
      lastPadding = padDepth(line)
      lastHasBullet = true
    } 
    // if there's an empty line and we currently have a list, add the line
    else if (line.trim().length === 0 && currentList.length) {
      currentList.push(line)
    }
    // otherwise, if the previous line was a bullet check the indent
    else if (lastHasBullet && currentList.length && padDepth(line)+2 >= lastPadding) {
      currentList.push(line)
      lastPadding = padDepth(line)
      lastHasBullet = false
    } 
    // if the previous line didnt have a bullet, yet this is a list, check if
    // the indent matches
    else if (!lastHasBullet && currentList.length && padDepth(line) === lastPadding) {
      currentList.push(line)
    } 
    // otherwise, save this list
    else if (currentList.length) {
      lastPadding = 0
      lastHasBullet = false
      lists.push(currentList.join('\n'))
      currentList = []
    }
  })

  return lists
}

const padDepth = (line) => line.length - line.trimStart().length

module.exports = unIndentNestedMarkdown