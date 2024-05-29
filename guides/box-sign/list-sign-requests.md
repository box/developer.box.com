---
rank: 4
related_endpoints:
  - get-sign-requests
related_guides:
  - box-sign/create-sign-request
category_id: box-sign
subcategory_id: null
is_index: false
id: box-sign/list-sign-requests
type: guide
total_steps: 7
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign/suppress-sign-notifications
previous_page_id: box-sign/cancel-sign-request
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/list-sign-requests.md
fullyTranslated: true
---
# Box Signのリクエストのリスト取得

## すべて

[署名リクエストを取得エンドポイント][get_all]を使用すると、渡されたアクセストークンに関連付けられたユーザーが作成したBox Signのすべてのリクエストのリストを表示できます。

<Samples id="get_sign_requests">

</Samples>

## IDの指定

[IDを指定して署名リクエストを取得エンドポイント][get_by_id]を使用すると、Box Signの特定のリクエストに関する情報を表示できます。このエンドポイントには、署名リクエストのIDが必要です。このIDは、[Box Signのすべてのリクエストを取得エンドポイント][get_all]を使用して取得するか、[Box Signのリクエストを作成][create]する際にレスポンスで取得することができます。

<Samples id="get_sign_requests_id">

</Samples>

[get_all]: e://get-sign-requests

[get_by_id]: e://get-sign-requests-id

[create]: e://post-sign-requests
