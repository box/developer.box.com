---
rank: 0
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths:
  - /docs/box-for-salesforce-developer-toolkit
category_id: tooling
subcategory_id: tooling/salesforce-toolkit
is_index: true
id: tooling/salesforce-toolkit
type: guide
total_steps: 5
sibling_id: tooling
parent_id: tooling
next_page_id: tooling/salesforce-toolkit/methods
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/salesforce-toolkit/index.md
fullyTranslated: true
---
# Salesforce Developer Toolkit

Salesforce Developer Toolkitを使用すると、Box for Salesforce統合の動作をプログラムによりカスタマイズできます。このツールキットに含まれる複数のグローバルAPEXメソッドを使用して、デフォルトの動作をトリガーしたり、拡張したりできます。このグローバルメソッドにより、内部のSalesforceレコードとBoxフォルダのマッピングを更新し、権限の管理を処理できます。

<Message type="notice">

この機能は最新のBox for [Salesforceパッケージ][sf-package]に含まれています。

</Message>

<Message type="warning">

# このツールキットに含まれない機能

このツールキットは、BOX Content API用のフル機能を備えたAPEXラッパーではありません。このようなラッパーをお求めの場合は、[Box SDK for Salesforce][sf-sdk]を参照してください。

</Message>

## 認証

認証を行うには、APIコールでのサービスアカウント資格情報の使用を許可するという方法があります。

この場合、Salesforce管理者がツールキットのグローバルAPEXクラスへのアクセスを制限する必要があります。このような方法を使用することで、Boxのコンテンツとコラボレーションを直接変更できるため、Salesforce管理者はグローバルなツールキットAPEXクラスへのアクセスを制限して、適切な措置を講じる必要があります。

`accessToken`をパラメータとして取得するツールキットメソッドでは、`accessToken`の値として`null`を送信することによって、サービスアカウント資格情報を使用できます。

`accessToken`に値が渡された場合、BoxへのAPIコールは送信されたアクセストークンを使用して行われます。渡されるトークンが有効であるかどうか、およびトークンに関連付けられているユーザーにリクエストされた操作を実行する権限があるかどうかは、開発者が確認する必要があります。

<!-- i18n-enable localize-links -->

[sf-package]: https://support.box.com/hc/ja/articles/360044195713-Box-for-Salesforceのインストールと設定

[sf-sdk]: https://github.com/box/box-salesforce-sdk

<!-- i18n-disable localize-links -->
