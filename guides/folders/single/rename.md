---
rank: 3
related_endpoints:
  - put_folders_id
related_guides:
  - folders/single/update
required_guides: []
related_resources:
  - folder
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/rename
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/move
previous_page_id: folders/single/update
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/rename.md
fullyTranslated: true
---
# フォルダ名の変更

Box上でフォルダの名前を変更するには、そのフォルダの新しい`name`をAPIに渡す必要があります。

<Samples id="put_folders_id" variant="rename">

</Samples>

<Message type="notice">

# 名前に関する制約事項

ファイル名にはいくつかの制約事項があります。印字不可能なASCII文字を含む名前、スラッシュおよびバックスラッシュ(`/`、`\`)を含む名前、末尾にスペースを含む名前は禁止されています。

また、`.`および`..`は予約済みの名前であるため、使用できません。

</Message>
