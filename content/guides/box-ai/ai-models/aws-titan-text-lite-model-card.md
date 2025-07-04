---
rank: 34
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
---
# AWS Titan Text Lite

**AWS Titan Text Lite** model is designed for advanced language processing, capable of handling extensive contexts, making it suitable for complex tasks,
although the model itself is lightweight.

## Model details

| Item  | Value | Description |
|-----------|----------|----------|
|Model name|**AWS Titan Text Lite**| The name of the model. |
| Model category | Standard | The category of the model - standard or premium. |
|API model name|`aws__titan_text_lite`| The name of the model that is used in the [Box AI API for model overrides][overrides]. The user must provide this exact name for the API to work. |
|Hosting layer|  **Amazon Web Services (AWS)** | The trusted organization that securely hosts LLM. |
|Model provider|**Anthropic**| The organization that provides this model. |
|Release date| **September 2024** | The release date for the model.|
|Knowledge cutoff date| **Not provided**| The date after which the model does not get any information updates. |
|Input context window |**128k tokens**| The number of tokens supported by the input context window.| 
|Maximum output tokens | **4k tokens** |The number of tokens that can be generated by the model in a single request.| 
|Empirical throughput| **Not specified** | The number of tokens the model can generate per second.|
|Open source | **No** | Specifies if the model's code is available for public use.|

## Additional documentation

For additional information, see [official AWS Titan documentation][aws-titan].

[aws-titan]: https://aws.amazon.com/bedrock/titan/
[overrides]: g://box-ai/ai-agents/ai-agent-overrides