---
rank: 4
related_endpoints:
  - get_files_id
related_guides:
  - representations/pdf
  - representations/supported-file-types
required_guides:
  - representations/list-all-representations
  - representations/request-a-representation
  - representations/download-a-representation
alias_paths: []
---

# Get Thumbnail Representation

A thumbnail is a small image, either as `.png` or as `.jpg` that can be used in
an application as a representation of the file, for example as a placeholder for
a link that downloads or previews the file.

All thumbnail representations except `1024x1024` and `2048x2048` PNGs are
generated upon uploading the source file to Box.

An alternative way to get a thumbnail for a file is using the
[thumbnail API][thumbnail_api].

## The process

To get a thumbnail representation follow the following steps

- [List all representations][list-all-representations]
- [Request a thumbnail][request-a-representation]
  by passing the `X-Ref-Hints`-header for the desired thumbnail format
  and size, for example `[jpg?dimensions=32x32]`.
- [Download the thumbnail][download-a-representation]
  by calling the `url_template`, replacing the `{+asset_path}` with an empty
  string.

## Examples

The following a some example `x-rep-hints`-header values

| `x-rep-hints: [jpg?dimensions=32x32]` |
| ------------------------------------- |
| Returns a `32x32` JPEG thumbnail      |

| `x-rep-hints: [jpg?dimensions=32x32][jpg?dimensions=1024x1024]` |
| --------------------------------------------------------------- |
| Returns `32x32` and `1024x1024` JPEG thumbnails                 |

| `x-rep-hints: [jpg?dimensions=32x32][png?dimensions=2048x2048]` |
| --------------------------------------------------------------- |
| Returns a `32x32` JPEG and a `2048x2048` PNG thumbnail          |

<!-- markdownlint-disable line-length -->

| `x-rep-hints: [jpg?dimensions=2048x2048,png?dimensions=2048x2048]`                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Returns a `2048x2048` JPEG or a `2048x2048` PNG thumbnail, returning the first representation that is available. If neither is available it returns no representations |

<!-- markdownlint-enable line-length -->

## Supported file sizes

The following formats and sizes of thumbnails are available.

<!-- markdownlint-disable line-length -->

| File Type | Dimensions                                                         |
| --------- | ------------------------------------------------------------------ |
| JPG       | `32x32`, `94x94`, `160x160`, `320x320`, `1024x1024`, `2048x2048`\* |
| PNG       | `1024x1024`\*, `2048x2048`\*                                       |

Some restrictions apply to the sizes marked as `*`.

<!-- markdownlint-enable line-length -->

## File size restrictions

### JPEG `2048x2048`

The JPEG `2048x2048` size is only available when the
original file is a JPEG. We recommend either requesting a PNG or both a PNG
and a JPEG for this dimension.

### Video files

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

[list-all-representations]: guide://representations/list-all-representations
[request-a-representation]: guide://representations/request-a-representation
[download-a-representation]: guide://representations/download-a-representation
[thumbnail_api]: guide://representations/thumbnail
