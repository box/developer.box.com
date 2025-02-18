---
rank: 5
related_guides:
  - authentication/tokens/developer-tokens/
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-tutorials/extract-metadata
---

# Delete AI agent

The `DELETE/2.0/ai_agents/{id}` endpoint allows you to delete a custom AI agent based on its ID. 

## Send a request

To send a request, use the `DELETE/2.0/ai_agents/{id}` endpoint.

<Samples id='delete-ai-agents-id' />

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description| Example|
|--------|--------|-------|
| **`agent_id`** | The ID of the agent to delete. | `1234` |
