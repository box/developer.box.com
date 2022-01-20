---
rank: 1
hide: true
category_id: internal
subcategory_id: internal/ui-elements
is_index: true
id: internal/ui-elements
type: guide
total_steps: 8
sibling_id: internal
parent_id: internal
next_page_id: ''
previous_page_id: internal/ui-elements/cta
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal/ui-elements/index.md
fullyTranslated: true
---
<!-- does not need translation -->

# ドキュメントUI

以下に、これらのドキュメントでサポートされているカスタムReactコンポーネントの概要を示します。

## 技術的実装

これらのカスタムUI ElementはすべてHTMLに似ていますが、実際はすべてプレーンなReactコンポーネントです。

Box開発者向けドキュメントフレームワーク内では、コンポーネントが名前付きで登録されており、マークダウンが解析されると、これらのコンポーネントのコンテンツがそのReactコンポーネントに渡されます。認識されるのは、登録済みのコンポーネントのみです。

## 一般的な問題

マークダウンパーサーには既知の問題がいくつかあります。たとえば、マークダウンパーサーではコンポーネントに終了タグ (`<Foo></Foo>`) があることが求められるのに対し、自己終了タグ (`<Foo />`) は許可されていません。作業が簡単になるように、ビルドシステムでは自己終了タグを適切な形式に変換しようとします。

この他にも既知の問題があり、ビルドプロセスで解決されています。今後レンダリングの問題が発生した場合は、Reactサイト内ではなくマークダウンコンパイラで解決してください。
