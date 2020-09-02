---
rank: 1
related_endpoints: []
related_guides:
  - applications
  - applications/select
required_guides: []
related_resources: []
alias_paths: []
category_id: applications
subcategory_id: applications/web-app-integrations
is_index: false
id: applications/web-app-integrations/types
type: guide
total_steps: 3
sibling_id: applications/web-app-integrations
parent_id: applications/web-app-integrations
next_page_id: applications/web-app-integrations/user-experience
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/applications/web-app-integrations/types.md
---
# 統合の種類

ウェブアプリ統合に用意されている統合には2種類あります。

## ポップアップ統合

ポップアップ統合の場合、Boxによってパネルが開き、統合用に構成されたアプリケーションのコールバックURLが読み込まれます。アプリケーションでは、ポップアップに統合のための独自のユーザーインターフェイスが表示されます。

統合は、このリクエストとともに有効期間の短い承認コードを受信します。この承認コードを使用すると、Box APIに接続し、コードをアクセストークンに交換してから、BoxへのAPI呼び出しを実行できます。

<Message warning>

ポップアップパネルでは、HTMLの`<iframe>`タグを使用し、埋め込みコンテンツを表示します。Boxのコンテンツのセキュリティを保護するには、コールバックURLでSSLを使用する必要があります。また、コールバックURLからの応答には、ランダムな文字列値に設定された`X-Frame-Options`ヘッダーを含める必要があります。

</Message>

## サーバー側統合

サーバー側統合の場合、確認プロンプトを受け入れると、ユーザーに追加のUIを表示することなく、アプリケーションの最終コールバックのURLにリクエストが送信されます。

統合は、このリクエストとともに有効期間の短い承認コードを受信します。この承認コードを使用すると、Box APIに接続し、コードをアクセストークンに交換してから、BoxへのAPI呼び出しを実行できます。
