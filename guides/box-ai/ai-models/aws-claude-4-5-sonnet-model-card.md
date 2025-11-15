---
rank: 28
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
total_steps: 30
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/aws-claude-4-5-haiku-model-card
previous_page_id: box-ai/ai-models/google-gemini-1-5-flash-001-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/aws-claude-4-5-sonnet-model-card.md
fullyTranslated: true
---
# AWS Claude Sonnet 4.5

**AWS Claude Sonnet 4.5**モデルは、複雑なエージェントの作成用に設計された高性能のモデルであり、優れたコーディング機能を提供し、開発タスク全体にわたって実行します。このモデルは、複雑なマルチステップワークフローの自律的な計画および実行に優れており、特に金融、研究、サイバーセキュリティなどの分野で効果的です。

## モデルの詳細

| 項目            | 値                             | 説明                                                                                 |
| ------------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **AWS Claude Sonnet 4.5**     | モデルの名前。                                                                            |
| モデルのカテゴリ      | **プレミアム**                     | モデルのカテゴリ: 標準またはプレミアム。                                                              |
| APIモデル名       | `aws__claude_4_5_sonnet`      | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Amazon Web Services (AWS)** | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Anthropic**                 | このモデルを提供する組織。                                                                      |
| リリース日         | **2025年9月29日**                | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2025年1月**                   | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **200,000トークン**               | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **64,000トークン**                | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**                      | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                       | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[AWS Claude Sonnet 4.5の公式ドキュメント][aws-claude]を参照してください。

[aws-claude]: https://aws.amazon.com/bedrock/anthropic/

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
