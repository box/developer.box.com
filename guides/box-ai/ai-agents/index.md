---
rank: 1
related_endpoints:
  - get_ai_agent_default
related_guides:
  - box-ai/index
category_id: box-ai
subcategory_id: box-ai/ai-agents
is_index: true
id: box-ai/ai-agents
type: guide
total_steps: 1
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/ai-agents/get-agent-default-config
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-agents/index.md
---
# AI agent configuration

You can use the `ai_agent` parameter available in the [`POST /2.0/ai/ask`][ask] and [`POST /2.0/ai/text_gen`][text-gen] requests to override the default agent configuration and introduce your own custom settings.

For details, see [AI agent default configuration][agent-default].

[ask]: e://post_ai_ask#param_ai_agent
[text-gen]: e://post_ai_text_gen#param_ai_agent
[agent-default]: g://box-ai/ai-agents/get-agent-default-config