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
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/index.md
fullyTranslated: true
---
# アプリケーション

## 概要

以下に、作成できるさまざまなBoxアプリケーションの種類の概要を示します。

<ImageFrame border center>

![アプリケーションの種類](./images/select-app-type.png)

</ImageFrame>

<!-- markdownlint-disable line-length -->

| アプリケーションの種類              | 認証方式                             |
| ------------------------ | -------------------------------- |
| [カスタムアプリ][custom-apps]   | [OAuth 2.0][oauth2]または[JWT][jwt] |
| アクセス制限付きアプリ              | [アプリトークン][apptoken]              |
| [カスタムスキル][custom-skills] | 承認不要                             |

<!-- markdownlint-enable line-length -->

<CTA to="guide://applications/select">

アプリケーションの種類の選択方法を確認する

</CTA>

<!-- markdownlint-enable line-length -->

[oauth2]: guide://authentication/oauth2

[jwt]: guide://authentication/jwt

[apptoken]: guide://authentication/app-token

[devtoken]: guide://authentication/access-tokens/developer-tokens

[custom-apps]: g://applications/custom-apps

[custom-skills]: g://applications/custom-skills
