---
related_endpoints:
  - post_metadata_templates_schema
related_guides:
  - metadata/scopes
  - metadata/templates/list
  - metadata/templates/update
required_guides:
  - metadata/scopes
related_resources:
  - metadata_templates
category_id: metadata
subcategory_id: metadata/2-templates
is_index: false
id: metadata/templates/create
rank: 4
type: guide
total_steps: 5
sibling_id: metadata/templates
parent_id: metadata/templates
next_page_id: metadata/templates/update
previous_page_id: metadata/templates/get
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/2-templates/4-create.md
---
# メタデータテンプレートの作成

メタデータテンプレートを作成するには、`scope`、`displayName`、および必要に応じて一連の`fields`を[`POST /metadata_templates/schema`][e_create_template] APIに渡します。

<Samples id="post_metadata_templates_schema">

</Samples>

<Message notice>

メタデータテンプレートは、`enterprise`スコープのみに作成できます。`global`スコープの場合はテンプレートを作成できません。

</Message>

<Message warning>

# 管理者権限が必須

メタデータテンプレートの作成は、管理者権限を持つユーザーに制限されています。つまり、管理者、または管理者から**会社のメタデータテンプレートの作成および編集**権限が付与されている共同管理者だけがウェブアプリまたはAPIを使用してテンプレートを管理できます。

</Message>

## テンプレートフィールド

`fields`属性は、ユーザーがテンプレートで入力できる個々のフィールドのセットを表します。たとえば、`customer`テンプレートに`string`タイプの`name`フィールドがあるとします。

テンプレートフィールドは、`string`、`enum`、`float`、`date`、`enum`、または`multiSelect`タイプのいずれかになります。各フィールドには少なくとも`type`、`displayName`、および`key`が必要です。

```json
{
  "scope": "enterprise",
  "displayName": "Customer",
  "fields": [
    {
      "type": "string",
      "key": "name",
      "displayName": "Name"
    }
  ]
}
```

`enum`および`multiSelect`フィールドタイプは、ユーザーが項目のリストからそれぞれ1つまたは複数のオプションを選択できるドロップダウンリストを表します。

```json
{
  "scope": "enterprise",
  "displayName": "Customer",
  "fields": [
    {
      "type": "enum",
      "key": "industry",
      "displayName": "Industry",
      "options": [
        {"key": "Technology"},
        {"key": "Healthcare"},
        {"key": "Legal"}
      ]
    }
  ]
}
```

<CTA to="g://metadata/fields">

メタデータテンプレートフィールドの詳細を確認する

</CTA>

## テンプレートキー

メタデータテンプレートが作成されると、`templateKey`を明示的に指定した場合を除き、テンプレートの`displayName`から自動的に`templateKey`が生成されます。テンプレートキーを作成する際に、名前に含まれるスペースと規格外の文字は削除され、文字列はキャメルケースに変換されます。

たとえば、`Test Name (with-special_) Characters`という名前のメタデータテンプレートの`templateKey`は`testNameWithspecialCharacters`になります。

その後、このテンプレートキーは、テンプレートの情報を取得したり、項目にテンプレートを割り当てたりするためのAPIリクエストを実行するときに使用されます。

[user-types]: g://authentication/user-types

[e_create_template]: e://post_metadata_templates_schema
