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
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/box-view/faq.md
---
# FAQ

## 全般

### Box Viewについて教えてください

Box Viewとは、お客様と開発者がカスタムのウェブアプリやモバイルアプリでドキュメント、画像、動画、360度画像や動画、3Dファイルなどに対応する忠実度の高いインタラクティブなビューアーを表示するできるようにするAPIサービスです。Box Viewを使用すると、お客様や開発者は独自のビューアーを構築しなくても、アプリ内でほぼすべての種類のファイルを表示できます。

## 製品

### 新しいBox Viewはどのように動作しますか

新しいBox Viewを使用するには、[こちら](guide://embed/box-view/setup)のガイドに従ってください。

### 埋め込みリンクとUI Elementのうち、どちらのプレビュー方法が用途に適していますか

[こちら](guide://embed/box-view/create-preview)のガイドに従い、自分のユースケースに最適な方法を選択してください。

### 新しいBox Viewでサポートされているファイルタイプを教えてください

[ここ][file_types]をクリックすると、サポートされているファイルタイプがすべて表示されます。

### モバイルで使用する場合に新しいBox Viewでサポートされていないファイルタイプを教えてください

* ウェブプレビューでサポートされているドキュメントはすべて、モバイルブラウザ(iOSのSafariとChrome)でサポートされます。
* モバイル向けの注釈の全面的なサポートは、Boxの注釈を活用する[コンテンツプレビューUI Element](guide://embed/ui-elements/preview)を介して利用できます。
* モバイルSDK(iOSおよびAndroid用)では、360度動画/画像、および3Dがサポートされていません。
* モバイルSDK(iOSおよびAndroid用)では、注釈(読み取りと書き込み両方)がサポートされていません。

### 注釈とは何ですか

注釈とは、Box Viewから生成されるファイルレンダリングに関するマークアップです。注釈を使用すると、エンドユーザーがファイルのレンダリングでコラボレーションできます。

### ファイルのアップロード後にアプリケーションでファイルレプリゼンテーションを取得するにはどうすればよいですか

[Boxのレプリゼンテーション](guide://representations)を使用すると、Boxに保存されているファイル用に作成されたデジタルアセットを取得できます。これらのエンドポイントを使用することで、ファイルのPDF、テキスト、画像、およびサムネイルという種類のレプリゼンテーションを取得できます。

### 新しいBox ViewをBox以外のストレージプロバイダとともに使用できますか

現在、新しいBox Viewは、Boxに保存されているファイルとだけ互換性があります。表示する必要がなくなったファイルは、Boxから削除できます。ただし、プレビューを生成するには再度ファイルをアップロードする必要があります。そのため、少なくともファイルを表示できるようにしたい間は、Boxにファイルを保存しておくことをお勧めします。

### Box UI Elementを埋め込むときに発生するCORSエラーの修正方法を教えてください

CORSエラーを修正するには、CORSリクエストを送信できるようにしたい各ドメインを許可する必要があります。ドメインは、Box開発者コンソールのアプリケーションの構成ページで許可できます。UI Elementを使用したいサブドメインが多数ある場合は、サブドメインにワイルドカード(`https://*.domain.com`)を使用できます。詳細については、[CORSガイド](guide://best-practices/cors)を参照してください。

### プレビューに表示されるBoxのロゴは置き換えるにはどうすればよいですか

[プレビューUI Element](guide://embed/ui-elements/logo/)内でのロゴのカスタマイズについては、このガイドを参照してください。

## 価格

### 新しいBox Viewの価格はどうなりますか

新しいBox Viewの価格は、1つのアプリケーション内でファイルをアップロード、変換、および表示するために必要になるAPI呼び出しの数、合計ストレージ、および帯域幅に基づいて決定されます。変換は、ファイルがAPI経由でBoxにアップロードされ、アプリで表示するための準備が行われるときに発生します。変換は、1ファイルにつき1回だけ発生します。

お客様には、それぞれのユースケースに合わせて適切なレベルのAPI呼び出し、ストレージ、および帯域幅のライセンスが付与されます。毎月アップロードおよび変換されるファイルの数としてお客様が想定している値に基づいて、リソースの割り当てが見積もられます。お客様がより多くのAPI呼び出し、ストレージ、または帯域幅を購入すると、ボリュームディスカウントが提供されます。お客様のユースケースによっては、必要に応じて追加リソースを購入することもできます。

たとえば、お客様が、毎月25万部のドキュメントを変換すると想定している場合、125万回のAPI呼び出し、110GBの合計ストレージ、および1.637TBの帯域幅が毎月必要になります。この計算は、API使用状況の一般的なパターンに基づいています。変換されるファイルの数を想定すると、見積りを生成できます。

入力 - 推定される月間の変換数: 250,000

月間のAPI呼び出し数: 1,250,000、合計ストレージ(TB): 0.110、月間の帯域幅(TB): 1.637、価格合計: 3,297ドル/月

[file_types]: https://community.box.com/t5/Migrating-and-Previewing-Content/Viewing-Different-File-Types-Supported-in-Box-Content-Preview/ta-p/327
