---
rank: 40
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/ibm-llama-4-scout-model-card
type: guide
total_steps: 22
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/ibm-llama-3-2-instruct-model-card
previous_page_id: box-ai/ai-models/aws-titan-text-lite-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/ibm-llama-4-scout-model-card.md
fullyTranslated: true
---
# IBM Llama 4 Scout

**IBM Llama 4 Scout** is an auto-regressive language model that uses a mixture-of-experts (MoE) architecture and incorporates early fusion for native multimodality.

## モデルの詳細

| 項目                         | 値                     | 説明                                                                                                                                                                                                 |
| -------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| モデル名                       | **IBM Llama 4 Scout** | モデルの名前。                                                                                                                                                                                            |
| APIモデル名                    | `ibm__llama_4_scout`  | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。                                                                                                                 |
| ホスティングレイヤー                 | **IBM**               | LLMを安全にホストする、信頼できる組織。                                                                                                                                                                              |
| モデルプロバイダ                   | **Meta**              | このモデルを提供する組織。                                                                                                                                                                                      |
| リリース日                      | **April 5th 2025**    | モデルのリリース日。                                                                                                                                                                                         |
| ナレッジカットオフ日                 | **2024年8月**           | モデルが情報の更新を取得しなくなった日付。                                                                                                                                                                              |
| 入力コンテキストウィンドウ              | **10m**               | 入力コンテキストウィンドウでサポートされるトークン数。                                                                                                                                                                        |
| 出力トークンの最大数                 | **指定なし**              | 1回のリクエストでモデルが生成できるトークン数。                                                                                                                                                                           |
| 経験に基づいたスループット              | **指定なし**              | モデルが1秒あたりに生成できるトークン数。                                                                                                                                                                              |
| オープンソース                    | **はい**                | モデルのコードを一般公開するかどうかを指定します。                                                                                                                                                                          |
| IP infringement protection | **いいえ**               | Use of this model does not come with any intellectual property rights assurances or protections from Box. Please consider any potential IP issues that might arise from using the model’s outputs. |

## その他のドキュメント

For additional information, see [official IBM Llama 4 Scout documentation][IBM].

[overrides]: g://box-ai/ai-agents/ai-agent-overrides

[IBM]: https://www.ibm.com/docs/en/watsonx/w-and-w/2.1.0?topic=models-third-party-foundation
