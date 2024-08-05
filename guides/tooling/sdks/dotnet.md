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
total_steps: 9
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/java
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/dotnet.md
fullyTranslated: true
---
# .NET SDK (公式サポート終了) のインストール

.NETプロジェクトでは、Box .NET SDKを使用してBox APIを呼び出すことができます。

<Message type="notice">

[.NET SDK](https://github.com/box/box-windows-sdk-v2)は、現在メンテナンスモードであり、まもなく公式サポートが終了する予定です。つまり、実装されるのは重要なセキュリティ更新プログラムとバグ修正のみになります。[自動生成された.NET SDK][dotnetgensdk]を使用することをお勧めします。

</Message>

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

[nuget]: https://www.nuget.org/

[dotnetgensdk]: https://github.com/box/box-dotnet-sdk-gen
