---
rank: 2
related_endpoints:
  - post_files_upload_sessions
  - post_files_id_upload_sessions
related_guides:
  - uploads/chunked/upload-part
  - uploads/chunked/commit-session
related_pages: []
required_guides: []
related_resources:
  - upload_session
alias_paths: []
category_id: uploads
subcategory_id: uploads/chunked
is_index: false
id: uploads/chunked/create-session
type: guide
total_steps: 5
sibling_id: uploads/chunked
parent_id: uploads/chunked
next_page_id: uploads/chunked/commit-session
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/uploads/chunked/create-session.md
---
# アップロードセッションの作成

アップロードセッションを作成するには、目的の`file_name`とそのファイルを配置する`folder_id`、およびアップロードするファイルの`file_size`を指定して[`POST /files/upload_sessions`][createsession] APIを呼び出します。

<Samples sample="post_files_upload_sessions">

</Samples>

既存ファイルの新しいバージョン用のセッションを作成するには、代わりに[`POST /files/:id/upload_sessions`][createsessionversion] APIを呼び出します。この場合、`file_name`と`folder_id`は、プロセスでファイルの名前変更または移動を行う場合にのみ必要となります。

<Samples sample="post_files_id_upload_sessions">

</Samples>

## 事前チェック

アップロードセッションの作成によって[事前チェック][check]も実行されるため、分割アップロードを行う際に個別に行う必要はありません。

## レスポンス

セッションが正常に作成されると、応答には、セッションID、パーツ数、パーツサイズ、および使用する関連する次のAPIエンドポイントへのリンクを含む[アップロードセッション][uploadsession]が含まれます。

<!-- markdownlint-disable line-length -->

```json
{
  "id": "F971964745A5CD0C001BBE4E58196BFD",
  "type": "upload_session",
  "session_expires_at": "2012-12-12T10:53:43-08:00",
  "part_size": 1024,
  "total_parts": 1000,
  "num_parts_processed": 455,
  "session_endpoints": {
    "upload_part": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD",
    "commit": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD/commit",
    "abort": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD",
    "list_parts": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD/parts",
    "status": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD",
    "log_event": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD/log"
  }
}
```

<!-- markdownlint-enable line-length -->

アップロードセッションは、個々のパーツをアップロードするときに使用するパーツのサイズを定義します。

[createsession]: e://post_files_upload_sessions

[createsessionversion]: e://post_files_id_upload_sessions

[check]: g://uploads/check

[uploadsession]: r://upload_session
