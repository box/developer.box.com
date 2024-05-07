---
rank: 7
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

# Get Text Representation

A text representation provides a way to extract plain text
from a document.

Text is generated for all document file types including plain text and
code files supported by Box. This does not include image files as these
do not have a text layer.

Text representations are generated upon upload of the file, similarly to PDFs
and thumbnails. They are not generated for files larger than 500
megabytes.

## The process

To get a text representation follow the following steps

- [List all representations](guide://representations/list-all-representations)
- [Request a text representation](guide://representations/request-a-representation) by passing the `x-rep-hints`-header with the value `[extracted_text]`.
- [Download the text](guide://representations/download-a-representation) by calling the `url_template`, replacing the `{+asset_path}` with an empty string.
