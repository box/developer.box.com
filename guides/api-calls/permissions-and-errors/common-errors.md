---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources:
  - client_error
alias_paths:
  - /docs/error-codes
  - /docs/detailed-error-messages
  - /docs
notes: Lazy copy of old docs. Needs rethinking.
category_id: api-calls
subcategory_id: api-calls/permissions-and-errors
is_index: false
id: api-calls/permissions-and-errors/common-errors
type: guide
total_steps: 5
sibling_id: api-calls/permissions-and-errors
parent_id: api-calls/permissions-and-errors
next_page_id: api-calls/permissions-and-errors
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/permissions-and-errors/common-errors.md
fullyTranslated: true
---
# エラー

Box APIでは、[HTTPステータスコード][status-codes]を使用して、リクエストが正常に処理されたかどうかを通知します。

## クライアントエラー

HTTP 4XX形式の大半のクライアントエラーとHTTP 5XX形式の一部のサーバーエラーでは、標準のクライアントエラーJSONオブジェクトが返されます。

```json
{
  "type": "error",
  "status": 400,
  "code": "bad_digest",
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "message": "The specified content-md5 did not match what we received",
  "request_id": "abcdef123456"
}
```

詳細については、[クライアントエラーのリソース](resource://client_error)を参照してください。

## 共通エラーコード

Box APIの使用時に発生した一般的なエラーの解決策については、[開発者向けトラブルシューティングの記事][articles]を確認してください。

### 400 Bad Request

<!-- markdownlint-disable line-length -->

<!-- i18n-enable localize-links -->

|           |                                                                                                                                                                  |   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| **エラー**   | `bad_digest`                                                                                                                                                     |   |
| **メッセージ** | The specified `content-md5` did not match what we received.                                                                                                      |   |
| **解決策**   | ファイルのアップロード中に、ファイルのSHA-1ハッシュと`content-md5`ヘッダーを指定して、ファイルが転送中に破損していないかどうかを確認できます。リクエストで指定されたSHA-1ハッシュは、アップロードで受信したものと一致していません。アップロードしたファイルの有効なSHA-1ハッシュを指定してください。 |   |
|           |                                                                                                                                                                  |   |
| **エラー**   | `bad_request`                                                                                                                                                    |   |
| **メッセージ** |                                                                                                                                                                  |   |
| **解決策**   | APIリクエストで指定された必須パラメータが見つからないか無効です。詳細については、レスポンス本文の拡張エラーメッセージを確認してください。                                                                                           |   |
|           |                                                                                                                                                                  |   |
| **エラー**   | `cannot_make_collaborated_subfolder_private`                                                                                                                     |   |
| **メッセージ** | Cannot move a collaborated folder to a private folder unless the new owner is explicitly specified. (新しい所有者が明示的に指定されない限り、コラボレーションサブフォルダを非公開フォルダに移動することはできません。)   |   |
| **解決策**   | リクエストの`owned_by.id`フィールドを設定して、コンテンツの転送先となるユーザーのIDを指定してください。                                                                                                      |   |

\| \|\|\| \| **Error** \| `collaborations_not_available_on_root_folder` \| \| **Message** | Root folder cannot be collaborated| | **Solution** | You cannot set collaborators on a user's root folder (folder ID 0). Use a different folder ID than the root folder. | | | | | **Error** \| `cyclical_folder_structure` \| \| **Message** | Folder move creates cyclical folder structure | | **Solution** | The folder ID specified in the folder move would create a cyclical folder structure (for example moving a folder to a subfolder within itself). Change the folder ID for the folder move request. | | | | | **Error** \| `folder_not_empty` \| \| **Message** | Cannot delete – folder not empty | | **Solution** | Delete all content from the folder before attempting to delete it. | | | | | **Error** \| `invalid_collaboration_item` \| \| **Message** | Item type must be specified and set to 'folder' | | **Solution** | The `item.type` field of the collaboration item should be set to folder.| | | | | **Error** \| `invalid_grant` \| \| **Message** | Verify the authorization code is set correctly in your request, or your application likely needs to get a new authorization code. | | **Solution** | The authorization code supplied in the API request is missing or no longer valid. Possible solutions are to verify that the access token is added correctly in the request. If correctly set, the access token may have expired. Attempt to refresh the access token or fetch a new one. | | | | | **Error** \| `invalid_grant` \| \| **Message** | Current date time must be before the expiration date time listed in the 'exp' claim. | | **Solution** | This error occurs when the Unix time on your local machine and the Box server are out of sync. To fix this error, update the Unix time on your machine to match a synchronized time server, then try the request again. | | | | | **Error** \| `invalid_limit` \| \| **Message** | Limit is not a valid number | | **Solution** | Add a valid numeric value for the supplied limit value. | | | | | **Error** \| `invalid_offset` \| \| **Message** | Offset is not a valid number | | **Solution** | Add a valid numeric value for the supplied offset value.| | | | | **Error** \| `invalid_request_parameters` \| \| **Message** | Invalid input parameters in request | | **Solution** | Invalid parameters were sent in the API request. Check the API reference documentation for the correct request parameters that should be supplied for the API operation. | | | | | **Error** \| `invalid_status` \| \| **Message** | You can change the status only if the collaboration is pending | | **Solution** | The status of a collaboration can only be updated to accepted or rejected by the user specified in the `accessible_by` field when the current status is set to pending. | | | | | **Error** \| `invalid_upload_session_id` \| \| **Message** | The upload session ID provided in the URL is not of a valid format. | | **Solution** | The session ID supplied when making a chunked upload API request was invalid. Use the same session ID from the session that was created. | | | | | **Error** \| `item_name_invalid` \| \| **Message**| Item name invalid | | **Solution** | Verify that the file's name is valid. Box only supports file or folder names that are 255 characters or less. File names containing non-printable characters, names containing the characters `/`, `\`, `<`, `>`, `:`, `|`, `?`, `*`, `—` , names with leading or trailing spaces, and the special names “.” and “..” are also unsupported. | | | | | **Error** \| `item_name_too_long` \| \| **Message** | Item name too long | | **Solution** | Shorten the length of the name that is being supplied for the item. The maximum length of a file or folder name in Box is 255 characters or less. | | | | | **Error** \| `metadata_after_file_contents` \| \| **Message** | Metadata is included after file contents in a file upload request. | | **Solution** | Include the file metadata before the file's contents. | | **Error** \| `password_reset_required` \| \| **Message** | User needs to reset password | | **Solution** | The user has not yet completed account [setup steps](https://support.box.com/hc/ja/articles/360043694594-ユーザーの追加). | | | | | **Error** \| `requested_page_out_of_range` \| \| **Message** | Requested representation page out of range | | **Solution** | The range header supplied does not fit within the size of the specified item. Adjust the bounds to fit within the size of the item and try again. | | | | | **Error** \| `requested_preview_unavailable` \| \| **Message** | Requested preview unavailable| | **Solution** | The thumbnail size requested for the file is not valid. See the reference docs for the API operation for available format sizes. | | | | | **Error** \| `sync_item_move_failure` \| \| **Message** | Cannot move a synced item | | **Solution** | The item is set to be synced by the Box sync clients and cannot be moved. A possible solution is to set the `sync_state` of the item to `not_synced`. | | | | | **Error** \| `task_assignee_not_allowed` \| \| **Message** | Assigner does not have sufficient privileges to assign task to assignee | | **Solution** | The user who is attempting to assign the task does not have the appropriate permissions to do so. Adjust the user permissions to allow the assignment of tasks. | | | | | **Error** \| `terms_of_service_required` \| \| **Message** | User must accept custom terms of service before action can be taken | | **Solution** | The admin of your Box account has set custom terms of service and the user has not logged in to accept the terms yet. The user will need to accept the terms of service, or the admin will have to disable them, in order to proceed. More information is available [here](https://support.box.com/hc/ja/articles/360044192733-カスタム利用規約の使用). | | | | | **Error**\| `user_already_collaborator` \| \| **Message** | User is already a collaborator | | **Solution** | The user that you are attempting to collaborate in on an item is already collaborated on that item. This request is not | | | |

<!-- i18n-disable localize-links -->

<!-- markdownlint-enable line-length -->

### 401 Unauthorized

<!-- markdownlint-disable line-length -->

|           |                                                  |
| --------- | ------------------------------------------------ |
| **エラー**   | `unauthorized`                                   |
| **メッセージ** | 許可なし                                             |
| **解決策**   | 承認トークンは承認されていません。詳細については、本文の拡張エラーメッセージを確認してください。 |

<!-- markdownlint-enable line-length -->

### 403 Forbidden

<!-- markdownlint-disable line-length -->

<!-- i18n-enable localize-links -->

|           |                                                                                                                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **エラー**   | `access_denied_insufficient_permissions`                                                                                                                                                                    |
| **メッセージ** | Access denied – insufficient permission (アクセスが拒否されました – 権限が不足しています)                                                                                                                                         |
| **解決策**   | アクセストークンに適切なユーザー権限またはスコープが設定されていません。解決策の情報については、[こちら](https://support.box.com/hc/ja/articles/360043693434-API-Content-API-403-access-denied-insufficient-permissions-アクセスが拒否されました-権限が不足しています-エラー)を参照してください。 |
|           |                                                                                                                                                                                                             |
| **エラー**   | `insufficient_scope`                                                                                                                                                                                        |
| **メッセージ** | The request requires higher privileges than provided by the access token. (リクエストには、アクセストークンによって提供される権限よりも高い権限が必要です。)                                                                                        |
| **解決策**   | 通常、このエラーは、API操作に必要なスコープが有効になっていない場合に発生します。構成済みのアプリケーションスコープを確認し、該当する場合はアプリケーションを再承認してください。                                                                                                                  |
| **エラー**   | `access_denied_item_locked`                                                                                                                                                                                 |
| **メッセージ** | Access denied – item locked (アクセスが拒否されました – 項目がロックされています)                                                                                                                                                   |
| **解決策**   | ロックされた項目にアクセスしようとしていますが、アクセスするための適切な権限がありません。項目のロックを解除してから、再度アクセスしてみてください。                                                                                                                                  |
|           |                                                                                                                                                                                                             |
| **エラー**   | `access_from_location_blocked`                                                                                                                                                                              |
| **メッセージ** |                                                                                                                                                                                                             |
| **解決策**   | 管理者によって承認されていない場所からBoxにログインしようとしています。この問題を解決するには、管理者にお問い合わせください。                                                                                                                                            |
|           |                                                                                                                                                                                                             |
| **エラー**   | `file_size_limit_exceeded`                                                                                                                                                                                  |
| **メッセージ** | ファイルサイズがフォルダ所有者のファイルサイズ上限を超えています                                                                                                                                                                            |
| **解決策**   | アカウントの種類に基づいたファイルサイズの上限については、[こちら](https://support.box.com/hc/ja/articles/360043697314-Boxにアップロードできる最大ファイルサイズ)を参照してください。                                                                                    |
|           |                                                                                                                                                                                                             |
| **エラー**   | `forbidden`                                                                                                                                                                                                 |
| **メッセージ** |                                                                                                                                                                                                             |
| **解決策**   | クライアントには、このセッションにアップロードするための権限がありません。アップロードできるのは、アップロードセッションを開始したユーザーのみです。                                                                                                                                  |
|           |                                                                                                                                                                                                             |
| **エラー**   | `forbidden_by_policy`                                                                                                                                                                                       |
| **メッセージ** | Access denied – Blocked by Shield Access Policy (アクセスが拒否されました – Shieldアクセスポリシーによってブロックされています)                                                                                                               |
| **解決策**   | 会社に適用されているShieldアクセスポリシーによってこの操作が妨げられています。Enterprise管理者に連絡して、適用されているShieldアクセスポリシーを調整してください。                                                                                                                |
|           |                                                                                                                                                                                                             |
| **エラー**   | `forbidden_by_policy`                                                                                                                                                                                       |
| **メッセージ** | Access denied – Blocked by Shield Malware Detection Rule (アクセスが拒否されました – Shieldマルウェア検出ルールによってブロックされています)                                                                                                    |
| **解決策**   | Shieldマルウェア検出ルールを有効化すると、悪意のある可能性のあるコンテンツをダウンロードしたり、ローカルで編集したりできなくなりますが、引き続きプレビューとオンライン編集は可能です。適用されているShieldポリシーを調整するには、会社の管理者にお問い合わせください。                                                                   |
|           |                                                                                                                                                                                                             |
| **エラー**   | `incorrect_shared_item_password`                                                                                                                                                                            |
| **メッセージ** |                                                                                                                                                                                                             |
| **解決策**   | 共有項目にはパスワードが必要ですが、パスワードが誤っているか指定されていません。                                                                                                                                                                    |
|           |                                                                                                                                                                                                             |
| **エラー**   | `storage_limit_exceeded`                                                                                                                                                                                    |
| **メッセージ** | アカウントのストレージサイズの上限に達しました                                                                                                                                                                                     |
| **解決策**   | アカウントのストレージサイズの上限に達しました。続行するには、アカウントを[アップグレード](https://support.box.com/hc/en-us/articles/360043692774-Upgrading-your-Box-Account)するか、コンテンツを完全に削除してください。単にごみ箱に移動したコンテンツも、完全に削除されるまでアカウントの合計サイズにカウントされます。     |
|           |                                                                                                                                                                                                             |
| **エラー**   | `user_email_confirmation_required`                                                                                                                                                                          |
| **メッセージ** | User needs to complete email confirmation (ユーザーはメール確認を完了する必要があります)                                                                                                                                          |
| **解決策**   | ユーザーは、メール確認の[手順](https://support.box.com/hc/ja/articles/360043694594-ユーザーの追加)をまだ完了していません。                                                                                                                   |
|           |                                                                                                                                                                                                             |
| **エラー**   | `cors_origin_not_whitelisted`                                                                                                                                                                               |
| **メッセージ** | Access denied - Did you forget to safelist your origin in the CORS configuration of your app? (アクセスが拒否されました – アプリのCORS構成のオリジンをセーフリストに追加し忘れていませんか。)                                                          |
| **解決策**   | アプリケーションはウェブサイトからBox APIにアクセスしようとしました。このアプリケーションでは、サイトがホストされているドメインに対して[クロスオリジンリソース共有を明示的に許可する](g://security/cors/#enabling-cors-for-your-domain)必要があります。                                                   |

<!-- i18n-disable localize-links -->

<!-- markdownlint-enable line-length -->

### 404 Not Found

<!-- markdownlint-disable line-length -->

|           |                                                      |
| --------- | ---------------------------------------------------- |
| **エラー**   | `not_found`                                          |
| **メッセージ** |                                                      |
| **解決策**   | リソースが見つかりませんでした。詳細については、レスポンス本文の拡張エラーメッセージを確認してください。 |
|           |                                                      |
| **エラー**   | `not_trashed`                                        |
| **メッセージ** | Item is not trashed (項目はごみ箱に移動されていません)               |
| **解決策**   | ごみ箱には、完全に削除する項目がありません。最初に、項目をごみ箱に移動してください。           |
|           |                                                      |
| **エラー**   | `preview_cannot_be_generated`                        |
| **メッセージ** | Preview cannot be generated (プレビューを生成できません)          |
| **解決策**   | 指定されたファイルのプレビューのサムネイルを生成できません。                       |
|           |                                                      |
| **エラー**   | `trashed`                                            |
| **メッセージ** | Item is trashed (項目はごみ箱に移動されました)                     |
| **解決策**   | アクセス対象の項目がごみ箱にあり、変更できません。項目をごみ箱から移動してやり直してください。      |

<!-- markdownlint-enable line-length -->

### 405 Method Not Allowed

<!-- markdownlint-disable line-length -->

|           |                                                                          |
| --------- | ------------------------------------------------------------------------ |
| **エラー**   | `method_not_allowed`                                                     |
| **メッセージ** | Method Not Allowed (メソッドが許可されていません)                                      |
| **解決策**   | API操作に使用されるHTTPメソッドは許可されていません。APIリファレンスドキュメントで、API操作に必要なHTTP動詞を確認してください。 |

<!-- markdownlint-enable line-length -->

### 409 Conflict

<!-- markdownlint-disable line-length -->

|           |                                                                                                                                                                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **エラー**   | `conflict`                                                                                                                                                                                                                                    |
| **メッセージ** | A resource with this value already exists (この値のリソースはすでに存在します)                                                                                                                                                                                 |
| **解決策**   | このエラーは、作成するリソースがすでに存在する場合に発生する可能性があります。詳細については、レスポンス本文の拡張エラーメッセージを確認してください。                                                                                                                                                                   |
|           |                                                                                                                                                                                                                                               |
| **エラー**   | `item_name_in_use`                                                                                                                                                                                                                            |
| **メッセージ** | Item with the same name already exists (同じ名前の項目はすでに存在します)                                                                                                                                                                                     |
| **解決策**   | このエラーは、同じ名前のリソースがすでに存在している場合に発生する可能性があります。追加/変更するリソース名には一意の名前を指定してください。                                                                                                                                                                       |
|           |                                                                                                                                                                                                                                               |
| **エラー**   | `name_temporarily_reserved`                                                                                                                                                                                                                   |
| **メッセージ** | The item name is reserved by another processing item. Wait and then retry the request, or wait and check the parent folder to see if the name is in use. (項目名は別の処理項目によって予約されています。しばらく待ってからリクエストを再試行するか、しばらく待ってから名前が使用中であるかどうか親フォルダを確認してください。) |
| **解決策**   | 重複する2つのリクエストが同時に送信されました。Boxは最初のリクエストを確認して名前を予約しますが、最初のリクエストの処理が完了する前に2つ目の重複するリクエストを受信しています。最初のリクエストが完了してから2番目のリクエストを送信してください。                                                                                                                 |
|           |                                                                                                                                                                                                                                               |
| **エラー**   | `operation_blocked_temporary`                                                                                                                                                                                                                 |
| **メッセージ** | The operation is blocked by another ongoing operation (他の進行中の操作によって操作がブロックされました)                                                                                                                                                              |
| **解決策**   | このエラーは、移動やコピーなど、他のフォルダ操作によってブロックされたフォルダにアクセスしようとしたときに返されます。後でもう一度やり直してください。                                                                                                                                                                   |
|           |                                                                                                                                                                                                                                               |
| **エラー**   | `recent_similar_comment`                                                                                                                                                                                                                      |
| **メッセージ** | A similar comment has been made recently (同様のコメントが最近作成されました)                                                                                                                                                                                  |
| **解決策**   | 同様のコメントが最近作成されており、重複する可能性があるためAPIがフラグを設定しています。コメントが実際に作成済みか確認するか、コメントの内容を変更してやり直してください。                                                                                                                                                       |
|           |                                                                                                                                                                                                                                               |
| **エラー**   | `user_login_already_used`                                                                                                                                                                                                                     |
| **メッセージ** | User with the specified login already exists (指定のログインを持つユーザーがすでに存在します)                                                                                                                                                                        |
| **解決策**   | 同じメールアドレスのユーザーがすでに存在します。既存ユーザーを参照するか、別のメールアドレスを指定してください。                                                                                                                                                                                      |

<!-- markdownlint-enable line-length -->

### 410 Gone

<!-- markdownlint-disable line-length -->

|           |                                                                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **エラー**   | `session_expired`                                                                                                                                     |
| **メッセージ** |                                                                                                                                                       |
| **解決策**   | 指定されたアップロードセッションIDに関連付けられたアップロードセッションは、有効期限が切れているためアクセスできません。                                                                                         |
|           |                                                                                                                                                       |
| **エラー**   | `upload_failed`                                                                                                                                       |
| **メッセージ** |                                                                                                                                                       |
| **解決策**   | アップロードセッションで回復不能な状態になり、続行できません。このリクエストまたはその他のリクエストのアップロードセッションは、結果として、不適切な状態 (パーツ重複など) になりました。この状態の原因として、パーツの上限を超過しているか、重複するパーツがアップロード済みであることが考えられます。 |

<!-- markdownlint-enable line-length -->

### 411 Length Required

<!-- markdownlint-disable line-length -->

|           |                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------- |
| **エラー**   | `length_required`                                                                              |
| **メッセージ** | content-length header was required, but not provided. (content-lengthヘッダーが要求されましたが、指定されていません。) |
| **解決策**   | APIリクエストでContent-Lengthヘッダーを指定してください。                                                          |

<!-- markdownlint-enable line-length -->

<!--alex ignore failed-->

### 412 Precondition Failed

<!-- markdownlint-disable line-length -->

|           |                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| **エラー**   | `precondition_failed`                                                                                                   |
| **メッセージ** | The resource has been modified. Please retrieve the resource again and retry (このリソースは変更されています。リソースをもう一度取得してから再試行してください) |
| **解決策**   | 詳細については、レスポンス本文の拡張エラーメッセージを確認してください。                                                                                    |
|           |                                                                                                                         |
| **エラー**   | `sync_state_precondition_failed`                                                                                        |
| **メッセージ** | The resource has been modified. Please retrieve the resource again and retry (このリソースは変更されています。リソースをもう一度取得してから再試行してください) |
| **解決策**   | 詳細については、レスポンス本文の拡張エラーメッセージを確認してください。                                                                                    |

<!-- markdownlint-enable line-length -->

### 413 Request Entity Too Large

<!-- markdownlint-disable line-length -->

|           |                                                                  |
| --------- | ---------------------------------------------------------------- |
| **エラー**   | `request_entity_too_large`                                       |
| **メッセージ** | Request Entity too Large (リクエストのエンティティが大きすぎます)                   |
| **解決策**   | アップロードのサイズが許容された上限を超えると、このエラーが発生します。レスポンス本文の拡張エラーメッセージを確認してください。 |

<!-- markdownlint-enable line-length -->

### 415 Unsupported Media Type

<!-- markdownlint-disable line-length -->

|           |                                                                                        |
| --------- | -------------------------------------------------------------------------------------- |
| **エラー**   | `unsupported_media_type`                                                               |
| **メッセージ** | Previews for `boxnote` files are not yet supported. (`boxnote`ファイルのプレビューはサポートされていません。) |
| **解決策**   | このエラーは、Box Noteの埋め込みプレビューをリクエストしたときに発生します。現時点では、埋め込みプレビューがBox Notesでサポートされていません。       |

<!-- markdownlint-enable line-length -->

### 429 Too Many requests

<!-- markdownlint-disable line-length -->

\| \| \| \| ---- \| \| \| **Error** \| `rate_limit_exceeded` \| \| **Message** | Request rate limit exceeded, please try again later | | **Solution** | The client is performing operations too quickly and has been rate limited. Client is advised to retry their request after the amount of time specified by the `retry-after` header. There are [four rate limits](g://api-calls/permissions-and-errors/rate-limits) to be aware of. |

<!-- markdownlint-enable line-length -->

### 500 Internal Service Error

<!-- markdownlint-disable line-length -->

<!-- i18n-enable localize-links -->

|           |                                                                                       |
| --------- | ------------------------------------------------------------------------------------- |
| **エラー**   | `internal_server_error`                                                               |
| **メッセージ** | Internal Server Error (内部サーバーエラー)                                                     |
| **解決策**   | クライアントは[指数バックオフ戦略](https://en.wikipedia.org/wiki/Exponential_backoff)を使用してやり直す必要があります |

<!-- i18n-disable localize-links -->

<!-- markdownlint-enable line-length -->

### 502 Bad Gateway

<!-- markdownlint-disable line-length -->

<!-- i18n-enable localize-links -->

|           |                                                                                       |
| --------- | ------------------------------------------------------------------------------------- |
| **エラー**   | `bad_gateway`                                                                         |
| **メッセージ** |                                                                                       |
| **解決策**   | クライアントは[指数バックオフ戦略](https://en.wikipedia.org/wiki/Exponential_backoff)を使用してやり直す必要があります |

<!-- i18n-disable localize-links -->

<!-- markdownlint-enable line-length -->

### 503 Unavailable

<!-- markdownlint-disable line-length -->

<!-- i18n-enable localize-links -->

|           |                                                                                                                                                                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **エラー**   | `unavailable`                                                                                                                                                                                                                                |
| **メッセージ** | 利用できません                                                                                                                                                                                                                                      |
| **解決策**   | Retry-Afterヘッダーがレスポンスで返された場合、クライアントは、そのヘッダーの値に従ってリクエストを再試行する必要があります。稀に、クライアントが503のレスポンスを受け取った後も、書き込み操作が最終的にその変更を保持する可能性があるため、クライアントは、再試行時にこのケースを処理する必要があります。問題が引き続き発生する場合は、Boxの[Statusサイト](https://status.box.com/)で、機能停止に関する既知の情報を確認してください。 |

<!-- i18n-disable localize-links -->

<!-- markdownlint-enable line-length -->

<!-- i18n-enable localize-links -->

[status-codes]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html

[articles]: https://support.box.com/hc/ja/sections/360007552913-Box-Platformに関するトラブルシューティング

<!-- i18n-disable localize-links -->
