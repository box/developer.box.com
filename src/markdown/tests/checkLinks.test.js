const glob = require('glob')

const files = glob.sync('content/?(pages|guides)/**/*.md')
const alLFiles = glob.sync('content/?(pages|guides)/**/*.?(png|gif|jpg|md|jpeg)')
alLFiles.push('content/pages/changelog/index.md')

const LinkValidator = require('../LinkValidator')

files.forEach(source => {
  test('check all local links are valid', () => {
    const validator = new LinkValidator(source, alLFiles)
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