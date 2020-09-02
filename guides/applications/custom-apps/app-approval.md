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
  https://github.com/box/developer.box.com/blob/default/content/guides/applications/custom-apps/app-approval.md
---
# アプリの承認

[JWT][jwt]または[アプリトークン][app-token]認証で構成されたカスタムアプリは、使用する前に、Boxに登録されている会社内で会社の管理者ユーザーが承認する必要があります。

## 承認の通知

アプリの承認のための半自動プロセスは、開発者コンソールで利用できます。

[開発者コンソール][devconsole]でアプリケーションに移動し、アプリケーションの左側のサイドバーで\[一般]リンクを選択して、\[アプリの承認]セクションまで下にスクロールします。

<ImageFrame border width="400" center>

![キーの追加と管理](../images/app-authorization.png)

</ImageFrame>

承認用にアプリケーションを送信すると、会社の管理者にはアプリケーションを有効にするようメールが送信されます。このプロセスの詳細については、[アプリの承認に関するコミュニティ記事][app-auth]を参照してください。

## 手動による承認

上記のプロセスを利用できない場合は、以下の手順に従って手動でアプリケーションを承認してください。

### 開発者の場合

開発者の場合は、[開発者コンソール][devconsole]でアプリケーションに移動し、アプリのクライアントIDをコピーして管理者に提出します。

<Message>

# Box管理者の確認方法

自分の会社の管理者がわからない場合は、Boxの[アカウント設定][settings]ページに移動し、一番下までスクロールしてください。管理者の連絡先が設定されている場合は、\[管理者の連絡先]の下に連絡先情報が表示されます。

</Message>

### 管理者の場合

管理者の場合は、[管理コンソール][adminconsole]に移動し、\[アプリ]タブを選択します。

<ImageFrame border center>

![\[アプリ\]タブ](../images/apps.png)

</ImageFrame>

\[カスタムアプリケーション]セクションまで下にスクロールし、\[新しいアプリケーションを承認]ボタンをクリックします。

<ImageFrame border center>

![\[カスタムアプリケーション\]セクション](../images/custom-apps.png)

</ImageFrame>

APIキーの入力を求められたら、開発者から提出された、アプリケーションのクライアントIDを入力してください。

## 変更の再承認

アプリケーションのスコープまたはアクセスレベルが変更された場合は、アプリケーションを再承認する必要があります。新しい変更を有効にするには、上記のプロセスを繰り返して新しいアクセストークンをリクエストしてください。

アプリケーションを最初に承認したときと同じセクションで、管理者は同じアプリケーションを再承認できます。

<ImageFrame border center>

![アプリの再承認](../images/app-reauthorize.png)

</ImageFrame>

[devconsole]: https://app.box.com/developers/console

[settings]: https://app.box.com/account

[adminconsole]: https://app.box.com/master/settings/custom

[jwt]: g://authentication/jwt

[app-token]: g://authentication/app-token

[app-auth]: https://community.box.com/t5/Managing-Developer-Sandboxes/Authorizing-Apps-in-the-Box-App-Approval-Process/ta-p/77293
