---
rank: 5
related_endpoints:
  - get_files_id
  - put_files_id_watermark
related_guides:
  - representations/text
  - representations/supported-file-types
required_guides:
  - representations/list-all-representations
  - representations/request-a-representation
  - representations/download-a-representation
alias_paths: []
---

# Get PDF Representation

A PDF representation provides a predictable way to embed documents
in mobile and web applications. PDF representations support watermarks
if the original file has been watermarked.

PDF representations are generated upon uploading the source file to Box, though
a watermarked PDF is generated upon fetching the watermarked file for
the first time.

## The process

To get a PDF representation follow the following steps

- [List all representations](guide://representations/list-all-representations)
- [Request a PDF](guide://representations/request-a-representation) by passing the `x-rep-hints`-header for the desired file type `[pdf]`.
- [Download the PDF](guide://representations/download-a-representation) by calling the `url_template`, replacing the `{+asset_path}` with an the page of the PDF to request, for example `1.pdf`.

## Watermarked PDFs

To retrieve a watermarked PDF the underlying file itself needs to be
watermarked in Box. You can watermark a file either via the Box web application
or using the [`PUT /files/:id/watermark/`][put_files_id_watermark] API.

Once watermarked, a watermarked PDF representation of the file is generated.

[put_files_id_watermark]: endpoint://put-files-id-watermark
