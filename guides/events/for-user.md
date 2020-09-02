---
rank: 1
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/for-enterprise
  - events/polling
  - events/pagination
required_guides: []
alias_paths: []
category_id: events
subcategory_id: null
is_index: false
id: events/for-user
type: guide
total_steps: 5
sibling_id: events
parent_id: events
next_page_id: events/for-enterprise
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/events/for-user.md
---
# ユーザーイベントの取得

ユーザーイベントを取得するには、任意のユーザーとして認証し、[`GET /events`](e://get_events) APIを呼び出します。

<Samples id="get_events">

</Samples>

<Message>

返されるイベントは、APIの作成に使用したアクセストークンを所有するユーザーのみを対象とします。別のユーザーのイベントフィードを取得するには、`as-user`ヘッダーか、そのユーザーの実際のアクセストークンを使用します。

</Message>

## ロングポーリング

ユーザーイベントストリームでは、[`OPTIONS /events` APIを介して][longpoll]Long pollingがサポートされます。

## ストリームタイプ

ユーザーイベントストリームでは、3つのタイプのストリームがサポートされます。

<!-- markdownlint-disable line-length -->

| ストリームタイプ  |                                                 |
| --------- | ----------------------------------------------- |
| `all`     | ユーザーに関するすべてのイベントを返します(デフォルト)。                   |
| `changes` | ファイルの更新やコラボレーションなど、ファイルツリーを変更する可能性があるイベントを返します。 |
| `sync`    | 変更に似ていますが、同期対象フォルダにのみ適用されます。                    |

<!-- markdownlint-enable line-length -->

## 制限

Boxでのイベントの保存は無期限ではありません。

ユーザーイベントは2週間から2か月間保存され、その後、保存されたユーザーイベントは削除されます。エンタープライズイベントには、APIを介した場合は1年間、Box管理コンソールのエクスポートされたレポート経由の場合は7年間アクセスできます。

このフィードでは、完全な結果を迅速に返すことを重視しています。つまり、Boxではイベントを複数回または異なる順序で返す可能性があります。重複するイベントは、イベントIDによって識別できます。

## イベントタイプ

ユーザーに対して、以下のイベントがトリガーされます。

<!-- markdownlint-disable line-length -->

以下のイベントは、すべてのフィードで使用できます。

| イベント名                        | 説明                                                    |
| ---------------------------- | ----------------------------------------------------- |
| `ITEM_CREATE`                | フォルダまたはファイルが作成されました。                                  |
| `ITEM_UPLOAD`                | フォルダまたはファイルがアップロードされました。                              |
| `ITEM_MOVE`                  | ファイルまたはフォルダが移動されました。                                  |
| `ITEM_COPY`                  | ファイルまたはフォルダがコピーされました。                                 |
| `LOCK_CREATE`                | ファイルがロックされました。                                        |
| `LOCK_DESTROY`               | ファイルのロックが解除されました。ロックされたファイルが削除されると、ソースファイルはnullになります。 |
| `ITEM_TRASH`                 | ファイルまたはフォルダが削除済みとしてマークされました。                          |
| `ITEM_UNDELETE_VIA_TRASH`    | ファイルまたはフォルダがごみ箱から戻されました。                              |
| `COLLAB_ADD_COLLABORATOR`    | コラボレータがフォルダに追加されました。                                  |
| `COLLAB_ROLE_CHANGE`         | コラボレータのロールが変更されました。                                   |
| `COLLAB_INVITE_COLLABORATOR` | コラボレータがフォルダで招待されました。                                  |
| `COLLAB_REMOVE_COLLABORATOR` | コラボレータがフォルダから削除されました。                                 |
| `ITEM_SYNC`                  | フォルダが同期対象としてマークされました。                                 |
| `ITEM_UNSYNC`                | フォルダが同期対象のマークが解除されました。                                |
| `ITEM_RENAME`                | ファイルまたはフォルダの名前が変更されました。                               |
| `ITEM_MAKE_CURRENT_VERSION`  | 前のバージョンのファイルは現在のバージョンに昇格しました。                         |
| `GROUP_ADD_USER`             | ユーザーがグループに追加されました。                                    |
| `GROUP_REMOVE_USER`          | ユーザーがグループから削除されました。                                   |

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
| `MASTER_INVITE_ACCEPT`   | 無料版ユーザーが管理対象ユーザーになるための招待を承認します。      |
| `MASTER_INVITE_REJECT`   | 無料版ユーザーが管理対象ユーザーになるための招待を拒否します。      |
| `ACCESS_GRANTED`         | アカウントに対するBoxのアクセス権限を付与しました。          |
| `ACCESS_REVOKED`         | アカウントに対するBoxのアクセス権限を取り消します。          |

<!-- markdownlint-enable line-length -->

## 匿名ユーザー

場合によっては、イベントフィードには、IDが`2`のユーザーが表示される可能性があります。これは、匿名ユーザーを表すBoxの内部識別子です。

匿名ユーザーは、ログインしていないユーザーです。この状況は、ユーザーがコンテンツを操作し、最初にログインを求められない場合にいつでも発生する可能性があります。たとえば、ユーザーが、公開共有リンクを使用してファイルをダウンロードするときなどです。

[longpoll]: g://events/polling
