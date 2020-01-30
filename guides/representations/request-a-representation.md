---
rank: 2
related_endpoints:
  - get_files_id
related_guides:
  - representations/download-a-representation
  - representations/supported-file-types
required_guides:
  - representations/list-all-representations
alias_paths: []
category_id: representations
subcategory_id: null
is_index: false
id: representations/request-a-representation
type: guide
total_steps: 8
sibling_id: representations
parent_id: representations
next_page_id: representations/download-a-representation
previous_page_id: representations/list-all-representations
---

# Request Desired Representation

To select a specific representation call the [`GET /files/:id`][get_files_id]
endpoint with a [`X-Rep-Hints`][x-rep-hints]-header defining the
required representation format.

```curl
curl https://api.box.com/2.0/files/123?fields=representations \
  -H "X-Rep-Hints: [pdf]" \
  -H "Authorization: Bearer ACCESS_TOKEN"
```

## Multiple dimensions

Some formats will require the `dimensions` to be passed in to select a
specific size. This can be achieved by appending the `dimensions` to the
header.

```curl
curl https://api.box.com/2.0/files/123?fields=representations \
  -H "X-Rep-Hints: [jpg?dimensions=94x94]" \
  -H "Authorization: Bearer ACCESS_TOKEN"
```

## Multiple representations

Multiple representations can be fetched by chaining the different
types in the `X-Rep-Hints`-header.

```curl
curl https://api.box.com/2.0/files/123?fields=representations \
  -H "X-Rep-Hints: [pdf][jpg?dimensions=94x94]" \
  -H "Authorization: Bearer ACCESS_TOKEN"
```

## API Response

This API call will result in one or more representations with a `url_template`
value that includes a `{+asset_path}` value.

```json
{
  "etag": "1",
  "id": "123",
  "representations": {
    "entries": [
      {
        "content": {
          "url_template": "https://dl.boxcloud.com/api/2.0/internal_files/123/versions/345/representations/pdf/content/{+asset_path}"
        },
        "info": {
          "url": "https://api.box.com/2.0/internal_files/123/versions/345/representations/pdf"
        },
        "properties": {},
        "representation": "pdf",
        "status": {
          "state": "success"
        }
      }
    ]
  },
  "type": "file"
}
```

<Message type='notice'>

The `url_template` in this response is an **opaque** URL. This URL format
might change over time and no assumptions should be made about its format
except for the presence of the `{+asset_path}` variable.

</Message>

[get_files_id]: endpoint://get-files-id
[x-rep-hints]: endpoint://get-files-id#param-X-Rep-Hints
