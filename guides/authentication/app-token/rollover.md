---
rank: 4
related_endpoints: []
related_guides: []
required_guides:
  - applications/custom-apps/app-token-setup
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/app-token
is_index: false
id: authentication/app-token/rollover
type: guide
total_steps: 4
sibling_id: authentication/app-token
parent_id: authentication/app-token
next_page_id: ''
previous_page_id: authentication/app-token/endpoints
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/app-token/rollover.md
---
# アプリトークンの循環

アプリケーションのアプリトークンを1つずつ更新することで、アプリケーションではトークンの循環が可能となり、競合が発生することはありません。

## トークンを循環させる理由

一定の間隔でアプリトークンを循環させる理由はいくつかあります。

1. 有効期限が自動的に切れるよう構成されているトークンを交換するため
2. セキュリティ侵害を受けたトークンによる影響を抑えるため

どちらの場合も、Boxでは、いつでも2つのアクティブなアプリトークンがサポートされているため、古いトークンから新しいトークンへのシームレスな循環が可能です。

## 循環の手順

以下の手順では、すでにプライマリアプリトークンとセカンダリアプリトークンを作成済みで、いずれか一方を置き換える準備が整っていることを前提としています。

以下の手順に従うと、2つの新しいトークンを使用して、問題なくアプリケーションを構成できます。

1. アプリケーションでプライマリアプリトークンを使用していることを前提に、[開発者コンソール][console]アプリケーションに移動します。アプリケーションの\[構成]セクションに移動し、セカンダリアプリトークンの\[キーを生成]ボタンを選択します。
2. セカンダリアプリトークンを使用してアプリケーションを更新します。次の手順に進む前に、この新しいトークンでアプリケーションが完全に構成されていることを確認します。
3. プライマリアプリトークンが使用されていないことを確信したら、[開発者コンソール][console]に移動して、プライマリアプリトークンの\[取り消し]ボタンを選択します。

<Message>

セカンダリアプリトークンからプライマリアプリトークンにロールバックするには、トークンが交換された状態で同じ手順を繰り返します。

</Message>

[console]: https://app.box.com/developers/console
