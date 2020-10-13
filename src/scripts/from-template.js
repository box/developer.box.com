const fs = require('fs-extra')
const path = require('path')

class FromTemplate {
  run(templateName='template.md', folder='guides') {
    // Extract the name and title from the args
    const [_, name, title] = process.argv

    // Ensure a name was provided
    if (!name) { return console.error('Expected a path for a file, e.g automation/webhook/create ')}

    // Determine the file and dir name
    const filename = `./content/${folder}/${name}.md`
    const dirname = path.dirname(filename)

    // Ensure the dir exists
    fs.ensureDirSync(dirname)

    // Copy the template
    fs.copyFileSync(`./content/templates/${templateName}`, filename)

    // If a title was defined, change the title in the guide
    if (title) {
      const content = fs.readFileSync(filename)
        .toString().replace('# Title', `# ${title}`)

      fs.writeFileSync(filename, content)
    }
  }
}

module.exports = new FromTemplate()