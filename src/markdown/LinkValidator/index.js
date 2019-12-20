const fs = require('fs-extra')
const path = require('path')
const yaml = require('js-yaml')
const glob = require('glob')

// checks for "[text](./local/link)", capturing the link url
const LOCAL_LINK_REGEX = new RegExp(/\[.*\]\(((\.\/)|\/.*)\)/, 'mg')
// checks for "[text]: ./local/link", capturing the link url
const LOCAL_REFERENCE_LINK_REGEX = new RegExp(/\[.*\]: *(\.\/.*)/, 'mg')
// checks for "[text][reference]", capturing the reference
const LOCAL_REFERENCE_REGEX = new RegExp(/\[.*\]\[([\w\-_]+)\]/, 'mg')
// checks for convenience links, e.g. guide://foo/bar
const GUIDE_OR_PAGE_LINKS = new RegExp(/(guide|guides|g|page|pages|[^a-z]p):\/\/([a-z-_0-9.\/]*)/, 'ig')

class LinkValidator {
  constructor(source) {
    this.source = source
    this.content = String(fs.readFileSync(source))
    this.dirname = path.dirname(source)
    this.frontmatter = yaml.load(this.content.split('---')[1])
  }

  // checks for local links (./foo/bar) in the body
  localLinks() {
    // map over all items
    return [...this.content.matchAll(LOCAL_LINK_REGEX)]
      // get the actual captured part (the url)
      .map(link => link[1])
      // get the full name for that file
      .map(link => ({
        original: link, 
        resolved: path.resolve(this.dirname, link)
      }))
  }

  // checks for local links (./foo/bar) at the bottom of a markdown
  // file (e.g. [foo]: ./link)
  localReferenceLinks()  {
    // map over all items
    return [...this.content.matchAll(LOCAL_REFERENCE_LINK_REGEX)]
      // get the actual captured part (the url)
      .map(link => link[1])
      // get the full name for that file
      .map(link => ({
        original: link, 
        resolved: path.resolve(this.dirname, link)
      }))
  }

  // checks for local guide or reference links, e.g. guide://foo/bar
  guideOrPageLinks()  {
    // map over all items
    return [...this.content.matchAll(GUIDE_OR_PAGE_LINKS)]
      // get the actual captured part (the url)
      .map(match => {
        const type = match[1].startsWith('g') ? 'guide' : 'page'
        return ({
          original: match[0], 
          resolved: path.resolve('content', `${type}s`, match[2])
        })
      })
  }

  // checks for local references ([text][reference]) to be defined somewhere
  // down the page as (e.g. "[reference]: ./foo/bar")
  localReferences()  {
    // map over all items
    return [...this.content.matchAll(LOCAL_REFERENCE_REGEX)]
      // get the actual captured part (the reference)
      .map(match => match[1])
  }

  frontmatterGuidesAndPages() {
    return [
      ...(this.frontmatter.related_guides || []).map(guide => ({ 
        original: guide, 
        resolved: path.resolve('content', 'guides', guide)
      })),
      ...(this.frontmatter.required_guides || []).map(guide => ({ 
        original: guide, 
        resolved: path.resolve('content', 'guides', guide)
      })),
      ...(this.frontmatter.related_pages || []).map(page => ({ 
        original: page, 
        resolved: path.resolve('content', 'pages', page)
      }))
    ]
  }

  // check that all local (e.g. ./foo/bar) links are valid
  validateLocalLinks(links) {
    return links.map(link => {
      // get the index and as well as the full markdown name
      const filename = link.resolved
      const indexFilename = [filename, '/index', '.md'].join('')
      const markdownFilename = [filename, '.md'].join('')
      const lastSlashIndex = markdownFilename.lastIndexOf('/')
      const indexedFileName = [markdownFilename.substring(0, lastSlashIndex), '/*-', markdownFilename.substring(lastSlashIndex+1)].join('')

      // check of any of the variations exists
      if (
        !fs.existsSync(filename) && 
        !fs.existsSync(markdownFilename) && 
        !fs.existsSync(indexFilename) &&
        !glob.sync(indexedFileName)[0]
      ) {
        return {
          source: this.source,
          link: link
        }
      }
    }).filter(response => !!response)
  }

  validateReferences(references) {
    return references.map(reference => {
      if (reference === 'status-code') {
        console.dir(reference)
      }
      if (!this.content.includes(`\n[${reference}]:`)) {
        return {
          source: this.source,
          reference: reference
        }
      }
    }).filter(response => !!response)
  }

  // takes a list of errors and converts them to an error
  linkResponse(errors) {
    const pass = errors.length === 0
    const message = pass ? '' : errors.map(error => (
      `Could not find link '${error.link.original}' in '${error.source}'`
    )).join('\n')

    return {
      pass: pass,
      message: () => message
    }
  }

  // takes a list of errors and converts them to an error
  referenceResponse(errors) {
    const pass = errors.length === 0
    const message = pass ? '' : errors.map(error => (
      `Could not find reference [${error.reference}] in '${error.source}'`
    )).join('\n')

    return {
      pass: pass,
      message: () => message
    }
  }
}

module.exports = LinkValidator