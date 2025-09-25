---
rank: 3
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/box-content-explorer
  - /docs/content-explorer
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/explorer
type: guide
total_steps: 18
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/explorer-metadata-v2
previous_page_id: embed/ui-elements/browser
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/explorer.md
fullyTranslated: true
---
# コンテンツエクスプローラ

Box Content Explorer UI Elementを使用すると、開発者は、Boxに保存されているコンテンツのフォルダビューをデスクトップまたはモバイルウェブアプリに埋め込むことができます。ライブラリはBox APIを介して指定されたフォルダに関する情報を取得した後、メインのBoxウェブアプリと同様にそのコンテンツをフォルダビューにレンダリングします。ユーザーは、そのフォルダ階層内を移動し、名前の変更、削除、共有などのファイル操作を実行できます。

Content Explorer comes with a [metadata view][explorer-metadata] that uses metadata query to find files and folders based on their metadata. The data is then displayed in the embedded view.

## インストール

NPMまたはBox CDN経由でBox UI Elementsをインストールする方法は、[こちら](g://embed/ui-elements/installation)を参照してください。

## 認証

UI Elementは認証に依存しない方法で設計されているため、Boxアカウントを持つユーザー (管理対象ユーザー) とBox以外のアカウントを持つユーザー (App User) のどちらにUI Elementを使用するかどうかに関係なく、UI Elementを使用するのに特別な設定は必要ありません。その理由は、UI Elementは認証のために「トークン」を受け取ることのみを予期しており、Boxにはトークンの生成方法としてOAuthとJWTの2つがあるからです。

<CTA to="g://authentication/select">

認証方法の選択について確認する

</CTA>

## サンプルHTML

```html
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="utf-8" />
        <title>Box Content Explorer Demo</title>

        <!-- Latest version of the explorer css for your locale -->
        <link
            rel="stylesheet"
            href="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/explorer.css" />
    </head>
    <body>
        <div class="container" style="height:600px"></div>
        <!-- Latest version of the explorer js for your locale -->
        <script src="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/explorer.js"></script>
        <script>
            var folderId = "123";
            var accessToken = "abc";
            var contentExplorer = new Box.ContentExplorer();
            contentExplorer.show(folderId, accessToken, {
                container: ".container",
            });
        </script>
    </body>
</html>

```

## デモ

<iframe height="560" scrolling="no" title="Box Content Explorer" src="//codepen.io/box-platform/embed/wdWWdN/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

## API

```js
const { ContentExplorer } = Box;
const contentExplorer = new ContentExplorer();

/**
 * Shows the content explorer.
 *
 * @param {string} folderId - The root folder id
 * @param {string} accessToken - Box API access token
 * @param {Object} [options] - Options
 * @return {void}
 */
contentExplorer.show(folderId, accessToken, options);

/**
 * Hides the content explorer, removes all event listeners, and clears out the
 * HTML.
 *
 * @return {void}
 */
contentExplorer.hide();

/**
 * Clears out the internal in-memory
 * cache for the content explorer forcing
 * re-load of items via the API.
 *
 * @public
 * @return {void}
 */
contentExplorer.clearCache();

/**
 * Adds an event listener to the content explorer. Listeners should be added
 * before calling show() so no events are missed.
 *
 * @param {string} eventName - Name of the event
 * @param {Function} listener - Callback function
 * @return {void}
 */
contentExplorer.addListener(eventName, listener);

/**
 * Removes an event listener from the content explorer.
 *
 * @param {string} eventName - Name of the event
 * @param {Function} listener - Callback function
 * @return {void}
 */
contentExplorer.removeListener(eventName, listener);

/**
 * Removes all event listeners from the content explorer.
 *
 * @return {void}
 */
contentExplorer.removeAllListeners();

```

### パラメータ

| パラメータ         | 型      | 説明                                                                                                                  |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `folderId`    | String | BoxフォルダのID。中を移動するフォルダのIDになります。Boxの \[すべてのファイル] フォルダを使用する場合は、`folderId`として`0`を使用します。                                 |
| `accessToken` | String | 使用するBox APIアクセストークン。このトークンには、上記のフォルダに対する読み取り/書き込みアクセス権限が必要です。このトークンのために渡される値は、エクスプローラの表示中は有効期限切れにならないことが前提となっています。  |
| `options`     | Object | 省略可能なオプション。詳細は以下を参照してください。たとえば、`contentExplorer.show(FOLDER_ID, TOKEN, {canDelete: false})`を使用すると、削除オプションが非表示になります。 |

### オプション

| パラメータ                  | 型        | デフォルト                                   | 説明                                                                                                                                                                                                               |
| ---------------------- | -------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container`            | String   | `document.body`                         | コンテンツエクスプローラが配置されるコンテナのCSSセレクタ。hide() を呼び出すと、このコンテナは空になります。                                                                                                                                                      |
| `sortBy`               | String   | `name`                                  | コンテンツリストの最初の並べ替え基準オプション。値は`id`、`name`、`date`または`size`になります。                                                                                                                                                      |
| `sortDirection`        | String   | `ASC`                                   | コンテンツリストの最初の並べ替え方向オプション。値は`ASC`または`DESC`になります。                                                                                                                                                                   |
| `logoUrl`              | String   |                                         | ヘッダーに表示するカスタムロゴのURL。この値が「box」という文字列の場合は、Boxのロゴが表示されます。                                                                                                                                                           |
| `canPreview`           | Boolean  | `true`                                  | このオプションが`true`に設定されていて、ファイルに対する`can_preview`権限が`true`の場合、コンテンツエクスプローラでファイルをクリックできます。ファイルをクリックするとそのファイルのプレビューが開始されます。ファイルに対する権限`can_preview`が`false`に設定されている場合、このオプションによる効果はありません。このオプションは、プレビュー可能なファイルのみに適用できます。 |
| `canDownload`          | Boolean  | `true`                                  | これを`false`に設定すると、ダウンロードオプションが非表示になります。このオプションを非表示にするだけではダウンロードを防ぐことはできず、ファイルに対する権限でも`can_download`を`false`に設定する必要があります。ファイルに対する権限`can_download`が`false`に設定されている場合、このオプションによる効果はありません。このオプションは、ファイルのみに適用できます。     |
| `canDelete`            | Boolean  | `true`                                  | これを`false`に設定すると、削除オプションが非表示になります。このオプションを非表示にするだけでは削除を防ぐことはできず、項目に対する権限でも`can_delete`を`false`に設定する必要があります。項目に対する権限`can_delete`が`false`に設定されている場合、このオプションによる効果はありません。                                            |
| `canRename`            | Boolean  | `true`                                  | これを`false`に設定すると、名前の変更オプションが非表示になります。このオプションを非表示にするだけでは名前の変更を防ぐことはできず、項目に対する権限でも`can_rename`を`false`に設定する必要があります。                                                                                                |
| `canUpload`            | Boolean  | `true`                                  | これを`false`に設定すると、アップロードオプションが非表示になります。このオプションを非表示にするだけではアップロードを防ぐことはできず、現在のフォルダに対する権限でも`can_upload`を`false`に設定する必要があります。フォルダに対する権限`can_upload`が`false`に設定されている場合、このオプションによる効果はありません。                             |
| `canCreateNewFolder`   | Boolean  | `true`                                  | フォルダの新規作成オプションが非表示になります。このオプションを非表示にするだけではフォルダの新規作成を防ぐことはできず、フォルダ項目に対する権限でも`can_upload`を`false`に設定する必要があります。フォルダ項目に対する権限`can_upload`が`false`に設定されている場合、このオプションによる効果はありません。                                       |
| `canShare`             | Boolean  | `true`                                  | `false`に設定すると、共有ボタンが非表示になります。このボタンを非表示にするだけでは共有を防ぐことはできず、項目の`permissions`でも`can_share`をfalseに設定する必要があります。項目に対する権限`can_share`が`false`に設定されている場合、このオプションによる効果はありません。                                               |
| `canSetShareAccess`    | Boolean  | `true`                                  | `false`に設定すると、共有権限の変更を許可する共有ドロップダウン選択が非表示になります。この選択のドロップダウンを非表示にするだけでは共有権限の変更を防ぐことはできず、項目に対する権限でも`can_set_share_access`を`false`に設定する必要があります。項目に対する権限`can_set_share_access`が`false`に設定されている場合、このオプションによる効果はありません。 |
| `sharedLink`           | String   |                                         | 共有リンクのURL。フォルダが共有されており、アクセストークンがファイルの所有者またはコラボレータに属していない場合は必須です。                                                                                                                                                 |
| `sharedLinkPassword`   | String   |                                         | 共有リンクのパスワード。共有リンクにパスワードが設定されている場合は必須です。                                                                                                                                                                          |
| `size`                 | String   | `undefined`                             | コンテンツエクスプローラがコンテナの幅の大小に合わせて表示されるように示します。値には空白か、`small`または`large`を指定できます。空白にした場合、UI Elementはそのコンテナに合わせて調整され、自動で`small`の幅と`large`の幅が切り替わります。                                                                       |
| `isTouch`              | Boolean  | デフォルトでは、ブラウザとデバイスのデフォルトのタッチサポートが設定されます。 | コンテンツエクスプローラがタッチ対応デバイスにレンダリングされることを示します。                                                                                                                                                                         |
| `autoFocus`            | Boolean  | `false`                                 | `true`に設定すると、初回読み込み時に項目グリッドに焦点が当てられます。                                                                                                                                                                           |
| `defaultView`          | String   | `files`                                 | 値は`files`、`recents`、または`metadata`になります。`recents`に設定すると、デフォルトで、通常のファイル/フォルダ構造ではなく、最近使用した項目が表示されます。コンテンツエクスプローラでメタデータビューを表示するには、`metadata`を指定する必要があります。指定しない場合、通常のフォルダビューが表示されます。                                  |
| `requestInterceptor`   | Function |                                         | リクエストをインターセプトする関数。例については、[このCodePen](https://codepen.io/box-platform/pen/jLdxEv)を参照してください。基盤となるXHRライブラリは`axios.js`で、[インターセプタでは同様のアプローチ](https://github.com/axios/axios#interceptors)に従っています。                     |
| `responseInterceptor`  | Function |                                         | レスポンスをインターセプトする関数。例については、[このCodePen](https://codepen.io/box-platform/pen/jLdxEv)を参照してください。基盤となるXHRライブラリは`axios.js`で、[インターセプタでは同様のアプローチ](https://github.com/axios/axios#interceptors)に従っています。                     |
| `ContentOpenWithProps` | Object   | `{ show: false }`                       | エクスプローラからプレビューする際にOpen With Elementを表示できます。                                                                                                                                                                      |
| `token`                | String   |                                         | 開発者コンソールで生成された開発者トークン。                                                                                                                                                                                           |
| `metadataQuery`        | Object   |                                         | メタデータビューの情報を取得するために使用されるメタデータクエリ。                                                                                                                                                                                |
| `rootFolderID`         | String   |                                         | メタデータテンプレートが適用されているフォルダのID。`metadataQuery`はこのフォルダに適用されます。                                                                                                                                                        |
| `fieldsToShow`         | Object   |                                         | 表示するメタデータフィールド/列 - メタデータテンプレートの有効なフィールド名を指定する必要があります。                                                                                                                                                            |

### イベント

| イベント名      | イベントデータ                             | 説明                     |
| ---------- | ----------------------------------- | ---------------------- |
| `select`   | `Array<File \| Web Link \| Folder>` | 項目行が選択されたときに発生します。     |
| `rename`   | `File \| Web Link \| Folder`        | 項目の名前が変更されたときに発生します。   |
| `preview`  | `File`                              | ファイルがプレビューされたときに発生します。 |
| `download` | `Array<File>`                       | 項目がダウンロードされたときに発生します。  |
| `delete`   | `Array<File>`                       | 項目が削除されたときに発生します。      |
| `upload`   | `Array<File>`                       | 項目がアップロードされたときに発生します。  |
| `navigate` | `Folder`                            | フォルダ内に移動したときに発生します。    |
| `create`   | `Folder`                            | 新しいフォルダが作成されたときに発生します。 |

## キーボードショートカット

クリックによって手動で、またはJavaScriptや上記の`autoFocus`プロパティによってプログラムで項目グリッドがフォーカスされていると、以下のキーボードショットカットが機能します (対応する操作が適切で許可されている場合)。

| キー                      | 動作                  |
| ----------------------- | ------------------- |
| `Arrow Up`              | 前の項目行               |
| `Arrow Down`            | 次の項目行               |
| `Ctrl/Cmd + Arrow Up`   | 最初の項目行              |
| `Ctrl/Cmd + Arrow Down` | 最後の項目行              |
| `/`                     | 検索                  |
| `Shift + X`             | 項目行を選択              |
| `Delete`                | 選択した項目を削除           |
| `Enter`                 | 選択した項目を開く           |
| `Shift + R`             | 選択した項目の名前を変更        |
| `Shift + S`             | 選択した項目を共有           |
| `Shift + D`             | 選択した項目をダウンロード       |
| `g then f`              | ルートフォルダに移動          |
| `g then u`              | 現在のフォルダにアップロード      |
| `g then b`              | ルートフォルダの階層リンクをフォーカス |
| `g then r`              | 最近使用した項目            |

##  スコープ 

アプリケーションで、エンドユーザーがコンテンツエクスプローラ機能のサブセットのみにアクセスできるようにする必要がある場合は、[ダウンスコープ][downscope]を使用して、アクセストークンを適切にダウンスコープして必要な権限のセットを含むトークンを生成し、コンテンツエクスプローラを初期化するエンドユーザークライアントに安全に渡すことができます。

以下は、ダウンスコープと一緒に使用する、UI Element固有の新しいスコープのセットです。こうしたスコープにより、開発者は、ダウンスコープされたトークンに適切なスコープを構成して、コンテンツエクスプローラのUIコントロールを有効/無効にすることができます。詳細については、[Box UI Elementsの専用スコープ][scopes]を参照してください。

### 基本スコープ

| スコープ名           | 付与される権限                                            |
| --------------- | -------------------------------------------------- |
| `base_explorer` | ユーザー/ファイル/トークンの権限に基づいて、フォルダツリー内のコンテンツへのアクセスを許可します。 |

### 機能のスコープ

| スコープ名           | 付与される権限                                                            |
| --------------- | ------------------------------------------------------------------ |
| `item_preview`  | ユーザーがクリックしたときにファイルのプレビューを自動的に有効にします (プレビューUI Elementを参照する必要があります)。 |
| `item_download` | ファイル/フォルダのコンテンツのダウンロードを許可します。                                      |
| `item_rename`   | ファイル/フォルダの名前変更を許可します。                                              |
| `item_share`    | ダウンスコープリクエストの「resource」で指定されたリソースの共有を許可します。                        |
| `item_delete`   | ファイル/フォルダの削除を許可します。                                                |

### サンプルのシナリオ

| シナリオ                                                       |  スコープ                                                                                                             |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ユーザーがフォルダ構造内を移動する (基本機能)                                   | `base_explorer`                                                                                                   |
| ユーザーが基本機能とプレビューを必要とする                                      | `base_explorer` + `item_preview`                                                                                  |
| ユーザーが基本機能、プレビュー、およびダウンロードを必要とする                            | `base_explorer` + `item_preview` + `item_download`                                                                |
| ユーザーが基本機能、プレビュー、ダウンロード、およびファイル/フォルダ名の変更を必要とする              | `base_explorer` + `item_preview` + `item_download` + `item_rename`                                                |
| ユーザーがすべての機能 (基本、プレビュー、ダウンロード、名前の変更、共有、アップロード、および削除) を必要とする | `base_explorer` + `item_preview` + `item_download` + `item_rename` + `item_delete` + `item_share` + `item_upload` |

## カスタム操作

コンテンツエクスプローラとContent Pickerでは、ファイルやフォルダの \[**その他のオプション**] メニューの操作を拡張できます。カスタムオプションは、ユーザーが省略記号ボタンをクリックすると表示されます。

\[**その他のオプション**] メニューをカスタマイズするには、カスタム操作の配列を`itemActions`に渡します。

```js
contentExplorer.show(configData.FOLDER_ID, configData.ACCESS_TOKEN, {
    container: ".container",
    itemActions: customActions,
});

```

この配列には、複数の操作を含めることができます。操作オブジェクトには、`label`および`onAction`コールバック関数を含める必要があります。`file`または`folder`の値を渡すことで、特定の項目の`type`のみに表示されるようカスタム操作にフィルタをかけることができます。`filter`値は、特定のファイル拡張子など、高度なフィルタに使用します。

```js
const customActions = [
    {
        label: "Preview in New Window",
        onAction: (item) => alert('action ' + item),
        type: 'file',
    },
    {
        label: "Open in Box.com",
        onAction: (item) => window.open("https://app.box.com"),
    },
    {
        label: "Export",
        onAction: (item) => console.log('action ' + item),
        filter: (item) => item.extension?.toLowerCase() === 'pdf',
    }
];

```

CodePenで実装例を確認してください。

<iframe height="560" scrolling="no" title="Boxのカスタムアイコン" src="https://codepen.io/box-platform/embed/EaaMMKQ?default-tab=html%2Cresult" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

[downscope]: guide://authentication/tokens/downscope

[scopes]: guide://api-calls/permissions-and-errors/scopes

[box-app]: g:///applications/app-types

[token]: g://authentication/tokens/developer-tokens

[templates]: g://metadata/templates

[metadata-project]: https://github.com/box-community/content-explorer-metadata/tree/main

[apply-templates]: https://support.box.com/hc/en-us/articles/360044196173-Using-Metadata

[metadata-query]: g://metadata/queries

[get-template]: g://metadata/templates/get/#get-a-metadata-template-by-name

[creating-templates-api]: g:///metadata/templates/create

[appjs]: https://github.com/box-community/content-explorer-metadata/blob/main/src/App.js

[blogpost]: https://medium.com/box-developer-blog/metadata-view-in-box-content-explorer-4978e47e97e9

[explorer-metadata]: g://embed/ui-elements/explorer-metadata-v2
