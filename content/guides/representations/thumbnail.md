---
rank: 4
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

# Get a thumbnail representation

A thumbnail is a small image, either as `.png` or as `.jpg` that can be used in
an application as a representation of the file, for example as a placeholder for
a link that downloads or previews the file.

All thumbnail representations except `1024x1024` and `2048x2048` PNGs are
generated upon uploading the source file to Box.

## Requesting a thumbnail representation

To get a thumbnail representation follow the following steps

- [List all representations](./list-all-representations)
- [Request a thumbnail](./request-a-representation) by passing the
  `X-Ref-Hints`-header for the desired thumbnail format and size, for example
  `[jpg?dimensions=32x32]`.
- [Download the thumbnail](./download-a-representation) by calling the
  `url_template`, replacing the `{+asset_path}` with an empty string.

## Example `X-Rep-Hints` headers

The following a some example `X-Rep-Hints`-header values

- `X-Rep-Hints: [jpg?dimensions=32x32]` returns a `32x32` JPEG thumbnail
- `X-Rep-Hints: [jpg?dimensions=32x32][jpg?dimensions=1024x1024]` returns
  `32x32` and `1024x1024` JPEG thumbnails
- `X-Rep-Hints: [jpg?dimensions=32x32][png?dimensions=2048x2048]` returns
  a `32x32` JPEG and a `2048x2048` PNG thumbnail
- `X-Rep-Hints: [jpg?dimensions=2048x2048,png?dimensions=2048x2048]` returns
  a `2048x2048` JPEG or a `2048x2048` PNG thumbnail, returning the first
  representation that is available. If neither is available it returns no
  representations

## Supported file sizes

The following formats and sizes of thumbnails are available.

<!-- markdownlint-disable line-length -->

| File Type | Dimensions                                                         |
| --------- | ------------------------------------------------------------------ |
| JPG       | `32x32`, `94x94`, `160x160`, `320x320`, `1024x1024`, `2048x2048`\* |
| PNG       | `1024x1024`\*, `2048x2048`\*                                       |

<!-- markdownlint-enable line-length -->

## File size restrictions

### JPEG `2048x2048`

The JPEG `2048x2048` size is only available when the
original file is a JPEG. We recommend either requesting a PNG or both a PNG
and a JPEG for this dimension.

### Video file restrictions

JPEG `2048x2048`, PNG `2048x20148` and PNG `1024x1024` representations are not
available for video files.

### Original file size

Thumbnails are not scaled up. If the original file size of the file uploaded to
Box is smaller than the representation dimensions, the resulting thumbnail is
capped at the size of the original file.

## Supported file types

At this time the following file types are supported.

<!-- markdownlint-disable line-length -->

| File Type | File Extensions                                                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documents | `doc`, `docx`, `gdoc`, `gsheet`, `gslide`, `gslides`, `odp`, `ods`, `odt`, `pdf`, `ppt`, `pptx`, `rtf`, `wpd`, `xls`, `xlsm`, `xlsx`, `key`, `pages`, `numbers` |
| Images    | `ai`, `bmp`, `gif`, `eps`, `jpeg`, `jpg`, `png`, `ps`, `psd`, `svg`, `tif`, `tiff`, `dcm`, `dicm`, `svs`, `tga`                                                 |
| Audio     | `aac`, `aifc`, `aiff`, `amr`, `au`, `flac`, `m4a`, `mp3`, `ogg`, `ra`, `wav`, `wma`                                                                             |
| Video     | `3g2`, `3gp`, `avi`, `m2v`, `m2ts`, `m4v`, `mkv`, `mov`, `mp4`, `mpeg`, `mpg`, `ogg`, `mts`, `qt`, `wmv`                                                        |

<!-- markdownlint-enable line-length -->
