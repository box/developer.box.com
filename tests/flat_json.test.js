const json = require('../src/microcopy/flat_json')
const raw = `{
  // a test comment
  "test": "value"
}`

/**
 * Make sure JSON parsing works
 */
test('Expect the comments to be skipped', async () => {
  let parsed = json.parse(`
    {
      // a test comment
      "test": "value"
    }
  `)
  expect(parsed).toEqual({
    'test': 'value'
  })
})

/**
 * Make sure JSON stringify works
 */
test('Expect the comments to be encoded', async () => {
  let stringified = json.stringify({
    '// test': 'a test comment',
    'test': 'value'
  }, null, 2)

  expect(stringified).toEqual(raw)
})
