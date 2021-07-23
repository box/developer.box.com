---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: security
subcategory_id: null
is_index: false
id: security/device-pinners
type: guide
total_steps: 1
sibling_id: security
parent_id: security
next_page_id: security
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/security/device-pinners.md
fullyTranslated: true
---
# Device Pinners

デバイスの管理と呼ばれる、モバイルデバイスまたはデスクトップデバイスからBoxにアクセスする際のセキュリティを強化するデバイス管理機能を追加しました。これは、ユーザーがBoxへのアクセスに使用するデバイス数の上限を管理者が設定できるようにし、そのBoxアカウントへのアクセスに新しいデバイスが使用されるたびに管理者とユーザーにアラートを送信するログイン追跡機能に基づいています。

デバイスの管理の詳細については、Boxの[コミュニティのドキュメント][community]を参照してください。

## API

Box APIを使用すると、デバイスピンを検査したり削除したりすることができます。

* [`GET /enterprise/:id/device_pinners`](e://get-enterprises-id-device-pinners): 会社内のすべてのデバイスピンを取得します。
* [`GET /device_pinners/:id`](e://get-device-pinners-id): 個々のデバイスピンに関する情報を取得します。
* [`DELETE /device_pinners/:id`](e://delete-device-pinners-id): 個々のデバイスピンを削除します。

[community]: https://community.box.com/t5/How-to-Guides-for-Admins/Device-Pinning-Settings/ta-p/172
