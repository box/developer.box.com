---
rank: 4
related_guides:
  - authentication/tokens/developer-tokens/
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-tutorials/extract-metadata
---

# Update AI agent

The `POST /2.0/put_ai_agents_id` endpoint allows you to update a custom AI agent based on its ID. 

## Send a request

To send a request, use the `POST /2.0/put_ai_agents_id` endpoint.

<Samples id='put-ai-agents_id' />

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description| Example|
|--------|--------|-------|
| **`type`** | The type of agent used to handle queries. | `ai_agent` |
| **`access_state`** | The state of the AI Agent. Value is one of `enabled` `disabled`. | `enabled` |
| `ask` | The AI Agent to be used for ask. | `ask` |
| `extract` | The AI Agent to be used for extraction. | |
| `text_gen` | The AI agent used for generating text. | |
| **`is_enterprise_default`** | If the agent is default for enterprise. | `false` |
| **`name`** | The name of the AI Agent. | `My AI Agent` |