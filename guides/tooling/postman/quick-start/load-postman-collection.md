---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/postman
is_index: false
id: tooling/postman/quick-start/load-postman-collection
rank: 4
total_steps: 6
sibling_id: tooling/postman/quick-start
parent_id: tooling/postman/quick-start
next_page_id: tooling/postman/quick-start/make-api-call
previous_page_id: tooling/postman/quick-start/log-in-to-box
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/postman/quick-start/4-load-postman-collection.md
fullyTranslated: true
---
# コレクションのフォーク

<LoggedIn id="postman_credentials">

ログインしたら、前の手順でインストールした**Postmanアプリ**に**Box Postmanコレクション**をフォークできます。Postmanコレクションをフォークすると、Postman環境としてAPI資格情報も自動的に読み込まれます。

## コレクションと環境のフォーク

下のボタンをクリックすると、**Box Postmanコレクション**がPostmanアプリケーションにフォークされます。同時に、**アクセストークン**、**更新トークン**、**クライアントID**、および**クライアントシークレット**もPostman環境に読み込まれます。

<Trigger option="postman_collection_downloaded" value>

<Postman env="postman_credentials">

</Postman>

</Trigger>

Boxでは、Box Postmanコレクションをフォークすることをお勧めします。これにより、BoxがBox Postmanコレクションに変更を加えるたびに、そのコレクションを更新するかどうかが確認されます。このコレクションをコピーすることもできますが、重要な更新を見逃す可能性があります。

</LoggedIn>

<Choice option="postman_collection_downloaded" value color="none">

## コレクションの探索

上のボタンをクリックすると、Postmanアプリケーションにコレクションをフォークするよう求められます。インポートが完了すると、このコレクションはアプリ内で左側のサイドバーに表示されます。

<ImageFrame border center shadow width="600">

![PostmanでのBoxコレクション](./collection-in-postman.png)

</ImageFrame>

コレクションをクリックして開くと、170を超えるAPIエンドポイントを探索できます。

## まとめ

* PostmanコレクションをPostmanにフォークしました
* さらにBox Postman環境をPostmanに読み込みました

</Choice>

<Choice option="postman.app_type" unset color="none">

<LoggedIn reverse>

<Message danger>

# 前の手順が完了していません

前の手順を完了し、**Boxアプリ**を選択してログインしてください。

</Message>

</LoggedIn>

</Choice>

<Choice option="postman.app_type" value="create_new,use_existing" color="none">

<LoggedIn id="postman_credentials" reverse>

<Message danger>

# 前の手順が完了していません

前の手順を完了し、**Boxアプリ**を選択してログインしてください。

</Message>

</LoggedIn>

</Choice>

<Observe option="postman_collection_downloaded" value>

<Next>

コレクションのフォークが完了しました

</Next>

</Observe>
