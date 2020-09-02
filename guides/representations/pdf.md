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
category_id: representations
subcategory_id: null
is_index: false
id: representations/pdf
type: guide
total_steps: 8
sibling_id: representations
parent_id: representations
next_page_id: representations/text
previous_page_id: representations/thumbnail-representation
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/representations/pdf.md
---
# PDFレプリゼンテーションの取得

PDFレプリゼンテーションでは、予測しやすい方法でモバイルアプリとウェブアプリにドキュメントを埋め込むことができます。PDFレプリゼンテーションでは、元のファイルに電子すかしが適用されている場合に電子すかしがサポートされます。

PDFレプリゼンテーションは、元のファイルをBoxにアップロードしたときに生成されますが、電子すかし付きPDFは、電子すかし付きファイルを初めて取得したときに生成されます。

## 手順

PDFレプリゼンテーションを取得するには、以下の手順に従います。

* [すべてのレプリゼンテーションのリストを取得する](guide://representations/list-all-representations)
* 目的のファイルタイプ`[pdf]`を表す`X-Ref-Hints`ヘッダーを渡して、[PDFをリクエスト](guide://representations/request-a-representation)する
* `url_template`を呼び出して[PDFをダウンロード](guide://representations/download-a-representation)する。その際、`{+asset_path}`は、リクエストするPDFのページ(`1.pdf`など)に置き換えます。

## 電子すかし付きPDF

電子すかし付きPDFを取得するには、Boxで元のファイル自体に電子すかしを適用する必要があります。ファイルに電子すかしを適用するには、Boxウェブアプリまたは[`PUT /files/:id/watermark/`][put_files_id_watermark] APIを使用します。

電子すかしが適用されると、そのファイルの電子すかし付きPDFレプリゼンテーションが生成されます。

[put_files_id_watermark]: endpoint://put-files-id-watermark
