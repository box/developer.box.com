---
related_endpoints:
  - post_file_requests_id_copy
related_guides: []
required_guides:
  - file-requests/template
related_resources:
  - file_request
category_id: file-requests
subcategory_id: null
is_index: false
id: file-requests/copy
rank: 2
type: guide
total_steps: 5
sibling_id: file-requests
parent_id: file-requests
next_page_id: file-requests/get
previous_page_id: file-requests/template
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/file-requests/2-copy.md
fullyTranslated: true
---
# ファイルリクエストのコピー

既存の[テンプレート](g://file-requests/template)ファイルリクエストのコピーを作成するために必要なのは、その一意のIDと、新しいファイルリクエストの適用先となるフォルダのIDだけです。

<Samples id="post_file_requests_id_copy">

</Samples>

<Message notice>

フォルダやファイルリクエストのIDを確認するには、BoxウェブアプリにアクセスしてそのURLを調べます。

フォルダIDは、フォルダにアクセスしたときにURLの末尾にある番号です。たとえば、`app.box.com/folder/123`というURLの場合、フォルダのIDは`123`です。

ファイルリクエストについては、ファイルリクエストテンプレートの設定に関する[ガイド](g://file-requests/template)で、ファイルリクエストIDの確認方法を確認してください。

</Message>

## コピー時にファイルリクエストを更新する

テンプレートからコピーする際、ファイルリクエストに基本的な変更を行うことができます。ファイルリクエストをテンプレートからコピーするときに更新できるのは、ファイルリクエストのタイトル、説明、ステータス、およびその他いくつかの設定です。

```curl
curl -i -X POST "https://api.box.com/2.0/file_requests/2342235/copy" \
     -H "Authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
       "title": "Please upload required documents",
       "description": "Please upload required documents",
       "status": "active",
       "is_email_required": true,
       "is_description_required": false,
       "folder": {
         "id": "342323423"
       }
     }'
```

<Message notice>

テンプレート作成時に更新できるさまざまなフィールドの詳細については、[`POST /file-requests/:id/copy`](e://post_file_requests_id_copy) APIのリファレンスドキュメントを参照してください。

</Message>
