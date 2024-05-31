---
rank: 40
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/install-the-sdk
  - /docs/open-source-projects
  - /docs/community-supported-projects
category_id: tooling
subcategory_id: tooling/sdks
is_index: true
id: tooling/sdks
type: guide
total_steps: 5
sibling_id: tooling
parent_id: tooling
next_page_id: ''
previous_page_id: tooling/sdks/salesforce
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/index.md
fullyTranslated: true
---
# SDK

Boxには、アプリケーションの作成に使用できる一連のSDKが用意されています。次世代の.NET SDKもここに新しく追加されました。これはまだベータ機能ですが、試しに使用して、備わっているすべての機能を確認することができます。

<Message type="notice">

下の表には、SDKが、プロジェクトがメンテナンスされるかどうかとAPIパリティが備わっているかどうかを示す追加情報とともに記載されています。

**メンテナンス**: Boxでは、完全にメンテナンスされるプロジェクトを積極的に開発しています。このようなプロジェクトには最新のセキュリティ更新プログラムや新機能が提供されます。このようなプロジェクトのサポートについては、GitHubまたは[Developer Forum][forum]を参照してください。

**APIパリティ**: 完全なAPIパリティを持つプロジェクトは、Box Platformで利用可能になった時点で、すべてのプラットフォーム機能が積極的に更新されます。部分的なAPIパリティを持つプロジェクトには一部の機能が欠けていますが、Boxではそのようなプロジェクトを完全なパリティに移行する取り組みを進めています。

</Message>

## 次世代のSDK

最新世代のBox Python SDK、Box Typescript SDK、.NET SDKは、開発者エクスペリエンスを向上させ、Boxコンテンツクラウドとの統合を効率化することを目的としています。

<Message type="notice">

.NET SDKはパブリックベータ段階です。

</Message>

新しいSDKに実装予定の機能を以下に示します。

* **APIの全面的なサポート**: 新しいBox SDKにより、開発者はBox APIエコシステム全体をカバーできるようになります。Boxが提供する最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。
* **迅速なAPIの更新**: 自動生成による新しい開発アプローチにより、SDKへのBox APIの追加がさらに速いペースで (数日中に) 可能になります。これは、最新の機能をすぐにアプリケーションで利用できるようになることを意味します。
* **ドキュメントへの埋め込み**: 必要な情報すべてが1か所に保存されるように、すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述されます。
* **便利なメソッドの強化**: 新しく導入された便利なメソッドは、認証、分割アップロード、指数バックオフ、自動再試行、型チェック (変数を正しく使用しているかどうかの確認に役立ちます) など、さまざまな側面をカバーします。

| プラットフォーム                       | メンテナンスの有無 | APIパリティ |
| ------------------------------ | --------- | ------- |
| [Pythonの次世代SDK][pythongensdk]  | はい        | Full    |
| [Typescriptの次世代SDK][tsgensdk]  | はい        | Full    |
| [.NET SDK][dotnetgensdk] (ベータ) | はい        | Full    |

## SDK

次の表に、アプリケーションの作成時に使用できるBox SDKを示します。

| プラットフォーム                          | メンテナンスの有無 | APIパリティ |
| --------------------------------- | --------- | ------- |
| [Java SDK][javasdk]               | はい        | Full    |
| [.NET SDK][dotnetsdk]             | はい        | Full    |
| [Python SDK][pythonsdk]           | はい        | Full    |
| [Node SDK][nodesdk]               | はい        | Full    |
| [iOS Content SDK][iossdk]         | はい        | Full    |
| [Android Content SDK][androidsdk] | いいえ       | 部分的     |

<Message type="warning">

日本時間2023年6月1日をもって、Android SDKのサポートは終了しました。既存のAndroid SDKアプリケーションは影響なく引き続きご利用いただけますが、新機能、更新、バグ修正は提供されなくなります。

最新のAndroid機能を引き続き利用するには、Java SDKを使用してAndroid版アプリを作成してください。詳細については、[こちら][android-docs]のドキュメントを参照してください。

</Message>

<!-- i18n-enable localize-links -->

[javasdk]: https://github.com/box/box-java-sdk

[dotnetsdk]: https://github.com/box/box-windows-sdk-v2

[pythonsdk]: https://github.com/box/box-python-sdk

[nodesdk]: https://github.com/box/box-node-sdk

[iossdk]: https://github.com/box/box-ios-sdk

[androidsdk]: https://github.com/box/box-android-sdk

[pythongensdk]: https://github.com/box/box-python-sdk-gen

[tsgensdk]: https://github.com/box/box-typescript-sdk-gen

[dotnetgensdk]: https://github.com/box/box-dotnet-sdk-gen

[android-docs]: https://github.com/box/box-java-sdk/blob/main/doc/android.md

[forum]: https://support.box.com/hc/ja/community/topics/360001932973-Platform-and-Developer-Forum

<!-- i18n-disable localize-links -->
