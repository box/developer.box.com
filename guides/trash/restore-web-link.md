---
rank: 10
related_endpoints:
  - post_web_links_id
related_guides:
  - trash/permanently-delete-web-link
required_guides: []
related_resources:
  - web-link
category_id: trash
subcategory_id: null
is_index: false
id: trash/restore-web-link
type: guide
total_steps: 6
sibling_id: trash
parent_id: trash
next_page_id: trash/permanently-delete-web-link
previous_page_id: trash/permanently-delete-folder
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/trash/restore-web-link.md
---
# ウェブリンクの復元

ごみ箱に移動されたが削除されていないウェブリンクを復元するには、`/web_links/:web_link_id`エンドポイントに`POST`リクエストを送信します。これにより、ウェブリンクがまだ使用可能であれば元の親フォルダに戻されます。オプションとして`parent`フォルダを指定することもできます。

<Samples id="post_web_links_id">

</Samples>
