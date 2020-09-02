---
related_endpoints:
  - get_metadata_templates_global
  - get_metadata_templates_enterprise
related_guides: []
related_resources:
  - metadata
  - metadata_template
required_guides: []
alias_paths: []
category_id: metadata
subcategory_id: null
is_index: false
id: metadata/scopes
rank: 1
type: guide
total_steps: 1
sibling_id: metadata
parent_id: metadata
next_page_id: metadata
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/1-scopes.md
---
# メタデータテンプレートのスコープ

メタデータテンプレートは、2つの異なるグループ、つまり**スコープ**にグループ化されます。

* **`global`**: 所属する会社に関係なく、Boxを使用するすべてのユーザーが使用できるテンプレートのグループ。たとえば、追加のスキーマを関連付けずに自由形式のキー/値の`string`ペアを配置する場所として使用される`global.properties`テンプレートがあります。
* **`enterprise`**または**`enterprise_*`**: 社内のユーザーによって定義されたテンプレートのグループ。これらのテンプレートは、管理者がウェブアプリケーションで作成したものか、アプリケーションがAPIを使用して作成したものです。認証済みユーザーの会社内用のテンプレートにアクセスまたは作成する場合は、省略形の`enterprise`を使用できます。別の会社に属するテンプレートにアクセスする場合は(例: 他の企業に属するファイルのメタデータにアクセスする場合)、`enterprise_*`スコープを使用します(`*`はテンプレートが属する会社のIDです)。

<Message warning>

# 権限

`global`スコープ内ではメタデータテンプレートを作成できないことと、ユーザーの会社内で作成されたメタデータテンプレートにアクセスできるのはその会社へのアクセス権限を持つユーザーのみであることに注意してください。

</Message>
