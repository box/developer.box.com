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

In mid-August, we will be deprecating the Box Next Gen SDKs in its current form. Don’t worry, your existing code will continue to work without changes. 

## Why we are making this change

In keeping with industry best practices, we are consolidating the Next Gen and legacy SDKs into a single package. This makes migration efforts much easier and allows you to seamlessly add new capabilities to existing applications still powered by the legacy SDKs. 

Ultimately, the Next Generation SDKs will replace the current legacy SDKs as the latest major version release. Read more to learn the details.

## How it will work

Currently, the legacy SDKs and the Next Gen SDKs are separate libraries. Going forward, two new major versions will be available within the legacy SDK artifact:

- `(n+1)` major version that includes legacy SDK and Next Gen SDK artifacts. This version enables you to leverage coexisting artifacts at the same time, and serve as a transition phase.
- `v10.0.0` version that includes only the Next Gen SDK artifact.

## How to decide

1. If you are writing a new application, use the latest major release of the SDK package.
2. If you have an existing application relying on the **Next Gen SDK** and you wish to further develop your project, replace the name of this library in the package manager with the latest major release of the legacy SDK package (`v10.0.0`). Most SDKs object imports persist the same and your code will work as-is; only the TypeScript SDK requires additional steps for migrating.
3. If you have an existing application relying on the **legacy SDK** and you wish to further develop your project, once released, bump the library version by one major release. See the table above, for detailed breakdown of recommended versions.
4. If you have an existing application that you don’t plan to change, ensure your package manager includes the version of SDK you are using to prevent an accidental rebuild that pulls in a version you aren’t expecting.

## Versioning overview

### Box SDK versions and artifacts

| SDK Package Name   | Current latest version | Combined legacy and Next Gen artifacts | Next Gen SDK artifact |
|--------------------|---------|--------|----------|
| `box-node-sdk`       | `v3.8.2`  | `v4.0.0` | `v10.0.0`  |
| `box-python-sdk`     | `v3.14.0` | `v4.0.0` | `v10.0.0`  |
| `box-java-sdk`      | `v4.16.3` | `v5.0.0` | `v10.0.0`  |
| `box-windows-sdk-v2` | `v5.8.0`  | `v6.0.0` | `v10.0.0`  |
| `box-ios-sdk`       | `v5.6.0`  | `v6.0.0` | `v10.0.0`  |

### Box Next Gen SDK deprecation status

| SDK Package Name | Current latest version  | Note 
|------------------|-------------------------|-------|
| `box-typescript-sdk-gen`    | `v1.16.0` | deprecation in mid-August 2025, use `box-node-sdk` `v10.0.0` |
| `box-python-sdk-gen`        | `v1.15.0` | deprecation in mid-August 2025, use `box-python-sdk` `v10.0.0` |
| `box-java-sdk-gen`          | `v0.7.0`  | deprecation in mid-August 2025, use `box-java-sdk` `v10.0.0`  |
| `box-dotnet-sdk-gen`        | `v1.10.0` | deprecation in mid-August 2025, use `box-windows-sdk-v2` `v10.0.0` |
| `box-swift-sdk-gen`         | `v0.6.1`  | deprecation in mid-August 2025, use `box-ios-sdk` `v10.0.0` |

Follow the change log and Box Developer blog for further instructions and announcements.
