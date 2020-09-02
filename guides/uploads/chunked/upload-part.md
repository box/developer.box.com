---
rank: 2
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
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/uploads/chunked/upload-part.md
---
# パーツのアップロード

パーツをアップロードするには、最初に[アップロードセッションを作成][createsession]します。結果のオブジェクトにより、各パーツのサイズとアップロードするパーツの数が定義されます。

次に、アップロードするパーツのデータをアップロードします。その際、パーツのバイト範囲と、コンテンツを適切にアップロードをするための`SHA`ダイジェストを指定します。

<Samples id="put_files_upload_sessions_id">

</Samples>

## パーツサイズ

各パーツのサイズは、作成したアップロードセッションで指定されているパーツサイズとまったく同じサイズである必要があります。ただし、ファイルの最後のパーツのみ例外となり、より小さいサイズが許可されます。

<Message>

# ヒント

結果として、各パーツのバイト範囲の下限は、パーツサイズの倍数になるはずです。

</Message>

## レスポンス

各アップロードの後、結果の応答には、アップロードされたパーツのIDとSHAが含まれます。

```json
{
  "part_id": "6F2D3486",
  "offset": 16777216,
  "size": 3222784,
  "sha1": "134b65991ed521fcfe4724b7d814ab8ded5185dc"
}
```

<Message warning>

クライアントですべてのパーツアップロードのすべてのJSON応答を記録することをお勧めします。この応答は[セッションのコミット][commit]に必要です。

</Message>

## 範囲の重複

パーツアップロードのリクエストがエラーコード`range_overlaps_existing_part`で失敗するのは、アプリケーションがファイルの分割に失敗し、すでにコンテンツがアップロードされている範囲にパーツをアップロードしようとしたことが原因です。アプリケーションでは、この最後のパーツがセッションに継続されなかったと想定する必要があります。

## 並行アップロード

パーツは並行してアップロードできますが、可能な限り順番にアップロードしてください。バイトオフセットが小さいパーツは、バイトオフセットが大きいパーツより先にアップロードする必要があります。

推奨されるのは、バイトオフセット順に並べたパーツのキューから、3～5個のパーツを並行してアップロードする方法です。パーツのアップロードが失敗した場合、その後のパーツをアップロードする前に再試行する必要があります。

[commit]: g://uploads/chunked/commit-session

[createsession]: g://uploads/chunked/create-session
