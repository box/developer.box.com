---
hide: true
category_id: internal-documentation
subcategory_id: internal-documentation/architecture
is_index: true
id: internal-documentation/architecture
rank: 0
type: guide
total_steps: 3
sibling_id: internal-documentation
parent_id: internal-documentation
next_page_id: internal-documentation/architecture/sources
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/architecture/0-index.md
fullyTranslated: true
---
<!-- does not need translation -->

# Developerドキュメントのアーキテクチャ

新しい[Developerドキュメント][developer documentation]サイトのビルドシステムの概要を以下に示します。

## アーキテクチャの概要

Developerドキュメントのビルドアーキテクチャは、3つの部分に分かれています。

* Developerドキュメントのビルドに使用されたソースの検証と解決
* ソースが変更されたときのソースの取得とサイトのコンパイル
* Boxのホスティングプロバイダへのサイトの公開

<ImageFrame center shadow border>

![アーキテクチャ](./images/Architecture1.png)

</ImageFrame>

## ステージの概要

以下の表に、現在展開されているすべてのステージの概要と、各ステージでのソースの取得元を示します。

| ソース                             | 実稼動環境                                   | ステージング                                     | 日本                                      |           |
| ------------------------------- | --------------------------------------- | ------------------------------------------ | --------------------------------------- | --------- |
|                                 | `developer.box.com`, `box.dev`          | `staging.developer.box.com`                | `ja.developer.box.com`                  | `box.dev` |
| OpenAPI                         | `@box/openapi#main`                     | `@box/openapi#staging`                     |                                         |           |
| OpenAPI (コンパイル済み) (英語)          | `@box/openapi#en`                       | `@box/openapi#en-staging` `@boxopenapi#jp` |                                         |           |
| MicrocopyとGuides (英語)           | `@box/developer.box.com#main`           | `@box/developer.box.com#staging`           |                                         |           |
| MicrocopyとGuides (コンパイル済み) (英語) | `@box/developer.box.com#en`             | `@box/developer.box.com#en-staging`        | `@box/developer.box.com#jp`             |           |
| Gatsbyサイト                       | `@box/developer.box.com-framework#main` | `@box/developer.box.com-framework#staging` | `@box/developer.box.com-framework#main` |           |

## 概要ビデオ

以下のビデオでは、Developerドキュメントサイト、ビルドシステム、およびサービスの概要を紹介しています。

* [概要に関する座談会][High level fireside chat]
* 詳細な技術分析:
  * [録画][Screen recording]
  * [音声のみ][Audio only]

[developer documentation]: https://developer.box.com

[High level fireside chat]: https://cloud.box.com/s/bf7yfygd56ffes5awyw7xr5n7hrg3tiz

[Screen recording]: https://cloud.box.com/s/lmcj5kamjsxxwfad08d0iy78jmzsk7be

[Audio only]: https://cloud.box.com/s/mtbfmfwgxm4sn0m0xfz92rzlrv3239bh
