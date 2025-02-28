---
rank: 1
related_guides:
  - authentication/tokens/developer-tokens/
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-tutorials/extract-metadata
category_id: ai-studio
subcategory_id: null
is_index: false
id: ai-studio/getting-started-ai-studio
type: guide
total_steps: 1
sibling_id: ai-studio
parent_id: ai-studio
next_page_id: ''
previous_page_id: ai-studio
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/ai-studio/getting-started-ai-studio.md
fullyTranslated: true
---
# AI Studioの使い方

<Messsage type="caution">

Box AI Studioは、Enterprise Advancedアカウントでのみ使用できます。

</Message>

AI StudioでカスタムAIエージェントの作成を開始するには、Box AIスコープが有効になっているPlatformアプリケーションと、コールを認証するための開発者トークンが必要です。

## カスタムアプリケーションの作成

まず、コールの実行に使用するPlatformアプリケーションを作成する必要があります。アプリケーションを作成するには、[Platformアプリの作成][createapps]に関するガイドに従ってください。

## Box AI Studioの有効化

Box AI Studioを使用するには、Box管理者が管理コンソールで有効にしていることを確認してください。Box管理者は、[Box AI Studioの有効化とエージェントの管理][enable]で必要な情報を確認できます。

Box AI APIを操作するには、アプリケーションに`ai.readwrite`[スコープ][scope]を追加する必要があります。このスコープを追加する前に、Box管理者からBox AI APIへのアクセス権限が付与されていることを確認してください。アプリの構成設定で \[**AIを管理する**] オプションが表示されていない場合は、管理者までお問い合わせください。

スコープを追加するには、以下の手順を実行します。

1. 開発者コンソールで、目的のアプリケーションを開きます。

2. \[**構成**] > \[**必須のアクセススコープ**] > \[**コンテンツ操作**] に移動します。

3. \[**AIを管理する**] スコープを選択します。Box Platformでは、コールを実行すると自動的にこのスコープが含まれます。あるアプリのコラボレータとして追加されているのにBox AI APIにアクセスできない場合は、\[**AIを管理する**] スコープのチェックボックスがオンになった状態で、グレー表示になっています。つまり、アプリの所有者のAIのスコープは有効になっていますが、この設定を変更することはできません。

   ![Box AIのスコープ](./images/box-ai-app-scopes.png)

4. [承認または有効化][authorization]のためにアプリを送信します。既存のアプリケーションに対してBox AI APIを有効にする場合は、アプリケーションを[再承認][reauthorization]する必要があります。

## 開発者トークンの生成

リクエストの送信時にアプリを認証するには、開発者トークンが必要です。

トークンを生成するには、以下の手順を実行します。

1. \[**開発者コンソール**] > \[**マイPlatformアプリ**] に移動します。
2. 右側の**オプションメニュー**ボタン (\[…]) をクリックします。
3. \[**開発者トークンを生成**] を選択します。トークンが自動的に生成され、クリップボードに保存されます。

![トークンの生成](../images/developer-token.png)

アプリを開いて、\[**構成**] > \[**開発者トークン**] に移動してトークンを生成することもできます。

<Message type="notice">

開発者トークンの有効期限は1時間のみです。

</Message>

詳細については、[開発者トークン][token]を参照してください。トークンを生成したら、cURLや他のクライアント ([Postman][postman]など) で使用してコールを実行できます。

[enable]: https://support.box.com/hc/en-us/articles/37228079461267-Enabling-Box-AI-Studio-and-Managing-Agents/#h_01JH9HAMP43YYN6VWM51QCK413

[token]: g://authentication/tokens/developer-tokens

[scope]: g://api-calls/permissions-and-errors/scopes

[createapps]: g://applications/app-types/platform-apps

[postman]: g://tooling/postman

[authorization]: g://authorization

[reauthorization]: g://authorization/custom-app-approval#re-authorization-on-changes
