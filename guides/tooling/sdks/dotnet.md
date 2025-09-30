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
total_steps: 11
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/java
previous_page_id: tooling/sdks/sdk-versioning
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/dotnet.md
fullyTranslated: true
---
# .NET SDKのインストール

.NETプロジェクトでは、Box .NET SDKを使用してBox APIを呼び出すことができます。

バージョン`5.8.0`までのSDKは、.NET Framework `4.5`以上および.NET Core `1.0`以上の両方で利用できます。バージョン`10.0.0`以降のSDKは、.NET Framework `4.6.2`以上および.NET `8.0`以上の両方で利用できます。SDKのインストール方法は、使用しているフレームワークによって異なります。

<CTA to="https://github.com/box/box-windows-sdk-v2">

GitHubで.NET SDKの詳細を確認する

</CTA>

## .NET Framework

.NET Frameworkに.NET SDKをインストールするには、[Nuget][nuget]パッケージマネージャを使用して以下のコマンドを実行します。

```shell
PM> Install-Package Box.V2.Core

```

## .NET Core

.NET Coreフレームワークに.NET SDKをインストールするには、[Nuget][nuget]パッケージマネージャを使用して以下のコマンドを実行します。

```shell
PM> Install-Package Box.V2.Core

```

[nuget]: https://www.nuget.org/
