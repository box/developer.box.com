---
type: quick-start
hide_in_page_nav: true
related_endpoints:
  - get_folders_id_items
category_id: tooling
subcategory_id: tooling/postman
is_index: false
id: tooling/postman/quick-start/make-api-call
rank: 5
total_steps: 6
sibling_id: tooling/postman/quick-start
parent_id: tooling/postman/quick-start
next_page_id: tooling/postman/quick-start/next-steps
previous_page_id: tooling/postman/quick-start/load-postman-collection
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/postman/quick-start/5-make-api-call.md
---
<!-- alex disable postman-postwoman -->

# API呼び出しの実行

**Box Postmanコレクション**が**Postmanアプリ**に読み込まれたため、Postmanアプリがログインユーザーに代わって**Box API**へのAPI呼び出しを実行できるようになりました。

## はじめに: ブラウザのストレージをリセットする

Box API資格情報をPostmanにインポートしたので、これらの資格情報をブラウザのストレージから削除することをお勧めします。

<ResetButton id="postman,credentials,observable_events">

資格情報をクリア

</ResetButton>

<Message warning>

API資格情報をブラウザのストレージから削除すると、**クライアントID**、**クライアント機密コード**、**アクセストークン**、または**更新トークン**を他のスクリプトから読み取ることができなくなります。

</Message>

## 環境の選択

API呼び出しを実行する前に、API呼び出し時に使用する適切な**Postman環境**を選択することが重要です。

**Box Postmanコレクション**のインポート時には、使用すべき`Box` Postman環境も自動的にインポートされました。このコレクションは、この環境内の変数を自動的に認識してAPI呼び出しに使用します。

Box Postman環境を選択するには、Postmanの右上にあるドロップダウンから\[**Box**]を選択します。

<ImageFrame border center shadow>

![Postman環境の選択](./select-environment.png)

</ImageFrame>

ドロップダウンの右にある**目**のアイコンをクリックすると、その環境の詳細を確認できます。

<ImageFrame border center shadow>

![Postman環境の詳細の確認](./inspect-environment.png)

</ImageFrame>

## APIリクエストの実行

APIリクエストを実行するには、Box Postmanコレクションから**リクエスト**を選択します。この例では、\[**Folders**]フォルダにある\[**List items in folder**] APIを使用します。

<ImageFrame border center shadow>

![APIリクエストの選択](./select-api-request.png)

</ImageFrame>

デフォルトでは、このAPIエンドポイントの`folder_id`は、すべてのユーザーのルートフォルダを表す`0`に設定されています。この値は、そのまま使用することも、調べたいフォルダのフォルダIDに設定することもできます。

次に、右上にある\[**Send**]ボタンをクリックしてAPIリクエストを送信します。

<ImageFrame border center shadow>

![Postmanの\[Send\]ボタン](./postman-send-button.png)

</ImageFrame>

このAPI呼び出しはすぐに制御が戻り、画面の下半分にある応答の\[**Body**]タブにフォルダ内の項目のリストが表示されます。

<ImageFrame border center shadow>

![Postmanの応答本文](./postman-response-body.png)

</ImageFrame>

<Message warning>

# 認証エラー

この時点で、Postmanがリストではなくエラーを返す場合があります。これは多くの場合、**アクセストークン**の有効期限が切れていることを意味します。詳細については、[Postmanでのアクセストークンの更新](g://tooling/postman/refresh)に関するガイドを参照してください。

</Message>

## まとめ

* BoxへのAPI呼び出しに使用するPostman環境を選択しました
* Boxへの最初のAPI呼び出しを実行し、ユーザーのルートフォルダのフォルダ項目をリクエストしました

<Next>

API呼び出しが完了しました

</Next>
