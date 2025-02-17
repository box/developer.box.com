---
rank: 2
related_guides:
  - api-calls
category_id: getting-started
subcategory_id: null
is_index: false
id: getting-started/first-application
type: guide
total_steps: 2
sibling_id: getting-started
parent_id: getting-started
next_page_id: getting-started/publish-app
previous_page_id: getting-started
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/first-application.md
fullyTranslated: true
---
# 最初のアプリケーションの作成

開発者用エンタープライズを設定したら、アプリケーションの作成を開始できます。

開発者用エンタープライズにログインしたら \[[開発者コンソール][console]] ボタンをクリックします。これが最初のアプリケーションである場合は、利用開始を促すメッセージが表示されます。

## アプリケーションの種類の選択

The first step is to select the application type you want to create. In this guide we use the **Platform App** option, as most of our partners use this type for their integrations.

## 認証方法の選択

After you choose the **Platform App**, you need to [select an authentication method][auth] that your app will use. In this guide we use the [**User Authentication (OAuth 2.0)**][oauth2] option, as most of our partners use this type for their integrations.

## アプリの命名

アプリの名前を選択します。名前は後から変更でき、アプリを公開するまで他の人の目に触れません。アプリの名前はアプリを公開すると管理者やお客様に表示されるため、わかりやすい名前を選択することをお勧めします。

\[**アプリの作成**] ボタンをクリックしてアプリの作成を完了します。次に、アプリケーションの設定を構成します。

## 一般設定

最も基本的な設定から始めます。\[**一般設定**] タブを開き、以下のフィールドでチェックボックスをオンにしたり、入力したりします。

* \[**アプリ名**] - アプリ作成時に設定する名前。ここで必要に応じて変更できます。
* \[**連絡先メール**] - デフォルトでアプリケーションの開発者のアドレスに設定されます。アプリを公開すると、[統合][integrations]でアプリを表示したBoxユーザーにこのアドレスが表示されることに注意してください。統合に問題があった場合にユーザーがサポートに連絡できるよう、サポートのメールアドレスに変更することをお勧めします。
* \[**コラボレータ**] - この統合の作成に取り組むことができる他の開発者を追加します。追加された開発者は、設定を調整する必要があるときに開発者インターフェースにアクセスできるようになります。

<Message type="notice">

ここに追加する開発者はすでにBoxユーザーである必要があります。Boxアカウントを持っていない場合は、開発者用エンタープライズで[アカウントを作成][add-users]できます。

</Message>

## 詳細設定

\[**構成**] タブに移動します。ここでは、アプリの詳細の指定、開発者トークンの生成、OAuth 2.0資格情報の確認、OAuth 2.0リダイレクトURIの追加と編集、アプリケーションスコープの選択、アプリの高度な機能の設定、CORSドメインの追加を行うことができます。

その他のタブでは、Webhookやウェブアプリ統合を作成したり、Enterpriseへのアクセスを有効化するためにアプリを送信したり、[Box統合][integrations]にアプリを送信したり、このアプリケーションのアクティビティを確認できるレポートを生成したりすることができます。

## アプリのテスト

APIコールを行ってアプリをテストし、Boxでのレスポンス形式を確認できるようになりました。

現在の開発者アカウントに対して認証された[開発者トークン][dev-token]を使用します。

<Message type="warning">

このトークンの有効期限は、生成されてから1時間です。

</Message>

[Postmanコレクション][postman-collection]から始めて、特定のコールを確認し、返されるレスポンスを確かめます。APIコールの例については、[APIリファレンスドキュメント][api-ref]を参照してください。ターミナルを使用したい場合は、[Box CLIツール][box-cli]を使用することもできます。

[console]: https://cloud.app.box.com/developers/console

[auth]: g://authentication/select

[oauth2]: g://authentication/oauth2

[integrations]: g://applications/integrations

[add-users]: https://support.box.com/hc/en-us/articles/360043694594-Add-Users

[integrations]: https://cloud.app.box.com/integrations

[dev-token]: g://authentication/tokens/developer-tokens/#create-developer-token

[postman-collection]: g://tooling/postman

[api-ref]: page://reference

[box-cli]: https://github.com/box/boxcli
