---
hide: true
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
