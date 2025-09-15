---
rank: 9
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

# Deprecated .NET SDK

<Message type='warning'>
  As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts.

  Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDK with no impact, but you won't receive new features, updates, or bug fixes.

  All future development, including new features and updates for Next Generation SDKs, will now be delivered through Box core SDKs starting with version `v10`.

  For more details, see our [SDK versioning strategy document][versioning].
</Message

You can use Box .NET SDK to call Box APIs in a .NET
project.

The SDK is available for both .NET Framework 4.5 and .NET Core 1.0 or
above. The installation of the SDK depends on the framework used.

To install the .NET SDK in the .NET framework, run the following command using
the [Nuget][nuget] package manager.

```shell
PM> Install-Package Box.Sdk.Gen
```

[nuget]: https://www.nuget.org/
[versioning]: g://tooling/sdks/sdk-versioning