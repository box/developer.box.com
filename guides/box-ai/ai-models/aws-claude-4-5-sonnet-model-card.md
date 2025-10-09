---
rank: 29
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/aws-claude-4-5-sonnet-model-card
type: guide
total_steps: 24
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/aws-claude-4-sonnet-model-card
previous_page_id: box-ai/ai-models/google-gemini-1-5-flash-001-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/aws-claude-4-5-sonnet-model-card.md
fullyTranslated: true
---
# AWS Claude 4.5 Sonnet

**AWS Claude 4.5 Sonnet** model is a high-performance model designed for building complex agents, delivering leading coding capabilities and executing across development tasks. It excels at autonomously planning and executing complex, multi-step workflows and is particularly effective in areas like finance, research, and cybersecurity.

## モデルの詳細

| 項目            | 値                             | 説明                                                                                 |
| ------------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **AWS Claude 4.5 Sonnet**     | モデルの名前。                                                                            |
| モデルのカテゴリ      | **プレミアム**                     | モデルのカテゴリ: 標準またはプレミアム。                                                              |
| APIモデル名       | `aws__claude_4_5_sonnet`      | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Amazon Web Services (AWS)** | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Anthropic**                 | このモデルを提供する組織。                                                                      |
| リリース日         | **September 29th, 2025**      | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2025年1月**                   | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **200,000トークン**               | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **64,000トークン**                | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**                      | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                       | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

For additional information, see [official AWS Claude 4.5 Sonnet documentation][aws-claude].

[aws-claude]: https://aws.amazon.com/bedrock/anthropic/

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
