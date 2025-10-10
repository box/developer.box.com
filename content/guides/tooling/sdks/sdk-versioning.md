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

In keeping with industry best practices, we are consolidating the Box Next Generation SDKs and Box core SDKs into a single package for each programming language. This makes migration efforts much easier and allows seamless addition of new capabilities to existing applications still powered by Box core SDKs, which were maintained manually.

Box core SDKs and Box Next Generation SDKs were created as separate libraries. Going forward, the Box core SDK artifacts will include:

- Current major version includes manually maintained **Box core SDK** and **Box Next Generation SDK** artifacts. This version enables leveraging coexisting artifacts at the same time, and serve as a transition phase. Stay tuned for this upcoming release.
- `v10.0.0` includes **only the Box Next Generation SDK artifact**. Currently, this version is available as a branch for each SDK repository.

### What does it mean for your project

1. If you are creating a new application, use `>=v10` of the Box core SDK package.
2. If you have an existing application relying on the **Box Next Generation SDK** and you wish to further develop your project, replace the name of this library in the package manager with the Box core SDK package (`v10.0.0`). Object imports for most SDKs will persist the same and your code will work as-is; the TypeScript SDK requires additional steps for migrating. Check the section below for detailed guides. Check section below for migration details.
3. If you have an existing application relying on **Box core SDK** and you wish to further develop your project, you use the current major release. See the table above for a detailed breakdown of recommended versions.
4. If you have an existing application that you don’t plan to change, ensure your package manager includes the version of SDK you are using to prevent an accidental rebuild that pulls in a version you aren’t expecting.

### Box Next Gen SDK deprecation

As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts.

Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDKs with no impact, but you won't receive new features, updates, or bug fixes.

All future development, including new features and updates for the Next Generation SDKs, will be delivered through Box core SDKs starting with version `v10`. Currently, `v10` is available as a separate branch.

## Versioning overview

### Box SDK versions and artifacts

| Repository name  | Artifact name |  Legacy artifact  | Includes both SDK artifacts | Includes only Box Next Gen SDK artifact |
|--------------|------|---------|----------|----------|
| [`box-python-sdk`][python-repo] | `boxsdk` | `v3.14.0` | `v4.X.Y` | >=`v10.0.0`  |
| [`box-node-sdk`][node-repo]  | `box-node-sdk` |`v3.8.2`  | `v4.X.Y` | >=`v10.0.0`  |
| [`box-java-sdk`][java-repo] |  `box-java-sdk` | `v4.16.3`  | `v5.X.Y`| >=`v10.0.0`  |
| [`box-windows-sdk-v2`][windows-repo] | `Box.V2`, `Box.V2.Core` | `v5.8.0`  | `v6.X.Y`| >=`v10.0.0`  |
| [`box-ios-sdk`][ios-repo] | `BoxSDK` | `v5.6.0`  | `v6.X.Y`| >=`v10.0.0`  |

### Box Next Gen SDK deprecation status

| Repository name | Artifact name | Current latest version  | Note  |
|------|---------------|-------------------------|-------|
|`box-python-sdk-gen` | `box-sdk-gen` | `v1.17.0` | Deprecated, use `boxsdk` >=[`v10.0.0`][python-v10] |
| `box-typescript-sdk-gen` | `box-typescript-sdk-gen` | `v1.19.1` | Deprecated, use `box-node-sdk` >=[`v10.0.0`][node-v10] |
| `box-java-sdk-gen` | `box-java-sdk-gen` |`v0.8.1`  | Deprecated, use `box-java-sdk` >=[`v10.0.0`][java-v10]  |
| `box-dotnet-sdk-gen` | `Box.Sdk.Gen` | `v1.12.0` | Deprecated, use `Box.V2.Core` >=[`v10.0.0`][windows-v10] |
| `box-swift-sdk-gen` | `BoxSdkGen` | `v0.6.3`  | Deprecated, use `BoxSDK` >=[`v10.0.0`][ios-v10] |

## Migration

### Migration


### Migrating from Box Next Generations SDKs to core Box SDK `v10`

Follow detailed migrations guides to migrate from from Box Next Generations SDKs to Box core SDK `v10`:

- [Python][python-migration]
- [TypeScript][ts-migration]
- [Java][java-migration]
- [.NET][dotnet-migration]
- [Swift][swift-migration]

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

[java-migration]: https://github.com/box/box-java-sdk/blob/sdk-gen/migration-guides/from-box-java-sdk-gen-v0-to-box-java-sdk-v10.md
[python-migration]: https://github.com/box/box-python-sdk/blob/sdk-gen/migration-guides/from-box-python-sdk-gen-v1-to-box-python-sdk-v10.md
[swift-migration]: https://github.com/box/box-ios-sdk/blob/sdk-gen/migration-guides/from-box-swift-sdk-gen-v0-to-box-ios-sdk-v10.md
[ts-migration]: https://github.com/box/box-node-sdk/blob/sdk-gen/docs/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk-v10.md
[dotnet-migration]: https://github.com/box/box-windows-sdk-v2/blob/sdk-gen/migration-guides/from-dotnet-sdk-gen-v1-to-box-windows-sdk-v10.md