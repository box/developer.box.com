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
total_steps: 4
sibling_id: api-calls/permissions-and-errors
parent_id: api-calls/permissions-and-errors
next_page_id: api-calls/permissions-and-errors
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/api-calls/permissions-and-errors/common-errors.md
---
<!-- alex disable failed -->

# 一般的なエラー

Box APIでは、[HTTPステータスコード][status-codes]を使用して、リクエストが正常に処理されたかどうかを通知します。

## クライアントエラー

HTTP 4XX形式の大半のクライアントエラーとHTTP 5XX形式の一部のサーバーエラーでは、標準のクライアントエラーJSONオブジェクトが返されます。

```json
{
  "type": "error",
  "status": 400,
  "code": "bad_digest",
  "help_url": "http://developers.box.com/docs/#errors",
  "message": "The specified content-md5 did not match what we received",
  "request_id": "abcdef123456"
}
```

詳細については、[クライアントエラーのリソース](resource://client_error)を参照してください。

## 共通エラーコード

Box APIの使用時に発生した一般的なエラーの解決策については、[開発者向けトラブルシューティングの記事][articles]を確認してください。

### 400 Bad Request

<!-- markdownlint-disable line-length -->

|           |                                                                                                                                                                                                                                  |                                                                            |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **エラー**   | `bad_digest`                                                                                                                                                                                                                     |                                                                            |
| **メッセージ** | The specified `content-md5` did not match what we received (指定の`content-md5`は受信したものと一致しませんでした)                                                                                                                                   |                                                                            |
| **解決策**   | ファイルのアップロード中に、ファイルのSHA-1ハッシュと`content-md5`ヘッダーを指定して、ファイルが転送中に破損していないかどうかを確認できます。リクエストで指定されたSHA-1ハッシュは、アップロードで受信したものと一致していません。アップロードしたファイルの有効なSHA-1ハッシュを指定してください。                                                                 |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `bad_request`                                                                                                                                                                                                                    |                                                                            |
| **メッセージ** |                                                                                                                                                                                                                                  |                                                                            |
| **解決策**   | APIリクエストで指定された必須パラメータが見つからないか無効です。詳細については、応答本文の拡張エラーメッセージを確認してください。                                                                                                                                                              |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `cannot_make_collaborated_subfolder_private`                                                                                                                                                                                     |                                                                            |
| **メッセージ** | Cannot move a collaborated folder to a private folder unless the new owner is explicitly specified (新しい所有者が明示的に指定されない限り、コラボレーションフォルダを非公開フォルダに移動することはできません)                                                                       |                                                                            |
| **解決策**   | リクエストの`owned_by.id`フィールドを設定して、コンテンツの転送先となるユーザーのIDを指定してください。                                                                                                                                                                      |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `collaborations_not_available_on_root_folder`                                                                                                                                                                                    |                                                                            |
| **メッセージ** | Root folder cannot be collaborated (ルートフォルダのコラボレーションができません)                                                                                                                                                                      |                                                                            |
| **解決策**   | ユーザーのルートフォルダ(フォルダID 0)にコラボレータを設定できません。ルートフォルダとは異なるフォルダIDを使用してください。                                                                                                                                                               |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `cyclical_folder_structure`                                                                                                                                                                                                      |                                                                            |
| **メッセージ** | Folder move creates cyclical folder structure (フォルダの移動により循環フォルダ構造が作成されます)                                                                                                                                                        |                                                                            |
| **解決策**   | フォルダの移動で指定したフォルダIDによって、循環フォルダ構造(たとえば、フォルダがそのフォルダ内のサブフォルダに移動される構造)が作成されます。フォルダ移動リクエストで指定するフォルダを変更してください。                                                                                                                          |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `folder_not_empty`                                                                                                                                                                                                               |                                                                            |
| **メッセージ** | Cannot delete – folder not empty (削除できません – フォルダにファイルが存在しません)                                                                                                                                                                    |                                                                            |
| **解決策**   | 削除する前に、フォルダからすべてのコンテンツを削除してください。                                                                                                                                                                                                 |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `invalid_collaboration_item`                                                                                                                                                                                                     |                                                                            |
| **メッセージ** | Item type must be specified and set to 'folder' (項目タイプは指定されていなければならず、「folder」に設定されていることが必要です)                                                                                                                                    |                                                                            |
| **解決策**   | コラボレーション項目の`item.type`フィールドをフォルダに設定してください。                                                                                                                                                                                       |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `invalid_grant`                                                                                                                                                                                                                  |                                                                            |
| **メッセージ** | Verify the authorization code is set correctly in your request, or your application likely needs to get a new authorization code. (リクエストに承認コードが正しく設定されていることを確認してください。そうしないと、アプリケーションで新しい承認コードが必要になる可能性があります。)                    |                                                                            |
| **解決策**   | APIリクエストで指定された承認コードが見つからないか、無効になりました。考えられる解決策として、リクエストにアクセストークンが正しく追加されているかどうかを確認してください。正しく設定されている場合は、アクセストークンが期限切れになっている可能性があります。アクセストークンを更新するか、新しいアクセストークンを取得してください。                                                           |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `invalid_grant`                                                                                                                                                                                                                  |                                                                            |
| **メッセージ** | Current date time must be before the expiration date time listed in the 'exp' claim. (現在の日時は'exp'クレームに記載されている有効期限の日時よりも前である必要があります。)                                                                                             |                                                                            |
| **解決策**   | このエラーは、ローカルマシンとBoxサーバーのUnix時間が同期されていない場合に発生します。このエラーを修正するには、ローカルマシンのUnix時間を、同期対象の時刻サーバーと一致するよう更新し、再度リクエストしてみてください。                                                                                                               |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `invalid_limit`                                                                                                                                                                                                                  |                                                                            |
| **メッセージ** | Limit is not a valid number (制限値が有効な数値ではありません)                                                                                                                                                                                   |                                                                            |
| **解決策**   | 指定された制限値に有効な数値を追加してください。                                                                                                                                                                                                         |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `invalid_offset`                                                                                                                                                                                                                 |                                                                            |
| **メッセージ** | Offset is not a valid number (オフセットが有効な数値ではありません)                                                                                                                                                                                |                                                                            |
| **解決策**   | 指定されたオフセット値に有効な数値を追加してください。                                                                                                                                                                                                      |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `invalid_request_parameters`                                                                                                                                                                                                     |                                                                            |
| **メッセージ** | Invalid input parameters in request (リクエスト内に無効な入力パラメータがあります)                                                                                                                                                                     |                                                                            |
| **解決策**   | APIリクエストで無効なパラメータが送信されました。APIリファレンスドキュメントで、このAPI操作に指定すべき正しいリクエストパラメータを確認してください。                                                                                                                                                  |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `invalid_status`                                                                                                                                                                                                                 |                                                                            |
| **メッセージ** | You can change the status only if the collaboration is pending (ステータスを変更できるのは、コラボレーションが保留中の場合のみです)                                                                                                                               |                                                                            |
| **解決策**   | コラボレーションのステータスは、現在のステータスが保留中に設定されている場合に、`accessible_by`フィールドで指定されたユーザーのみが承認済みまたは拒否済みに更新できます。                                                                                                                                     |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `invalid_upload_session_id`                                                                                                                                                                                                      |                                                                            |
| **メッセージ** | The upload session ID provided in the URL is not of a valid format. (URLに指定されているアップロードセッションIDが有効な形式ではありません。)                                                                                                                     |                                                                            |
| **解決策**   | 分割アップロードAPIリクエストの送信時に指定されたセッションIDが無効です。作成されたセッションと同じセッションIDを使用してください。                                                                                                                                                            |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `item_name_invalid`                                                                                                                                                                                                              |                                                                            |
| **メッセージ** | Item name invalid (項目名が無効です)                                                                                                                                                                                                     |                                                                            |
| **解決策**   | ファイルの名前が有効であることを確認してください。Boxでは、255文字以下のファイル名またはフォルダ名のみがサポートされています。印刷不可能な文字を含むファイル名、`/`、`\`、`<`、`>`、`:`、\`                                                                                                                        | `,`?`,`\*`,`—\`という文字を含む名前、先頭または末尾にスペースを含む名前のほか、「.」と「..」という予約済みの名前も使用できません。 |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `item_name_too_long`                                                                                                                                                                                                             |                                                                            |
| **メッセージ** | Item name too long (項目名が長すぎます)                                                                                                                                                                                                   |                                                                            |
| **解決策**   | 項目に指定されている名前の長さを短くしてください。Boxのファイル名またはフォルダ名に使用できる文字数は255文字以下です。                                                                                                                                                                   |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `metadata_after_file_contents`                                                                                                                                                                                                   |                                                                            |
| **メッセージ** | Metadata is included after file contents in a file upload request. (メタデータは、ファイルアップロードリクエストでファイルのコンテンツの後に含まれています。)                                                                                                                |                                                                            |
| **解決策**   | ファイルのコンテンツの前にファイルのメタデータを含めてください。                                                                                                                                                                                                 |                                                                            |
| **エラー**   | `password_reset_required`                                                                                                                                                                                                        |                                                                            |
| **メッセージ** | User needs to reset password (ユーザーはパスワードをリセットする必要があります)                                                                                                                                                                          |                                                                            |
| **解決策**   | ユーザーは、アカウントの[設定手順](https://community.box.com/t5/How-to-Guides-for-Admins/Adding-New-Users-to-Your-Box-Account/ta-p/175)を完了していません。                                                                                                |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `requested_page_out_of_range`                                                                                                                                                                                                    |                                                                            |
| **メッセージ** | Requested representation page out of range (リクエストされたレプリゼンテーションページが範囲外です)                                                                                                                                                         |                                                                            |
| **解決策**   | 指定された範囲ヘッダーは、指定した項目のサイズに収まりません。項目のサイズに収まるよう範囲を調整し、もう一度やり直してください。                                                                                                                                                                 |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `requested_preview_unavailable`                                                                                                                                                                                                  |                                                                            |
| **メッセージ** | Requested preview unavailable (リクエストされたプレビューは利用できません)                                                                                                                                                                            |                                                                            |
| **解決策**   | ファイルに対してリクエストされたサムネイルサイズが有効ではありません。API操作のリファレンスドキュメントで、利用可能な形式サイズを確認してください。                                                                                                                                                      |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `sync_item_move_failure`                                                                                                                                                                                                         |                                                                            |
| **メッセージ** | Cannot move a synced item (同期した項目を移動できません)                                                                                                                                                                                       |                                                                            |
| **解決策**   | 項目は、Box Syncクライアントによって同期が設定されているため移動できません。項目の`sync_state`を`not_synced`に設定することで、解決できる場合があります。                                                                                                                                     |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `task_assignee_not_allowed`                                                                                                                                                                                                      |                                                                            |
| **メッセージ** | Assigner does not have sufficient privileges to assign task to assignee (任命者には、担当者にタスクを割り当てるのに十分な権限がありません)                                                                                                                       |                                                                            |
| **解決策**   | タスクを割り当てようとしているユーザーに、そのための適切な権限がありません。タスクの割り当てを許可するようユーザー権限を調整してください。                                                                                                                                                            |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `terms_of_service_required`                                                                                                                                                                                                      |                                                                            |
| **メッセージ** | User must accept custom terms of service before action can be taken (ユーザーは操作を実行する前にカスタムの利用規約に同意する必要があります)                                                                                                                        |                                                                            |
| **解決策**   | Boxアカウントの管理者はカスタムの利用規約を設定していますが、ユーザーはまだログインしてこの利用規約に同意していません。続行するには、ユーザーがこの利用規約に同意するか、管理者が同規約を無効にする必要があります。詳細については、[こちら](https://community.box.com/t5/How-to-Guides-for-Admins/Using-Custom-Terms-Of-Service/ta-p/237)で確認してください。 |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |
| **エラー**   | `user_already_collaborator`                                                                                                                                                                                                      |                                                                            |
| **メッセージ** | ユーザーはすでにコラボレータです                                                                                                                                                                                                                 |                                                                            |
| **解決策**   | ある項目のコラボレータに設定しようとしているユーザーは、すでにその項目のコラボレータです。このリクエストは必要ありません。                                                                                                                                                                    |                                                                            |
|           |                                                                                                                                                                                                                                  |                                                                            |

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

|           |                                                                                                                                                                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **エラー**   | `access_denied_insufficient_permissions`                                                                                                                                                                                           |
| **メッセージ** | Access denied – insufficient permission (アクセスが拒否されました – 権限が不足しています)                                                                                                                                                                |
|           | 通常、このエラーは、API操作に必要なスコープが有効になっていない場合に発生します。解決策の情報については、[こちら](https://community.box.com/t5/Developer-Troubleshooting/API-Troubleshooting-403-quot-access-denied-insufficient/ta-p/48536)を参照してください。                                   |
|           |                                                                                                                                                                                                                                    |
| **エラー**   | `access_denied_item_locked`                                                                                                                                                                                                        |
| **メッセージ** | Access denied – item locked (アクセスが拒否されました – 項目がロックされています)                                                                                                                                                                          |
| **解決策**   | ロックされた項目にアクセスしようとしていますが、アクセスするための適切な権限がありません。項目のロックを解除してから、再度アクセスしてみてください。                                                                                                                                                         |
|           |                                                                                                                                                                                                                                    |
| **エラー**   | `access_from_location_blocked`                                                                                                                                                                                                     |
| **メッセージ** |                                                                                                                                                                                                                                    |
| **解決策**   | 管理者によって承認されていない場所からBoxにログインしようとしています。この問題を解決するには、管理者に連絡してください。                                                                                                                                                                     |
|           |                                                                                                                                                                                                                                    |
| **エラー**   | `file_size_limit_exceeded`                                                                                                                                                                                                         |
| **メッセージ** | ファイルサイズがフォルダ所有者のファイルサイズ上限を超えています                                                                                                                                                                                                   |
| **解決策**   | アカウントの種類に基づいたファイルサイズの上限については、[こちら](https://community.box.com/t5/How-to-Guides-for-Managing/Uploading-and-Downloading-Files-and-Folders/ta-p/18905#maxfilesize)を参照してください。                                                           |
|           |                                                                                                                                                                                                                                    |
| **エラー**   | `forbidden`                                                                                                                                                                                                                        |
| **メッセージ** |                                                                                                                                                                                                                                    |
| **解決策**   | クライアントには、このセッションにアップロードするための権限がありません。アップロードできるのは、アップロードセッションを開始したユーザーのみです。                                                                                                                                                         |
|           |                                                                                                                                                                                                                                    |
| **エラー**   | `forbidden_by_policy`                                                                                                                                                                                                              |
| **メッセージ** | Access denied – Blocked by Shield Access Policy (アクセスが拒否されました – Shieldアクセスポリシーによってブロックされています)                                                                                                                                      |
| **解決策**   | 会社に適用されているShieldアクセスポリシーによってこの操作が妨げられています。エンタープライズ管理者に連絡して、適用されているShieldアクセスポリシーを調整してください。                                                                                                                                         |
|           |                                                                                                                                                                                                                                    |
| **エラー**   | `forbidden_by_policy`                                                                                                                                                                                                              |
| **メッセージ** | Access denied – Blocked by Shield Malware Detection Rule (アクセスが拒否されました – Shieldマルウェア検出ルールによってブロックされています)                                                                                                                           |
| **解決策**   | Shieldマルウェア検出ルールを有効化すると、悪意のある可能性のあるコンテンツをダウンロードしたり、ローカルで編集したりできなくなりますが、引き続きプレビューとオンライン編集は可能です。適用されているShieldポリシーを調整するには、会社の管理者にお問い合わせください。                                                                                          |
|           |                                                                                                                                                                                                                                    |
| **エラー**   | `incorrect_shared_item_password`                                                                                                                                                                                                   |
| **メッセージ** |                                                                                                                                                                                                                                    |
| **解決策**   | 共有項目にはパスワードが必要ですが、パスワードが誤っているか指定されていません。                                                                                                                                                                                           |
|           |                                                                                                                                                                                                                                    |
| **エラー**   | `storage_limit_exceeded`                                                                                                                                                                                                           |
| **メッセージ** | アカウントのストレージサイズの上限に達しました                                                                                                                                                                                                            |
| **解決策**   | アカウントのストレージサイズの上限に達しました。続行するには、アカウントを[アップグレード](https://community.box.com/t5/How-to-Guides-for-Billing/Upgrading-to-a-Business-or-Enterprise-Account/ta-p/25)するか、コンテンツを完全に削除してください。単にごみ箱に移動したコンテンツも、完全に削除されるまでアカウントの合計サイズにカウントされます。 |
|           |                                                                                                                                                                                                                                    |
| **エラー**   | `user_email_confirmation_required`                                                                                                                                                                                                 |
| **メッセージ** | User needs to complete email confirmation (ユーザーはメール確認を完了する必要があります)                                                                                                                                                                 |
| **解決策**   | ユーザーは、メール確認の[手順](https://community.box.com/t5/How-to-Guides-for-Admins/Adding-New-Users-to-Your-Box-Account/ta-p/175)をまだ完了していません。                                                                                                  |

<!-- markdownlint-enable line-length -->

### 404 Not Found

<!-- markdownlint-disable line-length -->

|           |                                                   |
| --------- | ------------------------------------------------- |
| **エラー**   | `not_found`                                       |
| **メッセージ** |                                                   |
| **解決策**   | リソースが見つかりませんでした。詳細については、応答本文の拡張エラーメッセージを確認してください。 |
|           |                                                   |
| **エラー**   | `not_trashed`                                     |
| **メッセージ** | Item is not trashed (項目はごみ箱に移動されていません)            |
| **解決策**   | ごみ箱には、完全に削除する項目がありません。最初に、項目をごみ箱に移動してください。        |
|           |                                                   |
| **エラー**   | `preview_cannot_be_generated`                     |
| **メッセージ** | Preview cannot be generated (プレビューを生成できません)       |
| **解決策**   | 指定されたファイルのプレビューのサムネイルを生成できません。                    |
|           |                                                   |
| **エラー**   | `trashed`                                         |
| **メッセージ** | Item is trashed (項目はごみ箱に移動されました)                  |
| **解決策**   | アクセス対象の項目がごみ箱にあり、変更できません。項目をごみ箱から移動してやり直してください。   |

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
| **解決策**   | このエラーは、作成するリソースがすでに存在する場合に発生する可能性があります。詳細については、応答本文の拡張エラーメッセージを確認してください。                                                                                                                                                                      |
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
| **解決策**   | 同じメールのユーザーがすでに存在します。既存ユーザーを参照するか、別のメールアドレスを指定してください。                                                                                                                                                                                          |

<!-- markdownlint-enable line-length -->

### 410 Gone

<!-- markdownlint-disable line-length -->

|           |                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **エラー**   | `session_expired`                                                                                                                                      |
| **メッセージ** |                                                                                                                                                        |
| **解決策**   | 指定されたアップロードセッションIDに関連付けられたアップロードセッションは、有効期限が切れているためアクセスできません。                                                                                          |
|           |                                                                                                                                                        |
| **エラー**   | `upload_failed`                                                                                                                                        |
| **メッセージ** |                                                                                                                                                        |
| **解決策**   | アップロードセッションで回復不能なエラー状態になり、続行できません。このリクエストまたはその他のリクエストのアップロードセッションは、結果として、不適切な状態(パーツ重複など)になりました。この状態の原因として、パーツの上限を超過しているか、重複するパーツがアップロード済みであることが考えられます。 |

<!-- markdownlint-enable line-length -->

### 411 Length Required

<!-- markdownlint-disable line-length -->

|           |                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------- |
| **エラー**   | `length_required`                                                                              |
| **メッセージ** | content-length header was required, but not provided. (content-lengthヘッダーが要求されましたが、指定されていません。) |
| **解決策**   | APIリクエストでContent-Lengthヘッダーを指定してください。                                                          |

<!-- markdownlint-enable line-length -->

### 412 Precondition Failed

<!-- markdownlint-disable line-length -->

|           |                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| **エラー**   | `precondition_failed`                                                                                                   |
| **メッセージ** | The resource has been modified. Please retrieve the resource again and retry (このリソースは変更されています。リソースをもう一度取得してから再試行してください) |
| **解決策**   | 詳細については、応答本文の拡張エラーメッセージを確認してください。                                                                                       |
|           |                                                                                                                         |
| **エラー**   | `sync_state_precondition_failed`                                                                                        |
| **メッセージ** | The resource has been modified. Please retrieve the resource again and retry (このリソースは変更されています。リソースをもう一度取得してから再試行してください) |
| **解決策**   | 詳細については、応答本文の拡張エラーメッセージを確認してください。                                                                                       |

<!-- markdownlint-enable line-length -->

### 413 Request Entity Too Large

<!-- markdownlint-disable line-length -->

|           |                                                               |
| --------- | ------------------------------------------------------------- |
| **エラー**   | `request_entity_too_large`                                    |
| **メッセージ** | Request Entity too Large (リクエストのエンティティが大きすぎます)                |
| **解決策**   | アップロードのサイズが許容された上限を超えると、このエラーが発生します。応答本文の拡張エラーメッセージを確認してください。 |

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

|           |                                                                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **エラー**   | `rate_limit_exceeded`                                                                                                                                             |
| **メッセージ** | Request rate limit exceeded, please try again later (リクエストのレート制限を超えました。後でもう一度やり直してください)                                                                           |
| **解決策**   | クライアントの処理が速すぎて、レート制限を受けました。クライアントでは、`retry-after`ヘッダーで指定された時間が経過してからリクエストをやり直すことが推奨されます。[4つのレート制限](g://api-calls/permissions-and-errors/rate-limits)に注意する必要があります。 |

<!-- markdownlint-enable line-length -->

### 500 Internal Service Error

<!-- markdownlint-disable line-length -->

|           |                                                                                       |
| --------- | ------------------------------------------------------------------------------------- |
| **エラー**   | `internal_server_error`                                                               |
| **メッセージ** | Internal Server Error (内部サーバーエラー)                                                     |
| **解決策**   | クライアントは[指数バックオフ戦略](https://en.wikipedia.org/wiki/Exponential_backoff)を使用してやり直す必要があります |

<!-- markdownlint-enable line-length -->

### 502 Bad Gateway

<!-- markdownlint-disable line-length -->

|           |                                                                                       |
| --------- | ------------------------------------------------------------------------------------- |
| **エラー**   | `bad_gateway`                                                                         |
| **メッセージ** |                                                                                       |
| **解決策**   | クライアントは[指数バックオフ戦略](https://en.wikipedia.org/wiki/Exponential_backoff)を使用してやり直す必要があります |

<!-- markdownlint-enable line-length -->

### 503 Unavailable

<!-- markdownlint-disable line-length -->

|           |                                                               |
| --------- | ------------------------------------------------------------- |
| **エラー**   | `unavailable`                                                 |
| **メッセージ** | 利用できません                                                       |
| **解決策**   | 詳細については、Boxの[APIステータスのページ](https://status.box.com/)を確認してください。 |

<!-- markdownlint-enable line-length -->

[status-codes]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html

[articles]: https://community.box.com/t5/Developer-Troubleshooting/tkb-p/Developertroubleshooting
