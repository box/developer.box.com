---
rank: 12
related_endpoints: []
related_guides:
  - embed/ui-elements
  - embed/ui-elements/theming-styling
required_guides:
  - embed/ui-elements/installation
related_resources: []
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/ui-elements-design-tokens
type: guide
total_steps: 17
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/access
previous_page_id: embed/ui-elements/logo
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/ui-elements-design-tokens.md
fullyTranslated: true
---
# UI Elementsのデザイントークン

[テーマとスタイルの設定][ts]のために使用できるすべてのデザイントークンを表に示します。実装のためのわかりやすい指針となる、デフォルト値と説明も記載されています。

## トークンの構造

コンテンツエクスプローラでテーマオブジェクトにトークンを指定する方法として、トークンのフルネームを使用したフラットな構造と、短縮した名前を使用した入れ子構造の2つがあります。後者を使用すると、トークンをグループ化できるため、カスタマイズがわかりやすくなりますが、どちらも結果は同じです。

### 例

フラットな構造:

```js
const theme = {
    tokens: {
        "body-default-font-size": "14px",
        "body-default-font-weight": "400"
        "body-default-text-decoration": "none",
        "body-default-bold-line-height": "20px",
    }
};

```

入れ子構造:

```js
const theme = {
    tokens: {
        Body: {
            Default: {
                "font-size": "14px",
                "font-weight": "400",
                "text-decoration": "none",
            }
            "Default Bold": {
                "line-height": "20px",
            }
        }
    }
};

```

<!--alex ignore -->

## 境界線の色

<Message type="notice">

16進カラー、RGB、特定のブラウザに依存しないカラー名など、任意のCSSカラー値を渡すことができます。

</Message>

| トークン                                    | デフォルト値    | 説明                                    |
| --------------------------------------- | --------- | ------------------------------------- |
| `border-checkbox-border`                | `#6f6f6f` | チェックボックスのデフォルトの境界線の色。                 |
| `border-checkbox-border-hover`          | `#4e4e4e` | チェックボックスにカーソルを合わせたときの境界線の色。           |
| `border-checkbox-border-selected`       | `#0061d5` | オンにしたチェックボックスの境界線の色。                  |
| `border-checkbox-border-selected-hover` | `#2079e3` | オンにしたチェックボックスにカーソルを合わせたときの境界線の色。      |
| `border-cta-border-outline`             | `#000000` | 背景が透明のセカンダリボタンの境界線。                   |
| `border-cta-border-outline-disabled`    | `#646464` | 無効なアウトラインボタンの境界線。                     |
| `border-cta-border-outline-hover`       | `#000000` | カーソルを合わせたときのアウトラインボタンの境界線。            |
| `border-cta-border-outline-pressed`     | `#000000` | 押したときのアウトラインボタンの境界線。                  |
| `border-cta-border-secondary`           | `#bcbcbc` | セカンダリボタンの境界線。                         |
| `border-cta-border-secondary-disabled`  | `#e8e8e8` | 無効なセカンダリボタンの境界線。                      |
| `border-cta-border-secondary-hover`     | `#bcbcbc` | カーソルを合わせたときのセカンダリボタンの境界線。             |
| `border-cta-border-secondary-pressed`   | `#bcbcbc` | 押したときのセカンダリボタンの境界線。                   |
| `border-divider-border`                 | `#e8e8e8` | 水平方向の行区切り記号。                          |
| `border-dropdown-border`                | `#bcbcbc` | ドロップダウンメニューの境界線。                      |
| `border-gridthumbnail-border`           | `#e8e8e8` | グリッドビューにおける項目 (ファイル/フォルダ) のサムネイルの境界線。 |
| `border-input-border`                   | `#909090` | テキスト入力の境界線。                           |
| `border-input-border-error`             | `#ed3757` | エラーが発生しているテキスト入力の境界線。                 |
| `border-input-border-focus`             | `#2486fc` | フォーカスされたテキスト入力の境界線。                   |
| `border-input-border-hover`             | `#6f6f6f` | カーソルを合わせたときのテキスト入力の境界線。               |
| `border-search-border`                  | `#f4f4f4` | 検索入力の境界線。                             |
| `border-search-border-hover`            | `#6f6f6f` | カーソルを合わせたときの検索入力の境界線。                 |
| `border-switch-border`                  | `#bcbcbc` | 切り替えスイッチの境界線。                         |
| `border-switch-border-hover`            | `#bcbcbc` | カーソルを合わせたときの切り替えスイッチの境界線。             |
| `border-tooltip-border-error`           | `#f69bab` | エラーのツールチップの境界線。                       |

<!--alex ignore -->

## アイコンの色

<!--alex ignore -->

<Message type="notice">

ボタンやドロップダウンなどのインタラクティブなアイコンのスタイルのみを設定できます。

</Message>

| トークン                    | デフォルト値    | 説明                      |
| ----------------------- | --------- | ----------------------- |
| `icon-cta-icon`         | `#6f6f6f` | ボタンのアイコンのデフォルトの色。       |
| `icon-cta-icon-hover`   | `#222222` | カーソルを合わせたときのボタンのアイコンの色。 |
| `icon-cta-icon-pressed` | `#222222` | 押したときのボタンのアイコンの色。       |

<!--alex ignore -->

## アウトラインの色

<!--alex ignore -->

| トークン                     | デフォルト値    | 説明                      |
| ------------------------ | --------- | ----------------------- |
| `outline-focus-on-dark`  | `#ffffff` | 背景が暗い場合のフォーカスアウトラインの色。  |
| `outline-focus-on-light` | `#2486fc` | 背景が明るい場合のフォーカスアウトラインの色。 |

<!--alex ignore -->

## 表面色

<!--alex ignore -->

| トークン                                       | デフォルト値                | 説明                             |
| ------------------------------------------ | --------------------- | ------------------------------ |
| `surface-checkbox-surface`                 | `#ffffff`             | チェックボックスの背景色。                  |
| `surface-checkbox-surface-hover`           | `#ffffff`             | カーソルを合わせたときのチェックボックスの背景色。      |
| `surface-checkbox-surface-selected`        | `#0061d5`             | オンにしたチェックボックスの背景色。             |
| `surface-checkbox-surface-selected-hover`  | `#2079e3`             | カーソルを合わせたときのオンにしたチェックボックスの背景色。 |
| `surface-cta-surface-icon`                 | `rgba(0, 0, 0, 0)`    | アイコンボタンの背景。                    |
| `surface-cta-surface-icon-disabled`        | `rgba(0, 0, 0, 0)`    | 無効なアイコンボタンの背景。                 |
| `surface-cta-surface-icon-hover`           | `rgba(0, 0, 0, 0.04)` | カーソルを合わせたときのアイコンボタンの背景。        |
| `surface-cta-surface-icon-pressed`         | `rgba(0, 0, 0, 0.08)` | 押したときのアイコンボタンの背景。              |
| `surface-cta-surface-outline`              | `rgba(0, 0, 0, 0)`    | 背景が透明のセカンダリボタンの背景。             |
| `surface-cta-surface-outline-hover`        | `rgba(0, 0, 0, 0.04)` | カーソルを合わせたときのアウトラインボタンの背景。      |
| `surface-cta-surface-outline-pressed`      | `rgba(0, 0, 0, 0.08)` | 押したときのアウトラインボタンの背景。            |
| `surface-cta-surface-secondary`            | `#ffffff`             | セカンダリボタンの背景。                   |
| `surface-cta-surface-secondary-hover`      | `#f4f4f4`             | カーソルを合わせたときのセカンダリボタンの背景。       |
| `surface-cta-surface-secondary-pressed`    | `#e8e8e8`             | 押したときのセカンダリボタンの背景。             |
| `surface-cta-surface-tertiary`             | `#ffffff`             | リンク形式のボタンの背景。                  |
| `surface-cta-surface-tertiary-hover`       | `#f4f4f4`             | カーソルを合わせたときのリンク形式のボタンの背景。      |
| `surface-cta-surface-tertiary-pressed`     | `#e8e8e8`             | 押したときのリンク形式のボタンの背景。            |
| `surface-dropdown-surface`                 | `#ffffff`             | ドロップダウンメニューの背景。                |
| `surface-dropdown-surface-error`           | `#ffffff`             | エラーが発生しているドロップダウンメニューの背景。      |
| `surface-dropdown-surface-focus`           | `#ffffff`             | フォーカスされたドロップダウンメニューの背景。        |
| `surface-dropdown-surface-hover`           | `#ffffff`             | カーソルを合わせたときのドロップダウンメニューの背景。    |
| `surface-illustration-surface-box-neutral` | `#0061d5`             | イラスト (詳細なアイコン) の色。             |
| `surface-input-surface`                    | `#ffffff`             | テキスト入力の背景。                     |
| `surface-input-surface-error`              | `#ffffff`             | エラーが発生しているテキスト入力の背景。           |
| `surface-input-surface-focus`              | `#ffffff`             | フォーカスされたテキスト入力の背景。             |
| `surface-input-surface-hover`              | `#ffffff`             | カーソルを合わせたときのテキスト入力の背景。         |
| `surface-menu-surface`                     | `#ffffff`             | ドロップダウンメニューオプションの背景。           |
| `surface-menu-surface-focus`               | `#f4f4f4`             | フォーカスしたメニュー項目の背景。              |
| `surface-menu-surface-hover`               | `#f4f4f4`             | カーソルを合わせたときのメニュー項目の背景。         |
| `surface-search-surface`                   | `#f4f4f4`             | 検索入力の背景。                       |
| `surface-search-surface-focused`           | `#ffffff`             | フォーカスされた検索入力の背景。               |
| `surface-search-surface-hover`             | `#fbfbfb`             | カーソルを合わせたときの検索入力の背景。           |
| `surface-sliderthumb-surface`              | `#0061d5`             | 範囲スライダのつまみの色。                  |
| `surface-sliderthumb-surface-hover`        | `#2486fc`             | カーソルを合わせたときの範囲スライダのつまみの色。      |
| `slidertrack-surface`                      | `#6f6f6f`             | 範囲スライダのトラックの色。                 |
| `surface-surface`                          | `#ffffff`             | 一般的な背景色。                       |
| `surface-surface-brand`                    | `#0061d5`             | プライマリボタンの背景。                   |
| `surface-surface-brand-disabled`           | `#0061d5`             | 無効なプライマリボタンの背景。                |
| `surface-surface-brand-hover`              | `#006ae9`             | カーソルを合わせたときのプライマリボタンの背景。       |
| `surface-surface-brand-pressed`            | `#004eac`             | 押したときのプライマリボタンの背景。             |
| `surface-switch-surface`                   | `#ffffff`             | 切り替えスイッチの背景。                   |
| `surface-switch-surface-off`               | `#d3d3d3`             | オフの状態の切り替えスイッチの背景。             |
| `surface-switch-surface-on`                | `#0061d5`             | オンの状態の切り替えスイッチの背景。             |
| `surface-tooltip-surface`                  | `#4e4e4e`             | ツールチップの背景。                     |
| `surface-tooltip-surface-error`            | `#fdebee`             | エラーのツールチップの背景。                 |

<!--alex ignore -->

## テキストの色

<!--alex ignore -->

| トークン                                 | デフォルト値    | 説明                       |
| ------------------------------------ | --------- | ------------------------ |
| `text-cta-link`                      | `#0061d5` | ハイパーリンクの色。               |
| `text-cta-link-disabled`             | `#b2cff2` | 無効なハイパーリンクの色。            |
| `text-cta-link-hover`                | `#1d6bca` | カーソルを合わせたときのハイパーリンクの色。   |
| `text-cta-link-pressed`              | `#2486fc` | 押したときのハイパーリンクの色。         |
| `text-text-error-on-light`           | `#d5324e` | 背景が明るい場合のエラーテキストの色。      |
| `text-text-on-dark`                  | `#ffffff` | 背景が暗い場合のテキストの色。          |
| `text-text-on-light`                 | `#222222` | 背景が明るい場合のプライマリテキストの色。    |
| `text-text-on-light-secondary`       | `#6f6f6f` | 背景が明るい場合のセカンダリテキストの色。    |
| `text-text-on-light-secondary-hover` | `#4e4e4e` | カーソルを合わせたときのセカンダリテキストの色。 |

## タイポグラフィのトークン

<Message type="notice">

表内のコメントは、ルートフォントサイズの16ピクセルに基づいて計算されたピクセル数を示しています。

</Message>

| トークン                                    | デフォルト値                               | 説明                       |
| --------------------------------------- | ------------------------------------ | ------------------------ |
| `body-default-font-family`              | `Lato, "Helvetica Neue", sans-serif` | 本文テキストのフォントファミリ。         |
| `body-default-font-size`                | `0.875rem`                           | 本文テキストのフォントサイズ。          |
| `body-default-font-weight`              | `400`                                | 本文テキストのフォントの太さ。          |
| `body-default-letter-spacing`           | `0.01875rem`                         | 本文テキストの文字間隔。             |
| `body-default-line-height`              | `1.25rem`                            | 本文テキストの行の高さ。             |
| `body-default-text-decoration`          | `none`                               | 本文テキストの装飾。               |
| `body-default-bold-font-family`         | `Lato, "Helvetica Neue", sans-serif` | 本文テキスト (太字) のフォントファミリ。   |
| `body-default-bold-font-size`           | `0.875rem`                           | 本文テキスト (太字) のフォントサイズ。    |
| `body-default-bold-font-weight`         | `700`                                | 本文テキスト (太字) のフォントの太さ。    |
| `body-default-bold-letter-spacing`      | `0.01875rem`                         | 本文テキスト (太字) の文字間隔。       |
| `body-default-bold-line-height`         | `1.25rem`                            | 本文テキスト (太字) の行の高さ。       |
| `body-default-bold-text-decoration`     | `none`                               | 本文テキスト (太字) の装飾。         |
| `body-default-semibold-font-family`     | `Lato, "Helvetica Neue", sans-serif` | 本文テキスト (半太字) のフォントファミリ。  |
| `body-default-semibold-font-size`       | `0.875rem`                           | 本文テキスト (半太字) のフォントサイズ。   |
| `body-default-semibold-font-weight`     | `600`                                | 本文テキスト (半太字) のフォントの太さ。   |
| `body-default-semibold-letter-spacing`  | `0.01875rem`                         | 本文テキスト (半太字) の文字間隔。      |
| `body-default-semibold-line-height`     | `1.25rem`                            | 本文テキスト (半太字) の行の高さ。      |
| `body-default-semibold-text-decoration` | `none`                               | 本文テキスト (半太字) の装飾。        |
| `body-large-font-family`                | `Lato, "Helvetica Neue", sans-serif` | 本文テキスト (大) のフォントファミリ。    |
| `body-large-font-size`                  | `1rem`                               | 本文テキスト (大) のフォントサイズ。     |
| `body-large-font-weight`                | `400`                                | 本文テキスト (大) のフォントの太さ。     |
| `body-large-letter-spacing`             | `0.01875rem`                         | 本文テキスト (大) の文字間隔。        |
| `body-large-line-height`                | `1.5rem`                             | 本文テキスト (大) の行の高さ。        |
| `body-large-text-decoration`            | `none`                               | 本文テキスト (大) の装飾。          |
| `body-large-bold-font-family`           | `Lato, "Helvetica Neue", sans-serif` | 本文テキスト (大、太字) のフォントファミリ。 |
| `body-large-bold-font-size`             | `1rem`                               | 本文テキスト (大、太字) のフォントサイズ。  |
| `body-large-bold-font-weight`           | `700`                                | 本文テキスト (大、太字) のフォントの太さ。  |
| `body-large-bold-letter-spacing`        | `0.01875rem`                         | 本文テキスト (大、太字) の文字間隔。     |
| `body-large-bold-line-height`           | `1.5rem`                             | 本文テキスト (大、太字) の行の高さ。     |
| `body-large-bold-text-decoration`       | `none`                               | 本文テキスト (大、太字) の装飾。       |
| `caption-bold-font-family`              | `Lato, "Helvetica Neue", sans-serif` | キャプション (太字) のフォントファミリ。   |
| `caption-bold-font-size`                | `0.75rem`                            | キャプション (太字) のフォントサイズ。    |
| `caption-bold-font-weight`              | `700`                                | キャプション (太字) のフォントの太さ。    |
| `caption-bold-letter-spacing`           | `0.01875rem`                         | キャプション (太字) の文字間隔。       |
| `caption-bold-line-height`              | `0.875rem`                           | キャプション (太字) の行の高さ。       |
| `caption-bold-text-decoration`          | `none`                               | キャプション (太字) のテキストの装飾。    |
| `caption-default-font-family`           | `Lato, "Helvetica Neue", sans-serif` | キャプションのフォントファミリ。         |
| `caption-default-font-size`             | `0.75rem`                            | キャプションのフォントサイズ。          |
| `caption-default-font-weight`           | `400`                                | キャプションのフォントの太さ。          |
| `caption-default-letter-spacing`        | `0.01875rem`                         | キャプションの文字間隔。             |
| `caption-default-line-height`           | `0.875rem`                           | キャプションの行の高さ。             |
| `caption-default-text-decoration`       | `none`                               | キャプションのテキストの装飾。          |
| `label-bold-font-family`                | `Lato, "Helvetica Neue", sans-serif` | ラベル (太字) のフォントファミリ。      |
| `label-bold-font-size`                  | `0.625rem`                           | ラベル (太字) のフォントサイズ。       |
| `label-bold-font-weight`                | `700`                                | ラベル (太字) のフォントの太さ。       |
| `label-bold-letter-spacing`             | `0.0375rem`                          | ラベル (太字) の文字間隔。          |
| `label-bold-line-height`                | `1rem`                               | ラベル (太字) の行の高さ。          |
| `label-bold-text-decoration`            | `none`                               | ラベル (太字) のテキストの装飾。       |
| `label-default-font-family`             | `Lato, "Helvetica Neue", sans-serif` | ラベルのフォントファミリ。            |
| `label-default-font-size`               | `0.625rem`                           | ラベルのフォントサイズ。             |
| `label-default-font-weight`             | `400`                                | ラベルのフォントの太さ。             |
| `label-default-letter-spacing`          | `0.0375rem`                          | ラベルの文字間隔。                |
| `label-default-line-height`             | `1rem`                               | ラベルの行の高さ。                |
| `label-default-text-decoration`         | `none`                               | ラベルのテキストの装飾。             |
| `link-default-font-family`              | `Lato, "Helvetica Neue", sans-serif` | ハイパーリンクのフォントファミリ。        |
| `link-default-font-size`                | `0.875rem`                           | ハイパーリンクのフォントサイズ。         |
| `link-default-font-weight`              | `400`                                | ハイパーリンクのフォントの太さ。         |
| `link-default-letter-spacing`           | `0.01875rem`                         | ハイパーリンクの文字間隔。            |
| `link-default-line-height`              | `1.25rem`                            | ハイパーリンクの行の高さ。            |
| `link-default-text-decoration`          | `underline`                          | ハイパーリンクのテキストの装飾。         |
| `notification-default-font-family`      | `Lato, "Helvetica Neue", sans-serif` | 通知のフォントファミリ。             |
| `notification-default-font-size`        | `0.5625rem`                          | 通知のフォントサイズ。              |
| `notification-default-font-weight`      | `700`                                | 通知のフォントの太さ。              |
| `notification-default-letter-spacing`   | `0.01875rem`                         | 通知の文字間隔。                 |
| `notification-default-line-height`      | `0.75rem`                            | 通知の行の高さ。                 |
| `notification-default-text-decoration`  | `none`                               | 通知のテキストの装飾。              |
| `title-large-font-family`               | `Lato, "Helvetica Neue", sans-serif` | タイトル (大) のフォントファミリ。      |
| `title-large-font-size`                 | `1.125rem`                           | タイトル (大) のフォントサイズ。       |
| `title-large-font-weight`               | `700`                                | タイトル (大) のフォントの太さ。       |
| `title-large-letter-spacing`            | `0.01875rem`                         | タイトル (大) の文字間隔。          |
| `title-large-line-height`               | `1.5rem`                             | タイトル (大) の行の高さ。          |
| `title-large-text-decoration`           | `none`                               | タイトル (大) のテキストの装飾。       |
| `title-medium-font-family`              | `Lato, "Helvetica Neue", sans-serif` | タイトル (中) のフォントファミリ。      |
| `title-medium-font-size`                | `1rem`                               | タイトル (中) のフォントサイズ。       |
| `title-medium-font-weight`              | `700`                                | タイトル (中) のフォントの太さ。       |
| `title-medium-letter-spacing`           | `0.01875rem`                         | タイトル (中) の文字間隔。          |
| `title-medium-line-height`              | `1.5rem`                             | タイトル (中) の行の高さ。          |
| `title-medium-text-decoration`          | `none`                               | タイトル (中) のテキストの装飾。       |
| `title-small-font-family`               | `Lato, "Helvetica Neue", sans-serif` | タイトル (小) のフォントファミリ。      |
| `title-small-font-size`                 | `0.9375rem`                          | タイトル (小) のフォントサイズ。       |
| `title-small-font-weight`               | `700`                                | タイトル (小) のフォントの太さ。       |
| `title-small-letter-spacing`            | `0.01875rem`                         | タイトル (小) の文字間隔。          |
| `title-small-line-height`               | `1.25rem`                            | タイトル (小) の行の高さ。          |
| `title-small-text-decoration`           | `none`                               | タイトル (小) のテキストの装飾。       |
| `title-subtitle-font-family`            | `Lato, "Helvetica Neue", sans-serif` | サブタイトルのフォントファミリ。         |
| `title-subtitle-font-size`              | `0.875rem`                           | サブタイトルのフォントサイズ。          |
| `title-subtitle-font-weight`            | `700`                                | サブタイトルのフォントの太さ。          |
| `title-subtitle-letter-spacing`         | `0.01875rem`                         | サブタイトルの文字間隔。             |
| `title-subtitle-line-height`            | `1.25rem`                            | サブタイトルの行の高さ。             |
| `title-subtitle-text-decoration`        | `none`                               | サブタイトルのテキストの装飾。          |
| `title-x-large-font-family`             | `Lato, "Helvetica Neue", sans-serif` | タイトル (特大) のフォントファミリ。     |
| `title-x-large-font-size`               | `1.3125rem`                          | タイトル (特大) のフォントサイズ。      |
| `title-x-large-font-weight`             | `700`                                | タイトル (特大) のフォントの太さ。      |
| `title-x-large-letter-spacing`          | `0.01875rem`                         | タイトル (特大) の文字間隔。         |
| `title-x-large-line-height`             | `2rem`                               | タイトル (特大) の行の高さ。         |
| `title-x-large-text-decoration`         | `none`                               | タイトル (特大) のテキストの装飾。      |

## 間隔、サイズ、形状のトークン

<Message type="notice">

表内のコメントは、ルートフォントサイズの16ピクセルに基づいて計算されたピクセル数を示しています。

</Message>

| トークン           | デフォルト値                                     | 説明                  |
| -------------- | ------------------------------------------ | ------------------- |
| `border-1`     | `0.0625rem`                                | 境界線の幅 (1ピクセルに相当)。   |
| `border-2`     | `0.125rem`                                 | 境界線の幅 (2ピクセルに相当)。   |
| `border-3`     | `0.1875rem`                                | 境界線の幅 (3ピクセルに相当)。   |
| `border-4`     | `0.25rem`                                  | 境界線の幅 (4ピクセルに相当)。   |
| `border-6`     | `0.375rem`                                 | 境界線の幅 (6ピクセルに相当)。   |
| `border-8`     | `0.5rem`                                   | 境界線の幅 (8ピクセルに相当)。   |
| `dropshadow-1` | `0 0 0.5rem 0 rgba(0, 0, 0, 0.05)`         | 微妙なシャドウ効果。          |
| `dropshadow-2` | `0 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.1)` | 中程度のシャドウ効果。         |
| `dropshadow-3` | `0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.1)`   | 顕著なシャドウ効果。          |
| `radius-05`    | `0.125rem`                                 | 境界線の半径 (2ピクセルに相当)。  |
| `radius-1`     | `0.25rem`                                  | 境界線の半径 (4ピクセルに相当)。  |
| `radius-2`     | `0.375rem`                                 | 境界線の半径 (6ピクセルに相当)。  |
| `radius-3`     | `0.5rem`                                   | 境界線の半径 (8ピクセルに相当)。  |
| `radius-4`     | `0.75rem`                                  | 境界線の半径 (12ピクセルに相当)。 |
| `radius-5`     | `1rem`                                     | 境界線の半径 (16ピクセルに相当)。 |
| `radius-6`     | `1.25rem`                                  | 境界線の半径 (20ピクセルに相当)。 |
| `radius-7`     | `1.5rem`                                   | 境界線の半径 (24ピクセルに相当)。 |
| `radius-8`     | `1.75rem`                                  | 境界線の半径 (28ピクセルに相当)。 |
| `radius-half`  | `2rem`                                     | 境界線の半径 (32ピクセルに相当)。 |
| `size-05`      | `0.125rem`                                 | サイズ指定 (2ピクセルに相当)。   |
| `size-1`       | `0.25rem`                                  | サイズ指定 (4ピクセルに相当)。   |
| `size-2`       | `0.5rem`                                   | サイズ指定 (8ピクセルに相当)。   |
| `size-3`       | `0.75rem`                                  | サイズ指定 (12ピクセルに相当)。  |
| `size-4`       | `1rem`                                     | サイズ指定 (16ピクセルに相当)。  |
| `size-5`       | `1.25rem`                                  | サイズ指定 (20ピクセルに相当)。  |
| `size-6`       | `1.5rem`                                   | サイズ指定 (24ピクセルに相当)。  |
| `size-7`       | `1.75rem`                                  | サイズ指定 (28ピクセルに相当)。  |
| `size-8`       | `2rem`                                     | サイズ指定 (32ピクセルに相当)。  |
| `size-9`       | `2.25rem`                                  | サイズ指定 (36ピクセルに相当)。  |
| `size-10`      | `2.5rem`                                   | サイズ指定 (40ピクセルに相当)。  |
| `size-11`      | `2.75rem`                                  | サイズ指定 (44ピクセルに相当)。  |
| `size-12`      | `3rem`                                     | サイズ指定 (48ピクセルに相当)。  |
| `size-14`      | `3.5rem`                                   | サイズ指定 (56ピクセルに相当)。  |
| `size-15`      | `3.75rem`                                  | サイズ指定 (60ピクセルに相当)。  |
| `size-16`      | `4rem`                                     | サイズ指定 (64ピクセルに相当)。  |
| `size-18`      | `4.5rem`                                   | サイズ指定 (72ピクセルに相当)。  |
| `size-20`      | `5rem`                                     | サイズ指定 (80ピクセルに相当)。  |
| `space-05`     | `0.125rem`                                 | 間隔指定 (2ピクセルに相当)。    |
| `space-1`      | `0.25rem`                                  | 間隔指定 (4ピクセルに相当)。    |
| `space-2`      | `0.5rem`                                   | 間隔指定 (8ピクセルに相当)。    |
| `space-3`      | `0.75rem`                                  | 間隔指定 (12ピクセルに相当)。   |
| `space-4`      | `1rem`                                     | 間隔指定 (16ピクセルに相当)。   |
| `space-5`      | `1.25rem`                                  | 間隔指定 (20ピクセルに相当)。   |
| `space-6`      | `1.5rem`                                   | 間隔指定 (24ピクセルに相当)。   |
| `space-7`      | `1.75rem`                                  | 間隔指定 (28ピクセルに相当)。   |
| `space-8`      | `2rem`                                     | 間隔指定 (32ピクセルに相当)。   |
| `space-9`      | `2.25rem`                                  | 間隔指定 (36ピクセルに相当)。   |
| `space-10`     | `2.5rem`                                   | 間隔指定 (40ピクセルに相当)。   |
| `space-11`     | `2.75rem`                                  | 間隔指定 (44ピクセルに相当)。   |
| `space-12`     | `3rem`                                     | 間隔指定 (48ピクセルに相当)。   |
| `space-14`     | `3.5rem`                                   | 間隔指定 (56ピクセルに相当)。   |
| `space-15`     | `3.75rem`                                  | 間隔指定 (60ピクセルに相当)。   |
| `space-16`     | `4rem`                                     | 間隔指定 (64ピクセルに相当)。   |
| `space-18`     | `4.5rem`                                   | 間隔指定 (72ピクセルに相当)。   |
| `space-20`     | `5rem`                                     | 間隔指定 (80ピクセルに相当)。   |

[ts]: g://embed/ui-elements/theming-styling
