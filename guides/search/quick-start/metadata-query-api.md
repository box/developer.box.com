---
type: quick-start
hide_in_page_nav: true
category_id: search
subcategory_id: search/quick-start
is_index: false
id: search/quick-start/metadata-query-api
rank: 4
total_steps: 5
sibling_id: search/quick-start
parent_id: search/quick-start
next_page_id: search/quick-start/next-steps
previous_page_id: search/quick-start/apply-template-to-file
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/quick-start/4-metadata-query-api.md
fullyTranslated: true
---
# メタデータクエリAPIの使用

最後に、[メタデータクエリAPIコール][mq]を作成します。このAPIコールの本文の例を以下に示します。

```json
{
  "from": "enterprise_22201764.contact_role",
  "query": "departments = :departments",
  "query_params": {"departments": "legal"},
  "ancestor_folder_id": "0",
  "fields": ["id"]
}

```

このAPIコールでは、以下の条件を満たすファイルIDが返されます。

* Contact Roleテンプレートが適用されている
* departmentsの値がlegalである
* ルートフォルダの下のいずれかの場所にある (「0」は`ancestor_folder_id`であるため)

以下に示すように、この結果、呼び出しは成功し、手順2でテンプレートを追加したファイルに関する情報が表示されます。

<ImageFrame center>

![検索クエリの結果](./images/query-result.png)

</ImageFrame>

<Next>

検索クエリを使用してコンテンツが見つかりました

</Next>

[mq]: e://post-metadata-queries-execute-read/
