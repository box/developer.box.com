---
rank: 2
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths: []
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/browser
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/explorer
previous_page_id: embed/ui-elements
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/ui-elements/browser.md
---
# ブラウザのサポート

Box UI Elementsは、以下のブラウザでサポートされています。

* Chrome、Firefox、Safari、およびEdge (直近の2バージョン)
* Internet Explorer 11では限定的サポート(`ES2015/Intl polyfill`が必要)
* Mobile ChromeおよびSafari

## ES2015 `Intl` Polyfill

ほとんどのBox UI Elementsには、`Intl` (ECMAScript Internationalization API)をサポートする`ES2015`対応ブラウザが必要です。アプリケーションでInternet Explorer 11またはSafari 9をサポートする必要がある場合、polyfillライブラリまたは[`polyfill.io`](https://polyfill.io)などのサービスをインクルードして、ユーザーが必要とするpolyfillだけがスマートに読み込まれるようにしてください。Boxは、次の場所にある`core-js`標準ライブラリも提供しています。

[`https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js`][polyfill]

## Promisesのpolyfill

プレビューUI ElementではPromisesを使用します。使用するアプリケーションでInternet Explorer 11をサポートする必要がある場合、好みのpolyfillライブラリまたは[`polyfill.io`](https://polyfill.io)などのサービスをインクルードして、ユーザーが必要とするpolyfillだけが効率良く読み込まれるようにしてください。Boxは、以下にあるBluebird Promiseライブラリのコピーも提供しています。

[`https://cdn01.boxcdn.net/polyfills/bluebird/3.5.1/bluebird.min.js`][bluebird]

[polyfill]: https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js

[bluebird]: https://cdn01.boxcdn.net/polyfills/bluebird/3.5.1/bluebird.min.js
