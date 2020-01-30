const fs = require('fs-extra')
const yaml = require('js-yaml')

class FronmatterValidator {
  constructor(source) {
    this.source = source
    this.content = String(fs.readFileSync(source))
    this.frontmatter = yaml.load(this.content.split('---')[1]) || {}
  }

  validateKeysAreIn(keys) {
    const unexpected = Object.keys(this.frontmatter).filter(key => !keys.includes(key))
    const pass = unexpected.length === 0
    const message = pass ? '' : `Unexpected frontmatter ${unexpected} in '${this.source}'`

    return {
      pass: pass,
      message: () => message
    }
  }

  validateIsArray(key) {
    const isArray = Array.isArray(this.frontmatter[key])
    const pass = isArray || this.frontmatter[key] === undefined
    const message = pass ? '' : `Frontmatter value ${key} in '${this.source}' frontmatter needs to be an array`

    return {
      pass: pass,
      message: () => message
    }
  }

  validateIsNumeric(key) {
    const isNumeric = typeof this.frontmatter[key] === 'number'
    const pass = isNumeric || this.frontmatter[key] === undefined
    const message = pass ? '' : `Frontmatter value ${key} in '${this.source}' frontmatter needs to be a number`

    return {
      pass: pass,
      message: () => message
    }
  }

  validateIsBoolean(key) {
    const isBoolean = [true, false].includes(this.frontmatter[key])
    const pass = isBoolean || this.frontmatter[key] === undefined
    const message = pass ? '' : `Frontmatter value ${key} in '${this.source}' frontmatter needs to be a boolean`

    return {
      pass: pass,
      message: () => message
    }
  }

  validateIsString(key) {
    const isString = typeof this.frontmatter[key] === 'string'
    const pass = isString || this.frontmatter[key] === undefined
    const message = pass ? '' : `Frontmatter value ${key} in '${this.source}' frontmatter needs to be a string`

    return {
      pass: pass,
      message: () => message
    }
  }

  validateIsOneOf(key, keys) {
    const isValid = keys.includes(this.frontmatter[key])
    const pass = isValid || this.frontmatter[key] === undefined
    const message = pass ? '' : `Frontmatter value ${key} in '${this.source}' frontmatter needs to be one of ${keys}`

    return {
      pass: pass,
      message: () => message
    }
  }
}

module.exports = FronmatterValidator