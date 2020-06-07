---
hide: true
category_id: internal
subcategory_id: internal/markdown
is_index: false
id: internal/markdown/tables
rank: 0
type: guide
total_steps: 5
sibling_id: internal/markdown
parent_id: internal/markdown
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/internal/markdown/tables.md
---

<!-- does not need translation -->

# Table

Tables can be created with the regular markdown syntax.

```md
| Header | Header | Header |
| ------ | ------ | ------ |
| Row 1  | Row 1  | Row 1  |
| Row 2  | Row 2  | Row 2  |
| Row 3  | Row 3  | Row 3  |
```

<H>

| Header | Header | Header |
| ------ | ------ | ------ |
| Row 1  | Row 1  | Row 1  |
| Row 2  | Row 2  | Row 2  |
| Row 3  | Row 3  | Row 3  |

</H>

## Hiding headers

Leave headers at the top of a table empty to hide them.

```md
|        |        |        |
| ------ | ------ | ------ |
| Row 1  | Row 1  | Row 1  |
| Row 2  | Row 2  | Row 2  |
| Row 3  | Row 3  | Row 3  |
```

<H>

|        |        |        |
| ------ | ------ | ------ |
| Row 1  | Row 1  | Row 1  |
| Row 2  | Row 2  | Row 2  |
| Row 3  | Row 3  | Row 3  |

</H>

## Wide tables

Wider tables are automatically set to scroll horizontally on smaller screens. To
allow for long tables in code you might want to add some hints to the markdown
linter to allow for long lines.

```md
<!-- markdownlint-disable line-length -->
| Header                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890` |
<!-- markdownlint-enable line-length -->
```

<H>

<!-- markdownlint-disable line-length -->
| Header                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890` |
<!-- markdownlint-enable line-length -->

</H>
