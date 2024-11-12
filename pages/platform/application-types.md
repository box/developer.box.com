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

[Custom Apps][custom_app] are versatile and can accommodate most use cases. They allow developers to present Box functionalities within a custom interface. Box provides customizable UI Elements for tasks like browsing, searching, and previewing content. These apps support OAuth 2.0, JWT, and Client Credentials Grant for authentication. Custom Apps are ideal for applications that need to access both their own and others' files, upload and download files, and potentially be listed in the Box Integrations.

## アクセス制限付きアプリ

[アクセス制限付きアプリ][limited_app]は、Box Viewを利用したり、別のアプリケーション内でBoxコンテンツをプレビューしたりするために特別に設計されたアプリです。アクセスできるエンドポイントの数は限られており、アプリトークン認証のみがサポートされています。このようなアプリは、ウェブサイトでプロのクリエイターの作品集を紹介する、サポートサイトでユーザーマニュアルを提供する、電子書籍や間取り図用のカスタムドキュメントビューアーを作成するなどのユースケースに適しています。

## Box Skills

[Box Skills][skills] (カスタムスキル) は、Boxにアップロードされたファイルに対してカスタマイズした処理を実行するアプリケーションです。サードパーティの機械学習サービスを使用してファイルから情報を抽出し、それをメタデータとして適用します。このようなスキルはBox管理者がフォルダに対して有効にするので、ファイルがアップロードされるたびにアプリケーションサーバーにイベントが送信されます。カスタムスキルは、ファイルにメタデータを追加したり、認証を処理することなく機械学習サービスと統合したりする場合に最適です。

## ウェブアプリ統合

[Web App Integrations][web_app] allow third-party applications to integrate seamlessly with the Box user experience. They enable users to edit, share, or modify content stored in Box using a third-party application. Such integrations can add new features to Box users and be added to Recommended Web Integrations in Box Preview, enhancing the user experience by integrating with various content types and file extensions.

## Integrations Publication

The [Box Integrations][integrations] is a platform for Box users to discover applications that can be used in conjunction with Box. For developers, listing their application in the Integrations is an effective way to reach new users, particularly for applications suited for use by other enterprises. The process for Integrations publication involves ensuring the app is production-ready, leverages OAuth 2.0 authentication, and submitting it for approval through the Developer Console. Once approved, applications can be featured, most popular, or recently added sections in the Integrations, and they can also be unpublished if necessary.

<Next>

次の手順

</Next>

[custom_app]: g://applications/app-types/custom-apps/

[limited_app]: g://applications/app-types/limited-access-apps/

[skills]: g://applications/app-types/custom-skills/

[web_app]: g://applications/web-app-integrations/

[integrations]: g://applications/integrations/
