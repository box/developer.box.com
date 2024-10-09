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
  - box-ai/ai-agents/overrides-tutorial
---

# AI model overrides

Box updates the default models across the endpoints on a regular basis to stay up to date with the most advanced options. 

If your implementation is based on Box AI, a new default model might alter the results in a way that could break or change a downstream process. Switching to a specific version may prevent encountering any issues.

Selecting a specific model may also bring better results to your use case. This is why, you can switch to any model included in the [supported models][models] list.

Apart from switching models, you can pass options to further customize the agents used in Box AI implementation and get the responses that suit your use case.

To see specific use cases, check the [overrides tutorial][overrides].

[ask]: e://post_ai_ask#param_ai_agent
[text-gen]: e://post_ai_text_gen#param_ai_agent
[agent-default]: g://box-ai/ai-agents/get-agent-default-config
[overrides]: g://box-ai/ai-agents/overrides-tutorial
[models]: g://box-ai/ai-models/index