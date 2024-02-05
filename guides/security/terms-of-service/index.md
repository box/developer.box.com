---
rank: 1
alias_paths: []
category_id: security
subcategory_id: security/terms-of-service
is_index: true
id: security/terms-of-service
type: guide
total_steps: 3
sibling_id: security
parent_id: security
next_page_id: security/terms-of-service/for-colaboration
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/security/terms-of-service/index.md
fullyTranslated: true
---
# サービス利用規約

Box APIを使用すると、管理者はBoxの使用に関するサービス利用規約を設定できます。また、ユーザーは、カスタムアプリケーションのサービス利用規約に同意および再同意できます。

## 用語

### サービス利用規約

サービス利用規約とは、Boxに保存されている企業のデータをすべてのユーザーが使用できる条件を表す、企業レベルの記録文書です。

現在、どの企業にも2種類のサービス利用規約があり、個別に有効にすることが可能です。**管理対象ユーザー用サービス利用規約**は、企業のユーザーに対して有効にすることができます。一方、\*_外部ユーザー用サービス利用規約_は、プライマリ企業のデータでコラボレーションする他の企業のユーザーに対して有効にすることができます。

## サービス利用規約のユーザーステータス

サービス利用規約のユーザーステータスは、特定のユーザーによるサービス利用規約への同意のステータスを表します。サービス利用規約とユーザーをどのように組み合わせた場合でも、サービス利用規約のユーザーステータスは1つだけです。

1つの利用規約に、サービス利用規約のユーザーステータスが複数あります (ユーザー1人につき1つ)。

1人のユーザーに、サービス利用規約のユーザーステータスが複数存在する場合もあります。ユーザーは、自社の管理対象ユーザー用サービス利用規約を承認または拒否できるだけでなく、コラボレーションしているさまざまな企業の複数の外部ユーザー用サービス利用規約も承認または拒否できます。

## API

**\[会社の設定を編集する]** 権限を持つBox管理者として認証されているアプリケーションは、APIを介して会社の企業のサービス利用規約を表示、作成、編集できます。

* [`GET /terms_of_services/:id`](e://get-terms-of-services-id): 特定のサービス利用規約の情報を取得します。
* [`GET /terms_of_services`](e://get-terms-of-services): 管理対象ユーザーまたは外部ユーザー用に、企業内で使用されているすべてのサービス利用規約のリストを取得します。
* [`POST /terms_of_services`](e://post-terms-of-services): 外部ユーザーまたは管理対象ユーザー用にサービス利用規約の設定を作成します。
* [`PUT /terms_of_services/:id`](e://put-terms-of-services-id): 特定のサービス利用規約の設定を更新します。

さらに、アプリケーションは、APIを介して通常のユーザーのサービス利用規約を表示し承認することができます。

* [`GET /terms_of_service_user_statuses`][euserstatuses]: ユーザーのすべてのサービス利用規約のリストを取得します。
* [`POST /terms_of_service_user_statuses`][euserstatuses_post]: 特定のサービス利用規約を初めて承認または拒否します。
* [`PUT /terms_of_service_user_statuses/:id`][euserstatuses_put]: 以前に承認または拒否された特定のサービス利用規約を承認または拒否します。

##  スコープ 

説明されているアクションを実行するには、アプリケーションに以下のスコープを許可する必要があります。

* **\[Enterpriseのプロパティを管理する]**: 企業のサービス利用規約の設定を有効化または編集するためと、外部ユーザーに利用規約の設定を表示するために必要です。
* **ユーザーを管理する**: 他のユーザーのサービス利用規約を承認するために必要です。

[euserstatuses]: e://get-terms-of-service-user-statuses

[euserstatuses_put]: e://put-terms-of-service-user-statuses-id

[euserstatuses_post]: e://post-terms-of-service-user-statuses
