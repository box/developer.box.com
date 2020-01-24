const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')
const MarkdownProcessor = require('./processor')
const { sync } = require('sha1-from-file')

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
        to: target
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
  const destination = `${targetDir}${source.replace(sourceDir, '')}`.replace(/\/\d*-/g, '/')
  const destinationDir = path.dirname(destination)
  fs.mkdirpSync(destinationDir)
  
  const sourceHash = sync(fs.readFileSync(source))
  const destinationHash = fs.existsSync(destination) ? sync(fs.readFileSync(destination)) : ''

  if (sourceHash !== destinationHash) {
    fs.copyFileSync(source, destination)
  }
}

// export a new loader
module.exports = new Compiler()