---
rank: 10
related_endpoints: []
related_guides:
  - authentication/select
required_guides: []
related_resources: []
alias_paths:
  - /docs/use-case-recipes
  - /v2/docs/box-api-recipes
category_id: applications
subcategory_id: applications/app-types
is_index: false
id: applications/app-types/select
type: guide
total_steps: 4
sibling_id: applications/app-types
parent_id: applications/app-types
next_page_id: applications/app-types
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/app-types/select.md
fullyTranslated: true
---
# アプリの種類の選択

[開発者コンソール][dev-console]で新しいBoxアプリケーションを作成する際は、まず、次のアプリケーションの種類のいずれかを選択する必要があります。選択するアプリケーションの種類は、プロジェクトのユースケースによって決まり、アプリケーションの構成時に使用できる認証方法のみに影響します。この選択を後で変更することはできません。

<ImageFrame shadow center>

![アプリの種類の選択](images/select-app-type.png)

</ImageFrame>

## Platform App

|             |                                                       |
| ----------- | ----------------------------------------------------- |
| **認証方法**    | [OAuth 2.0][oauth2]、[JWT][jwt]、または[クライアント資格情報認証][ccg] |
| **注目すべき機能** | Webhook、統合、ウェブアプリ統合                                   |

Platform App encompasses most use cases and is the most flexible option. This application type allows for interaction with our 150+ endpoints. For example, downloading/uploading, searching, applying metadata and more.

<CTA to="g://applications/app-types/platform-apps">

Learn more about Platform Apps

</CTA>

## アクセス制限付きアプリ

|             |                      |
| ----------- | -------------------- |
| **認証方法**    | [アプリトークン][app-token] |
| **注目すべき機能** | 制限されたAPIアクセス         |

アクセス制限付きアプリは、[Box View][view-app]を利用したり、別のアプリケーション内でBoxコンテンツをプレビューしたりする場合に最適です。この種類のアプリケーションで操作できるエンドポイントの数は限られています。

<CTA to="g://applications/app-types/limited-access-apps">

アクセス制限付きアプリの詳細を確認する

</CTA>

## カスタムスキル

|             |                     |
| ----------- | ------------------- |
| **認証方法**    | スキルイベントにおけるアクセストークン |
| **注目すべき機能** | 制限されたAPIアクセス        |

カスタムスキル (Box Skill) とは、Boxにアップロードされたファイルに対してカスタマイズした処理を実行する一種のアプリケーションです。スキルは、サードパーティの機械学習サービスを使用して、Boxにアップロードされたファイルから情報を自動的に抽出できるようにすることを目的としています。

<CTA to="g://applications/app-types/custom-skills">

カスタムスキルの詳細を確認する

</CTA>

[oauth2]: g://authentication/oauth2

[jwt]: g://authentication/jwt

[app-token]: g://authentication/app-token

[custom-apps]: g://applications/app-types/platform-apps

[dev-console]: https://app.box.com/developers/console

[view-app]: g://embed/box-view

[ccg]: g://authentication/client-credentials
