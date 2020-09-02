---
rank: 3
related_endpoints:
  - get_files_id_content
related_guides:
  - downloads/file
  - uploads/direct/file
required_guides:
  - shared-links/find-for-item
related_resources: []
alias_paths: []
category_id: downloads
subcategory_id: null
is_index: false
id: downloads/shared-link
type: guide
total_steps: 6
sibling_id: downloads
parent_id: downloads
next_page_id: downloads/folder
previous_page_id: downloads/file-version
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/downloads/shared-link.md
---
# 共有リンクのダウンロード

[共有リンク][shared-link]のファイルをダウンロードするには、最初にリンクの[ファイルを確認][get-file]します。

ファイルIDが確認されたら、`BoxAPI`ヘッダーをAPIに渡して、ファイルをダウンロードできます。

<Samples id="get_files_id_content" variant="for_shared_file">

</Samples>

<Message warning>

項目の共有リンクを取得する場合、ユーザーには少なくとも、その項目に対するビューアーレベルのアクセス権限が必要です。

</Message>

[shared-link]: g://shared-links

[get-file]: g://shared-links/find-for-item
