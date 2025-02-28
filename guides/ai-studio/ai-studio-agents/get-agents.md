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
fullyTranslated: true
---
# エージェントの取得

<Messsage type="caution">

Box AI Studioは、Enterprise Advancedアカウントでのみ使用できます。

</Message>

## すべてのAIエージェントのリストの取得

`GET/2.0/ai_agents`エンドポイントを使用すると、指定されたパラメータに基づいてすべてのAIエージェントのリストを取得できます。

### リクエストの送信

リクエストを送信するには、`GET/2.0/ai_agents`エンドポイントを使用します。

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AI Studioの使い方][getting-started]を参照してください。

<Samples id="get-ai-agents">

</Samples>

#### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ                 | 説明                                                               | 例                                                   |
| --------------------- | ---------------------------------------------------------------- | --------------------------------------------------- |
| `mode`                | 返されるエージェント構成にフィルタをかけるためのモード。使用可能な値は`ask`、`text_gen`、`extract`です。 | `ask`                                               |
| `fields`              | レスポンスで返されるフィールド。                                                 | `ask`                                               |
| `agent_state`         | 返されるエージェントの状態。値は`enabled`、`disabled`のいずれかです。                     | `enabled`                                           |
| `fields`              | レスポンスで返されるフィールド。値は`ask`、`text_gen`、`extract`のいずれかです。             | `ask`                                               |
| `include_box_default` | レスポンスにBoxのデフォルトのエージェントを含めるかどうか。                                  | `true`                                              |
| `limit`               | 返す項目の1ページあたりの最大数。                                                | `1000`                                              |
| `marker`              | 結果が返される開始位置のマーカー。                                                | `JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii` |

[getting-started]: g://ai-studio/getting-started-ai-studio
