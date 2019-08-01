const visit = require('unist-util-visit')
const beforeAll = require('unist-util-find-all-before')

const openRegex = new RegExp(/^ *< *([\w ]+) *>/, 'm')

/**
 * A unified plugin that removes indentation from nested html
 */
const attacher = () => (
  (tree) => {

    // Sanitize markdown that hasn't been parsed yet
    const sanitizeEmbeddedMarkdown = (node) => {
      // if there is an open tag, replace all indentation
      if (node.value.match(openRegex)) {
        node.value = node.value.replace(/^ */mg, '')
      }
    }

    // Sanitize markdown that has already been parsed
    const sanitizeEmbeddedParagraphs = (node) => {
      // get the previous html element
      const previous = beforeAll(tree, node)
        .reverse().filter(prev => prev.type === 'html')[0]

      // if there is a previous element, and it's a html open tag, 
      // and the current node starts at column 1, process the children
      if (previous && previous.value.match(openRegex) && node.position.start.column === 1) {
        // for each child, unindent if needed
        node.children.forEach(child => {
          // if the child is at column one, just unindent it from the start
          // of the line
          if (child.type === 'text' && child.position.start.column === 1) {
            child.value = child.value.replace(/^ */gm, '')
          // if the child is at not at column one, unindent it from the start
          // of every next line
          } else if (child.type === 'text') {
            child.value = child.value.replace(/\n^ */gm, '')
          }
        })
      }
    }

    // visit all HTML nodes and all parapgraphs
    visit(tree, 'html', sanitizeEmbeddedMarkdown)
    visit(tree, 'paragraph', sanitizeEmbeddedParagraphs)
  }
)

module.exports = attacher