---
rank: 2
related_endpoints: []
related_guides: []
related_pages: []
required_guides:
  - applications/custom-skills
related_resources:
  - skill_invocation
alias_paths: []
category_id: skills
subcategory_id: skills/handle
is_index: false
id: skills/handle/payload
type: guide
total_steps: 2
sibling_id: skills/handle
parent_id: skills/handle
next_page_id: skills/handle/metadata
previous_page_id: skills/handle
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/skills/handle/payload.md
fullyTranslated: true
---
# Box Skillsペイロード

Skillsアプリが監視するフォルダに新しいファイルがアップロード、コピー、または移動されると、アプリケーションの設定および認証中に指定された呼び出しURLに、Boxからイベントペイロードが送られます。

このイベントペイロードには、アップロードされたファイルのコンテンツを読み込んで機械学習システムなどの処理システムに送信し、処理システムの完了後にファイルにメタデータを書き戻すために必要な情報がすべて含まれています。

<CTA to="r://skill_invocation">

ペイロードの例とリファレンス

</CTA>

## アクセストークン

各Skillsペイロードには、イベントをトリガーしたファイルへのアクセスに使用できる一連のアクセストークンが含まれています。

```json
{
  ...
  "token": {
    "write": {
      "access_token": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
      "expires_in": 1540924150,
      "restricted_to": ...,
      "token_type": "bearer"
    },
    "read": {
      "access_token": "Z3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQc3FIOG9vSGV4VHo4QzAyg5T1JvNnJo",
      "expires_in": 1540924150,
      "restricted_to": ...,
      "token_type": "bearer"
    }
  },
  ...
}
```

`token.write.access_token`を使用すると、ファイルにメタデータを書き込むことができるのに対し、`token.read.access_token`はファイルコンテンツの読み取りのみに使用できます。読み取り専用トークンは、後で他のサービスと共有できるファイルのダウンロードURLを作成する際に役立ちます。

## ダウンロード可能ファイルのURL

多くの機械学習サービスでは、ファイルのURLを処理するためのそのサービスに直接渡すことがサポートされています。BoxファイルのダウンロードURLを作成するには、イベントペイロードの`token.read.access_token`および`source.id`を解析する必要があります。

```json
{
  ...
  "source": {
    "type": "file",
    "id": 12345,
  },
  "token": {
    ...
    "read": {
      "access_token": "Z3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQc3FIOG9vSGV4VHo4QzAyg5T1JvNnJo",
      "expires_in": 1540924150,
      "restricted_to": ...,
      "token_type": "bearer"
    }
  },
  ...
}
```

ファイルのダウンロードURLは、次のように作成できます。

```curl
https://api.box.com/2.0/files/{source.id}/content?access_token={token.read.access_token}
```

この例では、このURLは次のようになります。

```curl
https://api.box.com/2.0/files/12345/content?access_token=Z3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQc3FIOG9vSGV4VHo4QzAyg5T1JvNnJo
```
