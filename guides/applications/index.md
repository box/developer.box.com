---
rank: 10
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

Box Developer Console allows you to create applications you can then use to integrate with Box. **My Apps** view displays a list of already created applications and gives you quick access to their configuration details. This way, you don't need to open the app each time you want to generate a Developer Token, copy the Client ID, or generate a report.

![マイアプリ](./images/my-apps-page.png)

## 機能

**My Apps** page allows you to:

* Search through the list of already created apps.
* Filter the apps by **Enablement Status** and **Authentication Type**.
* [新しいアプリ][select]を作成する。
* Copy the app's [Client ID][clientcredentials].
* Rename the app and access its details with one click.
* アプリケーションの[有効化][enablement]ステータスと[承認][authorization]ステータスを確認する。App Centerに公開されたアプリには、App Centerでのステータスが表示されます。

The **Options menu** available for every entry allows you to:

* Access the configuration details of your application.
* Generate a [Developer Token][token].
* Add collaborators to your application.
* Run the [App Diagnostics Report][report].

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

[report]: g://api-calls/permissions-and-errors/app-diagnostics-report

[clientcredentials]: g://authentication/client-credentials

[insights]: https://support.box.com/hc/en-us/articles20738406915219-Platform-Insights
