const yaml = require('js-yaml')
const _path = require('path')

const extractFrontmatter = (frontmatter, sourcePath, isGuide) => {
  frontmatter = yaml.load(frontmatter)
  if (isGuide) {
    frontmatter.cId = cId(sourcePath)
    frontmatter.scId = scId(sourcePath)
  }
  frontmatter.id = id(sourcePath)
  frontmatter.isIndex = isIndex(sourcePath)
  frontmatter.rank = rank(frontmatter, sourcePath)
  return yaml.dump(frontmatter)
}

const id = (path) => (
  path.split('/').splice(3).join('/').replace('.md', '').replace(/\/\d*-/, '/').replace(/\/index$/, '').replace(/^index$/, '')
)

const cId = (path) => (
  path.split('/').splice(3, 1).filter(item => !item.endsWith('.md'))[0] || null
)

const scId = (path) => {
  const subcategoryID = path.split('/').splice(4, 2).filter(item => !item.endsWith('.md'))[0]
  if (subcategoryID) return [cId(path), subcategoryID].join('/')
  else return null
}

const rank = (frontmatter, sourcePath) => {
  if (frontmatter.rank) { return frontmatter.rank }
  
  const filename = _path.basename(sourcePath)
  if (filename.match(/^\d*-/)) {
    return Number(filename.split('-')[0])
  } else {
    return 0
  }
}

const isIndex = (path) => (
  path.endsWith('/index.md') || path.endsWith('-index.md')
)

module.exports = extractFrontmatter