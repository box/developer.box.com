---
rank: 3
related_endpoints:
  - get_files_id
related_guides:
  - representations/thumbnail-representation
  - representations/supported-file-types
  - representations/x-rep-hints
required_guides:
  - representations/request-a-representation
alias_paths: []
cId: representations
scId: null
id: representations/download-a-representation
isIndex: false
---

# Download a file representation

Use the`url_template` that was received when
[selecting the representation][select_representation] to download
the representation. Replace the `{+asset_path}` depending on
the type of representation.

## Paginated representations

For paged representations like PDFs replace `{+asset_path}`
with the desired page number and the file extension, for example
`1.pdf`.

<!-- markdownlint-disable line-length -->

```curl
curl https://dl.boxcloud.com/api/2.0/internal_files/123/versions/345/representations/pdf/content/3.pdf \
  -H "Authorization: Bearer ACCESS_TOKEN"
```

<!-- markdownlint-enable line-length -->

## Non-paginated representations

For non-paged representations, replace the `{+asset_path}` with
an empty string.

<!-- markdownlint-disable line-length -->

```curl
curl https://dl.boxcloud.com/api/2.0/internal_files/123/versions/345/representations/jpg_32x32/content/3.pdf \
  -H "Authorization: Bearer ACCESS_TOKEN"
```

<!-- markdownlint-eable line-length -->

## Optional query parameters

When fetching the representation the following optional headers
are supported.

| Parameter                      | Options                 | Default |
| ------------------------------ | ----------------------- | ------- |
| `set_content_disposition_type` | `inline` / `attachment` | `null`  |

Sets the `Content-Disposition` header in the API response with the specified
value. A disposition type of `attachment` causes most web browsers to prompt
the user to save the response to their device, where the type `inline`
will open the file in the browser.

If not supplied, the `Content-Disposition` header is not included in the
response.

| Parameter                      | Options                    | Default |
| ------------------------------ | -------------------------- | ------- |
| `set_content_disposition_filename` | Filename without extension | `null`  |

Allows the application to define the downloaded representation's file name.

If not defined, the file name is derived from the source file name in Box,
replacing the extension with the representation's file type.

[select_representation]: guide://representations/request-a-representation
