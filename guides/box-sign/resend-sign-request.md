---
rank: 3
category_id: box-sign
subcategory_id: null
is_index: false
id: box-sign/resend-sign-request
type: guide
total_steps: 4
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign/cancel-sign-request
previous_page_id: box-sign/list-sign-requests
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/resend-sign-request.md
fullyTranslated: true
---
# Box Signのリクエストの再送信

[Box Signのリクエストを再送信エンドポイント][resend]を使用すると、残りの署名者全員にリクエストのメールを再送信できます。

[ステータス][status]が`signed`、`cancelled`、`declined`、`expired`、`error_sending`、または`error_converting`の場合は、Box Signのリクエストを再送信できません。

Box Signのリクエストが最近送信された場合は、再送信する前に10分間待つ必要があります。この時間が経過する前に再送信しようとすると、400エラーが返されます。

<Message type="tip">

リクエストを再送信せずに済むように、Box Signのリクエスト作成時にリマインダメールを有効にすることができます。

</Message>

<Samples id="post_sign_requests_id_resend">

</Samples>

[resend]: e://post-sign-requests-id-resend

[status]: g://box-sign/create-sign-request/#request-status
