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
| **`agent_id`** | The ID of the agent to update. | `1234` |
