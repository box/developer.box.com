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
id: box-ai/ai-models/openai-gpt-o3-model-card
type: guide
total_steps: 23
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/azure-openai-gpt-4-1-model-card
previous_page_id: box-ai/ai-models
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/openai-gpt-o3-model-card.md
fullyTranslated: true
---
# OpenAI GPT o3

**OpenAI GPT o3**は、推論や問題解決のタスクに集中力や能力を高めて取り組むよう特化して設計されています。ユーザーのリクエストの処理と理解により多くの時間を費やすため、科学、コーディング、数学などの分野で、以前の反復処理に比べて非常に強力になっています。

## モデルの詳細

| 項目            | 値                | 説明                                                                                 |
| ------------- | ---------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **GPT o3**       | モデルの名前。                                                                            |
| モデルのカテゴリ      | プレミアム            | モデルのカテゴリ - 標準またはプレミアム。                                                             |
| APIモデル名       | `openai__gpt_o3` | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **OpenAI**       | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **OpenAI**       | このモデルを提供する組織。                                                                      |
| リリース日         | **2025年4月16日**   | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2024年5月**      | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **200,000トークン**  | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **100,000トークン**  | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**         | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**          | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[OpenAI GPT o3の公式ドキュメント][openai-o3-model]を参照してください。

[openai-o3-model]: https://openai.com/index/introducing-o3-and-o4-mini/

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
