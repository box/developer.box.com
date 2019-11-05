const fs = require('fs-extra')
const path = require('path')
const padNestedMarkdownWithNewlines = require('./padNestedMarkdown')
const unIndentNestedMarkdown = require('./unIndentNestedMarkdown')
const expandSelfClosingTags = require('./expandSelfClosingTags')
const extractFrontmatter = require('./extractFrontmatter')
const addFinalLine = require('./addFinalLine')

class MarkdownProcessor {
  constructor({ sourcePath }) {
    this.sourcePath = sourcePath
  }

  /**
   * Writes a markdown file from `from` to the `to`
   * folder, applying transformations in the process.
   */
  write({ 
    from, 
    to,
    isGuide = false
  }) {
    // read the content and transform it
    const contents = fs.readFileSync(this.sourcePath).toString()
    const transformedContents = this.transform({ contents, isGuide })
    // determine the source
    const sourceName = this.sourcePath.replace(from, '')
    // determine the destination
    const destinationPath = path.resolve(to, sourceName)
    const destinationDirectory = path.dirname(destinationPath)

    // ensure the destination folder exists
    if (!fs.existsSync(destinationDirectory)) { 
      fs.mkdirpSync(destinationDirectory)
    }

    // write the new content to the destination
    fs.writeFileSync(destinationPath, transformedContents)
  }

  /**
   * Applies some transformation to every markdown file
   */
  transform({ 
    contents,
    isGuide
  }) {
    let [_, frontmatter, markdown] = contents.split('---\n')
    frontmatter = extractFrontmatter(frontmatter, this.sourcePath, isGuide)

    markdown = addFinalLine(markdown)
    markdown = expandSelfClosingTags(markdown)
    markdown = unIndentNestedMarkdown(markdown)
    markdown = padNestedMarkdownWithNewlines(markdown)

    return [_, frontmatter, markdown].join('---\n')
  }
}

module.exports = MarkdownProcessor