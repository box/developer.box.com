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
total_steps: 6
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/java
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/sdks/dotnet.md
---
# .NETSDKのインストール

.NETプロジェクトでは、Box .NET SDKを使用してBox APIへのAPI呼び出しを行うことができます。

このSDKは、.NET Framework 4.5以上および.NET Core 1.0以上の両方で利用できます。SDKのインストール方法は、使用しているフレームワークによって異なります。

<CTA to="https://github.com/box/box-windows-sdk-v2">

GitHubで.NET SDKの詳細を確認する

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

<CTA to="https://github.com/box/box-windows-sdk-v2">

GitHubで.NET SDKの詳細を確認する

</CTA>

[nuget]: https://www.nuget.org/
