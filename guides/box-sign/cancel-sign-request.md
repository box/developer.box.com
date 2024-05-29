---
rank: 3
related_endpoints:
  - post-sign-requests-id-cancel
related_guides:
  - box-sign/create-sign-request
category_id: box-sign
subcategory_id: null
is_index: false
id: box-sign/cancel-sign-request
type: guide
total_steps: 7
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign/list-sign-requests
previous_page_id: box-sign/resend-sign-request
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/cancel-sign-request.md
fullyTranslated: true
---
# Box Signのリクエストのキャンセル

Box Signのリクエストは、まだ署名も拒否もされていない場合、[Box Signのリクエストをキャンセルエンドポイント][cancel]を使用してキャンセルできます。未署名の署名者は、ドキュメントに署名できなくなります。

リクエストをキャンセルできるのは、そのリクエストを作成したユーザー (リクエスト送信者) のみです。リクエストは、拒否された場合、全員が署名済みの場合、ドキュメントがまだ変換中の場合は、キャンセルできません。

<Samples id="post_sign_requests_id_cancel">

</Samples>

[cancel]: e://post-sign-requests-id-cancel
