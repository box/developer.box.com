---
rank: 8
related_guides:
  - box-ai/ask-questions
  - box-ai/generate-text
  - box-ai/get-agent-default-config
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/supported-models
type: guide
total_steps: 5
sibling_id: box-ai
parent_id: box-ai
next_page_id: ''
previous_page_id: box-ai/get-agent-default-config
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/supported-models.md
fullyTranslated: true
---
# サポートされているAIモデル

<Message type="notice">

Box AIのPlatform APIは、現在ベータ版のため、利用可能な機能が変更される可能性があります。Box AIのPlatform APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

この表は、以下の操作に使用できる、サポートされているAIモデルのリストです。

* [AIエージェントのデフォルト構成][agent]を取得する
* [`POST 2.0/ai/ask`][ask]エンドポイントおよび[`POST 2.0/ai/text_gen`][text-gen]エンドポイントで使用されるAIエージェントの構成を上書きする

<Message type="notice">

このリストはモデルの提供状況により変更される可能性があります。**プレビュー**の場合、そのモデルを使用することはできるものの、一部の機能へのアクセスが制限される可能性があります。

</Message>

| プロバイダ           | ファミリ   | モデル                       | 提供状況  |
| --------------- | ------ | ------------------------- | ----- |
| OpenAI          | GPT    | `gpt-3.5-turbo`           | 利用可能  |
| Microsoft Azure | GPT    | `gpt-3.5-turbo`           | 利用可能  |
| GCP Vertex      | Gecko  | `textembedding-gecko`     | 利用可能  |
| GCP Vertex      | Gecko  | `textembedding-gecko@002` | 利用可能  |
| GCP Vertex      | Gecko  | `textembedding-gecko@003` | 利用可能  |
| GCP Vertex      | Gemini | `gemini 1.0 pro`          | プレビュー |
| GCP Vertex      | Gemini | `gemini 1.5 flash`        | プレビュー |
| GCP Vertex      | PaLM   | `text-unicorn`            | 利用可能  |
| GCP Vertex      | PaLM   | `text-bison`              | 利用可能  |

[ask]: e://post_ai_ask

[text-gen]: e://post_ai_text_gen

[agent]: e://get_ai_agent_default
