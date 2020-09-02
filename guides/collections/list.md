---
rank: 1
related_endpoints:
  - get_collections
related_guides: []
required_guides: []
related_resources:
  - collection
alias_paths: []
category_id: collections
subcategory_id: null
is_index: false
id: collections/list
type: guide
total_steps: 4
sibling_id: collections
parent_id: collections
next_page_id: collections/list-items
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/collections/list.md
---
# ユーザーのコレクションのリストの取得

ユーザーのすべてのコレクションのリストを取得するには、[`GET
/collections`](e://get_collections) APIを呼び出します。

<Samples id="get_collections">

</Samples>

<Message warning>

APIを介して使用できるコレクションは「Favorites」コレクションのみです。このコレクションのIDはユーザーごとに異なります。

</Message>

## Favoritesコレクション

現在APIを介して項目を追加および削除できるコレクションは「Favorites」コレクションのみです。

FavoritesコレクションのIDはユーザーごとに異なります。ユーザーのお気に入りのコレクションIDを確認するには、ユーザーの全コレクションのリストを取得し、`collection_type`が`favorites`のコレクションを探します。

```json
{
    "entries": [
        {
            "collection_type": "favorites",
            "id": "12345678",
            "name": "Favorites",
            "type": "collection"
        }
    ],
    "limit": 100,
    "offset": 0,
    "total_count": 1
}
```
