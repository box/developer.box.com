const fs = require('fs')
const glob = require('glob')
const frontmatter = require('remark-frontmatter')
const unified = require('unified')
const remarkParse = require('remark-parse')
const stringify = require('rehype-stringify')
const remark2rehype = require('remark-rehype')
const html2text = require('html-to-text')

const processor = unified()
  .use(remarkParse)
  .use(remark2rehype)
  .use(frontmatter, ['yaml'])
  .use(stringify)

const load = async () => {
  const contents = glob.sync('./src/**/*.md')
    .map(readFile)

  return await Promise.all(contents.map(extractText))
}

const readFile = (filename) => (
  fs.readFileSync(filename).toString()
)

const extractText = async (content) => {
  return new Promise((resolve, reject) => {
    processor.process(content, (error, result) => {
      if (error) { reject(error) }
      const sanitized = html2text.fromString(result.contents, {wordwrap: false, preserveNewlines: false, uppercaseHeadings: false })
      resolve(sanitized)
    })
  })
}

module.exports = {
  load
}