---
rank: 6
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: null
is_index: false
id: api-calls/suppress-notifications
type: guide
total_steps: 8
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/language-codes
previous_page_id: api-calls/allowing-domain-access
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/api-calls/suppress-notifications.md
---
# 通知の抑制

一部のAPI呼び出しでは、API呼び出しに`box-notifications: off`ヘッダーを指定することで、メール通知およびWebhook通知を抑制できます。

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

通知の抑制は、承認されたアプリケーションでのみ使用できます。アプリケーションに対して有効にする必要なスコープをリクエストするには、サポートに連絡してください。

この機能を正しく動作させるには、アプリケーションに対して以下の設定を構成する必要があります。

* **API呼び出しからメール通知を抑制可能** - サポート経由のリクエストで対応可能
* **エンタープライズのプロパティを管理** - 開発者コンソールから使用可能
* **会社の設定の編集**の共同管理者権限

</Message>

<Message type="notice">

一部の通知は抑制できません。その代表として、ユーザー、コメント、コラボレーション、タスク割り当ての作成のほか、ユーザーのログインの変更時があります。

</Message>
