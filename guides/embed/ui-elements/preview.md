---
rank: 6
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/box-content-preview
  - /docs/content-preview
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/preview
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/sidebar
previous_page_id: embed/ui-elements/picker
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/ui-elements/preview.md
---
# Content Preview

Box Content Preview UI Elementを使用すると、開発者は、Boxファイルの高品質でインタラクティブなプレビューをデスクトップやモバイルウェブアプリに埋め込むことができます。ライブラリは、ファイルとその変換後のレプリゼンテーションに関する情報をBox APIを介して取得し、ファイルタイプに合ったビューアーを選択して、必要な静的アセットとファイルレプリゼンテーションを動的に読み込み、最後にファイルをレンダリングします。また、このUI Elementを使用すると、複数のファイルのプレビューを同じコンテナに読み込むことができ、ファイル間を移動するための矢印も表示されます。

このUI Elementによって、メインのBoxウェブアプリと「期限付きで埋め込まれた」Box APIエンドポイントでのプレビューが強化されます。

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

## サポートされているファイルタイプ

Box Content Previewでは、ドキュメントと画像のほとんどの形式、HD動画、3Dモデル、360度画像、360度動画など、120以上のファイルタイプがサポートされています。サポートされているファイルタイプの完全なリストについては、[こちら][filetypes]で確認できます。

<Message warning>

サポートされているファイルタイプに他のオブジェクト(`DWG`ファイルなど)への参照が含まれている場合、Boxプレビューではこれらの参照がサポートされていないことに注意してください。サポートされていない参照を含むDWGファイルを表示しているすべてのエンドユーザーには、別の手順でワークフローを完了するよう促す通知が表示されます。

</Message>

## デモ

ナビゲーション用の矢印を使用すると、さまざまなファイルタイプをプレビューできます。

<!-- markdownlint-disable line-length -->

<iframe width="100%" height="560" scrolling="no" frameborder="no" title="Box Content Previewのデモ" src="//codepen.io/box-platform/embed/rmZdjm/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

<!-- markdownlint-enable line-length -->

## API

```js
const { Preview } = Box;
const preview = new Preview();

/**
 * Shows a preview.
 *
 * @public
 * @param {string} fileId - File ID to preview
 * @param {string} accessToken - Box API access token
 * @param {Object} [options] - Options
 * @return {void}
 */
preview.show(fileId, accessToken, options);

/**
 * Hides the preview.
 *
 * @return {void}
 */
preview.hide();

/**
 * Prints the current file, if printable.
 *
 * @return {void}
 */
preview.print();

/**
 * Downloads the current file.
 *
 * @return {void}
 */
preview.download();

/**
 * Resizes the current preview, if applicable. This function only needs to
 * be called when preview's viewport has changed while the window has not.
 * If the window is resizing, then preview will automatically resize itself.
 *
 * @return {void}
 */
preview.resize();

/**
 * Adds an event listener to the preview. Listeners should be added
 * before calling show() so no events are missed.
 *
 * @param {string} eventName - Name of the event
 * @param {Function} listener - Callback function
 * @return {void}
 */
preview.addListener();

/**
 * Removes an event listener from the preview.
 *
 * @param {string} eventName - Name of the event
 * @param {Function} listener - Callback function
 * @return {void}
 */
preview.removeListener(eventName, listener);

/**
 * Removes all event listeners from the preview.
 *
 * @return {void}
 */
preview.removeAllListeners();
```

### パラメータ

<!-- markdownlint-disable line-length -->

| パラメータ         | 型      | 説明                                                                                                                  |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `fileId`      | String | BoxファイルID。                                                                                                          |
| `accessToken` | String | 使用するBox APIアクセストークン。このトークンには、上記のフォルダに対する読み取り/書き込みアクセス権限が必要です。このトークンのために渡される値は、エクスプローラの表示中は有効期限切れにならないことが前提となっています。  |
| `options`     | Object | 省略可能なオプション。詳細は以下を参照してください。たとえば、`contentExplorer.show(FOLDER_ID, TOKEN, {canDelete: false})`を使用すると、削除オプションが非表示になります。 |

<!-- markdownlint-enable line-length -->

### オプション

<!-- markdownlint-disable line-length -->

| パラメータ                | 型       | デフォルト           | 説明                                                                                                                                                                   |
| -------------------- | ------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container`          | String  | `document.body` | プレビューが配置されるコンテナのCSSセレクタ                                                                                                                                              |
| `sharedLink`         | String  |                 | 共有リンクのURL。ファイルが共有されており、アクセストークンがファイルの所有者またはコラボレータに属していない場合は必須です。                                                                                                     |
| `sharedLinkPassword` | String  |                 | 共有リンクのパスワード。共有リンクにパスワードが設定されている場合は必須です。                                                                                                                              |
| `collection`         | Array   |                 | プレビューするファイルIDのリスト。これを使用すると、同じコンテナ内にある複数のファイルのプレビューが表示され、ファイル間を移動するための矢印も表示されます。このリストには`FILE_ID`を含める必要があること、およびSDKでは共有リンクまたはパスワードが必要なファイルのコレクションがサポートされないことに注意してください。 |
| `header`             | String  | `light`         | ヘッダーの表示と背景色を制御する値。ヘッダーなしの場合は`none`、ヘッダーと背景を薄い色にする場合は`light`、ヘッダーと背景を濃い色にする場合は`dark`を使用します。                                                                           |
| `logoUrl`            | String  |                 | ヘッダーに表示するカスタムロゴのURL。この値が「box」という文字列の場合は、Boxのロゴが表示されます。                                                                                                               |
| `showAnnotations`    | Boolean | `false`         | ヘッダーの注釈ボタンとコンテンツの注釈を表示するかどうか。                                                                                                                                        |
| `showDownload`       | Boolean | `false`         | ダウンロードボタンをヘッダーに表示するかどうか。また、印刷をサポートするビューアーに印刷ボタンを表示するかどうかも制御します。このオプションがアクセストークンに対するダウンロード権限より優先されることはありません。                                                          |

<!-- markdownlint-enable line-length -->

## トークン生成関数

プレビューライブラリでは、オプションで、文字列トークンの代わりに、トークン生成関数を使用できます。トークン生成関数を使用すると、プレビューで使用するトークンを動的に決定できます。たとえば、ファイルごとに異なるアクセストークンを渡したり、プレビューを表示する前にトークンが更新されて有効であることを確認したりできます。トークン生成関数ではPromiseが返され、プレビューされるすべてのファイルに適用される単一の文字列トークンか、これらのファイルのアクセストークンへの指定のファイルIDのマップに解決されます。

```js
// Example token generator function that resolves to a single access token
var singleTokenGenerator = function() {
  return someApi.getToken().then(function(data) {
    return data.token;
  });
};

// Example token generator function that resolves to a map of tokens
var mapTokenGenerator = function() {
  return Promise.resolve({
    file_1234: "some_token_abcd",
    file_2345: "some_token_bcde"
  });
};
```

## イベント

プレビューオブジェクトは、イベントにバインドするための`addListener`と`removeListener`を公開します。イベントリスナーは`show()`が呼び出される前にバインドする必要があります。そうしないと、イベントが見つからない可能性があります。

```js
const listener = (value) => {
  // Do something with value
};

// Attach listener before calling show otherwise events can be missed
var preview = new Box.Preview();
preview.addListener(EVENTNAME, listener);

// Show a preview
preview.show(...);

// Remove listener when needed
preview.removeListener(EVENTNAME, listener);
```

`EVENTNAME`には、以下のいずれかを指定できます。

* `viewer`イベントは、ビューアーインスタンスが最初に使用可能になったときにトリガーされます。これは、`load`イベントにも含まれているプロパティと同じオブジェクトです。プレビューでは、`load`の前にこのイベントがトリガーされるため、クライアントは、`load`イベントがトリガーされる前にそのリスナーをアタッチできます。
* `load`イベントは、`show()`が呼び出されたときかプレビュー間の移動が発生したときに、プレビューが読み込まれるたびにトリガーされます。イベントデータには以下の内容が含まれます。

```js
error: 'message', // Error message if any error occurred while loading
viewer: {...},    // Instance of the current viewer object if no error occurred
metrics: {...},   // Performance metrics
file: {...}       // Box file object with properties defined in file.js
```

* `navigate`イベントは、移動が発生したときにトリガーされます。イベントには移動先のファイルのファイルIDが含まれており、このイベントは`load`の前にトリガーされます。
* `notification`イベントは、プレビューラッパーまたはいずれかのビューアーで警告や致命的ではないエラーなどの通知を表示する場合にトリガーされます。イベントデータには以下の内容が含まれます。

```js
message: 'message', // Message to show
type: 'warning'    // 'warning', 'notice', or 'error'
```

* `viewerevent`: ビューアーごとに、一連の独自のイベントがトリガーされます。たとえば、画像ビューアーでは`rotate`や`resize`などがトリガーされるのに対し、別のビューアーでは別の一連のイベントがトリガーされる場合があります。プレビューラッパーは、以下を含むイベントデータとともに、プレビューレベルでイベントを再発行します。

```js
event: EVENTNAME,         // Event name
data: DATA,               // Event data object
viewerName: VIEWERNAME,   // Name of the viewer. See VIEWERNAME above
fileId: fileId            // The file ID
```

### イベントの使用例

```js
var preview = new Box.Preview();
preview.addListener("viewer", viewer => {
  viewer.addListener("rotate", () => {
    // Do something when a viewer rotates a preview
  });
});

preview.addListener("load", data => {
  const viewer = data.viewer;
  viewer.addListener("rotate", () => {
    // Do something when a viewer rotates a preview
  });
});

preview.addListener("viewerevent", data => {
  if (data.viewerName === "Image") {
    if (data.event === "rotate") {
      // Do something when an image preview is rotated
    }
  } else if (data.viewerName === "Image360") {
    if (data.event === "rotate") {
      // Do something different when a 360-degree image is rotated
    }
  } else {
  }
});

preview.addListener("rotate", data => {
  if (data.viewerName === "Image") {
    // Do something when an image preview is rotated
  } else if (data.viewerName === "Image360") {
    // Do something different when a 360-degree image is rotated
  } else {
  }
});
```

## スコープ

アプリケーションで、エンドユーザーがContent Explorer機能のサブセットのみにアクセスできるようにする必要がある場合は、[ダウンスコープ][downscope]を使用して、アクセストークンを適切にダウンスコープして必要な権限のセットを含むトークンを生成し、Content Explorerを初期化するエンドユーザークライアントに安全に渡すことができます。

以下は、ダウンスコープと一緒に使用する、UI Element固有の新しいスコープのセットです。こうしたスコープにより、開発者は、ダウンスコープされたトークンに適切なスコープを構成して、Content ExplorerのUIコントロールを有効/無効にすることができます。詳細については、[Box UI Elementsの専用スコープ][scopes]を参照してください。

### 基本スコープ

<!-- markdownlint-disable line-length -->

| スコープ名          | 付与される権限                  |
| -------------- | ------------------------ |
| `base_preview` | ファイルのプレビューのみをユーザーに許可します。 |

### 機能のスコープ

| スコープ名                  | 付与される権限                                                                                                                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `item_download`        | 生成されたプレビューからのコンテンツのダウンロード/印刷を許可します。                                                                                                                                                    |
| `annotation_edit`      | ユーザーに注釈の編集(削除)を許可します。注: ハイライト注釈を使用できるようにするには、ユーザーに対して、ドキュメントのテキストレイヤを有効にする必要があります。テキストレイヤは、ファイルのダウンロード権限を持たないすべてのユーザーで無効になっています。ユーザーのハイライト注釈を有効にするには、ユーザーにファイルのダウンロード権限があることを確認してください。 |
| `annotation_view_all`  | ユーザーに全ユーザーの注釈の表示を許可します。                                                                                                                                                                |
| `annotation_view_self` | ユーザーに自分の注釈のみの表示を許可します。                                                                                                                                                                 |

<Message>

# スコープを使用してハイライト注釈を有効にする

ハイライト注釈は`annotation_edit`および`annotation_view_all`スコープに含まれていません。ハイライトを有効にするには、ダウンスコープされたアクセストークンに`item_download`スコープを含める必要があります。

</Message>

### サンプルのシナリオ

| シナリオ                                                                                         | スコープ                                                        |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| ユーザーがプレビューのみできるようにする(ダウンロード/印刷、注釈は不可)                                                        | `base_preview`                                              |
| ユーザーがプレビュー、ダウンロード、印刷を実行できるようにする                                                              | `base_preview` + `item_download`                            |
| ユーザーがプレビュー、すべての注釈の表示を実行できるようにする(注釈のダウンロード、印刷、作成は不可)                                          | `base_preview` + `annotation_view_all`                      |
| ユーザーがプレビュー、注釈の作成(表示できるのは自分の注釈のみ)を実行できるようにする                                                  | `base_preview` + `annotation_view_self` + `annotation_edit` |
| ユーザーがプレビュー、注釈の編集、すべての注釈の表示を実行できるようにする                                                        | `base_preview` + `annotation_view_all` + `annotation_edit`  |
| ユーザーがプレビュー、自分の注釈の表示のみ(追加/削除は不可)を実行できるようにする(例: レビュー期間が終了したら、すべてのドキュメントを読み取り専用モードで保存する必要がある場合) | `base_preview` + `annotation_view_self`                     |

<!-- markdownlint-enable line-length -->

[filetypes]: https://community.box.com/t5/Managing-Your-Content/What-file-types-and-fonts-are-supported-by-Box-s-Content-Preview/ta-p/327#FileTypesSupported

[downscope]: guide://authentication/access-tokens/downscope

[scopes]: g://api-calls/permissions-and-errors/scopes
