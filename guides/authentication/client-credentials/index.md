---
rank: 4
related_endpoints:
  - get_authorize
related_guides:
  - applications/select
  - authentication/best-practices/
required_guides:
  - authentication/select
related_resources: []
alias_paths:
  - /docs/construct-jwt-claim-manually
  - /guides/authentication/jwt/without-sdk/#client-credentials-grant
category_id: authentication
subcategory_id: authentication/client-credentials
is_index: true
id: authentication/client-credentials
type: guide
total_steps: 1
sibling_id: authentication
parent_id: authentication
next_page_id: ''
previous_page_id: authentication/client-credentials/client-credentials-setup
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/client-credentials/index.md
fullyTranslated: true
---
# クライアント資格情報許可

サーバー認証を利用し、クライアントIDとクライアントシークレットを使用してアプリケーションのIDを確認する場合は、以下の手順に従います。

## 前提条件

* Box[開発者コンソール][devconsole]でサーバー認証 (クライアント資格情報許可使用) を使用するカスタムアプリケーション
* \[構成] タブからアプリケーションのクライアントシークレットを表示およびコピーするために、Boxアカウントで[2FA][2fa]が有効になっていること
* Box管理コンソールでアプリケーションが[承認][auth]されていること

<Message notice>

クライアントシークレットは機密情報であり、保護する必要があります。アクセストークンの取得時にBoxがアプリケーションのIDを安全に確認するために使用されるため、クライアントシークレットを自由に配布するべきではありません。配布方法には、メール、公開フォーラム、コードリポジトリ、分散されたネイティブアプリケーション、クライアント側のコードなどがあります。 

</Message>

## 利用方法

API呼び出しを実行して[アクセストークン][accesstoken]を取得する際は、リクエスト本文にクライアントIDとクライアントシークレットを含める必要があります。`grant_type`を`client_credentials`に設定します。

アプリケーションの[サービスアカウント][sa]として認証する場合は、以下のようにします。

* `box_subject_type`を`enterprise`に設定する
* `box_subject_id`をEnterprise IDに設定する

管理対象ユーザーとして認証する場合は、以下のようにします。

* `box_subject_type`を`user`に設定する 
* `box_subject_id`をユーザーIDに設定する

<Tabs>

<Tab title="cURL">

<!-- markdownlint-disable line-length -->

```cURL
curl -i -X POST "https://api.box.com/oauth2/token" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "client_id=<client_id>" \
    -d "client_secret=<client_secret>" \
    -d "grant_type=client_credentials" \
    -d "box_subject_type=enterprise"  \
    -d "box_subject_id=<enterprise_id>"
```

<!-- markdownlint-enable line-length -->

</Tab>

</Tabs>

<Message notice>

Box SDKでは、現在、この認証方法をサポートしていません。

</Message>

## 一般的なエラー

### Grant credentials are invalid (許可の資格情報が無効です)

このエラーは次のいずれかを示します。

* 渡されたクライアントIDとクライアントシークレットが正しくないか、同じアプリケーションのものではない

* 選択した[アプリケーションアクセス][aa]に基づいて`box_subject_id`を使用できない

<!-- i18n-enable localize-links -->

[2fa]: https://support.box.com/hc/ja/articles/360043697154-アカウントの多要素認証の設定

<!-- i18n-disable localize-links -->

[devconsole]: https://app.box.com/developers/console

[accesstoken]: e://post-oauth2-token/

[sa]: g://getting-started/user-types/service-account/

[auth]: g://authorization

[aa]: g://authentication/client-credentials/client-credentials-setup/#application-access
