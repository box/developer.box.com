---
centered: true
rank: 4
category_id: platform
subcategory_id: null
is_index: false
id: platform/application-types
type: page
total_steps: 9
sibling_id: platform
parent_id: platform
next_page_id: platform/authentication-methods
previous_page_id: platform/user-types
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/platform/application-types.md
fullyTranslated: true
---
# アプリケーションの種類

Boxには、アプリケーション開発におけるさまざまなニーズやユースケースに対応するために各種アプリケーションが用意されています。アプリケーションの種類ごとに機能や認証方法のオプションは異なります。

## カスタムアプリ

[カスタムアプリ][custom_app]は汎用性があるため、ほとんどのユースケースに対応可能です。開発者はカスタムアプリを使用することで、Boxの機能をカスタムインターフェース内に表示できます。Boxでは、コンテンツの閲覧、検索、プレビューなどのタスク向けにカスタマイズ可能なUI Elementsを提供しています。このようなアプリでは、認証用にOAuth 2.0、JWT、クライアント資格情報許可をサポートしています。カスタムアプリは、自分のファイルと他のユーザーのファイル両方へのアクセス、ファイルのアップロードとダウンロード、Box App Centerへの掲載が必要なアプリケーションに最適です。

## アクセス制限付きアプリ

[アクセス制限付きアプリ][limited_app]は、Box Viewを利用したり、別のアプリケーション内でBoxコンテンツをプレビューしたりするために特別に設計されたアプリです。アクセスできるエンドポイントの数は限られており、アプリトークン認証のみがサポートされています。このようなアプリは、ウェブサイトでプロのクリエイターの作品集を紹介する、サポートサイトでユーザーマニュアルを提供する、電子書籍や間取り図用のカスタムドキュメントビューアーを作成するなどのユースケースに適しています。

## Box Skills

[Box Skills][skills] (カスタムスキル) は、Boxにアップロードされたファイルに対してカスタマイズした処理を実行するアプリケーションです。サードパーティの機械学習サービスを使用してファイルから情報を抽出し、それをメタデータとして適用します。このようなスキルはBox管理者がフォルダに対して有効にするので、ファイルがアップロードされるたびにアプリケーションサーバーにイベントが送信されます。カスタムスキルは、ファイルにメタデータを追加したり、認証を処理することなく機械学習サービスと統合したりする場合に最適です。

## ウェブアプリ統合

[ウェブアプリ統合][web_app]を使用すると、サードパーティ製アプリケーションはBoxのユーザーエクスペリエンスとシームレスに統合できます。これにより、ユーザーはサードパーティ製アプリケーションを使用して、Boxに保存されているコンテンツを編集、共有、変更することができます。このような統合は、Boxユーザーに新機能を追加したり、Boxプレビューの \[推奨アプリ] に追加したりできるため、さまざまなコンテンツタイプやファイル拡張子と統合され、ユーザーエクスペリエンスが向上します。

## App Centerでの公開

[Box App Center][app_center]は、BoxユーザーがBoxと連携して使用できるアプリケーションを見つけるためのプラットフォームです。開発者にとって、App Centerへのアプリケーションの掲載は、特に他の企業での使用に適したアプリケーションの場合、新規ユーザーにリーチを広げるのに効果的な手段となります。App Centerでの公開プロセスでは、アプリケーションが本番環境に対応していることとOAuth 2.0認証を利用していることを確認し、開発者コンソールから承認を得るためにそのアプリケーションを送信する必要があります。承認されると、アプリケーションはApp Centerの \[おすすめ]、\[人気]、\[新着] セクションに分類されます。また、必要に応じて公開を取り消すこともできます。

<Next>

次の手順

</Next>

[custom_app]: g://applications/app-types/custom-apps/

[limited_app]: g://applications/app-types/limited-access-apps/

[skills]: g://applications/app-types/custom-skills/

[web_app]: g://applications/web-app-integrations/

[app_center]: g://applications/app-center/
