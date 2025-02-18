---
rank: 2
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
id: ai-studio/ai-studio-agents/get-agents
type: guide
total_steps: 5
sibling_id: ai-studio/ai-studio-agents
parent_id: ai-studio/ai-studio-agents
next_page_id: ai-studio/ai-studio-agents/get-agent-id
previous_page_id: ai-studio/ai-studio-agents/create-agents
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/ai-studio/ai-studio-agents/get-agents.md
---
# Get agents

<Messsage type='caution'>

Box AI Studio is available only for Enterprise Advanced accounts.

</Message>

## List all AI agents

The `GET/2.0/ai_agents` endpoint allows you to list all AI agents based on the provided parameters.

### Send a request

To send a request, use the `GET/2.0/ai_agents` endpoint.

Make sure you have generated the developer token
to authorize your app. See [getting started with Box AI Studio][getting-started]
for details.

<Samples id='get-ai-agents' >

</Samples>

#### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description| Example|
|--------|--------|-------|
| `mode` | The mode to filter the agent configuration to return. Possible values are: `ask`, `text_gen`, and `extract`. | `ask` |
| `fields` | The fields to return in the response. | `ask` |
| `agent_state` | The state of the agent to return. Value is one of `enabled`,`disabled`. | `enabled` |
| `fields` | The fields to return in the response. Value is one of `ask`, `text_gen`, `extract`. | `ask` |
| `include_box_default` | Whether to include the Box default agents in the response. | `true` |
| `limit` | The maximum number of items to return per page. | `1000` |
| `marker` | Defines the position marker at which to begin returning results. | `JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii` |

[getting-started]: g://ai-studio/getting-started-ai-studio