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
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/postman/quick-start/2-configure-box-app.md
fullyTranslated: true
---
# Boxアプリの設定

**Postmanコレクション**を使用するために、Postmanアプリケーションは**アクセストークン**を使用してBox APIから認証を受ける必要があります。アクセストークンを取得するには、**Boxアプリ**を使用してBoxにログインする方法が最も簡単です。

**Boxアプリ**は、API呼び出しの実行に使用できるアプリケーションです。**Postmanコレクション**を使用する際は、独自のBoxアプリを設定するか、あらかじめ設定されているBoxアプリを使用するかを選択できます。独自のBoxアプリを設定した場合の主な利点は、1時間ごとにログインする必要がなくなることです。ただし、設定にいくつか追加手順が必要になります。

## 使用するBoxアプリの選択

<Grid columns="2">

<Choose option="postman.app_type" value="create_new" color="blue">

# 新しいBoxアプリを作成する

ここからBoxアプリをセットアップできます。数回クリックするだけで準備できます。

</Choose>

<Choose option="postman.app_type" value="use_existing" color="red">

# 既存のアプリを使用する

使用したいBoxアプリをすでに作成済みの場合は、そのアプリケーションの資格情報を使用できます。

</Choose>

</Grid>

<Choice option="postman.app_type" value="create_new" color="blue">

# Boxアプリの作成

独自の**Boxアプリ**を使用するには、**Box開発者コンソール**で新しいBoxアプリを作成する必要があります。下のボタンをクリックすると、アプリがセットアップされます。最後に、**クライアントID**と**クライアントシークレット**を取得できます。

<Trigger option="postman.login_button" value="clicked">

<AppButton id="postman" name="Postman" scopes="root_readonly,root_readwrite,manage_managed_users,manage_groups,manage_webhook,manage_enterprise_properties" can_act_as_user authentication_type="auth_code_grant" redirect_url="/auth/callback" cors_origins>

アプリの作成

</AppButton>

</Trigger>

<Observe option="postman.login_button" value="clicked">

これらの資格情報は、次の手順でアプリケーションの認証に使用します。

</Observe>

</Choice>

<Choice option="postman.app_type" value="use_existing" color="red">

# 既存のアプリを使用する

事前にBoxアプリをすでに作成済みの場合は、そのアプリも使用できます。そのアプリを使用するには、いくつかの設定が必要です。

1. [開発者コンソール][devconsole]に移動します。
2. アプリケーションを選択します。
3. アプリの構成セクションに移動します。
4. アプリケーションが認証方式として**標準OAuth 2.0**を使用することを確認します。
5. \[**OAuth 2.0リダイレクトURI**] の設定まで下にスクロールし、\[**リダイレクトURL**] に値`https://developer.box.com/auth/callback`を設定します。
6. \[**アプリケーションスコープ**] セクションまでスクロールし、目的の[権限][scopes]を選択します。**アプリケーションには、****次のスコープの1つ以上が必要です。**このスコープとは、ユーザーの管理、Boxに格納されているすべてのファイルとフォルダの読み取り、Boxに格納されているすべてのファイルとフォルダの読み取りと書き込みです。
7. ページ上部にある \[**変更を保存**] ボタンをクリックします。

次に、クライアントIDとクライアントシークレットの値を以下の2つのフィールドにコピーします。

<Store id="postman_credentials.client_id" placeholder="zECq2EkYBjZ..." pattern="\w{32}">

クライアントID

</Store>

<Store id="postman_credentials.client_secret" placeholder="913td9hr6jo..." pattern="\w{32}">

クライアントシークレット

</Store>

これらの資格情報は、次の手順でアプリケーションの認証に使用します。

</Choice>

<Choice option="postman.app_type" value="create_new,use_existing" color="none">

<Message danger>

# セキュリティに関する注意

API資格情報は、ブラウザキャッシュに保存されています。このガイドで後から出てくる**リセット**ボタンをクリックして、この情報を消去することを強くお勧めします。

</Message>

</Choice>

<Choice option="postman.app_type" value="create_new,use_existing" color="none">

## まとめ

* 新しい**Boxアプリ**の作成を選択しました。
  * Developerアカウントにサインアップ (必要な場合)
  * **OAuth 2.0**認証を使用する**カスタムアプリ**を作成
  * アプリケーションの**リダイレクトURL**を設定
* または、**既存のBoxアプリ**の使用を選択しました。

</Choice>

<Observe option="postman.app_type" value="create_new,use_existing">

<Next>

Boxアプリの設定が完了しました

</Next>

</Observe>

[devconsole]: https://account.box.com/developers/services

[signup]: https://account.box.com/signup/n/developer

[scopes]: https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/
