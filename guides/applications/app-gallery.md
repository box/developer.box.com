---
rank: 2
related_endpoints: []
related_guides:
  - applications/custom-apps/oauth2-setup
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
total_steps: 2
sibling_id: applications
parent_id: applications
next_page_id: applications
previous_page_id: applications/select
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/applications/app-gallery.md
---
# アプリギャラリー

[Boxアプリギャラリー][app-gallery]は、BoxユーザーがBoxと組み合わせて使用できるアプリケーションについて最初に調べる場所です。アプリケーションが他の会社での使用にも適している場合は、アプリギャラリーにサービスを登録すると、新しいユーザーを見つけるのに役立ちます。

## アプリの公開

[アプリギャラリー][app-gallery]でアプリケーションを公開するには、以下の手順に従います。

### 前提条件

アプリケーションを公開するには、以下の要件を満たす必要があります。

* アプリケーションは完成した状態で、実稼働環境での使用準備ができている必要があります。
* アプリギャラリーでは、JWTまたはアプリトークンでの認証がサポートされていないため、アプリケーションはOAuth 2.0認証を使用する必要があります。
* [開発者コンソール][devconsole]でアプリケーションにアクセスできる開発者である必要があります。

### 1. 開発者コンソールにログインする

[開発者コンソール][devconsole]に移動して、ギャラリーに送信するアプリケーションを選択します。

### 2. フォームに入力する

左側のサイドバーから\[アプリギャラリー]パネルを選択します。

<ImageFrame center shadow border width="200">

![\[アプリギャラリー\]パネル](./images/app-sidebar.png)

</ImageFrame>

\[アプリを送信]ボタンをクリックします。

<ImageFrame center border shadow width="400">

![\[アプリを送信\]ボタン](./images/submit-app.png)

</ImageFrame>

次に、フォームにアプリケーションのカテゴリ、短い説明と長い説明、いくつかのスクリーンショット、アプリのアイコンを入力します。

### 3. 掲載内容をプレビューする

\[プレビュー]ボタンを選択して、アプリケーションの掲載内容のプレビューを表示します。

<ImageFrame center border shadow>

![プレビューと送信](./images/submit-and-approve.png)

</ImageFrame>

### 4. 承認用に送信する

最後に、\[承認用に送信]ボタンをクリックして、アプリケーションを承認用に送信します。

<Message>

# 承認の完了

承認が送信されたら、Boxのパートナーチームにリクエストに関する通知が届きます。パートナーチームはリクエストのフォローアップを行い、必要に応じてテスト手順の手配をします。同様に、パートナーチームは、アプリケーションがアプリギャラリーで公開された場合にもサポートします。

質問がある場合は、[`integrate@box.com`][email]までメールをお送りいただくか、[フォーラム][forum]でご質問ください。

</Message>

## アプリの非公開

承認されて公開されたアプリケーションは、同じコントロールパネルから非公開にすることができます。[開発者コンソール][devconsole]に移動して、アプリケーションを選択した後、左側のサイドバーから \[アプリギャラリー] パネルを選択します。このページからアプリを非公開にすることができます。

[app-gallery]: https://app.box.com/services

[devconsole]: https://account.box.com/developers/services

[forum]: https://community.box.com/t5/Developer-Forum/bd-p/DeveloperForum

[email]: mailto:integrate@box.com
