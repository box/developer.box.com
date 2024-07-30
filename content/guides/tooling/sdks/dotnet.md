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

# Install .NET SDK (Deprecated)

You can use Box .NET SDK to call Box APIs in a .NET
project.

<Message type='notice'>
 [.NET SDK](https://github.com/box/box-windows-sdk-v2)
 is currently in maintenance mode and will be deprecated soon.
 This means only critical security updates and bug fixes will be
 implemented.
 It is recommended to use the [auto-generated .NET SDK][dotnetgensdk].
</Message>

The SDK is available for both .NET Framework 4.5 and .NET Core 1.0 or
above. The installation of the SDK depends on the framework used.

<CTA to="https://github.com/box/box-windows-sdk-v2">
  Learn more about .NET SDK on GitHub
</CTA>

## .NET Framework

To install the .NET SDK in the .NET framework, run the following command using
the [Nuget][nuget] package manager.

```shell
PM> Install-Package Box.V2
```

## .NET Core

To install the .NET SDK in the .NET Core framework, run the following command
using the [Nuget][nuget] package manager.

```shell
PM> Install-Package Box.V2.Core
```

[nuget]: https://www.nuget.org/
[dotnetgensdk]: https://github.com/box/box-dotnet-sdk-gen
