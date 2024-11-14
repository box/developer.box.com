---
rank: 14
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
---
# AWS Claude 3.5 Sonnet

## Overview

**AWS Claude 3.5 Sonnet** model is designed to enhance language understanding and generation tasks.

## Model details

| Item  | Value | Description |
|-----------|----------|----------|
|Model name|**AWS Claude 3.5 Sonnet**| The name of the model. | 
|API model name|`aws__claude_3_5_sonnet`| The name of the model that is used in the [Box AI API for model overrides][overrides]. The user must provide this exact name for the API to work. |
|Hosting layer|  **Amazon Web Services (AWS)** | The trusted organization that securely hosts LLM. |
|Model provider|**Anthropic**| The organization that provides this model. |
|Release date| **June 20th, 2024** | The release date for the model.|
|Knowledge cutoff date| **April 2024**| The date after which the model does not get any information updates. |
|Input context window |**200k tokens**| The number of tokens supported by the input context window.| 
|Maximum output tokens | **4k tokens** |The number of tokens that can be generated by the model in a single request.| 
|Empirical throughput| **Not specified**| The number of tokens the model can generate per second.|
|Open source | **No** | Specifies if the model's code is available for public use. |

## Additional documentation

For additional information, see [official AWS Claude 3.5 Sonnet documentation][aws-claude].

[aws-claude]: https://aws.amazon.com/bedrock/claude/
[overrides]: g://box-ai/ai-agents/ai-agent-overrides