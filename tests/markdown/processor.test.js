const Processor = require('../../src/markdown/processor')


beforeAll(() => {
  processor = new Processor({ sourcePath: './content/guides/foo.md' })
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
is_index: false
id: foo
rank: 0
type: guide
total_steps: 1
sibling_id: guides
parent_id: guides
next_page_id: guides
previous_page_id: ''
source_url: 'https://github.com/box/developer.box.com/blob/default/content/guides/foo.md'
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

</Foobar>`)})

test('should inline tags', () => {
  const contents = `
---
---
<Header 
  to='/guides'
  centered
>
  Developer News
</Header>
`

const output = processor.transform({ contents, isGuide: false })

expect(output).toEqual(`
---
category_id: null
subcategory_id: null
is_index: false
id: foo
rank: 0
type: guide
total_steps: 1
sibling_id: guides
parent_id: guides
next_page_id: guides
previous_page_id: ''
source_url: 'https://github.com/box/developer.box.com/blob/default/content/guides/foo.md'
---
<Header to='/guides' centered >

Developer News

</Header>`)
})