const yaml = require('js-yaml')

const extractFrontmatter = (contents, sourcePath) => {
  let [_, frontmatter, markdown] = contents.split('---\n')
  frontmatter = yaml.load(frontmatter)
  frontmatter.id = id(sourcePath)
  frontmatter.cId = cId(sourcePath)
  frontmatter.scId = scId(sourcePath)
  frontmatter.isIndex = isIndex(sourcePath)
  frontmatter = yaml.dump(frontmatter)
  return [_, frontmatter, markdown].join('---\n')
}

const id = (path) => (
  path.split('/').splice(3).join('/').replace('.md', '')
)

const cId = (path) => (
  path.split('/').splice(3, 1).filter(item => !item.endsWith('.md'))[0] || null
)

const scId = (path) => {
  const subcategoryID = path.split('/').splice(4, 2).filter(item => !item.endsWith('.md'))[0]
  if (subcategoryID) return [cId(path), subcategoryID].join('/')
  else return null
}

const isIndex = (path) => (
  path.endsWith('/index.md')
)

module.exports = extractFrontmatter