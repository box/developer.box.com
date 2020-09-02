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
id: tooling/sdks/python
type: guide
total_steps: 6
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/node
previous_page_id: tooling/sdks/java
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/sdks/python.md
---
# Python SDKのインストール

Pythonプロジェクトでは、Box Python SDKを使用してBox APIへのAPI呼び出しを行うことができます。

<CTA to="https://github.com/box/box-python-sdk">

GitHubでPython SDKの詳細を確認する

</CTA>

## インストール

Python SDKをインストールするには、[pip][pip]を使用してターミナルウィンドウまたはコマンドプロンプトから以下のコマンドを実行します。

```shell
pip install boxsdk
```

## JWTアプリケーション

サーバー側[JWT認証][jwt]を使用するBoxアプリを使用する場合、次の追加モジュールをインストールする必要があります。

```shell
pip install "boxsdk[jwt]"
```

<CTA to="https://github.com/box/box-python-sdk">

GitHubでPython SDKの詳細を確認する

</CTA>

[pip]: https://pypi.org/project/pip/

[jwt]: g://authentication/jwt
