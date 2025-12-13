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
id: box-ai/ai-models/aws-claude-4-5-haiku-model-card
type: guide
total_steps: 31
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/aws-claude-4-sonnet-model-card
previous_page_id: box-ai/ai-models/aws-claude-4-5-sonnet-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/aws-claude-4-5-haiku-model-card.md
fullyTranslated: true
---
# AWS Claude Haiku 4.5

**AWS Claude Haiku 4.5**モデルは、大容量の低レイテンシアプリケーション向けに最適化されています。これは、より大規模なモデルと比べて、速度とコスト効率が向上した強力なコーディング性能を提供します。

## モデルの詳細

| 項目            | 値                             | 説明                                                                                 |
| ------------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **AWS Claude Haiku 4.5**      | モデルの名前。                                                                            |
| モデルのカテゴリ      | **標準**                        | モデルのカテゴリ: 標準またはプレミアム。                                                              |
| APIモデル名       | `aws__claude_4_5_haiku`       | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Amazon Web Services (AWS)** | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Anthropic**                 | このモデルを提供する組織。                                                                      |
| リリース日         | **2025年10月15日**               | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2025年2月**                   | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **200,000トークン**               | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **64,000トークン**                | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**                      | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                       | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[AWS Claude Haiku 4.5の公式ドキュメント][aws-claude]を参照してください。

[aws-claude]: https://aws.amazon.com/bedrock/anthropic/

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
