---
related_endpoints:
  - post_files_id_metadata_id_id
  - post_folders_id_metadata_id_id
related_resources:
  - metadata
  - metadata_template
required_guides:
  - metadata/templates/list
related_guides:
  - metadata/instances/list
  - metadata/instances/update
  - metadata/scopes
category_id: metadata
subcategory_id: metadata/4-instances
is_index: false
id: metadata/instances/create
rank: 3
type: guide
total_steps: 5
sibling_id: metadata/instances
parent_id: metadata/instances
next_page_id: metadata/instances
previous_page_id: metadata/instances/get
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/4-instances/3-create.md
---
# 項目へのメタデータの適用

メタデータテンプレートは、項目の`id`、テンプレートの`templateKey`と`scope`、およびテンプレート内の各フィールドの値のセットを使用してファイルまたはフォルダに適用できます。

<Message>

メタデータの[スコープ][scopes]には、`global` (すべての会社が利用できるテンプレートの場合)、`enterprise` (現在の会社が利用できるテンプレートの場合)、または`enterprise_:id` (IDがスコープ名の`:id`である会社に属するテンプレートの場合)のいずれかを指定できます。

</Message>

## ファイルにメタデータを適用

メタデータテンプレートのインスタンスをファイルに適用するには、ファイルの`file_id`、テンプレートの`scope`と`templateKey`、および必要に応じてテンプレート内の各[フィールド][fields]の値のセットを指定して[`POST /files/:file_id/metadata/:scope/:templateKey`][e_on_file] APIエンドポイントを呼び出します。

<Samples id="post_files_id_metadata_id_id">

</Samples>

<Message>

テンプレートの`scope`と`templateKey`を取得するには、[すべてのメタデータテンプレートのリストを取得][g_list_templates]するか、[ファイルのすべてのインスタンスのリストを取得][g_list_instances_item]します。

</Message>

<Message warning>

## タプルがすでに存在することを示すエラー

指定されたメタデータテンプレートでこのファイルにすでにメタデータが適用されている場合、エラーコード`tuple_already_exists`でエラーが返されます。この場合は、インスタンスを[代わりに更新する](g://metadata/instances/update)必要があります。

</Message>

## フォルダにメタデータを適用

メタデータテンプレートのインスタンスをフォルダに適用するには、フォルダの`folder_id`、テンプレートの`scope`と`templateKey`、および必要に応じてテンプレート内の各[フィールド][fields]の値のセットを指定して[`POST /folders/:folder_id/metadata/:scope/:templateKey`][e_on_folder] APIエンドポイントを呼び出します。

<Samples id="post_folders_id_metadata_id_id">

</Samples>

<Message>

テンプレートの`scope`と`templateKey`を取得するには、[すべてのメタデータテンプレートのリストを取得][g_list_templates]するか、[フォルダのすべてのインスタンスのリストを取得][g_list_instances_item]します。

</Message>

<Message warning>

## タプルがすでに存在することを示すエラー

指定されたメタデータテンプレートでこのフォルダにすでにメタデータが適用されている場合、エラーコード`tuple_already_exists`でエラーが返されます。この場合は、インスタンスを[代わりに更新する](g://metadata/instances/update)必要があります。

</Message>

## リクエスト本文

リクエストの本文には、テンプレート内の各[フィールド][fields]の値を含めることができます。テンプレートに存在するフィールドを調べるには、[メタデータテンプレートの調査][g_get_metadata_template]してください。

たとえば、次のテンプレートについて考えましょう。

```json
{
  "id": "8120731a-41e4-11ea-b77f-2e728ce88125",
  "type": "metadata_template",
  "templateKey": "productInfo",
  "scope": "enterprise_1234567",
  "displayName": "Product Info",
  "hidden": false,
  "copyInstanceOnItemCopy": true,
  "fields": [
    {
      "id": "feed71de-41e5-11ea-b77f-2e728ce88125",
      "type": "string",
      "key": "name",
      "displayName": "Name",
      "hidden": false
    },
    {
      "id": "02b36bb6-41e6-11ea-b77f-2e728ce88125",
      "type": "enum",
      "key": "category",
      "displayName": "Category",
      "hidden": false,
      "options": [
        {
          "id": "06a7bcc2-41e6-11ea-b77f-2e728ce88125",
          "key": "SUVs"
        },
        {
          "id": "0a50df02-41e6-11ea-b77f-2e728ce88125",
          "key": "Saloons"
        },
        {
          "id": "0e466be0-41e6-11ea-b77f-2e728ce88125",
          "key": "Cabriolets"
        }
      ]
    }
  ]
}
```

このテンプレートには、2つの[テンプレートフィールド][fields]として`name`と`category`があります。`name`フィールドは通常のテキストフィールドで、`category`は列挙型フィールドです。

このテンプレートをファイルまたはフォルダに割り当てるリクエストの本文には、テンプレートの任意のフィールドの値を含めることができます。本文にフィールドも値も含めないことも可能です。

この場合、次のリクエスト本文は有効な例です。

```json
{
  "name": "Model 3",
  "category": "SUVs"
}
```

<Message notice>

キー`properties`を使用してスコープが`global`に設定されたテンプレートは例外で、テンプレートに任意のデータを割り当てることができます。このテンプレートを使用すると、一連のキー/値ペアをテンプレートに割り当てることができます。

</Message>

<Message warning>

この例の`category`フィールドは`enum`フィールドで、このフィールドで使用できるオプションのいずれかを指定する必要があります。

</Message>

[fields]: g://metadata/fields

[scopes]: g://metadata/scopes

[e_on_file]: e://post_files_id_metadata_id_id

[e_on_folder]: e://post_folders_id_metadata_id_id

[g_list_templates]: g://metadata/templates/list

[g_list_instances_item]: g://metadata/instances/list

[g_get_metadata_template]: g://metadata/templates/get
