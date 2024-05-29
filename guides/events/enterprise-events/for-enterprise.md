---
rank: 2
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/user-events/for-user
  - events/user-events/polling
  - events/parameters/pagination
required_guides: []
alias_paths:
  - /guides/events/for-enterprise
  - /guides/events/for-enterprise/
category_id: events
subcategory_id: events/enterprise-events
is_index: false
id: events/enterprise-events/for-enterprise
type: guide
total_steps: 2
sibling_id: events/enterprise-events
parent_id: events/enterprise-events
next_page_id: events/enterprise-events/migrate-to-stream
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/enterprise-events/for-enterprise.md
fullyTranslated: true
---
# Enterprise Eventの取得

Enterprise Eventを取得するには、`stream_type`を`admin_logs`または`admin_logs_streaming`に設定して[`GET /events`](e://get_events) APIを呼び出します。

<Message>

このAPIを使用するには、ユーザーは**新規レポートの実行および既存レポートへのアクセスを行う**のための権限を持つ、会社の管理者または共同管理者である必要があります。

</Message>

<Samples id="get_events" variant="enterprise_stream">

</Samples>

## ストリームタイプ

| ストリームタイプ               |                                   |
| ---------------------- | --------------------------------- |
| `admin_logs`           | イベントの履歴を最大1年分照会できるようにします          |
| `admin_logs_streaming` | ほぼリアルタイムでライブイベントにサブスクライブできるようにします |

## ライブで監視

Box内で生成された最近のイベントをEnterprise全体で監視するには、`stream_type`を`admin_logs_streaming`に設定します。これは、Enterprise Event Stream APIとも呼ばれます。

このフィードでは、時系列の正確さよりもレイテンシの低さを重視しています。つまり、Boxでは、イベントが複数回、時系列に関係なく返される場合があります。イベントは、Boxで処理されるとほぼリアルタイムでAPIを介して返されます。少しの遅延やバッファーが発生すると、新しいイベントがカーソル位置の後に書き込まれなくなります。この`stream_type`で取得できるイベントは、2週間分だけです。

## 履歴の照会

Enterprise全体のイベント履歴を最大1年分照会するには、`stream_type`を`admin_logs`に設定します。これは、 Enterprise Event History APIとも呼ばれます。

このフィードでは、レイテンシよりも完全性を重視しています。つまり、Boxでは、管理イベントが重複することなく時系列で配信されますが、レイテンシはユーザーまたは`admin_logs_streaming`のフィードよりも高くなります。イベントは、フィルタをかけている期間より後に到着する可能性があるため、ほぼリアルタイムで使用すると見逃される場合があります。

## 匿名ユーザー

場合によっては、イベントフィードには、IDが`2`のユーザーが表示される可能性があります。これは、匿名ユーザーを表すBoxの内部識別子です。

匿名ユーザーは、ログインしていないユーザーです。この状況は、ユーザーがコンテンツを操作し、最初にログインを求められない場合にいつでも発生する可能性があります。たとえば、ユーザーが、公開共有リンクを使用してファイルをダウンロードするときなどです。

## 制限

Enterprise Eventフィードでは、Long pollingがサポートされません。

Boxでのイベントの保存は無期限ではありません。`stream_type`を`admin_logs_streaming`に設定した場合は2週間分のEnterprise Event、`stream_type`を`admin_logs`に設定した場合は1年分のEnterprise Eventを取得できます。また、Box管理コンソールで[エクスポートされるレポート][reports]では、7年分のEnterprise Eventを取得できます。

`admin_logs_streaming`フィードでは、すべての結果を迅速に返すことを重視しています。つまり、Boxでは、イベントが順不同で複数回返される可能性があります。重複するイベントは、イベントIDによって識別できます。

## イベントタイプによるフィルタ

Enterprise Eventフィードでは、イベントタイプによるフィルタがサポートされています。

<Samples id="get_events" variant="enterprise_stream_filter">

</Samples>

イベントタイプの完全なリストについては、以下を参照してください。

## イベントタイプ

Enterpriseに対して、以下のイベントがトリガーされます。このリストですべてを網羅しているわけではないため、記載されていないイベントが表示される可能性もあります。

| イベント名                                                         | 説明                                                                                                            |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `ACCESS_GRANTED`                                              | Boxサポートに対する自分のアカウントへのアクセス権限の付与                                                                                |
| `ACCESS_REVOKED`                                              | Boxサポートに付与した自分のアカウントへのアクセス権限の取り消し                                                                             |
| `ADD_DEVICE_ASSOCIATION`                                      | デバイスの関連付けの追加                                                                                                  |
| `ADD_LOGIN_ACTIVITY_DEVICE`                                   | 未確認のデバイスからのログイン                                                                                               |
| `ADMIN_LOGIN`                                                 | 管理コンソールを使用した管理対象ユーザーアカウントへのログイン                                                                               |
| `ANNOTATIONV2_CREATE`                                         | 注釈の作成                                                                                                         |
| `ANNOTATIONV2_DELETE`                                         | 注釈の削除                                                                                                         |
| `ANNOTATIONV2_EDIT`                                           | 注釈の編集                                                                                                         |
| `APPLICATION_CREATED`                                         | 開発者コンソールでの新しいアプリケーションの作成                                                                                      |
| `APPLICATION_PUBLIC_KEY_ADDED`                                | アプリケーションへの公開キーの追加                                                                                             |
| `APPLICATION_PUBLIC_KEY_DELETED`                              | アプリケーションからの公開キーの削除                                                                                            |
| `CHANGE_ADMIN_ROLE`                                           | 管理者の役割の変更                                                                                                     |
| `CHANGE_FOLDER_PERMISSION`                                    | フォルダの権限の変更                                                                                                    |
| `COLLABORATION_ACCEPT`                                        | 招待の承諾                                                                                                         |
| `COLLABORATION_EXPIRATION`                                    | コラボレータへの有効期限の設定                                                                                               |
| `COLLABORATION_INVITE`                                        | 招待                                                                                                            |
| `COLLABORATION_REMOVE`                                        | コラボレータの削除                                                                                                     |
| `COLLABORATION_ROLE_CHANGE`                                   | ユーザーロールの変更                                                                                                    |
| `COLLECTION_CREATE`                                           | コレクションの作成                                                                                                     |
| `COLLECTION_DELETE`                                           | コレクションの削除                                                                                                     |
| `COLLECTION_UPDATE`                                           | コレクションの更新                                                                                                     |
| `COLLECTION_ITEM_CREATE`                                      | コレクションへの項目の追加                                                                                                 |
| `COLLECTION_ITEM_DELETE`                                      | コレクションからの項目の削除                                                                                                |
| `COLLECTION_ITEM_UPDATE`                                      | コレクションの項目の更新                                                                                                  |
| `COMMENT_CREATE`                                              | ファイル上でのコメントの作成                                                                                                |
| `COMMENT_DELETE`                                              | ファイル上のコメントの削除                                                                                                 |
| `CONTENT_ACCESS`                                              | 承認されたエンドユーザーまたはBoxアプリケーションでのプログラムによるファイルへのアクセス                                                                |
| `CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY`                 | 管理コンソールで設定されたポリシーのトリガー                                                                                        |
| `CONTENT_WORKFLOW_AUTOMATION_ADD`                             | 自動化の追加                                                                                                        |
| `CONTENT_WORKFLOW_AUTOMATION_DELETE`                          | 自動化の削除                                                                                                        |
| `CONTENT_WORKFLOW_POLICY_ADD`                                 | コンテンツポリシーの追加                                                                                                  |
| `CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION`                   | 共有ポリシーの違反                                                                                                     |
| `CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION`                    | 管理者が設定したアップロードポリシーの違反                                                                                         |
| `COPY`                                                        | コピー                                                                                                           |
| `DATA_RETENTION_CREATE_RETENTION`                             | リテンションの作成                                                                                                     |
| `DATA_RETENTION_REMOVE_RETENTION`                             | リテンションの削除                                                                                                     |
| `DELETE`                                                      | 削除                                                                                                            |
| `DELETE_USER`                                                 | ユーザーの削除                                                                                                       |
| `DEVICE_TRUST_CHECK_FAILED`                                   | デバイストラストチェックの失敗                                                                                               |
| `DISABLE_MULTI_FACTOR_AUTH`                                   | 多要素認証の無効化                                                                                                     |
| `DOWNLOAD`                                                    | ダウンロード                                                                                                        |
| `EDIT`                                                        | 編集                                                                                                            |
| `EDIT_USER`                                                   | ユーザーの編集                                                                                                       |
| `EMAIL_ALIAS_CONFIRM`                                         | ユーザーのメールエイリアスの確認                                                                                              |
| `EMAIL_ALIAS_REMOVE`                                          | ユーザーのメールエイリアスの削除                                                                                              |
| `ENABLE_MULTI_FACTOR_AUTH`                                    | 多要素認証の有効化                                                                                                     |
| `ENTERPRISE_APP_AUTHORIZATION_UPDATE`                         | JWTアプリケーションの承認または再承認                                                                                          |
| `EXTERNAL_COLLAB_SECURITY_SETTINGS`                           | 外部コラボレーション用セキュリティ設定の変更                                                                                        |
| `FAILED_LOGIN`                                                | ログインの失敗                                                                                                       |
| `FILE_MARKED_MALICIOUS`                                       | ファイルでのウイルスの検出。イベントは、通知を希望した企業にのみ送信されます。                                                                       |
| `FILE_WATERMARKED_DOWNLOAD`                                   | 電子すかし付きファイルのダウンロード                                                                                            |
| `GROUP_ADD_ITEM`                                              | グループへの項目の追加                                                                                                   |
| `GROUP_ADD_USER`                                              | グループへのユーザーの追加                                                                                                 |
| `GROUP_ADMIN_CREATED`                                         | グループ管理者の追加                                                                                                    |
| `GROUP_ADMIN_DELETED`                                         | グループ管理者の削除                                                                                                    |
| `GROUP_ADMIN_PERMISSIONS_UPDATED`                             | グループ管理者権限の更新                                                                                                  |
| `GROUP_CREATION`                                              | 新規グループの作成                                                                                                     |
| `GROUP_DELETION`                                              | グループの削除                                                                                                       |
| `GROUP_EDITED`                                                | グループの編集                                                                                                       |
| `GROUP_REMOVE_ITEM`                                           | 管理コンソールを使用したグループからのフォルダの削除                                                                                    |
| `GROUP_REMOVE_USER`                                           | グループからのユーザーの削除                                                                                                |
| `ITEM_MODIFY`                                                 | 変更した項目                                                                                                        |
| `ITEM_OPEN`                                                   | 開いた項目                                                                                                         |
| `ITEM_SHARED_UPDATE`                                          | 共有リンク設定の更新                                                                                                    |
| `ITEM_SYNC`                                                   | フォルダの同期                                                                                                       |
| `ITEM_UNSYNC`                                                 | フォルダの同期の解除                                                                                                    |
| `LEGAL_HOLD_ASSIGNMENT_CREATE`                                | リーガルホールド割り当ての作成                                                                                               |
| `LEGAL_HOLD_ASSIGNMENT_DELETE`                                | リーガルホールド割り当ての削除                                                                                               |
| `LEGAL_HOLD_POLICY_CREATE`                                    | リーガルホールドポリシーの作成                                                                                               |
| `LEGAL_HOLD_POLICY_DELETE`                                    | リーガルホールドポリシーの削除                                                                                               |
| `LEGAL_HOLD_POLICY_UPDATE`                                    | リーガルホールドポリシーの更新                                                                                               |
| `LOCK`                                                        | ロック                                                                                                           |
| `LOGIN`                                                       | ログイン                                                                                                          |
| `METADATA_INSTANCE_CREATE`                                    | メタデータインスタンスの作成                                                                                                |
| `METADATA_INSTANCE_DELETE`                                    | メタデータインスタンスの削除                                                                                                |
| `METADATA_INSTANCE_UPDATE`                                    | メタデータインスタンスの更新                                                                                                |
| `METADATA_TEMPLATE_CREATE`                                    | メタデータテンプレートの作成                                                                                                |
| `METADATA_TEMPLATE_UPDATE`                                    | メタデータテンプレートの更新                                                                                                |
| `METADATA_TEMPLATE_DELETE`                                    | メタデータテンプレートの削除                                                                                                |
| `MOVE`                                                        | 移動                                                                                                            |
| `NEW_USER`                                                    | ユーザーの作成                                                                                                       |
| `OAUTH2_ACCESS_TOKEN_REVOKE`                                  | OAuth 2.0アクセストークンの取り消し                                                                                        |
| `PREVIEW`                                                     | プレビュー                                                                                                         |
| `REMOVE_DEVICE_ASSOCIATION`                                   | デバイスの関連付けの削除                                                                                                  |
| `REMOVE_LOGIN_ACTIVITY_DEVICE`                                | アプリに関連付けられたユーザーセッションの無効化                                                                                      |
| `RENAME`                                                      | ファイルまたはフォルダの名前や説明の変更                                                                                          |
| `RETENTION_POLICY_ASSIGNMENT_ADD`                             | リテンションポリシー割り当ての追加                                                                                             |
| `SHARE`                                                       | 共有リンクの有効化                                                                                                     |
| `SHARE_EXPIRATION`                                            | 共有リンクの有効期限の設定                                                                                                 |
| `SHARED_LINK_REDIRECT_OUT_OF_SHARED_CONTEXT`                  | 共有リンクによって発生するリダイレクト                                                                                           |
| `SHIELD_ALERT`                                                | 企業のShieldルールに基づいた、Shieldによる異常なダウンロード、セッション、場所、悪意のあるコンテンツの検出。詳細については、[Shieldアラートイベント][shield-events]を参照してください。 |
| `SHIELD_DOWNLOAD_BLOCKED`                                     | Shieldアクセスポリシーに基づいた、エンドユーザーによるファイルのダウンロードのブロック                                                                |
| `SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED`                       | 外部コラボレーションへのアクセスのブロック                                                                                         |
| `SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION` | 正当な理由がない場合の外部コラボレーションへのアクセスのブロック                                                                              |
| `SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED`                       | 外部コラボレーションへの招待のブロック                                                                                           |
| `SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION` | 正当な理由がない場合の外部コラボレーションへの招待のブロック                                                                                |
| `SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`                     | 外部コラボレーションへの招待の承認                                                                                             |
| `SHIELD_JUSTIFICATION_APPROVAL`                               | Shieldの正当な理由の承認                                                                                               |
| `SHIELD_SHARED_LINK_ACCESS_BLOCKED`                           | 共有リンクへのアクセスのブロック                                                                                              |
| `SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE`              | 共有リンクの作成と、コンテンツへのアクセスの制限                                                                                      |
| `SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE`              | 共有リンクの更新と、コンテンツへのアクセスの制限                                                                                      |
| `SHIELD_INFORMATION_BARRIER_ENABLED`                          | Shield情報バリアの有効化                                                                                               |
| `SHIELD_INFORMATION_BARRIER_DISABLED`                         | Shield情報バリアの非アクティブ化                                                                                           |
| `SHIELD_INFORMATION_BARRIER_PENDING`                          | アクティブ化前のShield情報バリア                                                                                           |
| `SHIELD_INFORMATION_BARRIER_GROUP_ADD_USER_BLOCKED`           | 情報バリアの制限による、ユーザーの追加のブロック                                                                                      |
| `SHIELD_INFORMATION_BARRIER_COLLAB_BLOCKED`                   | 情報バリアの制限による、ユーザーに対するコラボレーション作成のブロック                                                                           |
| `SHIELD_INFORMATION_BARRIER_SHARED_ITEM_ACCESS_BLOCKED`       | 情報バリアの制限による、ユーザーの共有項目へのアクセスのブロック                                                                              |
| `SHIELD_INFORMATION_BARRIER_ITEM_MOVE_BLOCKED`                | 情報バリアの制限による、項目の移動のブロック                                                                                        |
| `SHIELD_INFORMATION_BARRIER_ITEM_COPY_BLOCKED`                | 情報バリアの制限による、項目のコピーのブロック                                                                                       |
| `SHIELD_INFORMATION_BARRIER_ITEM_OWNER_TRANSFER_BLOCKED`      | 情報バリアの制限による、項目の転送のブロック                                                                                        |
| `SIGN_DOCUMENT_ASSIGNED`                                      | 署名者への署名リクエストの送信                                                                                               |
| `SIGN_DOCUMENT_CANCELLED`                                     | APIまたはUIでの署名リクエストのキャンセル                                                                                       |
| `SIGN_DOCUMENT_COMPLETED`                                     | 全署名者による署名リクエストへの署名                                                                                            |
| `SIGN_DOCUMENT_CONVERTED`                                     | 署名用`.pdf`への署名リクエストの変換                                                                                         |
| `SIGN_DOCUMENT_CREATED`                                       | APIまたはUIでの署名リクエストの作成。ドキュメントはまだ署名者に送信されていません。                                                                  |
| `SIGN_DOCUMENT_DECLINED`                                      | 署名者による署名リクエストの拒否                                                                                              |
| `SIGN_DOCUMENT_EXPIRED`                                       | 署名リクエストの期限切れ (署名は未完了)                                                                                         |
| `SIGN_DOCUMENT_SIGNED`                                        | 署名者による署名リクエストへの署名                                                                                             |
| `SIGN_DOCUMENT_VIEWED_BY_SIGNER`                              | 署名者による署名用メールの \[**ドキュメントをレビュー**] のクリックまたは署名用URLへのアクセス                                                         |
| `SIGNER_DOWNLOADED`                                           | 署名者による署名用ドキュメントのダウンロード                                                                                        |
| `SIGNER_FORWARDED`                                            | 署名者による署名用ドキュメントの転送                                                                                            |
| `STORAGE_EXPIRATION`                                          | ファイルの自動削除の設定                                                                                                  |
| `TASK_ASSIGNMENT_UPDATE`                                      | タスク割り当ての更新                                                                                                    |
| `TASK_ASSIGNMENT_CREATE`                                      | タスク割り当ての作成                                                                                                    |
| `TASK_ASSIGNMENT_DELETE`                                      | タスク割り当ての削除                                                                                                    |
| `TASK_CREATE`                                                 | タスクの作成                                                                                                        |
| `TASK_UPDATE`                                                 | タスクのコメントの編集                                                                                                   |
| `TERMS_OF_SERVICE_ACCEPT`                                     | 利用規約の承諾                                                                                                       |
| `TERMS_OF_SERVICE_REJECT`                                     | 利用規約の拒否                                                                                                       |
| `UNDELETE`                                                    | 削除の取り消し                                                                                                       |
| `UNLOCK`                                                      | ロックの解除                                                                                                        |
| `UNSHARE`                                                     | 共有リンクの削除                                                                                                      |
| `UPDATE_COLLABORATION_EXPIRATION`                             | コラボレータの有効期限の延長                                                                                                |
| `UPDATE_SHARE_EXPIRATION`                                     | 共有リンクの有効期限の延長                                                                                                 |
| `UPLOAD`                                                      | アップロード                                                                                                        |
| `USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE`                | OAuth 2.0アクセストークンの作成                                                                                          |
| `WATERMARK_LABEL_CREATE`                                      | ファイルへの電子すかしの追加                                                                                                |
| `WATERMARK_LABEL_DELETE`                                      | ファイルからの電子すかしの削除                                                                                               |

[shield-events]: g://events/event-triggers/shield-alert-events

[reports]: https://support.box.com/hc/en-us/articles/360043696534-Running-Reports
