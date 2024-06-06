---
rank: 200
alias_paths: []
category_id: retention-policies
subcategory_id: null
is_index: true
id: retention-policies
type: guide
total_steps: 2
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: retention-policies/get
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/retention-policies/index.md
fullyTranslated: true
---
# リテンションポリシー

リテンションポリシーは、指定した期間にわたってコンテンツが完全に削除されるのを防止します。管理者はリテンションポリシーを作成して特定のフォルダや会社全体に割り当てることができます。リテンションポリシーを使用すると、データを必要な期間保持し、法的にデータの保持が必要なくなったときに自動的にコンテンツを完全に削除することができます。

<Message>

リテンションポリシーは、Business PlusアカウントまたはEnterpriseアカウントに追加できる、[Box Governance][governance]パッケージの機能です。

</Message>

## ポリシー、割り当て、およびリテンション

リテンションポリシーを操作するには、開発者は3つの異なるリソースを使用する必要があります。

* **ポリシー:** [リテンションポリシー][policy]には、リテンションポリシーの一般的な動作が記載されています。これにより、リテンションを保持する期間、リテンションの延長が可能かどうか、およびリテンションポリシーの終了条件が決まります。
* **割り当て:** [リテンションポリシー割り当て][assignment]は、ポリシーとフォルダや会社の関係です。割り当てを作成すると、そのフォルダや会社に属するすべてのファイルバージョンにリテンションが適用されます。たとえば、フォルダに割り当てが作成されると、ポリシーはそのフォルダ内にあるすべてのファイルバージョンに適用されます。
* **リテンション**: [ファイルバージョンリテンション][retention]は、特定のファイルバージョンに割り当てられているすべてのポリシーを表します。各ファイルバージョンに設定できるファイルバージョンのリテンションは最大1つで、このリソースには、割り当てられた各ポリシーのリストが含まれていることに注意してください。

<Message type="warning">

Box APIの[ファイルバージョンリテンション][retention]セクションは非推奨になりました。代わりに、[リテンションの対象となるファイル][files-under]エンドポイントまたは[リテンションの対象となるファイルバージョン][file-versions-under]エンドポイントを使用できます。

</Message>

## リテンションポリシーによるファイルの削除

リテンションの対象となっているファイルは、フォルダから削除することはできますが、リテンションが期限切れるまではごみ箱に残ります。リテンションが期限切れになると、コンテンツが自動的に削除されるようにするか、ポリシーを削除するかを選択できます。

## ファイルのリテンション期間の延長

リテンションの対象となっているファイルのリテンション期間は、`disposition_at`フィールドの値を将来の日付で[更新][extend-retention]することで延長できます。一度延長した期間は、元に戻すことも、新しい日付より前に変更することもできません。

## 必須のスコープ

リテンションポリシーAPIのいずれかを使用する前に、アプリケーションでは、[GCMおよびリテンションポリシーの管理のスコープ][scopes]を有効にしておく必要があります。これらは、開発者コンソールでは使用できないため、代わりにカスタマーサポートに連絡して有効する必要があります。

[scopes]: g://api-calls/permissions-and-errors/scopes

[policy]: r://retention_policy

[assignment]: r://retention_policy_assignment

[retention]: r://file_version_retention

[governance]: https://www.box.com/security/governance-and-compliance

[files-under]: e://get-retention-policy-assignments-id-files-under-retention

[file-versions-under]: e://get-retention-policy-assignments-id-file-versions-under-retention

[extend-retention]: e://put-files-id/#param-disposition_at
