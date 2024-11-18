---
rank: 7
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: null
is_index: false
id: api-calls/suppress-notifications
type: guide
total_steps: 9
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/language-codes
previous_page_id: api-calls/allowing-domain-access
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/suppress-notifications.md
fullyTranslated: true
---
# Suppress notifications

For some API calls, you can block email and webhook notifications by including a `box-notifications: off` header with the API call.

<Tabs>

<Tab title="cURL">

```curl
curl -X POST https://api.box.com/2.0/folders \
    -H "box-notifications: off" \
    -H "authorization: Bearer ACCESS_TOKEN" \
    -d '{
      "name": "New Folder",
      "parent": {
        "id": "0"
      }
    }'

```

</Tab>

</Tabs>

たとえば、これをウイルススキャンツールに使用すると、社内でユーザーのファイルのコピーをダウンロードするたびに、そのファイルのすべてのコラボレータにダウンロードに関する通知メールが届くことはなくなります。

この場合でも、すべてのアクションがユーザーの更新フィードと監査ログに表示されます。

<Message type="warning">

# スコープの要件

通知の抑制は、承認されたアプリケーションでのみ使用できます。アプリケーションに対して有効にする必要なスコープをリクエストするには、サポートにお問い合わせください。

この機能を正しく動作させるには、アプリケーションに対して以下の設定を構成する必要があります。

* **\[APIコールからメール通知を抑制する]** - サポート経由のリクエストで対応可能
* **\[Enterpriseのプロパティを管理する]** - 開発者コンソールから使用可能
* **\[会社の設定を編集する]** の共同管理者権限

</Message>

<Message type="notice">

一部の通知は抑制できません。その代表として、ユーザー、コメント、コラボレーション、タスク割り当ての作成のほか、ユーザーのログインの変更時があります。

</Message>
