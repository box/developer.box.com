---
rank: 4
related_endpoints:
  - put_files_upload_sessions_id
related_guides:
  - uploads/chunked/commit-session
related_pages: []
required_guides:
  - uploads/chunked/create-session
related_resources:
  - upload_part
alias_paths: []
category_id: uploads
subcategory_id: uploads/chunked
is_index: false
id: uploads/chunked/upload-part
type: guide
total_steps: 5
sibling_id: uploads/chunked
parent_id: uploads/chunked
next_page_id: uploads/chunked/commit-session
previous_page_id: uploads/chunked/with-sdks
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/uploads/chunked/upload-part.md
fullyTranslated: true
---
# パーツのアップロード

大きいファイルをアップロードする際は、そのファイルを小さいパーツに分割し、パーツのアップロードAPIを使用してそれらのパーツをアップロードできます。

## アップロードセッションの作成

最初に[アップロードセッションを作成][createsession]します。結果のオブジェクトにより、各パーツのサイズとアップロードするパーツの数が定義されます。

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

## ファイルの分割

ファイルをアップロードするパーツに分割します。コマンドラインを使用する場合は、`split`コマンドを使用します。

```bash
split -b <PART_SIZE> <FILE_NAME> <YOUR_PART_NAME>

```

例:

```bash
split -b 8388608 video.mp3 videopart

```

これにより、ファイルが複数のファイルに分割されます。

## SHAダイジェストの取得

`SHA`ダイジェストの値を取得するには、次のopenSSLコマンドを使用して、ファイルのパーツをエンコードします。

```bash
openssl sha1 -binary <FILE_PART_NAME> | base64

```

例:

```bash
openssl sha1 -binary videoparta | base64

```

その結果、Base64でエンコードされたメッセージがアップロードの検証に使用されます。

## パーツのアップロード

アップロードするパーツのデータをアップロードします。その際、パーツのバイト範囲と、コンテンツを適切にアップロードするための`SHA`ダイジェストを指定します。

<Samples id="put_files_upload_sessions_id">

</Samples>

### コンテンツの範囲

各パーツのサイズは、作成したアップロードセッションで指定されているパーツサイズとまったく同じサイズである必要があります。ただし、ファイルの最後のパーツは小さくなる可能性があるため、例外となります。`Content-Range`パラメータの定義は、次のパターンに従います。

```yaml
-H "Content-Range: bytes <LOWER_BOUND>-<HIGHER_BOUND>/<TOTAL_SIZE>"

```

`Content-Range`の値を指定する際は、以下の点に注意してください。

* 各パーツのバイト範囲の下限は、パーツサイズの倍数にする必要があります。
* 上限は、パーツサイズの倍数から1を引いた値にする必要があります。

たとえば、パーツサイズが`8388608`の場合、最初の2つのパーツのコンテンツの範囲は次のようになります。

```yaml
-H "Content-Range: bytes 0-8388607/32127641" \ ## first part
-H "Content-Range: bytes 8388608-16777215/32127641" \ ## second part

```

## レスポンス

各アップロードの後、結果のレスポンスには、アップロードされたパーツの`ID`と`SHA`が含まれます。

```json
{
  "part_id": "6F2D3486",
  "offset": 16777216,
  "size": 3222784,
  "sha1": "134b65991ed521fcfe4724b7d814ab8ded5185dc"
}

```

<Message warning>

すべてのパーツアップロードのすべてのJSONレスポンスは、[セッションのコミット][commit]に必要なため、保持してください。

</Message>

## 範囲の重複

パーツアップロードのリクエストがエラーコード`range_overlaps_existing_part`で失敗するのは、アプリケーションがファイルの分割に失敗し、すでにコンテンツがアップロードされている範囲にパーツをアップロードしようとしたことが原因です。アプリケーションでは、この最後のパーツがセッションに継続されなかったと想定する必要があります。

## 並行アップロード

パーツは並行してアップロードできますが、可能な限り順番にアップロードするようにしてください。バイトオフセットが小さいパーツは、バイトオフセットが大きいパーツより先にアップロードする必要があります。

推奨されるのは、バイトオフセット順に並べたパーツのキューから、3～5個のパーツを並行してアップロードする方法です。パーツのアップロードが失敗した場合は、さらにパーツをアップロードする前に、失敗したアップロードを再試行してください。

[commit]: g://uploads/chunked/commit-session

[createsession]: g://uploads/chunked/create-session
