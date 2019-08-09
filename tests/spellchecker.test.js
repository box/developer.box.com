const { load } = require('./helpers/corpus')
const systemLang = process.env.LANG

/**
 * Load the corpus, ensure it's 
 * resolved, and configure the spell checker
 */
let corpus = null
beforeAll(() => {
  corpus = load()
  // console.dir(corpus)

  // make sure we use en-US spelling
  process.env.LANG = 'en_US'
  // spellChecker = require('./helpers/spellChecker')
  // make sure to reset the system language
  process.env.LANG  = systemLang
})

/**
 * Make sure the system language is reset at the end of 
 * the tests
 */
afterAll(() => {
  expect(process.env.LANG).toBe(systemLang)
})

/**
 * Test all titles and descriptions for spelling mistakes
 */
test('Expect titles and descriptions to pass spell checks', async () => {
  // await expect(corpus).toPassSpellChecks(spellChecker)
})