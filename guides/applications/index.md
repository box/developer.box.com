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

## App insights

Admins and co-admins can access the Platform Insights dashboard that provides a comprehensive view of the organization’s platform usage. This includes app-related data, such as:

* The total number of API calls per application.
* A list of top applications within the enterprise.
* A list of pending application approvals.
* A list of applications awaiting enablement.

See [Platform Insights][insights] for details.

<Message type="notice">

You need the following permissions to access and view Platform Insights:

* View settings and apps for your company
* Edit settings and apps for your company
* Run new reports and access existing reports

</Message>

[oauth2]: g://authentication/oauth2

[jwt]: g://authentication/jwt

[apptoken]: g://authentication/app-token

[devtoken]: g://authentication/tokens/developer-tokens

[custom-apps]: g://applications/custom-apps

[custom-skills]: g://applications/custom-skills

[ccg]: g://authentication/client-credentials/

[laa]: g://applications/limited-access-apps/

[insights]: https://support.box.com/hc/en-us/articles/20738406915219-Platform-Insights
