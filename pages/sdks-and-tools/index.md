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

Boxで開発およびサポートされているSDKおよびツールは以下のとおりです。

## SDK

Here you will find a list of SDKs you can use to build your application.

<Message type="notice">

下の表には、SDKが、プロジェクトがメンテナンスされるかどうかとAPIパリティが備わっているかどうかを示す追加情報とともに記載されています。

**ステータス**: 現在のプロジェクトのステータスを説明します。ステータスの詳細については、[Box Open Sourceウェブサイト][badges]を参照してください。Boxでは、アクティブなプロジェクトを積極的に開発しています。このようなプロジェクトには最新のセキュリティ更新プログラムや新機能が提供されます。このようなプロジェクトのサポートについては、GitHubまたは[Developer Forum][forum]を参照してください。

**APIパリティ**: 完全なAPIパリティを持つプロジェクトは、Box Platformで利用可能になった時点で、すべてのプラットフォーム機能が積極的に更新されます。部分的なAPIパリティを持つプロジェクトには一部の機能が欠けていますが、Boxではそのようなプロジェクトを完全なパリティに移行する取り組みを進めています。

</Message>

### SDK

The table lists Box SDKs that you can use when building your applications. For latest API support and features, use the next generation SDKs.

| プラットフォーム                          | ステータス | APIパリティ |
| --------------------------------- | ----- | ------- |
| [Java SDK][javasdk]               | アクティブ | Full    |
| [iOS Content SDK][iossdk]         | アクティブ | Full    |
| [.NET SDK][dotnetsdk]             | アクティブ | Full    |
| [Python SDK][pythonsdk]           | アクティブ | Full    |
| [Node SDK][nodesdk]               | アクティブ | Full    |
| [Android Content SDK][androidsdk] | 廃止    | 部分的     |

<Message type="warning">

日本時間2023年6月1日をもって、Android SDKのサポートは終了しました。既存のAndroid SDKアプリケーションは影響なく引き続きご利用いただけますが、新機能、更新、バグ修正は提供されなくなります。

最新のAndroid機能を引き続きご利用いただくために、Java SDKを使用してAndroid版アプリを作成することをお勧めします。詳細については、[こちら][android-docs]のドキュメントを参照してください。

</Message>

### Next Generation SDKs

<Message type="warning">

As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts.

Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDKs with no impact, but you won't receive new features, updates, or bug fixes.

All future development, including new features and updates for the Next Generation SDKs, will be delivered through Box core SDKs starting with version `v10`. Currently, `v10` is available as a separate branch.

For more details, see our [SDK versioning strategy document][versioning].

</Message>

Here's what you can expect from generated SDKs:

* **Full API support**: New Box SDKs empower developers with complete coverage of the Box API ecosystem. You can access all the latest features and functionalities offered by Box and build feature-rich applications.
* **Rapid API updates**: The new auto-generation development approach allows you to add Box APIs to SDKs at a much faster pace (in a matter of days). This means you can leverage the most up-to-date features in your applications without delay.
* **Embedded documentation**: All objects and parameters are documented directly in the source code of the SDK so all the necessary information is stored in one place.
* **Enhanced convenience methods**: The newly introduced convenience methods cover various aspects such as authentication, chunk uploads, exponential back-offs, automatic retries, type checkers that help to ensure that you’re using variables correctly, and much more.

## Box CLI

Box CLI is a user-friendly command line tool that allows both technical and non-technical users to leverage Box API to perform routine or bulk actions.

| プラットフォーム   | ステータス | APIパリティ |
| ---------- | ----- | ------- |
| [CLI][cli] | アクティブ | Full    |

## Postmanコレクション

[Postman][postman]は、完全な開発環境を構成しなくても、使いやすいインターフェースでHTTPリクエストを作成およびテストできるツールです。**Box Postmanコレクション**は事前設定済みのリクエストをまとめたもので、これにより、リクエストを手動で設定しなくても、Box APIを利用できるようになります。

Postmanの使用を開始するには、Postmanクイックスタートガイドを使用するのが最も簡単な方法です。

<CTA to="g://tooling/postman/quick-start">

Box Postmanコレクションの使い方

</CTA>

## Salesforce Developer Toolkit

Salesforce Developer Toolkitを使用すると、Box for Salesforce統合の動作をプログラムによりカスタマイズできます。このツールキットに含まれる複数のグローバルAPEXメソッドを使用して、デフォルトの動作をトリガーしたり、拡張したりできます。このグローバルメソッドにより、内部のSalesforceレコードとBoxフォルダのマッピングを更新し、権限の管理を処理できます。

<Message type="notice">

この機能は最新のBox for [Salesforceパッケージ][sf-package]に含まれています。

</Message>

<Message type="warning">

# このツールキットに含まれない機能

このツールキットは、BOX Content API用のフル機能を備えたAPEXラッパーではありません。このようなラッパーをお求めの場合は、[Box SDK for Salesforce][sf-sdk]を参照してください。

</Message>

## Box CLI

Box CLI is a user-friendly command line tool that allows both technical and non-technical users to leverage Box API to perform routine or bulk actions.

| プラットフォーム   | メンテナンスの有無 | APIパリティ |
| ---------- | --------- | ------- |
| [CLI][cli] | はい        | Full    |

## 公式UIライブラリ

組み込みのUIコンポーネントを使用してアプリケーションを拡張することで、Box上のファイルを参照、共有、プレビューできるようになります。

|                                        |                                                             |                                                        |
| -------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------ |
| 参照                                     | 共有                                                          | プレビュー                                                  |
| ![参照][browseimg]                       | ![共有][shareimg]                                             | ![プレビュー][previewimg]                                   |
| 組み込みのUIを使用して、Box上のファイルをナビゲートおよび操作できます。 | 組み込みのUI Elementを使ってファイルを共有することで、ファイルとフォルダのコラボレーションが可能になります。 | 豊富なプレビュー機能によって、PDFからHDビデオまで、120種類を超えるファイル形式をプレビューできます。 |

| プラットフォーム   |                                                                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iOS        | [Browse SDK][iosbrowsesdk]、[Share SDK][iossharesdk]、[Preview SDK][iospreviewsdk]                                                                                                    |
| Android    | [Browse SDK](https://github.com/box/box-android-browse-sdk)、[Share SDK](https://github.com/box/box-android-share-sdk)、[Preview SDK](https://github.com/box/box-android-preview-sdk) |
| JavaScript | [Box UI Elements](g://embed/ui-elements)                                                                                                                                            |

## 非公式およびコミュニティツール

以下のツールは、Boxで開発され、Boxとそのコミュニティメンバーによって管理されています。このツールについては、定期的な製品更新やセキュリティ更新は提供されません。

| プラットフォーム                        | メンテナンスの有無             | APIパリティ |
| ------------------------------- | --------------------- | ------- |
| [Salesforce SDK][salesforcesdk] | Boxとコミュニティメンバーが限定的に実施 | 部分的     |
| [Ruby SDK][rubysdk]             | Boxとコミュニティメンバーが限定的に実施 | 部分的     |
| [クライアント側JS SDK][jssdk]          | Boxとコミュニティメンバーが限定的に実施 | 部分的     |

<Message type="notice">

**メンテナンス:** メンテナンスが限定されているプロジェクトについては、コミュニティとBoxが協力して更新を実施します。セキュリティ更新は不定期に提供されます。プレミアムサポートプランをご利用の場合、このようなツールに関する緊急の機能リクエストについてはカスタマーサービスにお問い合わせください。このようなプロジェクトに関するその他のサポートクエリについては、GitHubまたは[Developer Forum][forum]を参照してください。

**APIパリティ:** APIパリティが限定されているプロジェクトでは、Box Platformに公開されたときに新しい機能が自動的に導入されないため、一部の機能を使用できない場合があります。プレミアムサポートプランをご利用の場合、このようなツールに関する緊急の機能リクエストについてはカスタマーサービスにお問い合わせください。

</Message>

[javasdk]: https://github.com/box/box-java-sdk

[dotnetsdk]: https://github.com/box/box-windows-sdk-v2

[pythonsdk]: https://github.com/box/box-python-sdk

[nodesdk]: https://github.com/box/box-node-sdk

[iossdk]: https://github.com/box/box-ios-sdk

[androidsdk]: https://github.com/box/box-android-sdk

[android-docs]: https://github.com/box/box-java-sdk/blob/main/doc/android.md

[cli]: https://github.com/box/boxcli

[forum]: https://community.box.com/

[browseimg]: ./browse.jpg

[shareimg]: ./share.jpg

[previewimg]: ./preview.jpg

[iosbrowsesdk]: https://github.com/box/box-ios-browse-sdk

[iossharesdk]: https://github.com/box/box-ios-share-sdk

[iospreviewsdk]: https://github.com/box/box-ios-preview-sdk

[salesforcesdk]: https://github.com/box/box-salesforce-sdk

[rubysdk]: https://github.com/cburnette/boxr

[jssdk]: https://github.com/allenmichael/box-javascript-sdk

[postman]: https://postman.com

[badges]: https://opensource.box.com/badges/

[versioning]: g://tooling/sdks/sdk-versioning

<!-- i18n-enable localize-links -->

[sf-package]: https://support.box.com/hc/ja/articles/360044195713-Box-for-Salesforceのインストールと設定

[sf-sdk]: https://github.com/box/box-salesforce-sdk

<!-- i18n-disable localize-links -->
