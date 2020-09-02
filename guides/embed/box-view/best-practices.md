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
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/box-view/best-practices.md
---
# ベストプラクティス

## アプリトークンの再生成とロールオーバー

アプリトークンは、非常に権限が強いトークンです。アプリケーションが継続して動作するよう、有効期限に近づいた場合に、アプリトークンを再生成できます(たとえば、既存のトークンを取り消して、新しいトークンを作成します)。有効期限がないトークンを使用している場合でも、アプリトークンのセキュリティが侵害されるとアプリトークンをロールオーバーすることができます。

セカンダリアプリトークンは、アプリケーション構成ページで提供され、プライマリアプリトークンとまったく同じように機能します。このトークンを使用すると、既存のトークンを再生成することにより、アプリケーションのダウンタイムなくアプリトークンをロールオーバーできます。

プライマリアプリトークンのロールオーバーでは次のワークフローに従うことをお勧めします。

* 開発者コンソールUIを使用してセカンダリアプリトークンを生成します。
* アプリケーションでセカンダリアプリトークンを置き換えて変更をリリースします。
* アプリケーションでセカンダリアプリトークンの使用が開始されたら、プライマリアプリトークンを再生成します。

## ダウンスコープトークンの使用

アプリトークンは、2つのトークン(プライマリとセカンダリ)からなるセットで、アプリケーションで管理されているコンテンツに対して高度な権限を保持しています。アプリトークンは、本来、Box Viewサービスを使用するためのアプリケーションのゲートウェイです。アプリケーションでアプリトークンを使用すると、Boxで任意のコンテンツをアップロード、ダウンロード、プレビュー、および変更できます。

アプリケーションのトークンに付与される高度な権限により、何らかの理由でトークンをクライアント側で利用できるようにする必要がある場合(Box Preview UI Elementを使用している場合など)、元のアプリトークンのダウンスコープしたバージョンを使用することを強くお勧めします。

そのプロセスについては、[ダウンスコープのガイド](guide://authentication/access-tokens/downscope)を参照してください。
