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

Box Embed is a HTML-based framework that makes it possible to embed the entire Box Web App experience anywhere people work. Box Embed provides the ability to upload, search, comment, share, tag, and edit files using Box Edit.

## 構成

To create the widget, you need to set the folder for sharing and you need to have at least **Viewer** [permissions][5].

### ウェブから構成

To grab your Box Embed code from the Box web app:

* navigate to the folder of choice,
* click on the ellipsis beside the folder,
* go to **More Actions**,
* click **Embed Widget**.

<ImageFrame border>

![Box Embed](./box-embed-new.png)

</ImageFrame>

The next screen allows you to configure the size, sorting, and view of the widget. You can also choose to hide the folder path, and to expand the navigation & sidebar by default.

<ImageFrame border>

![Box Embedの構成](./embed-configuration.png)

</ImageFrame>

Once you are done customizing the embed widget, you need to copy and paste the embed code into your site or web application.

## プログラムを使用して構成

Box Embedをさらにカスタマイズする場合は、プログラムを使用してカスタマイズできます。埋め込みのスニペットの形式は次のとおりです。

<!-- markdownlint-disable line-length -->

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

<!-- markdownlint-enable line-length -->

### 共有リンクの値の検索

プログラムを使用して埋め込み`iframe`を構築するには、まず、共有リンクの値を生成または検索します。この値を検索する1つの方法として、Boxウェブアプリを使用します。

<ImageFrame border>

![Boxの共有](./embed-share.png)

</ImageFrame>

Another way is to create a shared link with API using the [`PUT /files/:file_id`][3] or [`PUT /files/:file_id`][4].

Then you can find this shared link value using the [`GET /files/:id`][1] or [`GET /folders/:id`][2] endpoint and passing in the query parameter `fields=shared_link`.

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

You can also set the page to Root Folder/All Files page. Set the URL to `/folder/0` instead of the share link: `<iframe src=“https://app.box.com/embed/folder/0”….></iframe>`

### パラメータ

次に、表示のカスタマイズオプションを選択します。構成可能なパラメータ (省略可) のリストを以下に示します。

<!-- markdownlint-disable line-length -->

|                       |                                                                |
| --------------------- | -------------------------------------------------------------- |
| `view`                | ファイルまたはフォルダの表示方法の種類。`list` (デフォルト) または`icon`を指定できます。           |
| `sortColumn`          | ファイルまたはフォルダを並べ替える順番。`name`、`date` (デフォルト)、または、`size`を指定できます。   |
| `sortDirection`       | ファイルまたはフォルダの並べ替えの方向。`ASC` (デフォルト) または`DESC`を指定できます。            |
| `showParentPath`      | フレームのヘッダーにフォルダパスを非表示または表示します。`true`または`false` (デフォルト) を指定できます。 |
| `showItemFeedActions` | ファイルのコメントまたはタスクを非表示または表示します。true (デフォルト) またはfalseを指定できます。      |

<!-- markdownlint-enable line-length -->

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

<!-- markdownlint-disable line-length -->

|                   |                                                                                                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showDownload`    | ファイルをダウンロードするための権限がビューアーにある場合は、埋め込まれたヘッダーバーにダウンロードボタンが表示されます。また、印刷とダウンロードが同じ権限で管理されているため、ドキュメントのファイルタイプには印刷ボタンも表示されます。デフォルトでは`false`になります。                                                          |
| `showAnnotations` | プレビュー以上の権限を持つユーザーは、ドキュメントと画像のプレビューに注釈を付けることができます。また、すでにドキュメントに付けられている注釈も表示されます。注釈が利用可能なファイルタイプおよび注釈の種類の詳細については、注釈ページを参照してください。現在、注釈はウェブブラウザでのみ使用できます。モバイルブラウザでは、ユーザーは注釈を表示できますが、新しい注釈を作成することはできません。 |

<!-- markdownlint-enable line-length -->

## Cloud Game

The cloud game is a widget created to prevent clickjacking. It's shown for embedded sites that aren’t partner integrations. In cloud game, user must drag a cloud to the correct location before an interaction is allowed. It makes clickjacking difficult, as the position of the cloud and its destination are randomly generated.

<ImageFrame border>

![Box Embed](./cloud-game.png)

</ImageFrame>

`postMessage()` is used on the iframe to retrieve both the embed and the `showCloudGame` status. If embedded, `document.hasStorageAccess()` shows if Box has access to cookies. If yes and the user is logged in, the cloud game is displayed. If the `showCloudGame` status is `false`, user is navigated to the login page.

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
