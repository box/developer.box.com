---
rank: 1
related_endpoints:
  - get_files_id
related_guides:
  - representations/supported-file-types
  - representations/x-rep-hints
required_guides: []
alias_paths: []
---

# Principles

Representations are a powerful way to extract text, PDFs, and thumbnails
from your files.

Representations are requested in three steps:

1. List all representations for a file
2. Request the desired representation's template URL
3. Download the representation

## 1. List all representations for a file

To see what representations are available for a file you can call the `GET /files/:id`
endpoint, requesting the `representations` field.

```sh
curl https://api.box.com/2.0/files/123?fields=representations \
  -H "Authorization: Bearer <AccessToken>"
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

<Message type="notice">
  # Response fields

  Every representation will include a set of properties and the type of
  representation.

  The `dimensions` field represents the file's dimensions in
  pixels as width by height.

  The `paged` field specifies if this representation is a paged
  document. Some images and PDFs will often be paged documents.

  The `thumb` field specifies if this representation is suitable as a file thumbnail.
</Message>

## 2. Request the desired representation's template URL

The second step is to fetch a specific representation's template URL. To do this
we make the same API call as in the previous step while also passing in a `X-Rep-Hints`-header.

```sh
curl https://api.box.com/2.0/files/123?fields=representations \
  -H "X-Rep-Hints: [pdf]" \
  -H "Authorization: Bearer <AccessToken>"
```

<Message type="notice">
  Multiple representations can be fetched by chaining the `X-Rep-Hints`-header.
  Some formats will require the `dimensions` to be passed in to select a
  specific size, for example `[pdf][jpg?dimensions=94x94]`
</Message>

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
  # Opaque URLs

  The `url_template` in this response is an opaque URL. This URL format might
  change over time and no assumptions should be made about its format except for
  the presence of the `{+asset_path}` variable.

</Message>

## 3. Download the representation

Finally, to fetch the actual representation we will need to replace the
`{+asset_path}` in the `url_template`. For paged representations, replace
it with the desired page number and the file extension.

<!-- markdownlint-disable line-length -->
```sh
  curl https://dl.boxcloud.com/api/2.0/internal_files/123/versions/345/representations/pdf/content/3.pdf \
    -H "Authorization: Bearer <AccessToken>"
```
<!-- markdownlint-enable line-length -->

For non-paged representations, replace simply replace the `{+asset_path}` with
an empty string.

<!-- markdownlint-disable line-length -->
```sh
  curl https://dl.boxcloud.com/api/2.0/internal_files/123/versions/345/representations/jpg_32x32/content/3.pdf \
    -H "Authorization: Bearer <AccessToken>"
```
<!-- markdownlint-eable line-length -->

<Message type='notice'>
  # Optional query parameters

  We support the following two optional headers that developers can use while
  invoking the opaque URL.

  ## `set_content_disposition_type`

  Options: `inline` / `attachment`

  Sets the `Content-Disposition` header in the API response with the specified
  value.

  A disposition type of `attachment` causes most web browsers to prompt the user
  to save the response to their device, where the type `inline` will open the
  file in the browser.

  If not supplied, the `Content-Disposition` header is not included in the response.
</Message>
