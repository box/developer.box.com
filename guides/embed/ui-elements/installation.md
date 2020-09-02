---
rank: 1
related_endpoints: []
related_guides:
  - authentication/select
  - best-practices/cors
required_guides: []
related_resources: []
alias_paths: []
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/installation
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/browser
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/ui-elements/installation.md
---
# インストール

UI Elementを使用するには、直接JavaScriptライブラリをダウンロードするか、またはNPMパッケージから取り込みます。すべてのUI Elementは、正しくレンダリングするために対応するCSSスタイルシートも必要です。

すべてのUI Elementは、[NPM][npm]を介して入手することも、直接ダウンロードすることもできます。

<Message>

Box UI Elementsの使用方法は2とおりあります。すばやく構築する場合は、このドキュメントで後で説明するようにライブラリとして使用します。また、Reactベースのアプリを構築する場合は、NPMパッケージからコンポーネントを取り込むことができます。詳細については、上記のNPMのリンク先を参照してください。この機能のリリースを続ける中で、ソースに対してある程度のアクセス権限を設定します。

</Message>

## NPMのインストール

Reactベースのアプリを構築し、構築時にアプリに直接コンポーネントをインポートする場合は、この方法を使用します。

```sh
npm install box-ui-elements
# yarn add box-ui-elements
```

<CTA to="https://www.npmjs.com/package/box-ui-elements">

NPMウェブサイトの詳細を確認する

</CTA>

<Message warning>

# Content Preview

現在、コンテンツプレビューUI ElementはNPMから入手できません。

</Message>

## 手動によるインストール

すべてのUI Elementは、Box CDNから直接入手することもできます。

<!-- markdownlint-disable line-length -->

| Element                                              | バージョン    | ファイル                                                                                                                                                                         |
| ---------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Content Explorer](g://embed/ui-elements/explorer)   | `11.0.2` | CSS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/explorer.css`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/explorer.css)                           |
|                                                      |          | Reactを使用するJS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/explorer.js`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/explorer.js)                    |
|                                                      |          | Reactを使用しないJS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/explorer.no.react.js`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/explorer.no.react.js) |
| [Content Open With](g://embed/ui-elements/open-with) | `11.0.2` | CSS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/openwith.css`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/openwith.css)                           |
|                                                      |          | Reactを使用するJS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/openwith.js`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/openwith.js)                    |
|                                                      |          | Reactを使用しないJS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/openwith.no.react.js`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/openwith.no.react.js) |
| [Content Picker](g://embed/ui-elements/picker)       | `11.0.2` | CSS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/picker.css`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/picker.css)                               |
|                                                      |          | Reactを使用するJS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/picker.js`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/picker.js)                        |
|                                                      |          | Reactを使用しないJS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/picker.no.react.js`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/picker.no.react.js)     |
| [Content Sidebar](g://embed/ui-elements/sidebar)     | `11.0.2` | CSS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/sidebar.css`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/sidebar.css)                             |
|                                                      |          | Reactを使用するJS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/sidebar.js`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/sidebar.js)                      |
|                                                      |          | Reactを使用しないJS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/sidebar.no.react.js`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/sidebar.no.react.js)   |
| [Content Uploader](g://embed/ui-elements/uploader)   | `11.0.2` | CSS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/uploader.css`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/uploader.css)                           |
|                                                      |          | Reactを使用するJS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/uploader.js`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/uploader.js)                    |
|                                                      |          | Reactを使用しないJS [`https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/uploader.no.react.js`](https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/uploader.no.react.js) |
| [Content Preview](g://embed/ui-elements/preview)     | `2.34.0` | CSS [`https://cdn01.boxcdn.net/platform/preview/2.34.0/en-US/preview.css`](https://cdn01.boxcdn.net/platform/preview/2.34.0/en-US/preview.css)                               |
|                                                      |          | JS [`https://cdn01.boxcdn.net/platform/preview/2.34.0/en-US/preview.js`](https://cdn01.boxcdn.net/platform/preview/2.34.0/en-US/preview.js)                                  |

上記のリンクを使用して要素のコードをアプリケーションのコードにダウンロードするか、CDNからページに直接埋め込みます。

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <!-- polyfill.io only loads the polyfills your browser needs -->
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,Intl"></script>
    <!-- Alternatively, use polyfill hosted on the Box CDN
    <script src="https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js"></script>
    -->

    <!-- Latest version of the explorer css for your locale -->
    <link
      rel="stylesheet"
      href="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/explorer.css"
    />
  </head>
  <body>
    <!-- Latest version of the explorer js for your locale -->
    <script src="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/explorer.js"></script>
    ...
  </body>
</html>
```

Boxプレビューでは、このサンプルは若干異なって見えます。

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Box Content Preview Demo</title>

    <!-- polyfill.io only loads the polyfills your browser needs -->
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise"></script>
    <!-- Alternatively, use polyfills hosted on the Box CDN
  <script src="https://cdn01.boxcdn.net/polyfills/bluebird/3.5.1/bluebird.min.js"></script>
  -->

    <!-- Latest version of Box Content Preview for en-US locale -->
    <script src="https://cdn01.boxcdn.net/platform/preview/{VERSION}/en-US/preview.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn01.boxcdn.net/platform/preview/{VERSION}/en-US/preview.css"
    />
  </head>
  <body>
    <div class="preview-container" style="height:400px; width:100%;"></div>
    <script>
      var preview = new Box.Preview();
      preview.show("93392244621", "EqFyi1Yq1tD9mxY8F38sxDfp73pFd7FP", {
        container: ".preview-container",
        showDownload: true
      });
    </script>
  </body>
</html>
```

<!-- markdownlint-enable line-length -->

### バージョン

ほとんどのUI Elementには、2つの異なるバージョンがあります。

* バンドルにReactとReactDOMなどが含まれている、標準的な`*.js`ファイル(`explore.js`など)。
  * これは、Reactベースのアプリを構築していない場合や、アプリの構築プロセスの一環としてコンポーネントを含める必要がない場合に使用します。
  * ReactライブラリとReactDOMライブラリが含まれています。
  * このアセットのファイルサイズは以下のアセットよりも大きくなります。
* ReactとReactDOMがバンドルされない小規模な`*.no.react.js`ファイル(`explore.no.react.js`など)。
  * これは、ReactライブラリとReactDOMライブラリが両方ともすでにアプリケーションで読み込まれている場合に使用します。
  * これらのライブラリでは、ReactおよびReactDOMが`>= 16.2`かつ`< 17`であることを想定しています。

<message>
Only one of the 2 `js` files, and the additional `css` file need to be added
to a project.

</message>

### サポートされているロケール

上記のアセットURLでは`en-US`が使用されています。別のロケールを使用する場合は、上記のURLに含まれる`en-US`を以下のいずれかに置き換えてください。

`en-AU`, `en-CA`, `en-GB`, `da-DK`, `de-DE`, `es-ES`, `fi-FI`, `fr-CA`, `fr-FR`,
`it-IT`, `ja-JP,`, `ko-KR`, `nb-NO`, `nl-NL`, `pl-PL`, `pt-BR`, `ru-RU`,
`sv-SE`, `tr-TR`, `zh-CN`, `zh-TW`

## Content Previewのセルフホスティング

所有するサーバーからBox Content Previewライブラリを提供するには、以下の手順に従います。

### 1. リリースをダウンロードする

リポジトリをフォークして、提供するバージョンをチェックアウトするか、特定のバージョンをzipとしてダウンロードします。

* `git checkout v2.34.0`を使用して特定のバージョンをチェックアウトします。
* [リリース][preview-releases]に関するページから特定のバージョンをzipとしてダウンロードします。

### 2. 依存関係をインストールする

次のコマンドを使用して、依存関係をインストールしてライブラリをビルドします。

```sh
yarn install && yarn build:18n && yarn:build:prod
```

### 3. ファイルを提供する

`/dist`フォルダから`dev`フォルダを除くすべてをセルフサービス形式で提供します。フォルダ構造は変えずに、`third-party`を`2.34.0`と同じフォルダに配置する必要があります。

たとえば、`box-assets`ディレクトリを使用したセルフホスティングを行う場合は、以下のURLにアクセスできる必要があります。

* `https://cdn.YOUR_SITE.com/box-assets/2.34.0/en-US/preview.js`
* `https://cdn.YOUR_SITE.com/box-assets/third-party/text/0.114.0/papaparse.min.js`
* `https://cdn.YOUR_SITE.com/box-assets/third-party/model3d/1.12.0/three.min.js`

## 認証

UI Elementのいずれかを初期化するには、アプリケーションから有効なアクセストークンを提供する必要があります。

<CTA to="authentication/select">

アプリケーションの認証方法を確認する

</CTA>

アクセストークンをセキュアでない環境(ユーザーのウェブブラウザ)に渡す前に[ダウンスコープ][downscope]こともお勧めします。

UI Elementは、アクセストークンが認証用に渡されることだけを想定しているため、Box Platformから利用できるさまざまな種類の認証に使用できます。

テスト目的の場合は、[開発者トークン][devtoken]を使用できます。

## CORS

UI Elementを使用するには、アプリケーションで、クロスオリジンリソース共有でウィジェットが使用されるドメインを許可する必要があります。詳細については、[CORSガイド][cors]を参照してください。

## ソースコードとリリース

エクスプローラElementのソースコードは[GitHubでホストされています][gh]。このリポジトリには、使用方法と開発に関する詳細なドキュメントが含まれています。見つかったバグは、わかりやすい再現手順とともに\[Issues]タブに登録してください。また、このリポジトリでは、[リリース][releases]のリストも保持されています。

[cors]: guide://best-practices/cors

[downscope]: guide://authentication/access-tokens/downscope

[devtoken]: guide://authentication/access-tokens/developer-tokens

[npm]: https://www.npmjs.com/package/box-ui-elements

[polyfill]: https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js

[gh]: https://github.com/box/box-ui-elements

[releases]: https://github.com/box/box-ui-elements/releases

[cors]: guide://best-practices/cors

[npm]: https://www.npmjs.com/package/box-ui-elements

[downscope]: guide://authentication/access-tokens/downscope

[scopes]: guide://api-calls/permissions-and-errors/scopes

[preview-releases]: https://github.com/box/box-content-preview/releases
