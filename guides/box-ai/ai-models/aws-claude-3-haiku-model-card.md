---
rank: 15
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/aws-claude-3-haiku-model-card
type: guide
total_steps: 15
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/aws-claude-3-sonnet-model-card
previous_page_id: box-ai/ai-models/aws-claude-3-5-sonnet-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/aws-claude-3-haiku-model-card.md
fullyTranslated: true
---
# AWS Claude 3 Haiku

## 概要

**AWS Claude 3 Haiku**モデルは、創造性豊かな文章作成AIや対話型AIなど、さまざまな言語タスク向けにカスタマイズされています。

## モデルの詳細

| 項目            | 値                             | 説明                                                                                 |
| ------------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **AWS Claude 3 Haiku**        | モデルの名前。                                                                            |
| APIモデル名       | `aws__claude_3_haiku`         | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Amazon Web Services (AWS)** | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Anthropic**                 | このモデルを提供する組織。                                                                      |
| リリース日         | **2024年3月13日**                | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2023年8月**                   | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **200,000トークン**               | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **4,000トークン**                 | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **117**                       | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                       | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[AWS Claude 3 Haikuの公式ドキュメント][aws-claude]を参照してください。

[aws-claude]: https://aws.amazon.com/bedrock/claude/

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
