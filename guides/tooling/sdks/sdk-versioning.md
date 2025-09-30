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

日本時間2025年9月18日をもって、Boxの次世代SDKは、個別のアーティファクトとしてサポートされなくなりました。

既存のコードは、変更しなくても引き続き動作します。Boxの次世代SDKをベースにしたアプリケーションは影響なく引き続きご利用いただけますが、新機能、更新、バグ修正は提供されなくなります。

## 今回の変更を行う理由

Boxでは、業界のベストプラクティスに従って、プログラミング言語ごとにBoxの次世代SDKとBoxコアSDKを1つのパッケージに統合します。これにより、移行作業がさらに容易になり、手動で管理されていたBoxコアSDKを引き続き使用している既存のアプリケーションに新機能をシームレスに追加できるようになります。

次世代SDK向けの新機能や更新を含む、今後の開発はすべて、`v10`以降のBoxコアSDKを通じて提供されます。現在、`v10`は個別のブランチとして利用可能です。

## 仕組み

BoxコアSDKとBoxの次世代SDKは、別々のライブラリとして作成されました。今後、BoxコアSDLのアーティファクトには以下が含まれる予定です。

* `(n+1)` メジャーバージョンには、手動で管理されている**BoxコアSDK**と**Boxの次世代SDK**のアーティファクトが含まれます。このバージョンは、共存するアーティファクトを同時に利用できるようにするほか、移行フェーズとして機能します。この今後のリリースにご期待ください。
* `v10.0.0`バージョンには、**Boxの次世代SDKのアーティファクトのみ**が含まれます。現在、このバージョンは、各SDKリポジトリでブランチとして利用可能です。

## 決定方法

1. 新規アプリケーションを作成する場合は、BoxコアSDKパッケージの`v10`を使用します。
2. **Boxの次世代SDK**を利用している既存のアプリケーションがあり、プロジェクトをさらに発展させたい場合は、パッケージマネージャ内のこのライブラリの名前をBoxコアSDKパッケージ (`v10.0.0`) に置き換えてください。ほとんどのSDKのオブジェクトのインポートは変わらず維持され、コードは現状のままで動作しますが、TypeScript SDKでは、移行のために追加の手順が必要になります。詳細なガイドについては、以下のセクションを確認してください。
3. **BoxコアSDK**を利用している既存のアプリケーションがあり、プロジェクトをさらに進化させたい場合は、リリース後に、ライブラリのバージョンをメジャーリリース1つ分引き上げてください。推奨されているバージョンの詳細な解説については、上の表を参照してください。
4. 変更する予定のない既存のアプリケーションがある場合は、使用しているSDKのバージョンがパッケージマネージャに含まれていることを確認し、不注意による再ビルドによって予期しないバージョンを取得しないようにしてください。

## バージョン管理の概要

### Box SDKのバージョンとアーティファクト

| リポジトリ名                               | アーティファクト名               | 現在の最新バージョン | 両方のSDKのアーティファクトを含むバージョン | Boxの次世代SDKのアーティファクトを含むバージョン |
| ------------------------------------ | ----------------------- | ---------- | ----------------------- | --------------------------- |
| [`box-python-sdk`][python-repo]      | `boxsdk`                | `v3.14.0`  | `v4.X.Y`                | >=`v10.0.0`                 |
| [`box-node-sdk`][node-repo]          | `box-node-sdk`          | `v3.8.2`   | `v4.X.Y`                | >=`v10.0.0`                 |
| [`box-java-sdk`][java-repo]          | `box-java-sdk`          | `v4.16.3`  | `v5.X.Y`                | >=`v10.0.0`                 |
| [`box-windows-sdk-v2`][windows-repo] | `Box.V2`, `Box.V2.Core` | `v5.8.0`   | `v6.X.Y`                | >=`v10.0.0`                 |
| [`box-ios-sdk`][ios-repo]            | `BoxSDK`                | `v5.6.0`   | `v6.X.Y`                | >=`v10.0.0`                 |

### Boxの次世代SDKの公式サポート終了ステータス

| リポジトリ名                   | アーティファクト名                | 現在の最新バージョン | 注                                                          |
| ------------------------ | ------------------------ | ---------- | ---------------------------------------------------------- |
| `box-python-sdk-gen`     | `box-sdk-gen`            | `v1.17.0`  | 公式サポート終了。[`v10.0.0`][python-v10]以上の`boxsdk`を使用してください       |
| `box-typescript-sdk-gen` | `box-typescript-sdk-gen` | `v1.19.1`  | 公式サポート終了。[`v10.0.0`][node-v10]以上の`box-node-sdk`を使用してください   |
| `box-java-sdk-gen`       | `box-java-sdk-gen`       | `v0.8.1`   | 公式サポート終了。[`v10.0.0`][java-v10]以上の`box-java-sdk`を使用してください   |
| `box-dotnet-sdk-gen`     | `Box.Sdk.Gen`            | `v1.12.0`  | 公式サポート終了。[`v10.0.0`][windows-v10]以上の`Box.V2.Core`を使用してください |
| `box-swift-sdk-gen`      | `BoxSdkGen`              | `v0.6.3`   | 公式サポート終了。[`v10.0.0`][ios-v10]以上の`BoxSDK`を使用してください          |

## 移行

### Boxの次世代SDKからBoxコアSDK `v10`への移行

Boxの次世代SDKからBoxコアSDK `v10`に移行するには、以下の詳細な移行ガイドに従います。

* [Python][python-migration]
* [TypeScript][ts-migration]
* [Java][java-migration]
* [.NET][dotnet-migration]
* [Swift][swift-migration]

[node-repo]: https://github.com/box/box-node-sdk

[windows-repo]: https://github.com/box/box-windows-sdk-v2

[java-repo]: https://github.com/box/box-java-sdk

[python-repo]: https://github.com/box/box-python-sdk

[ios-repo]: https://github.com/box/box-ios-sdk

[java-v10]: https://github.com/box/box-java-sdk/tree/sdk-gen

[ios-v10]: https://github.com/box/box-ios-sdk/tree/sdk-gen

[node-v10]: https://github.com/box/box-windows-sdk-v2/tree/sdk-gen

[python-v10]: https://github.com/box/box-python-sdk/tree/sdk-gen

[windows-v10]: https://github.com/box/box-windows-sdk-v2/tree/sdk-gen

[java-migration]: https://github.com/box/box-java-sdk/blob/sdk-gen/migration-guides/from-box-java-sdk-gen-v0-to-box-java-sdk-v10.md

[python-migration]: https://github.com/box/box-python-sdk/blob/sdk-gen/migration-guides/from-box-python-sdk-gen-v1-to-box-python-sdk-v10.md

[swift-migration]: https://github.com/box/box-ios-sdk/blob/sdk-gen/migration-guides/from-box-swift-sdk-gen-v0-to-box-ios-sdk-v10.md

[ts-migration]: https://github.com/box/box-node-sdk/blob/sdk-gen/docs/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk-v10.md

[dotnet-migration]: https://github.com/box/box-windows-sdk-v2/blob/sdk-gen/migration-guides/from-dotnet-sdk-gen-v1-to-box-windows-sdk-v10.md
