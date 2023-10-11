---
rank: 70
related_endpoints:
  - post_users
related_guides:
  - authentication/jwt/
  - users/provision/
  - users/create-app-user
  - users/create-managed-user
category_id: sso-identities-and-app-users
subcategory_id: null
is_index: true
id: sso-identities-and-app-users
type: guide
total_steps: 3
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: sso-identities-and-app-users/find-app-user
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/sso-identities-and-app-users/index.md
fullyTranslated: true
---
# SSOとApp User

シングルサインオン (SSO) サービスは、会社の**Identity and Access Management (IAM)** ソリューションの一環として使用されることがよくあります。SSOサービスが展開されると、ユーザーは、1つの資格情報セット (ユーザー名とパスワード) だけを使用して1回ログインすれば、複数のアプリケーションの認証を安全に行うことができます。

Boxは、会社のSSOサービスに接続可能なアプリケーションの1つです。こうしたアプリケーションをカスタムアプリに統合すれば、いずれのエンドユーザーに対しても即座にBoxユーザーがプロビジョニングされます。その際、このエンドユーザーにはBoxアカウントが用意されたことが知らされません。

<Message notice>

一般的なSSOサービスには`Okta`、`Auth0`、`Microsoft Azure AD`、`OneLogin`、`G Suite`、`Ping Identity`などがありますが、これ以外にも展開可能なサービスは多数あります。

</Message>

## SSOをアプリに接続する

プログラムによってSSOサービスをBoxアプリケーションに統合する際のフローは以下のとおりです。

1. ユーザーはログアウトした状態でウェブアプリケーションやモバイルアプリケーションにアクセスします。
2. ユーザーは、通常`OAuth 2`や`OpenID Connect`を介して、ログインのためにSSOプロバイダにリダイレクトされます。
3. ログイン後、ユーザーはSSO ID資格情報と共にアプリケーションに再度リダイレクトされます。
4. アプリケーションでは、このユーザーに関連付けられたBoxアカウントがすでに存在するかどうかを確認します。
5. このユーザーに既存のBoxアカウントがある場合、アプリケーションはSSO IDを使用して、Boxでそのユーザーに代わってAPIコールを実行します。
6. このユーザーに関連付けられたBoxアカウントがまだない場合は、SSO IDに基づいて新しいBoxユーザーアカウントが作成されます。SSOサービスの一意のユーザーIDが新しいBoxユーザーにリンクされ、2つのアカウントの間に関連付けが作成されます。その後、この新しいBoxユーザーがBoxでそのユーザーに代わってAPIコールを実行します。

<Message notice>

# BoxウェブアプリとSSO

SSOサービスをBoxアプリケーションではなくBoxウェブサイトに接続したい方のために、Boxでは、SAML 2.0を通じて[Boxウェブアプリケーション](https://www.box.com)のSSO統合をサポートするための[統合オプション][sso-support]を多数用意しています。

</Message>

<!-- i18n-enable localize-links -->

[sso-support]: https://support.box.com/hc/ja/articles/360043696514-Enterpriseでのシングルサインオン-SSO-の設定

<!-- i18n-disable localize-links -->
