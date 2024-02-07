---
rank: 1
alias_paths:
  - /docs/box-ui-elements
  - /page/box-ui-element
  - /docs/ui-elements
  - /box-ui-kit
  - /docs/box-ui-kit
category_id: embed
subcategory_id: embed/ui-elements
is_index: true
id: embed/ui-elements
type: guide
total_steps: 14
sibling_id: embed
parent_id: embed
next_page_id: embed/ui-elements/browser
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/index.md
fullyTranslated: true
---
# UI Element

Box UI Elementsは、開発者がメインのBoxウェブアプリの要素を独自のアプリケーションに追加できるようにする、組み込みのUIコンポーネントです。これを使用すると、Boxに保存されているコンテンツを参照、アップロード、プレビュー、選択することができます。また、これは、Reactコンポーネントとしても、フレームワークに依存しないJavaScriptライブラリとしても使用できます。

## 利用可能なElement

Boxには、アプリケーションでファイルやフォルダに共通するユーザーエクスペリエンスを実現するためにUI Elementがいくつか用意されています。

使用可能なUI Elementは以下のとおりです。

* [コンテンツエクスプローラ][explorer] - ユーザーがファイルやフォルダを検索および参照できるようにします。
* [Content Open With][openwith] - ユーザーが埋め込みのドロップダウンを使用して、Boxに保存されているコンテンツをパートナーアプリケーションで開けるようにします。

<Message type="warning">

日本時間2021年12月22日をもって、新規のお客様に対する`OpenWith` UI Elementのサポートは終了しました。

</Message>

* [Content Picker][picker] - ユーザーがBoxアカウントからファイルやフォルダを選択できるようにします。
* [コンテンツプレビュー][preview] - ドキュメント、画像、音声、動画などに使用するインタラクティブなビューアーを表示します。
* [Content Sidebar][sidebar] - ファイルメタデータとアクティビティフィード情報用のサイドバーを表示します。
* [コンテンツアップローダー][uploader] - ユーザーがファイルを選択するかドラッグアンドドロップしてアップロードできるようにします。

UI Elementは、単独で使用することも、ファイルをアップロードしてから表示するように、組み合わせてコンテンツに関する共通のユーザーフローを構築することもできます。

[explorer]: g://embed/ui-elements/explorer

[openwith]: g://embed/ui-elements/open-with

[picker]: g://embed/ui-elements/picker

[preview]: g://embed/ui-elements/preview

[sidebar]: g://embed/ui-elements/sidebar

[uploader]: g://embed/ui-elements/uploader
