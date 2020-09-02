---
type: quick-start
hide_in_page_nav: true
category_id: sso-identities-and-app-users
subcategory_id: sso-identities-and-app-users/connect-okta-to-app-users
is_index: false
id: sso-identities-and-app-users/connect-okta-to-app-users/configure-box
rank: 3
total_steps: 6
sibling_id: sso-identities-and-app-users/connect-okta-to-app-users
parent_id: sso-identities-and-app-users/connect-okta-to-app-users
next_page_id: sso-identities-and-app-users/connect-okta-to-app-users/logging-into-app
previous_page_id: sso-identities-and-app-users/connect-okta-to-app-users/configure-okta
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/sso-identities-and-app-users/connect-okta-to-app-users/3-configure-box.md
---
# Boxの構成

Oktaでのログインエクスペリエンスを作成したので、次は、Oktaのユーザーアカウントに関連付けられているユーザーをBox APIを使用して検索、作成できるBoxアプリケーションを作成する必要があります。

## Boxアプリのセットアップ

<Grid columns="2">

<Choose option="box.app_type" value="create_new" color="blue">

# 新しいBoxアプリを作成する

新しいBox JWTアプリケーションを作成および構成して、空のユーザーリストから開始します。

</Choose>

<Choose option="box.app_type" value="use_own" color="blue">

# 承認済みの既存のアプリを使用する

Box開発者コンソールから、管理者が承認した既存のBox JWTアプリケーションのいずれかを使用します。

</Choose>

</Grid>

<Choice option="box.app_type" value="create_new" color="none">

# 新しいBoxアプリを作成する

Box APIの呼び出しに使用できる新しいBoxアプリケーションを作成するには、以下の手順に従います。

1. [開発者コンソール][devconsole]に移動します。
2. \[**アプリの新規作成**]を選択します。
3. 作成するアプリケーションの種類として\[**カスタムアプリ**]を選択し、\[**次へ**]をクリックします。
4. 認証方式として\[**JWTを使用したOAuth 2.0**]を選択し、\[**次へ**]をクリックします。
5. Boxアプリに一意の名前を付け、\[**アプリの作成**]をクリックします。
6. \[**アプリの表示**]をクリックしてアプリの設定に移動します。
7. 同じ画面の\[**アプリケーションスコープ**]セクションまでスクロールし、少なくとも以下のスコープが有効になっていることを確認します。

* Boxに格納されているすべてのファイルとフォルダの読み取りと書き込み
* ユーザーを管理

1. \[**高度な機能**]で、ユーザーとして操作を実行するオプションとユーザーアクセストークンを生成するオプションの両方が有効になっていることを確認します。
2. ページ上部にある\[**変更を保存**]ボタンをクリックします。

<Message type="warning">

アプリケーションの作成後も、Box APIの呼び出しを行うには会社の管理者による承認が必要です。

</Message>

アプリケーションを社内で承認してもらうには、[このガイド](g://applications/custom-apps/app-approval/)に従ってください。

</Choice>

<Choice option="box.app_type" value="use_own" color="none">

# 既存のJWT Boxアプリケーションを使用する

[開発者コンソール][devconsole]に、使用したい既存のJWTベースのBoxアプリケーションがある場合は、アプリケーションの\[**構成**]セクションで以下のオプションが設定されていることを確認してください。

* \[認証方法]: \[JWTを使用したOAuth 2.0 (サーバー認証)]に設定します。
* \[アプリケーションスコープ]: 少なくとも以下のスコープを設定します。
  * Boxに格納されているすべてのファイルとフォルダの読み取りと書き込み
  * ユーザーを管理
* \[高度な機能]: ユーザーとして操作を実行するオプションとユーザーアクセストークンを生成するオプションの両方を有効にします。

</Choice>

## 必要なデータのダウンロード

このチュートリアルで使用されているBox SDKの使用を開始するには、アプリケーションの\[**構成**]ページにあるアプリケーション構成ファイルが必要です。この中には、アプリケーションを検証して、Box SDKを使用してAPIリクエストを開始するために必要なすべての情報が含まれます。

\[\<C1>構成\</c1>]ページの\[**公開キーの追加と管理**]セクションで、\[**公開/秘密キーペアを生成**]をクリックします。これにより、アプリケーションの構成ファイルをダウンロードする前に2FAが行われます。

そのファイルを`config.json`として、アプリケーションがアクセス可能な場所に保存します。

## まとめ

* 会社の管理者によって承認されている、新しいBoxアプリを作成しました。または、会社の管理者によって承認されている既存のBoxアプリを使用しています。
* アプリケーション構成ファイルをダウンロードして、アプリケーションがアクセス可能な場所に保存しました。

<Observe option="box.app_type" value="use_own,create_new">

<Next>

アプリケーション構成ファイルをダウンロードしました

</Next>

</Observe>

[devconsole]: https://cloud.app.box.com/developers/console
