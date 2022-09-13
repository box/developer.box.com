const addFinalLine = (contents) => (
  contents.endsWith('\n') ? contents : `${contents}\n`
)

module.exports = addFinalLine