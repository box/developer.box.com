---
type: quick-start
hide_in_page_nav: true
category_id: cli
subcategory_id: cli/quick-start
is_index: false
id: cli/quick-start/create-oauth-app
rank: 1
total_steps: 6
sibling_id: cli/quick-start
parent_id: cli/quick-start
next_page_id: cli/quick-start/install-and-configure
previous_page_id: cli/quick-start
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/quick-start/1-create-oauth-app.md
fullyTranslated: true
---
# Boxアプリの設定

**Box CLI**を使用するには、**Boxアプリ**を作成する必要があります。Boxアプリは、APIコールの実行に使用できるアプリケーションです。Box CLIを使用する際は、独自のBoxアプリを設定するか、あらかじめ設定されているBoxアプリを使用するかを選択できます。独自のBoxアプリを設定した場合の主な利点として、1時間ごとにログインする必要はなくなりますが、設定にいくつか追加手順が必要になります。

## 使用するBoxアプリの選択

<Grid columns="2">

<Choose option="cli.app_type" value="create_new" color="blue">

# 新しいBoxアプリを作成する

ここからBoxアプリを設定できます。数回クリックするだけで準備できます。

</Choose>

<Choose option="cli.app_type" value="use_existing" color="red">

# 既存のBoxアプリを使用する

使用したいBoxアプリをすでに作成済みの場合は、そのアプリケーションの資格情報を使用できます。

</Choose>

</Grid>

<Choice option="cli.app_type" value="create_new,clicked" color="blue">

# Boxアプリの作成

独自の**Boxアプリ**を使用するには、**Box開発者コンソール**で新しいBoxアプリを作成する必要があります。下のボタンをクリックすると、アプリが設定されます。最後に、**クライアントID**と**クライアントシークレット**を取得できます。

<Trigger option="cli.app_type" value="clicked">

<AppButton id="cli" name="Box CLI" scopes="root_readonly,root_readwrite,manage_managed_users,manage_app_users,manage_groups,manage_webhook,manage_enterprise_properties,manage_data_retention,item_execute_integration" can_act_as_user authentication_type="auth_code_grant" redirect_url="http://localhost:3000/callback" cors_origins>

アプリの作成

</AppButton>

</Trigger>

<Observe option="cli.app_type" value="clicked">

これらの資格情報は、次の手順でBox CLIの認証に使用します。

</Observe>

</Choice>

<Choice option="cli.app_type" value="use_existing" color="red">

# 既存のBoxアプリを使用する

事前にBoxアプリをすでに作成済みの場合は、そのアプリも使用できます。そのアプリを使用するには、いくつかの設定が必要です。

1. [開発者コンソール][devconsole]に移動します。
2. アプリケーションを選択します。
3. アプリケーションの \[**構成**] セクションに移動します。
4. アプリケーションが認証方法として**標準OAuth 2.0**を使用することを確認します。
5. \[**OAuth 2.0リダイレクトURI**] の設定まで下にスクロールし、\[**リダイレクトURI**] に値`http://localhost:3000/callback`を設定します。
6. \[**アプリケーションスコープ**] セクションまでスクロールし、目的の[権限][scopes]を選択します。**アプリケーションには、****次のスコープの1つ以上が必要です:** Boxに格納されているすべてのファイルとフォルダの読み取り、Boxに格納されているすべてのファイルとフォルダの読み取りと書き込み
7. ページ上部にある \[**変更を保存**] ボタンをクリックします。

次に、クライアントIDとクライアントシークレットの値を以下の2つのフィールドにコピーします。

<Store id="cli_credentials.client_id" placeholder="zECq2EkYBjZ..." pattern="\w{32}">

クライアントID

</Store>

<Store id="cli_credentials.client_secret" placeholder="913td9hr6jo..." pattern="\w{32}">

クライアントシークレット

</Store>

これらの資格情報は、次の手順でBox CLIの認証に使用します。

</Choice>

<Choice option="cli.app_type" value="create_new,use_existing,clicked" color="none">

<Message danger>

# セキュリティに関する注意

API資格情報は、ブラウザキャッシュに保存されています。このガイドで後から出てくる**リセット**ボタンをクリックして、この情報を消去することを強くお勧めします。

</Message>

</Choice>

<Choice option="cli.app_type" value="create_new,use_existing,clicked" color="none">

## まとめ

* 新しい**Boxアプリ**の作成を選択しました。
  * Developerアカウントにサインアップ (必要な場合)
  * **OAuth 2.0**認証を使用する**カスタムアプリ**を作成
  * アプリケーションの**リダイレクトURL**を設定
* または、**既存のBoxアプリ**の使用を選択しました。

</Choice>

<Observe option="cli.app_type" value="create_new,use_existing,clicked">

<Next>

Boxアプリの設定が完了しました

</Next>

</Observe>

[devconsole]: https://cloud.app.box.com/developers/console

[signup]: https://account.box.com/signup/n/developer

[scopes]: https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/
