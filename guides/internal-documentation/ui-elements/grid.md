---
hide: true
category_id: internal-documentation
subcategory_id: internal-documentation/ui-elements
is_index: false
id: internal-documentation/ui-elements/grid
rank: 0
type: guide
total_steps: 8
sibling_id: internal-documentation/ui-elements
parent_id: internal-documentation/ui-elements
next_page_id: internal-documentation/ui-elements
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/ui-elements/grid.md
---
<!-- does not need translation -->

# Grid

A basic grid can be established by wrapping elements in a `Grid` element. Grids
of 2, 3, and 4 columns are supported.

```html
<Grid columns='4'>
  ...
</Grid>
```

<Message warning>

Depending on the content of the grid you might get different results. It's
recommended to use grids in combination with nested custom elements.

</Message>