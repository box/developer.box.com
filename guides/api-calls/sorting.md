---
rank: 3
related_endpoints:
  - get_folders_id_items
related_guides: []
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: null
is_index: false
id: api-calls/sorting
type: guide
total_steps: 8
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/ensure-consistency
previous_page_id: api-calls/status-codes
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/api-calls/sorting.md
---
# 応答の並べ替え

APIから項目のコレクションが返される場合は、API応答の並べ替えがサポートされることがよくあります。

`sort`および`direction`クエリパラメータを使用すると、昇順または降順のいずれかでコレクションを並べ替えることができます。

```curl
curl https://api.box.com/2.0/folders/0/items?sort=size&direction=DESC \
    -H "authorization: Bearer ACCESS_TOKEN"
```

<Message type="warning">

コレクションを返すすべてのAPIエンドポイントが並べ替えをサポートしているわけではありません。特にマーカーベースのページ割りを使用するエンドポイントでは、結果の並べ替えがサポートされないことがよくあります。

</Message>

## 並べ替え基準

並べ替えの基準となるフィールドは`sort`クエリパラメータによって定義されます。この値に使用できるオプションについては、APIエンドポイントのドキュメントを確認してください。

<Message type="notice">

一部のAPIでは、`sort`フィールドが項目の並べ替えの2番目の基準になっています。たとえば、[`GET /folders/:id/items`][get_folders_id_items]エンドポイントの場合、結果は常に、まずその種類で並べ替えられてから、他の基準で並べ替えられます。

</Message>

## 並べ替えの方向

並べ替えの方向では、`ASC` (昇順の場合)と`DESC` (降順の場合)という2つの値がサポートされます。

[get_folders_id_items]: endpoint://get_folders_id_items
