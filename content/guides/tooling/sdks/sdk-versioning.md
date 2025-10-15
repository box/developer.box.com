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

Box core SDKs and Box Next Generation SDKs were created as separate libraries. However, in keeping with industry best practices, **we are consolidating the Box Next Generation SDKs and Box core SDKs into a single package for each programming language**. This makes migration efforts much easier and allows seamless addition of new capabilities to existing applications still powered by older versions of Box core SDKs, which were maintained manually.

To facilitate this migration process, there are two actively maitained major Box core SDK versions:

- **the current major version which includes:** the manually maintained package and the generated one. This SDK version enables leveraging coexisting packages at the same time, and serve as a transition phase. This versionSDK will be supported until 2027.
- `v10` includes **only the generated package**. This version is available as a branch for each Box core SDK repository.

Here's what you can expect from generated packages:

- **Full API support**: New Box SDKs empower developers with complete coverage of the Box API ecosystem. You can access all the latest features and functionalities offered by Box and build feature-rich applications.
- **Rapid API updates**: The new auto-generation development approach allows you to add Box APIs to SDKs at a much faster pace (in a matter of days). This means you can leverage the most up-to-date features in your applications without delay.
- **Embedded documentation**: All objects and parameters are documented directly in the source code of the SDK so all the necessary information is stored in one place.
- **Enhanced convenience methods**: The newly introduced convenience methods cover various aspects such as authentication, chunk uploads, exponential back-offs, automatic retries, type checkers that help to ensure that you’re using variables correctly, and much more.

## What does it mean for your project

<TileGrid rows="2">
  <Tile type="cog" title="1. Existing App - Box core SDK" href="/">
    If you have an existing application relying on Box core SDK and you wish to further develop your project:

    **Action** Use the major version with consolidated packages. Start leveraging convenience methods, new features thanks to the generated package, and gradually migrate your code base.
  </Tile>
  <Tile type="code-new" title="2. Existing App - Next Generation SDK" href="/guides/tooling/sdks/sdk-versioning/#migrating-from-box-next-generation-sdks-to-core-box-sdk-v10">
    If you have an existing application relying on the Box Next Generation SDK and you wish to further develop your project:

    **Action** Replace the library name in your package manager with Box core SDK package (≥`v10.0.0`). Check migration guides for more details.
  </Tile>
  <Tile type="branch" title="3. New Application" href="/guides/tooling/sdks/sdk-versioning/#box-core-sdk-versions-and-artifacts-overview">
    If you are creating a new application:

    **Action** Use ≥`v10.0.0` of the Box core SDK package.
  </Tile>
  <Tile type="info" title="4. No Active Development" href="/guides/tooling/sdks/sdk-versioning/#box-sdk-versions-and-artifacts">
    If you have an existing application that you don't plan to change:

    **Action** Ensure your package manager includes the specific version of SDK version to prevent accidental updates. We strongly recommend upgrading to current major version to receive ongoing security patches and improvements.
  </Tile>
</TileGrid>

## Versioning overview

### Box core SDK versions and artifacts overview

| Repository name  | Artifact name |  Includes two packages | Includes the only generated package|
|--------------|------|---------|----------|
| [`box-python-sdk`][python-repo] | `boxsdk` | `v4.X.Y` | [`≥v10.0.0`][python-v10] |
| [`box-node-sdk`][node-repo]  | `box-node-sdk` | `v4.X.Y` | [`≥v10.0.0`][node-v10] |
| [`box-java-sdk`][java-repo] |  `box-java-sdk` | `v5.X.Y`| [`≥v10.0.0`][java-v10] |
| [`box-windows-sdk-v2`][windows-repo] | `Box.V2`, `Box.V2.Core` | `v6.X.Y`| [`≥v10.0.0`][windows-v10] |
| [`box-ios-sdk`][ios-repo] | `BoxSDK` | `v6.X.Y`| [`≥v10.0.0`][ios-v10] |

## Box Next Gen SDKs deprecation

As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts. Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDKs with no impact, but you won't receive new features, updates, or bug fixes.

**All future development, including new features and updates for the Next Generation SDKs, will be delivered through Box core SDKs starting with version `v10`. Currently, `v10` is available as a separate branch of the Box core SDKs**.

| Repository name | Artifact name |  Note  |
|------|---------------|-------------------------|-------|
|`box-python-sdk-gen` | `box-sdk-gen` | Deprecated, use `boxsdk` [`≥v10.0.0`][python-v10] |
| `box-typescript-sdk-gen` | `box-typescript-sdk-gen` | Deprecated, use `box-node-sdk` [`≥v10.0.0`][node-v10] |
| `box-java-sdk-gen` | `box-java-sdk-gen` | Deprecated, use `box-java-sdk` [`≥v10.0.0`][java-v10]  |
| `box-dotnet-sdk-gen` | `Box.Sdk.Gen` | Deprecated, use `Box.V2.Core` [`≥v10.0.0`][windows-v10] |
| `box-swift-sdk-gen` | `BoxSdkGen` | Deprecated, use `BoxSDK` [`≥v10.0.0`][ios-v10] |

## Migration

### Migration from manually maitained package to generated package

TBD

### Migrating from Box Next Generation SDKs to core Box SDK `v10`

Follow detailed migrations guides to migrate from from Box Next Generation SDKs to Box core SDK `v10`:

- [Python][python-migration-v10]
- [TypeScript][ts-migration-v10]
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

[java-migration-v10]: https://github.com/box/box-java-sdk/blob/sdk-gen/migration-guides/from-box-java-sdk-gen-v0-to-box-java-sdk-v10.md
[python-migration-v10]: https://github.com/box/box-python-sdk/blob/sdk-gen/migration-guides/from-box-python-sdk-gen-v1-to-box-python-sdk-v10.md
[swift-migration-v10]: https://github.com/box/box-ios-sdk/blob/sdk-gen/migration-guides/from-box-swift-sdk-gen-v0-to-box-ios-sdk-v10.md
[ts-migration-v10]: https://github.com/box/box-node-sdk/blob/sdk-gen/docs/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk-v10.md
[dotnet-migration-v10]: https://github.com/box/box-windows-sdk-v2/blob/sdk-gen/migration-guides/from-dotnet-sdk-gen-v1-to-box-windows-sdk-v10.md