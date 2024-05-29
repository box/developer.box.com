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

| イベント名                        | 説明                                                   |
| ---------------------------- | ---------------------------------------------------- |
| `ITEM_CREATE`                | フォルダまたはファイルが作成されました。                                 |
| `ITEM_UPLOAD`                | フォルダまたはファイルがアップロードされました。                             |
| `ITEM_MOVE`                  | ファイルまたはフォルダが移動されました。                                 |
| `ITEM_COPY`                  | ファイルまたはフォルダがコピーされました。                                |
| `LOCK_CREATE`                | ファイルがロックされました。                                       |
| `LOCK_DESTROY`               | ファイルがロック解除されました。ロックされたファイルが削除されると、ソースファイルはnullになります。 |
| `ITEM_TRASH`                 | ファイルまたはフォルダが削除済みとしてマークされました。                         |
| `ITEM_UNDELETE_VIA_TRASH`    | ファイルまたはフォルダがごみ箱から戻されました。                             |
| `COLLAB_ADD_COLLABORATOR`    | コラボレータがフォルダに追加されました。                                 |
| `COLLAB_ROLE_CHANGE`         | コラボレータの役割が変更されました。                                   |
| `COLLAB_INVITE_COLLABORATOR` | コラボレータがフォルダに招待されました。                                 |
| `COLLAB_REMOVE_COLLABORATOR` | コラボレータがフォルダから削除されました。                                |
| `ITEM_SYNC`                  | フォルダが同期対象としてマークされました。                                |
| `ITEM_UNSYNC`                | フォルダが同期対象のマークを解除されました。                               |
| `ITEM_RENAME`                | ファイルまたはフォルダの名前が変更されました。                              |
| `ITEM_MAKE_CURRENT_VERSION`  | 前のバージョンのファイルが現在のバージョンに昇格されました。                       |
| `GROUP_ADD_USER`             | グループへのユーザーの追加                                        |
| `GROUP_REMOVE_USER`          | グループからのユーザーの削除                                       |

以下のイベントは、`all`フィードでのみ使用できます。

| イベント名                    | 説明                                   |
| ------------------------ | ------------------------------------ |
| `COMMENT_CREATE`         | フォルダ、ファイル、または他のコメントに対するコメントが作成されました。 |
| `COMMENT_DELETE`         | フォルダ、ファイル、または他のコメントに対するコメントが削除されました。 |
| `ITEM_DOWNLOAD`          | ファイルまたはフォルダがダウンロードされました。             |
| `ITEM_PREVIEW`           | ファイルがプレビューされました。                     |
| `TASK_ASSIGNMENT_CREATE` | タスクが割り当てられました。                       |
| `TASK_CREATE`            | タスクが作成されました。                         |
| `ITEM_SHARED_CREATE`     | ファイルまたはフォルダの共有が有効化されました。             |
| `ITEM_SHARED_UNSHARE`    | ファイルまたはフォルダの共有が無効化されました。             |
| `ITEM_SHARED`            | フォルダが共有されました。                        |
| `TAG_ITEM_CREATE`        | タグがファイルまたはフォルダに追加されました。              |
| `ENABLE_TWO_FACTOR_AUTH` | ユーザーによって2要素認証が有効化されました。              |
| `MASTER_INVITE_ACCEPT`   | 管理対象ユーザーになるための招待が無料ユーザーによって承認されました。  |
| `MASTER_INVITE_REJECT`   | 管理対象ユーザーになるための招待が無料ユーザーによって拒否されました。  |
| `ACCESS_GRANTED`         | アカウントに対するBoxのアクセス権限が付与されました。         |
| `ACCESS_REVOKED`         | アカウントに対するBoxのアクセス権限が取り消されました。        |

[longpoll]: g://events/user-events/polling
