const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')

const files = glob.sync('content/?(pages|guides)/**/*.md')
files.forEach(file => {
  test('check all local links are valid', () => {
    expect(file).toHaveValidLocalLinks()
    expect(file).toHaveValidLocalRefLinks()
    expect(file).toHaveValidReferences()
    expect(file).toHaveValidGuideOrPageLinks()
  })
})


// check that all local (e.g. ./foo/bar) links are valid
const localLinkRegex = new RegExp(/\[.*\]\((\.\/.*)\)/, 'mg')

expect.extend({
  toHaveValidLocalLinks(source) {
    const contents = fs.readFileSync(source)
    const errors = []

    while ((match = localLinkRegex.exec(contents)) !== null) {
      const directory = path.dirname(source)
      const filename = path.resolve(directory, match[1])
      const markdownFilename = [filename, '.md'].join('')

      if (!fs.existsSync(filename) && !fs.existsSync(markdownFilename)) {
        console.dir(markdownFilename)
        errors.push([source, match[1]])
      }
    }

    if (errors.length === 0) {
      return {
        pass: true,
        message: () => '',
      }
    } else {
      return {
        pass: false,
        message: () => errors.map(([source, file]) => (
          `Could not find '${file}' in '${source}'`
        )).join('\n')
      }
    }
    
  },
})


// check that all local (e.g. ./foo/bar) links are valid
const localRefLinkRegex = new RegExp(/\[.*\]: *(\.\/.*)/, 'mg')

expect.extend({
  toHaveValidLocalRefLinks(source) {
    const contents = fs.readFileSync(source)
    const errors = []

    while ((match = localRefLinkRegex.exec(contents)) !== null) {
      const directory = path.dirname(source)
      const filename = path.resolve(directory, match[1])
      const markdownFilename = [filename, '.md'].join('')

      if (!fs.existsSync(filename) && !fs.existsSync(markdownFilename)) {
        console.dir(markdownFilename)
        errors.push([source, match[1]])
      }
    }

    if (errors.length === 0) {
      return {
        pass: true,
        message: () => '',
      }
    } else {
      return {
        pass: false,
        message: () => errors.map(([source, file]) => (
          `Could not find '${file}' in '${source}'`
        )).join('\n')
      }
    }
    
  },
})


// check all reference links exist
const referenceLinkRegex = new RegExp(/\[.*\]\[(\w+)\]/, 'mg')

expect.extend({
  toHaveValidReferences(source) {
    const contents = fs.readFileSync(source)
    const errors = []

    while ((match = referenceLinkRegex.exec(contents)) !== null) {
      const ref = match[1]
      if (!contents.includes(`\n[${ref}]:`)) {
        errors.push([source, ref])
      }
    }

    if (errors.length === 0) {
      return {
        pass: true,
        message: () => '',
      }
    } else {
      return {
        pass: false,
        message: () => errors.map(([source, file]) => (
          `Could not reference '[${file}]' in '${source}'`
        )).join('\n')
      }
    }
    
  },
})

// check that all local (e.g. ./foo/bar) links are valid
const guideOrPageLinkRegex = new RegExp(/(guide|guides|g|page|pages|[^a-z]p):\/\/([a-z-_0-9.\/]*)/, 'ig')

expect.extend({
  toHaveValidGuideOrPageLinks(source) {
    const contents = fs.readFileSync(source)
    const errors = []

    while ((match = guideOrPageLinkRegex.exec(contents)) !== null) {
      const type = match[1].startsWith('g') ? 'guide' : 'page'

      const filename = path.resolve('content', `${type}s`, match[2])
      const markdownFilename = [filename, '.md'].join('')

      if (!fs.existsSync(filename) && !fs.existsSync(markdownFilename)) {
        errors.push([source, type, match[2]])
      }
    }

    if (errors.length === 0) {
      return {
        pass: true,
        message: () => '',
      }
    } else {
      return {
        pass: false,
        message: () => errors.map(([source, type, file]) => (
          `Could not find ${type} '${file}' in '${source}'`
        )).join('\n')
      }
    }
    
  },
})