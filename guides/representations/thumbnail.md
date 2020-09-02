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
category_id: representations
subcategory_id: null
is_index: false
id: representations/thumbnail
type: guide
total_steps: 8
sibling_id: representations
parent_id: representations
next_page_id: representations/pdf
previous_page_id: representations/download-a-representation
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/representations/thumbnail.md
---
# 基本的なサムネイルの取得

サムネイルとは小さい画像のことで、アプリケーション内でファイルのレプリゼンテーションとして使用できる`.png`または`.jpg`で表されます。たとえば、ファイルをダウンロードまたはプレビューするリンクのプレースホルダとして使用されます。

ファイルのサムネイルは、[レプリゼンテーションAPI][thumb_representations]を使用して取得することもできます。

## リクエスト

ファイルのサムネイルをリクエストするには、[`GET
/files/:id/thumbnail.:extension`][get_files_id_thumbnail_id]エンドポイントを使用します。

<Samples id="get_files_id_thumbnail_id">

</Samples>

サムネイルの作成に成功すると、そのサムネイルが応答の本文内でバイナリデータとして返されます。

## サムネイルの非同期的な作成

場合によっては、サムネイルを直接作成できないこともあります。代わりに、APIから`location`応答ヘッダーで`HTTP 202`が返されます。この場所は、サムネイルの生成中に使用できる一時的な画像のためのものです。

このエンドポイントを再試行するまでの推定秒数を示す`retry-after`応答ヘッダーも返されます。

## サポートされているファイルサイズ

以下のサムネイルの形式とサイズが使用可能です。

<!-- markdownlint-disable line-length -->

| ファイルタイプ | サイズ                                                                |
| ------- | ------------------------------------------------------------------ |
| JPG     | `32x32`, `94x94`, `160x160`, `320x320`, `1024x1024`, `2048x2048`\* |
| PNG     | `1024x1024`\*, `2048x2048`\*                                       |

`*`が付いているサイズには、いくつかの制限があります。

<!-- markdownlint-enable line-length -->

## ファイルサイズの制限

### 元のファイルサイズ

サムネイルは拡大されません。Boxにアップロードされたファイルの元のファイルサイズがレプリゼンテーションのサイズより小さい場合は、作成されるサムネイルのサイズの上限は元のファイルのサイズになります。

## サポートされているファイルタイプ

現時点でサポートされているファイルタイプは以下のとおりです。

<!-- markdownlint-disable line-length -->

| ファイルタイプ | ファイル拡張子                                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ドキュメント  | `doc`, `docx`, `gdoc`, `gsheet`, `gslide`, `gslides`, `odp`, `ods`, `odt`, `pdf`, `ppt`, `pptx`, `rtf`, `wpd`, `xls`, `xlsm`, `xlsx`, `key`, `pages`, `numbers` |
| 画像      | `ai`, `bmp`, `gif`, `eps`, `jpeg`, `jpg`, `png`, `ps`, `psd`, `svg`, `tif`, `tiff`, `dcm`, `dicm`, `svs`, `tga`                                                 |
| オーディオ   | `aac`, `aifc`, `aiff`, `amr`, `au`, `flac`, `m4a`, `mp3`, `ogg`, `ra`, `wav`, `wma`                                                                             |
| 動画      | `3g2`, `3gp`, `avi`, `m2v`, `m2ts`, `m4v`, `mkv`, `mov`, `mp4`, `mpeg`, `mpg`, `ogg`, `mts`, `qt`, `wmv`                                                        |

<!-- markdownlint-enable line-length -->

[get_files_id_thumbnail_id]: endpoint://get_files_id_thumbnail_id

[thumb_representations]: guide://representations/thumbnail-representation
