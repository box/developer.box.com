---
rank: 1
related_endpoints: []
related_guides:
  - authorization/limited-access-approval
  - authorization/custom-skill-approval
required_guides:
  - authorization
  - authentication/oauth2/oauth2-setup
  - authentication/jwt/jwt-setup
alias_paths:
  - /guides/applications/custom-apps/app-approval
category_id: authorization
subcategory_id: null
is_index: false
id: authorization/custom-app-approval
type: guide
total_steps: 4
sibling_id: authorization
parent_id: authorization
next_page_id: authorization/limited-access-approval
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authorization/custom-app-approval.md
fullyTranslated: true
---
# カスタムアプリの承認

[JWT][jwt]または[クライアント資格情報許可][ccg]を使用するサーバー認証アプリケーションは、使用前にBox管理者が承認する必要があります。

[OAuth 2.0][oauth]を使用したユーザー認証アプリケーションは、[未公開アプリの設定][upa]に応じて、Box管理者が有効にする必要がある場合があります。

Box管理者は、管理コンソールでアプリケーションを適切に承認または有効化するために、そのクライアントIDが必要になります。

## 承認の通知

A semi-automated process to submit an app approval is available in the Developer Console for all custom application types.

### Server authentication apps

[開発者コンソール][devconsole]で、目的のアプリケーションの \[**承認**] タブに移動します。

<ImageFrame border center>

![Authorization tab](images/app_authorization.png)

</ImageFrame>

### User authentication apps

Navigate to the **Enablement** tab for your application in the [Developer Console][devconsole].

<ImageFrame border center>

![Enablement tab](images/app_enablement.png)

</ImageFrame>

Submitting the application for approval will send an email to your enterprise's Primary Admin to approve the application. When a Box Admin approves or declines your request, you will get an email with the decision. More information on this process is available in our [support article on app authorization][app-auth].

## 手動による承認

以下の手順では、手動でアプリケーションを承認する方法について説明します。

### 開発者の場合

1. Navigate to the **Configuration** tab for your application in the [Developer Console][devconsole]. 
2. Scroll down to the OAuth 2.0 Credentials section and copy the **Client ID** value to provide to a Box Admin.

<Message>

# Box管理者の確認方法

自分の会社の管理者がわからない場合は、Boxの \[[アカウント設定][settings]] ページに移動し、一番下までスクロールしてください。管理者の連絡先が設定されている場合は、\[管理者の連絡先] の下に連絡先情報が表示されます。

</Message>

### 管理者の場合

1. Navigate to the [Admin Console][adminconsole] and select the **Apps** tab (1) from the left navigation panel. 
2. Click the **Custom Apps Manager** tab (2) at the top of your screen. 
3. For both Server and User Authentication Apps screens, click the **Add App** (3) button in the top right corner to add a new app.
4. Alternatively, you can use the Custom Apps Manager table menu (4) to authorize and enable apps.

#### サーバー認証アプリ

<ImageFrame border center>

![サーバーアプリのタブ](images/jwt_app_approval_flow.png)

</ImageFrame>

#### ユーザー認証アプリ

<ImageFrame border center>

![ユーザーアプリのタブ](images/oauth_app_approval_flow.png)

</ImageFrame>

表示されたポップアップで、開発者が[開発者コンソール][devconsole]の \[**構成**] タブから収集した、アプリケーションのクライアントIDを入力します。

## 変更の再承認

アプリケーションのスコープまたはアクセスレベルが変更された場合は、アプリケーションを再承認する必要があります。新しい変更を有効にするには、上記のプロセスを繰り返して新しいアクセストークンをリクエストしてください。

管理者は、アプリケーションが最初に承認されたのと同じセクションで、そのアプリケーションを再承認できます。再承認するには、アプリケーション名の右側にある省略記号をクリックし、\[**アプリを再承認**] を選択します。

<ImageFrame border center>

![アプリの再承認](images/reauthorize_app.png)

</ImageFrame>

<!-- i18n-enable localize-links -->

[devconsole]: https://app.box.com/developers/console

<!-- i18n-disable localize-links -->

[ccg]: g://authentication/client-credentials

<!-- i18n-enable localize-links -->

[settings]: https://app.box.com/account

[adminconsole]: https://app.box.com/master/settings/custom

<!-- i18n-disable localize-links -->

[jwt]: g://authentication/jwt

[app-token]: g://authentication/app-token

[oauth]: g://authentication/oauth2

[upa]: g://security/#enterprise-settings-and-authorization

<!-- i18n-enable localize-links -->

[app-auth]: https://support.box.com/hc/ja/articles/360043697014-Boxのアプリ承認プロセスでのアプリの承認

<!-- i18n-enable localize-links -->
