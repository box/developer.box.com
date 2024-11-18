---
rank: 1
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
  - events/user-events/polling
  - events/parameters/pagination
required_guides: []
alias_paths:
  - /guides/events/for-user
  - /guides/events/for-user/
category_id: events
subcategory_id: events/user-events
is_index: false
id: events/user-events/for-user
type: guide
total_steps: 2
sibling_id: events/user-events
parent_id: events/user-events
next_page_id: events/user-events/polling
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/user-events/for-user.md
fullyTranslated: true
---
# User Eventの取得

User Eventを取得するには、任意のユーザーとして認証し、[`GET /events`](e://get_events) APIを呼び出します。

<Samples id="get_events">

</Samples>

<Message>

返されるイベントは、APIの作成に使用したアクセストークンを所有するユーザーのみを対象とします。別のユーザーのイベントフィードを取得するには、`as-user`ヘッダーか、そのユーザーの実際のアクセストークンを使用します。

</Message>

## ストリームタイプ

User Event Streamでは、3つのタイプのストリームがサポートされます。

| ストリームタイプ  |                                                 |
| --------- | ----------------------------------------------- |
| `all`     | ユーザーに関するすべてのイベントを返します (デフォルト)。                  |
| `changes` | ファイルの更新やコラボレーションなど、ファイルツリーを変更する可能性があるイベントを返します。 |
| `sync`    | 変更に似ていますが、同期対象フォルダにのみ適用されます。                    |

## 匿名ユーザー

場合によっては、イベントフィードには、IDが`2`のユーザーが表示される可能性があります。これは、匿名ユーザーを表すBoxの内部識別子です。

匿名ユーザーは、ログインしていないユーザーです。この状況は、ユーザーがコンテンツを操作し、最初にログインを求められない場合にいつでも発生する可能性があります。たとえば、ユーザーが、公開共有リンクを使用してファイルをダウンロードするときなどです。

## 制限

Boxでのイベントの保存は無期限ではありません。

User Eventは2週間から2か月間保存され、その後、保存されたUser Eventは削除されます。Enterprise Eventには、APIを介した場合は1年間、Box管理コンソールのエクスポートされたレポート経由の場合は7年間アクセスできます。

このフィードでは、完全な結果を迅速に返すことを重視しています。つまり、Boxではイベントを複数回または異なる順序で返す可能性があります。重複するイベントは、イベントIDによって識別できます。

## Long polling

User Event Streamでは、[`OPTIONS /events` APIを介して][longpoll]Long pollingがサポートされます。

## イベントタイプ

ユーザーに対して、以下のイベントがトリガーされます。このリストですべてを網羅しているわけではないため、記載されていないイベントが表示される可能性もあります。

以下のイベントは、すべてのフィードで使用できます。

| イベント名                     | 説明                                                   |
| ------------------------- | ---------------------------------------------------- |
| `ITEM_CREATE`             | フォルダまたはファイルが作成されました。                                 |
| `ITEM_UPLOAD`             | フォルダまたはファイルがアップロードされました。                             |
| `ITEM_MOVE`               | ファイルまたはフォルダが移動されました。                                 |
| `ITEM_COPY`               | ファイルまたはフォルダがコピーされました。                                |
| `LOCK_CREATE`             | ファイルがロックされました。                                       |
| `LOCK_DESTROY`            | ファイルがロック解除されました。ロックされたファイルが削除されると、ソースファイルはnullになります。 |
| `ITEM_TRASH`              | ファイルまたはフォルダが削除済みとしてマークされました。                         |
| `ITEM_UNDELETE_VIA_TRASH` | ファイルまたはフォルダがごみ箱から戻されました。                             |
| `COLLAB_ADD_COLLABORATOR` | コラボレータがフォルダに追加されました。                                 |

\| \| `COLLAB_ROLE_CHANGE` | A collaborator had their role changed | | `COLLAB_INVITE_COLLABORATOR` | A collaborator was invited on a folder | | `COLLAB_REMOVE_COLLABORATOR` | A collaborator was removed from a folder | | `ITEM_SYNC` | A folder was marked for sync | | `ITEM_UNSYNC` | A folder was unmarked for sync | | `ITEM_RENAME` | A file or folder was renamed | | `ITEM_MAKE_CURRENT_VERSION` | A previous version of a file was promoted to the current version | | `GROUP_ADD_USER` | Added user to group | | `GROUP_REMOVE_USER` | Removed user from group |

以下のイベントは、`all`フィードでのみ使用できます。

| イベント名                    | 説明                                                    |
| ------------------------ | ----------------------------------------------------- |
| `COMMENT_CREATE`         | フォルダ、ファイル、または他のコメントに対するコメントが作成されました。                  |
| `COMMENT_DELETE`         | フォルダ、ファイル、または他のコメントに対するコメントが削除されました。                  |
| `ITEM_DOWNLOAD`          | ファイルまたはフォルダがダウンロードされました。                              |
| `ITEM_PREVIEW`           | ファイルがプレビューされました。                                      |
| `TASK_ASSIGNMENT_CREATE` | タスクが割り当てられました。                                        |
| `TASK_CREATE`            | タスクが作成されました。                                          |
| `ITEM_SHARED_CREATE`     | ファイルまたはフォルダの共有が有効化されました。                              |
| `ITEM_SHARED_UNSHARE`    | ファイルまたはフォルダの共有が無効化されました。                              |
| `ITEM_SHARED`            | フォルダが共有されました。                                         |
| `TAG_ITEM_CREATE`        | タグがファイルまたはフォルダに追加されました。                               |
| `ENABLE_TWO_FACTOR_AUTH` | 2 factor authentication enabled by user               |
| `MASTER_INVITE_ACCEPT`   | Free user accepts invitation to become a managed user |
| `MASTER_INVITE_REJECT`   | Free user rejects invitation to become a managed user |
| `ACCESS_GRANTED`         | Granted Box access to account                         |
| `ACCESS_REVOKED`         | Revoke Box access to account                          |

## Event notifications

To reduce the noise of the event stream and optimize event consumption, the event types listed in the table trigger a limited number of notifications.

| Event type                                                                                                  | Notification behavior                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `COLLAB_ADD_COLLABORATOR`, `COLLAB_REMOVE_COLLABORATOR`, `COLLAB_INVITE_COLLABORATOR`, `COLLAB_ROLE_CHANGE` | When these events take place, the content owner on the `changes` event stream is notified. Collaborators see an additional event that matches what they see on the `all` stream. |
| `ITEM_DOWNLOAD`                                                                                             | When an item is downloaded, only the content owner gets the notification. Collaborators are not notified.                                                                        |
| `ITEM_PREVIEW`                                                                                              | When an item is previewed, only the content owner gets the notification. Collaborators are not notified.                                                                         |

[longpoll]: g://events/user-events/polling
