---
rank: 1
related_endpoints:
  - get_ai_agent_default
  - post_ai_text_gen
  - post_ai_ask
  - post_ai_extract
  - post_ai_extract_structured
related_guides:
  - box-ai/ai-agents/get-agent-default-config
  - box-ai/ai-agents/ai-agent-overrides
category_id: box-ai
subcategory_id: box-ai/ai-agents
is_index: true
id: box-ai/ai-agents
type: guide
total_steps: 3
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/ai-agents/get-agent-default-config
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-agents/index.md
---
# AI model overrides

<Message type="notice">

Endpoints related to metadata extraction are currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus and Enterprise Advanced customers.

</Message>

Box updates the default models across the endpoints on a regular basis to stay up to date with the most advanced options.

If your implementation is based on Box AI, a new default model might alter the results in a way that could break or change a downstream process. Switching to a specific version may prevent encountering any issues.

Selecting a specific model may also bring better results to your use case. This is why, you can switch to any model included in the [supported models][models] list.

Apart from switching models, you can pass options to further customize the agents used in Box AI implementation and get the responses that suit your use case.

To see specific use cases, check the [overrides tutorial][overrides].

[ask]: e://post_ai_ask#param_ai_agent
[text-gen]: e://post_ai_text_gen#param_ai_agent
[agent-default]: g://box-ai/ai-agents/get-agent-default-config
[overrides]: g://box-ai/ai-agents/ai-agent-overrides
[models]: g://box-ai/ai-models