---
alias_paths: []
category_id: metadata
subcategory_id: metadata/2-templates
is_index: true
id: metadata/templates
rank: 2
type: guide
total_steps: 5
sibling_id: metadata
parent_id: metadata
next_page_id: metadata/templates/get
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/2-templates/0-index.md
fullyTranslated: true
---
# メタデータテンプレート

[メタデータテンプレート][template]には、ファイルまたはフォルダに割り当てることができる一連のキー/値ペアが記載されています。

たとえば、`invoiceData`テンプレートでは、請求書に関するデータを保持するため、請求書IDと顧客IDのフィールドが設定されています。

ファイルまたはフォルダには、`marketingCollateral`インスタンスや`retentionPolicy`インスタンスなど、複数の異なるテンプレート[インスタンス][instance]を関連付けることができます。

## メタデータのスコープ

メタデータテンプレートは、2つの異なるグループ、つまり**スコープ**にグループ化されます。

<CTA to="g://metadata/scopes">

メタデータのスコープの詳細を確認する

</CTA>

## 権限と制限

テンプレートは会社あたり500個までに制限されています。

メタデータテンプレートの作成は、管理者権限を持つユーザーに制限されています。つまり、管理者、または管理者から**会社のメタデータテンプレートの作成および編集**権限が付与されている共同管理者だけがウェブアプリまたはAPIを使用してテンプレートを管理できます。

[instance]: g://metadata/instances

[template]: g://metadata/templates
