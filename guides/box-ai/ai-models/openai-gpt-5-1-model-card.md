---
rank: 3
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/openai-gpt-5-1-model-card
type: guide
total_steps: 31
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/openai-gpt-5-model-card
previous_page_id: box-ai/ai-models/openai-gpt-5-2-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/openai-gpt-5-1-model-card.md
fullyTranslated: true
---
# OpenAI GPT-5.1

**OpenAI GPT-5.1**は、構成可能な推論処理を使用したコーディングやエージェント型タスク向けに設計されたマルチモーダルモデルです。

## モデルの詳細

| 項目            | 値                 | 説明                                                                                 |
| ------------- | ----------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **GPT-5.1**       | モデルの名前。                                                                            |
| モデルのカテゴリ      | **プレミアム**         | モデルのカテゴリ: 標準またはプレミアム。                                                              |
| APIモデル名       | `openai__gpt_5_1` | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **OpenAI**        | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **OpenAI**        | このモデルを提供する組織。                                                                      |
| リリース日         | **2025年11月13日**   | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2024年9月30日**    | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **400,000トークン**   | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **128,000トークン**   | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**          | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**           | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[OpenAI GPT-5の公式ドキュメント][openai-gpt-5-model]を参照してください。

[openai-gpt-5-model]: https://platform.openai.com/docs/models/gpt-5.1

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
