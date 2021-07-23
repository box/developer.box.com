---
type: quick-start
hide_step_number: true
category_id: mobile
subcategory_id: mobile/ios
is_index: false
id: mobile/ios/quick-start/next-steps
rank: 5
total_steps: 5
sibling_id: mobile/ios/quick-start
parent_id: mobile/ios/quick-start
next_page_id: ''
previous_page_id: mobile/ios/quick-start/make-api-call
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/mobile/ios/quick-start/5-next-steps.md
fullyTranslated: true
---
# 次の手順

このクイックスタートガイドが完了しました。ここまで、以下の手順を実行しました。

1. Xcodeで[新しいiOSアプリを作成](g://mobile/ios/quick-start/create-ios-app/)しました。
2. プロジェクトに[iOS SDKをインストール](g://mobile/ios/quick-start/install-ios-sdk/)しました。
3. iOS SDKからBox APIにアクセスできるように[Boxアプリを設定](g://mobile/ios/quick-start/configure-box-app/)しました。
4. iOS SDKを使用してBox APIに対する[API呼び出しを実行](g://mobile/ios/quick-start/make-api-call/)しました。

## 次に行うべきこと

アプリケーションで次の手順を行うには、次のリソースをお勧めします。

* [トークンのダウンスコープ](g://authentication/access-tokens/downscope/): このクイックスタートガイドでは、開発者トークンを使用して最初の呼び出しを実行しました。スケーラブルなソリューションを実装するには、その実装に代わるダウンスコープされたトークンを生成するサーバー側ソリューションが必要です。
* [公式のJWTサンプルアプリケーション][sample-jwt]: iOS SDKにバンドルされているこのサンプルアプリケーションにより、適切に構造化されたBox JWTアプリケーションをすぐに利用開始できます。ユーザーのログインは必要ありません。
* [公式のOAuth 2サンプルアプリケーション][sample-oauth]: iOS SDKにバンドルされているこのサンプルアプリケーションにより、適切に構造化されたBox OAuth 2アプリケーションをすぐに利用開始できます。ユーザーのログインは不要です。

[sample-jwt]: https://github.com/box/box-ios-sdk/tree/master/SampleApps/JWTSampleApp

[sample-oauth]: https://github.com/box/box-ios-sdk/tree/master/SampleApps/OAuth2SampleApp
