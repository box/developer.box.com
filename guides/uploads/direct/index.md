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

Boxにファイルをアップロードする最も簡単な方法は、直接アップロードを使用することです。直接アップロードにより、アプリケーションは1つのリクエストでファイルをアップロードできます。ファイルサイズが50 MBを超える場合は、[分割アップロードエンドポイント][cu]を使用することをお勧めします。

Boxにアップロードできるファイルサイズの上限は、アカウントの種類によって異なります。詳細については、[価格比較ページ][pcp]を参照してください。

* 個人用アカウント: 250 MB
* Starter: 2 GB
* Business: 5 GB
* Business Plus: 15 GB
* Enterprise: 50 GB
* Digital Workplace Suite: 50 GB
* Digital Workplace Global Suite: 50 GB
* Digital Business Suite: 50 GB
* Digital Business Global Suite: 50 GB
* Enterprise Plus: 150 GB

自分のアカウントのファイルサイズの上限を確認するには、Boxにログインします。右上隅の円をクリックし、ドロップダウンメニューから \[**アカウント設定**] を選択します。表示されたページで、\[**アカウントの詳細**] セクションまで下にスクロールすると、\[**最大ファイルサイズ**] が表示されています。

## アップロードドメイン

Boxへのアップロードは、通常のAPIコールとは異なるドメイン (`upload.box.com`) を介して行われます。独自のアップロードコードを記述する際は、この点に注意する必要があります。すべてのBox公式SDKでは、各APIコールに適切なドメインが選択されます。

[cu]: g://uploads/chunked

[pcp]: https://www.box.com/pricing
