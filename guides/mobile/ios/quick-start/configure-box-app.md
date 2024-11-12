---
type: quick-start
hide_in_page_nav: true
category_id: mobile
subcategory_id: mobile/ios
is_index: false
id: mobile/ios/quick-start/configure-box-app
rank: 3
total_steps: 5
sibling_id: mobile/ios/quick-start
parent_id: mobile/ios/quick-start
next_page_id: mobile/ios/quick-start/make-api-call
previous_page_id: mobile/ios/quick-start/install-ios-sdk
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/mobile/ios/quick-start/3-configure-box-app.md
fullyTranslated: true
---
# Configure a Box Platform App

To start making authenticated API calls to the Box API with the **Box iOS SDK**, an **Access Token** will be needed. The simplest way to generate a valid token is to generate a new **Box Platform App** and manually generate a short lived developer token.

開発者トークンは、開発者コンソールのUIを介して生成されます。有効期間は1時間で、その後は手動で更新する必要があります。

## Boxアプリのセットアップ

<Grid columns="2">

<Choose option="ios.app_type" value="create_new" color="blue">

# 新しいBoxアプリを作成する

開発者トークンの生成に使用する新しいBox JWTアプリケーションを作成して構成します。

</Choose>

<Choose option="ios.app_type" value="use_own" color="red">

# 既存のアプリを使用する

Box開発者コンソールから既存のBox JWTアプリケーションのいずれかを使用します。

</Choose>

</Grid>

<Choice option="ios.app_type" value="create_new" color="blue">

# 新しいBoxアプリを作成する

開発者トークンの生成に使用できる新しいBoxアプリケーションを作成するには、以下の手順に従います。

1. [開発者コンソール][devconsole]に移動します。
2. Select **Create Platform App**
3. Select **Platform App** as the type of application to create, and click **Next**
4. 認証方法として \[**JWTを使用したOAuth 2.0**] を選択し、\[**次へ**] をクリックします。
5. Give your Box app a unique name and click **Create Platform App**
6. Go to the app's configuration by clicking **View Your Platform App**.
7. Optionally, scroll to the **Required Access Scopes** section of the same screen and select any additional permissions you want to enable for this application.
8. ページ上部にある \[**変更を保存**] ボタンをクリックします。

</Choice>

<Choice option="ios.app_type" value="use_own" color="blue">

# 既存のJWT Boxアプリケーションを使用する

[開発者コンソール][devconsole]に、使用したい既存のJWTベースのBoxアプリケーションがある場合は、以下の手順に従います。

</Choice>

## 開発者トークンの生成

アプリケーションが使用可能になったら、開発者トークンを作成する必要があります。開発者トークンは、Box iOS SDKを認証してBox APIに対する呼び出しを開始するために使用できます。

1. [開発者コンソール][devconsole]に移動します。
2. 使用するアプリケーションを読み込みます。
3. 左のナビゲーションメニューで \[**構成**] をクリックします。
4. \[**開発者トークン**] で、\[**開発者トークンを生成**] ボタンをクリックします。
5. 次の手順でAPIコールを行うためにトークンをコピーします。

## まとめ

* 新しいBoxアプリを作成、または既存のBoxアプリを使用しました。
* 開発者トークンを生成してコピーしました。

<Observe option="ios.app_type" value="use_own,create_new_">

<Next>

開発者トークンを用意できました

</Next>

</Observe>

[devconsole]: https://cloud.app.box.com/developers/console
