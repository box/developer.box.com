---
rank: 1
related_endpoints:
  - options_files_content
  - options_files_id_content
  - post_files_content
  - post_files_id_content
related_guides:
  - uploads/direct/file
  - uploads/direct/file-version
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: uploads
subcategory_id: null
is_index: false
id: uploads/check
type: guide
total_steps: 1
sibling_id: uploads
parent_id: uploads
next_page_id: uploads
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/uploads/check.md
---
<!-- alex disable failed -->

# 事前チェック

事前チェックAPIを使用すると、アプリケーションでアップロードを開始する前にそのファイルがBoxに受け入れられるかどうかを確認できます。このAPIは、新しいファイルにも、既存ファイルの新しいバージョンのアップロードにも使用できます。

## チェックリスト

事前チェックでは、ファイルが実際にアップロードされるときと同じように、以下のすべてのチェックが実行されます。

* フォルダにアップロードするアプリケーションおよびユーザーの権限
* ファイル名の競合
* ファイルサイズの上限や制限
* フォルダおよびファイルの名前に関する制約事項
* フォルダおよびアカウントのストレージクォータ

## 新しいファイルのチェック

新しいファイルのチェックを実行するには、実際のファイルをアップロードする場合と同じパラメータ(バイナリコンテンツを除く)を使用して[`OPTIONS /files/content`](e://options_files_content) APIを呼び出してください。

<Samples id="options_files_content">

</Samples>

## 新しいファイルバージョンのチェック

新しいファイルバージョンのチェックを実行するには、実際のファイルをアップロードする場合と同じパラメータ(バイナリコンテンツを除く)を使用して[`OPTIONS /files/:id/content`](e://options_files_content) APIを呼び出してください。

<Samples id="options_files_id_content">

</Samples>

## チェックと分割アップロード

[分割アップロード][chunked]を実行する場合、[アップロードセッションの作成][chunkedsession]でも事前チェックが実行されるため、事前チェックは必須ではありません。

## 応答コード

API呼び出しで問題が検出されると、HTTP `409 Conflict`ステータスコードとともに可能性のある競合を説明するメッセージが返されます。問題が検出されなかった場合、HTTP `200 OK`ステータスコードが返され、アップロードを続行できます。

`200 OK`応答は、アップロード呼び出しが実際に成功することを保証するものではありません。事前チェックによりアップロードの失敗が99%以上削減されることが実証されていますが、ファイルのアップロード時に同時実行の問題が発生する可能性は残っています。

非常にアクティブで、クォータ制限に近づいているフォルダ、一般的なファイル名、およびアカウントの場合、事前チェックで`200 OK`が返されたとしても、実際のアップロード中に競合が発生する可能性があります。

## 応答の本文

事前チェックでは多くの場合、競合が検出されるとAPI応答で有益なデータが返されます。たとえば名前の競合が検出された場合、アプリケーションではエラー応答で返される`SHA-1`を使用して、アップロードしようとしているファイルと既存ファイルが同一であるかどうかを確認できます。

[chunked]: g://uploads/chunked

[chunkedsession]: g://uploads/chunked/create-session
