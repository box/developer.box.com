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
# 統合

[Box統合][app-center]は、BoxユーザーがBoxと組み合わせて使用できるアプリケーションについて最初に確認できる場所です。アプリケーションが他の企業での使用にも適している場合は、統合にサービスを登録すると、新しいユーザーを見つけるのに役立ちます。統合では、ユーザーが見つけやすいように、アプリが \[おすすめ]、\[人気]、\[新着] セクションに分類されています。

![統合](./images/box-integrations.png)

## アプリの開発またはBoxパートナーへの参加

If you would more information on developing an application for the Box Integrations or becoming a Box Partner, visit our [Box Partner Resources][bp] guides on our community site.

## アプリを公開する

Use the following steps to publish an application in Box Integrations.

### 前提条件

アプリケーションは、以下の要件を満たす必要があります。

* アプリケーションは完成した状態で、実稼働環境での使用準備ができていること。
* 統合ではOAuth 2.0以外の認証方法がサポートされていないため、アプリケーションではOAuth 2.0認証を利用すること。
* 開発者として、[開発者コンソール][devconsole]でそのアプリケーションにアクセスできること。

### 手順

1. [開発者コンソール][devconsole]に移動して、送信するアプリケーションを選択します。

2. 上部のメニューで \[**公開**] タブを選択します。

   ![\[統合\] パネル](./images/publishing-app.png)

3. フォームで、アプリケーションのカテゴリ、簡単な説明と詳しい説明、スクリーンショット、アプリアイコンを指定します。

4. \[**プレビュー**] をクリックして、アプリケーションの掲載内容のプレビューを表示します。

5. 最後に、\[**承認用に送信**] ボタンをクリックして、アプリケーションを承認用に送信します。

<Message>

# 承認の完了

承認のリクエストが届くと、Boxパートナーチームは通知を受け取り、リクエストをできるだけ早く確認します。

質問がある場合は、[`integrate@box.com`][email]までメールをお送りいただくか、サポートチケットを送信してください。

</Message>

## アプリケーションを未公開にする

Once approved and published, an application can be unpublished from the same control panel. Navigate to the [Developer Console][devconsole] and select your application. Then, select the **Integrations** panel from the left-hand sidebar. The app can be unpublished from this page.

[app-center]: https://app.box.com/services

[devconsole]: https://cloud.app.box.com/developers/console

[email]: mailto:integrate@box.com

[bp]: https://support.box.com/hc/en-us/sections/360009473734-Box-Partner-Resources
