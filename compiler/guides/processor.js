const fs = require('fs-extra')
const path = require('path')
const unified = require('unified')
const markdown = require('remark-parse')
const toMarkdown = require('remark-stringify')
const frontmatter = require('remark-frontmatter')
const padNestedMarkdownWithNewlines = require('./padNestedMarkdown')
const unIndentNestedMarkdown = require('./unIndentNestedMarkdown')

class MarkdownProcessor {
  constructor({ sourcePath }) {
    this.sourcePath = sourcePath
  }

  /**
   * Writes a markdown file from `from` to the `to`
   * folder, applying transformations in the process.
   */
  async write({ 
    from, 
    to 
  }) {
    const contents = fs.readFileSync(this.sourcePath)
    const transformedContents = await this.transform({ contents })

    const sourceName = this.sourcePath.replace(from, '')

    const destinationPath = path.resolve(to, sourceName)
    const destinationDirectory = path.dirname(destinationPath)

    if (!fs.existsSync(destinationDirectory)) { 
      fs.mkdirpSync(destinationDirectory)
    }

    fs.writeFileSync(destinationPath, transformedContents)
  }

  async transform({ 
    contents 
  }) {
    const processor = unified()
      .use(markdown)
      .use(toMarkdown)
      .use(padNestedMarkdownWithNewlines)
      .use(unIndentNestedMarkdown)
      .use(frontmatter, ['yaml'])
      

    const processed = await processor.process(contents)
    
    return processed.contents
  }
}

module.exports = MarkdownProcessor