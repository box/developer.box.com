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
id: tooling/sdks/node
type: guide
total_steps: 9
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/salesforce
previous_page_id: tooling/sdks/python-gen
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/node.md
fullyTranslated: true
---
# Node SDK (公式サポート終了) のインストール

Nodeプロジェクトでは、Box Node SDKを使用してBox APIを呼び出すことができます。

<Message type="notice">

[Node SDK][node]は、現在メンテナンスモードであり、まもなく公式サポートが終了する予定です。つまり、実装されるのは重要なセキュリティ更新プログラムとバグ修正のみになります。[自動生成されたTypeScript SDK][ts-gen]を使用することをお勧めします。

</Message>

<CTA to="https://github.com/box/box-node-sdk">

GitHubでNode SDKの詳細を確認する

</CTA>

## NPMのインストール

Node SDKをインストールするには、[Nodeパッケージマネージャ][npm]を使用してターミナルウィンドウまたはコマンドプロンプトから以下のコマンドを実行します。

```shell
npm install box-node-sdk --save

```

## Yarnインストール

同様に、[Yarnパッケージ][yarn]マネージャを使用してSDKをインストールすることもできます。

```shell
yarn add box-node-sdk

```

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[ts-gen]: g://tooling/sdks/typescript-gen

[node]: https://github.com/box/box-node-sdk
