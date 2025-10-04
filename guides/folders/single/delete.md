---
rank: 6
related_endpoints:
  - delete_folders_id
related_guides:
  - folders/single/create
required_guides:
  - folders/single/create
alias_paths: []
related_resources:
  - folder
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/delete
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/change-owner
previous_page_id: folders/single/copy
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/delete.md
fullyTranslated: true
---
# フォルダの削除

Box上でフォルダを削除するには、削除するフォルダのIDをAPIに渡す必要があります。

<Samples id="delete_folders_id">

</Samples>

## 空でないフォルダの削除

フォルダが空でない場合、このAPIはエラーを返します。フォルダを削除するときに`recursive`パラメータを渡すと、空でないフォルダも強制的に削除できます。その場合は、サブフォルダを含め、フォルダ内のすべての項目が削除されます。

## フォルダのロック

フォルダがBoxから完全に削除されるか、ごみ箱に移動されるかは、会社の設定に応じて決定されます。

この操作の進行中は、ファイルツリーの一部がロックされます。ロックされるのは、主に元のフォルダとその子孫フォルダすべてです。

操作の進行中は、ロックされているどのフォルダに対しても、それ以外の移動、コピー、削除、または復元操作を実行できません。

## タイムアウト

Timeout for this operation is 600 seconds. The operation will complete after a `HTTP 503` has been returned.
