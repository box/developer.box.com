---
rank: 9
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/annotations
  - /annotations-beta
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/annotations
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/logo
previous_page_id: embed/ui-elements/uploader
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/ui-elements/annotations.md
---
# 注釈

Boxの注釈を使用すると、開発者はアプリケーションに埋め込まれたBoxプレビュー内から直接コラボレーション機能を提供できます。Boxの注釈は幅広いユースケースに対応するため、使用するとプレビューアーの注意を引いたり、ドキュメントや画像の特定の部分に関するフィードバックを提供したりできます。

<CTA to="g://embed/ui-elements/preview">

Content Previewの詳細を確認する

</CTA>

現在、Box Content Previewは、コメントのハイライト、ハイライトのみ、描画、ポイント注釈という4種類の注釈をサポートしています。Boxの注釈は、現在、ドキュメントと画像のプレビューでのみサポートされています。Box Content Previewでサポートされるファイルタイプの詳細なリストについては、[こちら][filetypes]で確認できます。

## ブラウザのサポート

Box UI Elementの[ブラウザのサポートの詳細](g://embed/ui-elements/browser)を確認してください。

## 使用方法

Boxの注釈は、[NPMパッケージ](https://www.npmjs.com/package/box-annotations)から取り込むと使用できます。

## 初期化

```js
/* global BoxAnnotations */
const boxAnnotations = new BoxAnnotations();
const annotatorConf = boxAnnotations.determineAnnotator(
  options,
  disabledAnnotationTypes
);

// Construct and init annotator
const annotator = new annotatorConf.CONSTRUCTOR(options);

annotator.init(scale);
```

ここで、`disabledAnnotationTypes`は、無効にする有効な注釈の種類の文字列です。ビューアー固有の注釈の構成の詳細については、以下を参照してください。

## 認証

UI Elementは認証に依存しない方法で設計されているため、Boxアカウントを持つユーザー (管理対象ユーザー) とBox以外のアカウントを持つユーザー (App User) のどちらにUI Elementを使用するかどうかに関係なく、UI Elementを使用するのに特別な設定は必要ありません。その理由は、UI Elementは認証のために「トークン」を受け取ることのみを予期しており、Boxにはトークンの生成方法としてOAuthとJWTの2つがあるからです。

<CTA to="g://authentication/select">

認証方式の選択について確認する

</CTA>

アプリケーションでエンドユーザーが注釈機能のサブセットだけにアクセスできるようにする必要がある場合は、[ダウンスコープ](g://authentication/access-tokens/downscope)を使用して、アクセストークンを適切にダウンスコープして必要な権限のセットを含むトークンを生成し、注釈を初期化するエンドユーザークライアントに安全に渡すことができます。

以下は、ダウンスコープと一緒に使用する、注釈固有の新しいスコープのセットです。こうしたスコープにより、開発者は、ダウンスコープされたトークンに適切なスコープを構成して、Boxの注釈に対する機能を有効/無効にすることができます。詳細については、[Box UI Elementsの専用スコープ](g://embed/ui-elements/scopes)を参照してください。

## パラメータとオプション

```js
const annotator = new annotatorConf.CONSTRUCTOR({
  annotator,
  apiHost,
  token,
  container,
  file: {
    id,
    file_version: {
      id
    },
    permissions
  },
  isMobile,
  hasTouch,
  locale,
  modeButtons: {
    // Annotation mode buttons, i.e. point, draw, etc
    point: {
      // Accessibilty message for the point annotation mode button
      title: "Point annotation mode",
      // CSS selector for the point annotation mode button
      selector: ".bp-btn-annotate-point"
    }
  }
});
```

<!-- markdownlint-disable line-length -->

| パラメータ                  | デフォルト | 説明                                                     |
| ---------------------- | ----- | ------------------------------------------------------ |
| `annotator`            |       | ビューアー固有の注釈構成オブジェクト                                     |
| `apiHost`              |       | Box API呼び出しのホスト(`https://app.box.com/api`など)           |
| `fileId`               |       | BoxファイルID                                              |
| `token`                |       | 文字列認証トークン。適切なスコープを使用した注釈トークンの生成方法の詳細については、以下を参照してください。 |
| `container`            |       | プレビューが配置されるDOMノードまたはセレクタ                               |
| `file`                 |       | ファイルメタデータオブジェクト                                        |
| `file.id`              |       | 文字列`Box_File` ID                                       |
| `file.file_version.id` |       | 文字列`Box_File_Version` ID                               |
| `file.permissions`     |       | ファイル権限オブジェクト。権限のスコープを設定する方法については、以下を参照してください。          |

| オプション         | デフォルト   | 説明                                                               |
| ------------- | ------- | ---------------------------------------------------------------- |
| `modeButtons` |         | 注釈モードボタンのCSSセレクタとアクセシビリティメッセージを含むオブジェクト。上記のパラメータとオプションを参照してください。 |
| `isMobile`    | `false` | ユーザーのブラウザがモバイルデバイスにあるかどうか                                        |
| `hasTouch`    | `false` | モバイルブラウザがタッチ対応かどうか                                               |
| `locale`      | `en-US` | 共有リンクのURL                                                        |

### 基本スコープ

| スコープ名          | 付与される権限                                                 |
| -------------- | ------------------------------------------------------- |
| `base_preview` | ユーザー/ファイル/トークンの権限に基づいて、フォルダ内のファイルに対するプレビューアクセス権限を許可します。 |

### 機能のスコープ

| スコープ名                  | 付与される権限                                         |
| ---------------------- | ----------------------------------------------- |
| `item_download`        | ファイル/フォルダのコンテンツのダウンロードを許可します。                   |
| `annotation_view_self` | ユーザーに自分の注釈の表示を許可します。                            |
| `annotation_view_all`  | ユーザーにファイルに付いているすべての注釈の表示を許可します。                 |
| `annotation_edit`      | ユーザーに自分の注釈の編集を許可します(`annotation_view_self`を含む)。 |

### サンプルのシナリオ

| シナリオ                                                  | スコープの組み合わせ                                                 |
| ----------------------------------------------------- | ---------------------------------------------------------- |
| ユーザーが基本的なプレビュー機能と自分の注釈の編集機能を必要とする                     | `base_preview` + `annotation_edit`                         |
| ユーザーが基本的なプレビュー機能、自分の注釈の編集機能、およびドキュメントのテキストの選択機能を必要とする | `base_preview` + `annotation_edit` + `item_download`       |
| ユーザーが基本的なプレビュー機能、すべての注釈の表示機能、および自分の注釈の編集機能を必要とする      | `base_preview` + `annotation_view_all` + `annotation_edit` |
| ユーザーが基本的なプレビュー機能と自分の注釈のみを表示する機能を必要とする                 | `base_preview` + `annotation_view_self`                    |

<!-- markdownlint-enable line-length -->

## 注釈の有効化/無効化と注釈の種類

注釈の種類は、プレビューオプションで選択して無効にすることができます。ビューアーオプションによって、そのビューアーに対してグローバルな`showAnnotations`の値が上書きされます。ここでBoxの注釈とともに使用するプレビューインスタンスを設定する方法の詳細については、[Box Content Preview](g://embed/ui-elements/preview)を参照してください。

```js
preview.show(..., {
  showAnnotations: Boolean
});
```

次と組み合わせます。

```js
preview.show(..., {
    viewers: {
        VIEWER_NAME: {
            annotations: {
                enabled: Boolean,
                enabledTypes: String[] | null
            }
        }
    }
});
```

これにより、`enabled`が`true`に設定されている場合は、注釈が有効になります。空の場合は`showAnnotations`の値に従います。`enabledTypes`の値は、このビューアーに対して有効にする注釈の種類のリストです。空の場合は、その注釈者のデフォルトの種類に従います。

### 例

すべての注釈を有効にし、画像ビューアーに対してはオフにします。また、ドキュメントビューアーに対してはポイント注釈のみ有効にします。

```js
preview.show(fileId, token, {
  showAnnotations: true,
  viewers: {
    Image: {
      annotations: {
        enabled: false
      }
    },
    Document: {
      annotations: {
        enabled: true,
        enabledTypes: ["point"]
      }
    }
  }
});
```

## 注釈者

注釈者の名前には、`DocAnnotator`と`ImageAnnotator`のいずれかを指定することができます。`boxAnnotations.getAnnotators()`を呼び出すと、使用できる注釈のリストを取得できます。

## その他のメソッド

<!-- markdownlint-disable line-length -->

* `annotator.init()`: 注釈者を初期化します。
* `annotator.isModeAnnotatable(/* String */ type)`: 現在のビューアー/注釈者で現在の注釈モードが有効になっているかどうかを返します。
* `annotator.showModeAnnotateButton(/* String */ currentMode)`: 指定した注釈モードの注釈ボタンを示します。
* `annotator.getAnnotateButton(/* String */ annotatorSelector)`: 注釈ボタンの要素を取得します。
* `annotator.showAnnotations()`: 保存されている注釈を取得して表示します。
* `annotator.hideAnnotations()`: 注釈を非表示にします。
* `annotator.hideAnnotationsOnPage(/* number */ pageNum)`: 指定したページで注釈を非表示にします。
* `annotator.setScale()`: 拡大/縮小倍率を設定します。
* `annotator.toggleAnnotationHandler()`: 注釈モードのオンとオフを切り替えます。注釈モードがオンの場合は、その場所に注釈スレッドが作成されます。
* `annotator.disableAnnotationMode(/* String */ mode, /* HTMLElement */ buttonEl)`: 指定した注釈モードを無効にします。
* `annotator.enableAnnotationMode(/* String */ mode, /* HTMLElement */ buttonEl)`: 指定した注釈モードを有効にします。
* `annotator.getAnnotatedEl(/* HTMLElement */ containerEl)`: ビューアー内の注釈付きの要素を特定します。
* `annotator.createAnnotationThread(/* Annotation[] */ annotations, /* Object */ location, /* String */ [annotation type])`: 適切な種類の注釈スレッドを作成し、インメモリのマップに追加して返します。

<!-- markdownlint-enable line-length -->

## イベント

イベントは、`addListener`を使用して注釈者オブジェクトにバインドし、`removeListener`を使用して削除することができます。イベントリスナーは`showAnnotations()`が呼び出される前にバインドする必要があります。そうしないと、イベントが見つからない可能性があります。

```js
/* global BoxAnnotations */
const boxAnnotations = new BoxAnnotations();
const annotatorConf = boxAnnotations.determineAnnotator(
  options,
  disabledAnnotationTypes
);

// Construct and init annotator
const annotator = new annotatorConf.CONSTRUCTOR(options);
var listener = value => {
  // Do something with value
};

// Attach listener before calling show otherwise events can be missed
annotator.addListener(EVENTNAME, listener);

// Initialize a annotator
annotator.showAnnotations();

// Remove listener when appropriate
annotator.removeListener(EVENTNAME, listener);
```

`EVENTNAME`には、以下のいずれかを指定できます。

* `annotator`イベントは、注釈者インスタンスが最初に使用可能になったときにトリガーされます。Boxの注釈により、`load`の前にこのイベントがトリガーされるため、クライアントは、`load`イベントがBox Content Previewからトリガーされる前にそのリスナーをアタッチできます。
* `annotationsfetched`イベントは、Box APIから注釈が取得されているときにトリガーされます。
* `annotationmodeenter`イベントは、注釈モードに入るとトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  // Annotation mode that was entered
  mode: 'point',
  // Optional CSS selector for the container's header
  headerSelector: '.bp-preview-header',
}
```

`annotationmodeexit`イベントは、注釈モードが終了するとトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  // Annotation mode that was exited
  mode: 'point',
  // Optional CSS selector for the container's header
  headerSelector: '.bp-preview-header',
}
```

`annotationerror`イベントは、注釈エラーが発生したときにトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  message: 'message', // Error message to show
}
```

`annotationpending`イベントは、注釈スレッドが作成されたにもかかわらず、まだサーバーに保存されていない場合にトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationthreadsaved`イベントは、注釈スレッドがサーバーに保存されたときにトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationthreaddeleted`イベントは、注釈スレッドがサーバーで削除されたときにトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationsaved`イベントは、注釈が追加され、サーバー上の既存の注釈スレッドに保存されたときにトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationdeleted`イベントは、サーバー上の既存のスレッドから注釈が削除されたときにトリガーされます。注釈スレッド全体は削除されません。イベントデータには以下の内容が含まれます。

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationcanceled`イベントは、新しいスレッドまたは既存のスレッドで注釈の投稿がキャンセルされたときにトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationdeleteerror`イベントは、新しいスレッドまたは既存のスレッドで注釈の削除中にエラーが発生したときにトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationcreateerror`イベントは、新しいスレッドまたは既存のスレッドで注釈の投稿中にエラーが発生したときにトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotatorevent`: 注釈者ごとに、一連の独自のイベントがトリガーされます。たとえば、画像の注釈者では`rotate`や`resize`などがトリガーされるのに対し、別の注釈者では別の一連のイベントがトリガーされる場合があります。また、注釈者ラッパーは、以下を含むイベントデータとともに、Box Content Previewのプレビューレベルでイベントを再発行します。

```js
{
  event: EVENTNAME,             // Event name
  data: DATA,                   // Event data object
  annotatorName: ANNOTATORNAME, // Name of the annotator
  fileVersionId: fileVersionId  // The file version id
  fileId: fileId                // The file id
}
```

### イベントの使用例

```js
preview.addListener("annotator", viewer => {
  annotator.addListener("annotationsfetched", () => {
    // Do something when annotations are fetched on a preview
  });
});

// Event listeners can be attached to viewers
preview.addListener("load", data => {
  var viewer = data.viewer;
  viewer.addListener("annotationsfetched", () => {
    // Do something when annotations are fetched on a preview
  });
});

// Event listeners can be attached to annotators
preview.addListener("load", data => {
  var annotator = data.viewer.annotator;
  annotator.addListener("annotationsfetched", () => {
    // Do something when annotations are fetched on a preview
  });
});

preview.addListener("annotatorevent", data => {
  if (data.event === "annotationsfetched") {
    // Do something when annotations are fetched on a preview
  } else if (data.event === "annotationerror") {
    // Do something different when an annotation error has occurred
  } else {
  }
});

preview.addListener("annotatorevent", data => {
  if (data.viewerName === "Image") {
    if (data.event === "annotationsfetched") {
      // Do something when annotations are fetched on an image preview
    }
  } else if (data.viewerName === "MultiImage") {
    if (data.event === "annotationsfetched") {
      // Do something different when annotations are fetched on a multi-page image
    }
  } else {
  }
});

preview.addListener("annotationsfetched", data => {
  if (data.viewerName === "Image") {
    // Do something when annotations are fetched on an image preview
  } else if (data.viewerName === "MultiImage") {
    // Do something different when annotations are fetched on a multi-page image
  } else {
  }
});
```

## 注釈スレッド

### スレッドのメソッド

注釈スレッドには、以下のメソッドを使用できます。

<!-- markdownlint-disable line-length -->

| メソッド名              | 説明                          | メソッドのパラメータ                                         |
| ------------------ | --------------------------- | -------------------------------------------------- |
| `createDialog`     | スレッドのダイアログボックスを作成します。       |                                                    |
| `show`             | 注釈インジケータを表示します。             |                                                    |
| `hide`             | 注釈インジケータを非表示にします。           |                                                    |
| `reset`            | スレッドの状態を「inactive」にリセットします。 |                                                    |
| `showDialog`       | このスレッドに適切なダイアログを表示します。      |                                                    |
| `hideDialog`       | このスレッドに適切なダイアログを非表示にします。    |                                                    |
| `saveAnnotation`   | 注釈をローカルとサーバーに保存します。         | {string} 注釈の種類、{text} 保存する注釈のテキスト                  |
| `deleteAnnotation` | 注釈を削除します。                   | {string} 注釈ID、{boolean} サーバー上で削除するかどうか(デフォルトはtrue) |

<!-- markdownlint-enable line-length -->

### スレッドのイベント

すべての注釈スレッドでは以下のイベントがトリガーされます。イベントデータには以下の内容が含まれます。

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

<!-- markdownlint-disable line-length -->

| イベント名                     | 説明                                                |
| ------------------------- | ------------------------------------------------- |
| `annotationpending`       | 注釈スレッドは作成されましたが、まだサーバーに保存されていません。                 |
| `annotationthreadsaved`   | 注釈スレッドはサーバーに保存されました。                              |
| `annotationthreaddeleted` | 注釈スレッドはサーバーで削除されました。                              |
| `annotationsaved`         | 注釈スレッドは追加され、サーバー上の既存の注釈スレッドに保存されました。              |
| `annotationdeleted`       | 注釈スレッドはサーバー上の既存のスレッドから削除されました。注釈スレッド全体は削除されていません。 |
| `annotationcanceled`      | 新しいスレッドまたは既存のスレッドで注釈スレッドの投稿がキャンセルされました。           |
| `annotationdeleteerror`   | 新しいスレッドまたは既存のスレッドで注釈の削除中にエラーが発生しました。              |
| `annotationcreateerror`   | 新しいスレッドまたは既存のスレッドで注釈の投稿中にエラーが発生しました。              |

<!-- markdownlint-enable line-length -->

イベントの使用例については、上記の「**イベント**」セクションを参照してください。

## 注釈ダイアログ

### ダイアログのメソッド

注釈ダイアログには、以下のメソッドを使用できます。

<!-- markdownlint-disable line-length -->

| メソッド名              | 説明                         | メソッドのパラメータ          |
| ------------------ | -------------------------- | ------------------- |
| `show`             | ダイアログを配置して表示します。           |                     |
| `hide`             | ダイアログを非表示にします。             |                     |
| `hideMobileDialog` | 共有モバイルダイアログを非表示にしてリセットします。 |                     |
| `addAnnotation`    | 注釈をダイアログに追加します。            | {Annotation} 追加する注釈 |
| `removeAnnotation` | 注釈をダイアログから削除します。           | {string} 注釈ID       |
| `postAnnotation`   | 注釈をダイアログで投稿します。            | {string} 投稿する注釈テキスト |
| `position`         | ダイアログを配置します。               |                     |

<!-- markdownlint-enable line-length -->

## サポートされている注釈の種類

ポイント注釈は、ドキュメント形式と画像形式の両方でサポートされています。コメントのハイライト、ハイライトのみ、描画注釈はドキュメント形式でのみサポートされています。

サポートされているドキュメントのファイル拡張子: `pdf`、`doc`、`docx`、`ppt`、`pptx`、`xlsx`、`xls`、`xlsm`。

サポートされている画像のファイル拡張子: `ai`、`bmp`、`dcm`、`eps`、`gif`、`png`、`ps`、`psd`、`svs`、`tga`、`tif`、`tiff`。

[filetypes]: https://community.box.com/t5/Managing-Your-Content/What-file-types-and-fonts-are-supported-by-Box-s-Content-Preview/ta-p/327#FileTypesSupported
