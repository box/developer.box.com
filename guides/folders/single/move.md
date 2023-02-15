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

## Operation details

<!-- markdownlint-disable line-length -->

この呼び出しは同期的に復帰します。これは、すべての子孫に大量の項目が含まれているフォルダを移動する場合にも当てはまります。つまり、非常に大きいフォルダの場合は、呼び出しが完了するまでに数分または数時間かかる可能性があるほか、移動中にツリーの一部がロックされることもあります。

フォルダの移動中は、ファイルツリーの一部がロックされます。ロックされるのは、主に元のフォルダとその子孫フォルダ、および宛先フォルダです。

For the duration of the move you cannot perform other move, copy, delete, or restore operation on any of the locked folders.

## Moving a subfolder to a private folder

When you attempt to move a collaborated subfolder to a private one, you will get the [`cannot_make_collaborated_subfolder_private`](../../api-calls/permissions-and-errors/common-errors.md#400-bad-request) error. In such a case, specify the ID of the user that folder belongs to setting the `owned_by.id` parameter in the request:

<Samples id="put_folders_id" variant="move_private">

</Samples>
