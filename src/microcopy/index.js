const fs = require('fs-extra')
const yaml = require('js-yaml')

const resolver = require('./resolver')
const json = require('./flat_json')

/**
 * A helper class for reading the API specification from file and resolving all
 * references
 */
class Compiler {
  /**
   * Load the specification from file and resolve the references
   */
  async load(source = './content/microcopy/index.yml') {
    const root = yaml.load(fs.readFileSync(source))
    return await resolver.dereference(root)
  }

  /**
   * Write the resolved config to file
   */
  async write(target = './compiled/microcopy', fileName = 'microcopy.json') {
    const config = await this.load()

    // ensure the folder exists
    if (!fs.existsSync(target)){
      fs.mkdirpSync(target);
    }

    // Pretty print the config
    fs.writeFileSync(
      `${target}/${fileName}`, 
      json.stringify(config, null, 2)
    )
  }
}

// export a new loader
module.exports = new Compiler()