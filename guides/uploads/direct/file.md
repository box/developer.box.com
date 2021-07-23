---
rank: 1
related_endpoints:
  - options_files_content
  - post_files_content
related_guides: []
related_pages: []
required_guides:
  - uploads/check
related_resources: []
alias_paths: []
category_id: uploads
subcategory_id: uploads/direct
is_index: false
id: uploads/direct/file
type: guide
total_steps: 2
sibling_id: uploads/direct
parent_id: uploads/direct
next_page_id: uploads/direct/file-version
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/uploads/direct/file.md
fullyTranslated: true
---
# 新しいファイルのアップロード

直接アップロードによってBoxにファイルをアップロードするには、ファイルのコンテンツ、目的のファイル名、フォルダIDを使用して、[`POST /files/content`][upload] APIにAPI呼び出しを実行します。

<Samples id="post_files_content">

</Samples>

<Message>

# 事前チェック

アップロードしたファイルが拒否されることによる時間や帯域幅の無駄を防ぐため、ファイルをアップロードする前に[事前チェック][preflight]を実行することをお勧めします。

</Message>

## リクエスト形式

このAPIのリクエスト本文には、`multipart/form-data`のコンテンツタイプが使用されます。これを使用して、ファイル属性とファイルの実際のコンテンツの2つの部分を送信します。

最初の部分は`attributes`と呼ばれ、ファイル名や親フォルダの`id`など、ファイルに関する情報を含むJSONオブジェクトが含まれています。

以下の例では、ユーザーのルートフォルダに`test.txt`をアップロードしています。

```sh
POST /api/2.0/files/content HTTP/1.1
Host: upload.box.com
Authorization: Bearer [ACCESS_TOKEN]
content-length: 343
content-type: multipart/form-data; boundary=------------------------9fd09388d840fef1
--------------------------9fd09388d840fef1
content-disposition: form-data; name="attributes"

{"name":"test.txt", "parent":{"id":"0"}}
--------------------------9fd09388d840fef1
content-disposition: form-data; name="file"; filename="test.txt"
content-type: text/plain

Test file text.
--------------------------9fd09388d840fef1--
```

<Message warning>

マルチパート本文の`attributes` JSON部分は、マルチパートフォームデータの`file` 部分の前に置く必要があります。この順番を間違えると、APIがHTTP `400`ステータスコードとエラーコード`metadata_after_file_contents`を返します。

</Message>

## オプション

ファイルのアップロード時に使用できるすべてのパラメータの詳細については、[このAPI呼び出しに関するリファレンスドキュメント][upload]を参照してください。パラメータには、設定することで転送中のファイルの破損を防ぐ`content-md5`や、アップロード時間とは異なる時間をファイル作成時間として明示的に指定できる機能が含まれます。

## 制約事項

直接アップロードできるファイルサイズの上限は50MBです。ファイルがこれより大きい場合は、[分割アップロードAPI][chunked]を使用してください。

アップロードの上限は、認証済みユーザーのアカウントの種類によって決まります。詳細については、[このトピックに関するBoxコミュニティの記事][fsizes]を参照してください。

[preflight]: g://uploads/check

[chunked]: g://uploads/chunked

[upload]: e://post_files_content

[fsizes]: https://community.box.com/t5/Upload-and-Download-Files-and/Understand-the-Maximum-File-Size-You-Can-Upload-to-Box/ta-p/50590
