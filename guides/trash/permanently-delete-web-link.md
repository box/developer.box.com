---
rank: 11
related_endpoints:
  - delete_web_links
  - delete_web_links_trash
related_guides:
  - trash/restore-web-link
required_guides: []
related_resources:
  - web-link
category_id: trash
subcategory_id: null
is_index: false
id: trash/permanently-delete-web-link
type: guide
total_steps: 6
sibling_id: trash
parent_id: trash
next_page_id: trash
previous_page_id: trash/restore-web-link
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/trash/permanently-delete-web-link.md
fullyTranslated: true
---
# ウェブリンクを完全に削除

ごみ箱に移動されたウェブリンクは、デフォルトで30日間ごみ箱に保持された後で削除されます。BusinessアカウントまたはEnterpriseアカウントの管理者は、削除までの期間を変更できます。削除までの期間が経過する前にごみ箱からウェブリンクを完全に削除する場合は、ごみ箱に移動されたウェブリンクの`ID`を使用して`DELETE`リクエストを`/web_links/:web_link_id/trash`に送信します。

<Samples id="delete_web_links_id_trash">

</Samples>
