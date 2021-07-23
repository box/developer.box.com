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

`multiSelect`フィールドを使用すると、ユーザーは0個、1個、または複数個の値を選択できます。ユーザーが選択できる値を1つだけに制限するには、[`enum`][g_enum_field]テンプレートフィールドを使用します。

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

必要に応じて、UIでユーザーに表示される`description`を指定できます。また、このフィールドを`hidden`に設定して、ウェブアプリとモバイルアプリでユーザーに表示されないようにすることもできます。

## `multiSelect`フィールドの更新

`multiSelect`テンプレートフィールドは、このフィールドが属する[テンプレートを更新][g_update_template]することで更新できます。テンプレートの更新は、ファイルまたはフォルダにすでに割り当てられているテンプレートも確実に更新される**操作**によって行われます。

### 基本的なフィールド値の変更

`multiSelect`メタデータフィールドを更新する際に可能な操作の1つとして、フィールドの`key`、`displayName`、`description`、および`hidden`の値を変更するのに使用できる`editField`操作があります。

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

`multiSelect`フィールドでオプションを並べ替えるには、`reorderMultiSelectOptions`操作を使用します。この操作では、`fieldKey`に、変更する`multiSelect`フィールドのキーを設定するほか、`multiSelectOptionKeys`配列にはオプションのキーを順番に指定する必要があります。

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
  {"key": "Box (NL) BV"},
  {"key": "Box.com (UK) Ltd."},
  {"key": "KK Box Japan"}
]
...
```

<Message warning>

この操作では、新しいオプションを追加することはできません。これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### オプションの編集

`multiSelect`フィールドのオプションを編集するには、`editMultiSelectOption`操作を使用します。この操作では、`fieldKey`に、変更する`multiSelect`フィールドのキーを設定し、`multiSelectOptionKey`に、フィールドオプションのキーを設定する必要があります。最後に、`data`オブジェクトには、フィールドオプションの新しい`key`を指定する必要があります。

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
  {"key": "Box.nl BV"},
  {"key": "Box.com (UK) Ltd."},
  {"key": "KK Box Japan"}
]
...
```

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### オプションの削除

`multiSelect`フィールドからオプションを削除するには、`removeMultiSelectOption`操作を使用します。この操作では、`fieldKey`に、変更する`multiSelect`フィールドのキーを設定し、`multiSelectOptionKey`に、削除するフィールドオプションのキーを設定します。

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
  {"key": "Box.nl BV"},
  {"key": "Box.com (UK) Ltd."}
]
...
```

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。この値に設定されたすべてのフィールドでは、値が、選択した値のリストから削除されます。

</Message>

[g_create_template]: g://metadata/templates/create

[g_update_template]: g://metadata/templates/update

[g_enum_field]: g://metadata/fields/enum
