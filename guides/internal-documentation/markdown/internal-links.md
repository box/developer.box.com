---
hide: true
category_id: internal-documentation
subcategory_id: internal-documentation/markdown
is_index: false
id: internal-documentation/markdown/internal-links
rank: 0
type: guide
total_steps: 5
sibling_id: internal-documentation/markdown
parent_id: internal-documentation/markdown
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/markdown/internal-links.md
---
<!-- does not need translation -->

# Internal links

To link to the right internal guides, references, and endpoints, you can use the
following syntax.

```json
[Get a file by ID](endpoint://get_files_id)
[A file](resource://file)
[Get a file](guide://files/get)
[Box](https://box.com)
```

<H>

[Get a file by ID](endpoint://get_files_id)

[A file](resource://file)

[Get a file](guide://files/get)

[Box](https://box.com)

</H>

<Message>

This technique automatically adds the locale to the path. This ensures links
work correctly when translated to other languages.

</Message>

## Short-hand

Additionally, the syntax can be shortened as follows:

```json
[Get a file by ID](e://get_files_id)
[A file](r://file)
[Get a file](g://files/get)
[Box](https://box.com)
```

<H>

[Get a file by ID](e://get_files_id)

[A file](r://file)

[Get a file](g://files/get)

[Box](https://box.com)

</H>