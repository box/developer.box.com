---
alias_paths:
  - /sdks
  - /docs/sdks-and-tools
  - /docs/sdks
  - /docs/box-sdks
  - /docs/mobile-sdks
  - /page/sdks
  - /docs/box-sdk-license
centered: true
category_id: sdks-and-tools
subcategory_id: null
is_index: true
id: sdks-and-tools
rank: 0
type: page
total_steps: 0
sibling_id: pages
parent_id: pages
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sdks-and-tools/index.md
fullyTranslated: true
---
# SDKとツール

以下のツールは、Boxで積極的に開発およびサポートされています。これらのツールには、定期的な製品更新とセキュリティ更新が提供されます。

## 公式SDKおよびCLI

| プラットフォーム                          | メンテナンスの有無 | パリティの状況 |
| --------------------------------- | --------- | ------- |
| [Java SDK][javasdk]               | はい        | 詳細      |
| [.NET SDK][dotnetsdk]             | はい        | 詳細      |
| [Python SDK][pythonsdk]           | はい        | 詳細      |
| [Node SDK][nodesdk]               | はい        | 詳細      |
| [CLI][cli]                        | はい        | 詳細      |
| [iOS Content SDK][iossdk]         | はい        | 詳細      |
| [Android Content SDK][androidsdk] | はい        | 部分的     |

<Message type="notice">

**メンテナンス**: Boxでは、完全にメンテナンスされるプロジェクトを積極的に開発しています。このようなプロジェクトには最新のセキュリティ更新プログラムや新機能が提供されます。このようなプロジェクトのサポートについては、GitHubまたは[デベロッパーフォーラム][forum]を参照してください。

**APIパリティ**: 完全なAPIパリティを持つプロジェクトは、Box Platformで利用可能になった時点で、すべてのプラットフォーム機能が積極的に更新されます。部分的なAPIパリティを持つプロジェクトには一部の機能が欠けていますが、Boxではそのようなプロジェクトを完全なパリティに移行する取り組みを進めています。

</Message>

## 公式UIライブラリ

組み込みのUIコンポーネントを使用してアプリケーションを拡張することで、Box上のファイルを参照、共有、プレビューできるようになります。

<!-- markdownlint-disable line-length -->

|                                        |                                                             |                                                        |
| -------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------ |
| 参照                                     | 共有                                                          | Preview                                                |
| ![参照][browseimg]                       | ![共有][shareimg]                                             | ![Preview][previewimg]                                 |
| 組み込みのUIを使用して、Box上のファイルをナビゲートおよび操作できます。 | 組み込みのUI Elementを使ってファイルを共有することで、ファイルとフォルダのコラボレーションが可能になります。 | 豊富なプレビュー機能によって、PDFからHDビデオまで、120種類を超えるファイル形式をプレビューできます。 |

| プラットフォーム   |                                                                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iOS        | [Browse SDK][iosbrowsesdk]、[Share SDK][iossharesdk]、[Preview SDK][iospreviewsdk]                                                                                                    |
| Android    | [Browse SDK](https://github.com/box/box-android-browse-sdk)、[Share SDK](https://github.com/box/box-android-share-sdk)、[Preview SDK](https://github.com/box/box-android-preview-sdk) |
| JavaScript | [Box UI Elements](guide://embed/ui-elements/)                                                                                                                                       |

<!-- markdownlint-enable line-length -->

<Message type="notice">

**メンテナンス**: Boxでは、完全にメンテナンスされるプロジェクトを積極的に開発しています。このようなプロジェクトには最新のセキュリティ更新プログラムや新機能が提供されます。このようなプロジェクトのサポートについては、GitHubまたは[デベロッパーフォーラム][forum]を参照してください。

</Message>

## 非公式およびコミュニティツール

以下のツールは、Boxで開発され、Boxとそのコミュニティメンバーによって管理されています。このツールについては、定期的な製品更新やセキュリティ更新は提供されません。

<!-- markdownlint-disable line-length -->

| プラットフォーム                        | メンテナンスの有無             | パリティ |
| ------------------------------- | --------------------- | ---- |
| [Salesforce SDK][salesforcesdk] | Boxとコミュニティメンバーが限定的に実施 | 部分的  |
| [Ruby SDK][rubysdk]             | Boxとコミュニティメンバーが限定的に実施 | 部分的  |
| [クライアント側JS SDK][jssdk]          | Boxとコミュニティメンバーが限定的に実施 | 部分的  |

<!-- markdownlint-enable line-length -->

<Message type="notice">

**メンテナンス:** メンテナンスが限定されているプロジェクトについては、コミュニティとBoxが協力してアップデートを実施します。セキュリティアップデートは不定期に提供されます。プレミアムサポートプランをご利用の場合、このようなツールに関する緊急の機能リクエストについてはカスタマーサービスにお問い合わせください。このようなプロジェクトに関するその他のサポートクエリについては、GitHubまたは[デベロッパーフォーラム][forum]を参照してください。

**APIパリティ:** APIパリティが限定されているプロジェクトでは、Box Platformに公開されたときに新しい機能が自動的に導入されないため、一部の機能を使用できない場合があります。プレミアムサポートプランをご利用の場合、このようなツールに関する緊急の機能リクエストについてはカスタマーサービスにお問い合わせください。

</Message>

[javasdk]: https://github.com/box/box-java-sdk

[dotnetsdk]: https://github.com/box/box-windows-sdk-v2

[pythonsdk]: https://github.com/box/box-python-sdk

[nodesdk]: https://github.com/box/box-node-sdk

[iossdk]: https://github.com/box/box-ios-sdk

[androidsdk]: https://github.com/box/box-android-sdk

[cli]: https://github.com/box/boxcli

[forum]: https://community.box.com/t5/Platform-and-Development-Forum/bd-p/DeveloperForum

[browseimg]: ./browse.jpg

[shareimg]: ./share.jpg

[previewimg]: ./preview.jpg

[iosbrowsesdk]: https://github.com/box/box-ios-browse-sdk

[iossharesdk]: https://github.com/box/box-ios-share-sdk

[iospreviewsdk]: https://github.com/box/box-ios-preview-sdk

[salesforcesdk]: https://github.com/box/box-salesforce-sdk

[rubysdk]: https://github.com/cburnette/boxr

[jssdk]: https://github.com/allenmichael/box-javascript-sdk
