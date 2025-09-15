---
rank: 7
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

# Deprecated TypeScript SDK

<Message type='warning'>
  As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts.

  Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDK with no impact, but you won't receive new features, updates, or bug fixes.

  All future development, including new features and updates for Next Generation SDKs, will now be delivered through Box core SDKs starting with version `v10`.

  For more details, see our [SDK versioning strategy document][versioning].
</Message

You can use the **auto-generated** Box TypeScript SDK to call Box APIs in a TypeScript project.
This [next generation SDK][next-gen] brings along new functionality to designed to elevate the developer experience and streamline your integration with the Box Content Cloud.

## NPM installation

To install the TypeScript SDK run the following command from your terminal
window or command prompt using the [Node Package Manager][npm].

```shell
npm install box-typescript-sdk-gen
```

## Yarn installation

Similarly, the SDK can be installed using the [Yarn package][yarn] manager.

```shell
yarn add box-typescript-sdk-gen
```

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[next-gen]: g://tooling/sdks#next-generation-sdks
[versioning]: g://tooling/sdks/sdk-versioning