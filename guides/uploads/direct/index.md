---
rank: 1
alias_paths: []
category_id: uploads
subcategory_id: uploads/direct
is_index: true
id: uploads/direct
type: guide
total_steps: 2
sibling_id: uploads
parent_id: uploads
next_page_id: uploads/direct/file-version
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/uploads/direct/index.md
fullyTranslated: true
---
# 直接アップロード

Boxにファイルをアップロードする最も簡単な方法は、直接アップロードを使用することです。直接アップロードにより、アプリケーションは1つのリクエストでファイルをアップロードできます。50MBを超えるファイルサイズの場合は、分割アップロードAPIの使用をお勧めします。

このAPIを介してアップロードできる最大ファイルサイズは、企業が使用するBoxのプランによって異なります。執筆時点では、以下のとおりです。

* 個人用アカウント: 250 MB
* Starter: 2 GB
* Business: 5 GB
* Business Plus: 15 GB
* Enterprise: 15 GB
* Digital Workplace Suite: 15 GB
* Digital Workplace Global Suite: 15 GB
* Digital Business Suite: 32 GB
* Digital Business Global Suite: 32 GB

## アップロードドメイン

Boxへのアップロードは、通常のAPI呼び出しとは異なるドメイン (`upload.box.com`) を介して行われます。アップロードコードを作成するときは、この点に注意する必要があります。すべてのBox SDKで、API呼び出しに適切なドメインが選択されます。
