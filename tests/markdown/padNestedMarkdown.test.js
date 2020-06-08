const pad = require('../../src/markdown/padNestedMarkdown')

test('should pad nested content', () => {
  const input = `
<Foobar>
Foobar
</Foobar>
`
  const output = pad(input)
  expect(output).toEqual(`<Foobar>

Foobar

</Foobar>`)
})

test('should pad nested, indented content', () => {
  const input = `
<Foobar>
  Foobar
</Foobar>
`
  const output = pad(input)
  expect(output).toEqual(`<Foobar>

  Foobar

</Foobar>`)
})

test('should pad nested tags', () => {
  const input = `
<Foo>
  Foobar

  <Bar>
    Foobar
  </Bar>
</Foo>
`
  const output = pad(input)
  expect(output).toEqual(`<Foo>

  Foobar

  <Bar>

    Foobar

  </Bar>

</Foo>`)
})


test('should pad nested tags with the same name', () => {
  const input = `
<Foo>
  Foobar

  <Foo>
    Foobar
  </Foo>
</Foo>
`
  const output = pad(input)
  expect(output).toEqual(`<Foo>

  Foobar

  <Foo>

    Foobar

  </Foo>

</Foo>`)
})

test('should deal with embedded reference images', () => {
  const input = `
<Foobar>
![Test][foobar_img]
</Foobar>
`
  const output = pad(input)
  expect(output).toEqual(`<Foobar>

![Test][foobar_img]

</Foobar>`)
})


test('should deal with embedded regular images', () => {
  const input = `
<Foobar border width={200}>
![Test](./img.png)
</Foobar>
`
  const output = pad(input)
  expect(output).toEqual(`<Foobar border width={200}>

![Test](./img.png)

</Foobar>`)
})

test('should deal with inline regular images', () => {
  const input = `
<Foobar>![Test](./img.png)</Foobar>
`
  const output = pad(input)
  expect(output).toEqual(`<Foobar>

![Test](./img.png)

</Foobar>`)
})

test('should deal with tag attributes', () => {
  const input = `
<Foobar id='id' data-type="type" data-key='namespaced:value' disabled>![Test](./img.png)</Foobar>
`
  const output = pad(input)
  expect(output).toEqual(`<Foobar id='id' data-type="type" data-key='namespaced:value' disabled>

![Test](./img.png)

</Foobar>`)
})
