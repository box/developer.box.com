---
rank: 1
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/salesforce-toolkit
is_index: false
id: tooling/salesforce-toolkit/methods
type: guide
total_steps: 2
sibling_id: tooling/salesforce-toolkit
parent_id: tooling/salesforce-toolkit
next_page_id: tooling/salesforce-toolkit/samples
previous_page_id: tooling/salesforce-toolkit
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/salesforce-toolkit/methods.md
---
<!-- alex disable failed -->

# メソッドと操作

## ツールキットの詳細

クラス名: `box.Toolkit`

## インスタンス変数

### `mostRecentError`

インスタンスメソッドの呼び出し時に発生した最新のエラーを示す文字列。

この文字列が存在しても、操作が失敗したことを意味するわけではありません。そのエラーが回復可能であった可能性もあります。ただし、この文字列に値がない場合は、操作が成功したことを示しています。

### `Enum CollaborationType`

[コラボレーションのタイプ][collab-type]を示す列挙型。

可能性のある値: `EDITOR`、`VIEWER`、`PREVIEWER`、`UPLOADER`、`COOWNER`、`OWNER`、`PREVIEWERUPLOADER`、`VIEWERUPLOADER`

## 静的メソッド

### `deleteServiceUserAssociation`

サービスアカウントとBox for Salesforce統合の関連付けをクリアするメソッド。間違ったサービスアカウントが使用されている場合、このメソッドを使用してアカウントを変更できます。

パラメータ:

* なし

戻り値:

* ユーザーのアカウントが存在していたが削除された場合は`true`。
* ユーザーのアカウントが何らかの理由(存在しなかった場合を含む)で削除されなかった場合は`false`。

### `deleteUserAssociation`

<!-- markdownlint-disable line-length -->

| パラメータ    | 型   | 説明                  |
| -------- | --- | ------------------- |
| `userId` | id  | 資格情報がクリアされるユーザーのID。 |

<!-- markdownlint-enable line-length -->

戻り値:

* ユーザーのアカウントが存在していたが削除された場合は`true`。
* ユーザーのアカウントが何らかの理由(存在しなかった場合を含む)で削除されなかった場合は`false`。

## インスタンスメソッド(コンストラクタ/デストラクタ)

### `box.Toolkit()`

パラメータ:

* なし

### `commitChanges`

このメソッドは`box.Toolkit()`メソッドのデストラクタとして扱います。

<Message type="warning">

このメソッドは重要です。すべてのフォルダ/コラボレーション操作が完了した後、毎回、例外なくこのメソッドを呼び出す必要があります。

</Message>

Salesforceではデータベースの更新/挿入/削除の後の呼び出しは許可されないため、Toolkitクラスではすべての呼び出し操作が完了した後で挿入するオブジェクトのコレクションが保持されます。このメソッドを呼び出さない場合、このようなオブジェクトがデータベースから消去され、ユーザー/レコード/フォルダの関連付けを追跡するテーブルの同期も失われて、高度なデバッグによる修正が必要になります。

パラメータ:

* なし

戻り値:

* `Void`

## ジェネリックメソッド

Box for Salesforce Developer Toolkitは、パラメータとして[HttpRequest][sf-httprequest]オブジェクトを受け取り、[HttpResponse][sf-httpresponse]オブジェクトを返すグローバルメソッドを提供します。このメソッドではサービスアカウントの認証の詳細情報を利用してBoxのAPIを呼び出すため、開発者は統合のビジネスロジックに集中して取り組むことができます。

### `sendRequest`

<!-- markdownlint-disable line-length -->

| パラメータ     | 型                             | 説明                                   |
| --------- | ----------------------------- | ------------------------------------ |
| `request` | [HttpRequest][sf-httprequest] | エンドポイントとメソッドが設定されたHttpRequestオブジェクト。 |

<!-- markdownlint-enable line-length -->

戻り値:

* BoxのAPI呼び出しからの応答の詳細情報が含まれた[HttpResponse][sf-httpresponse]オブジェクト。
* HttpRequestのインプットの情報が不足している場合は`Toolkit.BoxApiException`。
* サービスアカウントの認証の詳細情報を取得する際に問題が発生した場合は`null`。この場合は、`mostRecentError`を確認してください。

## ファイル操作

### `createFileFromAttachment`

<Message type="notice">

バージョン3.46以降で使用可能です。

Salesforceの文字列長の上限は600万文字です。base64エンコード/デコードプロセスでは文字列が膨張するため、有効なファイルサイズの上限は4.3MBとなっています。

</Message>

<!-- markdownlint-disable line-length -->

| パラメータ              | 型            | 説明                                                                                                                           |
| ------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `att`              | `Attachment` | Box内のファイルに変換される添付ファイル。                                                                                                       |
| `fileNameOverride` | `string`     | 省略可 - 新しいファイルの名前。値が渡されなかった場合、添付ファイルの名前が使用されます。                                                                               |
| `folderIdOverride` | `string`     | 省略可 - この添付ファイルの配置先であるBoxフォルダID。値が渡されなかった場合、ファイルは添付ファイルの`parentId`に当たるレコードに関連付けられているフォルダに配置されます。レコード固有のフォルダが存在していない場合は作成されます。 |
| `accessToken`      | `string`     | 省略可 - `accessToken`が送信された場合は、Box API呼び出しにその値が使用されます。そうでない場合は、デフォルトアカウントの資格情報が使用されます。                                         |

<!-- markdownlint-enable line-length -->

戻り値:

* `string`。作成されたBoxファイルのIDが返されます。
* エラーが発生した場合は`null`。この場合には、`mostRecentError`を確認してください。

### `getObjectFolderByRecordId`

<!-- markdownlint-disable line-length -->

| パラメータ      | 型    | 説明                                    |
| ---------- | ---- | ------------------------------------- |
| `recordId` | `id` | ルートフォルダIDを取得する必要があるSalesforceレコードのID。 |

<!-- markdownlint-enable line-length -->

戻り値:

* `string`。レコードIDが渡されたオブジェクトルートフォルダのBoxフォルダIDが返されます。

## フォルダ操作

### `getRootFolderId`

パラメータ:

* なし

戻り値:

* `string`。SalesforceルートフォルダのBoxフォルダIDが返されます。

### `getObjectFolderByRecordId`

<!-- markdownlint-disable line-length -->

| パラメータ      | 型    | 説明                                    |
| ---------- | ---- | ------------------------------------- |
| `recordId` | `id` | ルートフォルダIDを取得する必要があるSalesforceレコードのID。 |

<!-- markdownlint-enable line-length -->

戻り値:

* `string`。レコードIDが渡されたオブジェクトルートフォルダのBoxフォルダIDが返されます。

### `getFolderUrl`

* このメソッドは、特定のレコードの埋め込みウィジェットURLを取得します。このため、必要に応じて独自の埋め込みロジックを使用できます。
* このメソッドではシームレスなログインの設定が優先されます。このため、シームレスなログインが有効になっている場合、ユーザーはURLに自動的にログインされます。

<!-- markdownlint-disable line-length -->

| パラメータ             | 型         | 説明                                    |
| ----------------- | --------- | ------------------------------------- |
| `recordId`        | `id`      | ルートフォルダIDを取得する必要があるSalesforceレコードのID。 |
| `isMobileContext` | `boolean` | URLがモバイル(true)か、それ以外(false)かを示すブール値。  |

<!-- markdownlint-enable line-length -->

戻り値:

* `string`。渡されたSalesforceレコードIDに関連付けられているフォルダを表すURLが返されます。このURLをBox埋め込みウィジェットで使用して、任意のVisualforceページに埋め込むことができます。

### `createObjectFolderForRecordId`

<!-- markdownlint-disable line-length -->

| パラメータ      | 型    | 説明                                    |
| ---------- | ---- | ------------------------------------- |
| `recordId` | `id` | ルートフォルダIDを取得する必要があるSalesforceレコードのID。 |

<!-- markdownlint-enable line-length -->

戻り値:

* `string`。作成されたルートフォルダのBoxフォルダIDが返されます。
* ルートフォルダがすでに存在していた場合、そのルートフォルダのBoxフォルダIDが返されます。

### `createFolder`

<!-- markdownlint-disable line-length -->

| パラメータ            | 型        | 説明                                                                                        |
| ---------------- | -------- | ----------------------------------------------------------------------------------------- |
| `folderName`     | `string` | 作成するフォルダの名前。フォルダ名には制限があります。詳細は[こちら](endpoint://post_folders)を参照してください。                    |
| `parentFolderId` | `string` | このフォルダが作成される親Boxフォルダ。                                                                     |
| `accessToken`    | `string` | 省略可 - `accessToken`が送信された場合は、Box API呼び出しにその値が使用されます。そうでない場合は、デフォルトのサービスアカウントの資格情報が使用されます。 |

<!-- markdownlint-enable line-length -->

戻り値:

* `string`。作成されたフォルダのBoxフォルダIDが返されます。
* フォルダが作成されなかった場合は`null`が返されます。この場合、`mostRecentError`で詳細を確認してください。

### `createFolderForRecordId`

<!-- markdownlint-disable line-length -->

| パラメータ                 | 型         | 説明                                                                                |
| --------------------- | --------- | --------------------------------------------------------------------------------- |
| `recordId`            | `id`      | Boxフォルダの作成に使用されるSalesforceレコードID。                                                 |
| `folderNameOverride`  | `string`  | デフォルトでは、レコード名がフォルダ名になります。別の名前を付ける場合は、ここでその値を送信します。                                |
| `optCreateRootFolder` | `boolean` | オブジェクトのルートフォルダが存在しない場合に、それを作成するかどうかを示すブール値。falseを送信した場合、ルートフォルダが存在しないと呼び出しは失敗します。 |

<!-- markdownlint-enable line-length -->

戻り値:

* `string`。作成されたフォルダのBoxフォルダIDが返されます。
* フォルダが作成されなかった場合は`null`が返されます。この場合、`mostRecentError`で詳細を確認してください。
* SalesforceレコードがすでにBoxフォルダに関連付けられている場合、既存のBoxフォルダIDが返されます。

### `moveFolder`

<!-- markdownlint-disable line-length -->

| パラメータ               | 型        | 説明                                                                                   |
| ------------------- | -------- | ------------------------------------------------------------------------------------ |
| `folderId`          | `string` | 移動するフォルダのBoxフォルダID。                                                                  |
| `newParentFolderId` | `string` | 新しい親フォルダになるフォルダのBoxフォルダID。                                                           |
| `accessToken`       | `string` | 省略可 - `accessToken`を送信すると、その値がBox API呼び出しに使用されます。そうでない場合、デフォルトのサービスアカウント資格情報が使用されます。 |

<!-- markdownlint-enable line-length -->

戻り値:

* フォルダが正常に移動された場合は`true`。
* フォルダが正常に移動されなかった場合は`false`。`mostRecentError`で詳細を確認してください。

## フォルダ関連付けメソッド

### `getFolderAssociationsByRecordId`

<!-- markdownlint-disable line-length -->

| パラメータ      | 型    | 説明                                         |
| ---------- | ---- | ------------------------------------------ |
| `recordId` | `id` | 返されるフォルダマッピングエントリが関連付けられるSalesforceレコードID。 |

<!-- markdownlint-enable line-length -->

戻り値:

* 返されるリストは、このレコードに関連付けられているすべてのフォルダマッピングエントリのコレクションです。
* 一般に、フォルダマッピングエントリが存在しない場合は空のリストになりますが、状況によって`null`になる場合があります。

### `getFolderIdByRecordId`

<!-- markdownlint-disable line-length -->

| パラメータ      | 型    | 説明                           |
| ---------- | ---- | ---------------------------- |
| `recordId` | `id` | フォルダIDを取得するSalesforceレコードID。 |

<!-- markdownlint-enable line-length -->

戻り値:

* `string`。渡されたSalesforceレコードIDに関連付けられたBoxフォルダIDが返されます。

### `getRecordIdByFolderId`

<!-- markdownlint-disable line-length -->

| パラメータ      | 型        | 説明         |
| ---------- | -------- | ---------- |
| `folderId` | `string` | BoxフォルダID。 |

<!-- markdownlint-enable line-length -->

戻り値:

* `id`。渡されたBoxフォルダIDに関連付けられたSalesforceレコードIDが返されます。

### `createFolderAssociation`

<!-- markdownlint-disable line-length -->

| パラメータ      | 型        | 説明                             |
| ---------- | -------- | ------------------------------ |
| `recordId` | `id`     | Boxフォルダに関連付けるSalesforceレコードID。 |
| `folderId` | `string` | Salesforceレコードに関連付けるBoxフォルダID。 |

<!-- markdownlint-enable line-length -->

戻り値:

* `box__FRUP__c`オブジェクト - エラーが発生した場合(`mostRecentError`を確認)、返されるFRUPオブジェクトは`null`になります。このFRUPエントリは、`commitChanges`メソッドの呼び出し時にデータベースに挿入されます。このメソッドでは、同じフォルダの複数レコードへの関連付けやその逆の関連付けが許可されないため、他のフォルダの関連付けとの一貫性が保証されます。

## コラボレーションメソッド

<Message type="warning">

Box for Salesforce Developer Toolkitによって作成されたコラボレーションは、コラボレータにコラボレーションメールを送信しません。Box for Salesforce統合に使用されるサービスアカウントのみがコラボレーションメールを受け取ります。

</Message>

### `createCollaboration`

<!-- markdownlint-disable line-length -->

| パラメータ          | 型                               | 説明                                                                      |
| -------------- | ------------------------------- | ----------------------------------------------------------------------- |
| `folderId`     | `string`                        | コラボレーションを作成するBoxフォルダのID。                                                |
| `boxUserId`    | `string`                        | コラボレーションするBoxユーザーのID (`boxUserId`または`emailAddress`のどちらか一方のみ必要)。         |
| `emailAddress` | `box.Toolkit.CollaborationType` | Boxユーザーのメールアドレス。                                                        |
| `collabType`   | `string`                        | コラボレーションのタイプ (`CollaborationType`列挙型の定義を参照)。                            |
| `accessToken`  | `string`                        | 省略可 - 送信した場合、この値はBox API呼び出しの認証に使用されます。`null`の場合、サービスアカウントの資格情報が使用されます。 |

<!-- markdownlint-enable line-length -->

戻り値:

* `string`。作成されたBoxコラボレーションのIDが返されます。
* エラーが発生した場合は`null`が返されます。その場合、`mostRecentError`を確認してください。

### `createCollaborationOnRecord`

<!-- markdownlint-disable line-length -->

| パラメータ             | 型                               | 説明                                                                                                                                    |
| ----------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`          | `id`                            | コラボレーションするSalesforceユーザーID。                                                                                                           |
| `recordId`        | `id`                            | コラボレーションするレコードフォルダのSalesforceレコードID。                                                                                                  |
| `collabType`      | `box.Toolkit.CollaborationType` | コラボレーションのタイプ (`CollaborationType`列挙型の定義を参照)。                                                                                          |
| `optCreateFolder` | `boolean`                       | SalesforceレコードIDに関連付けられたBoxフォルダがまだ存在しない場合に、それを作成するかどうかを示すブール値。ルートフォルダが存在しない場合は、ルートフォルダも作成されます。`false`に設定した場合、フォルダがまだ存在しないと呼び出しが失敗します。 |

<!-- markdownlint-enable line-length -->

戻り値:

* `string`。作成されたBoxコラボレーションのIDが返されます。
* エラーが発生した場合は`null`が返されます。その場合、`mostRecentError`を確認してください。

[collab-type]: https://community.box.com/t5/Collaborate-By-Inviting-Others/Understanding-Collaborator-Permission-Levels/ta-p/144

[sf-httprequest]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httprequest.htm

[sf-httpresponse]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse
