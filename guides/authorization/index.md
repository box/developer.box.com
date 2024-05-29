---
rank: 25
required_guides:
  - authorization/custom-app-approval
  - authorization/limited-access-approval
  - authorization/custom-skill-approval
category_id: authorization
subcategory_id: null
is_index: true
id: authorization
type: guide
total_steps: 4
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: authorization/custom-skill-approval
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authorization/index.md
fullyTranslated: true
---
# 承認

アプリケーションによっては、企業で使用する前に管理者の明示的な承認が必要になる場合があります。管理者が行う必要のある手順は、開発者が選択した認証方法と有効になっているEnterprise設定によって異なります。

## 認証方法

以下の[認証方法][auth]では、常に管理者の明示的な承認が必要です。

* [サーバー認証 (JWT使用)][jwt]
* [サーバー認証 (クライアント資格情報許可使用)][cc]
* [カスタムスキル][skill]

これらの認証方法では、[サービスアカウント][sa]が自動的に生成されます。適切な[スコープ][scopes]が有効になっていると、サービスアカウントは管理者の多くの操作を実行できるため、使用する前に管理者の承認が必要になります。

[OAuth 2.0][oauth]アプリと[アプリトークン][apptoken]も、有効になっているEnterprise設定に基づき、管理者の明示的な承認が必要になる場合があります。

## Enterprise設定

以下のEnterprise設定のいずれかが有効になっている場合は、後続の手順が必要です。

* デフォルトで公開アプリを無効にする
* デフォルトで未公開アプリを無効にする
* アプリトークンを使用する場合に管理者の承認を要求する

これらの[設定][setting]は、次のように移動すると見つかります。

**管理コンソール** > \[**アプリ**] > \[**カスタムアプリ**] > ⚙ アイコンをクリック

<Message tip>

公開アプリとは、App Centerで見つかるアプリケーションのことです。

</Message>

## 必要なアクション

特定のアプリに対して管理者がどのような手順を完了する必要があるかについては、以下のシナリオを確認してください。

<!--alex ignore-->

\[**デフォルトで公開アプリを無効にする**]:

| 認証方法                      | 有効                   | 無効     |
| ------------------------- | -------------------- | ------ |
| [OAuth 2.0][standauth]    | 個々のアプリコントロールで使用可能に設定 | 使用準備完了 |
| [サーバー認証 (JWT使用)][jwt]     | なし                   | なし     |
| [サーバー認証 (クライアント資格情報)][cc] | なし                   | なし     |
| [アプリトークン認証][apptoken]     | なし                   | なし     |

\[**デフォルトで未公開アプリを無効にする**]:

| 認証方法                      | 有効                                                                                              | 無効                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [OAuth 2.0][standauth]    | \[**アプリ**] > \[**カスタムアプリマネージャ**] > \[**ユーザー認証アプリ**] > \[**アプリの追加**] で有効化                        | 使用準備完了                                                                  |
| [サーバー認証 (JWT使用)][jwt]     | \[**アプリ**] > \[**カスタムアプリマネージャ**] > \[**サーバー認証アプリ**] > \[**アプリの追加**] で承認して有効化                    | \[**アプリ**] > \[**カスタムアプリマネージャ**] > \[**サーバー認証アプリ**] > \[**アプリの追加**] で承認 |
| [サーバー認証 (クライアント資格情報)][cc] | \[**アプリ**] > \[**カスタムアプリマネージャ**] > \[**サーバー認証アプリ**] で承認して有効化                                    | \[**アプリ**] > \[**カスタムアプリマネージャ**] > \[**サーバー認証アプリ**] > \[**アプリの追加**] で承認 |
| [アプリトークン認証][apptoken]     | \[**アプリ**] > \[**カスタムアプリマネージャ**] > \[**サーバー認証アプリ**] > \[**サーバー認証アプリ**] > **\[アプリの追加]** で承認して有効化 | 使用準備完了                                                                  |

\[**アプリトークンを使用する場合に管理者の承認を要求する**]:

| 認証方法                      | 有効                                                      | 無効              |
| ------------------------- | ------------------------------------------------------- | --------------- |
| [OAuth 2.0][standauth]    | なし                                                      | なし              |
| [サーバー認証 (JWT使用)][jwt]     | なし                                                      | なし              |
| [サーバー認証 (クライアント資格情報)][cc] | なし                                                      | なし              |
| [アプリトークン認証][apptoken]     | \[**アプリ**] > \[**カスタムアプリマネージャ**] > \[**サーバー認証アプリ**] で承認 | 作成時に自動的に承認して有効化 |

<!--alex enable-->

[auth]: g://authentication/select

<!-- i18n-enable localize-links -->

[setting]: https://support.box.com/hc/ja/articles/360044196653-カスタムアプリの管理

<!-- i18n-disable localize-links -->

[sa]: page://platform/user-types/#service-account

[scopes]: g://api-calls/permissions-and-errors/scopes

[ag]: g://applications/app-center

[standauth]: g://authentication/oauth2

[jwt]: g://authentication/jwt

[cc]: g://authentication/client-credentials

[apptoken]: g://authentication/app-token

[skill]: g://applications/app-types/custom-skills

[oauth]: g://authentication/oauth2
