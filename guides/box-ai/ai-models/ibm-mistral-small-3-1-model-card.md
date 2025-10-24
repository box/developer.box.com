---
rank: 43
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/ibm-mistral-small-3-1-model-card
type: guide
total_steps: 27
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/xai-grok-3-beta-model-card
previous_page_id: box-ai/ai-models/ibm-mistral-medium-3-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/ibm-mistral-small-3-1-model-card.md
fullyTranslated: true
---
# IBM Mistral Small 3.1

**IBM Mistral Small 3.1**モデルは、マルチモーダル機能と拡張されたコンテキストウィンドウを備えた、処理の速い効率的なオープンソースモデルです。これは、低レイテンシを維持しながら、テキストタスクとビジョンタスクの両方で強力なパフォーマンスを発揮するため、対話型AIからドキュメント処理まで幅広い用途に適しています。

## モデルの詳細

| 項目            | 値                                          | 説明                                                                                 |
| ------------- | ------------------------------------------ | ---------------------------------------------------------------------------------- |
| モデル名          | **IBM Mistral Small 3.1**                  | モデルの名前。                                                                            |
| モデルのカテゴリ      | **標準**                                     | モデルのカテゴリ: 標準またはプレミアム。                                                              |
| APIモデル名       | `ibm__mistral_small_3_1_24b_instruct_2503` | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **IBM**                                    | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Mistral AI**                             | このモデルを提供する組織。                                                                      |
| リリース日         | **2025年3月**                                | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **指定なし**                                   | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **128,000トークン**                            | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **指定なし**                                   | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **150**                                    | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **はい**                                     | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[Mistral AIの公式ドキュメント][mistral-ai]を参照してください。

[mistral-ai]: https://docs.mistral.ai/getting-started/models/models_overview/

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
