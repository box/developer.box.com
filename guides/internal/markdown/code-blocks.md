---
hide: true
category_id: internal
subcategory_id: internal/markdown
is_index: false
id: internal/markdown/code-blocks
rank: 0
type: guide
total_steps: 5
sibling_id: internal/markdown
parent_id: internal/markdown
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal/markdown/code-blocks.md
---
<!-- does not need translation -->

# Code Blocks

<!-- markdownlint-disable code-fence-style -->

Not all code samples exist in the SDK or CLI documentation. You can add new code
samples using standard Markdown back ticks.

~~~sh
```js
console.log('Hello, World!')
```
~~~

<H>

```js
console.log('Hello, World!')
```

</H>

<Message>

Please make sure to add a valid language (`js` in this example) to every
code block to ensure appropriate syntax highlighting is applied.

</Message>

## Highlighting a line

To highlight a line in the code sample we support Prism's
[line-highlight](https://prismjs.com/plugins/line-highlight/) plugin.

~~~sh
```js;highlight=2
let value = 1
value+=1
console.dir(value)
```
~~~

<H>

```js;highlight=2
let value = 1
value+=1
console.dir(value)
```

</H>

<!-- markdownlint-enable code-fence-style -->