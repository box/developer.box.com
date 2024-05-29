---
rank: 120
alias_paths: []
category_id: events
subcategory_id: null
is_index: true
id: events
type: guide
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/index.md
fullyTranslated: true
---
# イベント

アプリケーションはイベントフィードを使用して、Enterprise内の任意のユーザー (複数可) またはサービスが実行する操作をすべて登録できます。

## User EventとEnterprise Event

[`GET /events`](e://get_events) APIを使用すると、`stream_type`に応じて、Enterprise全体または特定のユーザーのライブイベントにサブスクライブするか、Enterprise全体のイベントの履歴を照会することができます。

### User Event

User Eventは、現在認証されているユーザーに関連する、低レイテンシのイベントストリームを提供します。このイベントストリームにより、[Box Drive][drive]は常に最新の状態で維持されますが、このイベントストリームは開発者向けにも提供されています。

このフィードでは、すべての結果を迅速に返すことを重視しています。つまり、Boxでは、イベントが複数回または時系列に関係なく返される可能性があります。重複するイベントは、イベントIDによって識別できます。

Enterprise Event Streamとは異なり、User Event Streamは、特定のイベントのフィルタをサポートしません。User Eventの3つのstream_typeで返されるUser Eventデータセットのサブセットは、目的に応じて若干異なります。

| ストリームタイプ  |                                                |
| --------- | ---------------------------------------------- |
| `all`     | ユーザーに関するすべてのイベントを返します (デフォルト)。                 |
| `changes` | ファイルの更新やコラボレーションなど、ファイルツリーを変更する可能性があるイベントを返します |
| `sync`    | 変更に似ていますが、同期対象フォルダにのみ適用されます。                   |

### Enterprise Event

Enterprise Eventは、企業のBoxインスタンスにあるすべてのユーザーとコンテンツのイベントフィードを提供します。`stream_type`に応じて、アプリケーションは、ライブイベントを登録するかイベントの履歴を照会することができます。これらのストリームタイプへのアクセスは、**新規レポートの実行および既存レポートへのアクセスを行う**ための管理者権限を持つユーザーに制限されます。

User Event Streamとは異なり、Enterprise Event Streamは、イベントタイプに基づくフィルタをサポートしますが、Long pollingをサポートしません。2つのストリームタイプでのデータセットはまったく同じです。イベントIDを使用すると、2つのストリームタイプでのイベントの重複を排除できます。

| ストリームタイプ               |                                   |
| ---------------------- | --------------------------------- |
| `admin_logs`           | イベントの履歴を最大1年分照会できるようにします          |
| `admin_logs_streaming` | ほぼリアルタイムでライブイベントにサブスクライブできるようにします |

#### ライブで監視

Box内で生成された最近のイベントをEnterprise全体で監視するには、`stream_type`を`admin_logs_streaming`に設定します。これは、Enterprise Event Stream APIとも呼ばれます。

このフィードでは、時系列の正確さよりもレイテンシの低さを重視しています。つまり、Boxでは、イベントが複数回、時系列に関係なく返される場合があります。イベントは、Boxで処理されるとほぼリアルタイムでAPIを介して返されます。少しの遅延やバッファーが発生すると、新しいイベントがカーソル位置の後に書き込まれなくなります。この`stream_type`で取得できるイベントは、2週間分だけです。

#### 履歴の照会

Enterprise全体のイベント履歴を最大1年分照会するには、`stream_type`を`admin_logs`に設定します。これは、 Enterprise Event History APIとも呼ばれます。

このフィードでは、レイテンシよりも完全性を重視しています。つまり、Boxでは、管理イベントが重複することなく時系列で配信されますが、レイテンシはユーザーまたは`admin_logs_streaming`のフィードよりも高くなります。イベントは、フィルタをかけている期間より後に到着する可能性があるため、ほぼリアルタイムで使用すると見逃される場合があります。

[drive]: https://www.box.com/drive
