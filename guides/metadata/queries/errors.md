---
related_endpoints:
  - post_metadata_queries_execute_read
category_id: metadata
subcategory_id: metadata/5-queries
is_index: false
id: metadata/queries/errors
rank: 4
type: guide
total_steps: 7
sibling_id: metadata/queries
parent_id: metadata/queries
next_page_id: metadata/queries
previous_page_id: metadata/queries/pagination
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/5-queries/4-errors.md
---
# 一般的なエラー

メタデータクエリAPIのエラーのほとんどは、[他のAPIによって返されるエラーに似ています][errors]。ただし、現在、一部の正しくないクライアントリクエストでは、適切な`400 Bad Request`エラーではなく、サーバー側のエラーとともに、`5XX`の範囲のHTTPステータスコードが返される場合があります。

これは既知の問題であり、近日中に解決される予定です。

## テンプレートキーとスコープが正しくない

一般的なエラーとして、リクエストの`from`値に誤った値が使用されると、`HTTP 4XX`の範囲のさまざまなエラーが生じる可能性があります。

正しい`from`値を使用しないと、APIは検索対象のテンプレートを認識できません。`from`の値は、`scope.templateKey`の形式にする必要があります。

この場合、`scope`は会社のテンプレートのスコープで、`enterprise_123456`のようになります。ここでの数値は会社のIDです。`global`スコープや短縮形の`enterprise`スコープなど、この形式に一致しないスコープではエラーが返されます。

`templateKey`は、社内のメタデータテンプレートの一意のキーです。指定したキーを持つテンプレートが存在しない場合、またはキーが存在しないのにそのキーが誤った会社で使用されている場合は、このAPIによってエラーが返されます。

<Message notice>

\[`GET /metadata_templates/enterprise`[get-templates][get-templates]] APIを使用すると、`scope`と`templateKey`を含む、社内で使用できるすべての会社のリストを取得できます。

</Message>

## `query_param`に値がない

一般的なエラーとして、`query_params`オブジェクトにクエリ引数を含めるのを忘れると、`unexpected_json_type`というコードとともに`HTTP 400`エラーが返されます。

`query_params`にすべての引数が存在しないと、APIはリクエストを完全なクエリにコンパイルできません。

たとえば、検索`query`が`amount >= :value AND status = :status`のようになっているとします。コロン`:`で始まる引数はすべて、`query_params`に存在する必要があります。この場合、クエリパラメータは次のようになります。これらの値のいずれかを忘れると、エラーが発生します。

```json
"query_params": {
  "value": 100,
  "status": "active"
}
```

<Message notice>

各引数の名前は開発者の好みに合わせて構成できるため、フィールドキーと一致させる必要はありません。必要なのは、先頭に`:`を付けることだけです。

</Message>

## 検索インデックスがない

規模を考慮したことにより、メタデータテンプレートが10,000を超えるファイルまたはフォルダに適用されている場合、メタデータクエリによって`HTTP 403`エラーが返される可能性があります。検索インデックスを作成すると、特定の検索クエリでこのエラーを解決することができます。

メタデータインスタンスの数が10,000個を超えると、`​use_index​`パラメータに適切な**インデックス**が含まれていないメタデータクエリリクエストではエラーが発生します。このエラーは呼び出し元に対して、`​use_index​`パラメータの引数として適切なインデックスを指定するよう通知します。

<CTA to="g://metadata/queries/indexes">

インデックスの作成と使用の詳細を確認する

</CTA>

## `ancestor_folder_id`がない

一般的なエラーとして、リクエストに`ancestor_folder_id`を指定し忘れると、`bad_request`というコードとともに`HTTP 400`エラーが返されます。

`ancestor_folder_id`値がないと、APIは、検索対象の結果が含まれているフォルダを認識できません。よくわからない場合は、値`0`を使用すると、ユーザーのルートフォルダを指定できます。

[errors]: g://api-calls/permissions-and-errors/common-errors

[get-templates]: r://get-metadata-templates-enterprise
