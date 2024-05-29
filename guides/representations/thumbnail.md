---
rank: 5
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
previous_page_id: representations/thumbnail-representation
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/representations/thumbnail.md
fullyTranslated: true
---
# 基本的なサムネイルの取得

サムネイルとは小さい画像のことで、アプリケーション内でファイルのレプリゼンテーションとして使用できる`.png`または`.jpg`で表されます。たとえば、ファイルをダウンロードまたはプレビューするリンクのプレースホルダとして使用されます。

<Message info>

ファイルのサムネイルを取得するには、[レプリゼンテーションAPI][thumb_representations]を使用する方法をお勧めします。

</Message>

## リクエスト

ファイルのサムネイルをリクエストするには、[`GET
/files/:id/thumbnail.:extension`][get_files_id_thumbnail_id]エンドポイントを使用します。

<Samples id="get_files_id_thumbnail_id">

</Samples>

サムネイルの作成に成功すると、そのサムネイルがレスポンスの本文内でバイナリデータとして返されます。

## サムネイルの非同期的な作成

場合によっては、サムネイルを直接作成できないこともあります。代わりに、APIから`location`レスポンスヘッダーで`HTTP 202`が返されます。この場所は、サムネイルの生成中に使用できる一時的な画像のためのものです。

このエンドポイントを再試行するまでの推定秒数を示す`retry-after`レスポンスヘッダーも返されます。

## サポートされているファイルサイズ

以下のサムネイルの形式とサイズが使用可能です。

| ファイルの種類 | サイズ                                                                |
| ------- | ------------------------------------------------------------------ |
| JPG     | `32x32`, `94x94`, `160x160`, `320x320`, `1024x1024`, `2048x2048`\* |
| PNG     | `1024x1024`\*, `2048x2048`\*                                       |

`*`が付いているサイズには、いくつかの制限があります。

## ファイルサイズの制限

### 元のファイルサイズ

サムネイルは拡大されません。Boxにアップロードされたファイルの元のファイルサイズがレプリゼンテーションのサイズより小さい場合は、作成されるサムネイルのサイズの上限は元のファイルのサイズになります。

## サポートされているファイルの種類

現時点でサポートされているファイルの種類は以下のとおりです。

| ファイルの種類 | ファイル拡張子                                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ドキュメント  | `doc`, `docx`, `gdoc`, `gsheet`, `gslide`, `gslides`, `odp`, `ods`, `odt`, `pdf`, `ppt`, `pptx`, `rtf`, `wpd`, `xls`, `xlsm`, `xlsx`, `key`, `pages`, `numbers` |
| 画像      | `ai`, `bmp`, `dcm`, `dicm`, `eps`, `gif`, `idml`, `indd`, `indt`, `inx`, `jpeg`, `jpg`, `png`, `ps`, `psd`, `svg`, `svs`, `tif`, `tiff`, `tga`                  |
| オーディオ   | `aac`, `aifc`, `aiff`, `amr`, `au`, `flac`, `m4a`, `mp3`, `ogg`, `ra`, `wav`, `wma`                                                                             |
| 動画      | `3g2`, `3gp`, `avi`, `m2v`, `m2ts`, `m4v`, `mkv`, `mov`, `mp4`, `mpeg`, `mpg`, `mts`, `ogg`, `qt`, `wmv`                                                        |

[get_files_id_thumbnail_id]: endpoint://get_files_id_thumbnail_id

[thumb_representations]: guide://representations/thumbnail-representation
