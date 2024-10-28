---
rank: 15
related_guides:
  - box-ai/ask-questions
  - box-ai/generate-text
  - box-ai/extract-metadata
  - box-ai/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/aws-claude-3-haiku-model-card
type: guide
total_steps: 15
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/aws-claude-3-sonnet-model-card
previous_page_id: box-ai/ai-models/aws-claude-3-5-sonnet-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/aws-claude-3-haiku-model-card.md
---
# AWS Claude 3 Haiku

## Overview

**AWS Claude 3 Haiku** model is tailored for various language tasks, including creative writing and conversational AI.

## Model details

| Item  | Value | Description |
|-----------|----------|----------|
|Model name|**AWS Claude 3 Haiku**| The name of the model. |
|API model name|`aws__claude_3_haiku`| The name of the model that is used in the [Box AI API for model overrides][overrides]. The user must provide this exact name for the API to work. |
|Hosting layer|  **Amazon Web Services (AWS)** | The trusted organization that securely hosts LLM. |
|Model provider|**Anthropic**| The organization that provides this model. |
|Release date| **March 13th, 2024** | The release date for the model.|
|Knowledge cutoff date| **August 2023**| The date after which the model does not get any information updates. |
|Input context window |**200k tokens**| The number of tokens supported by the input context window.|
|Maximum output tokens | **4k tokens** |The number of tokens that can be generated by the model in a single request.|
|Empirical throughput| **117** | The number of tokens the model can generate per second.|
|Open source | **No** | Specifies if the model's code is available for public use. |

## Additional documentation

For additional information, see [official AWS Claude 3 Haiku documentation][aws-claude].

[aws-claude]: https://aws.amazon.com/bedrock/claude/
[overrides]: g://box-ai/ai-agents/overrides-tutorial