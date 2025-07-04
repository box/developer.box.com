---
rank: 6
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
---
# Azure OpenAI GPT-4o

**Azure OpenAI GPT-4o** is a multimodal model designed to handle lightweight tasks.

## Model details

| Item  | Value | Description |
|-----------|----------|----------|
|Model name|**GPT-4o**| The name of the model. | 
| Model category | Premium | The category of the model - standard or premium. |
|API model name|`azure__openai__gpt_4o`| The name of the model that is used in the [Box AI API for model overrides][overrides]. The user must provide this exact name for the API to work. |
|Hosting layer| **Microsoft Azure** | The trusted organization that securely hosts LLM. |
|Model provider|**Microsoft Azure**| The organization that provides this model. |
|Release date|**May 13th, 2024** | The release date for the model.|
|Knowledge cutoff date| **September 2023**| The date after which the model does not get any information updates. |
|Input context window |**128k tokens**| The number of tokens supported by the input context window.| 
|Maximum output tokens |**2k tokens** |The number of tokens that can be generated by the model in a single request.| 
|Empirical throughput| **87.5** | The number of tokens the model can generate per second.|
|Open source | **No** | Specifies if the model's code is available for public use.|

## Additional documentation

For additional information, see [official Azure OpenAI GPT-4o documentation][azure-ai-mini-4o-model].

[azure-ai-mini-4o-model]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=python-secure#gpt-4o-and-gpt-4-turbo
[overrides]: g://box-ai/ai-agents/ai-agent-overrides