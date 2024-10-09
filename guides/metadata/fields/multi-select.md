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
id: metadata/fields/multi-select
rank: 5
type: guide
total_steps: 5
sibling_id: metadata/fields
parent_id: metadata/fields
next_page_id: ''
previous_page_id: metadata/fields/enum
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/3-fields/5-multi-select.md
fullyTranslated: true
---
# 複数選択メタデータフィールド

`multiSelect`タイプのメタデータフィールドは、ドロップダウンリストとしてユーザーに表示されます。ユーザーはリストから複数の項目を選択できます。

<ImageFrame border center shadow width="400">

![文字列フィールド](./metadata-field-multi-select.png)

</ImageFrame>

<Message notice>

A `multiSelect` field allows a user to select zero, one, or more values. To force a user to select only one value at most, use the [`enum`][g_enum_field] template field.

</Message>

## `multiSelect`フィールドの作成

`multiSelect`フィールドは、[メタデータテンプレートの作成][g_create_template]時、または`addField`操作による[テンプレートの更新][g_update_template]時にメタデータテンプレートに追加できます。

`multiSelect`フィールドの必須属性は、`type`、`displayName`、`key`、およびオプションのリストです。

```json
{
  "scope": "enterprise",
  "displayName": "Contract",
  "fields": [
    {
      "type": "multiSelect",
      "key": "box_entity",
      "displayName": "Box Entity",
      "description": "The Box entity that this contract belongs to",
      "hidden": false,
      "options": [
        {"key": "Box, Inc"},
        {"key": "Box.com (UK) Ltd."},
        {"key": "KK Box Japan"}
      ]
    }
  ]
}

```

Optionally, a `description` can be provided that is shown to a user in the UI, and the field can be set to `hidden` to hide it from users in the web and mobile apps.

## `multiSelect`フィールドの更新

`multiSelect`テンプレートフィールドは、このフィールドが属する[テンプレートを更新][g_update_template]することで更新できます。テンプレートの更新は、ファイルまたはフォルダにすでに割り当てられているテンプレートも確実に更新される**操作**によって行われます。

### 基本的なフィールド値の変更

When updating a `multiSelect` metadata field, one of the possible operations is the `editField` operation, which can be used to change the field's `key`, `displayName`, `description`, and `hidden` values.

```json
[
  {
    "op": "editField",
    "fieldKey": "box_entity",
    "data": {
      "displayName": "Box Entities",
      "key": "box_entities"
    }
  }
]

```

<Message>

ここにある`fieldKey`は、変更するフィールドの元のキーを表します。`data.key`フィールドはフィールドの新しいキーです。

</Message>

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### オプションの追加

`multiSelect`フィールドにオプションを追加するには、`addMultiSelectOption`操作を使用します。この操作では、`fieldKey`に、変更する`multiSelect`フィールドのキーを設定するほか、`data`オブジェクトには、追加する新しいオプションの`key`を指定する必要があります。

```json
[
  {
    "op": "addMultiSelectOption",
    "fieldKey": "box_entity",
    "data": {
      "key": "Box (NL) BV"
    }
  }
]

```

オプションのリストは次のようになります。

```json
...
"options": [
  {"key": "Box, Inc"},
  {"key": "Box.com (UK) Ltd."},
  {"key": "KK Box Japan"},
  {"key": "Box (NL) BV"}
]
...

```

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### オプションの並べ替え

Reordering the options in a `multiSelect` field can be achieved through the `reorderMultiSelectOptions` operation. The operation expects the `fieldKey` to be set to the key of the `multiSelect` field to change, and a `multiSelectOptionKeys` array with the keys of the options in order.

```json
[
  {
    "op": "reorderMultiSelectOptions",
    "fieldKey": "box_entity",
    "multiSelectOptionKeys": [
      "Box, Inc",
      "Box.com (UK) Ltd.",
      "Box (NL) BV",
      "KK Box Japan"
    ]
  }
]

```

オプションのリストは次のようになります。

```json
...
"options": [
  {"key": "Box, Inc"},
  {"key": "Box.com (UK) Ltd."},
  {"key": "Box (NL) BV"},
  {"key": "KK Box Japan"}
]
...

```

<Message warning>

この操作では、新しいオプションを追加することはできません。これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### オプションの編集

Editing an option of a `multiSelect` field can be achieved through the `editMultiSelectOption` operation. The operation expects the `fieldKey` to be set to the key of the `multiSelect` field to change, and a `multiSelectOptionKey` to be set to the key of the field option. Finally, it expects a `data` object with the new `key` of the field option.

```json
[
  {
    "op": "editMultiSelectOption",
    "fieldKey": "box_entity",
    "multiSelectOptionKey": "Box (NL) BV",
    "data": {
      "key": "Box.nl BV"
    }
  }
]

```

オプションのリストは次のようになります。

```json
...
"options": [
  {"key": "Box, Inc"},
  {"key": "Box.com (UK) Ltd."},
  {"key": "Box.nl BV"},
  {"key": "KK Box Japan"}
]
...

```

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### オプションの削除

Removing an option from a `multiSelect` field can be achieved through the `removeMultiSelectOption` operation. The operation expects the `fieldKey` to be set to the key of the `multiSelect` field to change, and a `multiSelectOptionKey` to be set to the key of the field option to remove.

```json
[
  {
    "op": "removeMultiSelectOption",
    "fieldKey": "customer_state",
    "multiSelectOptionKey": "KK Box Japan"
  }
]

```

オプションのリストは次のようになります。

```json
...
"options": [
  {"key": "Box, Inc"},
  {"key": "Box.com (UK) Ltd."},
  {"key": "Box.nl BV"}
]
...

```

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。この値に設定されたすべてのフィールドでは、値が、選択した値のリストから削除されます。

</Message>

[g_create_template]: g://metadata/templates/create

[g_update_template]: g://metadata/templates/update

[g_enum_field]: g://metadata/fields/enum
