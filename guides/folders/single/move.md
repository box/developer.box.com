---
rank: 4
related_endpoints:
  - put_folders_id
related_guides:
  - folders/single/create
  - folders/single/update
  - folders/single/delete
required_guides: []
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/move
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/copy
previous_page_id: folders/single/rename
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/move.md
fullyTranslated: true
---
# フォルダの移動

フォルダを移動するには、その親フォルダのIDを更新します。

<Samples id="put_folders_id" variant="move">

</Samples>

<Message warning>

この呼び出しは同期的に復帰します。これは、すべての子孫に大量の項目が含まれているフォルダを移動する場合にも当てはまります。つまり、非常に大きいフォルダの場合は、呼び出しが完了するまでに数分または数時間かかる可能性があるほか、移動中にツリーの一部がロックされることもあります。

フォルダの移動中は、ファイルツリーの一部がロックされます。ロックされるのは、主に元のフォルダとその子孫フォルダ、および宛先フォルダです。

移動操作の間は、ロックされているどのフォルダに対しても、それ以外の移動、コピー、削除、または復元操作を実行できません。

</Message>
