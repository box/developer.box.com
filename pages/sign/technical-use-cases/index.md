---
centered: true
rank: 20
category_id: sign
subcategory_id: sign/20-technical-use-cases
is_index: true
id: sign/technical-use-cases
type: page
total_steps: 3
sibling_id: sign
parent_id: sign
next_page_id: ''
previous_page_id: sign/technical-use-cases/sign-structured-docs
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sign/20-technical-use-cases/index.md
fullyTranslated: true
---
# 技術的なユースケース

アプリケーションでは、多くのソースからのさまざまなドキュメントに署名することになります。このようなドキュメントをBox Signサービスに認識させるためにアプリケーションでどのように処理すればよいのでしょうか。

署名リクエストには、従来の署名 (名前、日付、イニシャルなど) 以外に、複数の要件 (入力データ) を設定することができます。こうした入力データは署名プロパティと呼ばれます。Box Signサービスでは、これらの入力データをドキュメント内のどこに配置し、どのように認識するかを把握しておく必要があります。

最初の手順として、Box Signサービスが署名プロパティを認識するために必要な情報をドキュメントに含めるかどうかを検討します。

含めない場合、[ドキュメントは構造化されていない][unstructured-docs]ので、署名リクエストを送信する前に準備する必要があります。これはドキュメントの準備と呼ばれ、Box Signサービスによって自動的に作成される追加の手順です。

Box Signサービスが署名プロパティを認識するために必要な情報をすでに含んでいるドキュメントは、他に2種類あります。1つは、Boxアプリケーションで管理される[Signテンプレート][sign-templates]で、もう1つは[構造化されたドキュメント][sign-structured-docs]です。構造化されたドキュメントは、署名プロパティを表す特定のタグを含む、動的に生成されるドキュメントです。

<Next>

非構造化ドキュメントへの署名

</Next>

[unstructured-docs]: page://sign/technical-use-cases/sign-unstructured-docs

[sign-templates]: page://sign/technical-use-cases/sign-template

[sign-structured-docs]: page://sign/technical-use-cases/sign-structured-docs
