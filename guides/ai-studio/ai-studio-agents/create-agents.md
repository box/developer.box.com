---
rank: 1
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
id: ai-studio/ai-studio-agents/create-agents
type: guide
total_steps: 4
sibling_id: ai-studio/ai-studio-agents
parent_id: ai-studio/ai-studio-agents
next_page_id: ai-studio/ai-studio-agents/get-agents
previous_page_id: ai-studio/ai-studio-agents
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/ai-studio/ai-studio-agents/create-agents.md
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

<Samples id='post-ai-agents' >

</Samples>

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

[agents]: g://box-ai/ai-agents/index
[prereq]: g://ai-studio/getting-started-ai-studio