const fs = require('fs-extra')
const path = require('path')
const yaml = require('js-yaml')

// checks for "[text](./local/link)", capturing the link url
const LOCAL_LINK_REGEX = new RegExp(/\[.*\]\(((\.\/)|\/.*)\)/, 'mg')
// checks for "[text]: ./local/link", capturing the link url
const LOCAL_REFERENCE_LINK_REGEX = new RegExp(/\[.*\]: *(\.\/.*)/, 'mg')
// checks for "[text][reference]", capturing the reference
const LOCAL_REFERENCE_REGEX = new RegExp(/\[.*\]\[([\w\-_]+)\]/, 'mg')
// checks for convenience links, e.g. guide://foo/bar
const GUIDE_OR_PAGE_LINKS = new RegExp(/(guide|guides|g|page|pages|[^a-z]p):\/\/([a-z-_0-9.\/]*)/, 'ig')

const PAGE_LINKS_INGORE = ['page://reference', 'pages://reference', 'p://reference']

class LinkValidator {
  constructor(source, allFiles) {
    this.source = source
    this.content = String(fs.readFileSync(source))
    this.dirname = path.dirname(source)
    this.frontmatter = yaml.load(this.content.split('---')[1]) || {}
    this.allFiles = allFiles.map(link => link.replace(/\/\d*-/g, '/'))
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
        resolved: path.join(this.dirname, link)
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
        resolved: path.join(this.dirname, link)
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
          resolved: path.join('content', `${type}s`, match[2])
        })
      })
  }

  // checks for local references ([text][reference]) to be defined somewhere
  // down the page as (e.g. "[reference]: ./foo/bar")
  localReferences()  {
    // Split all code samples so we only match on text
    const text = this.content
      .split(/```\w*\n/g)
      .filter((_, index) => index % 2 === 0)
      .join('\n')
    // map over all items
    return [...text.matchAll(LOCAL_REFERENCE_REGEX)]
      // get the actual captured part (the reference)
      .map(match => match[1])
  }

  frontmatterGuidesAndPages() {
    return [
      ...(this.frontmatter.related_guides || []).map(guide => ({
        original: guide,
        resolved: path.join('content', 'guides', guide)
      })),
      ...(this.frontmatter.required_guides || []).map(guide => ({
        original: guide,
        resolved: path.join('content', 'guides', guide)
      })),
      ...(this.frontmatter.related_pages || []).map(page => ({
        original: page,
        resolved: path.join('content', 'pages', page)
      }))
    ]
  }

  // check that all local (e.g. ./foo/bar) links are valid
  validateLocalLinks(links) {
    return links.map(link => {
      // get the index and as well as the full markdown name
      const filename = link.resolved
      const indexFilename = path.join(filename, 'index.md')
      const markdownFilename = [filename.replace(/\/$/, ''), '.md'].join('')

      // check of any of the variations exists
      if (
        !PAGE_LINKS_INGORE.includes(link.original) &&
        !this.allFiles.includes(filename) &&
        !this.allFiles.includes(markdownFilename) &&
        !this.allFiles.includes(indexFilename)
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