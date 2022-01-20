---
rank: 12
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/special-scopes-for-box-ui-elements
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/scopes
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/viewers-and-events
previous_page_id: embed/ui-elements/access
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/scopes.md
fullyTranslated: true
---
# 専用スコープ

Box UI Elementsを使用する際に、開発者の多くが、Boxが定義した[アクセスレベル][acl]とは異なる独自の権限モデルを実装できることに関心を示します。

[ダウンスコープ][downscoping] (トークン交換とも呼ばれます) とは、開発者がアクセストークンに対する権限をより詳細に制限できるBoxのメカニズムです。このメカニズムを使用することで、開発者はBox Platform上に独自の権限モデルを構築できます。

## スコープとUI Element

このプロセスを容易にするために、BoxではAPIスコープの新しいセットを作成しました。これにより、開発者は、UI Elementを利用しているアプリケーションでエンドユーザーが使用できるUIコントロールを制御できます。

Box UI Elementは、これらのスコープによって適用される権限を配慮するよう設計されています。したがって、対応する機能をトークンが許可するかどうかに応じて、UIコントロールが自動的に有効または無効になります。

このほかにも、これらの新しいスコープには利点があります。トークンのスコープは、アプリケーションでエンドユーザーにアクセスを許可する操作の厳密なセットに限定されるため、知識のあるエンドユーザーは、トークンを使用してAPIから直接アクセスすることはできません。このように、アプリケーションの安全性を強化できます。

## スコープの原則

新しいスコープは、以下の原則を念頭に置いて設計されています。

* **すべてのスコープはモジュール化され、厳密には累積される:** 開発者はトークン交換リクエストで複数のスコープを組み合わせて、必要な機能セットを含むトークンを生成できます。また、混乱を避けるために、2つのスコープに同じ権限を設定しないでください。
* **スコープはUI Elementでの特定の操作に直接マップされる:** つまり、このスコープをトークンに追加すると、特定の操作が有効になります。特定のUI Elementで実行できるのは一部の操作のみのため、一部のスコープは意味を持ってこのUI Elementのみに適用される可能性があります。
* **スコープには、対応する操作の実行に必要な最小限の権限セットが含まれている:** アプリケーションのエンドユーザーの一部がAPIに対して直接トークンを使用しても、UI Elementを介して提供するよう意図した機能以外にはアクセスできません。
* **各UI Elementには、そのUI Elementが正常に機能するために必要なすべての権限がカプセル化されている「基本スコープ」が必要:** トークンの権限が少なくなると、UI Elementに対する基本的な操作が機能しません。このスコープを必ずトークン交換リクエストに含める必要があります。

上記の内容を踏まえて、各UI Elementには、以下の2種類のスコープを追加しています。

### 基本スコープ

各UI Elementには「基本スコープ」があります。これにより、そのUI Elementが動作するために必要な最小限の権限のセットが提供されます。そのため、この「基本スコープ」は常にトークン交換リクエストに存在する必要があります。各UI Elementが動作するための基本の権限セットは異なる場合があるため (たとえば、コンテンツアップローダーUI Elementはプレビュー権限を必要としない)、UI Elementがそれぞれ独自の基本スコープを持っている可能性があります。

### 機能のスコープ

基本スコープ以外に、機能レベルのスコープも導入されました。機能スコープを基本スコープと組み合わせる際、UI Element内で追加の機能が有効になります。また、ユーザーには、ダウンスコープされたトークンに追加された機能スコープで規定された操作を実行する権限が付与されます。基本スコープと同様、機能スコープもほとんどがUI Elementごとに異なります。機能スコープは厳密には累積されるため、(ドキュメントに別途記載がない限り) スコープに対するアクセス権のみをユーザーに付与すると、そのユーザーには対応する操作のみを実行する権限が付与されることを想定できます。

基本スコープと機能スコープについて理解したところで、各UI Elementに関するドキュメントを参照してその専用スコープの詳細を確認してください。

<!-- i18n-enable localize-links -->

[acl]: https://support.box.com/hc/ja/articles/360044196413-コラボレータの権限レベルについて

<!-- i18n-disable localize-links -->

[downscoping]: g://authentication/tokens/downscope
