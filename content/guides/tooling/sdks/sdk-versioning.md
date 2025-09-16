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

As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts.

Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDKs with no impact, but you won't receive new features, updates, or bug fixes.

## Why we are making this change

In keeping with industry best practices, we are consolidating the Box Next Generation SDKs and Box core SDKs into a single package for each programming language. This makes migration efforts much easier and allows seamless addition of new capabilities to existing applications still powered by Box core SDKs, which were maintained manually.

All future development, including new features and updates for the Next Generation SDKs, will now be delivered through Box core SDKs starting with version `v10`.

## How it will work

Box core SDKs and Box Next Generation SDKs were created as separate libraries. Going forward, within the Box core SDK artifacts will include:

- `(n+1)` major version will include manually maintained **Box core SDK and Box Next Generation SDK artifacts**. This version enables leveraging coexisting artifacts at the same time, and serve as a transition phase.
- `v10.0.0` version includes **only the Box Next Generation SDK artifact**.

## How to decide

1. If you are creating a new application, use `v10` of the Box core SDK package.
2. If you have an existing application relying on the **Box Next Generation SDK** and you wish to further develop your project, replace the name of this library in the package manager with the Box core SDK package (`v10.0.0`). Most SDKs object imports persist the same and your code will work as-is; only the TypeScript SDK requires additional steps for migrating.
3. If you have an existing application relying on **Box core SDK** and you wish to further develop your project, once released, bump the library version by one major release. See the table above, for detailed breakdown of recommended versions.
4. If you have an existing application that you don’t plan to change, ensure your package manager includes the version of SDK you are using to prevent an accidental rebuild that pulls in a version you aren’t expecting.

## Versioning overview

### Box SDK versions and artifacts

| SDK Package Name   | Current latest version | Next Gen SDK artifact |
|--------------------|---------|----------|
| `box-node-sdk`       | `v3.8.2`  | `v10.0.0`  |
| `box-python-sdk`     | `v3.14.0` | `v10.0.0`  |
| `box-java-sdk`      | `v4.16.3`  | `v10.0.0`  |
| `box-windows-sdk-v2` | `v5.8.0`  | `v10.0.0`  |
| `box-ios-sdk`       | `v5.6.0`  | `v10.0.0`  |

### Box Next Gen SDK deprecation status

| SDK Package Name | Current latest version  | Note 
|------------------|-------------------------|-------|
| `box-typescript-sdk-gen`    | `v1.19.0` | Deprecated, use `box-node-sdk` `v10.0.0` |
| `box-python-sdk-gen`        | `v1.17.0` | Deprecated, use `box-python-sdk` `v10.0.0` |
| `box-java-sdk-gen`          | `v0.8.1`  | Deprecated, use `box-java-sdk` `v10.0.0`  |
| `box-dotnet-sdk-gen`        | `v1.12.0` | Deprecated, use `box-windows-sdk-v2` `v10.0.0` |
| `box-swift-sdk-gen`         | `v0.6.3`  | Deprecated, use `box-ios-sdk` `v10.0.0` |