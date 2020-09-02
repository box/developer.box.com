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
total_steps: 2
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: applications/app-gallery
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/applications/index.md
---
# アプリケーション

Box Platformでは、明らかに異なるアプリケーションの種類が2つサポートされています。作成しようとするサービスの種類によって、構成するBoxアプリの種類が決まります。

## 概要

以下に、さまざまなBoxアプリケーションの種類の概要を示します。

<ImageFrame border center>

![アプリケーションの種類](./images/app-types.png)

</ImageFrame>

<!-- markdownlint-disable line-length -->

| アプリの種類                   | 認証方式                | 機能と制限                         |
| ------------------------ | ------------------- | ----------------------------- |
| [カスタムアプリ][custom-apps]   | [OAuth 2.0][oauth2] | ウェブアプリ統合、アプリギャラリー、Webhook     |
| [カスタムアプリ][custom-apps]   | [JWT][jwt]          | Webhook                       |
| [カスタムアプリ][custom-apps]   | [アプリトークン][apptoken] | ウェブアプリ統合、Webhook、制限されたAPIアクセス |
| [カスタムスキル][custom-skills] | 承認不要                | 制限されたAPIアクセス                  |

<!-- markdownlint-enable line-length -->

<CTA to="guide://applications/select">

アプリケーションの種類の選択方法を確認する

</CTA>

## その他のアプリの種類

従来の目的でさらにいくつかのアプリの種類が存在します。以下に示す代替方法を使用してください。

<!-- markdownlint-disable line-length -->

| アプリの種類   | 認証方式                | 説明                              |
| -------- | ------------------- | ------------------------------- |
| 企業統合     | [OAuth 2.0][oauth2] | OAuth 2.0認証を使用して構成されたカスタムアプリと同等 |
| 企業統合     | [JWT][jwt]          | JWT認証を使用して構成されたカスタムアプリと同等       |
| パートナーの統合 | [アプリトークン][apptoken] | アプリトークン認証を使用して構成されたカスタムアプリと同等   |

<!-- markdownlint-enable line-length -->

[oauth2]: guide://authentication/oauth2

[jwt]: guide://authentication/jwt

[apptoken]: guide://authentication/app-token

[devtoken]: guide://authentication/access-tokens/developer-tokens

[custom-apps]: g://applications/custom-apps

[custom-skills]: g://applications/custom-skills
