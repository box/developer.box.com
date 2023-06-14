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
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/box-view/upload-file.md
fullyTranslated: true
---
# ファイルのアップロード

ファイルのプレビューの埋め込みリンクを生成するには、そのファイルをBoxにアップロードする必要があります。ほとんどのファイルタイプでは、アップロード時に自動的に変換が開始されます。ただし、動画と3Dファイルについては、最初のプレビュー時に変換が開始されます。変換を開始するために、ユーザーが明示的な操作を行う必要はありません。いずれの場合も、変換は1ファイルにつき1回だけ開始され、生成されたアセットは元のファイルがBoxに保存されている間は使用できます。

## ファイルのアップロード

[Box SDK](pages://sdks-and-tools/)を使用してファイルをアップロードするか、またはAPIを使用して直接ファイルをアップロードするには、[アプリケーションの設定](guide://embed/box-view/setup)中に生成されたクライアントIDとアプリトークンを使用してアプリケーションを認証する必要があります。

<CTA to="guide://authentication/app-token">

アプリケーションの認証

</CTA>

認証済みクライアントが作成されたら、そのクライアントを使用して、変換するファイルをアプリトークンアプリケーションに直接アップロードできます。

<CTA to="guide://uploads/direct/file">

Boxへのファイルのアップロード

</CTA>
