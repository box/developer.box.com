---
rank: 1
alias_paths:
  - /docs/usage-patterns
  - /docs/quickstart-guides
  - /docs/getting-started-box-integration
  - /docs/get-started-with-the-box-api
  - /docs/app-management
  - /docs/configuring-box-platform
category_id: applications
subcategory_id: null
is_index: true
id: applications
type: guide
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/index.md
fullyTranslated: true
---
# アプリケーション

Box開発者コンソールでは、後でBoxとの統合に使用できるアプリケーションを作成できます。\[マイアプリ] ビューには、すでに作成済みのアプリケーションのリストが表示されるので、ここから構成の詳細や追加オプションにすばやくアクセスできます。そのため、毎回アプリを開かなくても、開発者トークンを生成したり、クライアントIDをコピーしたりできます。

![マイアプリ](./images/my-apps-page.png)

## 機能

\[マイアプリ] ページでは、以下の操作を行うことができます。

1. [新しいアプリ][select]を作成する。
2. `i`アイコンを使用してアプリケーションの説明を表示する。
3. `copy`アイコンを使用してクライアントIDをコピーする。
4. Check application [enablement][enablement] and [authorization][authorization] status. Apps published to App Center display status from App Center.
5. 各エントリに用意されているメニューを使用して、アプリケーションの構成の詳細にアクセスしたり、[開発者トークン][token]を生成したりする。

## アプリインサイト

管理者と共同管理者は、組織におけるプラットフォームの利用状況を集約した、Platformインサイトのダッシュボードにアクセスできます。これには、以下のような、アプリ関連のデータが含まれます。

* アプリケーションごとのAPIコールの合計数
* 企業内の上位アプリケーションのリスト
* 承認を保留中のアプリケーションのリスト
* 有効化待ちのアプリケーションのリスト

詳細については、[Platformインサイト][insights]を参照してください。

<Message type="notice">

Platformインサイトにアクセスして表示するには、以下の権限が必要です。

* 会社の設定とアプリを表示する
* 会社の設定とアプリを編集する
* 新規レポートの実行および既存レポートへのアクセスを行う

</Message>

[token]: g://authentication/tokens/developer-tokens

[authorization]: g://authorization

[enablement]: g://authorization/custom-app-approval#user-authentication-apps

[select]: g://applications/app-types/select

[insights]: https://support.box.com/hc/en-us/articles/20738406915219-Platform-Insights
