---
rank: 5
related_endpoints:
  - get_files_id
related_guides:
  - representations/supported-file-types
required_guides:
  - representations/list-all-representations
  - representations/request-a-representation
  - representations/download-a-representation
alias_paths: []
---

# Get a PDF representation

A PDF representation provides an easy and predictable way to embed documents
in mobile and web applications.

PDF representations support watermarks if the original file has been watermarked.

PDF representations are generated upon uploading the source file to Box, though
a watermarked PDF is generated upon fetching the watermarked file for
the first time.

## Requesting a PDF representation

To get a PDF representation follow the following steps

- [List all representations](./list-all-representations)
- [Request a PDF](./request-a-representation) by passing the
  `X-Ref-Hints`-header for the desired file type `[pdf]`.
- [Download the PDF](./download-a-representation) by calling the
  `url_template`, replacing the `{+asset_path}` with an the page of the
  PDF to request, for example `1.pdf`.

## Retrieving a watermarked PDF

To retrieve a watermarked PDF the underlying file itself needs to be
watermarked in Box. You can watermark a file either via the Box web application
or using the [`PUT /files/:id/watermark/`][put_files_id_watermark] API.

Once watermarked, a watermarked PDF representation of the file is generated.

[put_files_id_watermark]: /reference/put-files-id-watermark/
