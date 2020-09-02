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
  https://github.com/box/developer.box.com/blob/default/content/guides/security/terms-of-service/index.md
---
<!-- alex disable reject -->

# 利用規約

Box APIを使用すると、管理者はBoxの使用に関する利用規約を設定できます。また、ユーザーは、カスタムアプリケーションの利用規約に同意および再同意できます。

## 用語

### 利用規約

利用規約とは、Boxに保存されている会社のデータをすべてのユーザーが使用できる条件を表す、会社レベルの記録文書です。

現在、どの会社にも2種類の利用規約があり、個別に有効にすることが可能です。**管理対象ユーザーの利用規約**は、会社のユーザーに対して有効にすることができます。一方、\*_外部ユーザーの利用規約_は、プライマリ会社のデータでコラボレーションする他の会社のユーザーに対して有効にすることができます。

## 利用規約ユーザーステータス

利用規約ユーザーステータスは、特定のユーザーによる利用規約への同意のステータスを表します。利用規約とユーザーをどのように組み合わせた場合でも、利用規約ユーザーステータスは1つだけです。

1 つの利用規約に、利用規約ユーザーステータスが複数あります(ユーザー1人につき1つ)。

1人のユーザーに、利用規約ユーザーステータスが複数存在する場合もあります。ユーザーは、自分の会社の管理対象の利用規約を承認または拒否できるだけでなく、コラボレーションしているさまざまな会社の複数の外部利用規約も承認または拒否できます。

## API

**会社の設定を編集**権限を持つBox管理者として認証されているアプリケーションは、APIを介して会社の利用規約を表示、作成、編集できます。

* [`GET /terms_of_services/:id`](e://get-terms-of-services-id): 特定の利用規約の情報を取得します。
* [`GET /terms_of_services`](e://get-terms-of-services): 管理対象ユーザーまたは外部ユーザー用に、会社内で使用されているすべての利用規約のリストを取得します。
* [`POST /terms_of_services`](e://post-terms-of-services): 外部ユーザーまたは管理対象ユーザー用に利用規約設定を作成します。
* [`PUT /terms_of_services/:id`](e://put-terms-of-services-id): 特定の利用規約設定を更新します。

さらに、アプリケーションは、APIを介して通常のユーザーの利用規約を表示し承認することができます。

* [`GET /terms_of_service_user_statuses`][euserstatuses]: ユーザーのすべての利用規約のリストを取得します。
* [`POST /terms_of_service_user_statuses`][euserstatuses_post]: 特定の利用規約を初めて承認または拒否します。
* [`PUT /terms_of_service_user_statuses/:id`][euserstatuses_put]: 以前に承認または拒否された特定の利用規約を承認または拒否します。

## スコープ

説明されているアクションを実行するには、アプリケーションに以下のスコープを許可する必要があります。

* **エンタープライズのプロパティを管理**: 会社の利用規約の設定を有効化または編集するためと、外部ユーザーに利用規約の設定を表示するために必要です。
* **ユーザーを管理**: 他のユーザーの利用規約を承認するために必要です。

[euserstatuses]: e://get-terms-of-service-user-statuses

[euserstatuses_put]: e://put-terms-of-service-user-statuses-id

[euserstatuses_post]: e://post-terms-of-service-user-statuses
