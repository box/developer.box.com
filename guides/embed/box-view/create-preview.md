---
rank: 2
related_guides:
  - embed/box-view/create-preview
required_guides:
  - embed/box-view/setup
  - embed/box-view/upload-file
  - embed/ui-elements/installation
  - embed/ui-elements/preview
alias_paths: []
category_id: embed
subcategory_id: embed/box-view
is_index: false
id: embed/box-view/create-preview
type: guide
total_steps: 5
sibling_id: embed/box-view
parent_id: embed/box-view
next_page_id: embed/box-view/upload-file
previous_page_id: embed/box-view/setup
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/box-view/create-preview.md
fullyTranslated: true
---
# ファイルのプレビューの作成

ファイルは、アプリトークンアプリケーションにアップロードされると、以下の2つの方法でプレビューすることができます。

* 直接埋め込み: カスタムの埋め込みリンクを使用した標準のHTML `<iframe>`コンポーネント。
* カスタマイズされたプレビューアー: Box [UI Elements][uie]を使用して全面的にカスタマイズされたプレビューウィジェット。

## 直接埋め込み (`iframe`)

直接埋め込みリンクを使用すると、アプリケーションでのプレビューをカスタマイズするためのオプションが制限されます。このメソッドは軽量であるため、このAPIには、ドキュメントでのスクロール、動画のインタラクティブな再生や一時停止、画像の回転など、クライアント側の処理に対応するオプションはありません。

Box Viewの直接`<iframe>`埋め込みを作成するには、以下の2つの手順を実行します。

1. ファイル用に埋め込みURLを生成する
2. 生成した埋め込みURLを`<iframe>`に追加する

### ファイル用に埋め込みURLを生成する

アプリトークンアプリケーションにアップロードされたファイルの公開ファイルプレビューURLを作成するには、直接のSDKメソッドを使用するか、APIに直接リクエストを発行します。

<Message type="notice">

埋め込みURLをAPIから直接生成する場合は、[ファイル情報の取得エンドポイント](e://get_files_id)を使用して、`fields`パラメータを介して`expiring_embed_link`をリクエストします。

</Message>

<Tabs>

<Tab title="cURL">

```curl
curl https://api.box.com/2.0/files/FILE_ID?fields=expiring_embed_link \
    -H "authorization: Bearer [APP_TOKEN]"

```

</Tab>

<Tab title=".NET">

```csharp
String fileId = "12345678";
Uri embedUri = await client.FilesManager.GetPreviewLinkAsync(id: fileId);

```

</Tab>

<Tab title="Java">

```java
String fileID = "12345678";
BoxFile file = new BoxFile(api, fileID);
URL embedLink = file.getPreviewLink();

```

</Tab>

<Tab title="Python">

```python
file_id = '12345678'
embed_url = client.file(file_id).get_embed_url()

```

</Tab>

<Tab title="Node">

```js
const fileId = '12345678';
client.files.getEmbedLink(fileId).then(embedURL => {
    // ...
});

```

</Tab>

</Tabs>

レスポンスオブジェクト内では、公開埋め込みURLが次のようになります。

```shell
https://app.box.com/preview/expiring_embed/gvoct6FE!YT_X1LauQ8ulDTad96hTl9xLCRYJ
5iU6O61KxiduxFIgX9HSWMcCWf7zju1XkEsf6-Ul2qtKXeaFeKPT4SysQJQdxrc144KgTIBuoI3bWMf4
cfhp3jdLYrK5hnr6KMq5H6r-AW31AcFtDJi1lnT0M4b3bvvZUaE2RRJGGINMauvS6MAT2luae5PvbFSx
Ctqqx6XlN6QrqbhfJc0UeJF9qwMv3-O8q5fWn0qr8OTY4lkeYidtTs3Ux...

```

<Message type="warning">

セキュリティ上の理由により、生成された埋め込みリンクは1分後に期限切れになるため、生成されたらすぐにアプリに埋め込む必要があります。

</Message>

### 生成した埋め込みURLを`<iframe>`に追加する

アプリケーションのHTML内で、`iframe`要素を作成し、`src`属性を生成された埋め込みURLに設定します。

```html
<iframe src="https://app.box.com/preview/expiring_embed/gvoct6FE!ixgtCKQAziW
  9tHPm-jueq4cmS4GnL9RTJRcVEsK_3W8xcxtVo_v6gKpoXY45odgG1QrcjBVYZMrriUyGvcoSM
  SX8s-smpaFFYQik0R-PCKFtwvbv0lonid6ZfYNbuNFl2j9hOIqBccvHrdVor7i6WvOm6zELzTY
  4EWshcyYYBhDbJmYMrq61RtU_kvBe5P..."></iframe>

```

## カスタマイズされたプレビューアー (UI Element)

高度なプレビューのカスタマイズ機能やイベント処理機能を活用するには、Box [UI Preview Element](guide://embed/ui-elements/preview/)を使用します。

このプレビューElementを設定するには、まず、必須コンポーネントをインストールします。

<CTA to="guide://embed/ui-elements/installation">

Box Elementsとプレビューのインストール

</CTA>

新しいプレビューアーを表示するためのJavaScriptコードを追加する際、基本的なコードは次のようになります。

```js
var preview = new Box.Preview();
preview.show("FILE_ID", "ACCESS_TOKEN", {
    container: ".preview-container",
    showDownload: true
});

```

コードサンプル内のプレースホルダを以下の内容に置き換えてください。

* `FILE_ID`: アプリトークンアプリケーションにアップロードされたファイルのID。ファイルのアップロード時に返されるオブジェクトから取得できます。
* `ACCESS_TOKEN`: アプリケーションの構成時に設定されたプライマリアクセストークン、またはそのトークンのダウンスコープされたバージョン。

<Message type="warning">

プライマリアクセストークンの高度な権限により、JavaScriptコードでは、ダウンスコープされたバージョンのトークンを使用することを強くお勧めします。[ダウンスコープのベストプラクティス](guide://embed/box-view/best-practices#use-downscoped-tokens)を参照してください。

</Message>

[uie]: g://embed/ui-elements
