---
rank: 3
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/deep-linking
  - /docs/deep-linking-to-box-mobile-apps
  - /best-practices/mobile-deep-linking
category_id: mobile
subcategory_id: null
is_index: false
id: mobile/mobile-deep-linking
type: guide
total_steps: 1
sibling_id: mobile
parent_id: mobile
next_page_id: mobile
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/mobile/mobile-deep-linking.md
fullyTranslated: true
---
# ディープリンク

Boxのモバイルアプリでは、フォルダオブジェクトとファイルオブジェクトへのディープリンクがサポートされています。ウェブページまたはネイティブアプリからディープリンクを使用してBoxで直接オブジェクトを開くことができます。

Boxのモバイルアプリでは、以下のURLがサポートされています。

| アプリケーション        | オブジェクトタイプ | ディープリンクのURL                            | iOSおよびAndroid |
| --------------- | --------- | -------------------------------------- | ------------- |
| **Box**         | フォルダ      | `boxapp://folder?id=[folderid]`        | バージョン3.7以降    |
|                 | ファイル      | `boxapp://file?id=[fileid]`            |               |
|                 | 共有リンク     | `boxapp://sharedlink?url=[sharedlink]` |               |
|                 |           |                                        |               |
| **Box for EMM** | フォルダ      | `boxemm://folder?id=[folderid]`        | バージョン3.7以降    |
|                 | ファイル      | `boxemm://file?id=[fileid]`            |               |
|                 | 共有リンク     | `boxemm://sharedlink?url=[sharedlink]` |               |
