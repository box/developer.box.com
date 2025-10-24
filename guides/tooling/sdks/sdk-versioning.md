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

The Box core SDKs and the Box Next Generation SDKs were initially created as separate libraries. However, in keeping with industry best practices, **we are consolidating the Box Next Generation SDKs and the Box core SDKs into a single package for each programming language**. This makes migration efforts much easier and allows seamless addition of new capabilities to existing applications still powered by older versions of the Box core SDKs, which were maintained manually.

To facilitate this migration process, there are two actively maintained major Box core SDK versions:

* **A major version that follows sequential versioning for each SDK artifact and includes:** the manually maintained package and the generated one. This SDK version enables leveraging coexisting packages at the same time, and serves as a transition phase. Support for the consolidated version of each Box core SDKs will continue in 2027.
* `v10` that includes **only the generated package**.

Here's what you can expect from generated packages of the Box SDK:

* **APIの全面的なサポート**: 新しいBox SDKにより、開発者はBox APIエコシステム全体をカバーできるようになります。Boxが提供する最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。
* **迅速なAPIの更新**: 自動生成による新しい開発アプローチにより、SDKへのBox APIの追加がさらに速いペースで (数日中に) 可能になります。これは、最新の機能をすぐにアプリケーションで利用できるようになることを意味します。
* **ドキュメントへの埋め込み**: SDKのソースコード内にすべてのオブジェクトとパラメータが直接記述されており、必要な情報が1か所にまとめて保存されています。
* **便利なメソッドの強化**: 新しく導入された便利なメソッドは、認証、分割アップロード、指数バックオフ、自動再試行、型チェック (変数を正しく使用しているかどうかの確認に役立ちます) など、さまざまな側面をカバーします。

## What it means for your project

<TileGrid rows="2">

<Tile type="cog" title="1. Existing App - the Box core SDK" href="/guides/tooling/sdks/sdk-versioning/#migration-from-manually-maintained-sdk-version-to-the-consolidated-sdk-version">

If you have an existing application that relies on the Box core SDK and you wish to further develop your project:

**Action** Use the major version that includes consolidated packages. Start using convenience methods and new features from the generated package, and gradually migrate your codebase. Ultimately, migrate to the Box core SDK package (≥`v10.0.0`).

</Tile>

<Tile type="code-new" title="2. Existing App - the Box Next Generation SDK" href="/guides/tooling/sdks/sdk-versioning/#migration-from-the-box-next-generation-sdks-to-the-box-core-sdks">

If you have an existing application that relies only on the Box Next Generation SDK and you wish to further develop your project:

**Action** Replace the library name in your package manager with the Box core SDK package (≥`v10.0.0`). Check migration guides for detailed instructions.

</Tile>

<Tile type="branch" title="3. Existing App - the Box core SDK and the Box Next Generation SDK" href="/guides/tooling/sdks/sdk-versioning/#migration-from-manually-maintained-sdk-version-to-the-consolidated-sdk-version">

If you have an existing application that relies both on the Box core SDK and the Next Generation SDK:

**Action** Use the major version that includes consolidated packages. Ultimately, migrate to the Box core SDK package (≥`v10.0.0`).

</Tile>

<Tile type="cli2" title="4. A New Application" href="/guides/tooling/sdks/sdk-versioning/#box-core-sdk-versions-and-artifacts-overview">

If you are creating a new application:

**Action** Use ≥`v10.0.0` of the Box core SDK.

</Tile>

<Tile type="info" title="5. No Active Development" href="/guides/tooling/sdks/sdk-versioning/#migration-from-manually-maintained-sdk-version-to-the-consolidated-sdk-version">

If you have an existing application that you don't plan to change:

**Action** Ensure your package manager includes the specific version to prevent accidental updates. We strongly recommend upgrading to the major version, which includes consolidated packages, to receive ongoing security patches and improvements.

</Tile>

</TileGrid>

## バージョン管理の概要

### Box core SDK versions and artifacts overview

| リポジトリ名                               | アーティファクト名               | Includes both packages       | Includes generated package only |
| ------------------------------------ | ----------------------- | ---------------------------- | ------------------------------- |
| [`box-python-sdk`][python-repo]      | `boxsdk`                | [`v4.X.Y`][python-combined]  | [`≥v10.0.0`][python-v10]        |
| [`box-node-sdk`][node-repo]          | `box-node-sdk`          | [`v4.X.Y`][node-combined]    | [`≥v10.0.0`][node-v10]          |
| [`box-java-sdk`][java-repo]          | `box-java-sdk`          | [`v5.X.Y`][java-combined]    | [`≥v10.0.0`][java-v10]          |
| [`box-windows-sdk-v2`][windows-repo] | `Box.V2`, `Box.V2.Core` | [`v6.X.Y`][windows-combined] | [`≥v10.0.0`][windows-v10]       |
| [`box-ios-sdk`][ios-repo]            | `BoxSDK`                | [`v6.X.Y`][ios-combined]     | [`≥v10.0.0`][ios-v10]           |

## Box Next Gen SDKs deprecation

As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts. Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDKs with no impact, but you won't receive new features, updates, or bug fixes.

**All future development, including new features and updates, will be delivered through the Box core SDKs. The standalone generated artifact was introduced in the version `v10` of the Box core SDKs, and it is currently available as a separate branch.**

| リポジトリ名                   | アーティファクト名                | 注                                                       |
| ------------------------ | ------------------------ | ------------------------------------------------------- |
| `box-python-sdk-gen`     | `box-sdk-gen`            | Deprecated, use `boxsdk` [`≥v10.0.0`][python-v10]       |
| `box-typescript-sdk-gen` | `box-typescript-sdk-gen` | Deprecated, use `box-node-sdk` [`≥v10.0.0`][node-v10]   |
| `box-java-sdk-gen`       | `box-java-sdk-gen`       | Deprecated, use `box-java-sdk` [`≥v10.0.0`][java-v10]   |
| `box-dotnet-sdk-gen`     | `Box.Sdk.Gen`            | Deprecated, use `Box.V2.Core` [`≥v10.0.0`][windows-v10] |
| `box-swift-sdk-gen`      | `BoxSdkGen`              | Deprecated, use `BoxSDK` [`≥v10.0.0`][ios-v10]          |

## 移行

### Migration from manually maintained SDK version to the consolidated SDK version

Follow detailed migration guides to migrate from the manually maintained SDK version to the consolidated SDK version:

* [Python `v3` to `v4`][python-migration-v4]
* [Node `v3` to `v4`][node-migration-v4]
* [Java `v4` to `v5`][java-migration-v5]
* [.NET `v5` to `v6`][windows-migration-v6]
* [Swift `v5` to `v6`][ios-migration-v6]

Once your project is upgraded, follow the migration guides and migrate to the generated package.

### Migration to the generated package

Follow detailed migration guides to migrate to the generated package within the Box core SDKs.

* [Python: migrate from `boxsdk` to `box_sdk_gen` package][python-migration-gen]
* [Node: migrate from `box-node-sdk` to `sdk-gen`][node-migration-gen]
* [Java: migrate migrate from `com.box.sdk` to com.`box.sdkgen` package][java-migration-gen]
* [.NET: migrate from `Box.V2` module to `Box.Sdk.Gen` module][windows-migration-gen]
* [Swift: migrate from `BoxSDK` module to `BoxSdkGe`n module][swift-migration-gen]

### Migration from the Box Next Generation SDKs to the Box core SDKs

Follow detailed migration guides to migrate from the Box Next Generation SDKs to the Box core SDK ≥`v10`:

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

[java-v10]: https://github.com/box/box-java-sdk/tree/sdk-gen

[ios-v10]: https://github.com/box/box-ios-sdk/tree/sdk-gen

[node-v10]: https://github.com/box/box-node-sdk/tree/sdk-gen

[python-v10]: https://github.com/box/box-python-sdk/tree/sdk-gen

[windows-v10]: https://github.com/box/box-windows-sdk-v2/tree/sdk-gen

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
