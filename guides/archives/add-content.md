---
rank: 1
related_endpoints:
  - post-archives
  - put-files-id
  - put-folders-id
related_resources:
  - archive
related_guides:
  - archives/restore-content
required_guides: []
alias_paths: []
category_id: archives
subcategory_id: null
is_index: false
id: archives/add-content
type: guide
total_steps: 3
sibling_id: archives
parent_id: archives
next_page_id: archives/restore-content
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/archives/add-content.md
fullyTranslated: true
---
# Box Archiveへのコンテンツの追加

アーカイブにコンテンツを追加するには、まず、アーカイブを作成する必要があります。まだ作成していない場合は、[アーカイブを作成][Create Archive]エンドポイントを使用します。

## アーカイブへのファイルまたはフォルダの追加

[`PUT /files/:id`][Update file] APIエンドポイントを使用してアーカイブにファイルを追加するか、[`PUT /folders/:id`][Update folder]エンドポイントを使用してフォルダを追加します。`id`パラメータは、アーカイブに追加するファイル/フォルダのIDです。追加先を指定するには、リクエスト本文内で`parent.id`[パラメータ][Update parent id of folder]を使用します。これには、アーカイブのID、またはアーカイブ内にあるフォルダのIDを指定できます。

[Create Archive]: https://developer.box.com/reference/v2025.0/post-archives/

[Update file]: e://put-files-id

[Update parent id of file]: https://developer.box.com/reference/put-files-id/#param-parent-id

[Update folder]: e://put-folders-id

[Update parent id of folder]: https://developer.box.com/reference/put-folders-id/#param-parent-id
