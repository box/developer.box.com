---
rank: 3
related_endpoints: []
related_guides:
  - authentication/oauth2
  - authentication/jwt
  - authentication/app-token
  - applications/custom-apps
  - applications/custom-skills
required_guides: []
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: null
is_index: false
id: authentication/sso
type: guide
total_steps: 2
sibling_id: authentication
parent_id: authentication
next_page_id: authentication
previous_page_id: authentication/select
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/sso.md
---
# Box APIとSSO

多くのBox Enterpriseでは、**シングルサインオン**(SSO)を使用してBoxにログインしている[管理対象ユーザー][user-types]を認証します。Box Platformに作成されたアプリケーションとSSOプロバイダの対話方法は、作成されるアプリケーションの種類によって異なります。

## クライアント側認証を使用するカスタムアプリ

クライアント側[OAuth 2.0][OAuth 2.0]を使用するよう構成された[カスタムアプリ][custom_app]でユーザーが認証されると、Boxは、ユーザーの会社がSSOを使用するよう構成されているかどうかを検出します。構成されている場合、ユーザーのブラウザは、自社の構成済みのSSOログイン画面にリダイレクトされます。

### SSOの有効化とSSO必須モード

Boxを使用する会社では、SSOの使用を構成する方法として、**SSO必須モード**と**SSOの有効化**の2つがあります。

**SSOのみを有効化として**設定した会社では、ユーザーは、通常のBoxユーザー名とパスワードを使用するか、SSOプロバイダにリダイレクトされるかを選択できます。

**SSOが必須に設定されている**会社では、Boxにより、ユーザーは会社の構成済みSSOプロバイダでログインするよう強制されます。この場合、ログインしようとするユーザーはBoxアカウントとSSOプロバイダのアカウントの両方を既に所有している必要があります。どちらか一方がなければログインは失敗します。これは、Boxがユーザーのリダイレクト先となるSSOプロバイダを判断できないか、SSOプロバイダがユーザーのログインを認識できないからです。

<Message warning>

SSOが必須に設定されている会社では、SSOからユーザーを除外することはできません。これは、プラットフォームのユースケースのみで使用されている場合でも当てはまります。

</Message>

## サーバー側認証を使用するカスタムアプリ

[JWT][jwt]または[アプリトークン][app_token]認証を使用する[カスタムアプリ][custom_app]の場合、SSOはBoxでの認証に使用されません。

サーバー側認証を使用するカスタムアプリは、Boxとの通信にサーバー間のAPI呼び出しのみを使用します。このシナリオでのエンドユーザーの認証方法は、Boxではなくアプリケーションによって決まります。

つまり、アプリケーションによるエンドユーザーの認証はそのアプリケーションによって決まりますが、アプリケーションによるBoxの承認とはまったく異なります。

これらのユースケースでは、アプリケーションは通常の管理対象ユーザーとしてではなく、サービスアカウントまたはApp Userとして認証します。このようなユーザータイプには、デフォルトでは管理対象ユーザーのデータへのアクセス権限がありません。これらのアプリケーションから他の管理対象ユーザーのデータにアクセスできるようにするには、明示的な[管理者の承認][admin-approval]が必要です。

## カスタムスキル

[カスタムスキル][custom_skills]は、独自の方法で認証されます。この方法では、スキルイベントごとに固有のアクセストークンセットがアプリケーションに提供されます。

この場合、アプリケーションはユーザーと直接やり取りしないため、SSOは関与しません。

<Message>

Skillsを使用した場合でも、スキルイベントをトリガーする可能性があるフォルダにファイルをアップロードするユーザーは、ウェブアプリまたはモバイルアプリにログインする必要があります。このログインでは、必要に応じてSSOの使用が求められます。

</Message>

[user-types]: g://authentication/user-types

[admin-approval]: g://applications/custom-apps/app-approval

[jwt]: g://authentication/jwt

[oauth2]: g://authentication/oauth2

[app_token]: g://authentication/app-token

[custom_app]: g://applications/custom-apps

[custom_skills]: g://applications/custom-skills

[jwt]: g://applications/custom-apps/jwt-setup
