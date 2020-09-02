---
related_endpoints:
  - put_files_id_metadata_id_id
  - put_folders_id_metadata_id_id
related_guides: []
related_resources:
  - metadata
  - metadata_template
required_guides:
  - metadata/instances/list
  - metadata/instances/create
  - metadata/templates/list
category_id: metadata
subcategory_id: metadata/4-instances
is_index: false
id: metadata/instances/update
rank: 4
type: guide
total_steps: 5
sibling_id: metadata/instances
parent_id: metadata/instances
next_page_id: metadata/instances/delete
previous_page_id: metadata/instances/create
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/4-instances/4-update.md
---
# 項目のメタデータの更新

ファイルまたはフォルダに適用されたメタデータを更新するには、項目の`id`、テンプレートの`templateKey`と`scope`に加え、テンプレートインスタンスのデータを操作するための一連のJSON操作を使用します。

## ファイルのメタデータを更新

ファイルのメタデータを更新するには、ファイルの`file_id`、テンプレートの`scope`と`templateKey`、およびテンプレートインスタンスのデータを操作するための一連のJSON操作を指定して[`PUT /files/:file_id/metadata/:scope/:templateKey`][e_on_file] APIエンドポイントを呼び出します。

<Samples id="put_files_id_metadata_id_id">

</Samples>

<Message>

認証済みユーザーがファイルのメタデータに対する変更を書き込めるようにするには、ファイルへの書き込みアクセス権限が必要です。

</Message>

## フォルダのメタデータを更新

フォルダのメタデータを更新するには、フォルダの`folder_id`、テンプレートの`scope`と`templateKey`、およびテンプレートインスタンスのデータを操作するための一連のJSON操作を指定して[`PUT /folders/:folder_id/metadata/:scope/:templateKey`][e_on_folder] APIエンドポイントを呼び出します。

<Samples id="put_folders_id_metadata_id_id">

</Samples>

<Message>

認証済みユーザーがファイルのメタデータに対する変更を書き込めるようにするには、ファイルへの書き込みアクセス権限が必要です。

</Message>

## JSON操作

メタデータを更新する場合は、[JSON-Patchの仕様][jsonpatch]に従う必要があります。これは、操作オブジェクトのリストとして表されます。

メタデータインスタンスの場合、これらの操作には`add`、`replace`、`remove`、`test`、`move`、`copy`のいずれかを指定できます。どの操作も、`op`の名前、変更対象のフィールドを指す[JSON Pointer][pointer] `path`のほか、実行される操作に応じた`value`または`from`値(省略可)で構成されます。

```json
[
  { "op": "test", "path": "/competitiveDocument", "value": "no" },
  { "op": "remove", "path": "/competitiveDocument" },
  { "op": "test", "path": "/status", "value": "active" },
  { "op": "replace", "path": "/status", "value": "inactive" },
  { "op": "test", "path": "/author", "value": "Jones" },
  { "op": "copy", "from": "/author", "path": "/editor" },
  { "op": "move", "from": "/currentState", "path": "/previousState" },
  { "op": "add", "path": "/currentState", "value": "reviewed" }
]
```

<Message warning>

メタデータを編集する際には、メタデータテンプレートのスキーマに準拠した値のみを使用できます。更新は完全に適用されるか、まったく適用されないかのどちらかです。更新操作の適用中にエラーが発生した場合、メタデータインスタンスは変更されません。

テンプレートインスタンスを更新できるのは、テンプレートがすでにファイルまたはフォルダに割り当てられている場合のみです。

</Message>

### 新しい値の追加

テンプレートに新しい値を追加するには、`add`操作を使用します。

```json
[
  {
    "op": "add",
    "path": "/name",
    "value": "Model 3"
  }
]
```

これにより、値が`Model 3`の`name`フィールドが追加されます。この操作の前は、テンプレートの`name`フィールドに値がありませんでした。

```js
{
  // "name": null, // old value
  "name": "Model 3", // new value
  "category": "SUVs",
  "$type": "productInfo-8120731a-41e4-11ea-b77f-2e728ce88125",
  "$parent": "folder_3456",
  "$id": "22ba8c96-41e6-11ea-b77f-2e728ce88125",
  "$version": 3,
  "$typeVersion": 0,
  "$template": "productInfo",
  "$scope": "enterprise_1234567",
  "$canEdit": true
}
```

<Message warning>

`enum`および`multiSelect`フィールドの場合、この新しい値には、そのフィールドに有効なオプションのいずれかを指定する必要があります。

</Message>

### 値の置き換え

テンプレート上の値を置き換えるには、`replace`操作を使用します。

```json
[
  {
    "op": "replace",
    "path": "/name",
    "value": "Model 4"
  }
]
```

これにより、`name`フィールドの値`Model 3`が新しい値`Model
4`に置き換えられます。

```js
{
  // "name": "Model 3", # Old value
  "name": "Model 3", // new value
  "category": "SUVs",
  "$type": "productInfo-8120731a-41e4-11ea-b77f-2e728ce88125",
  "$parent": "folder_3456",
  "$id": "22ba8c96-41e6-11ea-b77f-2e728ce88125",
  "$version": 3,
  "$typeVersion": 0,
  "$template": "productInfo",
  "$scope": "enterprise_1234567",
  "$canEdit": true
}
```

<Message warning>

`enum`および`multiSelect`フィールドの場合、この新しい値には、そのフィールドに有効なオプションのいずれかを指定する必要があります。

</Message>

### 値のコピー

値をあるフィールドから別のフィールドにコピーするには、`copy`操作を使用します。

```json
[
  {
    "op": "copy",
    "from": "/name",
    "path": "/displayName"
  }
]
```

これにより、`name`フィールドの値と一致する値が設定された`displayName`フィールドが追加されます。この操作の前は、テンプレートの`displayName`フィールドに値がありませんでした。

```js
{
  "name": "Model 3",
  "displayName": "Model 3", // new value, copied from the name
  "category": "SUVs",
  "$type": "productInfo-8120731a-41e4-11ea-b77f-2e728ce88125",
  "$parent": "folder_3456",
  "$id": "22ba8c96-41e6-11ea-b77f-2e728ce88125",
  "$version": 3,
  "$typeVersion": 0,
  "$template": "productInfo",
  "$scope": "enterprise_1234567",
  "$canEdit": true
}
```

<Message warning>

`enum`および`multiSelect`フィールドの場合、この新しい値には、そのフィールドに有効なオプションのいずれかを指定する必要があります。

</Message>

### 値の移動

値をあるフィールドから別のフィールドに移動するには、`move`操作を使用します。

```json
[
  {
    "op": "copy",
    "from": "/name",
    "path": "/displayName"
  }
]
```

これにより、`name`フィールドの値と一致する値が設定された`displayName`フィールドが追加されます。この操作の前は、テンプレートの`displayName`フィールドに値がありませんでした。この操作の後、`name`フィールドはすでに存在しません。

```js
{
  // "name": "Model 3", // old value, no longer present now
  "displayName": "Model 3", // new value, copied from the name
  "category": "SUVs",
  "$type": "productInfo-8120731a-41e4-11ea-b77f-2e728ce88125",
  "$parent": "folder_3456",
  "$id": "22ba8c96-41e6-11ea-b77f-2e728ce88125",
  "$version": 3,
  "$typeVersion": 0,
  "$template": "productInfo",
  "$scope": "enterprise_1234567",
  "$canEdit": true
}
```

<Message warning>

`enum`および`multiSelect`フィールドの場合、この新しい値には、そのフィールドに有効なオプションのいずれかを指定する必要があります。

</Message>

### 値の削除

メタデータインスタンスから値を削除するには、`remove`操作を使用します。

```json
[
  {
    "op": "remove",
    "path": "/name"
  }
]
```

これにより、`name`フィールドがメタデータインスタンスから完全に削除されます。

```js
{
  // "name": "Model 3", // old value, no longer present now
  "category": "SUVs",
  "$type": "productInfo-8120731a-41e4-11ea-b77f-2e728ce88125",
  "$parent": "folder_3456",
  "$id": "22ba8c96-41e6-11ea-b77f-2e728ce88125",
  "$version": 3,
  "$typeVersion": 0,
  "$template": "productInfo",
  "$scope": "enterprise_1234567",
  "$canEdit": true
}
```

<Message warning>

`enum`および`multiSelect`フィールドの場合、この新しい値には、そのフィールドに有効なオプションのいずれかを指定する必要があります。

</Message>

### 値のテスト

フィールドに期待する値が設定されていることをテストするには、`test`操作を使用します。

```json
[
  {
    "op": "test",
    "path": "/name",
    "value": "Model 4"
  }
]
```

テストに失敗すると、APIはいずれの操作も実行せず、次のエラーとともにHTTPステータス`409 Conflict`を返します。

```json
{
  "message": "value differs from expectations",
  "code": "failed_json_patch_application",
  "request_id": "bzxgr1gbcq5h67pj"
}
```

この操作の主な目的は、何らかの操作が実行される前に、メタデータインスタンスの値が予想どおりであることを確認することです。Box APIでは、変更がすべて実行されるかまったく実行されないかのいずれかであるため、テストの失敗は、変換が適用される前にすべての値が予想どおりかどうかを確認するのに非常に役立ちます。

[e_on_file]: e://put_files_id_metadata_id_id

[e_on_folder]: e://put_folders_id_metadata_id_id

[jsonpatch]: https://tools.ietf.org/html/rfc6902

[pointer]: https://tools.ietf.org/html/rfc6901
