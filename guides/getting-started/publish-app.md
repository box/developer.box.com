---
rank: 3
category_id: getting-started
subcategory_id: null
is_index: false
id: getting-started/publish-app
type: guide
total_steps: 2
sibling_id: getting-started
parent_id: getting-started
next_page_id: ''
previous_page_id: getting-started/first-application
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/publish-app.md
fullyTranslated: true
---
# アプリケーションの公開

アプリの構成とテストが完了したら、[Box App Center][app-center]でアプリを公開できます。公開すると、お客様がアプリケーションを見つけて、自分のBoxアカウントに追加できるようになります。

<Message type="warning">

公開オプションが組み込まれるのは、OAuth 2.0認証を使用するアプリケーションのみです。他の種類のユーザー認証を使用することもできますが、そうしたアプリはApp Centerではマーケティングリストとしてのみ機能し、お客様は開発元のウェブサイトにリダイレクトされます。

</Message>

アプリを公開するには、以下の手順に従います。

1. **開発者コンソール**を開きます。
2. 公開するアプリケーションを選択します。
3. \[**App Center**] タブに移動し、アプリを送信します。

そうすると、アプリケーションのマーケティングセクションにアクセスできるようになります。そこで、アプリに関する以下の情報を追加する必要があります。

* \[**一般的なアプリ情報**] - App Centerで見つけやすくするために、アプリケーションに適したカテゴリとプラットフォームを選択します。
* \[**アプリの説明**] - お客様の役に立つと思われるアプリケーションに関するすべての情報を必ず含めます。
  * \[**簡単な説明**] は、アプリのロゴの横にアプリ名と一緒に表示されます。
  * \[**詳しい説明**] は、ユーザーがアプリを選択してその詳細を表示すると表示される内容です。詳しい説明へのクリック可能なリンクを追加できます。

<Message type="notice">

スクリーンショットとロゴの具体的なガイドラインは、開発者コンソールに用意されています。

</Message>

アプリの詳細を指定し終わったら、承認を得るためにアプリを送信します。Boxがアプリケーションをレビューし、App Centerで公開します。

ご不明な点や問題がありましたら、パートナーチーム ([integrate@box.com](mailto:integrate@box.com)) までお問い合わせください。

[app-center]: https://cloud.app.box.com/app-center
