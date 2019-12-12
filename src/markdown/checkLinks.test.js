const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')

const LinkValidator = require('./LinkValidator')

const files = glob.sync('content/?(pages|guides)/**/*.md')
files.forEach(source => {
  test('check all local links are valid', () => {
    const validator = new LinkValidator(source)
    expect(validator).toHaveValidLocalLinks()
    expect(validator).toHaveValidLocalReferenceLinks()
    expect(validator).toHaveValidReferences()
    expect(validator).toHaveValidGuideOrPageLinks()
    expect(validator).toHaveValidRelatedFrontmatter()
  })
})

expect.extend({
  toHaveValidLocalLinks(validator) {
    const links = validator.localLinks()
    const errors = validator.validateLocalLinks(links)
    return validator.linkResponse(errors)
  }
})

expect.extend({
  toHaveValidLocalReferenceLinks(validator) {
    const links = validator.localReferenceLinks()
    const errors = validator.validateLocalLinks(links)
    return validator.linkResponse(errors)    
  }
})

expect.extend({
  toHaveValidReferences(validator) {
    const references = validator.localReferences()
    const errors = validator.validateReferences(references)
    return validator.referenceResponse(errors)
  }
})

expect.extend({
  toHaveValidGuideOrPageLinks(validator) {
    const links = validator.guideOrPageLinks()
    const errors = validator.validateLocalLinks(links)
    return validator.linkResponse(errors)    
  }
})

expect.extend({
  toHaveValidRelatedFrontmatter(validator) {
    const links = validator.frontmatterGuidesAndPages()
    const errors = validator.validateLocalLinks(links)
    return validator.linkResponse(errors)    
  }
})