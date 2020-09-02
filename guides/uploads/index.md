---
rank: 80
alias_paths: []
category_id: uploads
subcategory_id: null
is_index: true
id: uploads
type: guide
total_steps: 1
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: uploads/check
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/uploads/index.md
---
# アップロード

Box APIは、2つのファイルアップロード方法をサポートしています。[直接ファイルアップロードAPI][direct]は最大50MBのファイルをサポートしており、1回のAPIリクエストですべてのバイナリデータをBox APIに送信します。

[分割アップロードAPI][chunked]は20MB以上のファイルをサポートしており、アプリケーションではファイルを複数のパーツに分割してアップロードすることで、エラーのキャッチと個別のパーツの再送信を詳細に制御できます。

## アップロードの制限

アップロードの上限は、認証済みユーザーのアカウントの種類によって決まります。詳細については、[このトピックに関するBoxコミュニティの記事][fsizes]を参照してください。

## 事前チェック

事前チェックAPIを使用すると、アプリケーションでアップロードを開始する前にそのファイルがBoxに受け入れられるかどうかを確認できます。このAPIは、新しいファイルにも、既存ファイルの新しいバージョンのアップロードにも使用できます。

<CTA to="g://uploads/check">

事前チェックの詳細を確認する

</CTA>

## アップロードドメイン

Boxへのアップロードは、通常のAPI呼び出しとは異なるドメイン(`upload.box.com`)を介して行われます。アップロードコードを作成するときは、この点に注意する必要があります。すべてのBox SDKで、API呼び出しに適切なドメインが選択されます。

[direct]: g://uploads/direct

[chunked]: g://uploads/chunked

[fsizes]: https://community.box.com/t5/Upload-and-Download-Files-and/Understand-the-Maximum-File-Size-You-Can-Upload-to-Box/ta-p/50590
