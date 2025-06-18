---
rank: 1
related_guides:
- box-ai/ai-tutorials/ask-questions
- box-ai/ai-tutorials/generate-text
- box-ai/ai-agents/get-agent-default-config
- box-ai/ai-tutorials/default-agent-overrides
alias_paths:
- guides/box-ai/supported-models
---
  
# Supported AI models

There are two types of AI models supported by Box: core and customer-enabled.
The core Box AI models are default in the Box AI service and are available to
all customers.

The customer-enabled models are available for Box admins to enable in the Admin
Console, or to request to have them available. In some instances, these models
can be subject to additional terms.

## Using models

How to use the supported AI models:

- get the [default AI agent configuration][agent],
- override the AI agent configuration used in [`POST 2.0/ai/ask`][ask], [`POST 2.0/ai/text_gen`][text-gen], [`POST 2.0/ai/extract`][extract], [`POST 2.0/ai/extract_structured`][extract-structured] endpoints.

When using the `model` parameter your API calls, use the **API Name** visible on each tile and model card.

For example, to get the AI agent configuration for a specific model, use the [model][ai-model] parameter and provide the `azure__openai__gpt_4o_mini` API name. Make sure you use **two underscores** after the provider name.

<Message type='notice'>
The list may change depending on the model availability.

Models offered in **Beta** mode have not been fully performance-tested at scale and are made available on an as-is basis. You may experience variability in model/output quality, availability, and accuracy.
</Message>

## Core Box AI Models

Box AI is powered by the following AI models. These models are integrated with Box AI to facilitate various use cases while adhering to enterprise grade standards. Below, you’ll find information about each model, including its capabilities, intended applications, and applicable usage guidelines.

<TileGrid rows="2">
	<Tile type="gpt" title="azure__openai__gpt_4_1_mini" href="/guides/box-ai/ai-models/azure-openai-gpt-4-1-mini-model-card">
		A multimodal model designed to handle lightweight tasks.
		<div>
		<strong style="background-color: #BCBCBC">Default for Box AI for Box Hubs</strong>
		<strong style="background-color: #BCBCBC">Default for Box AI for Docs</strong>
		<strong style="background-color: #BCBCBC">Default for Box AI for Box Notes Q&A</strong>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
		</div>
	</Tile>
	<Tile type="gpt" title="azure__openai__gpt_4_1" href="/guides/box-ai/ai-models/azure-openai-gpt-4-1-model-card">
		A multimodal model, highly efficient in handling complex, multi-step tasks.
   	<div>
   	<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #f8d59b">Premium</strong>
		</div>
	</Tile>
	<Tile type="gpt" title="azure__openai__gpt_4o_mini" href="/guides/box-ai/ai-models/azure-openai-gpt-4o-mini-model-card">
		A multimodal model designed to handle lightweight tasks.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
		</div>
	</Tile>
	<Tile type="gpt" title="azure__openai__gpt_4o" href="/guides/box-ai/ai-models/azure-openai-gpt-4o-model-card">
		A multimodal model, highly efficient in handling complex, multi-step tasks.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #fffbf3">Preview</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #f8d59b">Premium</strong>
		</div>
	</Tile>
	<Tile type="gpt" title="azure__openai__text_embedding_ada_002" href="/guides/box-ai/ai-models/azure-text-embedding-ada-002-model-card">
		A most capable 2nd generation text embedding model. Skilled in text search, code search, and sentence similarity.
		<div>
		<strong style="background-color: #BCBCBC">Embeddings</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
		</div>
	</Tile>
	<Tile type="gemini" title="google__gemini_2_5_pro_preview" href="/guides/box-ai/ai-models/google-gemini-2-5-pro-review-model-card">
		Gemini multimodal model designed for optimal for high-volume, high-frequency tasks at scale.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #f8d59b">Premium</strong>
		</div>
	</Tile>
	<Tile type="gemini" title="google__gemini_2_5_flash_preview" href="/guides/box-ai/ai-models/google-gemini-2-5-flash-preview-model-card">
		Gemini multimodal model designed for optimal for high-volume, high-frequency tasks at scale.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
		</div>
	</Tile>
	<Tile type="gemini" title="google__gemini_2_0_flash_001" href="/guides/box-ai/ai-models/google-gemini-2-0-flash-001-model-card">
		Gemini multimodal model designed for optimal for high-volume, high-frequency tasks at scale.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
		</div>
	</Tile>
	<Tile type="gemini" title="google__gemini_2_0_flash_lite_preview" href="/guides/box-ai/ai-models/google-gemini-2-0-flash-lite-preview-02-05">
		Gemini multimodal model designed to handle lightweight tasks.
		<div>
		<strong style="background-color: #BCBCBC">Default for Box AI Extract</strong>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
		</div>
	</Tile>
	<Tile type="model" title="aws__claude_3_haiku" href="/guides/box-ai/ai-models/aws-claude-3-haiku-model-card">
		A model tailored for various language tasks, including creative writing and conversational AI.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
		</div>
	</Tile>
	<Tile type="model" title="aws__claude_3_sonnet" href="/guides/box-ai/ai-models/aws-claude-3-sonnet-model-card">
		A model designed for advanced language tasks, focusing on comprehension and context handling.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #f8d59b">Premium</strong>
		</div>
	</Tile>
	<Tile type="model" title="aws__claude_3_5_sonnet" href="/guides/box-ai/ai-models/aws-claude-3-5-sonnet-model-card">
		A model designed to enhance language understanding and generation tasks.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #f8d59b">Premium</strong>
		</div>
	</Tile>
	<Tile type="model" title="aws__claude_3_7_sonnet" href="/guides/box-ai/ai-models/aws-claude-3-7-sonnet-model-card">
		A model designed to enhance language understanding and generation tasks
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #f8d59b">Premium</strong>
		</div>
	</Tile>
	<Tile type="model" title="aws__claude_4_sonnet" href="/guides/box-ai/ai-models/aws-claude-4-sonnet-model-card">
		A model that brings frontier performance to everyday use cases.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #f8d59b">Premium</strong>
		</div>
	</Tile>
	<Tile type="model" title="aws__claude_4_opus" href="/guides/box-ai/ai-models/aws-claude-4-opus-model-card">
		A model that excels at coding and complex problem-solving, powering frontier agent products.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #f8d59b">Premium</strong>
		</div>
	</Tile>
	<Tile type="model" title="aws__titan_text_lite" href="/guides/box-ai/ai-models/aws-titan-text-lite-model-card">
		A model capable of advanced language processing, handling extensive contexts, making it suitable for complex tasks.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
		</div>
	</Tile>
	<Tile type="model" title="ibm__llama_3_2_90b_vision_instruct" href="/guides/box-ai/ai-models/ibm-llama-3-2-90b-vision-instruct-model-card">
		A model built for document-level understanding, interpretation of charts and graphs, and captioning of images.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
		</div>
	</Tile>
	<Tile type="model" title="ibm__llama_4_scout" href="/guides/box-ai/ai-models/ibm-llama-4-scout-model-card">
		A natively multimodal AI model that enables text and multimodal experiences.
		<div>
		<strong style="background-color: #dde6ed">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
		</div>
	</Tile>
</TileGrid>

## Customer-enabled models

Certain Box AI customers may enable additional AI models upon their request and/or otherwise made available to them through their admin console. Use of these models may be subject to additional terms. By selecting a customer-enabled model, customer acknowledges that their data may be processed by additional [subprocessors][subprocessors] of their choice.

<TileGrid rows="2">
<Tile type="model" title="xai__grok_3_beta" href="/guides/box-ai/ai-models/xai-grok-3-beta-model-card">
A model that excels at enterprise use cases like data extraction, coding, and text summarization.
<div>
<strong style="background-color: #dde6ed">Chat</strong>
<strong style="background-color: #fffbf3">Beta</strong>
<strong style="background-color: #f8d59b">Premium</strong>
</div>
</Tile>
<Tile type="model" title="xai__grok_3_mini_reasoning_beta" href="/guides/box-ai/ai-models/xai-grok-3-mini-beta-model-card">
A lightweight model that is great for logic-based tasks that do not require deep domain knowledge.
<div>
<strong style="background-color: #dde6ed">Chat</strong>
<strong style="background-color: #fffbf3">Beta</strong>
<strong style="background-color: #f8d59b">Premium</strong>
</div>
</Tile>
<Tile type="gpt" title="openai__gpt_o3" href="/guides/box-ai/ai-models/openai-gpt-o3-model-card">
A multimodal model, highly efficient in handling complex, multi-step tasks.
<div>
<strong style="background-color: #fffbf3">Beta</strong>
<strong style="background-color: #f8d59b">Premium</strong>
</div>
</Tile>
</TileGrid>

[ask]: e://post_ai_ask
[text-gen]: e://post_ai_text_gen
[extract]: e://post_ai_extract
[extract-structured]: e://post_ai_extract_structured
[agent]: e://get_ai_agent_default
[azure-ai-mini-4o-model]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=python-secure#gpt-4o-and-gpt-4-turbo
[vertex-ai-model]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#models
[vertex-ai-gemini-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-models
[vertex-text-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text
[azure-ai-embeddings]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#embeddings
[ai-model]: e://get-ai-agent-default#param-model
[aws-claude]: https://aws.amazon.com/bedrock/claude/
[aws-titan]: https://aws.amazon.com/bedrock/titan/
[subprocessors]: https://www.box.com/legal/subprocessors
