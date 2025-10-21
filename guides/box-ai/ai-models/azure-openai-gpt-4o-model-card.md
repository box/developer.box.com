---
rank: 6
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/azure-openai-gpt-4o-model-card
type: guide
total_steps: 26
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/azure-openai-gpt-4o-mini-model-card
previous_page_id: box-ai/ai-models/azure-openai-gpt-4-1-mini-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/azure-openai-gpt-4o-model-card.md
fullyTranslated: true
---
# Azure OpenAI GPT-4o

**Azure OpenAI GPT-4o**は、軽量のタスクを処理するように設計されたマルチモーダルモデルです。

## モデルの詳細

| 項目            | 値                       | 説明                                                                                 |
| ------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **GPT-4o**              | モデルの名前。                                                                            |
| モデルのカテゴリ      | プレミアム                   | モデルのカテゴリ - 標準またはプレミアム。                                                             |
| APIモデル名       | `azure__openai__gpt_4o` | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Microsoft Azure**     | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Microsoft Azure**     | このモデルを提供する組織。                                                                      |
| リリース日         | **2024年5月13日**          | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2023年9月**             | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **128,000トークン**         | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **2,000トークン**           | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **87.5**                | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                 | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[Azure OpenAI GPT-4oの公式ドキュメント][azure-ai-mini-4o-model]を参照してください。

[azure-ai-mini-4o-model]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=python-secure#gpt-4o-and-gpt-4-turbo

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
