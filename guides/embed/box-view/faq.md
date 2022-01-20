---
rank: 5
related_endpoints:
  - get_files_id
related_guides:
  - embed/box-view/setup
  - embed/box-view/upload-file
  - embed/box-view/create-preview
required_guides: []
related_resources: []
alias_paths:
  - /docs/box-view-faqs
  - /docs/box-view-faq
category_id: embed
subcategory_id: embed/box-view
is_index: false
id: embed/box-view/faq
type: guide
total_steps: 5
sibling_id: embed/box-view
parent_id: embed/box-view
next_page_id: ''
previous_page_id: embed/box-view/best-practices
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/box-view/faq.md
fullyTranslated: true
---
# よくある質問

**Box Viewのしくみを教えてください。**

新しいBox Viewを使用するには、[こちら](guide://embed/box-view/setup)のガイドに従ってください。

**埋め込みリンクとUI Elementのうち、どちらのプレビュー方法が用途に適していますか?**

[こちら](guide://embed/box-view/create-preview)のガイドに従い、自分のユースケースに最適な方法を選択してください。

**Box Viewでサポートされているファイルタイプを教えてください。**サポートされているファイルタイプについては、[サポート記事][file_types]を参照してください。

**Box Viewを使用するモバイルでサポートされていないファイルタイプを教えてください。**

* ウェブプレビューでサポートされているドキュメントはすべて、モバイルブラウザ (iOSのSafariとChrome) でサポートされます。
* モバイル向けの注釈の全面的なサポートは、Boxの注釈を活用する[コンテンツプレビューUI Element](guide://embed/ui-elements/preview)を介して利用できます。
* モバイルSDK (iOSおよびAndroid用) では、360度動画/画像、および3Dがサポートされていません。
* モバイルSDK (iOSおよびAndroid用) では、注釈 (読み取りと書き込み両方) がサポートされていません。

**注釈とは何ですか?**

[注釈][annotations]とは、ファイルにレンダリングされるマークアップメモです。開発者は、これを使用して、アプリケーションに埋め込まれたBoxプレビュー内から直接コラボレーション機能を提供できます。

**ファイルのアップロード後にアプリケーションでファイルレプリゼンテーションを取得するにはどうすればよいですか?**

[Boxのレプリゼンテーション](guide://representations)を使用すると、Boxに保存されているファイル用に作成されたデジタルアセットを取得できます。これらのエンドポイントを使用することで、ファイルのPDF、テキスト、画像、およびサムネイルという種類のレプリゼンテーションを取得できます。

**Box ViewをBox以外のストレージプロバイダとともに使用できますか?**

現在、Box Viewと互換性があるのは、Boxに保存されているファイルだけです。表示する必要がなくなったファイルは、Boxから削除できます。ただし、プレビューを生成するには再度ファイルをアップロードする必要があります。そのため、少なくともファイルを表示できるようにしたい間は、Boxにファイルを保存しておくことをお勧めします。

**Box UI Elementを埋め込むときに発生するCORSエラーを修正する方法を教えてください。**

[CORS][cors]エラーを修正するには、アプリケーションの構成ページで、CORSリクエストの作成を許可する各ドメインを追加します。サブドメインを表すためにワイルドカードがサポートされています (`https://*.domain.com`)。詳細については、[CORSガイド](g://security/cors)を参照してください。

**プレビューに表示されるBoxのロゴを置き換えるにはどうすればよいですか?**

[プレビューUI Element](g://embed/ui-elements/logo/)内でのロゴのカスタマイズについては、このガイドを参照してください。

<!-- i18n-enable localize-links -->

[file_types]: https://support.box.com/hc/ja/articles/360043695794-Box-Content-Previewでサポートされるファイル

<!-- i18n-enable localize-links -->

[annotations]: g://embed/ui-elements/annotations

[cors]: g://security/cors
