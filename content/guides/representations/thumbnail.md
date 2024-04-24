---
rank: 4
related_endpoints:
  - get_files_id_thumbnail_id
related_guides:
  - representations/thumbnail-representation
  - representations/supported-file-types
required_guides:
  - representations/list-all-representations
  - representations/request-a-representation
  - representations/download-a-representation
alias_paths: []
---

# Get Basic Thumbnail

A thumbnail is a small image, either as `.png` or as `.jpg` that can be used in
an application as a representation of the file, for example as a placeholder for
a link that downloads or previews the file.

<Message info>

The preferred way to get a thumbnail for a file is using the
[representations API][thumb_representations].

</Message>

## Requesting

To request a file thumbnail use the [`GET
/files/:id/thumbnail.:extension`][get_files_id_thumbnail_id]
endpoint.

<Samples id='get_files_id_thumbnail_id' />

When a thumbnail was successfully created, this will return the thumbnail
in the body of the response as binary data.

## Asynchronous thumbnail creation

Sometimes the thumbnail can not be created directly. Instead, the API will
return a `HTTP 202` with a `location` response header. The location
is for a temporary image that can be used while the thumbnail is being
generated.

A `retry-after` response header is also provided to present you with
an estimated amount of seconds before retrying this endpoint.

## Supported file sizes

The following formats and sizes of thumbnails are available.

| File Type | Dimensions                                                         |
| --------- | ------------------------------------------------------------------ |
| JPG       | `32x32`, `94x94`, `160x160`, `320x320`, `1024x1024`, `2048x2048`\* |
| PNG       | `1024x1024`\*, `2048x2048`\*                                       |

Some restrictions apply to the sizes marked as `*`.

## File size restrictions

### Original file size

Thumbnails are not scaled up. If the original file size of the file uploaded to
Box is smaller than the representation dimensions, the resulting thumbnail is
capped at the size of the original file.

## Supported file types

At this time the following file types are supported.

| File Type | File Extensions                                                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documents | `doc`, `docx`, `gdoc`, `gsheet`, `gslide`, `gslides`, `odp`, `ods`, `odt`, `pdf`, `ppt`, `pptx`, `rtf`, `wpd`, `xls`, `xlsm`, `xlsx`, `key`, `pages`, `numbers` |
| Images    | `ai`, `bmp`, `dcm`, `dicm`, `eps`, `gif`, `idml`, `indd`, `indt`, `inx`, `jpeg`, `jpg`, `png`, `ps`, `psd`, `svg`, `svs`, `tif`, `tiff`, `tga`                  |
| Audio     | `aac`, `aifc`, `aiff`, `amr`, `au`, `flac`, `m4a`, `mp3`, `ogg`, `ra`, `wav`, `wma`                                                                             |
| Video     | `3g2`, `3gp`, `avi`, `m2v`, `m2ts`, `m4v`, `mkv`, `mov`, `mp4`, `mpeg`, `mpg`, `mts`, `ogg`, `qt`, `wmv`                                                        |

[get_files_id_thumbnail_id]: endpoint://get_files_id_thumbnail_id
[thumb_representations]: guide://representations/thumbnail-representation
