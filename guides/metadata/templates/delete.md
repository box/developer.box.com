---
related_endpoints:
  - delete_metadata_templates_id_id_schema
related_guides:
  - metadata/scopes
  - metadata/templates/create
related_resources:
  - metadata_template
required_guides:
  - metadata/scopes
category_id: metadata
subcategory_id: metadata/2-templates
is_index: false
id: metadata/templates/delete
rank: 6
type: guide
total_steps: 5
sibling_id: metadata/templates
parent_id: metadata/templates
next_page_id: ''
previous_page_id: metadata/templates/update
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/2-templates/6-delete.md
---
# メタデータテンプレートの削除

メタデータテンプレートを削除するには、[`DELETE
/metadata_templates/enterprise/:templateKey/schema`][endpoint] APIを呼び出します。

<Samples id="delete_metadata_templates_id_id_schema">

</Samples>

このAPIは、テンプレートが正常に削除された場合に、応答の本文がない`204 No Content` API応答を返します。また、すべてのファイルおよびフォルダからすべてのテンプレートインスタンスを削除します。

削除できるのは、`enterprise`スコープ内に作成されたテンプレートのみです。

<Message warning>

# 管理者権限が必須

メタデータテンプレートの削除は、管理者権限を持つユーザーに制限されています。つまり、管理者、または管理者から**会社のメタデータテンプレートの作成および編集**権限が付与されている共同管理者だけがウェブアプリまたはAPIを使用してテンプレートを管理できます。

</Message>

[endpoint]: e://delete_metadata_templates_id_id_schema
