---
hide: true
category_id: internal
subcategory_id: internal/ui-elements
is_index: false
id: internal/ui-elements/grid
rank: 0
type: guide
total_steps: 8
sibling_id: internal/ui-elements
parent_id: internal/ui-elements
next_page_id: internal/ui-elements
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/internal/ui-elements/grid.md
---
<!-- does not need translation -->

# グリッド

基本的なグリッドは、要素を`Grid`要素にラップすることで作成できます。2列、3列、4列のグリッドがサポートされています。

```html
<Grid columns='4'>
  ...
</Grid>
```

<Message warning>

グリッドのコンテンツに応じて、返される結果が異なる場合があります。ネストされたカスタム要素と組み合わせてグリッドを使用することをお勧めします。

</Message>
