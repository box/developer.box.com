---
rank: 8
related_endpoints: []
related_guides:
  - authentication/oauth2
  - authentication/jwt
  - authentication/app-token
  - applications/app-types/platform-apps
  - applications/app-types/custom-skills
required_guides: []
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: null
is_index: false
id: authentication/sso
type: guide
total_steps: 3
sibling_id: authentication
parent_id: authentication
next_page_id: authentication
previous_page_id: authentication/best-practices
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/sso.md
fullyTranslated: true
---
# Box APIとSSO

多くのBox Enterpriseでは、**シングルサインオン** (SSO) を使用して、Boxにログインしている[管理対象ユーザー][mu]を認証します。Box Platformに作成されたアプリケーションとSSOプロバイダの対話方法は、作成されるアプリケーションの種類によって異なります。

## Platform Apps with Client-side Authentication

When users authenticate with a [Platform App][custom_app] configured to use [OAuth 2.0][oauth2] Box will detect if the enterprise is configured to use SSO. If it is, Box will redirect the user to their browser and display the enterprise's configured SSO log-in screen.

### SSOの有効化とSSO必須モード

企業は、**SSO必須モード**と**SSOの有効化**の2つの方法のいずれかで、SSOを構成できます。

SSOが有効化されていても必須ではない場合、管理対象ユーザーは次のいずれかを選択できます。

* Boxのユーザー名とパスワードを使用してログインする
* SSOプロバイダを使用してログインする 

SSOが有効化され、必須になっている場合、すべての管理対象ユーザーは、企業の構成済みSSOプロバイダでログインするよう強制されます。この場合、ログインを試みるユーザーは、SAMLを介して渡されるメールアドレスと一致するBoxアカウントを持っているだけでなく、SSO側で構成されている必要があります。

<Message warning>

SSOが必須モードに設定されている企業では、SSOからユーザーを除外することはできません。これは、プラットフォームのユースケースのみで使用されている場合でも当てはまります。

</Message>

## Platform Apps with Server-side Authentication

For [Platform Apps][custom_app] that use [JWT][jwt] or [Client Credentials Grant][ccg] and [Limited Access Apps][la-app] that use [App Token][app_token] authentication, SSO is not used to authenticate with Box.

Platform Apps using server-side authentication only use server-to-server API calls to communicate with Box. In this scenario, the way in which an end user is authenticated is determined by the application and not by Box.

つまり、アプリケーションによるエンドユーザーの認証はそのアプリケーションによって決まりますが、アプリケーションによるBoxの承認とはまったく異なります。

これらのユースケースでは、アプリケーションは通常の管理対象ユーザーとしてではなく、サービスアカウントまたはApp Userとして認証します。このようなユーザータイプには、デフォルトでは管理対象ユーザーのデータへのアクセス権限がありません。これらのアプリケーションから他の管理対象ユーザーのデータにアクセスできるようにするには、明示的な[管理者の承認][admin-approval]が必要です。

## カスタムスキル

[カスタムスキル][custom_skills]は、独自の方法で認証されます。この方法では、スキルイベントごとに固有のアクセストークンセットがアプリケーションに提供されます。

この場合、アプリケーションはユーザーと直接やり取りしないため、SSOは関与しません。

<Message>

Skillsを使用した場合でも、スキルイベントをトリガーする可能性があるフォルダにファイルをアップロードするユーザーは、ウェブアプリまたはモバイルアプリにログインする必要があります。このログインでは、必要に応じてSSOの使用が求められます。

</Message>

[mu]: page://platform/user-types/#managed-users

[admin-approval]: g://authorization/custom-app-approval

[jwt]: g://authentication/jwt

[oauth2]: g://authentication/oauth2

[ccg]: g:///authentication/client-credentials

[la-app]: guide://applications/web-app-integrations

[app_token]: g://authentication/app-token

[custom_app]: g://applications/app-types/platform-apps

[custom_skills]: g://applications/app-types/custom-skills

[jwt]: g://authentication/jwt/jwt-setup
