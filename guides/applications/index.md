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
total_steps: 4
sibling_id: guides
parent_id: guides
next_page_id: applications/custom-apps
previous_page_id: ''
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

| アプリケーションの種類              | 認証方法                                                  |
| ------------------------ | ----------------------------------------------------- |
| [カスタムアプリ][custom-apps]   | [OAuth 2.0][oauth2]、[JWT][jwt]、または[クライアント資格情報許可][ccg] |
| [アクセス制限付きアプリ][laa]       | [アプリトークン][apptoken]                                   |
| [カスタムスキル][custom-skills] | 選択不要                                                  |

<!-- markdownlint-enable line-length -->

<CTA to="guide://applications/select">

アプリケーションの種類の選択方法を確認する

</CTA>

<!-- markdownlint-enable line-length -->

[oauth2]: g://authentication/oauth2

[jwt]: g://authentication/jwt

[apptoken]: g://authentication/app-token

[devtoken]: g://authentication/tokens/developer-tokens

[custom-apps]: g://applications/custom-apps

[custom-skills]: g://applications/custom-skills

[ccg]: g://authentication/client-credentials/

[laa]: g://applications/limited-access-apps/
