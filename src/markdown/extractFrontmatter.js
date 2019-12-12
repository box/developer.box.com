const yaml = require('js-yaml')

const extractFrontmatter = (frontmatter, sourcePath, isGuide) => {
  frontmatter = yaml.load(frontmatter)
  if (isGuide) {
    frontmatter.cId = cId(sourcePath)
    frontmatter.scId = scId(sourcePath)
  }
  frontmatter.id = id(sourcePath)
  frontmatter.isIndex = isIndex(sourcePath)
  return yaml.dump(frontmatter)
}

const id = (path) => (
  path.split('/').splice(3).join('/').replace('.md', '').replace(/\/index$/, '').replace(/^index$/, '')
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