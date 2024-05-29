---
rank: 5
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/box-content-picker
  - /docs/content-picker
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/picker
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/preview
previous_page_id: embed/ui-elements/open-with
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/picker.md
fullyTranslated: true
---
# Content Picker

Box Content Picker UI Elementを使用すると、開発者は、デスクトップまたはモバイルウェブアプリでBoxからファイルやフォルダを選択するためのサポートを追加できます。ライブラリは、指定されたフォルダに関する情報をBox APIを介して取得し、そのコンテンツをフォルダビューにレンダリングします。ユーザーはファイルまたはフォルダを選択でき、その後、このコンテンツ情報がアプリケーションの別の部分に渡されます。

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
    <title>Box File Selection</title>

    <!-- Latest version of the picker css for your locale -->
    <link
      rel="stylesheet"
      href="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/picker.css"
    />
  </head>
  <body>
    <div class="container" style="height:600px"></div>
    <!-- Latest version of the picker js for your locale -->
    <script src="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/picker.js"></script>
    <script>
      var folderId = "123";
      var accessToken = "abc";
      var filePicker = new Box.FilePicker();
      filePicker.show(folderId, accessToken, {
        container: ".container"
      });
    </script>
  </body>
</html>

```

## デモ

### ファイル選択のデモ

<iframe height="560" scrolling="no" title="Box File Picker" src="//codepen.io/box-platform/embed/PWPxBm/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

### フォルダ選択のデモ

<iframe height="560" scrolling="no" title="Boxのフォルダ選択機能" src="//codepen.io/box-platform/embed/WRQLey/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

### ファイル選択とプレビューのデモ

<iframe height="560" scrolling="no" title="Box File PickerとBoxプレビュー" src="//codepen.io/box-platform/embed/oBjJgL/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

### ポップアップ形式でのファイル選択

<iframe height="560" scrolling="no" title="ポップアップ形式のBox File Pickerとアップローダー" src="//codepen.io/box-platform/embed/oWEKdq/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

<Message>

# アクセストークン

上記のデモは、有効なアクセストークンを指定しなければ、完全に動作しない可能性があります。テスト目的の場合は、一時的な開発者トークンを使用できます。このトークンは、デモにある \[JS] タブで更新する必要があります。

</Message>

## API

```js
const { FilePicker } = Box;
const filePicker = new FilePicker();

/**
 * Shows the file selection.
 *
 * @public
 * @param {String} folderId - The root folder id.
 * @param {String} accessToken - The API access token.
 * @param {Object|void} [options] - Optional options.
 * @return {void}
 */
filePicker.show(folderId, accessToken, options);

/**
 * Hides the file picker, removes all event listeners, and clears out the HTML.
 *
 * @public
 * @return {void}
 */
filePicker.hide();

/**
 * Clears out the internal in-memory cache for the file picker. This forces
 * items to be reloaded from the API.
 *
 * @public
 * @return {void}
 */
filePicker.clearCache();

/**
 * Adds an event listener to the file picker. Listeners should be added before
 * calling show() so no events are missed.
 *
 * @public
 * @param {String} eventName - Name of the event.
 * @param {Function} listener - Callback function.
 * @return {void}
 */
filePicker.addListener(eventName, listener);

/**
 * Removes an event listener from the file picker.
 *
 * @public
 * @param {String} eventName - Name of the event.
 * @param {Function} listener - Callback function.
 * @return {void}
 */
filePicker.removeListener(eventName, listener);

/**
 * Removes all event listeners from the file picker.
 *
 * @public
 * @return {void}
 */
filePicker.removeAllListeners();

```

### パラメータ

| パラメータ         | 型      | 説明                                                                                                                  |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `folderId`    | String | BoxフォルダのID。選択しようとしているコンテンツが含まれるフォルダのIDです。Boxの \[すべてのファイル] フォルダを使用する場合は、`folderId`として`0`を使用します。                      |
| `accessToken` | String | 使用するBox APIアクセストークン。このトークンには、上記のフォルダに対する読み取り/書き込みアクセス権限が必要です。このトークンのために渡される値は、エクスプローラの表示中は有効期限切れにならないことが前提となっています。  |
| `options`     | Object | 省略可能なオプション。詳細は以下を参照してください。たとえば、`contentExplorer.show(FOLDER_ID, TOKEN, {canDelete: false})`を使用すると、削除オプションが非表示になります。 |

### オプション

| パラメータ                 | 型               | デフォルト                                   | 説明                                                                                                                                                                                                           |   |
| --------------------- | --------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | - |
| `container`           | `String`        | `document.body`                         | Content Pickerが配置されるコンテナのCSSセレクタ。hide() を呼び出すと、このコンテナは空になります。                                                                                                                                                |   |
| `sortBy`              | `String`        | `name`                                  | コンテンツリストの最初の並べ替え基準オプション。値は名前または`date`になります。                                                                                                                                                                  |   |
| `sortDirection`       | `String`        | `ASC`                                   | コンテンツリストの最初の並べ替え方向オプション。値は`ASC`または`DESC`になります。                                                                                                                                                               |   |
| `logoUrl`             | `String`        |                                         | ヘッダーに表示するカスタムロゴのURL。この値が「box」という文字列の場合は、Boxのロゴが表示されます。                                                                                                                                                       |   |
| `extensions`          | `Array<string>` | `[]`                                    | 選択対象として許可するファイル拡張子の配列 (例: `['doc', 'ppt']`)。ファイル選択機能のみに適用され、フォルダ選択機能には適用されません。拡張子が指定されている場合は、その拡張子のみを選択できます。空の配列の場合は、すべてのファイル拡張子が選択対象として許可されることを示します。                                                        |   |
| `maxSelectable`       | `Number`        | `Infinity`                              | 選択可能なファイルまたはフォルダの数。ファイルまたはフォルダが1つだけ選択されるようにする場合は1を指定します。                                                                                                                                                     |   |
| `canUpload`           | `Boolean`       | `true`                                  | これを`false`に設定すると、アップロードオプションが非表示になります。このオプションを非表示にするだけではアップロードを防ぐことはできず、現在のフォルダに対する権限でも`can_upload`を`false`に設定する必要があります。フォルダに対する権限`can_upload`が`false`に設定されている場合、このオプションによる効果はありません。                         |   |
| `canSetShareAccess`   | `Boolean`       | `true`                                  | `false`に設定すると、共有ドロップダウン選択が非表示になります。この選択のドロップダウンを非表示にするだけでは共有権限の変更を防ぐことはできず、フォルダ項目に対する権限でも`can_set_share_access`を`false`に設定する必要があります。フォルダ項目に対する権限`can_set_share_access`が`false`に設定されている場合、このオプションによる効果はありません。 |   |
| `canCreateNewFolder`  | `Boolean`       | `true`                                  | フォルダの新規作成オプションが非表示になります。このオプションを非表示にするだけではフォルダの新規作成を防ぐことはできず、フォルダ項目に対する権限でも`can_upload`を`false`に設定する必要があります。フォルダ項目に対する権限`can_upload`がfalseに設定されている場合、このオプションによる効果はありません。                                     |   |
| `sharedLink`          | `String`        |                                         | 共有リンクのURL。フォルダが共有されており、アクセストークンがファイルの所有者またはコラボレータに属していない場合は必須です。                                                                                                                                             |   |
| `sharedLinkPassword`  | `String`        |                                         | 共有リンクのパスワード。共有リンクにパスワードが設定されている場合は必須です。                                                                                                                                                                      |   |
| `modal`               | `Object`        |                                         | モーダル属性を指定すると、Content Pickerは所定の位置に作成されません。代わりに、コンテナ内にボタンが作成され、そのボタンをクリックすると、モーダルポップアップでContent Pickerが起動します。                                                                                                 |   |
| `size`                | `String`        | `undefined`                             | Content Pickerが、幅が`small`または`large`のコンテナに合わせて表示されるように示します。値には空白か、`small`または`large`を指定できます。空白にした場合、UI Elementはそのコンテナに合わせて調整され、自動でsmallの幅とlargeの幅が切り替わります。                                                     |   |
| `isTouch`             | Boolean         | デフォルトでは、ブラウザとデバイスのデフォルトのタッチサポートが設定されます。 | コンテンツエクスプローラがタッチ対応デバイスにレンダリングされることを示します。                                                                                                                                                                     |   |
| `autoFocus`           | `Boolean`       | `false`                                 | `true`に設定すると、初回読み込み時に項目グリッドに焦点が当てられます。                                                                                                                                                                       |   |
| `defaultView`         | String          | `files`                                 | 値は`files`または`recents`になります。`recents`に設定すると、デフォルトで、通常のファイル/フォルダ構造ではなく最近使用した項目が表示されます。                                                                                                                         |   |
| `chooseButtonLabel`   | `String`        |                                         | \[選択] ボタンのラベルに置き換わる文字列                                                                                                                                                                                       |   |
| `cancelButtonLabel`   | `String`        |                                         | \[キャンセル] ボタンのラベルに置き換わる文字列                                                                                                                                                                                    |   |
| `requestInterceptor`  | `Function`      |                                         | リクエストをインターセプトする関数。例については、[このCodePen](https://codepen.io/box-platform/pen/jLdxEv)を参照してください。基盤となるXHRライブラリは`axios.js`で、[インターセプタでは同様のアプローチ](https://github.com/axios/axios#interceptors)に従っています。                 |   |
| `responseInterceptor` | `Function`      |                                         | レスポンスをインターセプトする関数。例については、[このCodePen](https://codepen.io/box-platform/pen/jLdxEv)を参照してください。基盤となるXHRライブラリは`axios.js`で、[インターセプタでは同様のアプローチ](https://github.com/axios/axios#interceptors)に従っています。                 |   |

### モーダルオプション

| パラメータ              | 型        | デフォルト     | 説明                             |
| ------------------ | -------- | --------- | ------------------------------ |
| `buttonLabel`      | `String` |           | ボタンのラベル                        |
| `buttonClassName`  | `String` | Boxの青いボタン | ボタンを装飾するためのCSSクラス              |
| `modalClassName`   | `String` |           | モーダルポップアップコンテンツを装飾するためのCSSクラス  |
| `overlayClassName` | `String` |           | モーダルポップアップオーバーレイを装飾するためのCSSクラス |

### イベント

| イベント名    | イベントデータ                             | 説明                                                                                                         |
| -------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `choose` | `Array<File \| Web Link \| Folder>` | \[選択] ボタンが押されたときに発生します。イベントデータは、ファイルの選択とフォルダの選択のどちらであるかに応じて、フォルダオブジェクト、ファイルオブジェクト、またはウェブリンクオブジェクトの配列になります。 |
| `cancel` |                                     | \[キャンセル] ボタンが押されたときに発生します。                                                                                 |

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
| `Enter`                 | 選択した項目を開く           |
| `g then f`              | ルートフォルダに移動          |
| `g then u`              | 現在のフォルダにアップロード      |
| `g then b`              | ルートフォルダの階層リンクをフォーカス |
| `g then s`              | 選択した項目を表示           |
| `g then x`              | キャンセル               |
| `g then c`              | 選択                  |
| `g then r`              | 最近使用した項目            |

##  スコープ 

アプリケーションで、エンドユーザーがContent Picker機能のサブセットのみにアクセスできるようにする必要がある場合は、[ダウンスコープ][downscope]を使用して、アクセストークンを適切にダウンスコープして必要な権限のセットを含むトークンを生成し、Content Pickerを初期化するエンドユーザークライアントに安全に渡すことができます。

以下は、ダウンスコープと一緒に使用する、UI Element固有の新しいスコープのセットです。こうしたスコープにより、開発者は、ダウンスコープされたトークンに適切なスコープを構成して、Content PickerのUIコントロールを有効/無効にすることができます。詳細については、[Box UI Elementsの専用スコープ][scopes]を参照してください。

| スコープ名         | 付与される権限                                            |
| ------------- | -------------------------------------------------- |
| `base_picker` | ユーザー/ファイル/トークンの権限に基づいて、フォルダツリー内のコンテンツへのアクセスを許可します。 |

### 機能のスコープ

| スコープ名         | 付与される権限                                    |
| ------------- | ------------------------------------------ |
| `item_share`  | トークン交換リクエストの「resource」で指定されたリソースの共有を許可します。 |
| `item_upload` | Content Pickerでのアップロードを許可します。              |

### サンプルのシナリオ

| シナリオ                                                                      |  スコープ                                        |
| ------------------------------------------------------------------------- | -------------------------------------------- |
| ユーザーが単にフォルダ構造内を移動してファイル/フォルダを選択する                                         | `base_picker`                                |
| ユーザーがフォルダ構造内を移動して、ファイル/フォルダを選択し、アクセスレベルも設定する                              | `base_picker` + `item_share`                 |
| ユーザーがフォルダ構造内を移動して、ファイル/フォルダを選択し、ファイル/フォルダもアップロードする                        | `base_picker` + `item_upload`                |
| ユーザーがフォルダ構造内を移動して、ファイル/フォルダを選択し、ファイル/フォルダをアップロードして、ファイル/フォルダのアクセスレベルも設定する | `base_picker` + `item_share` + `item_upload` |

[downscope]: guide://authentication/tokens/downscope

[scopes]: guide://api-calls/permissions-and-errors/scopes
