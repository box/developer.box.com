---
rank: 4
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/openai-gpt-5-mini-model-card
type: guide
total_steps: 30
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/openai-gpt-o3-model-card
previous_page_id: box-ai/ai-models/openai-gpt-5-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/openai-gpt-5-mini-model-card.md
fullyTranslated: true
---
# OpenAI GPT-5 mini

**OpenAI GPT-5 mini**は、明確に定義されたタスクや正確なプロンプトに適している、GPT-5の高速かつコスト効率のよいバージョンです。

## モデルの詳細

| 項目            | 値                    | 説明                                                                                 |
| ------------- | -------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **GPT-5 mini**       | モデルの名前。                                                                            |
| モデルのカテゴリ      | **標準**               | モデルのカテゴリ: 標準またはプレミアム。                                                              |
| APIモデル名       | `openai__gpt_5_mini` | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **OpenAI**           | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **OpenAI**           | このモデルを提供する組織。                                                                      |
| リリース日         | **2025年8月7日**        | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2024年5月31日**       | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **400,000トークン**      | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **128,000トークン**      | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**             | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**              | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[OpenAI GPT-5 miniの公式ドキュメント][openai-gpt-5-mini-model]を参照してください。

[openai-gpt-5-mini-model]: https://platform.openai.com/docs/models/gpt-5-mini

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
