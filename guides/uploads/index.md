---
rank: 260
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
  https://github.com/box/developer.box.com/blob/main/content/guides/uploads/index.md
fullyTranslated: true
---
# アップロード

Box APIは、2つのファイルアップロード方法をサポートしています。[直接ファイルアップロードAPI][direct]は最大50 MBのファイルをサポートしており、1回のAPIリクエストですべてのバイナリデータをBox APIに送信します。

[分割アップロードAPI][chunked]は20 MB以上のファイルをサポートしており、アプリケーションではファイルを複数のパーツに分割してアップロードすることで、エラーのキャッチと個別のパーツの再送信を詳細に制御できます。

<Message type="tip">

To upload files to the Archive folder, you need to first enable the [Global Content Manager][GCM] (GCM) scope in the Developer Console.

</Message>

## アップロードの制限

アップロードの上限は、認証済みユーザーのアカウントの種類によって決まります。詳細については、このトピックに関する[Boxコミュニティの記事][fsizes]を参照してください。

## 事前チェック

事前チェックAPIを使用すると、アプリケーションでアップロードを開始する前にそのファイルがBoxに受け入れられるかどうかを確認できます。このAPIは、新しいファイルにも、既存ファイルの新しいバージョンのアップロードにも使用できます。

<CTA to="g://uploads/check">

事前チェックの詳細を確認する

</CTA>

## アップロードドメイン

Boxへのアップロードは、通常のAPIコールとは異なるドメイン (`upload.box.com`) を介して行われます。アップロードコードを作成するときは、この点に注意する必要があります。すべてのBox SDKで、APIコールに適切なドメインが選択されます。

[direct]: g://uploads/direct

[chunked]: g://uploads/chunked

[GCM]: g://api-calls/permissions-and-errors/scopes

<!-- i18n-enable localize-links -->

[fsizes]: https://support.box.com/hc/ja/articles/360043697314-Boxにアップロードできる最大ファイルサイズ

<!-- i18n-disable localize-links -->
