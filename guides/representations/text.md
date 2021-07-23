---
rank: 6
related_endpoints:
  - get_files_id
related_guides:
  - representations/supported-file-types
required_guides:
  - representations/list-all-representations
  - representations/request-a-representation
  - representations/download-a-representation
alias_paths: []
category_id: representations
subcategory_id: null
is_index: false
id: representations/text
type: guide
total_steps: 8
sibling_id: representations
parent_id: representations
next_page_id: representations/supported-file-types
previous_page_id: representations/pdf
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/representations/text.md
fullyTranslated: true
---
# テキストレプリゼンテーションの取得

テキストレプリゼンテーションでは、ドキュメントからプレーンテキストを抽出できます。

テキストは、プレーンテキストを含むさまざまな種類のドキュメントファイルやBoxでサポートされているコードファイルに対して生成されます。テキストレイヤがないため、画像ファイルは含まれません。

テキストレプリゼンテーションは、PDFやサムネイルと同様に、ファイルのアップロード時に生成されます。ただし、500MBを超えるファイルに対しては生成されません。

## 手順

テキストレプリゼンテーションを取得するには、以下の手順に従います。

* [すべてのレプリゼンテーションのリストを取得する](guide://representations/list-all-representations)
* 値`[extracted_text]`を指定した`X-Ref-Hints`ヘッダーを渡して、[テキストレプリゼンテーションをリクエスト](guide://representations/request-a-representation)する
* `url_template`を呼び出して[テキストをダウンロード](guide://representations/download-a-representation)する。その際、`{+asset_path}`を空の文字列に置き換えます。
