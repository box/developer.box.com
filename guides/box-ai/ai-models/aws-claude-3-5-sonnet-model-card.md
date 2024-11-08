---
rank: 14
related_guides:
  - box-ai/ask-questions
  - box-ai/generate-text
  - box-ai/extract-metadata
  - box-ai/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/aws-claude-3-5-sonnet-model-card
type: guide
total_steps: 15
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/aws-claude-3-haiku-model-card
previous_page_id: box-ai/ai-models/google-textembedding-gecko-003-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/aws-claude-3-5-sonnet-model-card.md
fullyTranslated: true
---
# AWS Claude 3.5 Sonnet

## 概要

**AWS Claude 3.5 Sonnet**モデルは、言語の理解と生成のタスクを強化するよう設計されています。

## モデルの詳細

| 項目            | 値                             | 説明                                                                                 |
| ------------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **AWS Claude 3.5 Sonnet**     | モデルの名前。                                                                            |
| APIモデル名       | `aws__claude_3_5_sonnet`      | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Amazon Web Services (AWS)** | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **AWS Bedrock**               | このモデルを提供する組織。                                                                      |
| リリース日         | **2024年6月20日**                | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2024年4月**                   | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **200,000トークン**               | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **4,000トークン**                 | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**                      | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                       | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[AWS Claude 3.5 Sonnetの公式ドキュメント][aws-claude]を参照してください。

[aws-claude]: https://aws.amazon.com/bedrock/claude/

[overrides]: g://box-ai/ai-agents/overrides-tutorial
