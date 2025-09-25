---
rank: 12
related_endpoints: []
related_guides:
  - embed/ui-elements
  - embed/ui-elements/explorer
  - embed/ui-elements/uploader
required_guides:
  - embed/ui-elements/installation
related_resources: []
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/theming-styling
type: guide
total_steps: 18
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/ui-elements-design-tokens
previous_page_id: embed/ui-elements/annotations
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/theming-styling.md
fullyTranslated: true
---
<!--alex ignore -->

# Box UI Elementsのテーマとスタイルの設定

Box UI Elementsのテーマとスタイルの設定により、企業の要件に合わせて、埋め込まれたBoxコンポーネントの外観をカスタマイズできます。

<!--alex ignore -->

<Message type="notice">

現時点では、[テーマとスタイルの設定][blog]は、コンテンツエクスプローラとコンテンツアップローダーで使用可能です。

</Message>

<!--alex enable -->

## 開始方法

選択したBoxコンポーネントをアプリケーションに追加します。デフォルトのBoxのテーマが適用されます。

## カスタマイズ

Boxでは、カスタマイズの目的で[デザイントークン][dt]を使用します。

<Message type="notice">

デザイントークンとは、色、間隔、タイポグラフィ、スケールなど、特定の視覚的な属性を格納する名前付きのエンティティです。これは、プラットフォーム、ツール、コンポーネント間でのデザインプロパティの共有を容易にするために、ハードコードされた値の代わりに使用されます。

</Message>

埋め込まれたBoxコンポーネントでは、以下の要素を変更できます。

<!--alex ignore -->

### 色

以下をカスタマイズできます。

<!--alex ignore -->

* グローバルカラーパレット - プライマリカラー、セカンダリカラー、アクセントカラーを選択します。

* 状態の色 - カーソルを合わせたとき、フォーカスしたとき、アクティブな場合、無効な場合など、状態を表す色を選択します。

* コンポーネント固有の色 - たとえば、ボタンには、種類に応じて異なる色を選択できます。
  <!--alex enable -->

* グラデーション - 背景やその他のコンポーネントとしてグラデーションを選択して調整します。

* 不透明度 - Boxのウィンドウやサイドパネルのオーバーレイ効果の不透明度を調整します。

### タイポグラフィ

以下をカスタマイズできます。

* テキストの装飾 - 下線、取り消し線、文字間隔
* 行の高さ、段落の間隔 

### 境界線、半径

以下を選択できます。

<!--alex ignore -->

* 境界線のスタイル - 幅、スタイル、色
* 角丸
  <!--alex enable -->

### 間隔

以下を選択できます。

* 全体的な間隔
* コンポーネント固有の間隔
* コンポーネント固有の位置と分布 (例: justify-content)

### 影と高さ

以下を定義できます。

* 影のプリセット
* カスタマイズした影

### インタラクティブな状態

以下をカスタマイズできます。

<!--alex ignore -->

* カーソルを合わせた状態、アクティブな状態、フォーカスした状態、無効な状態、エラー状態 - 背景色の変更などの視覚効果
* 遷移およびアニメーション
  <!--alex enable -->

### コンポーネントレベルの上書き

<!--alex ignore -->

テキスト入力、ドロップダウン、チェックボックスを独自の色でカスタマイズできます。

<!--alex enable -->

### アイコン

ボタンやドロップダウンなどのインタラクティブなアイコンのスタイルを設定します。

<Message type="notice">

ファイルアイコンやフォルダアイコンなどの非インタラクティブなアイコンをカスタムアイコンに置き換えるには、CSSでインラインSVGを使用します。非インタラクティブなアイコンの色、高さ、幅を変更するには、CSSを使用します。

</Message>

CodePenでカスタムアイコンの実装例を確認してください。

<iframe height="560" scrolling="no" title="Boxのカスタムアイコン" src="https://codepen.io/box-platform/embed/raaRqye?default-tab=html%2Cresult" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

### その他

スタイル:

* ヘルプテキストとラベル
* ツールチップ

## デモ

<iframe height="560" scrolling="no" title="Boxのテーマを使用したブランド設定" src="https://codepen.io/box-platform/embed/KwKbrPw?default-tab=html%2Cresult" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

[explorer]: g://embed/ui-elements/explorer

[uploader]: g://embed/ui-elements/uploader

[dt]: g://embed/ui-elements/ui-elements-design-tokens

[blog]: https://medium.com/@stefaniuk.olga/b4a86518d5ca
