---
rank: 30
related_guides:
  - authentication/app-token
category_id: applications
subcategory_id: null
is_index: false
id: applications/limited-access-apps
type: guide
total_steps: 4
sibling_id: applications
parent_id: applications
next_page_id: applications/app-gallery
previous_page_id: applications/custom-apps
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/limited-access-apps.md
fullyTranslated: true
---
# アクセス制限付きアプリ

アクセス制限付きアプリは、[Box View][bv]を利用したり、別のアプリケーション内でBoxコンテンツをプレビューしたりする場合に使用されます。この種類のアプリケーションで操作できる[エンドポイントの数は限られています][limited]。

## 認証方法

アクセス制限付きアプリでサポートされているのは、アプリトークン認証のみです。

<CTA to="g://authentication/app-token">

アプリトークンの詳細を確認する

</CTA>

## 使用するタイミング

アプリケーションが以下のような場合に、アクセス制限付きアプリを使用すると最も効果的です。

* Box ViewまたはBoxのプレビューサービスだけを使用する
* [限られた数のエンドポイント][limited]だけにアクセスする必要がある

## ユースケース

* プロのクリエイターの作品集をウェブサイトで紹介する
* サポートサイトでユーザーマニュアルや製品仕様ドキュメントを提供する
* カスタムドキュメントビューアーで電子書籍を表示したり間取り図に注釈を付けたりする

## 承認

アクセス制限付きアプリは、使用前に承認が必要になる場合があります。 

<CTA to="g://authorization/limited-access-approval">

アクセス制限付きアプリの承認方法を確認する

</CTA>

[bv]: g://embed/box-view/

[limited]: g://authentication/app-token/endpoints
