---
rank: 3
related_guides:
  - embed/box-view/create-preview
required_guides:
  - embed/box-view/setup
alias_paths: []
category_id: embed
subcategory_id: embed/box-view
is_index: false
id: embed/box-view/upload-file
type: guide
total_steps: 5
sibling_id: embed/box-view
parent_id: embed/box-view
next_page_id: embed/box-view/best-practices
previous_page_id: embed/box-view/create-preview
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/box-view/upload-file.md
---
# ファイルのアップロード

ファイルに対してプレビューの埋め込みリンクを生成するには、そのファイルをBoxにアップロードして変換する必要があります。変換はアップロード時(ほとんどのドキュメントタイプの場合)または最初のプレビュー時(動画と3Dの場合)に自動的に開始されるため、ファイルがアップロードされた後、ユーザーが変換のために明示的な操作を行う必要はありません。いずれの場合も、変換は1ファイルにつき1回だけ開始され、元のファイルがBoxに保存されている間は、生成されたアセットを使用できます。

## ファイルのアップロード

[Box SDK](pages://sdks-and-tools/)を使用してファイルをアップロードするか、または直接APIを使用してファイルをアップロードするには、[アプリケーションの設定](guide://embed/box-view/setup)中に生成されたクライアントIDとアプリトークンを使用してアプリケーションを認証する必要があります。

<CTA to="guide://authentication/app-token/">

アプリケーションの認証

</CTA>

認証済みクライアントが作成されたら、そのクライアントを使用して、変換するファイルをアプリトークンアプリケーションに直接アップロードできます。

<CTA to="guide://uploads/direct/file/">

Boxへのファイルのアップロード

</CTA>
