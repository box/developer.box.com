---
rank: 3
related_guides:
  - authentication/tokens/developer-tokens/
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-tutorials/extract-metadata
---

# Get AI agent by ID

The `GET /2.0/ai_agents/{id}` endpoint allows you to list a specific AI
agent by the `agent_id` parameter.

## Send a request

To send a request, use the `GET /2.0/ai_agents/{id}` endpoint.

<Samples id='get_ai_agents_id' />

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description| Example|
|--------|--------|-------|
| **`agent_id`** | The agent id to get. | `1234` |
| `fields` | The fields to return in the response. | `ask` |
