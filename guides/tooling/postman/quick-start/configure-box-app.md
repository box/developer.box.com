---
type: quick-start
hide_in_page_nav: true
related_guides:
  - applications/custom-apps
category_id: tooling
subcategory_id: tooling/postman
is_index: false
id: tooling/postman/quick-start/configure-box-app
rank: 2
total_steps: 6
sibling_id: tooling/postman/quick-start
parent_id: tooling/postman/quick-start
next_page_id: tooling/postman/quick-start/log-in-to-box
previous_page_id: tooling/postman/quick-start/install-postman
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/postman/quick-start/2-configure-box-app.md
---
<!-- alex disable postman-postwoman -->

# Boxアプリの設定

**Postmanコレクション**を使用するために、Postmanアプリケーションは**アクセストークン**を使用してBox APIから認証を受ける必要があります。アクセストークンを取得するには、**Boxアプリ**を使用してBoxにログインする方法が最も簡単です。

**Boxアプリ**は、API呼び出しの実行に使用できるアプリケーションです。**Postmanコレクション**を使用する際は、独自のBoxアプリを設定するか、あらかじめ設定されているBoxアプリを使用するかを選択できます。独自のBoxアプリを設定した場合の主な利点は、1時間ごとにログインする必要がなくなることです。ただし、設定にいくつか追加手順が必要になります。

## 使用するBoxアプリの選択

<Grid columns="2">

<Choose option="postman.app_type" value="use_own" color="blue">

# 独自のBoxアプリを使用する

この方法を使用すると、**60日間に**1回以上アプリを使用すれば、Postmanでは**無期限に**BoxへのAPI呼び出しを行うことができます。

この方法では、初期設定の手間が少し増えますが、Postmanがいつまでも**アクセストークン**を最新状態に保つことができるため、メンテナンスの手間は少なくなります。

</Choose>

<Choose option="postman.app_type" value="use_box" color="red">

# あらかじめ設定されているBoxアプリを使用する

この方法を使用すると、Postmanは、BoxへのAPI呼び出しを実行できるようになりますが、**1時間**が経過すると、このガイドを再度実行する必要があります。

この方法では、初期設定は少なくて済みますが、**アクセストークン**を自動的に更新することはできません。1時間ごとにこのガイドに戻ってアクセストークンを更新する必要があります。

</Choose>

</Grid>

<Choice option="postman.app_type" value="use_own" color="blue">

# Boxアプリの作成

独自の**Boxアプリ**を使用するには、**Box開発者コンソール**で新しいBoxアプリを作成する必要があります。

Boxアカウントを持っていない場合は、テスト用の[無料のDeveloperアカウント][signup]にサインアップすることができます。

1. [開発者コンソール][devconsole]に移動します。
2. \[**アプリの新規作成**]を選択します。
3. 作成するアプリケーションの種類として\[**カスタムアプリ**]を選択し、\[**次へ**]をクリックします。
4. 認証方法として\[**標準OAuth 2.0**]を選択し、\[**次へ**]をクリックします。
5. Boxアプリに一意の名前を付け、\[**アプリの作成**]をクリックします。
6. \[**アプリの表示**]をクリックしてアプリの設定に移動します。
7. \[**OAuth 2.0リダイレクトURI**]の設定まで下にスクロールし、\[**リダイレクトURL**]に値`https://developer.box.com/auth/callback`を設定します。
8. 必要に応じて、同じ画面の\[**アプリケーションスコープ**]セクションまでスクロールし、このアプリケーションに対して有効にする必要がある追加の権限を選択します。
9. ページ上部にある\[**変更を保存**]ボタンをクリックします。

</Choice>

<Choice option="postman.app_type" value="use_own" color="blue">

# API資格情報のコピー

Boxアプリを作成したら、**Boxアプリ**の\[**OAuth 2.0資格情報**]セクションまで下にスクロールし、\[**クライアントID**]と\[**クライアント機密コード**]をコピーして下のフィールドに貼り付けます。

<Store id="postman_credentials.client_id" placeholder="zECq2EkYBjZ..." pattern="\w{32}">

クライアントID

</Store>

<Store id="postman_credentials.client_secret" placeholder="913td9hr6jo..." pattern="\w{32}">

クライアント機密コード

</Store>

これらの資格情報は、次の手順でアプリケーションの認証に使用します。

</Choice>

<Choice option="postman.app_type" value="use_own" color="none">

<Message danger>

# セキュリティに関する注意

API資格情報は、ブラウザキャッシュに保存されています。このガイドで後から出てくる**リセット**ボタンをクリックして、この情報を消去することを強くお勧めします。

</Message>

</Choice>

<Choice option="postman.app_type" value="use_box,use_own" color="none">

## まとめ

* 独自の**Boxアプリ**の使用を選択し、以下の操作を行いました。
  * Developerアカウントにサインアップ(必要な場合)
  * 開発者コンソールにアクセス
  * **OAuth 2.0**認証を使用する**カスタムアプリ**を作成
  * アプリケーションの**リダイレクトURL**を設定
  * **クライアントID**と**クライアント機密コード**をこのページにコピー
* または、**あらかじめ設定されているBoxアプリ**の使用を選択しました。

</Choice>

<Observe option="postman.app_type" value="use_box,use_own">

<Next>

Boxアプリの設定が完了しました

</Next>

</Observe>

[devconsole]: https://account.box.com/developers/services

[signup]: https://account.box.com/signup/n/developer
