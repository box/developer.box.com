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
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/dotnet
type: guide
total_steps: 7
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/java
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/dotnet.md
fullyTranslated: true
---
# .NET SDKのインストール

You can use Box .NET SDK to call Box APIs in a .NET project.

このSDKは、.NET Framework 4.5以上および.NET Core 1.0以上の両方で利用できます。SDKのインストール方法は、使用しているフレームワークによって異なります。

<CTA to="https://github.com/box/box-windows-sdk-v2">

Learn more about .NET SDK on GitHub

</CTA>

## .NET Framework

.NET Frameworkに.NET SDKをインストールするには、[Nuget][nuget]パッケージマネージャを使用して以下のコマンドを実行します。

```shell
PM> Install-Package Box.V2

```

## .NET Core

.NET Coreフレームワークに.NET SDKをインストールするには、[Nuget][nuget]パッケージマネージャを使用して以下のコマンドを実行します。

```shell
PM> Install-Package Box.V2.Core

```

[nuget]: https://www.nuget.org/
