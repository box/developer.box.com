---
related_endpoints:
  - put_file_requests_id
related_guides:
  - file-requests/copy
  - file-requests/get
required_guides: []
related_resources:
  - file_request
category_id: file-requests
subcategory_id: null
is_index: false
id: file-requests/update
rank: 4
type: guide
total_steps: 5
sibling_id: file-requests
parent_id: file-requests
next_page_id: file-requests/delete
previous_page_id: file-requests/get
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/file-requests/4-update.md
fullyTranslated: true
---
# ファイルリクエストの更新

既存のファイルリクエストの基本的な詳細の一部を更新するのに必要なのは、その一意のIDだけです。

<Samples id="put_file_requests_id">

</Samples>

テンプレート作成時に更新できるさまざまなフィールドの詳細については、[`POST /file-requests/:id/update`](e://put_file_requests_id) APIのリファレンスドキュメントを参照してください。

<Message notice>

ファイルリクエストのIDを確認するには、BoxウェブアプリにアクセスしてそのURLを調べます。ファイルリクエストテンプレートの設定に関する[ガイド](g://file-requests/template)で、ファイルリクエストIDの確認方法を確認してください。

</Message>
