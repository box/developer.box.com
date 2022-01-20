---
related_endpoints:
  - post_metadata_templates
  - put_metadata_templates_id_id_schema
related_guides:
  - metadata/templates/create
  - metadata/templates/update
related_resources:
  - metadata_template
category_id: metadata
subcategory_id: metadata/3-fields
is_index: false
id: metadata/fields/string
rank: 1
type: guide
total_steps: 5
sibling_id: metadata/fields
parent_id: metadata/fields
next_page_id: metadata/fields/float
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/3-fields/1-string.md
fullyTranslated: true
---
# 文字列メタデータフィールド

`string`タイプのメタデータフィールドは、標準のテキストフィールドとしてユーザーに表示されます。

<ImageFrame border center shadow width="400">

![文字列フィールド](./metadata-field-string.png)

</ImageFrame>

## 文字列フィールドの作成

`string`フィールドは、[メタデータテンプレートの作成][g_create_template]時、または`addField`操作による[テンプレートの更新][g_update_template]時にメタデータテンプレートに追加できます。

`string`フィールドの必須属性は、`type`、`displayName`、および`key`です。

```json
{
  "scope": "enterprise",
  "displayName": "Customer",
  "fields": [
    {
      "type": "string",
      "key": "name",
      "displayName": "Name",
      "description": "The customer's legal name",
      "hidden": false
    }
  ]
}
```

必要に応じて、UIでユーザーに表示される`description`を指定できます。また、このフィールドを`hidden`に設定して、ウェブアプリとモバイルアプリでユーザーに表示されないようにすることもできます。

## 文字列フィールドの更新

`string`テンプレートフィールドは、このフィールドが属する[テンプレートを更新][g_update_template]することで更新できます。テンプレートの更新は、ファイルまたはフォルダにすでに割り当てられているテンプレートも確実に更新される**操作**によって行われます。

`string`メタデータフィールドを更新する際、関連する操作は、フィールドの`key`、`displayName`、`description`、および`hidden`の値を変更するのに使用できる`editField`操作のみです。

```json
[
  {
    "op": "editField",
    "fieldKey": "name",
    "data": {
      "displayName": "Customer Name",
      "description": "The contact name at the customer",
      "key": "customer_name",
      "hidden": true
    }
  }
]
```

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。

</Message>

[g_create_template]: g://metadata/templates/create

[g_update_template]: g://metadata/templates/update
