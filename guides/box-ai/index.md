---
rank: 1
related_endpoints:
  - post_ai_text_gen
  - post_ai_ask
related_guides:
  - box-ai/ai-tutorials/prerequisites
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-tutorials/extract-metadata
category_id: box-ai
subcategory_id: null
is_index: true
id: box-ai
type: guide
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/index.md
fullyTranslated: true
---
# Box AI

Box AI APIを使用すると、Platformアプリケーション内でBox AI機能を利用できます。たとえば、Box AIの質疑応答機能をサードパーティ製アプリケーションに実装したり、自社製品のコンテンツエディタ内で直接コンテンツを生成したりできます。

## Box AI APIの機能

Box AI APIには、アプリケーションのワークフローで大規模言語モデル (LLM) を利用できるように設計された多数の機能が用意されています。

現在は、Box AIに対して、ユーザーの質問への回答、ドキュメントの内容の要約、ドキュメントで使用できるテキストの生成を求めることができます。また、Box AIを使用して、スキーマやメタデータテンプレートなど、指定した入力データからメタデータを抽出することもできます。

[Box AI for UI Elements][boxaielement]機能を使用すると、アプリにBox AIを組み込むことができます。

### Box AIに質問する

Boxに保存しているドキュメントで作業している間など、Box AI APIを使用して、そのコンテンツについて質問することができます。

Box AIは、指定されたファイルに基づいて、コンテンツに関する質問に回答したり、要約を生成したりできます。

![ドキュメント内の \[Box AI\]](./images/box-ai-in-doc.png)

ユーザーがドキュメントでの作業中にBox AIを操作する方法の例については、[Box AI for Documents][boxaidocs]を参照してください。

### Box AIを使用してテキストを生成する

Box AI APIを使用すると、テキストをゼロから生成したり、Box Note内の既存のテキストから生成したり、プレビュー内の特定のドキュメントに基づいて生成したりすることができます。たとえば、プレビュー表示している記事に基づいてテンプレートやアジェンダを作成するようBox AIに求めることができます。

また、もう1つの例として、Box Notesでは、テキストの生成や既存メモのコンテンツのリファインにBox AIを使用します。詳細については、[Box AI for Notes][boxainotes]を参照してください。

![Notes内の \[Box AI\]](./images/box-ai-in-notes.png)

### メタデータの抽出

[`POST /2.0/ai/extract`][extract]および[`POST /2.0/ai/extract_structured`][extract-structured]エンドポイントを使用すると、指定した入力からデータを抽出し、キー/値ペアの形式で返すことができます。

* Use the `extract_structured` endpoint to extract data according to a pre-defined structure obtained from the metadata template, or a set of fields. Use it for shorter documents
* Use the Enhanced Extract Agent for long, complex documents
* `extract`エンドポイントは、プロンプトを使用してファイルからデータを抽出する場合に使用します。プロンプトには、JSONやXMLなどの形式の文字列化バージョン、またはプレーンテキストを含めることができます。

#### Enhanced Extract Agent

The Enhanced Extract Agent is designed to extract key-value pairs from complex documents. It converts the unstructured content into metadata for easier discovery and search.

You can [use the agent][eea-tutorial] through the Box AI API and turn unstructured data into structured output to use in production databases, third party systems, or analytics.

The Enhanced Extract Agent uses Gemini 2.5 Pro to provide a chain-of-thought reasoning and returns both the extracted values and a reasoning behind its answer.

### 構成の上書き

デフォルトのエージェント構成を上書きし、独自のカスタム設定を導入するには、Box AI APIリクエストで利用可能な`ai_agent`パラメータを使用できます。

詳細については、[AIエージェントのデフォルト構成][agent-default]を参照してください。

### Box AI for UI Elements

Box AI for UI Elementsはコンテンツプレビューで利用可能で、これにより、Platformアプリケーション内で直接ドキュメントについて質問することができます。[Box AI for UI Elements][boxaielement]を使用してプロジェクトにBox AI機能を埋め込む方法をご確認ください。

<!--alex ignore-->

## サポートされている言語

Box AIは、英語、日本語、フランス語、スペイン語など、多くの言語で使用できます。ただし、基になるモデルは、主に英語のドキュメントでトレーニングされています。つまり、他の言語のプロンプトで返される回答は、英語の場合よりも低品質になる可能性があります。テストでは、要約、文法やつづりの確認、質問への回答について満足のいく結果が示されていますが、結果は英語の場合と異なる可能性があることに留意してください。

<Message type="tip">

言語を日本語に切り替えると、より適切な結果が得られます。

</Message>

## \[ユーザーアクティビティ] レポート (UAR) でのBox AI API

[\[ユーザーアクティビティ\] レポート][uar]には、ユーザーがBoxで実行している操作の概要が示されます。Box管理者は、このレポートを使用して、所定の期間内にユーザーが行った操作を確認できますが、これにはBox AIに対する操作も含まれます。レポートには、Box管理者がBox AIの詳細を取得するために選択できる以下の操作が用意されています。

* **AIクエリ**: ユーザーがBox AIに対してクエリを実行し、レスポンスを受け取りました。
* **AIクエリの失敗**: ユーザーがBox AIに対してクエリを実行したが、レスポンスがありませんでした。

[boxainotes]: https://support.box.com/hc/en-us/articles/22198577315347-Box-AI-for-Notes

[boxaidocs]: https://support.box.com/hc/en-us/articles/22158484213267-Box-AI-for-Documents

[boxaielement]: g://embed/ui-elements/preview#box-ai-ui-element

[uar]: https://support.box.com/hc/en-us/articles/4415012490387-User-Activity-Report

[agent-default]: g://box-ai/ai-agents/get-agent-default-config

[extract]: e://post_ai_extract

[extract-structured]: e://post_ai_extract_structured

[eea-tutorial]: g://box-ai/ai-tutorials/extract-metadata-structured#
