---
rank: 1
related_guides:
  - box-ai/ask-questions
  - box-ai/generate-text
  - box-ai/ai-agents/get-agent-default-config
alias_paths:
  - guides/box-ai/supported-models
---

# Supported AI models

<Message type="notice">
Box AI API is currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.
</Message>

## Using models

<Message type="tip">
Some of the AI models mentioned in this document support specific Box products. See details in model cards below.
</Message>

You can use the supported AI models:

- get the [default AI agent configuration][agent],
- override the AI agent configuration used in [`POST 2.0/ai/ask`][ask], [`POST 2.0/ai/text_gen`][text-gen], [`POST 2.0/ai/extract`][extract], [`POST 2.0/ai/extract_structured`][extract-structured] endpoints.

When using the `model` parameter your API calls, use the **API Name** visible on each tile and model card.

For example, to get the AI agent configuration for a specific model, use the [model][ai-model] parameter and provide the `openai__gpt_3_5_turbo_16k` API name. Make sure you use **two underscores** after the provider name.

<Message type='notice'>
The list may change depending on the model availability.
**Preview** means you can use the model, but the access to all its features
may be limited.
</Message>

> Note: The tiles are currently a draft and might not be included in the release. The model table is the source of truth.

<TileGrid rows="2">
    <Tile type="gpt" title="azure__openai__gpt_3_5_turbo_16k" href="/guides/box-ai/ai-models/azure-gpt-3-5-turbo-model-card">
      A model primarily designed for chat-related tasks but not exclusively.
      The model demonstrates high accuracy at responding in requested formats.
      <div>
        <strong style="background-color: #e8e8e8">Default for Box AI for Notes</strong>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="gpt" title="azure__openai__gpt_4o_mini" href="/">
      A multimodal model designed to handle lightweight tasks.
      <div>
        <strong style="background-color: #e8e8e8">Default for Box AI for Docs</strong>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="gpt" title="openai__gpt_4o_2024_05_13" href="/">
      A multimodal model, highly efficient in handling complex, multi-step tasks.
      <div>
        <strong style="background-color: #e8e8e8">Default for Box AI for Box Hubs</strong>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="gemini" title="google__gemini_1_5_flash_001" href="/">
      The fastest Gemini multimodal model, built for high volume tasks and latency-sensitive applications.
      <div>
        <strong style="background-color: #e8e8e8">Default for Box AI Extract</strong>
        <strong style="background-color: #fffbf3">Preview</strong>
      </div>
    </Tile>
    <Tile type="gpt" title="azure__openai__text_embedding_ada_002" href="/">
      A most capable 2nd generation text embedding model. Skilled in
      text search, code search, and sentence similarity.
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="model" title="google__textembedding_gecko" href="google-textembedding-gecko/">
      A text embedding model, converting textual data into numerical vectors that machine learning algorithms can process.
      <div>
        <strong style="background-color: #e8e8e8">Chat</strong>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="model" title="google__textembedding_gecko_002" href="/">
       A text embedding model converting textual data into numerical vectors that machine learning algorithms can process.
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="model" title="google__textembedding_gecko_003" href="/">
      A text embedding model converting textual data into numerical vectors that machine learning algorithms can process.
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="gemini" title="google__gemini_1_5_pro_001" href="/">
      A foundation model that performs well at a variety of multimodal tasks.
      <div>
        <strong style="background-color: #fffbf3">Preview</strong>
      </div>
    </Tile>
    <Tile type="palm" title="google__text_unicorn" href="/">
       A model that can handle complex tasks, such as coding, due to the extensive embedded knowledge.
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="palm" title="google__text_bison" href="/">
      A model capable of creating document summaries, answers to questions, and content classification labels.
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="palm" title="google__text_bison_32k" href="/">
      An enhanced text-bison model capable of creating document summaries, answers to questions, and content classification labels.
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="gpt" title="openai__gpt_3_5_turbo_16k" href="/">
      A model primarily designed for chat-related tasks, but not exclusively.
      This model demonstrates high accuracy at responding in requested formats.
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="gpt" title="openai__gpt_4_1106_preview" href="/">
      A most advanced GPT multimodal model equipped with improved instruction following, JSON mode, reproducible outputs, and more.
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="gpt" title="openai__gpt_4_turbo_preview" href="/">
      A large multimodal model that completes complex tasks (like code generation) with high accuracy.
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="gpt" title="openai__text_embedding_ada_002" href="/">
      A most capable 2nd generation text embedding model. Skilled in
      text search, code search, and sentence similarity.
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <!-- <Tile type="model" title="aws__claude_3_haiku" href="/">
      Lorem ipsum
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile>
    <Tile type="model" title="aws__titan_text_lite" href="/">
      Lorem ipsum
      <div>
        <strong style="background-color: #e1ffe7">Available</strong>
      </div>
    </Tile> -->
</TileGrid>

<Message type='notice'>
The list may change depending on the model availability.
**Preview** means you can use the model, but the access to all its features
may be limited.
</Message>

| Provider        | Family |Availability| API Name                                | External documentation                                                  | Capability | 
| --------------- | ------ |-----| --------------------------------------- | ----------------------------------------------------------------------- | ---------- |
| Microsoft Azure | GPT    |available| `azure__openai__gpt_3_5_turbo_16k`      | [Azure OpenAI GPT-3.5 model documentation][azure-ai-model-gpt35]              | Chat       | 
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
[aws-claude]: https://aws.amazon.com/bedrock/claude/
[aws-titan]: https://aws.amazon.com/bedrock/titan/
[extract]: e://post_ai_extract
[extract-structured]: e://post_ai_extract_structured
