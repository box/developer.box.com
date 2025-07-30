---
rank: 2
related_endpoints:
  - put-files-id
  - put-folders-id
related_resources:
  - archive
related_guides:
  - archives/add-content
required_guides: []
alias_paths: []
category_id: archives
subcategory_id: null
is_index: false
id: archives/restore-content
type: guide
total_steps: 3
sibling_id: archives
parent_id: archives
next_page_id: archives/supported-apis
previous_page_id: archives/add-content
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/archives/restore-content.md
fullyTranslated: true
---
# Box Archiveからのコンテンツの復元

このガイドでは、誤ってアーカイブしたコンテンツを復元する方法について説明します。

## アーカイブからのファイルまたはフォルダの復元

[`PUT /files/:id`][Update file] APIエンドポイントを使用してアーカイブからファイルを復元するか、[`PUT /folders/:id`][Update folder]エンドポイントを使用してアーカイブからフォルダを復元します。`id`パラメータは、アーカイブから復元するファイル/フォルダのIDです。復元先を指定するには、リクエスト本文内で`parent.id`[パラメータ][Update parent id of folder]を使用します。これは、ファイル/フォルダの復元先となるフォルダ (任意のユーザーが所有している可能性があります) のIDです。

ファイル/フォルダをユーザーのルートフォルダに復元するには、`parent.id`の値として`0`を使用します。さらに、リクエスト本文で`parent.user_id`[パラメータ][Update parent user id of folder]にユーザーのIDを渡します。

[Update file]: e://put-files-id

[Update parent id of file]: https://developer.box.com/reference/put-files-id/#param-parent-id

[Update parent user id of file]: https://developer.box.com/reference/put-files-id/#param-parent-user_id

[Update folder]: e://put-folders-id

[Update parent id of folder]: https://developer.box.com/reference/put-folders-id/#param-parent-id

[Update parent user id of folder]: https://developer.box.com/reference/put-folders-id/#param-parent-user_id
