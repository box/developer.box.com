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
id: metadata/fields/float
rank: 2
type: guide
total_steps: 5
sibling_id: metadata/fields
parent_id: metadata/fields
next_page_id: metadata/fields
previous_page_id: metadata/fields/string
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/3-fields/2-float.md
fullyTranslated: true
---
# 浮動小数点メタデータフィールド

`float`タイプのメタデータフィールドは、数値入力のみが可能な標準のテキストフィールドとしてユーザーに表示されます。

<ImageFrame border center shadow width="400">

![文字列フィールド](./metadata-field-float.png)

</ImageFrame>

## 浮動小数点フィールドの作成

`float`フィールドは、[メタデータテンプレートの作成][g_create_template]時、または`addField`操作による[テンプレートの更新][g_update_template]時にメタデータテンプレートに追加できます。

The required attributes for a `float` field are a `type`, a `displayName`, and a `key`.

```json
{
  "scope": "enterprise",
  "displayName": "Contract",
  "fields": [
    {
      "type": "float",
      "key": "contract_value",
      "displayName": "Contract Value",
      "description": "The contract's total value",
      "hidden": false
    }
  ]
}

```

Optionally, a `description` can be provided that is shown to a user in the UI, and the field can be set to `hidden` to hide it from users in the web and mobile apps.

## 浮動小数点フィールドの更新

`float`テンプレートフィールドは、このフィールドが属する[テンプレートを更新][g_update_template]することで更新できます。テンプレートの更新は、ファイルまたはフォルダにすでに割り当てられているテンプレートも確実に更新される**操作**によって行われます。

When updating a `float` metadata field, the only relevant operation is the `editField` operation, which can be used to change the field's `key`, `displayName`, `description`, and `hidden` values.

```json
[
  {
    "op": "editField",
    "fieldKey": "contract_value",
    "data": {
      "displayName": "Total Annual Contract Value",
      "description": "The contract's total anual value",
      "key": "contract_tav",
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
