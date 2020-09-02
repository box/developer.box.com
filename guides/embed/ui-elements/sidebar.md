---
rank: 7
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/box-content-sidebar
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/sidebar
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/uploader
previous_page_id: embed/ui-elements/preview
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/ui-elements/sidebar.md
---
# Content Sidebar

Box Content Sidebar UI Elementを使用すると、開発者は、ファイル関連のメタデータ(Box Skillsを含む)とアクティビティフィード(バージョン、コメント、タスクを含む)を表示するためのサポートをデスクトップまたはモバイルウェブアプリで追加できます。

## インストール

NPMまたはBox CDN経由でBox UI Elementsをインストールする方法は、[こちら](g://embed/ui-elements/installation)を参照してください。

<Message>

# ブラウザのサポート

古いブラウザでは、UI Elementの[サポートは限定的](g://embed/ui-elements/browser)です。目的のブラウザに合ったpolyfillを必ず追加してください。

</Message>

## 認証

UI Elementは認証に依存しない方法で設計されているため、Boxアカウントを持つユーザー (管理対象ユーザー) とBox以外のアカウントを持つユーザー (App User) のどちらにUI Elementを使用するかどうかに関係なく、UI Elementを使用するのに特別な設定は必要ありません。その理由は、UI Elementは認証のために「トークン」を受け取ることのみを予期しており、Boxにはトークンの生成方法としてOAuthとJWTの2つがあるからです。

<CTA to="g://authentication/select">

認証方式の選択について確認する

</CTA>

## サンプルHTML

<!-- markdownlint-disable line-length -->

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Box Content Sidebar</title>

    <!-- polyfill.io only loads the polyfills your browser needs -->
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,Intl"></script>
    <!-- Alternatively, use polyfill hosted on the Box CDN
    <script src="https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js"></script>
    -->

    <!-- Latest version of the sidebar css for your locale -->
    <link
      rel="stylesheet"
      href="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/sidebar.css"
    />
  </head>
  <body>
    <div class="container" style="height:600px"></div>
    <!-- Latest version of the sidebar js for your locale -->
    <script src="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/sidebar.js"></script>
    <script>
      var fileId = "123";
      var token = "abc";

      // At least one of the sub-sidebars (details, activity feed, skills, metadata) need to be turned on for something to render. Details is iteself further divided into notices, properties, access stats and versions, one of which need to be enabled for the details sidebar to render.
      var sidebar = new Box.ContentSidebar();
      sidebar.show(fileId, accessToken, {
        container: ".container",
        detailsSidebarProps: {
          hasNotices: true,
          hasProperties: true,
          hasAccessStats: true,
          hasVersions: true
        },
        hasActivityFeed: true,
        hasSkills: true,
        hasMetadata: true
      });
    </script>
  </body>
</html>
```

<!-- markdownlint-enable line-length -->

## デモ

### スタンドアロンサイドバー

<iframe height="800" scrolling="no" title="Box Content Sidebar" src="//codepen.io/box-platform/embed/xjbBvv/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

### Content Previewを使用したサイドバー

<iframe height="800" scrolling="no" title="Box Content Previewとサイドバー" src="//codepen.io/box-platform/embed/pqBMgM/?height=800&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

### Content Explorerを使用したサイドバー

<iframe height="800" scrolling="no" title="Box Content Explorerとサイドバー" src="//codepen.io/box-platform/embed/ERVXMa/?height=800&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

## API

```js
const { ContentSidebar } = Box;
const sidebar = new ContentSidebar();

/**
 * Shows the file selection.
 *
 * @public
 * @param {String} fileId - The file id.
 * @param {String} token - The API access token.
 * @param {Object|void} [options] - Optional options.
 * @return {void}
 */
sidebar.show(fileId, token, options);

/**
 * Hides the sidebar, removes all event listeners, and clears out the HTML.
 *
 * @public
 * @return {void}
 */
sidebar.hide();

/**
 * Clears out the internal in-memory cache for the sidebar. This forces
 * items to be reloaded from the API.
 *
 * @public
 * @return {void}
 */
sidebar.clearCache();

/**
 * Adds an event listener to the sidebar. Listeners should be added before
 * calling show() so no events are missed.
 *
 * @public
 * @param {String} eventName - Name of the event.
 * @param {Function} listener - Callback function.
 * @return {void}
 */
sidebar.addListener(eventName, listener);

/**
 * Removes an event listener from the sidebar.
 *
 * @public
 * @param {String} eventName - Name of the event.
 * @param {Function} listener - Callback function.
 * @return {void}
 */
sidebar.removeListener(eventName, listener);

/**
 * Removes all event listeners from the sidebar.
 *
 * @public
 * @return {void}
 */
sidebar.removeAllListeners();
```

### パラメータ

<!-- markdownlint-disable line-length -->

| パラメータ     | 型      | 説明                                                                                                                 |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| `fileId`  | String | BoxファイルID。サイドバーが必要なファイルのIDです。                                                                                      |
| `token`   | String | 使用するBox APIアクセストークン。このトークンには、上記のファイルに対する読み取り/書き込みアクセス権限を指定できます。このトークンのために渡される値は、サイドバーの表示中は有効期限切れにならないことが前提となっています。 |
| `options` | Object | 追加のオプション。たとえば、`sidebar.show(FILE_ID, TOKEN, {hasProperties: true})`を使用すると、サイドバーにファイルのプロパティが表示されます。                 |

<!-- markdownlint-enable line-length -->

### オプション

<!-- markdownlint-disable line-length -->

| パラメータ                 | 型        | デフォルト           | 説明                                                                                                                                                                                           |
| --------------------- | -------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container`           | String   | `document.body` | Content Sidebarが配置されるコンテナのCSSセレクタ。`hide()`を呼び出すと、このコンテナは空になります。                                                                                                                              |
| `hasActivityFeed`     | Boolean  | `false`         | trueに設定すると、バージョン、コメント、およびタスクを含むアクティビティフィードが表示されます。                                                                                                                                           |
| `hasMetadata`         | Boolean  | `false`         | trueに設定すると、ファイルのBOXメタデータが表示されます。                                                                                                                                                             |
| `hasSkills`           | Boolean  | `false`         | trueに設定すると、ファイルのスキルデータが表示されます。                                                                                                                                                               |
| `detailsSidebarProps` | Object   | `{}`            | 以下のセクションを参照してください。                                                                                                                                                                           |
| `requestInterceptor`  | Function |                 | リクエストをインターセプトする関数。例については、[このCodePen](https://codepen.io/box-platform/pen/jLdxEv)を参照してください。基盤となるXHRライブラリは`axios.js`で、[インターセプタでは同様のアプローチ](https://github.com/axios/axios#interceptors)に従っています。 |
| `responseInterceptor` | Function |                 | 応答をインターセプトする関数。例については、[このCodePen](https://codepen.io/box-platform/pen/jLdxEv)を参照してください。基盤となるXHRライブラリは`axios.js`で、[インターセプタでは同様のアプローチ](https://github.com/axios/axios#interceptors)に従っています。    |

### `detailsSidebarProps`

| パラメータ            | 型       | デフォルト   | 説明                                       |
| ---------------- | ------- | ------- | ---------------------------------------- |
| `hasProperties`  | Boolean | `false` | trueに設定すると、詳細サイドバーにファイルのプロパティが表示されます。    |
| `hasAccessStats` | Boolean | `false` | trueに設定すると、詳細サイドバーにファイルのアクセス統計情報が表示されます。 |
| `hasVersions`    | Boolean | `false` | trueに設定すると、詳細サイドバーにファイルのバージョンが表示されます。    |
| `hasNotices`     | Boolean | `false` | trueに設定すると、詳細サイドバーにファイル関連の通知が表示されます。     |

<!-- markdownlint-enable line-length -->

## スコープ

アプリケーションで、エンドユーザーがContent Sidebar機能のサブセットのみにアクセスできるようにする必要がある場合は、[ダウンスコープ][downscope]を使用して、アクセストークンを適切にダウンスコープして必要な権限のセットを含むトークンを生成し、Content Sidebarを初期化するエンドユーザークライアントに安全に渡すことができます。

以下は、ダウンスコープと一緒に使用する、UI Element固有の新しいスコープのセットです。こうしたスコープにより、開発者は、ダウンスコープされたトークンに適切なスコープを構成して、Content SidebarのUIコントロールを有効/無効にすることができます。詳細については、[Box UI Elementsの専用スコープ][scopes]を参照してください。

### 基本スコープ

<!-- markdownlint-disable line-length -->

| スコープ名          | 付与される権限                           |
| -------------- | --------------------------------- |
| `base_sidebar` | サイドバーに必要なファイルの基本情報の取得をユーザーに許可します。 |

### 機能のスコープ

| スコープ名          | 付与される権限              |
| -------------- | -------------------- |
| `item_comment` | コメントの追加と編集を許可します。    |
| `item_rename`  | ファイルの説明の編集を許可します。    |
| `item_upload`  | ファイルのメタデータの編集を許可します。 |
| `item_task`    | タスクの作成と解決を許可します。     |

<!-- markdownlint-enable line-length -->

[downscope]: guide://authentication/access-tokens/downscope

[scopes]: guide://api-calls/permissions-and-errors/scopes
