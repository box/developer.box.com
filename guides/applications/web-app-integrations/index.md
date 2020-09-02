---
rank: 4
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/web-application-integrations
  - /docs/box-web-application-integrations
category_id: applications
subcategory_id: applications/web-app-integrations
is_index: true
id: applications/web-app-integrations
type: guide
total_steps: 3
sibling_id: applications
parent_id: applications
next_page_id: ''
previous_page_id: applications/web-app-integrations/configure
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/applications/web-app-integrations/index.md
---
# ウェブアプリ統合

Box Platformにより、アプリケーションはBoxウェブアプリ内で直接Boxユーザーに機能を提供できるようになります。ウェブアプリ統合によって、アプリケーションはBox内で使用できるようになり、ユーザーはサードパーティ製アプリケーションを使用してファイルを共有したり編集したりできます。

## 機能

ウェブアプリ統合を使用した場合、ユーザーは、サードパーティ製アプリケーションを使用して、Boxに保存されているドキュメントやフォルダを変更、共有、または編集できます。このアプリケーションでは、さまざまなBoxコンテンツを操作することも、Boxでサポートされるアクションをすべて実行することもできます。また、Boxプレビューに表示される\[[推奨アプリ][recommended-apps]]を介して、Boxユーザーに新機能を提供できます。

<ImageFrame border shadow width="600" center>

![統合の例](../images/recommended-apps-preview.png)

</ImageFrame>

ウェブアプリ統合を有効にすると、アプリケーションを\[推奨アプリ]に追加できるため、ユーザーはそのアプリケーションでファイルを使用できるようになります。統合は、特定のコンテンツタイプとファイル拡張子に制限することができます。

## アプリへのウェブアプリ統合の追加

Boxユーザーがアプリケーションの機能を使用できるようにするには、[OAuth 2.0][oauth2]認証を使用して[開発者コンソール][devconsole]で[カスタムアプリ][custom-app]を作成します。

その後、必要なBox APIの機能をサポートするよう構成し、[Boxアプリギャラリー][app-gallery]からリリースする必要があります。

アプリケーションがアプリギャラリーでリリースされたら、ユーザーはアプリギャラリーにアクセスすることで自分のBoxアカウントにそのアプリケーションを追加し、\[推奨アプリ]からその機能を使用できます。

[app-gallery]: g://applications/app-gallery

[custom-app]: g://applications/custom-apps/oauth2-setup

[oauth2]: g://authentication/oauth2

[devconsole]: https://app.box.com/developers/console

[recommended-apps]: https://community.box.com/t5/Organizing-and-Tracking-Content/Installing-Recommended-Apps-in-your-Enterprise/ta-p/80134
