---
rank: 4
related_guides:
  - authentication
  - authorization
  - api-calls
category_id: getting-started
subcategory_id: null
is_index: false
id: getting-started/sandbox
type: guide
total_steps: 3
sibling_id: getting-started
parent_id: getting-started
next_page_id: ''
previous_page_id: getting-started/publish-app
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/sandbox.md
fullyTranslated: true
---
# Box Platformのサンドボックス

BoxのDeveloperサンドボックスでは、制御された安全な環境を提供しています。この環境で、開発者は、企業の実際のデータに影響を及ぼすことなく、アプリケーションの作成、テスト、コラボレーションを行うことができます。このようなサンドボックスは、Box APIの実験、設定のテスト、新しい統合の試用、外部パートナーとの連携を行うための安全な領域を提供します。

## What is a developer sandbox

Developerサンドボックスとは、実稼働 (ライブ) Enterpriseの設定から隔離された環境であり、開発アクティビティを実際のビジネスデータから切り離しておくことができます。

## Why use a sandbox

サンドボックスを使用すると、以下のことが可能です。

* 無料のスタンドアロンアカウントではなく、Enterpriseにリンクされている環境内で安全にアプリを開発する。
* 社内チームとも外部コラボレータとも安全にコラボレーションする。請負業者、パートナー、その他の外部ユーザーは、実際のシステムにアクセスしてセキュリティを危険にさらすことなく、サンドボックスに参加できます。
* サンドボックスは作成時に企業のプランやアドオンを継承するため、現実的なテスト条件下でアプリをテストする。プランやアドオンに変更があった場合は、Enterprise管理者が[手動で同期][4]することができます。

## サンドボックスへのアクセス

Box内のサンドボックスは、Enterprise管理者によって作成されます。サンドボックスの作成方法については、[こちらのドキュメント][1]を参照してください。サンドボックスのプライマリ管理者に指定されると、サンドボックスのユーザーIDが記載されたログインメールがBoxから届きます。

サンドボックス環境内で[開発者コンソール][2]にアクセスしてパスワードを設定するには、メールに記載されているリンクをクリックします。また、[developer.box.com][3]でサンドボックスの資格情報を使用してログインすることで、サンドボックスにアクセスすることもできます。

サンドボックスのプライマリ管理者は、個々のサンドボックスアカウントを作成し、親のBox Enterpriseのプランに一致する新しいBox環境へのアクセス権限を開発者に付与することができます。

### 複数のサンドボックスへのアクセス

プライマリ管理者は、複数のサンドボックスにログインできます。既存のサンドボックスにこの機能を使用する場合は、一意のメールアドレスを削除し、システムで生成されたメールアドレスを取得します。

[1]: https://support.box.com/hc/en-us/articles/360043697274-Managing-developer-sandboxes-for-Box-admins

[2]: https://cloud.app.box.com/developers/console

[3]: https://developer.box.com

[4]: https://support.box.com/hc/en-us/articles/360043697274-Managing-developer-sandboxes-for-Box-admins#:~:text=in%20a%20sandbox.-,Synchronizing,-sandbox%20with%20production
