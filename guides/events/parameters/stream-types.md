---
rank: 2
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
  - events/user-events/for-user
  - events/user-events/polling
  - events/parameters/pagination
required_guides: []
alias_paths: []
category_id: events
subcategory_id: events/parameters
is_index: false
id: events/parameters/stream-types
type: guide
total_steps: 2
sibling_id: events/parameters
parent_id: events/parameters
next_page_id: events/parameters
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/parameters/stream-types.md
fullyTranslated: true
---
# ストリームタイプ

| ストリームタイプ               |  スコープ                      | 目的           | 説明                                             | 保持期間 | アクセスパターン                                      |
| ---------------------- | -------------------------- | ------------ | ---------------------------------------------- | ---- | --------------------------------------------- |
| `admin_logs`           | 1つのEnterprise (承認された管理者向け) | 履歴の照会        | イベントの履歴を最大1年分照会できるようにします                       | 365日 | 期間でフィルタをかけた後、`stream_position`でレスポンスのページ割りを行う |
| `admin_logs_streaming` | 1つのEnterprise (承認された管理者向け) | ほぼリアルタイムでの登録 | ほぼリアルタイムでライブイベントにサブスクライブできるようにします              | 14日  | `stream_position`を使用してポーリングする                 |
| `all` (デフォルト)          | 1人のユーザー (任意のユーザー向け)        | ほぼリアルタイムでの登録 | ユーザーに関するすべてのイベントを返します                          | 21日  | `stream_position`を使用してポーリングまたはLong pollingを行う |
| `changes`              | 1人のユーザー (任意のユーザー向け)        | ほぼリアルタイムでの登録 | ファイルの更新やコラボレーションなど、ファイルツリーを変更する可能性があるイベントを返します | 21日  | `stream_position`を使用してポーリングまたはLong pollingを行う |
| `sync`                 | 1人のユーザー (任意のユーザー向け)        | ほぼリアルタイムでの登録 | `changes`に似ていますが、同期対象フォルダのみに適用されます             | 31日  | `stream_position`を使用してポーリングまたはLong pollingを行う |
