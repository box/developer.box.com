---
rank: 8
related_endpoints:
  - post_folder_locks
related_guides:
  - folders/single/get-locks
  - folders/single/delete-lock
required_guides: []
related_resources:
  - folder_lock
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/create-lock
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/get-locks
previous_page_id: folders/single/change-owner
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/create-lock.md
fullyTranslated: true
---
# フォルダのロックの作成

Box内のフォルダにロックを作成するには、ロックを適用するフォルダの`id`をBoxのAPIに指定します。必要に応じて、フォルダのロックとともに適用する特定の`locked_operations`を指定できます。

<Samples id="post_folder_locks">

</Samples>

<Message type="warning">

# ロックされる操作の設定

フォルダロックリクエストに`locked_operations`オブジェクトが含まれる場合は、`move`と`delete`の両方を`true`に設定する必要があります。このオブジェクトでロック操作を1つだけ指定した場合または両方の値を`true`以外に設定した場合は、エラーが発生します。これらのオプションは、今後追加の操作を可能にするために実装されています。

</Message>

## ロック操作

フォルダに適用できるロック操作には、`move`と`delete`の2つがあります。

`move`ロックを使用すると、ロックが適用されている間、フォルダが新しい場所または新しい所有者に移動されなくなります。

`delete`ロックを使用すると、ロックが適用されている間、フォルダが削除されなくなります。
