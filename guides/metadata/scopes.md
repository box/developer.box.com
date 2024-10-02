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
total_steps: 2
sibling_id: metadata
parent_id: metadata
next_page_id: metadata/classifications
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/1-scopes.md
fullyTranslated: true
---
# メタデータテンプレートのスコープ

メタデータテンプレートは、2つの異なるグループ、つまり**スコープ**にグループ化されます。

* **`global`**: 所属する会社に関係なく、Boxを使用するすべてのユーザーが使用できるテンプレートのグループ。たとえば、追加のスキーマを関連付けずに自由形式のキー/値の`string`ペアを配置する場所として使用される`global.properties`テンプレートがあります。
* **`enterprise`** or **`enterprise_*`**: a group of templates defined by a user within an enterprise. These templates are either created by admin's in the web application, or by applications using the API. When accessing or creating templates within the authenticated user's enterprise a short-hand of `enterprise` can be used. When accessing templates that belong to another enterprise - for example when accessing metadata on files belonging to other enterprises - the scope `enterprise_*` is used where `*` is the ID of the enterprise the template belongs to.

<Message warning>

# 権限

`global`スコープ内ではメタデータテンプレートを作成できないことと、ユーザーの会社内で作成されたメタデータテンプレートにアクセスできるのはその会社へのアクセス権限を持つユーザーのみであることに注意してください。

</Message>
