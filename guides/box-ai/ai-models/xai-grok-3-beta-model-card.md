---
rank: 50
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/xai-grok-3-beta-model-card
type: guide
total_steps: 22
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/xai-grok-3-mini-beta-model-card
previous_page_id: box-ai/ai-models/ibm-llama-3-2-instruct-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/xai-grok-3-beta-model-card.md
fullyTranslated: true
---
# xAI Grok 3 Beta

**xAI Grok 3 Beta** is a model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science.

## モデルの詳細

| 項目            | 値                                | 説明                                                                                 |
| ------------- | -------------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **xAI Grok 3 Beta**              | モデルの名前。                                                                            |
| APIモデル名       | `google__gemini_2_5_pro_preview` | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Google**                       | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Google**                       | このモデルを提供する組織。                                                                      |
| リリース日         | **April 17th 2025**              | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **January 2025**                 | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **100万トークン**                     | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **131k tokens**                  | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**                         | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                          | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

For additional information, see [official xAI Grok 3 Mini Beta documentation][xai-grok-models].

[xai-grok-models]: https://docs.x.ai/docs/models

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
