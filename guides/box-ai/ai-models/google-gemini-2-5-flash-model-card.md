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
id: box-ai/ai-models/google-gemini-2-5-flash-model-card
type: guide
total_steps: 31
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/google-gemini-2-0-flash-001-model-card
previous_page_id: box-ai/ai-models/google-gemini-2-5-pro-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/google-gemini-2-5-flash-model-card.md
fullyTranslated: true
---
# Google Gemini 2.5 Flash

**Google Gemini 2.5 Flash**は、豊富な機能が備わっているマルチモーダルモデルです。思考機能を備えており、モデルがレスポンスを生成する際にたどる思考プロセスを確認できます。

## モデルの詳細

| 項目            | 値                           | 説明                                                                                 |
| ------------- | --------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **Google Gemini 2.5 Flash** | モデルの名前。                                                                            |
| モデルのカテゴリ      | 標準                          | モデルのカテゴリ - 標準またはプレミアム。                                                             |
| APIモデル名       | `google__gemini_2_5_flash`  | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Google**                  | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Google**                  | このモデルを提供する組織。                                                                      |
| リリース日         | **2025年6月17日**              | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2025年1月**                 | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **100万トークン**                | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **64,000トークン**              | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **およそ163～300**              | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                     | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[Google Gemini 2.5 Flashの公式ドキュメント][vertex-ai-gemini-models]を参照してください。

[vertex-ai-gemini-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-models

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
