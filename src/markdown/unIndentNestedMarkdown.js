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
    let unpadded = list
        .split('\n')
        .map(row => row.trim())
        .join('\n')
    unpadded = reindentCode(list, unpadded)

    const padded = unindent(list)
    newContents = newContents.replace(unpadded, padded)
  })
  return newContents
}

const findBulletLists = (contents) => {
  const lists = []
  let currentList = []
  let lastPadding = 0
  let lastBulletListPadding = 0
  let lastHasBullet = false

  const lines = contents.split('\n')
  let isCodeBlockStarted = false;
  let lastCodeBlockFencePadding = 0;

  lines.forEach(line => {
    const isCodeBlockFence = /^\s*```.*/g.test(line);
    let isInsideCodeBlock = isCodeBlockStarted && !isCodeBlockFence;
    // save the padding of the fence that starts the code block
    if (isCodeBlockFence && !isCodeBlockStarted) {
      lastCodeBlockFencePadding = padDepth(line);
    }
    if (isCodeBlockFence) {
      // if already inside code block but ``` is nested and thus not closes the code block
      if (isCodeBlockStarted && padDepth(line) >= lastCodeBlockFencePadding + 2) {
        isInsideCodeBlock = true;
      }
      else { // leaving the code block
        isCodeBlockStarted = !isCodeBlockStarted;
      }
    }

    // https://framework-upgrade--boxdev-abtest.netlify.app/guides/cli/cli-docs/bulk-commands/

    // if this is a clear bullet, add to current position
    if (!isInsideCodeBlock && (line.match(/^ *[\-*] /) || line.match(/^ *\d+\./))) {
      if (!currentList.length) {
        lastBulletListPadding = padDepth(line)
      }
      currentList.push(line)
      lastPadding = padDepth(line)
      lastHasBullet = true
    }
    // if there's an empty line and we currently have a list, add the line
    else if (line.trim().length === 0 && currentList.length) {
      currentList.push(line)
    }
    // otherwise, if the previous line was a bullet check the indent
    else if (lastHasBullet && currentList.length && padDepth(line) >= lastBulletListPadding + 2) {
      currentList.push(line)
      lastPadding = padDepth(line)
      lastHasBullet = false
    }
    // if the previous line didnt have a bullet, yet this is a list, check if
    // the indent matches or is inside code block
    else if (!lastHasBullet && currentList.length && (padDepth(line) === lastPadding || isInsideCodeBlock)) {
      currentList.push( line)
    }
    // otherwise, save this list
    else if (currentList.length) {
      lastPadding = 0
      lastBulletListPadding = 0
      lastHasBullet = false
      lists.push(currentList.join('\n'))
      currentList = []
    }
  })

  // add the last analysed list if it was at the end of file
  if (currentList.length) {
    lists.push(currentList.join('\n'))
  }

  return lists
}

const padDepth = (line) => line.length - line.trimStart().length

module.exports = unIndentNestedMarkdown



