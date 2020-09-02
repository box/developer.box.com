---
rank: 230
alias_paths: []
category_id: legal-holds
subcategory_id: null
is_index: true
id: legal-holds
type: guide
total_steps: 2
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: legal-holds/get
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/legal-holds/index.md
---
# リーガルホールド

リーガルホールドとは、係争中の訴訟や当然予期される訴訟で、関連する可能性のあるさまざまな形式の情報を会社が保持するために利用できるプロセスのことです。項目にホールドを適用すると、どのユーザーもBoxから項目を削除できなくなります。

リーガルホールドの管理とフォルダやファイルへの割り当ては、Box APIを介して実行できます。

<Message>

リーガルホールドは、任意のBusiness PlusアカウントまたはEnterpriseアカウントに追加できる、[Box Governance][governance]パッケージの機能です。

</Message>

## ポリシー、割り当て、およびホールド

リーガルホールドポリシーを操作するには、開発者は3つの異なるリソースを使用する必要があります。

* **ポリシー:** [リーガルホールドポリシー][policy]には、ホールドの一般的な動作が記載されています。これにより、ファイルの作成日時または更新日時に基づいて、影響を受けるファイルが特定されます。
* **割り当て:** [リーガルホールドポリシー割り当て][assignment]は、ポリシーとカストディアンの関係です。この場合、カストディアンにはユーザー、フォルダ、ファイル、またはファイルバージョンを指定できます。割り当てを作成すると、そのカストディアンに属するすべてのファイルバージョンにホールドが適用されます。たとえば、フォルダに割り当てが作成されると、ポリシーはそのフォルダ内にあるすべてのファイルバージョンに適用されます。
* **ホールド**: [ファイルバージョンのリーガルホールド][hold]は、特定のファイルバージョンに割り当てられているすべてのポリシーを表します。各ファイルバージョンに設定できるファイルバージョンのリーガルホールドは最大1つで、このホールドには、割り当てられた各ポリシーのリストが含まれていることに注意してください。

## ユースケースの例

証拠開示の命令を受けた場合や顧客が係争中の場合は、リーガルホールドポリシーを作成して、保持すべきすべての証拠を追跡できます。実際のホールドは、特定のファイルまたはフォルダにポリシーを割り当てることで行われます。ホールドが不要になったら、割り当てを削除するとポリシーを解除できます。

## 必須のスコープ

リーガルホールドAPIのいずれかを使用する前に、アプリケーションでは、[GCMおよびリーガルホールドの管理のスコープ][scopes]を有効にしておく必要があります。これらは、開発者コンソールでは使用できないため、代わりにカスタマーサポートに連絡して有効する必要があります。

[scopes]: g://api-calls/permissions-and-errors/scopes

[policy]: r://legal_hold_policy

[assignment]: r://legal_hold_assignment

[hold]: r://file_version_legal_hold

[governance]: https://www.box.com/security/governance-and-compliance
