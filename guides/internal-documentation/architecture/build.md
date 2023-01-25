---
hide: true
category_id: internal-documentation
subcategory_id: internal-documentation/architecture
is_index: false
id: internal-documentation/architecture/build
rank: 2
type: guide
total_steps: 3
sibling_id: internal-documentation/architecture
parent_id: internal-documentation/architecture
next_page_id: internal-documentation/architecture/publication
previous_page_id: internal-documentation/architecture/sources
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/architecture/2-build.md
fullyTranslated: true
---
<!-- does not need translation -->

# ビルドプロセス

ビルドプロセスでは、Gatsbyサイトジェネレータを使用して、すべてのソースを取り込んで処理し、それらをコンパイルして静的HTML、CSS、JavaScriptを作成します。

ソースのいずれかが変更されると、サイトの新しいビルドがトリガーされます。サイトをビルドする必要があるのは、OpenAPIとMicrocopyがコンパイルされる場合のみであるため、GitHubのWebhookを受け入れて、`en`ブランチから送信されたWebhookをすべて除外するようにNetlifyのサーバーレス関数が作成されました。Netlifyサーバーに渡されるのは、OpenAPIリポジトリおよびMicrocopyリポジトリから`en`ブランチへのプッシュのみです。

## ステージング

Netlifyの関数は、OpenAPI 3.0仕様およびMicrocopyに対する複数の呼び出しの代理となり、必要に応じてステージングブランチとメインブランチの再ビルドをそれぞれトリガーします。これは、必要な数のステージ構成とソース構成をサポートするよう拡張できます。

## Gatsbyによるビルド

[Gatsby][Gatsby]は、開発者がウェブサイトやアプリを作成できる、処理の速いReactベースの無料のオープンソースフレームワークです。これは、さまざまなソースを取得してGraphQLデータソースに取り込んだ後、Reactテンプレートでそのデータへのアクセス権限を付与します。このテンプレートをビルドすると、静的HTML、CSS、JavaScriptが作成されます。

### ビルドのフェーズ

Gatsbyのビルドには、以下の3つのフェーズがあります。

1. ローカルおよびリモートのソースをGraphQLノードにインポートする。
2. ノードを変換して、さらなる情報の追加、コンテンツ (Markdownなど) の解析、ノードの関連付けを行う。
3. データをページテンプレートに渡し、サイトをコンパイルしてHTML、CSS、JSを作成する。

## サイトのコンパイル

データがすべて読み込まれると、GraphQLデータソースとしてさまざまなページで利用でき、データを照会してReactサイトとしてレンダリングすることができます。GatsbyのページはプレーンなReactコンポーネントです。現在レンダリングされているページは、[こちら][here]で参照できます。

[Gatsby]: https://www.gatsbyjs.com/

[here]: https://github.com/box/developer.box.com-framework/tree/main/src/localized
