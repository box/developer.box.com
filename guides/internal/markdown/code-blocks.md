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
fullyTranslated: true
---
<!-- does not need translation -->

# コードブロック

<!-- markdownlint-disable code-fence-style -->

SDKまたはCLIのドキュメントにすべてのコードサンプルが含まれているわけではありません。新しいコードサンプルを追加するには、標準のマークダウンバッククォートで囲みます。

````sh
```js
console.log('Hello, World!')
```
````

<H>

```js
console.log('Hello, World!')
```

</H>

<Message>

適切な構文のハイライトが適用されるように、すべてのコードブロックに有効な言語 (この例では`js`) を追加してください。

</Message>

## 行をハイライトする

コードサンプルの行をハイライトするには、Prismの[line-highlight](https://prismjs.com/plugins/line-highlight/)プラグインをサポートします。

````sh
```js;highlight=2
let value = 1
value+=1
console.dir(value)
```
````

<H>

```js;highlight=2
let value = 1
value+=1
console.dir(value)
```

</H>

<!-- markdownlint-enable code-fence-style -->
