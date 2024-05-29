---
rank: 3
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
required_guides: []
alias_paths: []
category_id: events
subcategory_id: events/enterprise-events
is_index: false
id: events/enterprise-events/migrate-to-stream
type: guide
total_steps: 2
sibling_id: events/enterprise-events
parent_id: events/enterprise-events
next_page_id: ''
previous_page_id: events/enterprise-events/for-enterprise
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/enterprise-events/migrate-to-stream.md
fullyTranslated: true
---
# 履歴からストリームへの移行

Boxでは、`admin_logs`を使用してライブイベントを登録しているアプリケーションを`admin_logs_streaming`に移行することをお勧めします。`admin_logs_streaming`を使用すると、レイテンシが低下し、一貫性が高まるだけでなく、遅れて届くイベントが見逃されなくなります。`admin_logs`と`admin_logs_streaming`の間のイベントの重複は、イベントIDを使用して排除することが可能です。

## Enterpriseの`stream_type`の比較

### `admins_logs_streaming`のメリット

* 遅れて届くイベントが、登録しているアプリケーションで見逃されなくなる
* レイテンシが80%低下する (通常の操作時)
* より一貫性のあるレイテンシが実現する (通常の操作時)
* 遅れたイベントの埋め戻しをサービスで管理する必要がなくなったため、障害からの復旧がよりスムーズになる

### `admin_logs`と`admin_logs_streaming`の相違点

* 2週間分のイベント履歴 (リテンション) が提供される
* `created_after`および`created_before`フィルタパラメータがサポートされない
* 重複を含む可能性がある (「少なくとも1回」は保証されている)
* イベントが時系列で返されなくなる (イベントはほぼ処理された順で返される)

### `admin_logs`と`admin_logs_streaming`の類似点

* 同じ[`GET /events`][events-api] APIエンドポイントを共有する
* 同じイベントペイロードを返す (イベントIDを使用して2つのストリームタイプでのイベントの重複排除が可能)
* `event_type`によるフィルタが可能
* `stream_position`を使用したイベントのページ割りが可能

## `admin_logs`から`admin_logs_streaming`への移行方法

### 1. 既存のリクエストは以下のようになります

```curl
curl https://api.box.com/2.0/events?stream_type=admin_logs&stream_position=1632893855 \
    -H "authorization: Bearer <ACCESS_TOKEN>"

```

### 2. `admin_logs_streaming`を使用して重複する既存のリクエストを開始します

* 2週間前に開始し、埋め戻しする:

```curl
    curl https://api.box.com/2.0/events?stream_type=admin_logs_streaming&stream_position=0 \
        -H "authorization: Bearer <ACCESS_TOKEN>"

```

または

* 今すぐ開始し、並行して実行する:

```curl
    curl https://api.box.com/2.0/events?stream_type=admin_logs_streaming&stream_position=now \
        -H "authorization: Bearer <ACCESS_TOKEN>"

```

### 3. これまでの結果のページ割りを行い、`admin_logs`イベントとの重複を排除します

```curl
curl https://api.box.com/2.0/events?stream_type=admin_logs_streaming&stream_position=1632893855 \
    -H "authorization: Bearer <ACCESS_TOKEN>"

```

### 4. 確信できるまで重複に進みます

### 5. 古い`admin_logs`リクエストを無効にします

<ImageFrame center shadow border>

![ストリームの移行フロー](images/migrate_to_stream.png)

</ImageFrame>

[events-api]: e://events
