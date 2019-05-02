const fs = require('fs')
const { Resolver } = require("@stoplight/json-ref-resolver")
const yaml = require('js-yaml')

/**
 * A specification resolver that is used by Spectral to
 * resolve local file names
 * 
 */
const resolver = new Resolver({
  readers: {
    file: {
      /**
       * Translates custom URIs to objects
       */
      read(uri) {
        // get the content at the path
        const path = uri.path()
        const content = fs.readFileSync(`./src/${path}`)
        // parse the path as yml or json if needed
        if (path.endsWith('.json')) { return JSON.parse(content) }
        else if (path.endsWith('.yml')) { return yaml.load(content) }
        else { throw new Error(`Could not find reference ${path}`) }
      }
    }
  }
})

/**
 * A loader for reading the API specification from file and resolving all
 * references
 */
class Compiler {
  /**
   * Load the specification from file and resolve the references
   */
  async load() {
    const root = yaml.load(fs.readFileSync('./src/index.yml'))
    return await resolver.resolve(root).then(resolved => resolved.result)
  }

  /**
   * Write the resolved config to file
   */
  async write() {
    console.dir('Compiling')
    const target = 'compiled'
    const config = await this.load()

    // ensure the folder exusts
    if (!fs.existsSync(target)){
      fs.mkdirSync(target);
    }

    // Pretty print the config, with a tab size of 2
    fs.writeFileSync(`./${target}/config.json`, JSON.stringify(config, null, 2))
  }
}

// export a new loader
module.exports = new Compiler()