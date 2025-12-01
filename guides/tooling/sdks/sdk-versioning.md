---
rank: 1
related_endpoints: []
related_guides:
  - authentication/jwt
  - authentication/oauth2
related_pages:
  - sdks-and-tools
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/sdk-versioning
type: guide
total_steps: 11
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/dotnet
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/sdk-versioning.md
fullyTranslated: true
---
# Box SDKのバージョン戦略

BoxコアSDKとBoxの次世代SDKは、別々のライブラリとして作成されましたが、Boxでは、業界のベストプラクティスに従って、**プログラミング言語ごとにBoxの次世代SDKとBoxコアSDKを1つのパッケージに統合します**。これにより、移行作業がさらに容易になり、手動で管理されていたBoxコアSDKの古いバージョンを引き続き使用している既存のアプリケーションに新機能をシームレスに追加できるようになります。

この移行プロセスを容易にするために、積極的に管理されているBoxコアSDKのメジャーバージョンが2つあります。

* **SDKのアーティファクトごとにシーケンシャルなバージョン管理に従っているメジャーバージョン**。これには、手動で管理されているパッケージと生成されたパッケージが含まれます。このSDKバージョンは、共存するパッケージを同時に利用できるようにするほか、移行フェーズとして機能します。各BoxコアSDKの統合バージョンのサポートは2027年も継続されます。
* **生成されたパッケージのみ**を含む`v10`。

Box SDKの生成されたパッケージに実装予定の機能を以下に示します。

* **APIの全面的なサポート**: 新しいBox SDKにより、開発者はBox APIエコシステム全体をカバーできるようになります。Boxが提供する最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。
* **迅速なAPIの更新**: 自動生成による新しい開発アプローチにより、SDKへのBox APIの追加がさらに速いペースで (数日中に) 可能になります。これは、最新の機能をすぐにアプリケーションで利用できるようになることを意味します。
* **ドキュメントへの埋め込み**: SDKのソースコード内にすべてのオブジェクトとパラメータが直接記述されており、必要な情報が1か所にまとめて保存されています。
* **便利なメソッドの強化**: 新しく導入された便利なメソッドは、認証、分割アップロード、指数バックオフ、自動再試行、型チェック (変数を正しく使用しているかどうかの確認に役立ちます) など、さまざまな側面をカバーします。

## プロジェクトに必要な対応

<TileGrid rows="2">

<Tile type="cog" title="1. 既存のアプリ - BoxコアSDK" href="/guides/tooling/sdks/sdk-versioning/#migration-from-manually-maintained-sdk-version-to-the-consolidated-sdk-version">

BoxコアSDKを利用している既存のアプリケーションがあり、プロジェクトをさらに進化させたい場合:

**対応** 統合されたパッケージを含むメジャーバージョンを使用します。生成されたパッケージから便利なメソッドや新機能の使用を開始し、段階的にコードベースを移行します。最終的には、BoxコアSDKパッケージ (`v10.0.0`以上) に移行します。

</Tile>

<Tile type="code-new" title="2. 既存のアプリ - Boxの次世代SDK" href="/guides/tooling/sdks/sdk-versioning/#migration-from-the-box-next-generation-sdks-to-the-box-core-sdks">

Boxの次世代SDKを利用している既存のアプリケーションがあり、プロジェクトをさらに進化させたい場合:

**対応** パッケージマネージャ内のライブラリ名をBoxコアSDKパッケージ (`v10.0.0`以上) に置き換えます。詳細な手順については、移行ガイドを確認してください。

</Tile>

<Tile type="branch" title="3. 既存のアプリ - BoxコアSDKおよびBoxの次世代SDK" href="/guides/tooling/sdks/sdk-versioning/#migration-from-manually-maintained-sdk-version-to-the-consolidated-sdk-version">

BoxコアSDKと次世代SDKの両方を利用している既存のアプリケーションがある場合:

**対応** 統合されたパッケージを含むメジャーバージョンを使用します。最終的には、BoxコアSDKパッケージ (`v10.0.0`以上) に移行します。

</Tile>

<Tile type="cli2" title="4. 新規アプリケーション" href="/guides/tooling/sdks/sdk-versioning/#box-core-sdk-versions-and-artifacts-overview">

新規アプリケーションを作成する場合:

**対応** BoxコアSDKの`v10.0.0`以上を使用します。

</Tile>

<Tile type="info" title="5. 積極的な開発なし" href="/guides/tooling/sdks/sdk-versioning/#migration-from-manually-maintained-sdk-version-to-the-consolidated-sdk-version">

変更する予定のない既存のアプリケーションがある場合:

**対応** パッケージマネージャに特定のバージョンを含めることで、誤って更新されないようにします。Boxでは、統合されたパッケージを含むメジャーバージョンにアップグレードして、継続しているセキュリティパッチや改善が提供されるようにすることを強くお勧めします。

</Tile>

</TileGrid>

## バージョン管理の概要

### BoxコアSDKのバージョンとアーティファクトの概要

| リポジトリ名                               | アーティファクト名               | 両方のパッケージを含む                  | 生成されたパッケージのみを含む           |
| ------------------------------------ | ----------------------- | ---------------------------- | ------------------------- |
| [`box-python-sdk`][python-repo]      | `boxsdk`                | [`v4.X.Y`][python-combined]  | [`≥v10.0.0`][python-v10]  |
| [`box-node-sdk`][node-repo]          | `box-node-sdk`          | [`v4.X.Y`][node-combined]    | [`≥v10.0.0`][node-v10]    |
| [`box-java-sdk`][java-repo]          | `box-java-sdk`          | [`v5.X.Y`][java-combined]    | [`≥v10.0.0`][java-v10]    |
| [`box-windows-sdk-v2`][windows-repo] | `Box.V2`, `Box.V2.Core` | [`v6.X.Y`][windows-combined] | [`≥v10.0.0`][windows-v10] |
| [`box-ios-sdk`][ios-repo]            | `BoxSDK`                | [`v6.X.Y`][ios-combined]     | [`≥v10.0.0`][ios-v10]     |

## Boxの次世代SDKの公式サポート終了

日本時間2025年9月18日をもって、Boxの次世代SDKは、個別のアーティファクトとしてサポートされなくなりました。既存のコードは、変更しなくても引き続き動作します。Boxの次世代SDKをベースにしたアプリケーションは影響なく引き続きご利用いただけますが、新機能、更新、バグ修正は提供されなくなります。

**All future development, including new features and updates, will be delivered through the Box core SDKs. The standalone generated artifact was introduced in the version `v10` of the Box core SDKs.**

| リポジトリ名                   | アーティファクト名                | 注                                                         |
| ------------------------ | ------------------------ | --------------------------------------------------------- |
| `box-python-sdk-gen`     | `box-sdk-gen`            | 公式サポート終了。`boxsdk` [`≥v10.0.0`][python-v10]を使用してください       |
| `box-typescript-sdk-gen` | `box-typescript-sdk-gen` | 公式サポート終了。`box-node-sdk` [`≥v10.0.0`][node-v10]を使用してください   |
| `box-java-sdk-gen`       | `box-java-sdk-gen`       | 公式サポート終了。`box-java-sdk` [`≥v10.0.0`][java-v10]を使用してください   |
| `box-dotnet-sdk-gen`     | `Box.Sdk.Gen`            | 公式サポート終了。`Box.V2.Core` [`≥v10.0.0`][windows-v10]を使用してください |
| `box-swift-sdk-gen`      | `BoxSdkGen`              | 公式サポート終了。`BoxSDK` [`≥v10.0.0`][ios-v10]を使用してください          |

## 移行

### 手動で管理されているSDKバージョンから統合されたSDKバージョンへの移行

手動で管理されているSDKバージョンから統合されたSDKバージョンに移行するには、以下の詳細な移行ガイドに従います。

* [Python `v3`から`v4`][python-migration-v4]
* [Node `v3`から`v4`][node-migration-v4]
* [Java `v4`から`v5`][java-migration-v5]
* [.NET `v5`から`v6`][windows-migration-v6]
* [Swift `v5`から`v6`][ios-migration-v6]

プロジェクトがアップグレードされたら、移行ガイドに従って、生成されたパッケージに移行します。

### 生成されたパッケージへの移行

BoxコアSDK内で生成されたパッケージに移行するには、以下の詳細な移行ガイドに従います。

* [Python: `boxsdk`から`box_sdk_gen`パッケージに移行する][python-migration-gen]
* [Node: `box-node-sdk`から`sdk-gen`に移行する][node-migration-gen]
* [Java: `com.box.sdk`からcom.`box.sdkgen`パッケージに移行する][java-migration-gen]
* [.NET: `Box.V2`モジュールから`Box.Sdk.Gen`モジュールに移行する][windows-migration-gen]
* [Swift: `BoxSDK`モジュールから`BoxSdkGe`nモジュールに移行する][swift-migration-gen]

### Boxの次世代SDKからBoxコアSDKへの移行

Boxの次世代SDKからBoxコアSDK `v10`以上に移行するには、以下の詳細な移行ガイドに従います。

* [Python][python-migration-next-gen]
* [TypeScript/Node][ts-migration-next-gen]
* [Java][java-migration-next-gen]
* [.NET][dotnet-migration-next-gen]
* [Swift][swift-migration-next-gen]

[node-repo]: https://github.com/box/box-node-sdk

[windows-repo]: https://github.com/box/box-windows-sdk-v2

[java-repo]: https://github.com/box/box-java-sdk

[python-repo]: https://github.com/box/box-python-sdk

[ios-repo]: https://github.com/box/box-ios-sdk

[java-v10]: https://github.com/box/box-java-sdk/tree/main

[ios-v10]: https://github.com/box/box-ios-sdk/tree/main

[node-v10]: https://github.com/box/box-node-sdk/tree/main

[python-v10]: https://github.com/box/box-python-sdk/tree/main

[windows-v10]: https://github.com/box/box-windows-sdk-v2/tree/main

[python-combined]: https://github.com/box/box-python-sdk/tree/combined-sdk

[java-combined]: https://github.com/box/box-java-sdk/tree/combined-sdk

[node-combined]: https://github.com/box/box-node-sdk/tree/combined-sdk

[ios-combined]: https://github.com/box/box-ios-sdk/tree/combined-sdk

[windows-combined]: https://github.com/box/box-windows-sdk-v2/tree/combined-sdk

[python-migration-v4]: https://github.com/box/box-python-sdk/blob/combined-sdk/migration-guides/from-v3-to-v4.md

[node-migration-v4]: https://github.com/box/box-node-sdk/blob/combined-sdk/migration-guides/from-v3-to-v4.md

[ios-migration-v6]: https://github.com/box/box-ios-sdk/blob/combined-sdk/migration-guides/from-v5-to-v6.md

[windows-migration-v6]: https://github.com/box/box-windows-sdk-v2/blob/combined-sdk/migration-guides/from-v5-to-v6.md

[java-migration-v5]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-v4-to-v5.md

[java-migration-next-gen]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-box-java-sdk-gen-v0-to-box-java-sdk.md

[python-migration-next-gen]: https://github.com/box/box-python-sdk/blob/combined-sdk/migration-guides/from-box-python-sdk-gen-v1-to-box-python-sdk.md

[swift-migration-next-gen]: https://github.com/box/box-ios-sdk/blob/combined-sdk/migration-guides/from-box-swift-sdk-gen-v0-to-box-ios-sdk.md

[ts-migration-next-gen]: https://github.com/box/box-node-sdk/blob/combined-sdk/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md

[dotnet-migration-next-gen]: https://github.com/box/box-windows-sdk-v2/blob/combined-sdk/migration-guides/from-dotnet-sdk-gen-v1-to-box-windows-sdk.md

[python-migration-gen]: https://github.com/box/box-python-sdk/blob/combined-sdk/migration-guides/from-boxsdk-to-box_sdk_gen.md

[windows-migration-gen]: https://github.com/box/box-windows-sdk-v2/blob/combined-sdk/migration-guides/from-box-v2-to-box-sdk-gen-namespace.md

[swift-migration-gen]: https://github.com/box/box-ios-sdk/blob/combined-sdk/migration-guides/from-BoxSDK-to-BoxSdkGen.md

[java-migration-gen]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-com-box-sdk-to-com-box-sdkgen.md

[node-migration-gen]: https://github.com/box/box-node-sdk/blob/combined-sdk/migration-guides/from-box-node-sdk-to-sdk-gen.md
