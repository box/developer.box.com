---
rank: 2
related_endpoints: []
related_guides:
  - authorization/custom-app-approval
  - authorization/custom-skill-approval
required_guides:
  - authorization
  - authentication/app-token/app-token-setup/
related_resources: []
alias_paths: []
category_id: authorization
subcategory_id: null
is_index: false
id: authorization/limited-access-approval
type: guide
total_steps: 5
sibling_id: authorization
parent_id: authorization
next_page_id: authorization/common-errors
previous_page_id: authorization/custom-app-approval
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authorization/limited-access-approval.md
fullyTranslated: true
---
# アクセス制限付きアプリの承認

アクセス制限付き統合は、作成時に企業での使用について自動的に承認されます。

However, if the enterprise setting to **Require manual Admin authorization for Limited Access Apps** is enabled, an Admin must preform additional steps.

## 承認の通知

アプリの承認を送信するための半自動プロセスは、開発者コンソールで利用できます。

[開発者コンソール][devconsole]で、目的のアプリケーションの \[**承認**] タブに移動します。

<ImageFrame border width="400" center>

![キーの追加と管理](images/app_authorization.png)

</ImageFrame>

承認を得るためにアプリケーションを送信すると、企業のプライマリ管理者宛てにアプリケーションを承認するようメールが送信されます。このプロセスの詳細については、[アプリ承認に関するサポート記事][app-auth]を参照してください。

## 手動による承認

以下の手順では、手動でアプリケーションを承認する方法について説明します。

### 開発者の場合

1. [開発者コンソール][devconsole]で、目的のアプリケーションの \[**構成**] タブに移動します。
2. \[OAuth 2.0資格情報] セクションまで下にスクロールし、Box管理者に提出する \[**クライアントID**] の値をコピーします。

また、\[[マイPlatformアプリ][apps]] ビューでアプリケーションにカーソルを合わせて**クライアントID**を調べ、`copy`ボタンを使用してそのIDをコピーすることもできます。

<Message>

# Box管理者の確認方法

If you don't know your enterprise Admin, go to your Box [Account Settings][settings] page and scroll to the bottom. If an admin contact is set you should see their contact information under **Admin Contact**.

</Message>

### 管理者の場合

As a Box Admin, navigate to the [Admin Console][adminconsole] and select the **Integrations** > **Platform Apps Manager** > **Add Platform App**

<ImageFrame border center>

![\[アプリ\] タブ](images/jwt_app_approval_flow.png)

</ImageFrame>

表示されたポップアップで、開発者が開発者コンソールの \[**構成**] タブから収集した、アプリケーションのクライアントIDを入力します。

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

<!-- i18n-enable localize-links -->

[app-auth]: https://support.box.com/hc/ja/articles/360043697014-Boxのアプリ承認プロセスでのアプリの承認

<!-- i18n-disable localize-links -->

[apps]: g://applications
