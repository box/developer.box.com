---
rank: 100
related_endpoints: []
related_guides: []
required_guides: []
related_resources:
  - terms_of_service
  - terms_of_service_user_status
alias_paths: []
category_id: security
subcategory_id: security/terms-of-service
is_index: false
id: security/terms-of-service/permissions
type: guide
total_steps: 3
sibling_id: security/terms-of-service
parent_id: security/terms-of-service
next_page_id: ''
previous_page_id: security/terms-of-service/for-colaboration
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/security/terms-of-service/permissions.md
fullyTranslated: true
---
# 権限

以下は、ユーザー、管理者、および共同管理者がサービス利用規約およびサービス利用規約のステータスを操作する際に必要な権限のリストです。

## サービス利用規約

エンドユーザーは、以下の場合にサービス利用規約の対象であると見なされます。

* サービス利用規約が有効になっている企業に属している、またはその企業とコラボレーションしている
* サービス利用規約の種類がユーザーと企業との関係を示している
  * 同じ企業に属するユーザー向けの管理対象ユーザー用サービス利用規約
  * 企業とコラボレーションしているユーザー向けの外部ユーザー用サービス利用規約

エンドユーザーは以下の場合にサービス利用規約の設定を表示できます。

* そのユーザーがサービス利用規約の対象となっている、かつ
* 企業でそのサービス利用規約が有効になっている

企業の管理者または共同管理者は、以下の場合にサービス利用規約の設定を表示できます。

* **\[会社の設定を表示する]** 権限を持っている
* アプリケーションの **\[Enterpriseのプロパティを管理する]** スコープが有効になっている
* そのサービス利用規約が自分の企業に属している

企業の管理者または共同管理者は、以下の場合にサービス利用規約の設定を編集できます。

* **\[会社の設定を編集する]** 権限を持っている
* アプリケーションの **\[Enterpriseのプロパティを管理する]** スコープが有効になっている
* そのサービス利用規約が自分の企業に属している

企業の管理者および共同管理者は、自社の管理対象ユーザー用サービス利用規約を承認していなくても、管理対象ユーザー用と外部ユーザー用の両方のサービス利用規約の設定を表示、作成、編集できます。

## サービス利用規約のユーザーステータス

エンドユーザーは以下の場合にサービス利用規約のユーザーステータスを表示および編集できます。

* ユーザーステータスがそのエンドユーザーに属している
* 企業でそのサービス利用規約が有効になっている
* そのエンドユーザーがサービス利用規約の対象である

企業の管理者および共同管理者は、以下の場合に他のユーザーに属するサービス利用規約のユーザーステータスを表示できます。

* **\[ユーザーを管理する]** 権限を持っている
* アプリケーションの **\[ユーザーを管理する]** スコープが有効になっている
* そのサービス利用規約が自分の企業に属している
* 自社の管理対象ユーザー用サービス利用規約を承認済みである (該当する場合)

企業の管理者および共同管理者は、以下の場合に他のユーザーに属するサービス利用規約のユーザーステータスを編集できます。

* **\[ユーザーを管理する]** 権限を持っている
* アプリケーションの **\[ユーザーを管理する]** スコープが有効になっている
* そのエンドユーザーがサービス利用規約の対象である
* そのエンドユーザーが管理者または共同管理者ではない
* そのサービス利用規約が自分の企業に属している
* 自社の管理対象ユーザー用サービス利用規約を承認済みである (該当する場合)

エンドユーザーは、自社の管理対象ユーザー用サービス利用規約を承認するまで、コラボレーションしている企業の外部ユーザー用サービス利用規約の設定を承認、拒否、表示できません (該当する場合)。そのような操作を行おうとすると、`TERMS_OF_SERVICE_REQUIRED`エラーが発生します。