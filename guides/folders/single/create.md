---
rank: 1
related_endpoints:
  - post_folders
related_guides:
  - folders/single/update
  - folders/single/copy
required_guides: []
related_resources:
  - folder
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/create
type: guide
total_steps: 7
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/update
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/folders/single/create.md
---
# フォルダの作成

Box上でフォルダを作成するには、新しいフォルダの`name`と、新しいフォルダの作成先になる`parent`フォルダの`id`をAPIに渡す必要があります。

<Samples id="post_folders">

</Samples>

<Message type="notice">

# 名前に関する制約事項

ファイル名にはいくつかの制約事項があります。印字不可能なASCII文字を含む名前、スラッシュおよびバックスラッシュ(`/`、`\`)を含む名前、末尾にスペースを含む名前は禁止されています。

また、`.`および`..`は予約済みの名前であるため、使用できません。

</Message>
