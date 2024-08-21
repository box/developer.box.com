---
rank: 1
related_endpoints: []
related_guides: []
related_pages:
  - sdks-and-tools
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/swift-gen
type: guide
total_steps: 9
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/java
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/swift-gen.md
fullyTranslated: true
---
# Swift SDK (Generated) のインストール

Swiftプロジェクトでは、Box Swift SDKを使用してBox APIを呼び出すことができます。

<Message type="notice">

Swift SDKはパブリックベータ段階です。

</Message>

<CTA to="https://github.com/box/box-swift-sdk-gen">

GitHubでSwift SDKの詳細を確認する

</CTA>

## Swift Package Manager

[Swift Package Manager][spm]は、Swiftコードの配布を管理するためのツールです。これは、依存関係のダウンロード、コンパイル、リンクのプロセスを自動化するためにSwiftのビルドシステムと統合されています。

Xcodeプロジェクトに依存関係を追加するには:

1. Xcodeプロジェクトで、\[**File (ファイル)**]、\[**Add Package Dependency (パッケージの依存関係を追加)**] の順に選択します。
2. **プラス**アイコン、\[**Add Package Collection (パッケージコレクションの追加)**] の順にクリックします。
3. リポジトリのURL `https://github.com/box/box-swift-sdk-gen.git`を入力し、\[**Load (読み込む)**] をクリックします。

または、`Package.swift`の依存関係の値に依存関係を追加することもできます。

詳細な手順については、[Swift Package Manager][spm]の公式ドキュメントや[Xcodeのドキュメント][xcode]を参照してください。

## Carthage

Carthageは、依存関係を構築し、バイナリフレームワークを提供する分散型の依存関係マネージャです。

`BoxSdkGen`に依存関係を追加するには:

1. `Cartfile`に次の行を追加します。

```bash
git "https://github.com/box/box-swift-sdk-gen.git"

```

2. 以下を実行します。

```bash
carthage bootstrap --use-xcframeworks

```

3. ビルドされた`xcframework`を**Carthage/Build**からプロジェクトにドラッグします。

詳細な手順については、[Carthageの公式ドキュメント][carthage]を参照してください。

[spm]: https://www.swift.org/documentation/package-manager/

[xcode]: https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app

[carthage]: https://github.com/Carthage/Carthage#adding-frameworks-to-an-application
