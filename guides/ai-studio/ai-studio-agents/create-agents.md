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
total_steps: 5
sibling_id: ai-studio/ai-studio-agents
parent_id: ai-studio/ai-studio-agents
next_page_id: ai-studio/ai-studio-agents/get-agents
previous_page_id: ai-studio/ai-studio-agents
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/ai-studio/ai-studio-agents/create-agents.md
fullyTranslated: true
---
# エージェントの作成

<Messsage type="caution">

Box AI Studioは、Enterprise Advancedアカウントでのみ使用できます。

</Message>

`POST/2.0/ai_agents`エンドポイントを使用すると、新しいカスタム[AIエージェント][agents]を作成できます。

## リクエストの送信

リクエストを送信するには、`POST/2.0/ai_agents`エンドポイントを使用します。

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AIの使い方][prereq]を参照してください。

<Samples id="post-ai-agents">

</Samples>

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

<!--alex ignore-->

| パラメータ              | 説明                                                                                                                                                                                                                                                                                               | 例                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| **`type`**         | クエリの処理に使用されるエージェントのタイプ。                                                                                                                                                                                                                                                                          | `ai_agent`                                                                |
| **`name`**         | AIエージェントの名前。                                                                                                                                                                                                                                                                                     | `My AI Agent`                                                             |
| **`access_state`** | AIエージェントの状態。値は`enabled`、`disabled`のいずれかです。                                                                                                                                                                                                                                                       | `enabled`                                                                 |
| `icon_reference`   | AIエージェントのアイコン参照。これは、URL `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/<file_name>`の形式で指定する必要があります。この場合、`file_name`に使用可能な値は`logo_boxAi.png`、`logo_stamp.png`、`logo_legal.png`、`logo_finance.png`、`logo_config.png`、`logo_handshake.png`、`logo_analytics.png`、`logo_classification.png`です。 | `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/logo_analytics.svg` |
| `allowed_entities` | 許可するユーザーまたはグループのリスト。                                                                                                                                                                                                                                                                             |                                                                           |
| `ask`              | 質問に使用されるAIエージェント。                                                                                                                                                                                                                                                                                | `ask`                                                                     |
| `extract`          | 抽出に使用されるAIエージェント。                                                                                                                                                                                                                                                                                |                                                                           |
| `text_gen`         | テキストの生成に使用されるAIエージェント。                                                                                                                                                                                                                                                                           |                                                                           |

<!--alex enable-->

[agents]: g://box-ai/ai-agents/index

[prereq]: g://ai-studio/getting-started-ai-studio
