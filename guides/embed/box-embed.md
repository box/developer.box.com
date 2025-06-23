---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/box-embed
category_id: embed
subcategory_id: null
is_index: false
id: embed/box-embed
type: guide
total_steps: 1
sibling_id: embed
parent_id: embed
next_page_id: embed
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/box-embed.md
fullyTranslated: true
---
# Box Embed

Box EmbedはHTMLベースのフレームワークで、これにより、独自に作成したアプリケーションにBoxウェブアプリの機能全体を埋め込むことができます。Box Embedを使用すると、ファイルのアップロード、検索、コメント付け、共有、タグ付けに加え、Box Editを使用したファイルの編集も可能になります。

## 開始する前に

ウィジェットを作成するには、以下のことが必要です。

* Set an embeddable element, such as a **folder**, **file**, **Hub**, **note**, or **app** for sharing. 
* **ビューアー**以上の[権限][5]がある。

## ウェブアプリの使用

BoxウェブアプリからBox埋め込みウィジェットのコードを取得するには、以下の手順を実行します。

### ファイルとフォルダ

1. 選択したファイルまたはフォルダに移動します。 
2. そのフォルダの横にある省略記号をクリックします。 
3. \[**その他の操作**] > \[**埋め込みウィジェット**] に移動します。

### Hub

1. 選択したHubに移動します。 
2. 右上にある省略記号メニューをクリックします。 
3. \[**Hubを埋め込む**] をクリックします。

### 注

1. Navigate to the chosen Box Note.
2. Click on the ellipsis menu.
3. Click **Embed Box Note**.

### Apps

1. Navigate to the chosen Box App or Box App View.
2. Click on the ellipsis menu.
3. Click **Embed**.

<ImageFrame border>

![Box Embed](./box-embed-new.png)

</ImageFrame>

次の手順では、埋め込み可能な要素のパラメータを構成します。

| ファイル       | フォルダ                                                                                          | Hub                              | 注                                                                                                           | Apps       |
| ---------- | --------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------- |
| ウィジェットのサイズ | Size of the widget, sorting of the files in a folder, hiding the navigation path and sidebar. | ウィジェットのサイズ、親のナビゲーションパスとサイドバーの非表示 | Size of the widget, skipping cloud game (results in note being in read only mode), hiding notes navigation. | ウィジェットのサイズ |

<ImageFrame border>

![Box Embedの構成](./embed-configuration.png)

</ImageFrame>

埋め込みウィジェットのカスタマイズが完了したら、埋め込みコードをコピーして自分のサイトまたはウェブアプリに貼り付けます。

## プログラムを使用して構成

Box Embedをさらにカスタマイズする場合は、プログラムを使用して実行できます。埋め込みのスニペットの形式は次のとおりです。

```html
<iframe
  src="https://{custom_domain}.app.box.com/embed/s/{shared link value}?view={list or icon}&sortColumn={name, date, or size}&sortDirection=ASC"
  width="{pixels}"
  height="{pixels}"
  frameborder="0"
  allowfullscreen
  webkitallowfullscreen
  msallowfullscreen
></iframe>

```

### 共有リンクの値の検索

プログラムを使用して埋め込み`iframe`を構築するには、まず、共有リンクの値を生成または検索します。この値を検索する1つの方法として、Boxウェブアプリを使用します。

<ImageFrame border>

![Boxの共有](./embed-share.png)

</ImageFrame>

また、[`PUT /files/:file_id`][3]または[`PUT /files/:file_id`][4]を使用して、APIで共有リンクを作成する方法もあります。

その後、[`GET /files/:id`][1]または[`GET /folders/:id`][2]エンドポイントを使用してクエリパラメータ`fields=shared_link`を渡すことにより、この共有リンクの値を検索できます。

```curl
curl https://api.box.com/2.0/folders/12345?fields=shared_link \
    -H "authorization: Bearer ACCESS_TOKEN"

```

```json
"shared_link": {
  "url": "https://app.box.com/s/dsbJFzdO7qZxdfOHFzdO7qZxdfOH",
  "download_url": null,
  "vanity_url": null,
  ...
}

```

ページをルートフォルダ/\[すべてのファイル] ページに設定することもできます。URLを共有リンク`<iframe src=“https://app.box.com/embed/folder/0”….></iframe>`ではなく`/folder/0`に設定してください。

### パラメータ

次に、表示のカスタマイズオプションを選択します。構成可能なパラメータ (省略可) のリストを以下に示します。

|                          |                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `hideHubsGallery`        | Hubsギャラリーに戻るためのナビゲーションの山括弧ボタンを非表示または表示します。`true`または`false` (デフォルト) を指定できます。                                      |
| `hideNavigationControls` | Hide or show navigation controls in Box Notes.                                                                   |
| `showItemFeedActions`    | ファイルのコメントまたはタスクを非表示または表示します。`true` (デフォルト) または`false`を指定できます。                                                    |
| `showParentPath`         | フレームのヘッダーにフォルダパスを非表示または表示します。`true`または`false` (デフォルト) を指定できます。                                                   |
| `sortColumn`             | ファイルまたはフォルダを並べ替える順番。`name`、`date` (デフォルト)、または、`size`を指定できます。                                                     |
| `sortDirection`          | ファイルまたはフォルダの並べ替えの方向。`ASC` (デフォルト) または`DESC`を指定できます。                                                              |
| `view`                   | ファイルまたはフォルダの表示方法の種類。`list` (デフォルト) または`icon`を指定できます。ログインユーザーの場合は、ユーザー設定の表示方法が優先されます。                             |
| `uxLite`                 | Show the limited content preview (Preview Light), with no cloud game. Works only for shared files and Box Notes. |

<Message type="notice">

When you use `uxLite` with Box Notes, navigation controls are not displayed, regardless of the `hideNavigationControls` setting.

</Message>

All custom search parameters from the first-party app URL are passed to the embed widget modal and Content Preview.

### 全画面表示機能

Box Embedスニペットの全画面表示機能を有効にするために、オブジェクトを全画面に表示可能にする場合は、以下のパラメータの1つ以上を`<iframe>`に含めてください。

* `allowfullscreen`
* `webkitallowfullscreen`
* `mozallowfullscreen`
* `oallowfullscreen`
* `msallowfullscreen`

## 有効期限付き埋め込みリンク

ファイルの場合、[`GET /files/:id`][1]を呼び出し、`fields`クエリパラメータを使用して`expiring_embed_link`をリクエストすることもできます。

```curl
curl https://api.box.com/2.0/files/12345?fields=expiring_embed_link \
    -H "authorization: Bearer ACCESS_TOKEN"

```

```json
{
  "etag": "1",
  "expiring_embed_link": {
    "token": {
      "access_token": "1!rFppcinUwwwDmB4G60nah7z...",
      "expires_in": 3646,
      "restricted_to": [
        {
          "object": {
            "etag": "1",
            "file_version": {
              "id": "34567",
              "sha1": "1b8cda4e52cb7b58b354d8da0068908ecfa4bd00",
              "type": "file_version"
            },
            "id": "12345",
            "name": "Image.png",
            "sequence_id": "1",
            "sha1": "1b8cda4e52cb7b58b354d8da0068908ecfa4bd00",
            "type": "file"
          },
          "scope": "base_preview"
        },
        ...
      ],
      "token_type": "bearer"
    },
    "url": "https://cloud.app.box.com/preview/expiring_embed/...."
  },
  "id": "12345",
  "type": "file"
}

```

`url`属性を`<iframe>`内で使用すると、自動で期限切れになるBox Embedインターフェースを埋め込むことができます。

```html
<iframe
  src="YOUR-GENERATED-BOX-EMBED-LINK"
  width="{pixels}"
  height="{pixels}"
  frameborder="0"
  allowfullscreen
  webkitallowfullscreen
  msallowfullscreen
/>

```

### パラメータ

UIをカスタマイズするために、このURLにさらにパラメータを追加することもできます。そのためには、以下のパラメータをクエリパラメータとして`url`に追加します。最終的なURLは、次のようになります。

```sh
https://app.box.com/preview/expiring_embed/[HASH]?[parameterName]=true

```

|                   |                                                                                                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showDownload`    | ファイルをダウンロードするための権限がビューアーにある場合は、埋め込まれたヘッダーバーにダウンロードボタンが表示されます。また、印刷とダウンロードが同じ権限で管理されているため、ドキュメントのファイルタイプには印刷ボタンも表示されます。デフォルトでは`false`になります。                                                          |
| `showAnnotations` | プレビュー以上の権限を持つユーザーは、ドキュメントと画像のプレビューに注釈を付けることができます。また、すでにドキュメントに付けられている注釈も表示されます。注釈が利用可能なファイルタイプおよび注釈の種類の詳細については、注釈ページを参照してください。現在、注釈はウェブブラウザでのみ使用できます。モバイルブラウザでは、ユーザーは注釈を表示できますが、新しい注釈を作成することはできません。 |

## クラウド (雲) ゲーム

The cloud game is a widget created to prevent [clickjacking][cloud-game]. It's shown for embedded sites that aren’t partner integrations. In cloud game, user must drag a cloud to the correct location before an interaction is allowed. It makes clickjacking difficult, as the position of the cloud and its destination are randomly generated.

<ImageFrame border>

![Box Embed](./cloud-game.png)

</ImageFrame>

`postMessage()`は、埋め込みと`showCloudGame`両方のステータスを取得するためにiframeで使用されます。埋め込まれている場合、`document.hasStorageAccess()`は、BoxからCookieにアクセスできるかどうかを示します。アクセスでき、ユーザーがログイン済みの場合、クラウド (雲) ゲームが表示されます。`showCloudGame`のステータスが`false`の場合、ユーザーはログインページに誘導されます。

## カスタムロゴ

有料のBoxをお使いの場合は、ファイルのプレビューに表示されるBoxのロゴを削除できます。削除するには、**管理コンソール**の \[**Enterprise設定**]、\[**カスタム設定**] に移動し、\[**埋め込みウィジェットのカスタマイズ**] をオフに切り替えてBoxのロゴを非表示にします。

## 制限

Box Embedは、モバイルブラウザ向けには最適化されていないため、モバイルデバイス用に設計されたウェブエクスペリエンスでは使用しないでください。多くのUI Element (**ダウンロード**オプションや**印刷**オプションなど) はモバイルブラウザに表示されない可能性があります。

<!-- i18n-enable localize-links -->

[logo]: https://support.box.com/hc/ja/articles/360044193633-会社ブランドに合わせたアカウントのカスタマイズ

<!-- i18n-enable localize-links -->

[1]: e://get-files-id

[2]: e://get-folders-id

[3]: e://put-files-id--add-shared-link

[4]: e://put-folders-id--add-shared-link

[5]: https://support.box.com/hc/ja/articles/360044196413-コラボレータの権限レベルについて

[cloud-game]: https://support.box.com/hc/en-us/articles/360043691034-How-Does-Box-Prevent-Clickjacking
