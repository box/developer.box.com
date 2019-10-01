const glob = require('glob')
const MarkdownProcessor = require('./processor')

/**
 * A helper class for reading markdown files and transpiling them
 */
class Compiler {
  writeGuides(source = './content/guides/', target = './compiled/guides/') {
    glob.sync(`${source}/**/*.md`).forEach(filename => {
      new MarkdownProcessor({ 
        sourcePath: filename
       }).write({
        from: source,
        to: target,
        isGuide: true
      })
    })
  }

  writePages(source = './content/pages/', target = './compiled/pages/') {
    glob.sync(`${source}/**/*.md`).forEach(filename => {
      new MarkdownProcessor({ 
        sourcePath: filename
       }).write({
        from: source,
        to: target
      })
    })
  }
}

// export a new loader
module.exports = new Compiler()