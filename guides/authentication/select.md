---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/authentication-types-and-security
category_id: authentication
subcategory_id: null
is_index: false
id: authentication/select
type: guide
total_steps: 3
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/best-practices
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/select.md
fullyTranslated: true
---
# 認証方法の選択

アプリケーションで使用できる承認の種類は、開発者コンソールで構成したBoxアプリケーションの種類によって異なります。

<CTA to="guide://applications/app-types/select">

アプリケーションの種類の選択方法を確認する

</CTA>

各種Boxアプリケーションでは、以下の承認方法を使用できます。

| Boxアプリケーションの種類            | OAuth 2.0をサポートしますか? | JWTは? | クライアント資格情報は? | アプリトークンは? |
| ------------------------- | ------------------- | ----- | ------------ | --------- |
| [Platformアプリ][custom-app] | はい                  | はい    | はい           | いいえ       |
| [アクセス制限付きアプリ][la-app]     | いいえ                 | いいえ   | いいえ          | はい        |
| [カスタムスキル][custom-skill]   | いいえ                 | いいえ   | いいえ          | いいえ       |

## クライアント側

### OAuth 2.0

OAuth 2.0では、アプリケーションに対して、エンドユーザーをブラウザにリダイレクトしてBoxにログインさせ、ユーザーに代わってアプリケーションが処理を実行することを承認するよう要求します。

<ImageFrame center width="400" shadow border>

![BoxのOAuth 2.0承認](./oauth2-grant.png)

</ImageFrame>

<Message>

# OAuth 2.0はいつ使用すべきですか?

クライアント側認証は、以下に当てはまるアプリに最適な認証方法です。

* 既存のBoxアカウントを持っているユーザーを使用する
* ユーザーがBoxを使用していることを認識できるように、ID管理にBoxを使用する
* アプリケーションのサービスアカウントではなく各ユーザーアカウント内にデータを保存する

</Message>

<CTA to="guide://authentication/oauth2">

OAuth 2.0を使用したクライアント側認証を確認する

</CTA>

## サーバー側

### JWT

JSONウェブトークン (JWT) を使用するサーバー側認証では、エンドユーザーによる操作が必要ありません。また、適切な権限が付与されていれば、この認証方法を使用して、企業内の任意のユーザーの代理で操作することができます。IDの確認には、JWTアサーションおよび公開/秘密キーペアを使用します。

<ImageFrame center shadow border>

![BoxのJWTフロー](./jwt-flow.png)

</ImageFrame>

<Message>

# JWTはいつ使用すべきですか?

JWTを使用するサーバー側認証は、以下に当てはまるアプリに最適な認証方法です。

* Boxアカウントを持たないユーザーを使用する
* 独自のIDシステムを使用する
* Boxを使用していることをユーザーに認識させたくない
* ユーザーのアカウントではなくアプリケーションのサービスアカウント内にデータを保存する

</Message>

<CTA to="guide://authentication/jwt">

JWTを使用したサーバー側認証を確認する

</CTA>

### クライアント資格情報許可

クライアント資格情報許可を使用するサーバー側認証では、エンドユーザーによる操作が必要ありません。また、適切な権限が付与されていれば、この認証方法を使用して、企業内の任意のユーザーの代理で操作することができます。IDの確認には、アプリケーションのクライアントIDとクライアントシークレットを使用します。

<Message>

# クライアント資格情報許可はいつ使用すべきですか?

クライアント資格情報許可を使用するサーバー側認証は、以下に当てはまるアプリに最適な認証方法です。

* Boxアカウントを持たないユーザーを使用する
* 独自のID管理システムを使用する
* Boxを使用していることをユーザーに認識させたくない
* ユーザーのアカウントではなくアプリケーションのサービスアカウント内にデータを保存する

</Message>

<CTA to="guide://authentication/client-credentials">

クライアント資格情報許可を使用したサーバー側認証を確認する

</CTA>

### アプリトークン

サーバー側アプリトークンは、アプリケーションに、それ自体のアカウントのデータに対する読み取りと書き込みのアクセス権限だけがある認証方法です。これは、主にBox Viewアプリケーションで使用されます。この認証方法を使用すると、アプリケーションはそのアプリケーションのサービスアカウントとして自動的に認証されるため、ユーザーを承認する必要がありません。

<Message>

# アプリトークンはいつ使用すべきですか?

アプリトークンを使用するサーバー側認証は、以下に当てはまるアプリに最適な認証方法です。

* ユーザーモデルがない環境、またはBoxアカウントを持たないユーザーがいる環境で使用する
* 独自のID管理システムを使用する
* Boxを使用していることをユーザーに認識させたくない
* ユーザーのアカウントではなくアプリケーションのサービスアカウント内にデータを保存する

</Message>

<CTA to="guide://authentication/app-token">

アプリトークンを使用したサーバー側認証を確認する

</CTA>

## 比較

以下に、クライアント側とサーバー側の認証の主な違いの概要を示します。

|                 | OAuth 2.0 | JWT | クライアント資格情報 | アプリトークン |
| --------------- | --------- | --- | ---------- | ------- |
| ユーザーの関与が必要?     | はい        | いいえ | いいえ        | いいえ     |
| 管理者の承認が必要?      | いいえ       | はい  | はい         | はい      |
| 他のユーザーの代理で操作可能? | はい        | はい  | はい         | いいえ     |
| ユーザーにBoxを表示?    | はい        | いいえ | いいえ        | いいえ     |
| App Userを作成可能?  | いいえ       | はい  | はい         | いいえ     |

<Message>

アクセストークンは特定のBoxユーザーに関連付けられており、そのユーザーが誰であるかは、トークンがどのように取得されたかによって決まります。

たとえば、クライアント側認証を使用している場合、トークンは、自分のアカウントへのアクセス権限を付与したユーザーを表します。一方、サーバー側認証を使用している場合、トークンは、デフォルトでアプリケーションのサービスアカウントとなります。

</Message>

[custom-app]: g://applications/app-types/platform-apps

[custom-skill]: g://applications/app-types/custom-skills

[la-app]: g://applications/app-types/limited-access-apps
