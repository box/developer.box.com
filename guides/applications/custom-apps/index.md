---
rank: 1
alias_paths:
  - /docs/custom-applications
  - /docs/custom-integrations
  - /docs/partner-integrations
  - /docs/getting-started-box-platform
  - /docs/box-platform
category_id: applications
subcategory_id: applications/custom-apps
is_index: true
id: applications/custom-apps
type: guide
total_steps: 4
sibling_id: applications
parent_id: applications
next_page_id: applications/custom-apps/jwt-setup
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/applications/custom-apps/index.md
---
# カスタムアプリ

Box Platformを使用するには、**カスタムアプリ**統合を使用する方法が間違いなく融通がききます。

カスタムアプリでは、[OAuth 2.0][oauth2]、[JWT][jwt]、および[アプリトークン][app-token]認証がサポートされます。これらの認証によって、アプリケーションは、ファイルやフォルダを操作するだけでなく、タスク、リーガルホールドなどの会社レベルのプロパティを操作できるようになります。

カスタムアプリケーションは、通常、カスタムインターフェイス内でBox機能をユーザーに表示します。Boxでは、閲覧、検索、表示などのカスタマイズ可能な機能にUI Elementと呼ばれるあらかじめ作成されたユーザーインターフェイスが用意されています。また、独自のユーザーインターフェイスを作成することもできます。

## 認証方式

カスタムアプリでは、アプリケーションの機能と制限を決定する3種類の認証がサポートされています。主な違いの概要を以下に示します。

<!-- markdownlint-disable line-length -->

|                 | OAuth 2.0 | JWT | アプリトークン |
| --------------- | --------- | --- | ------- |
| ユーザーの関与が必要?     | はい        | いいえ | いいえ     |
| 管理者の承認が必要?      | いいえ       | はい  | はい      |
| 他のユーザーの代理で操作可能? | はい        | はい  | いいえ     |
| ユーザーにBoxを表示?    | はい        | いいえ | いいえ     |
| App Userを作成可能?  | いいえ       | はい  | いいえ     |

<!-- markdownlint-enable line-length -->

<CTA to="g://authentication/select">

各種認証の詳細を確認する

</CTA>

## カスタムアプリを使用する場合

アプリケーションが以下のような場合に、カスタムアプリを使用すると最も効果的です。

* [OAuth 2.0][oauth2]、[JWT][jwt]、または[アプリトークン][app-token]認証を使用する
* ファイルをアップロードおよびダウンロードする
* 自分が所有するファイルにも、他のユーザー(外部ユーザーを含む)が所有するファイルにも自由にアクセスする
* Boxアプリギャラリーにアプリケーションを掲載する
* Boxウェブアプリとの統合を可能にする

[oauth2]: guide://authentication/oauth2

[jwt]: guide://authentication/jwt

[app-token]: guide://authentication/app-token
