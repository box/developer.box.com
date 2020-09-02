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
  https://github.com/box/developer.box.com/blob/default/content/guides/mobile/ios/quick-start/3-configure-box-app.md
---
# Boxアプリの設定

**Box iOS SDK**を使用してBox APIに対する認証済みAPI呼び出しを開始するには、**アクセストークン**が必要になります。有効なトークンを生成するには、新しい**Boxアプリ**を生成し、有効期間が短い開発者トークンを手動で生成するのが最も簡単な方法です。

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
2. \[**アプリの新規作成**]を選択します。
3. 作成するアプリケーションの種類として\[**カスタムアプリ**]を選択し、\[**次へ**]をクリックします。
4. 認証方式として\[**JWTを使用したOAuth 2.0**]を選択し、\[**次へ**]をクリックします。
5. Boxアプリに一意の名前を付け、\[**アプリの作成**]をクリックします。
6. \[**アプリの表示**]をクリックしてアプリの設定に移動します。
7. 必要に応じて、同じ画面の\[**アプリケーションスコープ**]セクションまでスクロールし、このアプリケーションに対して有効にする必要がある追加の権限を選択します。
8. ページ上部にある\[**変更を保存**]ボタンをクリックします。

</Choice>

<Choice option="ios.app_type" value="use_own" color="blue">

# 既存のJWT Boxアプリケーションを使用する

[開発者コンソール][devconsole]に、使用したい既存のJWTベースのBoxアプリケーションがある場合は、以下の手順に従います。

</Choice>

## 開発者トークンの生成

アプリケーションが使用可能になったら、開発者トークンを作成する必要があります。開発者トークンは、Box iOS SDKを認証してBox APIに対する呼び出しを開始するために使用できます。

1. [開発者コンソール][devconsole]に移動します。
2. 使用するアプリケーションを読み込みます。
3. 左のナビゲーションメニューで\[**構成**]をクリックします。
4. \[**開発者トークン**]で、\[**開発者トークンを生成**]ボタンをクリックします。
5. 次の手順でAPI呼び出しを行うためにトークンをコピーします。

## まとめ

* 新しいBoxアプリを作成したか、既存のBoxアプリ使用しています。
* 開発者トークンを生成してコピーしました。

<Observe option="ios.app_type" value="use_own,create_new_">

<Next>

開発者トークンを用意できました。

</Next>

</Observe>

[devconsole]: https://cloud.app.box.com/developers/console
