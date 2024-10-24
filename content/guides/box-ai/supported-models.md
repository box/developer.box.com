---
rank: 12
related_guides:
  - box-ai/ask-questions
  - box-ai/generate-text
  - box-ai/ai-agents/get-agent-default-config
---

# Supported AI models

The table lists the supported AI models you can use to:

- get the [default AI agent configuration][agent],
- override the AI agent configuration used in the Box AI API endpoints.

When using `model` parameter your API calls, use the **API Name** listed in the table.
For example, to get the AI agent configuration for a specific model, use the [model][ai-model] parameter and provide the `openai__gpt_3_5_turbo_16k` API name.
Make sure you use **two underscores** after the provider name.

<Message type='notice'>
The list may change depending on the model availability.
Models offered in **Preview** mode have not been fully performance-tested at scale and are made available on an as-is basis. You may experience variability in model/output quality, availability, and accuracy
</Message>

| Provider        | Family |Availability| API Name                                | External documentation                                                  | Capability | 
| --------------- | ------ |-----| --------------------------------------- | ----------------------------------------------------------------------- | ---------- |
| Microsoft Azure | GPT    |available| `azure__openai__gpt_4o_mini`      | [Azure OpenAI GPT-4o-mini model documentation][azure-ai-model-gpt40]              | Chat       | 
| Microsoft Azure | GPT    |available| `azure__openai__text_embedding_ada_002` | [Azure OpenAI embeddings models documentation][azure-ai-embeddings]     | Embeddings | 
| GCP Vertex      | Gecko  | available |`google__textembedding_gecko`           | [Google Vertex AI embeddings models documentation][vertex-ai-model]     | Embeddings | 
| GCP Vertex      | Gecko  | available |`google__textembedding_gecko_002`       | [Google Vertex AI embeddings model documentation][vertex-ai-model]      | Embeddings |
| GCP Vertex      | Gecko  | available|`google__textembedding_gecko_003`       | [Google Vertex AI embeddings model documentation][vertex-ai-model]      | Embeddings | 
| GCP Vertex      | Gemini |preview| `google__gemini_1_5_pro_001`            | [Google Vertex AI Gemini models documentation][vertex-ai-gemini-models] | Chat       | 
| GCP Vertex      | Gemini | preview |`google__gemini_1_5_flash_001`          | [Google Vertex AI Gemini models documentation][vertex-ai-gemini-models] | Chat       |
| GCP Vertex      | PaLM   | available |`google__text_unicorn`                  | [Google PaLM 2 for Text model documentation][vertex-text-models]        | Chat       |
| GCP Vertex      | PaLM   | available |`google__text_bison`                    | [Google PaLM 2 for Text model documentation][vertex-text-models]        | Chat       |
| GCP Vertex      | PaLM   |available| `google__text_bison_32k`                | [Google PaLM 2 for Text model documentation][vertex-text-models]        | Chat       |
| AWS          | Claude    |preview | `aws__claude_3_haiku`        | [Amazon Claude model documentation][aws-claude]       | Chat | 
| AWS          | Claude    |preview | `aws__claude_3_sonnet`        | [Amazon Claude model documentation][aws-claude]       | Chat |
| AWS          | Claude    |preview | `aws__claude_3_5_sonnet`        | [Amazon Claude model documentation][aws-claude]       | Chat | 
| AWS          | Titan    |preview | `aws__titan_text_lite`        | [Amazon Titan model documentation][aws-titan]       | Chat | 

[ask]: e://post_ai_ask
[text-gen]: e://post_ai_text_gen
[agent]: e://get_ai_agent_default
[azure-ai-model-gpt40]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#gpt-4o-and-gpt-4-turbo
[vertex-ai-model]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#models
[vertex-ai-gemini-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-models
[vertex-text-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text
[openai-gpt-4-models]: https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo
[azure-ai-embeddings]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#embeddings
[openai-embeddings]: https://platform.openai.com/docs/models/embeddings
[ai-model]: e://get-ai-agent-default#param-model
[aws-claude]: https://aws.amazon.com/bedrock/claude/
[aws-titan]: https://aws.amazon.com/bedrock/titan/
