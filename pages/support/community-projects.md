---
alias_paths:
  - /docs/community-supported-projects
  - /docs/api-connectors
  - /docs/amazon-web-services
  - /docs/microsoft-azure
  - /docs/aws
  - /page/showcase
centered: true
rank: 1
category_id: support
subcategory_id: null
is_index: false
id: support/community-projects
type: page
total_steps: 1
sibling_id: support
parent_id: support
next_page_id: ''
previous_page_id: support
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/support/community-projects.md
fullyTranslated: true
---
# コミュニティプロジェクト

コミュニティプロジェクトには、Box開発者コミュニティによって作成され公開されたツールとサービスが表示されます。これらは、SDKとラッパー、APIコネクタ、ツールの3つの主要カテゴリに分けられています。

<Message warning>

コミュニティプロジェクトとコネクタはコミュニティで作成、管理されており、Boxが所有または管理するものではありません。

</Message>

プロジェクトを投稿する方法については、[投稿ガイドライン][contribution-guidelines]を参照するか、[メール][email-developer]で当社にご連絡ください。

## SDKとラッパー

<!-- markdownlint-disable line-length -->

| 名前                                     | 言語           | 説明                                                            |
| -------------------------------------- | ------------ | ------------------------------------------------------------- |
| [Box JavaScript SDK][sdk-javascript]   | `Javascript` | Box APIにリクエストを行うためのプロミスベースのクライアントサイドSDK                       |
| [Box Ruby SDK][sdk-ruby]               | `Ruby`       | Box Content API用のRubyクライアントライブラリ                              |
| [Box R SDK][sdk-r]                     | `R`          | Box API用のRインターフェイス                                            |
| [Box Powershell SDK][sdk-powershell]   | `Powershell` | Box APIを呼び出すためのPowerShell SDK                                 |
| [Powershellモジュール][sdk-poshbox]         | `Powershell` | Box Windows SDKを利用してBox環境を管理するPowershellモジュール。Boxを完全に自動化できます。 |
| [Box PHP/Laravelラッパー][sdk-php-laravel] | `PHP`        | Box API用のPHPラッパー                                              |
| [Box PHPラッパー][sdk-ph]                  | `PHP`        | Box API用のPHPラッパー                                              |

<!-- markdownlint-enable line-length -->

## APIコネクタ

<!-- markdownlint-disable line-length -->

| 名前                                         | 説明                                                                    |
| ------------------------------------------ | --------------------------------------------------------------------- |
| [Azure Logic Apps][connector-azure]        | Boxから取得したデータに基づいてビジネスフローを構築できます。                                      |
| [Cloud Elements][connector-cloud-elements] | BoxをHubspot、Salesforce、Microsoft Dynamics、その他の一般的なクラウドサービスと簡単に統合できます。 |
| [IBM Bluemix][connector-bluemix]           | BoxをIBM Bluemixアプリケーションに統合して、コンテンツとデータを活用できます。                        |
| [Kloudless][connector-kloudless]           | アプリをBoxやその他のCRM、カレンダー、ITSMソフトウェアサービスに統合して、機能を強化できます。                  |
| [Mendix][connector-mendix]                 | Mendixアプリケーションプラットフォームで作成したアプリにBoxを接続できます。                            |
| [Microsoft Flow][connector-ms-flow]        | お好きなアプリとサービスを結んで自動化するワークフローを作成して、通知の取得、ファイル同期、データ収集などに利用できます。         |
| [Mulesoft][connector-mulesoft]             | BoxとサードパーティCRM、CMS、モバイルアプリケーション、ソーシャルアプリケーションとのデータ同期とプロセス自動化を実現します。   |
| [Stamplay][connector-stamplay]             | 実際のビジネスプロセスをBoxに接続する自動化ワークフローを構築できます。                                 |
| [Workato][connector-workato]               | BoxをCRM、マーケティング、ERP、サポート、会計アプリと統合することで、文書ワークフローを自動化できます。              |

<!-- markdownlint-enable line-length -->

## ツール

<!-- markdownlint-disable line-length -->

| 名前                     | 言語   | 説明                                 |
| ---------------------- | ---- | ---------------------------------- |
| [ShareX][tools-sharex] | `C#` | Boxにアップロードできるオープンソースのスクリーンキャプチャツール |

<!-- markdownlint-enable line-length -->

[contribution-guidelines]: https://github.com/box-community/community-guidelines/blob/master/.github/CONTRIBUTING.md

[email-developer]: mailto:developer@box.com

[sdk-javascript]: https://github.com/allenmichael/box-javascript-sdk

[sdk-ruby]: https://github.com/cburnette/boxr

[sdk-r]: https://github.com/brendan-r/boxr

[sdk-powershell]: https://github.com/box-community/box-powershell-sdk-v2

[sdk-poshbox]: https://github.com/thelastofreed/PoshBox

[sdk-php-laravel]: https://github.com/maengkom/boxapi

[sdk-ph]: https://github.com/golchha21/BoxPHPAPI

[connector-azure]: https://docs.microsoft.com/en-us/azure/connectors/connectors-create-api-box

[connector-cloud-elements]: http://cloud-elements.com/elements/box/

[connector-bluemix]: https://console.ng.bluemix.net/catalog/services/box

[connector-kloudless]: https://kloudless.com/products/cloud-storage/

[connector-mendix]: https://appstore.home.mendix.com/link/app/40977/

[connector-ms-flow]: https://flow.microsoft.com/en-us/services/shared_box/box/

[connector-mulesoft]: https://docs.mulesoft.com/box-connector/4.0/

[connector-stamplay]: https://github.com/box/mojito

[connector-workato]: https://www.workato.com/integrations/box

[tools-sharex]: https://github.com/ShareX/ShareX
