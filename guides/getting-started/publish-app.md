---
rank: 3
category_id: getting-started
subcategory_id: null
is_index: false
id: getting-started/publish-app
type: guide
total_steps: 3
sibling_id: getting-started
parent_id: getting-started
next_page_id: getting-started/sandbox
previous_page_id: getting-started/first-application
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/publish-app.md
fullyTranslated: true
---
# アプリの公開

Platformアプリの構成とテストが完了したら、[Box統合][integrations]でアプリを公開できます。公開すると、お客様がアプリを見つけて、自分のBoxアカウントに追加できるようになります。

<Message type="warning">

公開オプションが組み込まれるのは、OAuth 2.0認証を使用するアプリのみです。統合に別の種類の認証を使用する場合も、\[**統合**] でマーケティングリストとして機能し、お客様を開発元のウェブサイトにリダイレクトするOAuth 2.0のPlatformアプリを作成して公開できます。

</Message>

Platformアプリを公開するには、以下の手順に従います。

1. **開発者コンソール**を開きます。

2. 公開するPlatformアプリを選択します。

3. \[**公開**] タブに移動します。

4. 送信チェックリストをひととおり読み、アプリがすべての要件を満たしているかどうかを確認するチェックボックスをオンにします。

5. 次の手順として、アプリのマーケティングセクションで、アプリに関する以下の情報を追加する必要があります。

   * \[**一般情報**] - 統合で見つけやすくするために、アプリに適したカテゴリとプラットフォームを選択します。
   * \[**説明**] - お客様の役に立つと思われる、アプリに関するすべての情報を必ず含めます。
     * \[**簡単な説明**] は、アプリのロゴの横にアプリ名と一緒に表示されます。
     * \[**詳しい説明**] は、ユーザーがアプリを選択してその詳細を表示すると表示される内容です。詳しい説明へのクリック可能なリンクを追加できます。
   * \[**スクリーンショット**] および \[**アイコン**] - ユーザーがアプリの外観やBoxとの統合方法を確認できるようにスクリーンショットを指定します。アイコンは、統合のリストでアプリを表すために必要になります。
   * \[**サポートリソース**] - ユーザーがアプリを操作するのに役立つリンクと補足情報のリスト。

6. アプリを送信する前に、アプリをプレビューして、必要な情報がすべて含まれているかどうかを確認します。

7. 承認を得るためにアプリを送信します。Boxがアプリをレビューし、\[**統合**] で公開します。

ご不明な点や問題がある場合は、**パートナー**チーム ([`integrate@box.com`][email]) まで英語でお問い合わせください。

[integrations]: https://cloud.app.box.com/integrations

[email]: mailto:integrate@box.com
