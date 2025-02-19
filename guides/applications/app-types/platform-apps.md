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
# Platformアプリ

Platformアプリはほとんどのユースケースに対応しており、最も柔軟なアプリケーションの種類です。

Platformアプリケーションは、通常、カスタムインターフェース内でBox機能をユーザーに表示します。Boxには、コンテンツの閲覧、検索、プレビューなどの機能のために、[UI Elements][uie]と呼ばれる、組み込みのカスタマイズ可能なユーザーインターフェースコンポーネントが用意されています。

## 認証方法

Platformアプリでは、[OAuth 2.0][oauth2]、[JWT][jwt]、および[クライアント資格情報許可][cc]がサポートされています。

<CTA to="g://authentication/select">

認証方法の詳細を確認する

</CTA>

## 使用するタイミング

アプリケーションが以下のような場合に、Platformアプリを使用すると最も効果的です。

* 認証に[OAuth 2.0][oauth2]、[JWT][jwt]、または[クライアント資格情報許可][cc]を使用する
* ファイルをアップロードおよびダウンロードする
* 自分が所有するファイルにも、[管理対象ユーザーまたは外部ユーザー][users]が所有するファイルにも自由にアクセスしたい
* Box統合にアプリケーションを掲載する
* Boxウェブアプリとの統合を可能にする

## ユースケース

以下は、Platformアプリのユースケースの例です。

* アプリケーション内のファイル保存場所。これにより、エンドユーザーが自分と共有されているファイルにアクセスできると同時に、従業員にもBoxウェブアプリを介して同じファイルへのアクセス権限が提供されます。

  この一例として、ファイナンシャルアドバイザは、Platformアプリケーション内で閲覧またはコメントが可能な取引明細書や投資目論見書を投資家と共有します。

* アプリケーションのファイルアップロード機能。これにより、エンドユーザーは、独自に構築したアプリケーション内からBoxにファイルを送信したりアップロードしたりできます。その後、これらのアップロードにより、Boxウェブアプリを使用したビジネスプロセスが開始されます。

  この一例として、志願者が採用ポータルに送信した経歴書のPDFは、審査のため適切な従業員に転送されます。

## 承認

Platformアプリは、使用前に承認が必要になる場合があります。

<CTA to="g://authorization/custom-app-approval">

Platformアプリの承認方法を確認する

</CTA>

[oauth2]: g://authentication/oauth2

[jwt]: g://authentication/jwt

[cc]: g://authentication/client-credentials

[uie]: g://embed/ui-elements

[users]: g;//getting-started/user-types/#managed-users/
