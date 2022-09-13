const expand = require('../../src/markdown/expandSelfClosingTags')

test('should expand a self closing tag', () => {
  const input = `<Foobar />`
  const output = expand(input)
  expect(output).toEqual(`<Foobar ></Foobar>`)
})

test('should handle attributes with strings and dashes', () => {
  const input = `<Foobar id='no1' data-type="type" disabled />`
  const output = expand(input)
  expect(output).toEqual(`<Foobar id='no1' data-type="type" disabled ></Foobar>`)
})
