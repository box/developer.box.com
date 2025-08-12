---
rank: 18
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/google-gemini-2-0-flash-001-model-card
type: guide
total_steps: 22
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/google-gemini-1-5-pro-001-model-card
previous_page_id: box-ai/ai-models/google-gemini-2-0-flash-lite-preview-02-05
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/google-gemini-2-0-flash-001-model-card.md
fullyTranslated: true
---
# Google Gemini 2.0 Flash

**Google Gemini 2.0 Flash**は、大規模で大量かつ高頻度のタスクに最適になるよう設計されたマルチモーダルモデルです。マルチモーダルの推論が可能であり、100万トークンのコンテキストウィンドウが備わっています。

## モデルの詳細

| 項目            | 値                              | 説明                                                                                 |
| ------------- | ------------------------------ | ---------------------------------------------------------------------------------- |
| モデル名          | **Google Gemini 2.0 Flash**    | モデルの名前。                                                                            |
| モデル名          | **Google Gemini 2.0 Flash**    | モデルの名前。                                                                            |
| モデルのカテゴリ      | 標準                             | モデルのカテゴリ - 標準またはプレミアム。                                                             |
| APIモデル名       | `google__gemini_2_0_flash_001` | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Google**                     | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Google**                     | このモデルを提供する組織。                                                                      |
| リリース日         | **2025年2月5日**                  | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2024年6月**                    | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **100万トークン**                   | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **8,000トークン**                  | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **168**                        | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                        | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[Google Gemini 2.0 Flashの公式ドキュメント][vertex-ai-gemini-models]を参照してください。

[vertex-ai-gemini-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-models

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
