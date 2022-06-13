---
rank: 4
related_endpoints:
  - put_files_id
  - put_folders_id
  - put_web_links_id
related_guides:
  - shared-links/create-or-update
  - shared-links/find-for-item
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: shared-links
subcategory_id: null
is_index: false
id: shared-links/remove
type: guide
total_steps: 4
sibling_id: shared-links
parent_id: shared-links
next_page_id: shared-links/permissions
previous_page_id: shared-links/find-for-item
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/shared-links/remove.md
fullyTranslated: true
---
# 共有リンクの削除

[ファイルを更新](endpoint://put_files_id)、[フォルダを更新](endpoint://put_folders_id)、または[ウェブリンクを更新](endpoint://put_web_links_id)エンドポイントを呼び出し、`shared_link`値を`null`に設定することで、リソースから共有リンクを削除できます。

<Message type="warning">

共有リンクを削除して新しい共有リンクを作成すると、新しい共有リンクのURLは以前と異なるものになり、以前のURLしか知らないユーザーはリソースにアクセスできなくなります。

</Message>

## ファイルの共有リンクの削除

ファイルの共有リンクを削除するには、ファイルのIDを指定し、`shared_link`フィールドを`null`に設定します。

<Samples id="put_files_id" variant="remove_shared_link">

</Samples>

## フォルダの共有リンクの削除

フォルダの共有リンクを削除するには、フォルダのIDを指定し、`shared_link`フィールドを`null`に設定します。

<Samples id="put_folders_id" variant="remove_shared_link">

</Samples>

## ウェブリンクの共有リンクの削除

ウェブリンクの共有リンクを削除するには、ウェブリンクのIDを指定し、`shared_link`フィールドを`null`に設定します。

<Samples id="put_web_links_id" variant="remove_shared_link">

</Samples>
