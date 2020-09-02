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
category_id: representations
subcategory_id: null
is_index: false
id: representations/thumbnail-representation
type: guide
total_steps: 8
sibling_id: representations
parent_id: representations
next_page_id: representations/pdf
previous_page_id: representations/download-a-representation
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/representations/thumbnail-representation.md
---
# サムネイルレプリゼンテーションの取得

サムネイルとは小さい画像のことで、アプリケーション内でファイルのレプリゼンテーションとして使用できる`.png`または`.jpg`で表されます。たとえば、ファイルをダウンロードまたはプレビューするリンクのプレースホルダとして使用されます。

`1024x1024`および`2048x2048`のPNGを除くすべてのサムネイルレプリゼンテーションは、元のファイルをBoxにアップロードしたときに生成されます。

ファイルのサムネイルは、[サムネイルAPI][thumbnail_api]を使用して取得することもできます。

## 手順

サムネイルレプリゼンテーションを取得するには、以下の手順に従います。

* [すべてのレプリゼンテーションのリストを取得する][list-all-representations]
* `[jpg?dimensions=32x32]`のように目的のサムネイル形式とサイズを表す`X-Ref-Hints`ヘッダーを渡して、[サムネイルをリクエストする][request-a-representation]。
* `url_template`を呼び出して[サムネイルをダウンロード][download-a-representation]する。その際、`{+asset_path}`を空の文字列に置き換えます。

## 例

`x-rep-hints`ヘッダーの値の例を以下に示します。

| `x-rep-hints: [jpg?dimensions=32x32]` |
| ------------------------------------- |
| `32x32`のJPEGサムネイルを返します。               |

| `x-rep-hints: [jpg?dimensions=32x32][jpg?dimensions=1024x1024]` |
| --------------------------------------------------------------- |
| `32x32`および`1024x1024`のJPEGサムネイルを返します。                           |

| `x-rep-hints: [jpg?dimensions=32x32][png?dimensions=2048x2048]` |
| --------------------------------------------------------------- |
| `32x32`のJPEGサムネイルおよび`2048x2048`のPNGサムネイルを返します。                  |

<!-- markdownlint-disable line-length -->

| `x-rep-hints: [jpg?dimensions=2048x2048,png?dimensions=2048x2048]`                                        |
| --------------------------------------------------------------------------------------------------------- |
| `2048x2048`のJPEGサムネイルおよび`2048x2048`のPNGサムネイルを返し、使用可能な最初のレプリゼンテーションを返します。どちらも使用可能でない場合は、レプリゼンテーションは返されません。 |

<!-- markdownlint-enable line-length -->

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

### `2048x2048`のJPEG

`2048x2048`サイズのJPEGを使用できるのは、元のファイルがJPEGの場合のみです。このサイズを使用する場合は、PNGか、PNGとJPEGの両方をリクエストすることをお勧めします。

### 動画ファイル

`2048x2048`のJPEG、`2048x20148`のPNG、および`1024x1024`のPNGのレプリゼンテーションは、動画ファイルでは使用できません。

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

[list-all-representations]: guide://representations/list-all-representations

[request-a-representation]: guide://representations/request-a-representation

[download-a-representation]: guide://representations/download-a-representation

[thumbnail_api]: guide://representations/thumbnail
