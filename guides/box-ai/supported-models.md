---
rank: 12
related_guides:
  - box-ai/ask-questions
  - box-ai/generate-text
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/supported-models
type: guide
total_steps: 6
sibling_id: box-ai
parent_id: box-ai
next_page_id: ''
previous_page_id: box-ai/extract-metadata-structured
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/supported-models.md
fullyTranslated: true
---
# サポートされているAIモデル

<Message type="notice">

Box AI API is currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.

</Message>

次の操作に使用できる、サポートされているAIモデルのリストを表に示します。

* [AIエージェントのデフォルト構成][agent]を取得する
* [`POST 2.0/ai/ask`][ask]エンドポイントおよび[`POST 2.0/ai/text_gen`][text-gen]エンドポイントで使用されるAIエージェントの構成を上書きする

APIコールで`model`パラメータを使用する際は、表に示されている**API名**を使用します。たとえば、特定のモデルのAIエージェントの構成を取得するには、[model][ai-model]パラメータを使用して、API名`openai__gpt_3_5_turbo_16k`を指定します。プロバイダ名の後に**2つのアンダースコア**を使用していることを確認してください。

<Message type="notice">

このリストはモデルの提供状況により変更される可能性があります。**プレビュー**の場合、そのモデルを使用することはできるものの、一部の機能へのアクセスが制限される可能性があります。

</Message>

| プロバイダ           | ファミリ   | 提供状況        | API名                                    | 外部のドキュメント                                                       | 機能   |
| --------------- | ------ | ----------- | --------------------------------------- | --------------------------------------------------------------- | ---- |
| Microsoft Azure | GPT    | 利用可能        | `azure__openai__gpt_3_5_turbo_16k`      | [Azure OpenAI GPT-3.5モデルに関するドキュメント][azure-ai-model]             | チャット |
| Microsoft Azure | GPT    | 利用可能        | `azure__openai__text_embedding_ada_002` | [Azure OpenAIの埋め込みモデルに関するドキュメント][azure-ai-embeddings]           | 埋め込み |
| GCP Vertex      | Gecko  | 利用可能        | `google__textembedding_gecko`           | [Google Vertex AIの埋め込みモデルに関するドキュメント][vertex-ai-model]           | 埋め込み |
| GCP Vertex      | Gecko  | 利用可能        | `google__textembedding_gecko_002`       | [Google Vertex AIの埋め込みモデルに関するドキュメント][vertex-ai-model]           | 埋め込み |
| GCP Vertex      | Gecko  | 利用可能        | `google__textembedding_gecko_003`       | [Google Vertex AIの埋め込みモデルに関するドキュメント][vertex-ai-model]           | 埋め込み |
| GCP Vertex      | Gemini | プレビュー       | `google__gemini_1_5_pro_001`            | [Google Vertex AIのGeminiモデルに関するドキュメント][vertex-ai-gemini-models] | チャット |
| GCP Vertex      | Gemini | プレビュー       | `google__gemini_1_5_flash_001`          | [Google Vertex AIのGeminiモデルに関するドキュメント][vertex-ai-gemini-models] | チャット |
| GCP Vertex      | PaLM   | 利用可能        | `google__text_unicorn`                  | [Googleのテキスト用PaLM 2モデルに関するドキュメント][vertex-text-models]           | チャット |
| GCP Vertex      | PaLM   | 利用可能        | `google__text_bison`                    | [Googleのテキスト用PaLM 2モデルに関するドキュメント][vertex-text-models]           | チャット |
| GCP Vertex      | PaLM   | 利用可能        | `google__text_bison_32k`                | [Googleのテキスト用PaLM 2モデルに関するドキュメント][vertex-text-models]           | チャット |
| OpenAI          | GPT    | ベータ版でのみ利用可能 | `openai__gpt_3_5_turbo_16k`             | [OpenAI GPT-3.5モデルに関するドキュメント][openai-gpt-3-5-model]             | チャット |
| OpenAI          | GPT    | ベータ版でのみ利用可能 | `openai__gpt_4_1106_preview`            | [OpenAI GPT-4モデルに関するドキュメント][openai-gpt-4-models]                | チャット |
| OpenAI          | GPT    | ベータ版でのみ利用可能 | `openai__gpt_4_turbo_preview`           | [OpenAI GPT-4モデルに関するドキュメント][openai-gpt-4-models]                | チャット |
| OpenAI          | GPT    | ベータ版でのみ利用可能 | `openai__gpt_4o_2024_05_13`             | [OpenAI GPT-4モデルに関するドキュメント][openai-gpt-4-models]                | チャット |
| OpenAI          | GPT    | ベータ版でのみ利用可能 | `openai__text_embedding_ada_002`        | [Azure OpenAIの埋め込みモデルに関するドキュメント][openai-embeddings]             | 埋め込み |

[ask]: e://post_ai_ask

[text-gen]: e://post_ai_text_gen

[agent]: e://get_ai_agent_default

[openai-gpt-3-5-model]: https://platform.openai.com/docs/models/gpt-3-5-turbo

[azure-ai-model]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#gpt-35

[vertex-ai-model]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#models

[vertex-ai-gemini-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-models

[vertex-text-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text

[openai-gpt-4-models]: https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo

[azure-ai-embeddings]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#embeddings

[openai-embeddings]: https://platform.openai.com/docs/models/embeddings

[ai-model]: e://get-ai-agent-default#param-model
