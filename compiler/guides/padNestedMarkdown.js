var visit = require('unist-util-visit')

/**
 * A unified plugin that padds html elements with new lines
 * when needed, to ensure the body is parsed as markdown
 */
const attacher = () => (
  (tree) => {
    // visits every node
    const visitor = (node) => {
      // check if the string starts with a HTML open tag
      let openTagMatch
      const openRegex = new RegExp(/^ *< *([\w ]+) *>/, 'm')

      if (openTagMatch = node.value.match(openRegex)) {
        // if so, see if the string ends with a matching closing tag
        let closeTagMatch
        const closeRegex = new RegExp(`</ *${openTagMatch[1]} *> *$`, 'm')

        if (closeTagMatch = node.value.match(closeRegex)) {
          // if it does, pad the content of the element with some extra newlines
          const open = openTagMatch[0]
          const close = closeTagMatch[0]

          node.value = node.value
            .replace(open, `${open}\n`)
            .replace(close, `\n${close}`)
        }
      }
      return node
    }

    // visit all HTML nodes
    visit(tree, 'html', visitor)
  }
)

module.exports = attacher