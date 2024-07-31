---
rank: 4
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
id: tooling/sdks/typescript-gen
type: guide
total_steps: 9
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/salesforce
previous_page_id: tooling/sdks/python-gen
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/typescript-gen.md
fullyTranslated: true
---
# Typescript SDK (Generated) のインストール

Typescriptプロジェクトでは、**自動生成された**Box Typescript SDKを使用してBox APIを呼び出すことができます。この[次世代のSDK][next-gen]には、開発者エクスペリエンスを向上させ、Boxコンテンツクラウドとの統合を効率化することを目的とした新機能が備わっています。

<CTA to="https://github.com/box/box-typescript-sdk-gen">

GitHubで自動生成されたTypescript SDKの詳細を確認する

</CTA>

## NPMのインストール

Typescript SDKをインストールするには、[Nodeパッケージマネージャ][npm]を使用してターミナルウィンドウまたはコマンドプロンプトから以下のコマンドを実行します。

```shell
npm install box-typescript-sdk-gen

```

## Yarnインストール

同様に、[Yarnパッケージ][yarn]マネージャを使用してSDKをインストールすることもできます。

```shell
yarn add box-typescript-sdk-gen

```

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[next-gen]: g://tooling/sdks#next-generation-sdks
