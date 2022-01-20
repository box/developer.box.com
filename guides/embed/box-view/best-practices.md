---
rank: 4
related_guides:
  - embed/box-view/setup
  - embed/box-view/upload-file
  - embed/box-view/create-preview
required_guides: []
alias_paths: []
category_id: embed
subcategory_id: embed/box-view
is_index: false
id: embed/box-view/best-practices
type: guide
total_steps: 5
sibling_id: embed/box-view
parent_id: embed/box-view
next_page_id: embed/box-view/faq
previous_page_id: embed/box-view/upload-file
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/box-view/best-practices.md
fullyTranslated: true
---
# ベストプラクティス

## アプリトークンの循環

[アプリトークンの循環][rotate]に関するガイドを参照してください。

## ダウンスコープトークンの使用

アプリトークンは、2つのトークン (プライマリとセカンダリ) からなるセットで、アプリケーションによって管理されているコンテンツに対する高度な権限を保持しています。アプリトークンは、任意のBoxコンテンツをアップロード、ダウンロード、プレビュー、および変更するために、アプリケーションで使用できます。

何らかの理由でトークンをクライアント側で利用できるようにする必要がある場合は、元のアプリトークンの[ダウンスコープ][downscoped]したバージョンを使用することを強くお勧めします。これは、必要に応じて、これらのトークンに高度な権限が付与されるためです。これが必要になる例として、Box Preview UI Elementを使用している場合が挙げられます。

[rotate]: g://authentication/app-token/rollover

[downscoped]: g://authentication/tokens/downscope
