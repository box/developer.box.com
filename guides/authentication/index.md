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
total_steps: 2
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: authentication/sso
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/index.md
---
# 認証

Box APIを使用する認証では、ユーザーの本人確認にアクセストークンを使用します。アクセストークンの取得方法は、ユーザーの承認に使用した方法によって異なります。アプリケーションで利用できる承認の種類は、ユースケースのほか、開発者コンソールで作成されたアプリケーションの種類に応じて異なります。

<!-- markdownlint-disable line-length -->

| Boxアプリケーションの種類          | 承認方法                                                  |
| ----------------------- | ----------------------------------------------------- |
| [カスタムアプリ][custom-app]   | [OAuth 2.0][oauth2]、[JWT][jwt]、または[アプリトークン][apptoken] |
| [カスタムスキル][custom-skill] | 承認不要                                                  |
| 企業統合                    | [OAuth 2.0][oauth2]、[JWT][jwt]                        |
| パートナーの統合                | [アプリトークン][apptoken]                                   |

<!-- markdownlint-enable line-length -->

<Message warning>

企業統合またはパートナーの統合は、従来の目的で存在します。代わりにカスタムアプリを使用し、必要に応じて関連する認証方式を使用してください。

</Message>

<CTA to="guide://authentication/select">

承認の種類の選択方法を確認する

</CTA>

## 認証のアクセストークン

各APIエンドポイントには、API呼び出しを実行するために有効でアクティブな**アクセストークン**が必要です。アクセストークンは、APIエンドポイントに対して認証済みBoxユーザーを識別する一意の文字列です。

```curl
curl https://api.box.com/2.0/users/me \
  -H "authorization: Bearer EGmDmRVfhfHsqesn5yVYHAqUkD0dyDfk"
```

## ユーザー承認

ユーザーのアクセストークンを取得する方法はいくつかあります。[OAuth 2.0][oauth2]を介したクライアント側の承認、[JWT][jwt]を使用したサーバー側の承認のほか、有効期間が長い[アプリトークン][apptoken]や有効期間が短い[開発者トークン][devtoken]があります。

[oauth2]: guide://authentication/oauth2

[jwt]: guide://authentication/jwt

[apptoken]: guide://authentication/app-token

[devtoken]: guide://authentication/access-tokens/developer-tokens

[custom-app]: guide://applications/custom-apps

[custom-skill]: guide://applications/custom-skills
