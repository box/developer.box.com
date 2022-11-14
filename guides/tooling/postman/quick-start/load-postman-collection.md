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
# Fork a collection

<LoggedIn id="postman_credentials">

Now that you are logged in we can fork the **Box Postman Collection** into the **Postman App** that we installed previously. When we fork the Postman Collection we will also automatically load your API credentials as a Postman environment.

## Forking a collection and environment

By clicking the button below you will fork the **Box Postman Collection** into your Postman application. In the same click it will also load your **Access Token**, **Refresh Token**, **Client ID** and **Client Secret** into a Postman environment.

<Trigger option="postman_collection_downloaded" value>

<Postman env="postman_credentials">

</Postman>

</Trigger>

We recommend to fork the Box Postman Collection - you will be asked if you want to update the collection any time Box makes changes to it. You can also copy the collection, but you might miss important updates.

</LoggedIn>

<Choice option="postman_collection_downloaded" value color="none">

## コレクションの探索

When you clicked the button above it would have asked you to fork the collection into the Postman application. Once imported, the collection should appear within the app in the left-hand sidebar.

<ImageFrame border center shadow width="600">

![PostmanでのBoxコレクション](./collection-in-postman.png)

</ImageFrame>

コレクションをクリックして開くと、170を超えるAPIエンドポイントを探索できます。

## まとめ

* You forked the Postman collection into Postman
* さらにBox Postman環境をPostmanに読み込みました

</Choice>

<Choice option="postman.app_type" value="create_new,use_existing" color="none">

<LoggedIn reverse>

<Message danger>

# 前の手順が完了していません

前の手順を完了し、**Boxアプリ**を選択してログインしてください。

</Message>

</LoggedIn>

</Choice>

<Observe option="postman_collection_downloaded" value>

<Next>

I have forked the collection

</Next>

</Observe>
