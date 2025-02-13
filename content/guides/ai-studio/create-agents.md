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
# Create agents

<Messsage type='caution'>

Box AI Studio is available only for Enterprise Advanced accounts.

</Message>

The `POST /2.0/post_ai_agents` endpoint allows you to create a new, custom [AI agent][agents]. 

## Send a request

To send a request, use the `POST /2.0/post_ai_agents` endpoint.

Make sure you have generated the developer token
to authorize your app. See [getting started with Box AI][prereq]
for details.

<Samples id='post-ai-agents' />

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

## Update AI agent

The `POST /2.0/put_ai_agents_id` endpoint allows you to update a custom AI agent. 

### Send a request

To send a request, use the `POST /2.0/put_ai_agents_id` endpoint.

<Samples id='put-ai-agents_id' />

#### Parameters

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

## Delete AI agent

The `POST /2.0/delete_ai_agents_id` endpoint allows you to update a custom AI agent. 

### Send a request

To send a request, use the `POST /2.0/delete_ai_agents_id` endpoint.

<Samples id='delete-ai-agents-id' />

#### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description| Example|
|--------|--------|-------|
| **`agent_id`** | The ID of the agent to delete. | `1234` |

[agents]: g://box-ai/ai-agents/index
[prereq]: g://ai-studio/getting-started-ai-studio
