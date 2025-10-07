---
rank: 2
related_endpoints:
  - put_folders_id
related_guides:
  - folders/single/update
required_guides:
  - folders/single/create
related_resources:
  - folder
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/update
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/rename
previous_page_id: folders/single/create
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/update.md
fullyTranslated: true
---
# フォルダの更新

Box上でフォルダを更新するには、次のAPIを呼び出す必要があります。

<Samples id="put_folders_id">

</Samples>

## 名前に関する制約事項

フォルダ名にはいくつかの制限があります。印字不可能なASCII文字、スラッシュ、バックスラッシュ (`/`、`\`) を含む名前のほか、末尾にスペースを含む名前は禁止されています。

また、`.`および`..`は予約済みの名前であるため、使用できません。

## タイムアウト

この操作のタイムアウトは600秒です。`HTTP 503`が返されるとこの操作は完了します。
