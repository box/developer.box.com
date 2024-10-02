---
related_endpoints:
  - put_metadata_templates_id_id_schema
related_guides:
  - metadata/templates/create
required_guides:
  - metadata/scopes
  - metadata/templates/create
related_resources:
  - metadata_template
category_id: metadata
subcategory_id: metadata/2-templates
is_index: false
id: metadata/templates/update
rank: 5
type: guide
total_steps: 5
sibling_id: metadata/templates
parent_id: metadata/templates
next_page_id: metadata/templates/delete
previous_page_id: metadata/templates/create
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/2-templates/5-update.md
fullyTranslated: true
---
# メタデータテンプレートの更新

メタデータテンプレートを更新するには、操作の配列を[`PUT /metadata_templates/:scope/:templateKey/schema`][endpoint] APIに渡します。

<Samples id="put_metadata_templates_id_id_schema">

</Samples>

<Message warning>

# 管理者権限が必須

メタデータテンプレートの更新は、管理者権限を持つユーザーに制限されています。つまり、管理者、または管理者から**会社のメタデータテンプレートを作成、編集する**権限が付与されている共同管理者だけがウェブアプリまたはAPIを使用してテンプレートを管理できます。

</Message>

## 操作

メタデータテンプレートの更新は、テンプレート自体を直接変更するのではなく、**操作**を利用して実行されます。この方法では、ファイルおよびフォルダにすでに適用されている既存のメタデータインスタンスを更新できます。

## テンプレートの操作

テンプレートの操作により、テンプレートの詳細またはフィールドが更新されます。一般的に、これらの操作は、あまり影響なくテンプレートインスタンスに適用されるため安全です。

### テンプレートの編集

`editTemplate`操作では、`displayName`や`copyInstanceOnItemCopy`など、テンプレートの基本プロパティを編集できます。

| パラメータ  |                    |
| ------ | ------------------ |
| `data` | 変更するプロパティを表すオブジェクト |

```json
[
  {
    "op": "editTemplate",
    "data": {
      "displayName": "Client",
      "copyInstanceOnItemCopy": true
    }
  }
]

```

これにより、新しい表示名がClientになるようにテンプレートが更新されます。

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### テンプレートへのフィールドの追加

`addField`操作では、テンプレートにフィールドを追加します。

| パラメータ  |                    |
| ------ | ------------------ |
| `data` | 追加するフィールドを表すオブジェクト |

```json
[
  {
    "op": "addField",
    "data": {
      "displayName": "Category",
      "key": "category",
      "hidden": false,
      "type": "string"
    }
  }
]

```

これにより、`displayName`および`key`が**category**に指定されている、非表示ではない新しい文字列フィールドが追加されます。

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。

</Message>

### フィールドの並べ替え

`reorderFields`操作では、テンプレート内のフィールドのリストを、リクエストされたフィールドリストに合わせて並べ替えます。

| パラメータ       |                                |
| ----------- | ------------------------------ |
| `fieldKeys` | リクエストされた順番になっているフィールドキーの新しいリスト |

```json
{
  "op": "reorderFields",
  "fieldKeys": ["field2", "field1", "field3"]
}

```

これにより、テンプレートのフィールドは、最初に`field2`、その後`field1`、`field3`が続くように並べ替えられます。

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。フィールドは並べ替えられますが、フィールドの値はそのまま変わりません。

</Message>

## フィールドの操作

フィールドの操作により、テンプレートのスキーマが変換されます。以下に、このAPIで使用できる、以前に割り当てたテンプレートのデータを変更する可能性のある操作のリストを示します。

このような変更は、ファイルの変更ではなくテンプレートの変更としてログに記録されます。

### フィールドの編集

The operation `editField` edits any number of the base properties of a field like the `displayName`, `description`, `key`, and `hidden` state.

| パラメータ      |                             |
| ---------- | --------------------------- |
| `data`     | フィールドに設定する新しいプロパティを表すオブジェクト |
| `fieldKey` | 編集するフィールドのキー                |

```json
{
  "op": "editField",
  "fieldKey": "category",
  "data": {
    "displayName": "Customer Group"
  }
}

```

This will update the field `category` to have a new display name of **Customer Group**. If the key is changed, existing values of the specified field are migrated to the new key. The search index will be updated, yet it may take time depending on how many files are affected by the change.

<Message warning>

これは、このテンプレートの既存のインスタンスに影響する可能性があります。

</Message>

### フィールドの削除

The operation `removeField` removes a field from a template.

| パラメータ      |                      |
| ---------- | -------------------- |
| `fieldKey` | テンプレートから削除するフィールドのキー |

```json
{
  "op": "removeField",
  "fieldKey": "brand"
}

```

This will remove the field `brand` from the template as well as all instances of the template. The search index will be updated, yet it may take time depending on how many files are affected by the change.

<Message warning>

これは、このテンプレートの既存のインスタンスに影響します。

</Message>

## フィールドオプションの操作

[`enum`](g://metadata/fields/enum)および[`multiSelect`](g://metadata/fields/multi-select)メタデータフィールドタイプはどちらも、フィールドのオプションを変更するための追加操作をサポートしています。

| 操作                                                                              |                                      |
| ------------------------------------------------------------------------------- | ------------------------------------ |
| [`addEnumOption`](g://metadata/fields/enum#add-an-option)                       | `enum`フィールドにオプションを追加します              |
| [`editEnumOption`](g://metadata/fields/enum#edit-an-option)                     | `enum`フィールドのオプションを編集します              |
| [`reorderEnumOptions`](g://metadata/fields/enum#reorder-options)                | `enum`フィールドのオプションを並べ替えます             |
| [`removeEnumOption`](g://metadata/fields/enum#remove-an-option)                 | Removes an `enum` field option       |
| [`addMultiSelectOption`](g://metadata/fields/multi-select#add-an-option)        | `multiSelect`フィールドにオプションを追加します       |
| [`editMultiSelectOption`](g://metadata/fields/multi-select#edit-an-option)      | `multiSelect`フィールドのオプションを編集します       |
| [`reorderMultiSelectOptions`](g://metadata/fields/multi-select#reorder-options) | `multiSelect`フィールドのオプションを並べ替えます      |
| [`removeMultiSelectOption`](g://metadata/fields/multi-select#remove-an-option)  | Removes a `multiSelect` field option |

[endpoint]: e://put_metadata_templates_id_id_schema
