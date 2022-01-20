---
type: quick-start
hide_in_page_nav: true
related_guides:
  - authentication/oauth2
related_endpoints:
  - get-authorize
  - post-oauth2-token
category_id: tooling
subcategory_id: tooling/postman
is_index: false
id: tooling/postman/quick-start/log-in-to-box
rank: 3
total_steps: 6
sibling_id: tooling/postman/quick-start
parent_id: tooling/postman/quick-start
next_page_id: tooling/postman/quick-start/load-postman-collection
previous_page_id: tooling/postman/quick-start/configure-box-app
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/postman/quick-start/3-log-in-to-box.md
fullyTranslated: true
---
# Boxへのログイン

<Choice option="postman.app_type" value="create_new,use_existing" color="none">

この手順では、前の手順の**クライアントID**と**クライアントシークレット**を使用してログインし、ユーザー用に**アクセストークン**を作成します。

## ログインする理由

現時点では、以下の情報が提示されています。

<Store disabled inline id="postman_credentials.client_id">

クライアントID

</Store>

<Store disabled inline obscured id="postman_credentials.client_secret">

クライアントシークレット

</Store>

任意のプログラムやコードは、これらの**資格情報**を使用することで、**Box API**から認証を受けることができます。これは、作成した**Boxアプリ**を表しますが、**ユーザー**に関する情報をAPIに伝えることはありません。

ユーザー自身が認証を受けるには、ブラウザでBoxのログイン画面を開き、自分の**ユーザー**アカウントへのアクセスを**Boxアプリ**に承認する必要があります。

このフローの設定は難しい場合があるため、簡単に行えるように下のボタンを用意しました。

## Boxアプリへのログイン

<Trigger option="postman.login" value="clicked">

<LoginButton id="postman_credentials">

</LoginButton>

</Trigger>

<LoggedIn id="postman_credentials">

## ログインしています

ブラウザで[Boxの承認](e://get-authorize)画面が開かれ、そこで、アプリケーションに自分のユーザーアカウントへのアクセスを許可しました。アクセスを許可した後、ブラウザは`code`によりこのサイトにリダイレクトされました。

その後、この有効期間が短い`code`が有効期間が長い**アクセストークン**と**更新トークン**に[交換されました](e://post-oauth2-token)。これらのトークンは**ユーザー**を表します。

<Store disabled inline id="postman_credentials" field="name">

名前

</Store>

<Store disabled inline obscured id="postman_credentials" field="access_token">

アクセストークン

</Store>

<Store disabled inline obscured id="postman_credentials" field="refresh_token">

更新トークン

</Store>

<Message danger>

# セキュリティに関する注意

API資格情報は、ブラウザキャッシュに保存されています。このガイドで後から出てくる**リセット**ボタンをクリックして、この情報を消去することを強くお勧めします。

</Message>

</LoggedIn>

</Choice>

<Choice option="postman.app_type" unset color="none">

<Message danger>

# 前の手順が完了していません

前の手順を完了し、使用する**Boxアプリ**をセットアップしてください。

</Message>

</Choice>

<Choice option="postman.login" value="clicked" color="none">

## まとめ

* 独自の**Boxアプリ**またはあらかじめ設定されているアプリを使用して**Boxアカウント**にログインしました
* **Boxアプリ**にユーザーアカウントへのアクセスを許可しました
* このページでユーザーアカウントの**アクセストークン**と**更新トークン**を参照できるようになりました

</Choice>

<Observe option="postman.login" value="clicked">

<Next>

Boxへのログインが完了しました

</Next>

</Observe>
