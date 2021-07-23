---
rank: 70
alias_paths: []
category_id: downloads
subcategory_id: null
is_index: true
id: downloads
type: guide
total_steps: 6
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: downloads/folder
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/downloads/index.md
fullyTranslated: true
---
# ダウンロード

Box APIを使用すると、ファイルをアプリケーションのサーバーにダウンロードすることも、エンドユーザーがブラウザで直接ダウンロードすることもできます。

## ダウンロードすべきでない場合

ファイルのダウンロードが必ずしも望ましい解決策であるとは限りません。特に、ユーザーがプレビューしたりコメントや注釈を付けたりするためだけにファイルがダウンロードされる場合にこれが当てはまります。このような場合は、Boxの機能をアプリケーションに直接埋め込む方法のいずれかを利用することをお勧めします。

<CTA to="g://embed/">

Boxの埋め込みの詳細を確認する

</CTA>

## アクセスエラー

アプリケーションには、ダウンロードするファイルへのアクセス権限が必要であると理解しておくことが重要です。アプリケーションがJWTまたはアプリトークンを使用して認証される場合、ユーザーはサービスアカウントとして認証されます。このサービスアカウントには、そのアカウントが所有していないファイルへのアクセス権限がありません。

このユーザーがファイルにアクセスできない場合、アプリケーションでは`404 Not Found`エラーが表示されます。

<CTA to="g://authentication/user-types">

各種ユーザータイプの詳細を確認する

</CTA>
