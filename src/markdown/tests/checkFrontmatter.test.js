const glob = require('glob')

const files = glob.sync('content/?(pages|guides)/**/*.md')

const FrontmatterValidator = require('../FrontmatterValidator')

files.forEach(source => {
  test('check all frontmatter is valid', () => {
    const validator = new FrontmatterValidator(source)
    expect(validator).keysAreIn([
      'related_guides',
      'related_pages',
      'required_guides',
      'related_endpoints',
      'related_resources',
      'alias_paths',
      'rank',
      'centered',
      'hide_search',
      'hide_title',
      'hide_step_number',
      'hide_in_page_nav',
      'type',
      'hide',
      'notes',
      'note'
    ])

    expect(validator).isArray('related_guides')
    expect(validator).isArray('related_pages')
    expect(validator).isArray('required_guides')
    expect(validator).isArray('related_endpoints')
    expect(validator).isArray('related_resources')
    expect(validator).isArray('alias_paths')

    expect(validator).isNumeric('rank')

    expect(validator).isBoolean('centered')
    expect(validator).isBoolean('hide_search')
    expect(validator).isBoolean('hide_title')
    expect(validator).isBoolean('hide_step_number')
    expect(validator).isBoolean('hide_in_page_nav')
    expect(validator).isBoolean('hide')

    expect(validator).isOneOf('type', ['guide', 'page', 'quick-start'])

    expect(validator).isString('type')
    expect(validator).isString('notes')
    expect(validator).isString('note')  
  })
})

expect.extend({
  keysAreIn(validator, keys) {
    return validator.validateKeysAreIn(keys)
  }
})


expect.extend({
  isArray(validator, key) {
    return validator.validateIsArray(key)
  }
})

expect.extend({
  isNumeric(validator, key) {
    return validator.validateIsNumeric(key)
  }
})

expect.extend({
  isBoolean(validator, key) {
    return validator.validateIsBoolean(key)
  }
})

expect.extend({
  isOneOf(validator, key, values) {
    return validator.validateIsOneOf(key, values)
  }
})

expect.extend({
  isString(validator, key, values) {
    return validator.validateIsString(key)
  }
})
