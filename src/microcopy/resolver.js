const fs = require('fs')
const { Resolver } = require("@stoplight/json-ref-resolver")
const yaml = require('js-yaml')

/**
 * A specification resolver that is used by Spectral to
 * resolve local file names
 */
module.exports = new Resolver({
  resolvers: {
    file: {
      /**
       * Translates custom URIs to objects
       */
      async resolve(uri) {
        // get the content at the path
        const path = uri.path()
        const content = fs.readFileSync(path)
        // parse the path as yml or json if needed
        if (path.endsWith('.json')) { return JSON.parse(content) }
        else if (path.endsWith('.yml')) { return yaml.load(content) }
        else { throw new Error(`Could not find reference ${path}`) }
      }
    }
  }
})