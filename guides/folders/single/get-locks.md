---
rank: 9
related_endpoints:
  - get_folder_locks
related_guides:
  - folders/single/create-lock
  - folders/single/delete-lock
required_guides: []
related_resources:
  - folder_locks
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/get-locks
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/delete-lock
previous_page_id: folders/single/create-lock
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/get-locks.md
fullyTranslated: true
---
# フォルダのロックの取得

Box内のフォルダに対する現在のロックのリストを取得するには、`folder_id`クエリ文字列パラメータとしてフォルダのIDを指定して`GET /folder_locks/` APIを呼び出します。

<Samples id="get_folder_locks">

</Samples>

## フォルダID

フォルダの`id`を確認するには、ウェブアプリでフォルダにアクセスして、URLから`id`をコピーします。たとえば、URLが`https://*.app.box.com/folder/123`の場合、`folder_id`は`123`です。
