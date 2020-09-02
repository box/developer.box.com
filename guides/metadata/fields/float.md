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
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/3-fields/2-float.md
---
# 浮動小数点メタデータフィールド

`float`タイプのメタデータフィールドは、数値入力のみが可能な標準のテキストフィールドとしてユーザーに表示されます。

<ImageFrame border center shadow width="400">

![文字列フィールド](./metadata-field-float.png)

</ImageFrame>

## 浮動小数点フィールドの作成

`float`フィールドは、[メタデータテンプレートの作成][g_create_template]時、または`addField`操作による[テンプレートの更新][g_update_template]時にメタデータテンプレートに追加できます。

`float`フィールドの必須属性は、`type`、`displayName`、および`key`です。

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

必要に応じて、UIでユーザーに表示される`description`を指定できます。また、このフィールドを`hidden`に設定して、ウェブアプリとモバイルアプリでユーザーに表示されないようにすることもできます。

## 浮動小数点フィールドの更新

`float`テンプレートフィールドは、このフィールドが属する[テンプレートを更新][g_update_template]することで更新できます。テンプレートの更新は、ファイルまたはフォルダにすでに割り当てられているテンプレートも確実に更新される**操作**によって行われます。

`float`メタデータフィールドを更新する際、関連する操作は、フィールドの`key`、`displayName`、`description`、および`hidden`の値を変更するのに使用できる`editField`操作のみです。

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
