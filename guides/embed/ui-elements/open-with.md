---
rank: 4
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/box-content-open-with
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/open-with
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/picker
previous_page_id: embed/ui-elements/explorer
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/open-with.md
fullyTranslated: true
---
# Content Open With

<Message type="warning">

日本時間2021年12月22日をもって、新規のお客様に対する`OpenWith` UI Elementのサポートは終了しました。

</Message>

Box Content Open With UI Elementを使用すると、開発者は、Boxに保存されているコンテンツをパートナーアプリケーションまたはローカルのデスクトップで開くためのドロップダウンを埋め込むことができます。

このElementは、有効化された統合に関する情報をBox APIを使用して取得し、パートナーのサービスを呼び出します。その後、ユーザーはこれらのサービスで操作を行うと、編集したコンテンツはBoxに自動的に保存されます。

Open With Elementに含まれる統合には、Google SuiteおよびBox Editがあります。Google Suiteの統合の詳細については、[Boxコミュニティサイト][community]を参照してください。

現在、この要素では、認証用に[App User](page://platform/user-types)のみがサポートされています。

## インストール

NPMまたはBox CDN経由でBox UI Elementsをインストールする方法は、[こちら](g://embed/ui-elements/installation)を参照してください。

## Box Edit

Box Editでは、カスタムアプリケーションに統合するために追加の設定が必要です。Box Editでは、コンテンツをローカルで開くためにデスクトップアプリケーションの[Box Tools][tools]を使用します。

* リクエストでは (`https`ドメインからの) セキュアな接続を使用する必要があります。
* アプリケーションのドメインは、Box Toolsで許可する必要があります。手順については、[こちら][custom-domains]を参照してください。理想的なワークフローでは、Box Toolsもインストールされるインストーラにこれらの手順をバンドルします。
* Safariでは、Box Toolsに接続するためにブラウザの機能拡張が必要です。詳細については、[こちら][safari]を参照してください。

## G Suite

Box for G Suiteの統合を使用するには、有効なG Suiteアカウントが必要です。ユーザーのG SuiteとBoxアカウントを接続するには、App Userの`external_app_user_id`を、ユーザーのG Suiteアカウントに関連付けられたメールアドレスに更新する必要があります。

App Userの`external_app_user_id`は、[`PUT /users/:id`](e://put-users-id)エンドポイントを介して更新できます。

## 設定

Open With UI Elementを使用する前に、アプリケーションを許可し、Box APIエンドポイントを使用してApp Userのために統合を有効にしておく必要があります。

### アプリケーションのアクティブ化

「Open With」UI Elementは、Box Platformを使用して構築するすべての開発者が使用できます。インスタンスに対してこの要素をアクティブ化するには、開発者コンソールでアプリケーションに \[統合を有効化] スコープを追加します。

<ImageFrame border>

![統合を有効化](./images/enable-integrations.png)

</ImageFrame>

アプリケーションは、APIコールに対してアクティブ化されたら、会社での再認証が必要になります。この操作を実行する手順については、[こちら](g://authorization/custom-app-approval)を参照してください。

## 使用可能な統合のリストの取得

アプリ統合をユーザーに割り当てるには、まず、使用可能な統合のリストを取得します。この`GET`リクエストは、次の`cURL`リクエストを使用して実行できます。

```curl
curl -X GET https://api.box.com/2.0/app_integrations \
    -H 'Authorization: Bearer [ACCESS_TOKEN]'

```

```json
{
  "next_marker": null,
  "entries": [
    { "type": "app_integration", "id": "10897" },
    { "type": "app_integration", "id": "1338" },
    { "type": "app_integration", "id": "13418" },
    { "type": "app_integration", "id": "3282" }
  ],
  "limit": 100
}

```

アプリ統合IDを使用して、指定したユーザーに統合を割り当てます。

## 特定の統合の取得

IDに基づいて、特定の統合に関する追加情報を取得するには、次のGETリクエストを実行できます。

```curl
curl -X GET \
    https://api.box.com/2.0/app_integrations/[APP_INTEGRATION_ID] \
    -H 'Authorization: Bearer [ACCESS_TOKEN]'

```

```json
{
  "type": "app_integration",
  "id": "10897",
  "app": {
    "type": "app",
    "id": "336417"
  },
  "name": "Edit with G Suite",
  "description": "Securely manage your Google Docs, Sheets and Slides in Box",
  "executable_item_types": [
    "file"
  ],
  "restricted_extensions": [
    "docx",
    "gdoc",
    "xlsx",
    "gsheet",
    "pptx",
    "gslides",
    "gslide"
  ],
  "scoped_to": "parent"
}

```

## ユーザーへの統合の追加

有効なApp Userにアプリ統合を追加するには、以下の3つの情報が必要です。

* 有効な[サービスアカウント](page://platform/user-types/#service-account/)アクセストークン
* 統合を割り当てるApp UserのID
* ユーザーに割り当てるアプリ統合のID

<Message warning>

アプリ統合に関する情報を取得するための前述の2つのリクエストは、有効な開発者トークンなど、任意の有効なトークンを使用して実行できますが、アプリ統合を追加および削除するには、有効なサービスアカウントのアクセストークンが必要です。開発者トークンを使用すると`404 Not Found`エラーが発生します。

</Message>

アプリ統合をApp Userに割り当てるには、次の`POST`リクエストを実行できます。

```curl
curl -X POST https://api.box.com/2.0/app_integration_assignments \
    -H 'Authorization: Bearer [SERVICE_ACCOUNT_TOKEN]' \
    -d '{
      "assignee": {
        "type": "user",
        "id": "[APP_USER_ID]"
      },
      "app_integration": {
        "type": "app_integration",
        "id": "[APP_INTEGRATION_ID]"
      }
    }'

```

```json
{
  "type": "app_integration_assignment",
  "id": "72048301",
  "assignee": {
    "type": "user",
    "id": "6084519920"
  },
  "app_integration": {
    "type": "app_integration",
    "id": "3282"
  }
}

```

JSONレスポンスに含まれるIDは、割り当て後にアプリ統合を管理するために使用できるため、アプリケーションで保存する必要があります。

## ユーザーからの統合の削除

App Userからアプリ統合を削除するには、有効なサービスのアクセストークンと、前の手順で取得したアプリ統合割り当てIDを使用して次のリクエストを実行できます。

```curl
curl -X DELETE https://api.box.com/2.0/app_integration_assignments/[APP_INTEGRATION_ASSIGNMENT_ID] \
    -H 'Authorization: Bearer [SERVICE_ACCOUNT_TOKEN]'

```

```sh
204 No Content

```

## サンプルHTML

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Box Content Open With Demo</title>

    <!-- Latest version of the open with css for your locale -->
    <link
      rel="stylesheet"
      href="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/openwith.css"
    />
  </head>
  <body>
    <div class="container" style="height:600px"></div>
    <!-- Latest version of the open with js for your locale -->
    <script src="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/openwith.js"></script>
    <script>
      var fileId = "123";
      var accessToken = "abc";
      var contentOpenWith = new Box.ContentOpenWith();
      contentOpenWith.show(fileId, accessToken, {
        container: ".container"
      });
    </script>
  </body>
</html>

```

## デモ

### Open Withの例

<iframe height="560" scrolling="no" title="Box Open Withの例" src="//codepen.io/box-platform/embed/984598a6fe6bf01785d02be770c5c96a/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

### コンテンツエクスプローラとOpen Withの例

<iframe height="560" scrolling="no" title="Box Content Explorerの例とOpen With" src="//codepen.io/box-platform/embed/519f67ba709fb581a93c3f73b64cf223/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

<Message>

# アクセストークン

上記のデモは、デモの \[JS] タブで有効なアクセストークンを指定しなければ、十分に機能しない可能性があります。Open With Elementの場合は、有効な[サービスアカウント][service-account]アクセストークンを指定する必要があります。

</Message>

## 認証

UI Elementは認証に依存しない方法で設計されているため、Boxアカウントを持つユーザー (管理対象ユーザー) とBox以外のアカウントを持つユーザー (App User) のどちらにUI Elementを使用するかどうかに関係なく、UI Elementを使用するのに特別な設定は必要ありません。その理由は、UI Elementは認証のために「トークン」を受け取ることのみを予期しており、Boxにはトークンの生成方法としてOAuthとJWTの2つがあるからです。

<CTA to="g://authentication/select">

認証方法の選択について確認する

</CTA>

##  スコープ 

ダウンスコープされたトークンを使用して統合を実行するには、`item_execute_integration`スコープに加えて、使用する特定の統合で必要となるスコープを含める必要があります。

* **Google**: 親フォルダに対する`item_readwrite`
* **Adobe**: `root_readwrite`
* **Box Edit**: 親フォルダに対する`item_readwrite`
* **Box Edit単一ファイルコラボレーション**: ファイルに対する`item_readwrite`

スコープの詳細については、[こちら][scopes]を参照してください。

## API

```js
const { ContentOpenWith } = Box;
const contentOpenWith = new ContentOpenWith();

/**
 * Shows the content open with element.
 *
 * @param {string} fileId - The root file id
 * @param {string} accessToken - Box API access token
 * @param {Object} [options] - Options
 * @return {void}
 */
contentOpenWith.show(fileId, accessToken, options);

/**
 * Hides the content open with element, removes all event listeners,
 * and clears out the
 * HTML.
 *
 * @return {void}
 */
openWith.hide();

/**
 * Adds an event listener to the content open with element. Listeners should be added
 * before calling show() so no events are missed.
 *
 * @param {string} eventName - Name of the event
 * @param {Function} listener - Callback function
 * @return {void}
 */
contentOpenWith.addListener(eventName, listener);

/**
 * Removes an event listener from the content open with element.
 *
 * @param {string} eventName - Name of the event
 * @param {Function} listener - Callback function
 * @return {void}
 */
contentOpenWith.removeListener(eventName, listener);

/**
 * Removes all event listeners from the content open with element.
 *
 * @return {void}
 */
contentOpenWith.removeAllListeners();

```

### パラメータ

| パラメータ         | 型      | 説明                                                                                                                  |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `fileId`      | String | BoxファイルID。統合の実行対象となるファイルのIDです。                                                                                      |
| `accessToken` | String | 使用するBox APIアクセストークン。このトークンには、上記のフォルダに対する読み取り/書き込みアクセス権限が必要です。このトークンのために渡される値は、エクスプローラの表示中は有効期限切れにならないことが前提となっています。  |
| `options`     | Object | 省略可能なオプション。詳細は以下を参照してください。たとえば、`contentExplorer.show(FOLDER_ID, TOKEN, {canDelete: false})`を使用すると、削除オプションが非表示になります。 |

### オプション

<!-- i18n-enable localize-links -->

| パラメータ                 | 型          | 説明                                                                                                                                                                                           |                                                |
| --------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `dropdownAlignment`   | \`left     | right\`                                                                                                                                                                                      | \[開く] ボタンに対するドロップダウンの位置を決定します。デフォルトは`right`です。 |
| `boxToolsName`        | `String`   | この文字列は、「このファイルをデスクトップで開くにはBox Toolsをインストールしてください」というメッセージ内のBox Toolsの名前に置き換わります。                                                                                                             |                                                |
| `boxToolsInstallUrl`  | `String`   | このURLは、「このファイルをデスクトップで開くにはBox Toolsをインストールしてください」というメッセージ内でリンクされている、デフォルトのBoxインストール手順の代わりに使用されます。                                                                                            |                                                |
| `onExecute`           | `Function` | 統合の呼び出しが試行されたときに実行されるコールバック。                                                                                                                                                                 |                                                |
| `onError`             | `Function` | エラーが発生したときに実行されるコールバック。                                                                                                                                                                      |                                                |
| `requestInterceptor`  | `Function` | リクエストをインターセプトする関数。例については、[このCodePen](https://codepen.io/box-platform/pen/jLdxEv)を参照してください。基盤となるXHRライブラリは`axios.js`で、[インターセプタでは同様のアプローチ](https://github.com/axios/axios#interceptors)に従っています。 |                                                |
| `responseInterceptor` | `Function` | レスポンスをインターセプトする関数。例については、[このCodePen](https://codepen.io/box-platform/pen/jLdxEv)を参照してください。基盤となるXHRライブラリは`axios.js`で、[インターセプタでは同様のアプローチ](https://github.com/axios/axios#interceptors)に従っています。 |                                                |

<!-- i18n-disable localize-links -->

<Message warning>

現在、`onError`イベントと`onExecute`イベントは、既知のバグの影響を受けています。一時的な回避策として`openWith.addListener('execute', callback)`および`openWith.addListener('error', callback)`を使用することをお勧めします。

</Message>

### イベント

| イベント名     | イベントデータ | 説明                     |
| --------- | ------- | ---------------------- |
| `execute` | 統合ID    | 統合の呼び出しが実行されたときに発生します。 |
| `error`   | エラー     | エラーが発生したときに発生します。      |

[scopes]: guide://api-calls/permissions-and-errors/scopes

<!-- i18n-enable localize-links -->

[community]: https://support.box.com/hc/ja/articles/360043696994-Box-for-Google-Workspaceについて

[tools]: https://support.box.com/hc/ja/categories/360003188014-Box-Tools

<!-- i18n-disable localize-links -->

[custom-domains]: g://embed/ui-elements/custom-domains

<!-- i18n-enable localize-links -->

[safari]: https://support.box.com/hc/ja/articles/360043697334-Box-Toolsのインストール

<!-- i18n-disable localize-links -->

[service-account]: page://platform/user-types/#service-account/
