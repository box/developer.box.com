---
rank: 3
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
id: ai-studio/ai-studio-agents/get-agent-id
type: guide
total_steps: 5
sibling_id: ai-studio/ai-studio-agents
parent_id: ai-studio/ai-studio-agents
next_page_id: ai-studio/ai-studio-agents/update-agents
previous_page_id: ai-studio/ai-studio-agents/get-agents
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/ai-studio/ai-studio-agents/get-agent-id.md
fullyTranslated: true
---
# Get AI agent by ID

The `GET/2.0/ai_agents/{id}` endpoint allows you to list a specific AI agent by the `agent_id` parameter.

## リクエストの送信

リクエストを送信するには、`GET/2.0/ai_agents/{id}`エンドポイントを使用します。

<Samples id="get-ai-agents-id">

</Samples>

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ          | 説明                                    | 例      |
| -------------- | ------------------------------------- | ------ |
| **`agent_id`** | The agent id to get.                  | `1234` |
| `fields`       | The fields to return in the response. | `ask`  |
