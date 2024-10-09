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
id: metadata/fields/enum
rank: 4
type: guide
total_steps: 5
sibling_id: metadata/fields
parent_id: metadata/fields
next_page_id: metadata/fields/multi-select
previous_page_id: metadata/fields
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/3-fields/4-enum.md
fullyTranslated: true
---
# 列挙型メタデータフィールド

`enum`タイプのメタデータフィールドは、ドロップダウンリストとしてユーザーに表示されます。ユーザーはリストから項目を1つ選択できます。

<ImageFrame border center shadow width="400">

![文字列フィールド](./metadata-field-enum.png)

</ImageFrame>

<Message notice>

An `enum` allows a user to select zero or a single value. To allow a user to select multiple values, use the [`multiSelect`][g_multi_select] template field.

</Message>

## `enum`フィールドの作成

`enum`フィールドは、[メタデータテンプレートの作成][g_create_template]時、または`addField`操作による[テンプレートの更新][g_update_template]時にメタデータテンプレートに追加できます。

The required attributes for an `enum` field are a `type`, a `displayName`, a `key`, and a list of options.

```json
{
  "scope": "enterprise",
  "displayName": "Contract",
  "fields": [
    {
      "type": "enum",
      "key": "customer_state",
      "displayName": "Customer State",
      "description": "The US state where the customer is located",
      "hidden": false,
      "options": [
        {"key": "N/A"},
        {"key": "AL"},
        {"key": "AK"}
      ]
    }
  ]
}

```

Optionally, a `description` can be provided that is shown to a user in the UI, and the field can be set to `hidden` to hide it from users in the web and mobile apps.

## `enum`フィールドの更新

`enum`テンプレートフィールドは、このフィールドが属する[テンプレートを更新][g_update_template]することで更新できます。テンプレートの更新は、ファイルまたはフォルダにすでに割り当てられているテンプレートも確実に更新される**操作**によって行われます。

### 基本的なフィールド値の変更

When updating an `enum` metadata field, one of the possible operations is the `editField` operation, which can be used to change the field's `key`, `displayName`, `description`, and `hidden` values.

```json
[
  {
    "op": "editField",
    "fieldKey": "customer_state",
    "data": {
      "displayName": "Customer State (USA)",
      "key": "customer_state_usa"
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

`enum`フィールドにオプションを追加するには、`addEnumOption`操作を使用します。この操作では、`fieldKey`に、変更する`enum`フィールドのキーを設定するほか、`data`オブジェクトには、追加する新しいオプションの`key`を指定する必要があります。

```json
[
  {
    "op": "addEnumOption",
    "fieldKey": "customer_state",
    "data": {
      "key": "AR"
    }
  }
]

```

オプションのリストは次のようになります。

```json
...
"options": [
  {"key": "N/A"},
  {"key": "AL"},
  {"key": "AK"},
  {"key": "AR"}
]
...

```

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### オプションの並べ替え

`enum`フィールドでオプションを並べ替えるには、`reorderEnumOptions`操作を使用します。この操作では、`fieldKey`に、変更する`enum`フィールドのキーを設定するほか、`enumOptionKeys`配列にはオプションのキーを順番に指定する必要があります。

```json
[
  {
    "op": "reorderEnumOptions",
    "fieldKey": "customer_state",
    "enumOptionKeys": [
      "AL",
      "AK",
      "AR",
      "N/A"
    ]
  }
]

```

オプションのリストは次のようになります。

```json
...
"options": [
  {"key": "AL"},
  {"key": "AK"},
  {"key": "AR"},
  {"key": "N/A"}
]
...

```

<Message warning>

この操作では、新しいオプションを追加することはできません。これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### オプションの編集

`enum`フィールドのオプションを編集するには、`editEnumOption`操作を使用します。この操作では、`fieldKey`に、変更する`enum`フィールドのキーを設定し、`enumOptionKey`に、フィールドオプションのキーを設定する必要があります。最後に、`data`オブジェクトには、フィールドオプションの新しい`key`を指定する必要があります。

```json
[
  {
    "op": "editEnumOption",
    "fieldKey": "customer_state",
    "enumOptionKey": "N/A",
    "data": {
      "key": "Outside USA"
    }
  }
]

```

オプションのリストは次のようになります。

```json
...
"options": [
  {"key": "AL"},
  {"key": "AK"},
  {"key": "AR"},
  {"key": "Outside USA"}
]
...

```

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### オプションの削除

Removing an option from an `enum` field can be achieved through the `removeEnumOption` operation. The operation expects the `fieldKey` to be set to the key of the `enum` field to change, and an `enumOptionKey` to be set to the key of the field option to remove.

```json
[
  {
    "op": "removeEnumOption",
    "fieldKey": "customer_state",
    "enumOptionKey": "AL"
  }
]

```

オプションのリストは次のようになります。

```json
...
"options": [
  {"key": "AK"},
  {"key": "AR"},
  {"key": "Outside USA"}
]
...

```

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。この値に設定されたすべてのフィールドでは、値が`null`にリセットされます。

</Message>

[g_create_template]: g://metadata/templates/create

[g_update_template]: g://metadata/templates/update

[g_multi_select]: g://metadata/fields/multi-select
