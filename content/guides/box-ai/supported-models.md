---
rank: 12
related_guides:
  - box-ai/ask-questions
  - box-ai/generate-text
  - box-ai/ai-agents/get-agent-default-config
---

# Supported AI models

<Message type="notice">
Box AI API is currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.
</Message>

The table lists the supported AI models you can use to:

- get the [default AI agent configuration][agent],
- override the AI agent configuration used in [`POST 2.0/ai/ask`][ask] and [`POST 2.0/ai/text_gen`][text-gen] endpoints.

When using `model` parameter your API calls, use the **API Name** listed in the table.
For example, to get the AI agent configuration for a specific model, use the [model][ai-model] parameter and provide the `openai__gpt_3_5_turbo_16k` API name.
Make sure you use **two underscores** after the provider name.

<Message type='notice'>
The list may change depending on the model availability.
**Preview** means you can use the model, but the access to all its features
may be limited.
</Message>

| Provider        | Family |Availability| API Name                                | External documentation                                                  | Capability | 
| --------------- | ------ |-----| --------------------------------------- | ----------------------------------------------------------------------- | ---------- |
| Microsoft Azure | GPT    |available| `azure__openai__gpt_3_5_turbo_16k`      | [Azure OpenAI GPT-3.5 model documentation][azure-ai-model-gpt35]              | Chat       | 
| Microsoft Azure | GPT    |available| `azure__openai__gpt_4o_mini`      | [Azure OpenAI GPT-3.5 model documentation][azure-ai-model-gpt40]              | Chat       | 
| Microsoft Azure | GPT    |available| `azure__openai__text_embedding_ada_002` | [Azure OpenAI embeddings models documentation][azure-ai-embeddings]     | Embeddings | 
| GCP Vertex      | Gecko  | available |`google__textembedding_gecko`           | [Google Vertex AI embeddings models documentation][vertex-ai-model]     | Embeddings | 
| GCP Vertex      | Gecko  | available |`google__textembedding_gecko_002`       | [Google Vertex AI embeddings model documentation][vertex-ai-model]      | Embeddings |
| GCP Vertex      | Gecko  | available|`google__textembedding_gecko_003`       | [Google Vertex AI embeddings model documentation][vertex-ai-model]      | Embeddings | 
| GCP Vertex      | Gemini |preview| `google__gemini_1_5_pro_001`            | [Google Vertex AI Gemini models documentation][vertex-ai-gemini-models] | Chat       | 
| GCP Vertex      | Gemini | preview |`google__gemini_1_5_flash_001`          | [Google Vertex AI Gemini models documentation][vertex-ai-gemini-models] | Chat       |
| GCP Vertex      | PaLM   | available |`google__text_unicorn`                  | [Google PaLM 2 for Text model documentation][vertex-text-models]        | Chat       |
| GCP Vertex      | PaLM   | available |`google__text_bison`                    | [Google PaLM 2 for Text model documentation][vertex-text-models]        | Chat       |
| GCP Vertex      | PaLM   |available| `google__text_bison_32k`                | [Google PaLM 2 for Text model documentation][vertex-text-models]        | Chat       |
| OpenAI          | GPT    | available in Beta only|`openai__gpt_3_5_turbo_16k`             | [OpenAI GPT-3.5 model documentation][openai-gpt-3-5-model]              | Chat       |
| OpenAI          | GPT    |available in Beta only| `openai__gpt_4_1106_preview`            | [OpenAI GPT-4 models documentation][openai-gpt-4-models]                | Chat       | 
| OpenAI          | GPT    | available in Beta only|`openai__gpt_4_turbo_preview`           | [OpenAI GPT-4 models documentation][openai-gpt-4-models]                | Chat       | 
| OpenAI          | GPT    | available in Beta only |`openai__gpt_4o_2024_05_13`             | [OpenAI GPT-4 models documentation][openai-gpt-4-models]                | Chat       | 
| OpenAI          | GPT    |available in Beta only| `openai__text_embedding_ada_002`        | [Azure OpenAI embeddings models documentation][openai-embeddings]       | Embeddings | 

[ask]: e://post_ai_ask
[text-gen]: e://post_ai_text_gen
[agent]: e://get_ai_agent_default
[openai-gpt-3-5-model]: https://platform.openai.com/docs/models/gpt-3-5-turbo
[azure-ai-model-gpt35]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#gpt-35
[azure-ai-model-gpt40]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#gpt-4o-and-gpt-4-turbo
[vertex-ai-model]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#models
[vertex-ai-gemini-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-models
[vertex-text-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text
[openai-gpt-4-models]: https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo
[azure-ai-embeddings]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#embeddings
[openai-embeddings]: https://platform.openai.com/docs/models/embeddings
[ai-model]: e://get-ai-agent-default#param-model
