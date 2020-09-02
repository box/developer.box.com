---
rank: 2
related_guides:
  - embed/box-view/setup
  - embed/box-view/faq
alias_paths:
  - /docs/box-view
  - /docs/getting-started-box-view
  - /docs/get-started-with-the-view-api
  - /docs/viewing-your-first-document
  - /docs/getting-started-with-new-box-view
  - /docs/advanced-file-viewers
  - /page/vr
category_id: embed
subcategory_id: embed/box-view
is_index: true
id: embed/box-view
type: guide
total_steps: 5
sibling_id: embed
parent_id: embed
next_page_id: embed/box-view/upload-file
previous_page_id: embed/box-view/setup
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/box-view/index.md
---
# Box View

Box Viewは、ウェブアプリとモバイルアプリで忠実度の高いインタラクティブなファイルビューアーを表示するための埋め込み可能なサービスです。

## 機能

### 任意のファイルの表示

標準の`<iframe>`またはJavaScript SDKを使用して、ドキュメント、画像、動画、360度動画および画像、3Dモデル、その他の多くのファイルをあらゆるウェブアプリまたはモバイルアプリに埋め込みます。

### 最適化された表示機能

JavaScript SDKにより、さまざまなウェブまたはモバイルデバイスですばやく軽快にレンダリングできるように、ファイルに適したビューアーが動的に選択されます。

### 使いやすさ

セキュアなAPIを介してBoxにファイルをアップロードすると、アプリケーションのユーザーインターフェイスに埋め込み可能なHTML5スニペットが配置されます。さらに、ファイルはBoxに安全に保存され、管理できるようになります。

### 状況に応じたコラボレーション

エンドユーザーが注釈を使用して、ドキュメント、プレゼンテーション、および画像のコラボレーションやマークアップを実行できるようにします。ユーザーは、テキストをハイライトしたり、ファイルレンダリングの特定の領域にコメントを付けたりできます。

## Box Viewのしくみ

1. セキュアなアップロードAPIを使用してBoxにファイルをアップロードします。コンテンツはすべて、ウイルススキャンと256ビット暗号化を備えたBoxのセキュアなクラウドストレージインフラストラクチャに保存されます。
2. ファイルはアップロード時にHTML5互換のアセットに変換されます。これらのアセットは、明瞭にすばやくレンダリングするよう作られています。
3. ファイルレンダリングにアクセスするために埋め込み可能なURLがリクエストされます。プレビューは、`<iframe>` URLまたはJavaScript SDKを使用してアプリケーションに直接埋め込むことができます。

## Box Content Previewによる操作性のカスタマイズ

[Box Content Preview](guide://embed/ui-elements/preview)を使用すると、変換されたファイルに対するクライアント側の操作をカスタマイズできます。

現在Box Viewを使用できるのは、既存のBox View APIおよびCrocodocを利用するお客様のみです。詳細については、[FAQ](guide://embed/box-view/faq)を参照してください。
