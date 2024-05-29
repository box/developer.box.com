---
rank: 8
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/box-content-uploader
  - /docs/content-uploader
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/uploader
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/annotations
previous_page_id: embed/ui-elements/sidebar
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/uploader.md
fullyTranslated: true
---
# コンテンツアップローダー

Box Content Uploader UI Elementを使用すると、開発者は、デスクトップまたはモバイルウェブアプリにアップロードウィジェットを埋め込むことができます。ユーザーはファイルを選択するかドラッグアンドドロップしてアップロードできます。サイズの大きなファイルのアップロードには、[分割アップロード](e://post-files-upload-sessions)APIを使用します。

## インストール

NPMまたはBox CDN経由でBox UI Elementsをインストールする方法は、[こちら](g://embed/ui-elements/installation)を参照してください。

## 認証

UI Elementは認証に依存しない方法で設計されているため、Boxアカウントを持つユーザー (管理対象ユーザー) とBox以外のアカウントを持つユーザー (App User) のどちらにUI Elementを使用するかどうかに関係なく、UI Elementを使用するのに特別な設定は必要ありません。その理由は、UI Elementは認証のために「トークン」を受け取ることのみを予期しており、Boxにはトークンの生成方法としてOAuthとJWTの2つがあるからです。

<CTA to="g://authentication/select">

認証方法の選択について確認する

</CTA>

## デモ

### Uploader

<iframe height="560" scrolling="no" title="Box Content Uploader" src="//codepen.io/box-platform/embed/QvqGwr/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

### ポップアップ形式のアップローダー

<iframe height="560" scrolling="no" title="ポップアップ形式のBox File Pickerとアップローダー" src="//codepen.io/box-platform/embed/oWEKdq/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

<Message>

# アクセストークン

上記のデモは、有効なアクセストークンを指定しなければ、完全に動作しない可能性があります。テスト目的の場合は、一時的な開発者トークンを使用できます。このトークンは、デモにある \[JS] タブで更新する必要があります。

</Message>

## API

```js
const { ContentUploader } = Box;
const uploader = new ContentUploader();

/**
 * Shows the content uploader.
 *
 * @public
 * @param {String} folderId - Folder ID to upload to.
 * @param {String} accessToken - Box API access token.
 * @param {Object|void} [options] - Optional options.
 * @return {void}
 */
uploader.show(folderId, accessToken, options);

/**
 * Hides and clears HTML for the uploader.
 *
 * @public
 * @return {void}
 */
uploader.hide();

/**
 * Adds an event listener to the content uploader.
 * Listeners should be added before calling show()
 * so no events are missed.
 *
 * @public
 * @param {String} eventName Name of the event.
 * @param {Function} listener Callback function.
 * @return {void}
 */
uploader.addListener(eventName, listener);

/**
 * Removes an event listener from the content uploader.
 *
 * @public
 * @param {String} eventName Name of the event.
 * @param {Function} listener Callback function.
 * @return {void}
 */
uploader.removeListener(eventName, listener);

/**
 * Removes all event listeners from the content uploader.
 *
 * @public
 * @return {void}
 */
uploader.removeAllListeners();

```

### パラメータ

| パラメータ         | 型      | 説明                                                                                            |
| ------------- | ------ | --------------------------------------------------------------------------------------------- |
| `folderId`    | String | BoxフォルダのID。アップロードするファイルが含まれているフォルダのIDです。Boxの \[すべてのファイル] フォルダを使用する場合は、`folderId`として`0`を使用します。 |
| `accessToken` | String | 使用するBox APIアクセストークン。このトークンには、上記のフォルダに対するアップロード権限が必要です。                                        |
| `options`     | Object | 省略可能なオプション。詳細については、以下を参照してください。                                                               |

### オプション

| パラメータ                 | 型        | デフォルト                                   | 説明                                                                                                                                                                                           |
| --------------------- | -------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container`           | String   | `document.body`                         | コンテンツアップローダーが配置されるコンテナのCSSセレクタ。`hide()`を呼び出すと、このコンテナは空になります。                                                                                                                                 |
| `sharedLink`          | String   |                                         | 共有リンクのURL。フォルダが共有されており、アクセストークンがファイルの所有者またはコラボレータに属していない場合は必須です。                                                                                                                             |
| `sharedLinkPassword`  | String   |                                         | 共有リンクのパスワード。共有リンクにパスワードが設定されている場合は必須です。                                                                                                                                                      |
| `onClose`             | Function |                                         | アップロードするファイルがない場合やすべてのアップロードが完了している場合に表示される \[閉じる] ボタンのコールバック関数。このオプションを`null`に設定すると、このボタンは表示されません。                                                                                          |
| `modal`               | Object   |                                         | モーダル属性を指定すると、コンテンツアップローダーは所定の位置に作成されません。代わりに、コンテナ内にボタンが作成され、そのボタンをクリックすると、モーダルポップアップでコンテンツアップローダーが起動します。モーダルオプションについては、以下を参照してください。                                                          |
| `size`                | String   | `undefined`                             | コンテンツアップローダーがコンテナの幅の大小に合わせて表示されるように示します。値には空白か、`small`または`large`を指定できます。空白にした場合、UI Elementはそのコンテナに合わせて調整され、自動でsmallの幅とlargeの幅が切り替わります。                                                       |
| `isTouch`             | Boolean  | デフォルトでは、ブラウザとデバイスのデフォルトのタッチサポートが設定されます。 | コンテンツエクスプローラがタッチ対応デバイスにレンダリングされることを示します。                                                                                                                                                     |
| `fileLimit`           | Number   | 100                                     | 一度にアップロードできるファイルの最大数。`fileLimit`を超えるファイルをアップロードのために選択した場合、最初の`fileLimit`を超えるファイルはアップロードに含まれません。この状況が発生した場合、フッターに警告メッセージが表示されます。                                                              |
| `requestInterceptor`  | Function |                                         | リクエストをインターセプトする関数。例については、[このCodePen](https://codepen.io/box-platform/pen/jLdxEv)を参照してください。基盤となるXHRライブラリは`axios.js`で、[インターセプタでは同様のアプローチ](https://github.com/axios/axios#interceptors)に従っています。 |
| `responseInterceptor` | Function |                                         | レスポンスをインターセプトする関数。例については、[このCodePen](https://codepen.io/box-platform/pen/jLdxEv)を参照してください。基盤となるXHRライブラリは`axios.js`で、[インターセプタでは同様のアプローチ](https://github.com/axios/axios#interceptors)に従っています。 |

### モーダルオプション

| パラメータ              | 型        | デフォルト     | 説明                             |
| ------------------ | -------- | --------- | ------------------------------ |
| `buttonLabel`      | `String` |           | ボタンのラベル                        |
| `buttonClassName`  | `String` | Boxの青いボタン | ボタンを装飾するためのCSSクラス              |
| `modalClassName`   | `String` |           | モーダルポップアップコンテンツを装飾するためのCSSクラス  |
| `overlayClassName` | `String` |           | モーダルポップアップオーバーレイを装飾するためのCSSクラス |

### イベント

| イベント名      | イベントデータ       | 説明                                                                                        |
| ---------- | ------------- | ----------------------------------------------------------------------------------------- |
| `close`    |               | \[閉じる] ボタンがクリックされたときに発生します。                                                               |
| `complete` | `Array<File>` | 現在のビューにあるアップロードがすべて完了したときに発生します。イベントデータはファイルオブジェクトの配列になります。                               |
| `upload`   | ファイル          | 1つのファイルが正常にアップロードされたときに発生します。イベントデータはファイルオブジェクトになります。                                     |
| `error`    | Object        | 1つのファイルでアップロードエラーが生じたときに発生します。イベントデータはFile Web APIのプロパティファイルとエラーオブジェクトのエラーを含むオブジェクトになります。 |

##  スコープ 

アプリケーションで、エンドユーザーがコンテンツアップローダー機能のサブセットのみにアクセスできるようにする必要がある場合は、[ダウンスコープ][downscope]を使用して、アクセストークンを適切にダウンスコープして必要な権限のセットを含むトークンを生成し、コンテンツアップローダーを初期化するエンドユーザークライアントに安全に渡すことができます。

以下は、ダウンスコープと一緒に使用する、UI Element固有の新しいスコープのセットです。こうしたスコープにより、開発者は、ダウンスコープされたトークンに適切なスコープを構成して、コンテンツアップローダーのUIコントロールを有効/無効にすることができます。詳細については、[Box UI Elementsの専用スコープ][scopes]を参照してください。

### 基本スコープ

| スコープ名         | 付与される権限                                         |
| ------------- | ----------------------------------------------- |
| `base_upload` | トークン交換リクエストの「resource」で指定されたフォルダへのアップロードを許可します。 |

### サンプルのシナリオ

| シナリオ                       |  スコープ         |
| -------------------------- | ------------- |
| ユーザーがファイルをBoxフォルダにアップロードする | `base_upload` |

[downscope]: guide://authentication/tokens/downscope

[scopes]: guide://api-calls/permissions-and-errors/scopes
