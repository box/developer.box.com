---
rank: 3
related_endpoints:
  - post_files_upload_sessions_id_commit
related_guides: []
related_pages: []
required_guides:
  - uploads/chunked/create-session
  - uploads/chunked/upload-part
related_resources:
  - upload_session
  - upload_part
alias_paths: []
category_id: uploads
subcategory_id: uploads/chunked
is_index: false
id: uploads/chunked/commit-session
type: guide
total_steps: 5
sibling_id: uploads/chunked
parent_id: uploads/chunked
next_page_id: uploads/chunked/folder
previous_page_id: uploads/chunked/create-session
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/uploads/chunked/commit-session.md
fullyTranslated: true
---
# アップロードセッションのコミット

分割アップロードの最後の手順はセッションのコミットです。

ファイルアップロードセッションをコミットするには、コミットするアップロード済みパーツのリストを指定して[`POST /files/upload_sessions/:id/commit`][e_commit]を呼び出します。

<Samples id="post_files_upload_sessions_id_commit">

</Samples>

<Message>

加えて、ファイルの`attributes`を`parts`とともに渡すことで、ファイルに情報を追加できます。詳細については、[`POST /files/content`][e_file] APIを参照してください。

</Message>

## レスポンス

成功すると、APIはHTTP `201 Created`ステータスコードと[`File`][r_file]オブジェクトを返します。

場合によっては、パーツの作成がまだ準備できておらず、代わりに`202 Accepted`ステータスコードが返されることがあります。この場合、アプリケーションは`retry-after`ヘッダを確認し、指定された秒数後にコミットを再試行する必要があります。

[e_commit]: e://post_files_upload_sessions_id_commit

[e_file]: e://post_files_content

[r_file]: r://file
