---
rank: 2
related_endpoints:
  - get_files_id
related_guides:
  - representations/supported-file-types
required_guides:
  - representations/priciples
alias_paths: []
---

# Get a thumbnail representation

A thumbnail is a small image, either as `.png` or as `.jpg` that can be used in
an application as a representation of the file, for example as a placeholder for
a link that downloads or previews the file.

## 1. List all thumbnail representations

To see what thumbnails are available for a file, first call the `GET /files/:id`
endpoint, requesting the `representations` field.

```sh
curl https://api.box.com/2.0/files/123?fields=representations \
  -H "Authorization: Bearer <AccessToken>"
```

If the file supports thumbnails the response will include a few representations
that are thumbnails.

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
},
{
  "info": {
    "url": "https://api.box.com/2.0/internal_files/123/versions/345/representations/jpg_thumb_94x94"
  },
  "properties": {
    "dimensions": "94x94",
    "paged": "false",
    "thumb": "true"
  },
  "representation": "jpg"
},
...
```

## 2. Request the desired representation

To fetch a specific thumbnail representation, first call the same endpoint but
this time add a `X-Rep-Hints`-header for the file type and size.

```sh
curl https://api.box.com/2.0/files/123?fields=representations \
  -H "X-Rep-Hints: [jpg?dimensions=32x32]" \
  -H "Authorization: Bearer <AccessToken>"
```

<Message type="notice">
  Multiple representations can be fetched by chaining the `X-Rep-Hints` header
  as follows. `[jpg?dimensions=32x32][jpg?dimensions=94x94]`
</Message>

The result will be one or more representations with a `url_template` value that
includes a `{+asset_path}` value.

```json
{
  "etag": "1",
  "id": "123",
  "representations": {
    "entries": [
      {
        "content": {
          "url_template": "https://dl.boxcloud.com/api/2.0/internal_files/123/versions/345/representations/jpg_thumb_32x32/content/{+asset_path}"
        },
        "info": {
          "url": "https://api.box.com/2.0/internal_files/123/versions/345/representations/jpg_thumb_32x32"
        },
        "properties": {
          "dimensions": "32x32",
          "paged": "false",
          "thumb": "true"
        },
        "representation": "jpg",
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

## 3. Request the thumbnail

Finally, to fetch the actual thumbnail, replace the `{+asset_path}` in the
`url_template` for the representation with an empty string.

<!-- markdownlint-disable line-length -->
```sh
  curl https://dl.boxcloud.com/api/2.0/internal_files/123/versions/345/representations/jpg_thumb_32x32/content \
    -H "Authorization: Bearer <AccessToken>"
```
<!-- markdownlint-enable line-length -->

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
