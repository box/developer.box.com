const yaml = require('js-yaml')
const _path = require('path')
const glob = require('glob')
const fs = require('fs')

const TYPES = {
  pages: 'page',
  guides: 'guide'
}

const REPO_NAME = 'box/developer.box.com'

const extractFrontmatter = (frontmatter, sourcePath) => {
  frontmatter = yaml.load(frontmatter) || {}

  frontmatter.category_id = categoryId(sourcePath)
  frontmatter.subcategory_id = subcategoryId(sourcePath)
  frontmatter.is_index = isIndex(sourcePath)
  frontmatter.id = id(sourcePath)
  frontmatter.rank = rank(frontmatter, sourcePath)
  frontmatter.type = type(sourcePath, frontmatter)
  frontmatter.total_steps = totalSteps(sourcePath)
  frontmatter.sibling_id = siblingsId(sourcePath, frontmatter.is_index)
  frontmatter.parent_id = parentId(sourcePath, frontmatter.is_index)
  frontmatter.next_page_id = nextPageId(sourcePath, frontmatter.rank)
  frontmatter.previous_page_id = previousPageId(sourcePath, frontmatter.rank)
  frontmatter.source_url = sourceUrl(sourcePath)

  return yaml.dump(frontmatter)
}

// Creates a unique ID for this file
const id = (path) => {
  if (!path) { return '' }
  const id = path.split('/').splice(3).join('/').replace('.md', '').replace(/\/\d*-/g, '/').replace(/\/index$/, '').replace(/^index$/, '')
  if (!id || id === '') { return path.split('/')[2] || path.split('/')[1] }
  else { return id }
}

// Sets a default type of page
const type = (path, frontmatter) => {
  if (frontmatter.type) { return frontmatter.type }
  else {
    const folder = path.split('content/')[1].split('/')[0]
    return TYPES[folder] || 'guide'
  }
}

// Creates the category ID for this file
const categoryId = (path) => (
  path.split('/').splice(3, 1).filter(item => !item.endsWith('.md'))[0] || null
)

// Creates the subcategory ID for this file
const subcategoryId = (path) => {
  const subcategoryID = path.split('/').splice(4, 2).filter(item => !item.endsWith('.md'))[0]
  if (subcategoryID) return [categoryId(path), subcategoryID].join('/')
  else return null
}

// Extracts the rank for this file from the filename
const rank = (frontmatter, sourcePath) => {
  if (frontmatter && frontmatter.rank) { return frontmatter.rank }
  
  const filename = _path.basename(sourcePath)
  const dirname = _path.dirname(sourcePath).split('/').pop()

  if (isIndex(sourcePath) && dirname.match(/^\d*-/)) {
    return Number(dirname.split('-')[0])
  } else if (filename.match(/^\d*-/)) {
    return Number(filename.split('-')[0])
  } else {
    return 0
  }
}

// Checks if this file is an index file
const isIndex = (path) => (
  path.endsWith('/index.md') || path.endsWith('-index.md')
)

// Get the total number of steps in this group
const totalSteps = (path) => {
  const dirname = _path.dirname(path)
  const files = glob.sync(`${dirname}/*.md`)
  return files.length-1
} 

// Gets all the guides that are siblings to this guide
const siblingsId = (path, isIndex) => {
  let dirname = _path.dirname(path)
  if (isIndex) { dirname = _path.dirname(dirname) }
  return id(dirname)
}

// Gets the parent guides for this guide
const parentId = (path, isIndex) => {
  let dirname = _path.dirname(path)
  if (isIndex) { dirname = _path.dirname(dirname) }

  return glob.sync(`${dirname}/*.md`).filter(checkIsIndex).filter(not(path)).map(id)[0] || ''
}

// Gets the parent guides for this guide
const nextPageId = (path, previousRank) => {
  let dirname = _path.dirname(path)
  
  const page = glob.sync(`${dirname}/*.md`)
    .map(filename => {
      const content = String(fs.readFileSync(filename))
      const parts = content.split('---')
      const frontmatter = yaml.load(parts[1]) || {}
      frontmatter.rank = rank(frontmatter, filename)
      frontmatter.filename = filename
      return frontmatter
    })
    .sort((a,b) => a.rank - b.rank)
    .filter(frontmatter => frontmatter.rank > previousRank)[0] || {}

    return id(page.filename)
}

// Gets the parent guides for this guide
const previousPageId = (path, nextRank) => {
  let dirname = _path.dirname(path)
  
  const page = glob.sync(`${dirname}/*.md`)
    .map(filename => {
      const content = String(fs.readFileSync(filename))
      const parts = content.split('---')
      const frontmatter = yaml.load(parts[1]) || {}
      frontmatter.rank = rank(frontmatter, filename)
      frontmatter.filename = filename
      return frontmatter
    })
    .sort((a,b) => b.rank - a.rank)
    .filter(frontmatter => frontmatter.rank < nextRank)[0] || {}

    return id(page.filename)
}

const checkIsIndex = (name) => (name.endsWith('/index.md') || name.endsWith('-index.md'))
const not = (match) => (item) => item !== match

const sourceUrl = (sourcePath) => {
  return `https://github.com/${REPO_NAME}/blob/default/${sourcePath.replace('./', '')}`
}

module.exports = extractFrontmatter