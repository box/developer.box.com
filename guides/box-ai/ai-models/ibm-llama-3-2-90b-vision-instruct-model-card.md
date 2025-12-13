---
rank: 41
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/ibm-llama-3-2-90b-vision-instruct-model-card
type: guide
total_steps: 31
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/ibm-mistral-medium-3-model-card
previous_page_id: box-ai/ai-models/ibm-llama-4-scout-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/ibm-llama-3-2-90b-vision-instruct-model-card.md
fullyTranslated: true
---
# IBM Llama 3.2 Vision Instruct

**IBM Llama 3.2 Vision Instruct**は、ドキュメントレベルの理解、図表やグラフの解釈、画像の見出し作成など、画像入力とテキスト出力のユースケース向けに構築されたモデルです。

## モデルの詳細

| 項目            | 値                                     | 説明                                                                                 |
| ------------- | ------------------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **IBM Llama 3.2 Vision Instruct**     | モデルの名前。                                                                            |
| モデルのカテゴリ      | 標準                                    | モデルのカテゴリ - 標準またはプレミアム。                                                             |
| APIモデル名       | `ibm__llama__3_2_90b_vision_instruct` | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **IBM**                               | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Meta**                              | このモデルを提供する組織。                                                                      |
| リリース日         | **2024年9月25日**                        | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2023年12月**                          | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **128,000**                           | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **指定なし**                              | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**                              | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **はい**                                | モデルのコードを一般公開するかどうかを指定します。                                                          |
| 知的財産侵害からの保護   | **いいえ**                               | このモデルの使用には、Boxによる知的財産権の保証または保護は伴いません。このモデルの出力を使用することで発生する可能性もある知的財産の問題を考慮してください。   |

## その他のドキュメント

詳細については、[IBM Llama 3.2 Vision Instructの公式ドキュメント][IBM]を参照してください。

[overrides]: g://box-ai/ai-agents/ai-agent-overrides

[IBM]: https://www.ibm.com/docs/en/watsonx/w-and-w/2.1.0?topic=models-third-party-foundation#llama-3-2-vision
