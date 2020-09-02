---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/postman
is_index: false
id: tooling/postman/make-api-call
type: guide
total_steps: 4
sibling_id: tooling/postman
parent_id: tooling/postman
next_page_id: tooling/postman/refresh
previous_page_id: tooling/postman
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/postman/make-api-call.md
---
<!-- alex disable postman-postwoman -->

# API呼び出しの実行

**Box Postmanコレクション**が**Postmanアプリ**に読み込まれたら、Postmanアプリがログインユーザーに代わって**Box API**へのAPI呼び出しを実行できるようになります。

<Message warning>

API呼び出しを実行するには、Box Postmanコレクションに有効な`access_token`環境変数が必要です。有効なアクセストークンを使用してPostmanアプリが設定されるように、[クイックスタート](g://tooling/postman/quick-start)ガイドに従うことをお勧めします。

</Message>

## APIリクエストの実行

APIリクエストを実行するには、Box Postmanコレクションから**リクエスト**を選択します。この例では、\[**Folders**]フォルダにある\[**List items in folder**] APIを使用します。

<ImageFrame border center shadow>

![APIリクエストの選択](./quick-start/select-api-request.png)

</ImageFrame>

デフォルトでは、このAPIエンドポイントの`folder_id`は、すべてのユーザーのルートフォルダを表す`0`に設定されています。この値は、そのまま使用することも、調べたいフォルダのフォルダIDに設定することもできます。

次に、右上にある\[**Send**]ボタンをクリックしてAPIリクエストを送信します。

<ImageFrame border center shadow>

![Postmanの\[Send\]ボタン](./quick-start/postman-send-button.png)

</ImageFrame>

このAPI呼び出しはすぐに制御が戻り、画面の下半分にある応答の\[**Body**]タブにフォルダ内の項目のリストが表示されます。

<ImageFrame border center shadow>

![Postmanの応答本文](./quick-start/postman-response-body.png)

</ImageFrame>

<Message warning>

# 認証エラー

この時点で、Postmanがリストではなくエラーを返す場合があります。これは多くの場合、**アクセストークン**の有効期限が切れていることを意味します。詳細については、[Postmanでのアクセストークンの更新](g://tooling/postman/refresh)に関するガイドを参照してください。

</Message>
