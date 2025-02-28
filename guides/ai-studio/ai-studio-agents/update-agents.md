---
rank: 4
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
id: ai-studio/ai-studio-agents/update-agents
type: guide
total_steps: 5
sibling_id: ai-studio/ai-studio-agents
parent_id: ai-studio/ai-studio-agents
next_page_id: ai-studio/ai-studio-agents/delete-agents
previous_page_id: ai-studio/ai-studio-agents/get-agent-id
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/ai-studio/ai-studio-agents/update-agents.md
fullyTranslated: true
---
# AIエージェントの更新

`PUT/2.0/ai_agents/{id}`エンドポイントを使用すると、IDに基づいてカスタムAIエージェントを更新できます。

## リクエストの送信

リクエストを送信するには、`PUT/2.0/ai_agents/{id}`エンドポイントを使用します。

<Samples id="put-ai-agents_id">

</Samples>

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

<!--alex ignore-->

| パラメータ              | 説明                                                                                                                                                                                                                                                                                               | 例                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| **`type`**         | クエリの処理に使用されるエージェントのタイプ。                                                                                                                                                                                                                                                                          | \`\`\`\`                                                                  |
| **`name`**         | AIエージェントの名前。                                                                                                                                                                                                                                                                                     | マイAIエージェント                                                                |
| **`access_state`** | AIエージェントの状態。値は`enabled`、`disabled`のいずれかです。                                                                                                                                                                                                                                                       | `enabled`                                                                 |
| `icon_reference`   | AIエージェントのアイコン参照。これは、URL `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/<file_name>`の形式で指定する必要があります。この場合、`file_name`に使用可能な値は`logo_boxAi.png`、`logo_stamp.png`、`logo_legal.png`、`logo_finance.png`、`logo_config.png`、`logo_handshake.png`、`logo_analytics.png`、`logo_classification.png`です。 | `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/logo_analytics.svg` |
| `allowed_entities` | 許可するユーザーまたはグループのリスト。                                                                                                                                                                                                                                                                             |                                                                           |
| `ask`              | 質問に使用されるAIエージェント。                                                                                                                                                                                                                                                                                | `ask`                                                                     |
| `extract`          | 抽出に使用されるAIエージェント。                                                                                                                                                                                                                                                                                |                                                                           |
| `text_gen`         | テキストの生成に使用されるAIエージェント。                                                                                                                                                                                                                                                                           |                                                                           |

<!--alex ignore-->
