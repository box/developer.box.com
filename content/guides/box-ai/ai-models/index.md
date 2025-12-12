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

Box supports a variety of AI models, categorized along two dimensions: access level and capability tier.

## Access Levels

### Core Models 

These models are built into Box AI and available by default for all customers. No configuration is required.

### Customer-Enabled Models

These models require activation by Box admins in the Admin Console or a request to Box to enable them. Some models may be subject to additional terms or pricing.

## Capability Tiers

### Standard Models

Designed for high-speed, cost-efficient tasks like basic summarization, Q&A, and structured data extraction from shorter or simpler documents. Ideal for high-volume, low-complexity use cases.

### Premium Models

Offer more advanced reasoning, larger context windows, and better performance on long-form, complex, or domain-specific content. Suitable for sophisticated tasks like multi-step reasoning, understanding large taxonomies, and analyzing lengthy or unstructured documents.

<Message type='notice'>
A model can be both customer-enabled and premium, or core and standard. In other words, access level and capability tiers are independent categorizations (for example, models can be either capability tier regardless of access level). The two categorizations are complementary.
</Message>

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
    <Tile type="gpt" title="openai__gpt_5_2" href="/guides/box-ai/ai-models/openai-gpt-5-2-model-card">
			A multimodal model for coding and agentic tasks across industries.
   		<div>
   			<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
			</div>
		</Tile> 
    <Tile type="gpt" title="openai__gpt_5_1" href="/guides/box-ai/ai-models/openai-gpt-5-1-model-card">
			A multimodal model with enterprise-grade performance and adaptive reasoning.
   		<div>
   			<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
			</div>
		</Tile> 
    <Tile type="gpt" title="openai__gpt_5" href="/guides/box-ai/ai-models/openai-gpt-5-model-card">
			A multimodal model with advanced reasoning and long-context understanding.
   		<div>
      	<strong style="background-color: #e8e8e8">Default for Box AI Advanced Agent for Hubs</strong>
				<strong style="background-color: #e8e8e8">Default for Box AI Advanced Agent for Documents</strong>
				<strong style="background-color: #e8e8e8">Default for Box AI Advanced Agent for Notes Q&A</strong>
   			<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
			</div>
		</Tile>
    <Tile type="gpt" title="openai__gpt_5_mini" href="/guides/box-ai/ai-models/openai-gpt-5-mini-model-card">
			A model designed for well-defined tasks and precise prompts.
   		<div>
        <strong style="background-color: #e8e8e8">Default for Box AI for Hubs</strong>
				<strong style="background-color: #e8e8e8">Default for Box AI for Documents</strong>
				<strong style="background-color: #e8e8e8">Default for Box AI for Notes Q&A</strong> 
   			<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>       
			</div>
		</Tile>
		<Tile type="gpt" title="azure__openai__gpt_4_1" href="/guides/box-ai/ai-models/azure-openai-gpt-4-1-model-card">
			A multimodal model, highly efficient in handling complex, multi-step tasks.
   		<div>
   			<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">FedRAMP High</strong>
        <strong style="background-color: #e1f8ff">DOD IL2</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>     
			</div>
		</Tile>
    <Tile type="gpt" title="azure__openai__gpt_4_1_mini" href="/guides/box-ai/ai-models/azure-openai-gpt-4-1-mini-model-card">
			A multimodal model designed to handle lightweight tasks.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">FedRAMP High</strong>
        <strong style="background-color: #e1f8ff">DOD IL2</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile>
		<Tile type="gpt" title="azure__openai__gpt_4o" href="/guides/box-ai/ai-models/azure-openai-gpt-4o-model-card">
			A multimodal model, highly efficient in handling complex, multi-step tasks.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #fffbf3">Preview</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">FedRAMP High</strong>
        <strong style="background-color: #e1f8ff">DOD IL2</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>        
			</div>
		</Tile>
    		<Tile type="gpt" title="azure__openai__gpt_4o_mini" href="/guides/box-ai/ai-models/azure-openai-gpt-4o-mini-model-card">
			A multimodal model designed to handle lightweight tasks.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">FedRAMP High</strong>
        <strong style="background-color: #e1f8ff">DOD IL2</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>        
			</div>
		</Tile>
    		<Tile type="gpt" title="azure__openai__gpt_4o_mini" href="/guides/box-ai/ai-models/azure-openai-gpt-4o-mini-model-card">
			A multimodal model designed to handle lightweight tasks.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">FedRAMP High</strong>
        <strong style="background-color: #e1f8ff">DOD IL2</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>        
			</div>
		</Tile>
		<Tile type="gpt" title="azure__openai__text_embedding_ada_002" href="/guides/box-ai/ai-models/azure-text-embedding-ada-002-model-card">
			A most capable 2nd generation text embedding model. Skilled in text search, code search, and sentence similarity.
			<div>
				<strong style="background-color: #e8e8e8">Embeddings</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">FedRAMP High</strong>
        <strong style="background-color: #e1f8ff">DOD IL2</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>        
			</div>
		</Tile>
		<Tile type="gemini" title="google__gemini_2_5_pro" href="/guides/box-ai/ai-models/google-gemini-2-5-pro-model-card">
		Gemini multimodal model with a 1 million token context window and advanced reasoning capabilities.
			<div>
        <strong style="background-color: #e8e8e8">Default for Box AI Enhanced Extract</strong>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">FedRAMP High</strong>
        <strong style="background-color: #e1f8ff">DOD IL5</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>        
			</div>
		</Tile>
    <Tile type="gemini" title="google__gemini_2_5_flash" href="/guides/box-ai/ai-models/google-gemini-2-5-flash-model-card">
		Gemini multimodal model offering well-round capabilites, including thinking capabilities.
		  <div>
		    <strong style="background-color: #e8e8e8">Default for Box AI Standard Extract</strong>
        <strong style="background-color: #e8e8e8">Chat</strong>
		    <strong style="background-color: #e1ffe7">Available</strong>
		    <strong style="background-color: #fdfad8">Standard</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">FedRAMP High</strong>
        <strong style="background-color: #e1f8ff">DOD IL5</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>            
		</div>
	</Tile>
	<Tile type="gemini" title="google__gemini_2_0_flash_001" href="/guides/box-ai/ai-models/google-gemini-2-0-flash-001-model-card">
		Gemini multimodal model designed for optimal high-volume, high-frequency tasks at scale.
		<div>
		<strong style="background-color: #e8e8e8">Chat</strong>
		<strong style="background-color: #e1ffe7">Available</strong>
		<strong style="background-color: #fdfad8">Standard</strong>
    <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
    <strong style="background-color: #e1f8ff">FedRAMP High</strong>
    <strong style="background-color: #e1f8ff">DOD IL5</strong>
    <strong style="background-color: #e1f8ff">ISMAP</strong>            
		</div>
	</Tile>
	<Tile type="gemini" title="google__gemini_2_0_flash_lite_preview" href="/guides/box-ai/ai-models/google-gemini-2-0-flash-lite-preview-02-05">
			Gemini multimodal model designed to handle lightweight tasks.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">FedRAMP High</strong>
        <strong style="background-color: #e1f8ff">DOD IL5</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>                
				</div>
		</Tile>
		<Tile type="model" title="aws__claude_4_5_opus" href="/guides/box-ai/ai-models/aws-claude-4-5-opus-model-card">
			A premium model combining maximum intelligence with practical performance.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile>     
		<Tile type="model" title="aws__claude_4_5_sonnet" href="/guides/box-ai/ai-models/aws-claude-4-5-sonnet-model-card">
			A model that excels at complex agents, coding, and autonomous multi-step workflows.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile> 
    <Tile type="model" title="aws__claude_4_5_haiku" href="/guides/box-ai/ai-models/aws-claude-4-5-haiku-model-card">
			A fast model with near-frontier intelligence.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile>    
		<Tile type="model" title="aws__claude_4_sonnet" href="/guides/box-ai/ai-models/aws-claude-4-5-sonnet-model-card">
			A model that brings frontier performance to everyday use cases.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile>    
		<Tile type="model" title="aws__claude_4_opus" href="/guides/box-ai/ai-models/aws-claude-4-opus-model-card">
				A model that excels at coding and complex problem-solving, powering frontier agent products.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile>
		<Tile type="model" title="aws__claude_3_7_sonnet" href="/guides/box-ai/ai-models/aws-claude-3-7-sonnet-model-card">
			A model designed to enhance language understanding and generation tasks
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile>
		<Tile type="model" title="aws__claude_3_5_sonnet" href="/guides/box-ai/ai-models/aws-claude-3-5-sonnet-model-card">
			A model designed to enhance language understanding and generation tasks.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile>
		<Tile type="model" title="aws__claude_3_sonnet" href="/guides/box-ai/ai-models/aws-claude-3-sonnet-model-card">
			A model designed for advanced language tasks, focusing on comprehension and context handling.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile>
		<Tile type="model" title="aws__claude_3_haiku" href="/guides/box-ai/ai-models/aws-claude-3-haiku-model-card">
			A model tailored for various language tasks, including creative writing and conversational AI.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile>
		<Tile type="model" title="aws__titan_text_lite" href="/guides/box-ai/ai-models/aws-titan-text-lite-model-card">
			A model capable of advanced language processing, handling extensive contexts, making it suitable for complex tasks.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
        <strong style="background-color: #e1f8ff">FedRAMP Moderate</strong>
        <strong style="background-color: #e1f8ff">ISMAP</strong>
			</div>
		</Tile>
		<Tile type="model" title="ibm__llama_4_maverick" href="/guides/box-ai/ai-models/ibm-llama-4-maverick-model-card">
			A natively multimodal model that utilizes a mixture-of-experts architecture for optimized resource use.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
			</div>
		</Tile>    
    <Tile type="model" title="ibm__llama_4_scout" href="/guides/box-ai/ai-models/ibm-llama-4-scout-model-card">
			A natively multimodal AI model that enables text and multimodal experiences.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
			</div>
		</Tile>
		<Tile type="model" title="ibm__llama_3_2_90b_vision_instruct" href="/guides/box-ai/ai-models/ibm-llama-3-2-90b-vision-instruct-model-card">
			A model built for document-level understanding, interpretation of charts and graphs, and captioning of images.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #e1ffe7">Available</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
			</div>
		</Tile>
    <Tile type="model" title="ibm__mistral_medium_2505" href="/guides/box-ai/ai-models/ibm-mistral-medium-3-model-card">
			High-performance enterprise model for coding and advanced reasoning.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #fffbf3">Preview</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
			</div>
		</Tile>
    		<Tile type="model" title="ibm__mistral_small_3_1_24b_instruct_2503" href="/guides/box-ai/ai-models/ibm-mistral-small-3-1-model-card">
			Fast open-source multimodal model with low latency.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #fffbf3">Preview</strong>
				<strong style="background-color: #fdfad8">Standard</strong>
			</div>
		</Tile>
</TileGrid>

## Customer-enabled models

Certain Box AI customers may enable additional AI models upon their request and/or otherwise made available to them through their admin console. Use of these models may be subject to additional terms. By selecting a customer-enabled model, customer acknowledges that their data may be processed by additional [subprocessors][subprocessors] of their choice.

<TileGrid rows="2">
    <Tile type="gemini" title="google__gemini_3_pro" href="/guides/box-ai/ai-models/google-gemini-3-pro-model-card">
		A natively multimodal model for complex tasks with a 1 million token context window.
    <div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #f0e2ff">Beta</strong>
				<strong style="background-color: #f8d59b">Premium</strong>       
			</div>
		</Tile>
		<Tile type="model" title="xai__grok_3_beta" href="/guides/box-ai/ai-models/xai-grok-3-beta-model-card">
			A model that excels at enterprise use cases like data extraction, coding, and text summarization.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #f0e2ff">Beta</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
			</div>
		</Tile>
		<Tile type="model" title="xai__grok_3_mini_reasoning_beta" href="/guides/box-ai/ai-models/xai-grok-3-mini-beta-model-card">
			A lightweight model that is great for logic-based tasks that do not require deep domain knowledge.
			<div>
				<strong style="background-color: #e8e8e8">Chat</strong>
				<strong style="background-color: #f0e2ff">Beta</strong>
				<strong style="background-color: #f8d59b">Premium</strong>
			</div>
		</Tile>
		<Tile type="gpt" title="openai__gpt_o3" href="/guides/box-ai/ai-models/openai-gpt-o3-model-card">
			A multimodal model, highly efficient in handling complex, multi-step tasks.
			<div>
				<strong style="background-color: #f0e2ff">Beta</strong>
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
