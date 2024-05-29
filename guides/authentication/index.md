---
rank: 20
alias_paths:
  - /docs/application-setup
  - /docs/authentication
category_id: authentication
subcategory_id: null
is_index: true
id: authentication
type: guide
total_steps: 3
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: authentication/sso
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/index.md
fullyTranslated: true
---
# 認証

Box APIを使用する認証では、ユーザーの本人確認にアクセストークンを使用します。アクセストークンの取得方法は、ユーザーの承認に使用した方法によって異なります。アプリケーションで利用できる承認の種類は、ユースケースのほか、開発者コンソールで作成されたアプリケーションの種類に応じて異なります。

| Boxアプリケーションの種類          | 認証方法                                                  |
| ----------------------- | ----------------------------------------------------- |
| [カスタムアプリ][custom-app]   | [OAuth 2.0][oauth2]、[JWT][jwt]、または[クライアント資格情報許可][ccg] |
| [アクセス制限付きアプリ][la]       | [アプリトークン][apptoken]                                   |
| [カスタムスキル][custom-skill] | 認証方法は選択不要                                             |

<CTA to="guide://authentication/select">

承認の種類の選択方法を確認する

</CTA>

## 認証のアクセストークン

各APIエンドポイントには、APIコールを実行するために有効でアクティブな**アクセストークン**が必要です。アクセストークンは、APIエンドポイントに対して認証済みBoxユーザーを識別する一意の文字列です。

```curl
curl https://api.box.com/2.0/users/me \
    -H "authorization: Bearer EGmDmRVfhfHsqesn5yVYHAqUkD0dyDfk"

```

<CTA to="guide://authentication/tokens">

アクセストークンの詳細を確認する

</CTA>

[oauth2]: g://authentication/oauth2

[jwt]: g://authentication/jwt

[apptoken]: g://authentication/app-token

[devtoken]: g://authentication/tokens/developer-tokens

[custom-app]: g://applications/app-types/custom-apps

[custom-skill]: g://applications/app-types/custom-skills

[la]: g://applications/app-types/select/#limited-access-app

[ccg]: g://authentication/client-credentials
