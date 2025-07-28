---
rank: 14
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/google-gemini-2-5-pro-model-card
type: guide
total_steps: 24
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/google-gemini-2-5-pro-preview-model-card
previous_page_id: box-ai/ai-models/azure-text-embedding-ada-002-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/google-gemini-2-5-pro-model-card.md
fullyTranslated: true
---
# Google Gemini 2.5 Pro

**Google Gemini 2.5 Pro** is a multimodal model capable of solving complex problems. It can comprehend vast datasets and challenging problems from different information sources, including text, audio, images, video, and even entire code repositories.

## モデルの詳細

| 項目            | 値                         | 説明                                                                                 |
| ------------- | ------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **Google Gemini 2.5 Pro** | モデルの名前。                                                                            |
| モデルのカテゴリ      | **プレミアム**                 | The category of the model: Standard or Premium.                                    |
| APIモデル名       | `google__gemini_2_5_pro`  | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Google**                | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Google**                | このモデルを提供する組織。                                                                      |
| リリース日         | **June 17th 2025**        | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2025年1月**               | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **100万トークン**              | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **65k tokens**            | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**                  | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                   | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

For additional information, see [official Google Gemini 2.5 Pro documentation][vertex-ai-gemini-2-5-pro].

[vertex-ai-gemini-2-5-pro]: https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-pro

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
