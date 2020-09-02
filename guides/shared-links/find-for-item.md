---
rank: 3
related_endpoints:
  - get_shared_items
related_guides:
  - shared-links/update
  - shared-links/remove
  - shared-links/create
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: shared-links
subcategory_id: null
is_index: false
id: shared-links/find-for-item
type: guide
total_steps: 4
sibling_id: shared-links
parent_id: shared-links
next_page_id: shared-links/remove
previous_page_id: shared-links/update
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/shared-links/find-for-item.md
---
# 共有リンクの項目の検索

[共有リンクの項目を検索](endpoint://get_shared_items)APIは、`BoxApi`ヘッダーを使用して共有リンクを入力として受け取り、その共有リンクが設定されているファイルまたはフォルダオブジェクトを返します。

共有リンクに関連付けられているファイルオブジェクトまたはフォルダオブジェクトを取得するには、リクエストの際に共有リンクの完全なURLを指定します。

<Samples id="get_shared_items">

</Samples>

<Message note>

共有リンクがフォルダに対するものである場合、このAPIの応答には、そのフォルダ内のネストされた項目のリストが含まれないことに注意してください。

フォルダ内の項目をさらにトラバースするには、同じ`BoxApi`ヘッダーを使用して、[ネストされたフォルダ情報を取得する](e://get-folders-id)、[これらのフォルダ内の項目をリストする](e://get-folders-id-items)、[ネストされたファイル情報を取得する](e://get-files-id)、または[ファイルをダウンロード](e://get-files-id-content)してください。

</Message>
