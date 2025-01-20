---
rank: 1
related_endpoints:
  - post_docgen_templates_v2025.0
  - post_docgen_batches_v2025.0
related_guides:
  - docgen/generate-document
  - docgen/mark-template
  - docgen/docgen-jobs
  - docgen/docgen-templates
category_id: docgen
subcategory_id: null
is_index: false
id: docgen/docgen-getting-started
type: guide
total_steps: 5
sibling_id: docgen
parent_id: docgen
next_page_id: docgen/mark-template
previous_page_id: docgen
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/docgen/docgen-getting-started.md
fullyTranslated: true
---
# Get started with Box Doc Gen

To start generating documents with Box Doc Gen API you will need a custom application and a developer token to authenticate your calls. You also need a Doc Gen template that will serve as an input source for your document.

## Enable Box Doc Gen

To use Box Doc Gen, make sure it is enabled by an admin in the Admin Console. If you are a Box Admin, you will find the necessary information in [Enterprise Settings: Content & Sharing Tab][settings] documentation.

## Create and upload a Box Doc Gen template

To use Box Doc Gen API to generate documents, a Box Doc Gen template must already exist in Box. You have the following options to create a template:

* Install the [Box Doc Gen Template Creator add-in for Microsoft Word][template-addin].
* Create a Box Doc Gen template [using a JSON file][json-template] or manually create [template tags][template-tags].

## Create a custom application

まず、コールの実行に使用するカスタムアプリケーションを作成する必要があります。アプリケーションを作成するには、[カスタムアプリの作成][createapps]に関するガイドに従ってください。

## 開発者トークンの生成

リクエストの送信時にアプリを認証するには、開発者トークンが必要です。

トークンを生成するには、以下の手順を実行します。

1. \[**開発者コンソール**] > \[**マイPlatformアプリ**] に移動します。
2. 右側の**オプションメニュー**ボタン (\[…]) をクリックします。
3. \[**開発者トークンを生成**] を選択します。トークンが自動的に生成され、クリップボードに保存されます。

![トークンの生成](./images/developer-token.png)

アプリを開いて、\[**構成**] > \[**開発者トークン**] に移動してトークンを生成することもできます。

<Message type="notice">

開発者トークンの有効期限は1時間のみです。

</Message>

詳細については、[開発者トークン][token]を参照してください。トークンを生成したら、cURLや他のクライアント ([Postman][postman]など) で使用してコールを実行できます。

[token]: g://authentication/tokens/developer-tokens

[createapps]: g://applications/app-types/custom-apps

[postman]: g://tooling/postman

[settings]: https://support.box.com/hc/en-us/articles/4404822772755-Enterprise-Settings-Content-Sharing-Tab#h_01FYQGK5RW42T07GV985MQ9E9A

[template-addin]: https://support.box.com/hc/en-us/articles/36587535449747-Installing-Box-Doc-Gen-Add-in

[template-tags]: https://support.box.com/hc/en-us/articles/36151895655059-Creating-A-Box-Doc-Gen-Template-Manually

[json-template]: https://support.box.com/hc/en-us/articles/36148012877843-Creating-a-Box-Doc-Gen-Template-using-JSON-data
