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
total_steps: 2
sibling_id: tooling
parent_id: tooling
next_page_id: tooling/salesforce-toolkit/methods
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/salesforce-toolkit/index.md
---
# Salesforce開発者ツールキット

Salesforce Developer Toolkitを使用すると、Box for Salesforce統合の動作をプログラムによりカスタマイズできます。このツールキットに含まれる複数のグローバルAPEXメソッドを使用して、デフォルトの動作をトリガーしたり、拡張したりできます。このグローバルメソッドにより、内部のSalesforceレコードとBoxフォルダのマッピングを更新し、権限の管理を処理できます。

<Message type="notice">

この機能は最新のBox for [Salesforceパッケージ][sf-package]に含まれています。

</Message>

<Message type="warning">

# このツールキットに含まれない機能

このツールキットは、BOX Content API用のフル機能を備えたAPEXラッパーではありません。このようなラッパーをお求めの場合は、[Box SDK for Salesforce][sf-sdk]を参照してください。

</Message>

## 認証

認証を行うには、API呼び出しでのサービスアカウント資格情報の使用を許可するという方法があります。

この場合、Salesforce管理者がツールキットのグローバルAPEXクラスへのアクセスを制限する必要があります。このような方法を使用することで、Boxのコンテンツとコラボレーションを直接変更できるため、Salesforce管理者はグローバルなツールキットAPEXクラスへのアクセスを制限して、適切な措置を講じる必要があります。

`accessToken`をパラメータとして取得するツールキットメソッドでは、`accessToken`の値として`null`を送信することによって、サービスアカウント資格情報を使用できます。

`accessToken`に値が渡された場合、BoxへのAPI呼び出しは送信されたアクセストークンを使用して行われます。渡されるトークンが有効であるかどうか、およびトークンに関連付けられているユーザーに要求された操作を実行する権限があるかどうかは、開発者が確認する必要があります。

[sf-package]: https://community.box.com/t5/For-Admins/Box-For-Salesforce-Installation/ta-p/180

[sf-sdk]: https://github.com/box/box-salesforce-sdk
