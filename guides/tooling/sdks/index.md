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
# Box SDKs

Box offers a set of SDKs you can use to build your application.

<Message type="notice">

下の表には、SDKが、プロジェクトがメンテナンスされるかどうかとAPIパリティが備わっているかどうかを示す追加情報とともに記載されています。

**メンテナンス**: Boxでは、完全にメンテナンスされるプロジェクトを積極的に開発しています。このようなプロジェクトには最新のセキュリティ更新プログラムや新機能が提供されます。このようなプロジェクトのサポートについては、GitHubまたは[Developer Forum][forum]を参照してください。

**APIパリティ**: 完全なAPIパリティを持つプロジェクトは、Box Platformで利用可能になった時点で、すべてのプラットフォーム機能が積極的に更新されます。部分的なAPIパリティを持つプロジェクトには一部の機能が欠けていますが、Boxではそのようなプロジェクトを完全なパリティに移行する取り組みを進めています。

</Message>

The table lists Box SDKs that you can use when building your applications. For latest API support and features, use the next generation SDKs.

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

## Next Generation SDKs

<Message type="warning">

As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts.

Don't worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDKs with no impact, but you won't receive new features, updates, or bug fixes.

In keeping with industry best practices, we are consolidating the Box Next Generation SDKs and Box core SDKs into a single package for each programming language. This makes migration efforts much easier and allows seamless additions of new capabilities to existing applications still powered by Box core SDKs, which were maintained manually.

All future development, including new features and updates for the Next Generation SDKs, will be delivered through Box core SDKs starting with version `v10`. Currently, `v10` is available as a separate branch.

For more details, see our [SDK versioning strategy document][versioning].

</Message>

The latest generation Box Python SDK, Box TypeScript SDK, Box .NET SDK, and Box Swift SDK are designed to elevate the developer experience and streamline your integration with Box Content Cloud.

新しいSDKに実装予定の機能を以下に示します。

* **Full API support**: New Box SDKs empower developers with complete coverage of the Box API ecosystem. You can access all the latest features and functionalities offered by Box and build feature-rich applications.
* **Rapid API updates**: The new auto-generation development approach allows you to add Box APIs to SDKs at a much faster pace (in a matter of days). This means you can leverage the most up-to-date features in your applications without delay.
* **Embedded documentation**: All objects and parameters are documented directly in the source code of the SDK so all the necessary information is stored in one place.
* **Enhanced convenience methods**: The newly introduced convenience methods cover various aspects such as authentication, chunk uploads, exponential back-offs, automatic retries, type checkers that help to ensure that you’re using variables correctly, and much more.

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
