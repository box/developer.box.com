---
rank: 1
related_endpoints:
  - get_ai_agent_default
  - post_ai_text_gen
  - post_ai_ask
  - post_ai_extract
  - post_ai_extract_structured
related_guides:
  - box-ai/ai-agents/get-agent-default-config
  - box-ai/ai-agents/ai-agent-overrides
category_id: box-ai
subcategory_id: box-ai/ai-agents
is_index: true
id: box-ai/ai-agents
type: guide
total_steps: 3
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/ai-agents/get-agent-default-config
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-agents/index.md
fullyTranslated: true
---
# AIモデルの上書き

<Message type="notice">

Endpoints related to metadata extraction are currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus and Enterprise Advanced customers.

</Message>

Boxでは、常に最先端のオプションに対応するため、定期的にデフォルトモデルをエンドポイント全体で更新しています。

Box AIに基づいた実装の場合、新しいデフォルトモデルによって、ダウンストリームプロセスを中断または変更するように結果が変更される可能性があります。特定のバージョンに切り替えることで、問題の発生を防止できる場合があります。

また、特定のモデルを選択すると、ユースケースに対してより適切な結果が得られる場合もあります。このような理由で、[サポートされているモデル][models]のリストに含まれる任意のモデルに切り替えることが可能です。

モデルの切り替えとは別に、オプションを渡すことで、Box AIの実装で使用されるエージェントをさらにカスタマイズし、ユースケースに合ったレスポンスを取得することもできます。

具体的なユースケースを確認するには、[上書きに関するチュートリアル][overrides]を参照してください。

[ask]: e://post_ai_ask#param_ai_agent

[text-gen]: e://post_ai_text_gen#param_ai_agent

[agent-default]: g://box-ai/ai-agents/get-agent-default-config

[overrides]: g://box-ai/ai-agents/ai-agent-overrides

[models]: g://box-ai/ai-models
