---
rank: 2
related_endpoints:
  - put_files_id
related_guides:
  - shared-links/create
  - shared-links/remove
  - shared-links/find-for-item
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: shared-links
subcategory_id: null
is_index: false
id: shared-links/update
type: guide
total_steps: 4
sibling_id: shared-links
parent_id: shared-links
next_page_id: shared-links/find-for-item
previous_page_id: shared-links/create
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/shared-links/update.md
fullyTranslated: true
---
# 共有リンクの更新

[ファイルを更新](endpoint://put_files_id)または[フォルダを更新](endpoint://put_folders_id)エンドポイントを呼び出し、リソースのIDを指定して新しい共有リンク値で更新することで、共有リンクを更新できます。使用できるすべてのパラメータについては、[共有リンクの作成](guide://shared-links/create)ガイドを参照してください。

<Message type="notice">

共有リンクの設定を更新すると、新しい設定はすでにそのURLを知っているすべてのユーザーに適用されます。

</Message>

## ファイルの共有リンクの更新

ファイルの共有リンクを更新するには、ファイルのIDとオプションの共有リンクパラメータを指定します。

<Samples id="put_files_id_shared_link_create">

</Samples>

## フォルダの共有リンクの更新

フォルダの共有リンクを更新するには、フォルダのIDとオプションの共有リンクパラメータを指定します。

<Samples id="put_folders_id_shared_link_create">

</Samples>
