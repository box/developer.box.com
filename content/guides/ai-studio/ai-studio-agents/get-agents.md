---
rank: 2
related_guides:
  - authentication/tokens/developer-tokens/
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-tutorials/extract-metadata
---

# Get agents

<Messsage type='caution'>

Box AI Studio is available only for Enterprise Advanced accounts.

</Message>

## List all AI agents

The `POST /2.0/get-ai-agents` endpoint allows you to list all AI agents based on the provided parameters.

### Send a request

To send a request, use the `POST /2.0/get-ai-agents` endpoint.

Make sure you have generated the developer token
to authorize your app. See [getting started with Box AI Studio][getting-started]
for details.

<Samples id='get-ai-agents' />

#### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description| Example|
|--------|--------|-------|
| `agent_state` | The state of the agent to return. Value is one of `enabled`,`disabled`. | `enabled` |
| `fields` | The fields to return in the response. Value is one of `ask`, `text_gen`, `extract`. | `ask` |
| `limit` | The maximum number of items to return per page. | `1000` |
| `marker` | Defines the position marker at which to begin returning results. | `JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii` |
| `mode` | The mode to filter the agent configuration to return. Value is one of `ask`, `text_gen`, `extract`. | `ask` |

## Get AI agent by ID

The `POST /2.0/get-ai-agents-id` endpoint allows you to list a specific AI
agent by the `agent_id` parameter.

### Send a request

To send a request, use the `POST /2.0/get-ai-agents-id` endpoint.

<Samples id='get-ai-agents-id' />

#### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description| Example|
|--------|--------|-------|
| `agent_id` | The agent id to get. | `1234` |

[getting-started]: g://ai-studio/getting-started-ai-studio