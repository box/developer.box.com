---
hide: true
category_id: internal-documentation
subcategory_id: internal-documentation/architecture
is_index: false
id: internal-documentation/architecture/publication
rank: 3
type: guide
total_steps: 3
sibling_id: internal-documentation/architecture
parent_id: internal-documentation/architecture
next_page_id: ''
previous_page_id: internal-documentation/architecture/build
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/architecture/3-publication.md
fullyTranslated: true
---
<!-- does not need translation -->

# 公開

Gatsbyサイトはコンパイルされると、Netlify CI/CDサーバーによって自動的にNetlify CDNにプッシュされます。

現在、3つのライブサイトがあります。

* [実稼動環境][production]
* [ステージング][staging]
* [日本][Japan]

これらのサイトはNetlify Edge CDNに解決されます。Netlify Edge CDNは、Netlifyのビルドプロセスに関連付けられており、DeveloperドキュメントのビルドにおけるDevOpsの複雑さの多くに対処します。

## サービスワーカーキャッシュ

Developerドキュメントサイトはオフライン優先です。つまり、ユーザーが以前に一度そのサイトを読み込んでいれば、インターネットに接続していなくても読み込まれます。

そのため、キャッシュの無効化は2段階のプロセスとなり、このプロセスでは、最初にキャッシュされたバージョンがサイトに読み込まれてから、新しいサイトのコンテンツがバックグラウンドで読み込まれます。

## 翻訳プロセス

翻訳はすべて、翻訳チームがGitHubから取得します。現在は、OpenAPI仕様とGuides/Microcopyを翻訳しています。

現在のプロセスは次のとおりです。

* Mojiチームは月に1回、OpenAPI仕様とマークダウンファイルの`en-snapshot`ブランチに対して`en`ブランチのスナップショットを作成します。
* このチームはファイルを解析し、すべてのトークンをBoxの翻訳サーバーであるMojitoに送信します。
* すべての文字列が翻訳されると、スナップショットに挿入され、`jp`ブランチに書き込まれます。これにより、日本サイトの再ビルドがトリガーされます。

## ステージング

[ステージング][staging]ページは、OpenAPIおよびコンテンツリポジトリの`staging`ブランチにあるソースから`en-staging`ブランチに自動的にビルドされます。これにより、Gatsbyサイトの`staging`ブランチのビルドがトリガーされます。

[production]: https://developer.box.com

[staging]: https://staging.developer.box.com

[Japan]: https://ja.developer.box.com
