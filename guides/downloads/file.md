---
rank: 1
related_endpoints:
  - get_files_id_content
related_guides:
  - uploads/direct/file
required_guides: []
related_resources: []
alias_paths: []
category_id: downloads
subcategory_id: null
is_index: false
id: downloads/file
type: guide
total_steps: 6
sibling_id: downloads
parent_id: downloads
next_page_id: downloads/file-version
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/downloads/file.md
---
# ファイルのダウンロード

ファイルをダウンロードするには、取得するコンテンツが含まれるファイルのIDを[`GET /files/:id/content`][api]に渡します。

<Samples id="get_files_id_content">

</Samples>

## ダウンロードURL

SDKを使用しない場合、このAPI呼び出しでは、`HTTP 302 Found`ステータスコードとともに、次のようなダウンロードURLへのリンクを含む`location`ヘッダーが返されます。

```sh
https://dl.boxcloud.com/d/1/[long-random-string]/download
```

cURLで`-L`フラグを使用することで、自動的にこのリダイレクトに従うことができます。

<Message>

SDKでは、結果として、バイナリデータがダウンロードされます。APIでは、ダウンロードURLが`location`ヘッダーを介して返されます。

また、SDKを介して[ダウンロードURLを取得][downloadurl]することも可能です。

</Message>

## ダウンロードURLの有効期限

このダウンロードURLは、ファイルのダウンロードを許可するためにユーザーのブラウザに渡すことができますが、このURLが期限切れになると、その後でダウンロードするには再度リクエストする必要があります。

## ファイルの準備ができていない

ファイルをダウンロードする準備がまだできていない場合は、クライアントがファイルをダウンロードできるようになるまでの秒数を示す`retry-after`ヘッダーが返されます。

この応答は、ダウンロードリクエストの直前にファイルがアップロードされた場合に発生することがあります。

[api]: e://get_files_id_content

[downloadurl]: g://downloads/get-url
