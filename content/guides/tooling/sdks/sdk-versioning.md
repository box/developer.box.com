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
---

# Box SDK versioning strategy

Box core SDKs and Box Next Generation SDKs were initially created as separate libraries. However, in keeping with industry best practices, **we are consolidating the Box Next Generation SDKs and the Box core SDKs into a single package for each programming language**. This makes migration efforts much easier and allows seamless addition of new capabilities to existing applications still powered by older versions of the Box core SDKs, which were maintained manually.

To facilitate this migration process, there are two actively maintained major Box core SDK versions:

- **The latest major version that follows sequential versioning includes:** the manually maintained package and the generated one. This SDK version enables leveraging coexisting packages at the same time, and serve as a transition phase. Support for the consolidated version of each Box core SDKs will continue in 2027.
- `v10` includes **only the generated package**.

Here's what you can expect from generated packages of the Box SDK:

- **Full API support**: New Box SDKs empower developers with complete coverage of the Box API ecosystem. You can access all the latest features and functionalities offered by Box and build feature-rich applications.
- **Rapid API updates**: The new auto-generation development approach allows you to add Box APIs to SDKs at a much faster pace (in a matter of days). This means you can leverage the most up-to-date features in your applications without delay.
- **Embedded documentation**: All objects and parameters are documented directly in the source code of the SDK so all the necessary information is stored in one place.
- **Enhanced convenience methods**: The newly introduced convenience methods cover various aspects such as authentication, chunk uploads, exponential back-offs, automatic retries, type checkers that help to ensure that you’re using variables correctly, and much more.

## What it means for your project

<TileGrid rows="2">
  <Tile type="cog" title="1. Existing App - the Box core SDK" href="/guides/tooling/sdks/sdk-versioning/#migration-to-the-generated-package">
    If you have an existing application that relies on the Box core SDK and you wish to further develop your project:

    **Action** Use the major version that includes consolidated packages. Start using convenience methods and new features from the generated package, and gradually migrate your codebase.
  </Tile>
  <Tile type="code-new" title="2. Existing App - the Box Next Generation SDK" href="/guides/tooling/sdks/sdk-versioning/#migration-from-box-next-generation-sdks">
    If you have an existing application that relies only on the Box Next Generation SDK and you wish to further develop your project:

    **Action** Replace the library name in your package manager with Box core SDK package (≥`v10.0.0`). Check migration guides for detailed instructions.
  </Tile>
  <Tile type="branch" title="3. Existing App - the Box core SDK and the Box Next Generation SDK" href="/guides/tooling/sdks/sdk-versioning/#migration-to-the-generated-package">
    If you have an existing application that relies both on Box core SDK and  Next Generation SDK:

    **Action** Use the major version that includes consolidated packages.
  </Tile>
  <Tile type="cli2" title="4. New Application" href="/guides/tooling/sdks/sdk-versioning/#box-core-sdk-versions-and-artifacts-overview">
    If you are creating a new application:

    **Action** Use ≥`v10.0.0` of the Box core SDK.
  </Tile>
  <Tile type="info" title="5. No Active Development" href="/guides/tooling/sdks/sdk-versioning/#box-core-sdk-versions-and-artifacts-overview">
    If you have an existing application that you don't plan to change:

    **Action** Ensure your package manager includes the specific version to prevent accidental updates. We strongly recommend upgrading to the major version, which includes consolidated packages, to receive ongoing security patches and improvements.
  </Tile>
</TileGrid>

## Versioning overview

### Box core SDK versions and artifacts overview

| Repository name  | Artifact name |  Includes both packages | Includes generated package only |
|--------------|------|---------|----------|
| [`box-python-sdk`][python-repo] | `boxsdk` | [`v4.X.Y`][python-combined] | [`≥v10.0.0`][python-v10] |
| [`box-node-sdk`][node-repo]  | `box-node-sdk` | [`v4.X.Y`][node-combined] | [`≥v10.0.0`][node-v10] |
| [`box-java-sdk`][java-repo] |  `box-java-sdk` | [`v5.X.Y`][java-combined] | [`≥v10.0.0`][java-v10] |
| [`box-windows-sdk-v2`][windows-repo] | `Box.V2`, `Box.V2.Core` | [`v6.X.Y`][windows-combined] | [`≥v10.0.0`][windows-v10] |
| [`box-ios-sdk`][ios-repo] | `BoxSDK` | [`v6.X.Y`][ios-combined] | [`≥v10.0.0`][ios-v10] |

## Box Next Gen SDKs deprecation

As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts. Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDKs with no impact, but you won't receive new features, updates, or bug fixes.

**All future development, including new features and updates, will be delivered through the Box core SDKs. The standalone generated artifact was introduced in the version `v10` of the Box core SDKs, and it is currently available as a separate branch.**

| Repository name | Artifact name |  Note  |
|------|---------------|--------|
|`box-python-sdk-gen` | `box-sdk-gen` | Deprecated, use `boxsdk` [`≥v10.0.0`][python-v10] |
| `box-typescript-sdk-gen` | `box-typescript-sdk-gen` | Deprecated, use `box-node-sdk` [`≥v10.0.0`][node-v10] |
| `box-java-sdk-gen` | `box-java-sdk-gen` | Deprecated, use `box-java-sdk` [`≥v10.0.0`][java-v10]  |
| `box-dotnet-sdk-gen` | `Box.Sdk.Gen` | Deprecated, use `Box.V2.Core` [`≥v10.0.0`][windows-v10] |
| `box-swift-sdk-gen` | `BoxSdkGen` | Deprecated, use `BoxSDK` [`≥v10.0.0`][ios-v10] |

## Migration

### Migration to the generated package

- [Python][python-migration]
- [Node][node-migration]
- [Java][java-migration]
- [.NET][windows-migration] 
- [Swift][ios-migration]

### Migration from Box Next Generation SDKs

Follow detailed migration guides to migrate from the Box Next Generation SDKs to the Box core SDK `v10`:

- [Python][python-migration-v10]
- [TypeScript/Node][ts-migration-v10]
- [Java][java-migration-v10]
- [.NET][dotnet-migration-v10]
- [Swift][swift-migration-v10]

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

[java-migration-v10]: https://github.com/box/box-java-sdk/blob/sdk-gen/migration-guides/from-box-java-sdk-gen-v0-to-box-java-sdk.md
[python-migration-v10]: https://github.com/box/box-python-sdk/blob/sdk-gen/migration-guides/from-box-python-sdk-gen-v1-to-box-python-sdk.md
[swift-migration-v10]: https://github.com/box/box-ios-sdk/blob/sdk-gen/migration-guides/from-box-swift-sdk-gen-v0-to-box-ios-sdk.md
[ts-migration-v10]: https://github.com/box/box-node-sdk/blob/sdk-gen/docs/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md
[dotnet-migration-v10]: https://github.com/box/box-windows-sdk-v2/blob/sdk-gen/migration-guides/from-dotnet-sdk-gen-v1-to-box-windows-sdk.md

[python-combined]: https://github.com/box/box-python-sdk/tree/combined-sdk
[java-combined]: https://github.com/box/box-java-sdk/tree/combined-sdk
[node-combined]: https://github.com/box/box-node-sdk/tree/combined-sdk
[ios-combined]: https://github.com/box/box-ios-sdk/tree/combined-sdk
[windows-combined]: https://github.com/box/box-windows-sdk-v2/tree/combined-sdk

[java-migration]: https://github.com/box/box-java-sdk/blob/sdk-gen/migration-guides/from-box-java-sdk-gen-v0-to-box-java-sdk.md
[ios-migration]: https://github.com/box/box-ios-sdk/blob/sdk-gen/migration-guides/from-box-swift-sdk-gen-v0-to-box-ios-sdk.md
[node-migration]: https://github.com/box/box-node-sdk/blob/sdk-gen/docs/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md
[python-migration]: https://github.com/box/box-python-sdk/blob/sdk-gen/migration-guides/from-box-python-sdk-gen-v1-to-box-python-sdk.md
[windows-migration]: https://github.com/box/box-windows-sdk-v2/blob/sdk-gen/migration-guides/from-dotnet-sdk-gen-v1-to-box-windows-sdk.md
