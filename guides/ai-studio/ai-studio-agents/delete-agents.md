---
rank: 4
related_guides:
  - authentication/tokens/developer-tokens/
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-tutorials/extract-metadata
category_id: ai-studio
subcategory_id: ai-studio/ai-studio-agents
is_index: false
id: ai-studio/ai-studio-agents/delete-agents
type: guide
total_steps: 4
sibling_id: ai-studio/ai-studio-agents
parent_id: ai-studio/ai-studio-agents
next_page_id: ''
previous_page_id: ai-studio/ai-studio-agents/update-agents
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/ai-studio/ai-studio-agents/delete-agents.md
---
# Delete AI agent

The `POST /2.0/delete_ai_agents_id` endpoint allows you to delete a custom AI agent based on its ID.

## Send a request

To send a request, use the `POST /2.0/delete_ai_agents_id` endpoint.

<Samples id='delete-ai-agents-id' >

</Samples>

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description| Example|
|--------|--------|-------|
| **`agent_id`** | The ID of the agent to delete. | `1234` |