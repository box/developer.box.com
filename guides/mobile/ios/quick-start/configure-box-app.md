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
# Box Platformアプリの設定

**Box iOS SDK**を使用してBox APIに対する認証済みAPIコールを開始するには、**アクセストークン**が必要になります。有効なトークンを生成するには、新しい**Box Platformアプリ**を生成し、有効期間が短い開発者トークンを手動で生成するのが最も簡単な方法です。

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

1. \[[開発者コンソール][devconsole]] > \[**マイPlatformアプリ**] に移動します。
2. \[**Platformアプリの作成**] を選択します。
3. Select **Platform App** as the type of application to create, and click **Next**.
4. \[**アプリ名**] に加え、必要に応じてアプリの \[**説明**] および \[**目的**] を入力し、\[**次へ**] で確定します。
5. 認証方法として \[**ユーザー認証 (OAuth 2.0)**] を選択し、\[**アプリの作成**] をクリックします。
6. 必要に応じて、同じ画面の \[**アプリケーションスコープ**] セクションまでスクロールし、このアプリケーションに対して有効にする必要がある追加の権限を選択します。
7. ページ上部にある \[**変更を保存**] ボタンをクリックします。

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
