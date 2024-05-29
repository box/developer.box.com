---
rank: 11
related_endpoints:
  - get_zip_downloads_id_content
  - get_zip_downloads_id_status
  - post_zip_downloads
related_guides: []
required_guides: []
alias_paths: []
category_id: downloads
subcategory_id: null
is_index: false
id: downloads/zip-archive
type: guide
total_steps: 7
sibling_id: downloads
parent_id: downloads
next_page_id: downloads
previous_page_id: downloads/in-browser
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/downloads/zip-archive.md
fullyTranslated: true
---
# ZIPアーカイブのダウンロード

フォルダ内のすべてのファイル、またはフォルダ構造全体をダウンロードするには、ZIPアーカイブを作成してダウンロードする必要があります。

## ZIPアーカイブの作成

最初に、ファイルまたはフォルダ構造を含むZIPアーカイブを作成する必要があります。アカウントのアップロード上限に達しない限り、最大10,000のファイルまたはフォルダIDを含めることができます。

<Samples id="post_zip_downloads">

</Samples>

レスポンスは以下のようになります。

```json
{
  "download_url": "https://dl.boxcloud.com/2.0/zip_downloads/25gvaXcIE4QJlinNiw2oHAQ==ZFs3Q2Xpd7pKBz7OyzXNrUaoW3aJxQRN5znAvyM-KpdEEPdWcQDKU-Dl85Ew/content",
  "status_url": "https://api.box.com/2.0/zip_downloads/25gvaXcIE4QJlinNiw2oHAQ==ZFs3Q2Xpd7pKBz7OyzXNrUaoW3aJxQRN5znAvyM-KpdEEPdWcQDKU-Dl85Ew/status",
  "expires_at": "2023-02-28T10:23:54Z",
  "name_conflicts": []
}

```

## ZIPダウンロードIDの抽出

ZIPアーカイブをダウンロードするには、ZIPダウンロードIDが必要です。これは、アーカイブの作成時に返されたレスポンスで確認できます。

`status_url`に移動し、`zip_downloads`と`content`の間にあるIDをコピーします。

```json
25gvaXcIE4QJlinNiw2oHAQ==ZFs3Q2Xpd7pKBz7OyzXNrUaoW3aJxQRN5znAvyM-KpdEEPdWcQDKU-Dl85Ew

```

<Message type="notice">

ダウンロードURLは、`expires_at`パラメータで指定された日時まで有効です。

</Message>

## ファイルのダウンロード

以下のサンプルのように、ファイルの場所のURLにダウンロードIDを配置して、適切なファイルを指します。

<Samples id="get_zip_downloads_id_content">

</Samples>

ダウンロードに時間がかかる場合は、[ステータスのエンドポイント](e://get-zip-downloads-id-status)を使用してダウンロードのステータスを監視できます。これにより、ダウンロードの進行状況のほか、スキップされた可能性のある項目の数を確認できます。

<Samples id="get_zip_downloads_id_status">

</Samples>

<Message notice>

SDKを使用してフォルダのコンテンツをダウンロードする場合は、[こちら](g://downloads/folder)のガイドに従ってください。

</Message>
