const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')
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
    glob.sync(`${source}/**/*.+(jpg|jpeg|png|gif)`).forEach(filename => {
      copyAssets(source, target, filename)
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
    glob.sync(`${source}/**/*.+(jpg|jpeg|png|gif)`).forEach(filename => {
      copyAssets(source, target, filename)
    })
  }
}

const copyAssets = (sourceDir, targetDir, source) => {
  const destination = `${targetDir}${source.replace(sourceDir, '')}`
  const destinationDir = path.dirname(destination)
  fs.mkdirpSync(destinationDir)
  fs.copyFileSync(source, destination)
}

// export a new loader
module.exports = new Compiler()