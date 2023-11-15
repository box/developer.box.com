---
related_endpoints: []
required_guides: []
category_id: metadata
subcategory_id: metadata/5-queries
is_index: false
id: metadata/queries/comparison
rank: 7
type: guide
total_steps: 6
sibling_id: metadata/queries
parent_id: metadata/queries
next_page_id: ''
previous_page_id: metadata/queries
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/5-queries/7-comparison.md
fullyTranslated: true
---
# 通常の検索との比較

一見、[メタデータクエリAPI][mdq_api]は[コンテンツの検索API][search]とよく似ていますが、動作には重要な違いがいくつかあります。大まかに言うと、メタデータクエリAPIは正確さとスループットの向上のために最適化されているのに対し、通常の検索は、人間のユーザーとの関連性のために最適化されています。

## 詳細な比較

<!-- markdownlint-disable line-length -->

|                     | [メタデータクエリAPI][mdq_api]                                                                                                                                                                 | [検索API][search]                                                                                                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  インデックスの作成対象        | This API only returns files/folders based on the values in the metadata templates that are searched.                                                                                   | This API returns files, folders and web links based on values in the item names, descriptions, contents (up to the first 10,000 bytes) as well as the associated metadata template instances.                                    |
|  インデックス作成時間         | This API returns accurate results as soon as metadata has been added, removed, updated or deleted for a file or folder.                                                                | This API is subject to a search indexing delay, which is typically 10 minutes, yet may be longer in some cases. This means that items may not be returned for more than 10 minutes after metadata has been updated.              |
|  一致                 | This API uses exact matching based on SQL conventions. Results are returned based on a specified sort order.                                                                           | This API uses fuzzy matching and may return results that vary based on string tokenization, removal of special characters, and other search concepts. Result order is based on either relevance or the updated date of the item. |
|  条件付きロジック           | This API supports multi-part boolean expressions with comparison operators.                                                                                                            | このAPIでは、メタデータによるクエリのサポートが限定的です。サポートされるのは、一度に1つのメタデータテンプレートに対するクエリのみで、単純なクエリ操作のみが可能です。                                                                                                                                            |
|  レスポンスタイプ           | This API returns both the matched file/folder and the associated metadata matched by the query.                                                                                        | This API only returns the matched item. A subsequent API call is needed to return each item's metadata.                                                                                                                          |
| スループット (Throughput) | This API is currently subject to per-user rate limits and to a 10 requests per second per enterprise limit.                                                                            | This API supports 6 searches per second per user, up to 60 searches per minute and 12 searches per second per enterprise.                                                                                                        |
|  規模                 | This API has no limit on the number of items with the specified metadata template that can be returned. It is recommended to only send queries which match no more than 2,000 results. | このAPIには、指定したメタデータテンプレートを使用して返される項目数に制限はありません。ただし、検索に一致する項目数が増えるにつれ、レスポンス時間が大幅に増大します。このAPIでは、1つのクエリに対する結果は1,000万件までという制限があります。一致する結果が50,000件以下になるクエリのみを送信することをお勧めします。                                                             |
|  スコープ               | このAPIは常に、ユーザーがアクセスできるコンテンツに制限されています。                                                                                                                                                   | このAPIは、ユーザーがアクセスできるコンテンツ (`​user_content​`) または社内のすべてのコンテンツ (`​enterprise_content​`) のいずれかに制限される場合があります。                                                                                                                         |

<!-- markdownlint-enable line-length -->

<Message warning>

一致する結果が10,000件を超える検索APIコールにより、関連性が多少変化することがあります。そのため、結果が重複する場合や結果が返されない場合があります。大規模なデータセットでは、検索を完全一致のソリューションと考えないでください。

</Message>

## シナリオ

使用するAPIを決定する際に役立つシナリオの例を以下に示します。

### 企業全体を対象にして用語を検索する

キーワード`Guarantee`に一致するコンテンツまたはメタデータを持つすべてのコンテンツを社内で検索します。

この場合は、[検索API][search]をお勧めします。このAPIでは、コンテンツとメタデータの両方で用語を照合し、対象範囲を企業全体のすべてのコンテンツに設定できます。

### 複数のメタデータ値を検索する

メタデータテンプレート`​Contract​`を使用して、金額が100,000ドルを超過し、更新日が2019年で、アカウント番号`​1234`に関連付けられていないすべてのドキュメントを検索します。

この場合は、[メタデータクエリAPI][mdq_api]をお勧めします。メタデータクエリを使用すると、数値、日付、文字列など、メタデータテンプレート内の複数のフィールドを評価するブール式を作成できます。

### メタデータ検索とコンテンツ検索を組み合わせる

メタデータテンプレート`​Contract​`を使用して、金額が100,000ドルを超過し、更新日が2019年で、タイトルや本文に「Sale」という用語が含まれておらず、アカウント番号`​1234`に関連付けられていないすべてのドキュメントを検索します。

このシナリオは、現在**サポートされていません**。現時点では、どちらのAPIも、あいまい検索 (「Sale」の検索) と、メタデータフィールドに一致するブール式の組み合わせをサポートしていません。

[mdq_api]: e://post_metadata_queries_execute_read

[search]: e://get_search
