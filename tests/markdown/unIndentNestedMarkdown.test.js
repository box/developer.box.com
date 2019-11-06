const unpad = require('../../src/markdown/unIndentNestedMarkdown')

test('should unpad nested content', () => {
  const input = `
<Foobar>
  Test
</Foobar>
`
  const output = unpad(input)
  expect(output).toEqual(`
<Foobar>
Test
</Foobar>
`)
})

test('should leave embedded code alone', () => {
  const input = `
<Foobar>
  \`\`\`js
  <Whoop>
    Test
  </Whoop>
  \`\`\`
</Foobar>
`
  const output = unpad(input)
  expect(output).toEqual(`
<Foobar>
\`\`\`js
<Whoop>
  Test
</Whoop>
\`\`\`
</Foobar>
`)
})

test('should deal with embdedded code with the tag name', () => {
  const input = `
<Foobar>
  \`\`\`js
  <Foobar>
    Test
  </Foobar>
  \`\`\`
</Foobar>
`
  const output = unpad(input)
  expect(output).toEqual(`
<Foobar>
\`\`\`js
<Foobar>
  Test
</Foobar>
\`\`\`
</Foobar>
`)
})


test('should unpad nested tags with the same name', () => {
  const input = `
<Foo>
  Foobar

  <Bar>
    Foobar
  </Bar>
</Foo>
`
  const output = unpad(input)
  expect(output).toEqual(`
<Foo>
Foobar

<Bar>
Foobar
</Bar>
</Foo>
`)
})


test('should unpad nested tags with the same name', () => {
  const input = `
<Foo>
  Foobar

  <Foo>
    Foobar
  </Foo>
</Foo>
`
  const output = unpad(input)
  expect(output).toEqual(`
<Foo>
Foobar

<Foo>
Foobar
</Foo>
</Foo>
`)
})

test('should deal with nested tabs', () => {
  const input = `
  <Tabs>
    <Tab id='Node>
      \`\`\`js
      [1,2,3].map(i => (
        i+1
      ))
      \`\`\`
    </Tab>
  </Tabs>
`
  const output = unpad(input)
  expect(output).toEqual(`
<Tabs>
<Tab id='Node>
\`\`\`js
[1,2,3].map(i => (
  i+1
))
\`\`\`
</Tab>
</Tabs>
`)
})