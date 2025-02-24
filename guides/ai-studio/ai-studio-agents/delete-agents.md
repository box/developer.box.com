---
rank: 5
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
id: ai-studio/ai-studio-agents/delete-agents
type: guide
total_steps: 5
sibling_id: ai-studio/ai-studio-agents
parent_id: ai-studio/ai-studio-agents
next_page_id: ''
previous_page_id: ai-studio/ai-studio-agents/update-agents
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/ai-studio/ai-studio-agents/delete-agents.md
fullyTranslated: true
---
# Delete AI agent

The `DELETE/2.0/ai_agents/{id}` endpoint allows you to delete a custom AI agent based on its ID.

## リクエストの送信

リクエストを送信するには、`DELETE/2.0/ai_agents/{id}`エンドポイントを使用します。

<Samples id="delete-ai-agents-id">

</Samples>

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ          | 説明                             | 例      |
| -------------- | ------------------------------ | ------ |
| **`agent_id`** | The ID of the agent to delete. | `1234` |
