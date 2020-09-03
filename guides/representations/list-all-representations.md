---
rank: 1
related_endpoints:
  - get_files_id
related_guides:
  - representations/request-a-representation
  - representations/supported-file-types
required_guides: []
alias_paths: []
category_id: representations
subcategory_id: null
is_index: false
id: representations/list-all-representations
type: guide
total_steps: 8
sibling_id: representations
parent_id: representations
next_page_id: representations/request-a-representation
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/representations/list-all-representations.md
---
# List All Representations for File

To see what representations are available for a file you can call the
[`GET /files/:id`][get_files_id] endpoint while requesting the
[`representations`][file_representations] field.

```curl
curl https://api.box.com/2.0/files/123?fields=representations \
    -H "authorization: Bearer ACCESS_TOKEN"
```

The response will include a list of representations in the following format

<!-- markdownlint-disable line-length -->

```json
...
{
  "info": {
    "url": "https://api.box.com/2.0/internal_files/123/versions/345/representations/jpg_thumb_32x32"
  },
  "properties": {
      "dimensions": "32x32",
      "paged": "false",
      "thumb": "true"
  },
  "representation": "jpg"
}
...
```

<!-- markdownlint-enable line-length -->

## Response fields

Every representation will include a set of properties and the type of
representation.

* The optional `dimensions` field represents the file's dimensions in
  pixels as width by height.

* The optional `paged` field specifies if this representation is a paged
  document. Some images and PDFs will often be paged documents.

* The optional `thumb` field specifies if this representation is suitable
  as a file thumbnail.

[get_files_id]: endpoint://get-files-id
[file_representations]: resource://file#param-representations