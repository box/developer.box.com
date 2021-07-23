---
related_endpoints:
  - get_search
required_guides: []
category_id: search
subcategory_id: null
is_index: false
id: search/query-operators
rank: 2
type: guide
total_steps: 9
sibling_id: search
parent_id: search
next_page_id: search/filtering
previous_page_id: search/indexing
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/2-query-operators.md
fullyTranslated: true
---
# クエリ演算子

[`GET /search`](e://get_search) APIでは、APIによって返された結果を絞り込むのに役立つさまざまなクエリ演算子がサポートされています。

これらの演算はすべて、検索の作成時に`query`パラメータに渡されます。

## 完全一致に使用する`""`

クエリを二重引用符 (`""`) で囲むと、APIによって完全一致のみが返されます。完全一致検索では、特定の文字の並びに基づいた検索結果は返されません。代わりに、フレーズ (つまり、単語の並び) に基づいた一致が返されます。

たとえば、`"Blue-Box"`を検索すると、`"blue.box"`、`"Blue Box"`、`"Blue-Box"`などの並びを含む、検索結果が返されます。つまり、`Blue`および`Box`という単語が指定した順序で連続して含まれている項目です。

## 複数用語の一致に使用する`AND`

`AND`演算子を使用すると、検索では、演算子の左側と右側にある検索用語を両方とも含む項目が返されます。

たとえば、`marketing AND BoxWorks`を検索すると、`marketing`と`BoxWorks`の両方が任意の順番でテキストに含まれている項目が返されます。テキストに`BoxWorks`のみが含まれる結果は返されません。

## いずれかの検索用語の一致に使用する`OR`

`OR`演算子を使用すると、検索では、演算子の左側と右側にある検索用語のいずれかを含む項目が返されます。

たとえば、`marketing OR BoxWorks`を検索すると、`marketing`と`BoxWorks`のいずれかがテキストに含まれている結果が返されます。サポートされている別のブール条件が使用されている場合を除き、複数語のクエリは暗黙的に`OR`として解釈されるため、この演算子の使用は必須ではありません。

## 検索用語の除外に使用する`NOT`

`NOT`演算子を使用すると、検索では、演算子に続く用語を含まない項目が返されます。

たとえば、`marketing AND NOT BoxWorks`を検索すると、テキストに`marketing`のみが含まれている結果が返されます。`BoxWorks`が含まれる結果は省略されます。

<Message warning>

小文字の演算子 (`and`、`or`および`not`) および大文字と小文字を組み合わせた演算子 (`And`、`Or`および`Not`) はサポートされていないことに注意してください。

</Message>

<CTA to="https://support.box.com/hc/en-us/articles/360043696314-Search-for-Files-Folders-and-Content">

Boxコミュニティの記事で、Boxでの検索に関する最新情報を確認する

</CTA>
