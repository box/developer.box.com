---
rank: 3
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
id: tooling/sdks/python-gen
type: guide
total_steps: 9
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/node
previous_page_id: tooling/sdks/java
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/python-gen.md
fullyTranslated: true
---
# Python SDK (Generated) のインストール

Pythonプロジェクトでは、**自動生成された**Box Python SDKを使用してBox APIを呼び出すことができます。この[次世代のSDK][next-gen]には、開発者エクスペリエンスを向上させ、Boxコンテンツクラウドとの統合を効率化することを目的とした新機能が備わっています。

<CTA to="https://github.com/box/box-python-sdk-gen">

GitHubで自動生成されたPython SDKの詳細を確認する

</CTA>

## インストール

自動生成されたPython SDKをインストールするには、[pip][pip]を使用してターミナルウィンドウまたはコマンドプロンプトから以下のコマンドを実行します。

```shell
pip install box-sdk-gen

```

## JWTアプリケーション

サーバー側[JWT認証][jwt]を使用するBoxアプリを使用する場合、次の追加モジュールをインストールします。

```shell
pip install "box-sdk-gen[jwt]"

```

[pip]: https://pypi.org/project/pip/

[jwt]: g://authentication/jwt

[next-gen]: g://tooling/sdks#next-generation-sdks

[py-gen]: https://github.com/box/box-python-sdk-gen
