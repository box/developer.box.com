---
related_endpoints:
  - get_search
required_guides: []
category_id: search
subcategory_id: null
is_index: false
id: search/indexing
rank: 1
type: guide
total_steps: 9
sibling_id: search
parent_id: search
next_page_id: search/query-operators
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/1-indexing.md
fullyTranslated: true
---
# 検索インデックス作成

Boxは、Boxに格納されているファイルまたはフォルダの検索インデックスを保持します。ファイルまたはフォルダが変更されるたびに、これらの単語がインデックスに追加されます。検索が実行されると、APIは、検索インデックスで、クエリに一致するファイルやフォルダを探します。Box内でコンテンツが追加、更新、または削除されると、それに応じて検索インデックスが更新されます。

## 検索可能になるまでの時間

ファイルのアップロードまたは変更後、そのファイルにインデックスが完全に作成され、検索できるようになるまで時間がかかる場合があります。ほとんどの場合、新しく追加または変更されたファイルは、10分以内にBox検索で検索可能になります。ただし、場合によっては、インデックス作成時間はその時点のサービスの負荷によって決まるため、10分を超えることもあります。

<Message info>

10分経過してもインデックスが更新されない場合もあります。このような場合は、[Boxサポート][support]に問い合わせて問題を解決することをお勧めします。

</Message>

## 検索アクセス

検索結果では、認証済みユーザーがアクセスできるコンテンツ (プレビュー/表示できる項目) のみが返されます。

つまり、検索結果に表示されるためには、ユーザーが所有する項目かコラボレーションしている項目である必要があります。ユーザーが項目にアクセスできない場合や共有リンクを介して項目が共有されている場合は、その項目も検索結果に表示されません。

ただし、例外として、共有リンクを介して最近アクセスされた項目は、`include_recent_shared_links`クエリパラメータを`true`に設定することで、検索結果に含めるようリクエストすることができます。

## プレフィックス検索とワイルドカード検索

末尾のワイルドカード (プレフィックス検索とも呼ばれます) が検索結果に暗黙的に適用されているのは、テキストのインデックス作成方法が原因です。`Bo`を検索すると、タイトルに`Box`、`Boat`、または`Boxer`が含まれる項目が返されます。これは従来の検索エンジンで`Bo*`または`Bo%`を検索した結果と同じになります。Boxでは、`%ox%`のような従来のワイルドカードの表記法がサポートされていません。Boxは、タイトルのプレフィックス検索に対応していますが、本文コンテンツのプレフィックス検索、タイトルまたは本文コンテンツのサフィックス検索、タイトルまたは本文コンテンツのインフィックス (部分) 検索には対応していません。たとえば、`cal`を検索すると、`California`という**ファイル名**が一致しますが、`decal`または`recall`は一致しません。この場合、`California`、`recall`、`decal`を含め、**ファイル本文のコンテンツ**でのプレフィックス、インフィックス、またはサフィックスとは一致しません。

## ステミング

Boxの検索では、ステミングを使用して、クエリの単語をインデックスの単語と照合します。このため、同じ語幹を含む単語は、クエリ内と完全に同じ形式でなくても、結果セットに含まれる場合があります。たとえば、`run`と`running`は同じ語幹に対応するため、`running`で検索すると、タイトルに`run`を含むドキュメントが返されます。

## ファイルコンテンツの検索

ファイル内のコンテンツも、Box検索インデックス内に格納されます。以下のファイルタイプでは、コンテンツの検索が可能です。

|           |          |              |          |        |
| --------- | -------- | ------------ | -------- | ------ |
| `boxnote` | `csv`    | `doc`        | `docx`   | `gdoc` |
| `gsheet`  | `gslide` | `gslides`    | `htm`    | `html` |
| `msg`     | `odp`    | `odt`        | `ods`    | `pdf`  |
| `ppt`     | `pptx`   | `rtf`        | `tsv`    | `wpd`  |
| `xhtml`   | `xls`    | `xlsm`       | `xlsx`   | `xml`  |
| `xsd`     | `xsl`    | `as`         | `as3`    | `asm`  |
| `bat`     | `c`      | `cc`         | `cmake`  | `cpp`  |
| `cs`      | `css`    | `cxx`        | `diff`   | `erb`  |
| `groovy`  | `h`      | `haml`       | `hh`     | `java` |
| `js`      | `json`   | `less`       | `log`    | `m`    |
| `make`    | `md`     | `ml`         | `mm`     | `php`  |
| `pl`      | `plist`  | `properties` | `py`     | `rb`   |
| `rst`     | `sass`   | `scala`      | `script` | `scm`  |
| `sml`     | `sql`    | `sh`         | `txt`    | `vi`   |
| `vim`     | `webdoc` | `yaml`       |          |        |

## ドキュメントあたりのインデックスが作成されるテキスト

Boxの検索インデックスには、Businessレベル以上のアカウントの場合、ドキュメントあたり最大10,000バイト (英語で約10,000文字) が格納されます。この量は、言語、Boxのインデックスの作成方法、およびドキュメントの種類によって、ドキュメントごとに異なる場合があります。

<Message warning>

全文検索が無効になっている企業 (たとえば、[KeySafe][keysafe]をご利用のお客様) の場合、ドキュメント内の文字を検索できません。全文検索が無効の状態でドキュメントを調べる必要がある場合は、アカウントチームまでお問い合わせください。

</Message>

## OCRのサポート

現在、Boxではドキュメントに対してOCR処理を実行しません。

## ドキュメントのバージョン

検索では、最新バージョンのドキュメントのコンテンツに対してのみインデックスを作成するため、古いドキュメントからの関連性のない多数の検索結果を選別する必要はありません。最新バージョン以外のドキュメントを照会する場合は、検索を使用できません。

## 言語のサポート

<!--alex ignore chinese-->

Boxの検索では、中国語、英語、フランス語、ドイツ語、イタリア語、日本語、およびスペイン語がサポートされています。Boxでは、1つのドキュメント内での複数言語のインデックス作成はサポートされていません。

## ごみ箱

ごみ箱の検索は、このAPIで`trash_content`クエリパラメータを使用して実行できます。

<!-- i18n-enable localize-links -->

<CTA to="https://support.box.com/hc/en-us/articles/360043696314-Search-for-Files-Folders-and-Content">

Boxコミュニティの記事で、Boxでの検索に関する最新情報を確認する

</CTA>

<!-- i18n-disable localize-links -->

[support]: p://support

<!-- i18n-enable localize-links -->

[keysafe]: https://www.box.com/ja-jp/security/keysafe

<!-- i18n-disable localize-links -->