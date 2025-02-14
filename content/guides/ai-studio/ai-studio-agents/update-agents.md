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

The `PUT/2.0/ai_agents/{id}` endpoint allows you to update a custom AI agent based on its ID. 

## Send a request

To send a request, use the `PUT/2.0/ai_agents/{id}` endpoint.

<Samples id='put-ai-agents_id' />

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

<!--alex ignore-->

| Parameter| Description| Example|
|--------|--------|-------|
| type  | The type of agent used to handle queries. | ai_agent |
| name | The name of the AI Agent. | My AI Agent |
| access_state | The state of the AI Agent. Value is one of `enabled` `disabled`. | `enabled` |
| icon_reference | The icon reference of the AI Agent. It should have format of the URL [https://cdn01.boxcdn.net/app-assets/aistudio/avatars/](https://cdn01.boxcdn.net/app-assets/aistudio/avatars/) <file_name>, where possible values of file_name are: `logo_boxAi.png`,`logo_stamp.png`,`logo_legal.png`,`logo_finance.png`,`logo_config.png`,`logo_handshake.png`,`logo_analytics.png`,`logo_classification.png` | 'https://cdn01.boxcdn.net/app-assets/aistudio/avatars/logo_analytics.svg' |
| allowed_entities | List of allowed users or groups. |
| ask | The AI Agent to be used for ask.  | ask |
| extract | The AI Agent to be used for extraction.  | |
| text_gen | The AI agent used for generating text. | |

<!--alex ignore-->
