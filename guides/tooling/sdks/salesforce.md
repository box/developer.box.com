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
alias_paths:
  - /docs/box-for-salesforce-developer-toolkit
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/salesforce
type: guide
total_steps: 6
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/cli
previous_page_id: tooling/sdks/python
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/sdks/salesforce.md
---
# Salesforce SDKのインストール

Salesforce SDKは、Deploy to Salesforce機能を使用して、サンドボックスまたは開発者組織に直接展開できます。

<Message type="notice">

「Deploy to Salesforce」機能はBoxが所有または管理する機能ではありません。

</Message>

このSDKは、以下の非管理型パッケージとしても配布されています。

* [実稼働環境/開発者パッケージ][salesforce_pkg_prod]
* [サンドボックスパッケージ][salesforce_pkg_sandbox]

<Message type="warning">

非管理型パッケージは、Salesforce組織にインストールするとアップグレードできなくなります。そのため、以後のアップグレードは、リポジトリをローカルで複製してIDEからクラスを更新することにより適用する必要があります。

</Message>

[deploy_salesforce]: https://githubsfdeploy.herokuapp.com/?owner=box&repo=box-salesforce-sdk

[salesforce_pkg_prod]: https://cloud.box.com/Box-Apex-SDK

[salesforce_pkg_sandbox]: https://cloud.box.com/Box-Apex-SDK-Sandbox
