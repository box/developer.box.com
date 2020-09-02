---
rank: 1
related_endpoints:
  - get_files_id
related_guides:
  - downloads/file
required_guides: []
alias_paths: []
category_id: files
subcategory_id: null
is_index: false
id: files/get
type: guide
total_steps: 2
sibling_id: files
parent_id: files
next_page_id: files
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/files/get.md
---
# ファイル情報の取得

ファイルのコンテンツではなく、ファイル自体の情報を取得するには、ファイルの`id`を指定して[`GET /files/:id`](e://get-files-id) APIを呼び出します。

<Samples id="get_files_id">

</Samples>

## ファイルID

ファイルの`id`を確認するには、ウェブアプリでファイルにアクセスして、URLから`id`をコピーします。たとえば、URLが`https://*.app.box.com/file/123`の場合、`file_id`は`123`です。

## その他のフィールド

ファイルのフィールドをさらに取得するには、必ず`fields`クエリパラメータを渡してください。

<CTA to="g://api-calls/request-extra-fields">

追加フィールドのリクエストについて確認する

</CTA>
