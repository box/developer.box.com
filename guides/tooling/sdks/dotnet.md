---
rank: 2
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
id: tooling/sdks/dotnet
type: guide
total_steps: 10
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/java
previous_page_id: tooling/sdks/sdk-versioning
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/dotnet.md
---
# Install .NET SDK

You can use Box .NET SDK to call Box APIs in a .NET
project.

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