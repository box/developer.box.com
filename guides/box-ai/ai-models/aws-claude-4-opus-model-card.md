---
rank: 31
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/aws-claude-4-opus-model-card
type: guide
total_steps: 23
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/aws-claude-3-7-sonnet-model-card
previous_page_id: box-ai/ai-models/aws-claude-4-sonnet-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/aws-claude-4-opus-model-card.md
fullyTranslated: true
---
# AWS Claude 4 Opus

**AWS Claude 4 Opus** model excels at coding and complex problem-solving, powering frontier agent products. It's possible to run Claude Code in the background, enabling developers to assign long-running coding tasks for Opus to handle independently.

## モデルの詳細

| 項目            | 値                             | 説明                                                                                 |
| ------------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **AWS Claude 4 Opus**         | モデルの名前。                                                                            |
| APIモデル名       | `aws__claude_4_opus`          | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Amazon Web Services (AWS)** | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Anthropic**                 | このモデルを提供する組織。                                                                      |
| リリース日         | **2024年3月4日**                 | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2023年8月**                   | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **200,000トークン**               | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **32,000トークン**                | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**                      | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                       | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

For additional information, see [official AWS Claude 4 Opus documentation][aws-claude].

[aws-claude]: https://aws.amazon.com/bedrock/claude/

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
