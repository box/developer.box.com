---
hide:  true
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
| Header                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890` |
```

<H>
| Header                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890` |
</H>
