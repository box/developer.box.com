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
total_steps: 11
sibling_id: tooling
parent_id: tooling
next_page_id: ''
previous_page_id: tooling/sdks/java-gen
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/index.md
fullyTranslated: true
---
# Box SDK

Boxには、アプリケーションの作成に使用できる一連のSDKが用意されています。

<Message type="notice">

下の表には、SDKが、プロジェクトがメンテナンスされるかどうかとAPIパリティが備わっているかどうかを示す追加情報とともに記載されています。

**メンテナンス**: Boxでは、完全にメンテナンスされるプロジェクトを積極的に開発しています。このようなプロジェクトには最新のセキュリティ更新プログラムや新機能が提供されます。このようなプロジェクトのサポートについては、GitHubまたは[Developer Forum][forum]を参照してください。

**APIパリティ**: 完全なAPIパリティを持つプロジェクトは、Box Platformで利用可能になった時点で、すべてのプラットフォーム機能が積極的に更新されます。部分的なAPIパリティを持つプロジェクトには一部の機能が欠けていますが、Boxではそのようなプロジェクトを完全なパリティに移行する取り組みを進めています。

</Message>

次の表に、アプリケーションの作成時に使用できるBox SDKを示します。最新のAPIサポートや機能には、次世代のSDKを使用してください。

| プラットフォーム                          | メンテナンスの有無 | APIパリティ |
| --------------------------------- | --------- | ------- |
| [Java SDK][javasdk]               | はい        | Full    |
| [iOS Content SDK][iossdk]         | はい        | Full    |
| [.NET SDK][dotnetsdk]             | はい        | Full    |
| [Python SDK][pythonsdk]           | はい        | Full    |
| [Node SDK][nodesdk]               | はい        | Full    |
| [Android Content SDK][androidsdk] | いいえ       | Full    |

<Message type="warning">

日本時間2023年6月1日をもって、Android SDKのサポートは終了しました。既存のAndroid SDKアプリケーションは影響なく引き続きご利用いただけますが、新機能、更新、バグ修正は提供されなくなります。

最新のAndroid機能を引き続き利用するには、Java SDKを使用してAndroid版アプリを作成してください。詳細については、[こちら][android-docs]のドキュメントを参照してください。

</Message>

## 次世代のSDK

<Message type="warning">

日本時間2025年9月18日をもって、Boxの次世代SDKは、個別のアーティファクトとしてサポートされなくなりました。

既存のコードは、変更しなくても引き続き動作します。Boxの次世代SDKをベースにしたアプリケーションは影響なく引き続きご利用いただけますが、新機能、更新、バグ修正は提供されなくなります。

Boxでは、業界のベストプラクティスに従って、プログラミング言語ごとにBoxの次世代SDKとBoxコアSDKを1つのパッケージに統合します。これにより、移行作業がさらに容易になり、手動で管理されていたBoxコアSDKを引き続き使用している既存のアプリケーションに新機能をシームレスに追加できるようになります。

次世代SDK向けの新機能や更新を含む、今後の開発はすべて、`v10`以降のBoxコアSDKを通じて提供されます。現在、`v10`は個別のブランチとして利用可能です。

詳細については、[SDKのバージョン戦略に関するドキュメント][versioning]を参照してください。

</Message>

最新世代のBox Python SDK、Box TypeScript SDK、Box .NET SDK、Box Swift SDKは、開発者エクスペリエンスを向上させ、Boxコンテンツクラウドとの統合を効率化することを目的としています。

新しいSDKに実装予定の機能を以下に示します。

* **APIの全面的なサポート**: 新しいBox SDKにより、開発者はBox APIエコシステム全体をカバーできるようになります。Boxが提供する最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。
* **迅速なAPIの更新**: 自動生成による新しい開発アプローチにより、SDKへのBox APIの追加がさらに速いペースで (数日中に) 可能になります。これは、最新の機能をすぐにアプリケーションで利用できるようになることを意味します。
* **ドキュメントへの埋め込み**: 必要な情報すべてが1か所に保存されるように、すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述されます。
* **便利なメソッドの強化**: 新しく導入された便利なメソッドは、認証、分割アップロード、指数バックオフ、自動再試行、型チェック (変数を正しく使用しているかどうかの確認に役立ちます) など、さまざまな側面をカバーします。

<!-- i18n-enable localize-links -->

[javasdk]: https://github.com/box/box-java-sdk

[dotnetsdk]: https://github.com/box/box-windows-sdk-v2

[pythonsdk]: https://github.com/box/box-python-sdk

[nodesdk]: https://github.com/box/box-node-sdk

[iossdk]: https://github.com/box/box-ios-sdk

[androidsdk]: https://github.com/box/box-android-sdk

[android-docs]: https://github.com/box/box-java-sdk/blob/main/doc/android.md

[versioning]: g://tooling/sdks/sdk-versioning

[forum]: https://community.box.com/sdks-and-tools-7

<!-- i18n-disable localize-links -->
