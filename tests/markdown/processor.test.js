const Processor = require('../../src/markdown/Processor')


beforeAll(() => {
  processor = new Processor({ sourcePath: 'content/guides/foo.md' })
})

test('should transform a complicated use case', () => {
  const isGuide = false
  const contents = `
---
test: foo
notes: |-
  Test
---

<Foobar id='no1' data-type="type" disabled>
  Hello
  
  Extra whitespace around here  
  
  <Message data-disabled='true' warning>
    # Title 

    This is a paragraph
  </Message>

  <Image data-id="test">![Test](./img.png)</Image>

  <Tabs>
    <Tab id='Node>
      \`\`\`js
      [1,2,3].map(i => (
        i+1
      ))
      
      # whitespace above and after: 
      \`\`\`
    </Tab>
  </Tabs>
</Foobar>`

  const output = processor.transform({ contents, isGuide })
  expect(output).toEqual(`
---
test: foo
notes: Test
category_id: null
subcategory_id: null
id: foo.md
type: guide
is_index: false
rank: 0
total_steps: 0
sibling_id: guides
parent_id: index.md
next_page_id: index.md
previous_page_id: ''
---

<Foobar id='no1' data-type="type" disabled>

Hello

Extra whitespace around here

<Message data-disabled='true' warning>

# Title

This is a paragraph

</Message>

<Image data-id="test">

![Test](./img.png)

</Image>

<Tabs>

<Tab id='Node>

\`\`\`js
[1,2,3].map(i => (
  i+1
))

# whitespace above and after: 
\`\`\`

</Tab>

</Tabs>

</Foobar>
`)})
