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
id: metadata/fields/date
rank: 3
type: guide
total_steps: 5
sibling_id: metadata/fields
parent_id: metadata/fields
next_page_id: metadata/fields/enum
previous_page_id: metadata/fields/float
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/3-fields/3-date.md
---
# 日付メタデータフィールド

`date`タイプのメタデータフィールドは、日付選択機能としてユーザーに表示されます。

<ImageFrame border center shadow width="400">

![文字列フィールド](./metadata-field-date.png)

</ImageFrame>

<Message notice>

Boxウェブアプリでは日付が日付選択機能として表示されますが、実際の日付は、ミリ秒の形式で保存されています。日付の時間部分は、常に`T00:00:00.000Z`に設定されています。

</Message>

## 日付フィールドの作成

`date`フィールドは、[メタデータテンプレートの作成][g_create_template]時、または`addField`操作による[テンプレートの更新][g_update_template]時にメタデータテンプレートに追加できます。

`date`フィールドの必須属性は、`type`、`displayName`、および`key`です。

```json
{
  "scope": "enterprise",
  "displayName": "Contract",
  "fields": [
    {
      "type": "date",
      "key": "effective_date",
      "displayName": "Effective Date",
      "description": "The effective date when the contract goes in effect",
      "hidden": false
    }
  ]
}
```

必要に応じて、UIでユーザーに表示される`description`を指定できます。また、このフィールドを`hidden`に設定して、ウェブアプリとモバイルアプリでユーザーに表示されないようにすることもできます。

## 日付フィールドの更新

`date`テンプレートフィールドは、このフィールドが属する[テンプレートを更新][g_update_template]することで更新できます。テンプレートの更新は、ファイルまたはフォルダにすでに割り当てられているテンプレートも確実に更新される**操作**によって行われます。

`date`メタデータフィールドを更新する際、関連する操作は、フィールドの`key`、`displayName`、`description`、および`hidden`の値を変更するのに使用できる`editField`操作のみです。

```json
[
  {
    "op": "editField",
    "fieldKey": "effective_date",
    "data": {
      "displayName": "Effective Contract Date",
      "description": "The contract's effective date",
      "key": "effective_contract_date",
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
