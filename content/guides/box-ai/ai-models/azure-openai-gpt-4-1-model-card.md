---
rank: 4
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
---
# Azure OpenAI GPT-4.1

**Azure OpenAI GPT-4.1** is a multimodal model, highly efficient in handling complex, multi-step tasks.

## Model details

| Item  | Value | Description |
|-----------|----------|----------|
|Model name|**GPT-4.1**| The name of the model. | 
| Model category | Premium | The category of the model - standard or premium. |
|API model name|`azure__openai__gpt_4_1`| The name of the model that is used in the [Box AI API for model overrides][overrides]. The user must provide this exact name for the API to work. |
|Hosting layer| **Microsoft Azure** | The trusted organization that securely hosts LLM. |
|Model provider|**Microsoft Azure**| The organization that provides this model. |
|Release date|**April 14th, 2025** | The release date for the model.|
|Knowledge cutoff date| **May 2024**| The date after which the model does not get any information updates. |
|Input context window |**1m tokens**| The number of tokens supported by the input context window.| 
|Maximum output tokens |**32k tokens** |The number of tokens that can be generated by the model in a single request.| 
|Empirical throughput| **87.5** | The number of tokens the model can generate per second.|
|Open source | **No** | Specifies if the model's code is available for public use.|

## Additional documentation

For additional information, see [official Azure OpenAI GPT-4o documentation][azure-ai-mini-4o-model].

[azure-ai-mini-4o-model]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=python-secure#gpt-4o-and-gpt-4-turbo
[overrides]: g://box-ai/ai-agents/ai-agent-overrides