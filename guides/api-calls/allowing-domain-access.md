---
rank: 5
related_endpoints:
  - get_files_id_content
  - post_files_content
  - post_files_id_content
related_guides: []
required_guides: []
alias_paths:
  - /docs/domain-whitelisting
  - /guides/api-calls/domain-whitelisting
category_id: api-calls
subcategory_id: null
is_index: false
id: api-calls/allowing-domain-access
type: guide
total_steps: 8
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/suppress-notifications
previous_page_id: api-calls/ensure-consistency
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/api-calls/allowing-domain-access.md
---
# ドメインへのアクセスの許可

Box APIを使用する際に重要なのは、必要に応じてアプリケーションとユーザーが以下のドメインにアクセスできることです。

## ファイルのプレビュー

ファイルプレビュー機能を有効にするために、アプリケーションは、Boxコンテンツ配信ネットワーク(CDN)からJavaScriptファイルを読み込むことが必要になる場合があります。このファイルは、以下のドメインから読み込まれます。

* `api.box.com`
* `boxcdn.net`
* `boxcloud.com`
* `dl2.boxcloud.com`～`dl20.boxcloud.com`

## ファイルのダウンロード

以下のAPIドメインは、Box APIを介してファイルをダウンロードする目的で使用されます。

* `api.box.com` - ダウンロードするファイルを最初にリクエストする
* `dl.boxcloud.com` - 認証済みユーザー用のファイルを実際にダウンロードする
* `public.boxcloud.com` - 認証されていないユーザー用のファイルを実際にダウンロードする

<Message type="warning">

これらのドメインへのアクセス権限の確認は、ファイルをダウンロードするための最初のステップにすぎません。ファイルをダウンロードするには、ユーザーは適切なアクセス権限を持ち、必要に応じて完全に認証されている必要があります。

</Message>

## ファイルのアップロード

以下のAPIドメインは、Box APIを介してファイルをアップロードする目的で使用されます。

* `api.box.com` - ファイルのアップロードを開始する
* `upload.app.box.com`と`upload.box.com` - Boxにファイルをアップロードする
