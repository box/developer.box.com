---
rank: 1
related_endpoints: []
related_guides:
  - authentication/oauth2/oauth2-setup
  - authentication/oauth2
required_guides: []
related_resources: []
alias_paths:
  - /docs/publishing-your-application
  - /guides/applications/app-gallery
  - /guides/applications/app-gallery/
category_id: applications
subcategory_id: applications/integrations
is_index: true
id: applications/integrations
type: guide
total_steps: 0
sibling_id: applications
parent_id: applications
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/integrations/index.md
fullyTranslated: true
---
# Integrations

The [Box Integrations][app-center] is the first place for Box users to find out about applications that they can use in combination with Box. If your application is suited to be used by other enterprises, listing your service in the Integrations can be a great way to find new users. Integrations groups apps into sections so that you can quickly find featured, most popular, or recently added apps.

<ImageFrame shadow center>

![Integrations](./images/app-center.png)

</ImageFrame>

## アプリの開発またはBoxパートナーへの参加

Box App Center用のアプリケーションの開発またはBoxパートナーへの参加の詳細については、Box Supportサイトの[Box Partner Resources][bp]のガイド (英語) を参照してください。

## アプリを公開する

[App Center][app-center]でアプリケーションを公開するには、以下の手順に従います。

### 前提条件

アプリケーションは、以下の要件を満たす必要があります。

* アプリケーションは完成した状態で、実稼働環境での使用準備ができていること。
* The application leverages OAuth 2.0 authentication, as the Integrations does not support any other authentication methods.
* 開発者として、[開発者コンソール][devconsole]でそのアプリケーションにアクセスできること。

### 1. 開発者コンソールにログインする

Navigate to the [Developer Console][devconsole] and select your application to submit to the Integrations.

### 2. フォームに入力する

Select the **Integrations** tab from the top menu.

<ImageFrame center border shadow>

![Integrations panel](./images/app-center.png)

</ImageFrame>

\[アプリを送信] ボタンをクリックします。

<ImageFrame center border shadow width="400">

![\[アプリを送信\] ボタン](./images/submit-app.png)

</ImageFrame>

次に、フォームで、アプリケーションのカテゴリ、簡単な説明と詳しい説明、スクリーンショット、アプリアイコンを指定します。

### 3. 掲載内容をプレビューする

\[プレビュー] ボタンを選択して、アプリケーションの掲載内容のプレビューを表示します。

<ImageFrame center border shadow>

![プレビューと送信](./images/submit-and-approve.png)

</ImageFrame>

### 4. 承認用に送信する

最後に、\[承認用に送信] ボタンをクリックして、アプリケーションを承認用に送信します。

<Message>

# 承認の完了

承認のリクエストが届くと、Boxパートナーチームは通知を受け取り、リクエストをできるだけ早く確認します。

質問がある場合は、[`integrate@box.com`][email]までメールをお送りいただくか、サポートチケットを送信してください。

</Message>

## アプリケーションを未公開にする

Once approved and published, an application can be unpublished from the same control panel. Navigate to the [Developer Console][devconsole] and select your application. Then, select the "Integrations" panel from the left-hand sidebar. The app can be unpublished from this page.

[app-center]: https://app.box.com/services

[devconsole]: https://cloud.app.box.com/developers/console

[email]: mailto:integrate@box.com

[bp]: https://support.box.com/hc/en-us/sections/360009473734-Box-Partner-Resources
