---
rank: 4
related_endpoints: []
related_guides: []
required_guides:
  - applications/custom-apps/app-token-setup
  - applications/custom-apps/jwt-setup
related_resources: []
alias_paths: []
category_id: applications
subcategory_id: applications/custom-apps
is_index: false
id: applications/custom-apps/app-approval
type: guide
total_steps: 4
sibling_id: applications/custom-apps
parent_id: applications/custom-apps
next_page_id: ''
previous_page_id: applications/custom-apps/app-token-setup
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/custom-apps/app-approval.md
fullyTranslated: true
---
# アプリの承認

[JWT][jwt]認証、[クライアント資格情報許可][ca]認証、または[アプリトークン][app-token]認証で構成されているアプリケーションは、Box Enterprise管理者が承認しないと、使用できません。

## 承認の通知

アプリの承認のための半自動プロセスは、開発者コンソールで利用できます。

[開発者コンソール][devconsole]で、目的のアプリケーションの \[**承認**] タブに移動します。

<ImageFrame border width="400" center>

![キーの追加と管理](../images/app-authorization.png)

</ImageFrame>

承認を得るためにアプリケーションを送信すると、会社の管理者宛てにアプリケーションを承認するようメールが送信されます。このプロセスの詳細については、[アプリの承認に関するサポート記事][app-auth]を参照してください。

## 手動による承認

上記のプロセスを利用できない場合は、以下の手順に従って手動でアプリケーションを承認してください。

### 開発者の場合

開発者の場合、[開発者コンソール][devconsole]で、目的のアプリケーションの \[**構成**] タブに移動します。\[OAuth 2.0資格情報] セクションまで下にスクロールし、Box管理者に提出するクライアントIDの値をコピーします。

<Message>

# Box管理者の確認方法

自分の会社の管理者がわからない場合は、Boxの \[[アカウント設定][settings]] ページに移動し、一番下までスクロールしてください。管理者の連絡先が設定されている場合は、\[管理者の連絡先] の下に連絡先情報が表示されます。

</Message>

### 管理者の場合

Box管理者の場合、\[[管理コンソール][adminconsole]] に移動し、左側のナビゲーションパネルで \[**アプリ**] タブ (1) を選択して、画面上部にある \[**カスタムアプリ**] タブ (2) をクリックします。この画面では、新しいアプリ承認を追加するための \[**+**] ボタンが右上隅に表示されます。

<ImageFrame border center>

![\[アプリ\] タブ](../images/apps.png)

</ImageFrame>

表示されるポップアップで、開発者が開発者コンソールの \[**構成**] タブから収集した、アプリケーションのクライアントIDを入力します。

## 変更の再承認

アプリケーションのスコープまたはアクセスレベルが変更された場合は、アプリケーションを再承認する必要があります。新しい変更を有効にするには、上記のプロセスを繰り返して新しいアクセストークンをリクエストしてください。

管理者は、アプリケーションが最初に承認されたのと同じセクションで、そのアプリケーションを再承認できます。再承認するには、アプリケーション名の右側にある省略記号をクリックし、\[アプリを再承認] を選択します。

<ImageFrame border center>

![アプリの再承認](../images/app-reauthorize.png)

</ImageFrame>

[devconsole]: https://app.box.com/developers/console

[ca]: g://authentication/jwt/without-sdk/#client-credentials-grant

[settings]: https://app.box.com/account

[adminconsole]: https://app.box.com/master/settings/custom

[jwt]: g://authentication/jwt

[app-token]: g://authentication/app-token

[app-auth]: https://community.box.com/t5/Managing-Developer-Sandboxes/Authorizing-Apps-in-the-Box-App-Approval-Process/ta-p/77293
