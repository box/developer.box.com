---
hide: true
category_id: internal-documentation
subcategory_id: internal-documentation/ui-elements
is_index: false
id: internal-documentation/ui-elements/samples
rank: 0
type: guide
total_steps: 8
sibling_id: internal-documentation/ui-elements
parent_id: internal-documentation/ui-elements
next_page_id: internal-documentation/ui-elements
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/ui-elements/samples.md
---
<!-- does not need translation -->

# Samples

Samples represent a set of sample code blocks extracted from the CLI, SDK, and
cURL repositories. These code samples are automatically extracted from the
various markdown files in these repositories.

## IDs

Samples are specified by using the ID of the endpoint.

```html
<Samples id='get_files_id'></Samples>
```

<H>

<Samples id='get_files_id'/>

</H>

## Variants

By default the `default` variant is selected for a sample. For some samples
different variations exist. They can be specified by passing a `variant` name in.

```html
<Samples id='post_folders_id_copy' variant='with_name' ></Samples>
```

<H>

<Samples id='post_folders_id_copy' variant='with_name' />

</H>