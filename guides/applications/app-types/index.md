---
rank: 15
alias_paths:
  - /docs/usage-patterns
  - /docs/quickstart-guides
  - /docs/getting-started-box-integration
  - /docs/get-started-with-the-box-api
  - /docs/app-management
  - /docs/configuring-box-platform
  - /guides/applications/custom-apps/
  - /guides/applications/limited-access-apps/
  - /guides/applications/custom-skills/
category_id: applications
subcategory_id: applications/app-types
is_index: true
id: applications/app-types
type: guide
total_steps: 4
sibling_id: applications
parent_id: applications
next_page_id: applications/app-types/custom-apps
previous_page_id: applications/app-types/select
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/app-types/index.md
fullyTranslated: true
---
# アプリケーションの種類

以下に、作成できるさまざまなBoxアプリケーションの種類の概要を示します。

<ImageFrame border center>

![アプリケーションの種類](./images/select-app-type.png)

</ImageFrame>

| アプリケーションの種類              | 認証方法                                                  |
| ------------------------ | ----------------------------------------------------- |
| [カスタムアプリ][custom-apps]   | [OAuth 2.0][oauth2]、[JWT][jwt]、または[クライアント資格情報許可][ccg] |
| [アクセス制限付きアプリ][laa]       | [アプリトークン][apptoken]                                   |
| [カスタムスキル][custom-skills] | 選択不要                                                  |

<CTA to="guide://applications/app-types/select">

アプリケーションの種類の選択方法を確認する

</CTA>

[oauth2]: g://authentication/oauth2

[jwt]: g://authentication/jwt

[apptoken]: g://authentication/app-token

[devtoken]: g://authentication/tokens/developer-tokens

[custom-apps]: g://applications/app-types/custom-apps

[custom-skills]: g://applications/app-types/custom-skills

[ccg]: g://authentication/client-credentials/

[laa]: g://applications/app-types/limited-access-apps/

[insights]: https://support.box.com/hc/en-us/articles/20738406915219-Platform-Insights
