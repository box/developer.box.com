---
rank: 4
related_endpoints:
  - get_authorize
related_guides:
  - authentication/app-token/app-token-setup
required_guides: []
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/app-token
is_index: false
id: authentication/app-token/endpoints
type: guide
total_steps: 5
sibling_id: authentication/app-token
parent_id: authentication/app-token
next_page_id: authentication/app-token
previous_page_id: authentication/app-token/app-token-setup
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/app-token/endpoints.md
fullyTranslated: true
---
# サポートされているエンドポイント

アプリトークン認証で現在サポートされているBox APIは少数です。

| エンドポイント                                 | パス                       |
| --------------------------------------- | ------------------------ |
| [フォルダを作成](e://post-folders)             | `POST /folders`          |
| [ファイルをアップロード](e://post-files-content)   | `POST /files/content`    |
| [ファイルをダウンロード](e://get-files-id-content) | `GET /files/:id/content` |
| [ファイルを削除](e://delete-files-id)          | `DELETE /files/:id`      |
| [埋め込みリンクを取得](e://get-files-id)          | `GET /files/:id`         |
