---
rank: 20
alias_paths:
  - /docs/custom-applications
  - /docs/custom-integrations
  - /docs/partner-integrations
  - /docs/getting-started-box-platform
  - /docs/box-platform
related_guides:
  - authentication/oauth2
  - authentication/jwt
  - authentication/client-credentials
category_id: applications
subcategory_id: applications/app-types
is_index: false
id: applications/app-types/platform-apps
type: guide
total_steps: 4
sibling_id: applications/app-types
parent_id: applications/app-types
next_page_id: applications/app-types/limited-access-apps
previous_page_id: applications/app-types
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/app-types/platform-apps.md
fullyTranslated: true
---
# Platform App

Platform Apps encompass most use cases and is the most flexible application type.

A platform application typically presents Box functionality to a user within a custom interface. Box offers pre-built, customizable user interface components, known as [UI Elements][uie], for functionality like browsing, searching, and previewing content.

## 認証方法

Platform Apps support [OAuth 2.0][oauth2], [JWT][jwt], and [Client Credentials Grant][cc].

<CTA to="g://authentication/select">

認証方法の詳細を確認する

</CTA>

## 使用するタイミング

A Platform App is best used when the application:

* 認証に[OAuth 2.0][oauth2]、[JWT][jwt]、または[クライアント資格情報許可][cc]を使用する
* ファイルをアップロードおよびダウンロードする
* 自分が所有するファイルにも、[管理対象ユーザーまたは外部ユーザー][users]が所有するファイルにも自由にアクセスしたい
* Box統合にアプリケーションを掲載する
* Boxウェブアプリとの統合を可能にする

## ユースケース

Example use cases for a Platform App include:

* アプリケーション内のファイル保存場所。これにより、エンドユーザーが自分と共有されているファイルにアクセスできると同時に、従業員にもBoxウェブアプリを介して同じファイルへのアクセス権限が提供されます。

  An example of this is financial advisor sharing statements and investment prospectuses with investors that can be viewed and commented on within a platform application.

* アプリケーションのファイルアップロード機能。これにより、エンドユーザーは、独自に構築したアプリケーション内からBoxにファイルを送信したりアップロードしたりできます。その後、これらのアップロードにより、Boxウェブアプリを使用したビジネスプロセスが開始されます。

  この一例として、志願者が採用ポータルに送信した経歴書のPDFは、審査のため適切な従業員に転送されます。

## 承認

Platform Apps may require approval before use.

<CTA to="g://authorization/custom-app-approval">

Learn how to approve Platform Apps

</CTA>

[oauth2]: g://authentication/oauth2

[jwt]: g://authentication/jwt

[cc]: g://authentication/client-credentials

[uie]: g://embed/ui-elements

[users]: g;//getting-started/user-types/#managed-users/
