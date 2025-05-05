---
rank: 16
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/google-gemini-2-5-flash-preview-model-card
type: guide
total_steps: 22
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/google-gemini-2-0-flash-lite-preview-02-05
previous_page_id: box-ai/ai-models/google-gemini-2-5-pro-preview-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/google-gemini-2-5-flash-preview-model-card.md
fullyTranslated: true
---
# Google Gemini 2.5 Flash Preview

**Google Gemini 2.5 Flash Preview** is a multimodal model designed to handle lightweight tasks. It is designed for high-volume, low-latency tasks, making it highly efficient for large-scale use cases like summarization, multimodal processing, and categorization but with higher quality than Gemini 2.0 Flash.

## モデルの詳細

| 項目            | 値                                   | 説明                                                                                 |
| ------------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **Google Gemini 2.5 Flash Preview** | モデルの名前。                                                                            |
| APIモデル名       | `google__gemini_2_5_flash_preview`  | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Google**                          | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Google**                          | このモデルを提供する組織。                                                                      |
| リリース日         | **March 25th 2025**                 | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **January 2025**                    | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **100万トークン**                        | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **8,000トークン**                       | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **214**                             | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                             | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

For additional information, see [official Google Gemini 2.5 Flash Preview documentation][vertex-ai-gemini-models].

[vertex-ai-gemini-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-models

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
