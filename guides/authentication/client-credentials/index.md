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

<Message danger>

Your client secret is confidential and needs to be protected. Because this is how we securely identify an application's identity when obtaining an Access Token, you do not want to freely distribute a client secret. This includes via email, public forums and code repositories, distributed native applications, or client-side code. If you would like to add more security mechanisms, we recommend using our standard JWT application type.

</Message>

## 利用方法

API呼び出しを実行して[アクセストークン][accesstoken]を取得する際は、リクエスト本文にクライアントIDとクライアントシークレットを含める必要があります。`grant_type`を`client_credentials`に設定します。

アプリケーションの[サービスアカウント][sa]として認証する場合は、以下のようにします。

* `box_subject_type`を`enterprise`に設定する
* `box_subject_id`をEnterprise IDに設定する

管理対象ユーザーとして認証する場合は、以下のようにします。

* `box_subject_type`を`user`に設定する
* `box_subject_id`をユーザーIDに設定する

<Samples id="x_auth" variant="with_client_credentials">

</Samples>

<Message notice>

Our `.NET` and `Java` SDKs currently support Client Credentials. More SDKS will gain support soon.

</Message>

## 一般的なエラー

### Grant credentials are invalid (許可の資格情報が無効です)

このエラーは次のいずれかを示します。

* 渡されたクライアントIDとクライアントシークレットが正しくないか、同じアプリケーションのものではない

* the `box_subject_id` cannot be used based on the selected [application access][aa]. For example, if you send in a `box_subject_type` of `enterprise` and your application is configured for App Access Only, the `grant credentials are invalid` error will be returned

<!-- i18n-enable localize-links -->

[2fa]: https://support.box.com/hc/ja/articles/360043697154-アカウントの多要素認証の設定

<!-- i18n-disable localize-links -->

[devconsole]: https://app.box.com/developers/console

[accesstoken]: e://post-oauth2-token/

[sa]: g://getting-started/user-types/service-account/

[auth]: g://authorization

[aa]: g://authentication/client-credentials/client-credentials-setup/#application-access
