---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/deep-linking
  - /docs/deep-linking-to-box-mobile-apps
category_id: best-practices
subcategory_id: null
is_index: false
id: best-practices/mobile-deep-linking
type: guide
total_steps: 3
sibling_id: best-practices
parent_id: best-practices
next_page_id: best-practices/branding-guidelines
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/best-practices/mobile-deep-linking.md
fullyTranslated: true
---
# モバイルディープリンク

Boxのモバイルアプリでは、フォルダオブジェクトとファイルオブジェクトへのディープリンクがサポートされています。ウェブページまたはネイティブアプリからディープリンクを使用してBoxで直接オブジェクトを開くことができます。

Boxのモバイルアプリでは、以下のURLがサポートされています。

<!-- markdownlint-disable line-length -->

| アプリケーション        | オブジェクトタイプ | ディープリンクのURL                            | iOSおよびAndroid |
| --------------- | --------- | -------------------------------------- | ------------- |
| **Box**         | フォルダ      | `boxapp://folder?id=[folderid]`        | バージョン3.7以降    |
|                 | ファイル      | `boxapp://file?id=[fileid]`            |               |
|                 | 共有リンク     | `boxapp://sharedlink?url=[sharedlink]` |               |
|                 |           |                                        |               |
| **Box for EMM** | フォルダ      | `boxemm://folder?id=[folderid]`        | バージョン3.7以降    |
|                 | ファイル      | `boxemm://file?id=[fileid]`            |               |
|                 | 共有リンク     | `boxemm://sharedlink?url=[sharedlink]` |               |

<!-- markdownlint-enable line-length -->
