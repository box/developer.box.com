---
type: quick-start
hide_step_number: true
hide_in_page_nav: true
icon: FiSearch
category_id: search
subcategory_id: search/quick-start
is_index: true
id: search/quick-start
rank: 0
total_steps: 5
sibling_id: search
parent_id: search
next_page_id: search/quick-start/create-metadata-template
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/quick-start/0-index.md
fullyTranslated: true
---
# メタデータによるコンテンツの検索

BoxメタデータクエリAPIを使用すると、適用したカスタムメタデータ値に厳密に基づき、プログラムによってBoxコンテンツを検索できます。

メタデータクエリの構造は、SQLクエリの構造に似ていて、ブール演算子 (AND、OR、NOTなど) のほか、比較演算子または範囲演算子 (等しい、より大きい、より小さいなど) も使用できます。

メタデータクエリAPIのメリットを以下に示します。

* インデックス作成による遅延がない (つまり、メタデータの作成、更新、削除の直後にクエリを実行)
* 1つ以上のフィールドを基準に並べ替え順を指定できる
* クエリ可能な文字数に制限がない
* クエリで項目プロパティやメタデータインスタンスが返される

<ImageFrame center>

![メタデータ](./images/metadata.png)

</ImageFrame>

## 概要

このガイドでは、以下の手順を説明します。

1. [メタデータテンプレートを作成する][stepone]
2. APIを使用して[メタデータテンプレートに関する情報を確認する][steptwo]
3. 1つ以上のファイルに[メタデータテンプレートを適用する][stepthree]
4. 手順3のコンテンツを取得する[メタデータクエリAPIコールを作成する][stepfour]

<Next>

開始する準備ができました

</Next>

[stepone]: g://search/quick-start/create-metadata-template/

[steptwo]: g://search/quick-start/locate-template-info/

[stepthree]: g://search/quick-start/apply-template-to-file/

[stepfour]: g://search/quick-start/metadata-query-api/
