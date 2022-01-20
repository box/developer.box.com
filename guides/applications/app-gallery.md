---
rank: 50
related_endpoints: []
related_guides:
  - authentication/oauth2/oauth2-setup
  - authentication/oauth2
required_guides: []
related_resources: []
alias_paths:
  - /docs/publishing-your-application
category_id: applications
subcategory_id: null
is_index: false
id: applications/app-gallery
type: guide
total_steps: 4
sibling_id: applications
parent_id: applications
next_page_id: ''
previous_page_id: applications/limited-access-apps
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/app-gallery.md
fullyTranslated: true
---
# アプリギャラリー

[Boxアプリギャラリー][app-gallery]は、BoxユーザーがBoxと組み合わせて使用できるアプリケーションについて最初に調べる場所です。アプリケーションが他の会社での使用にも適している場合は、アプリギャラリーにサービスを登録すると、新しいユーザーを見つけるのに役立ちます。

## アプリを公開する

[アプリギャラリー][app-gallery]でアプリケーションを公開するには、以下の手順に従います。

### 前提条件

アプリケーションは、以下の要件を満たす必要があります。

* アプリケーションは完成した状態で、実稼働環境での使用準備ができていること。
* アプリギャラリーではOAuth 2.0以外の認証方法がサポートされていないため、アプリケーションではOAuth 2.0認証を利用すること。
* 開発者として、[開発者コンソール][devconsole]でそのアプリケーションにアクセスできること。

### 1. 開発者コンソールにログインする

[開発者コンソール][devconsole]に移動して、ギャラリーに送信するアプリケーションを選択します。

### 2. フォームに入力する

左側のサイドバーから \[アプリギャラリー] パネルを選択します。

<ImageFrame center shadow border width="200">

![\[アプリギャラリー\] パネル](./images/app-sidebar.png)

</ImageFrame>

\[アプリを送信] ボタンをクリックします。

<ImageFrame center border shadow width="400">

![\[アプリを送信\] ボタン](./images/submit-app.png)

</ImageFrame>

次に、フォームで、アプリケーションのカテゴリ、短い説明と長い説明、スクリーンショット、アプリのアイコンを指定します。

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

承認されて公開されたアプリケーションは、同じコントロールパネルから未公開にすることができます。[開発者コンソール][devconsole]に移動して、アプリケーションを選択した後、左側のサイドバーから \[アプリギャラリー] パネルを選択します。このページからアプリを未公開にすることができます。

[app-gallery]: https://app.box.com/services

[devconsole]: https://account.box.com/developers/services

[email]: mailto:integrate@box.com
