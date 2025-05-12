---
rank: 50
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/xai-grok-3-beta-model-card
type: guide
total_steps: 22
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/xai-grok-3-mini-beta-model-card
previous_page_id: box-ai/ai-models/ibm-llama-3-2-90b-vision-instruct-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/xai-grok-3-beta-model-card.md
fullyTranslated: true
---
# xAI Grok 3 Beta

**xAI Grok 3 Beta**は、データの抽出、コーディング、テキストの要約など、企業のユースケースに優れているモデルです。金融、医療、法律、科学の深い専門知識を有しています。

## モデルの詳細

| 項目            | 値                   | 説明                                                                                 |
| ------------- | ------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **xAI Grok 3 Beta** | モデルの名前。                                                                            |
| APIモデル名       | `xai__grok_3_beta`  | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **xAI**             | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **xAI**             | このモデルを提供する組織。                                                                      |
| リリース日         | **2025年4月17日**      | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2025年1月**         | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **100万トークン**        | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **131,000トークン**     | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**            | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**             | モデルのコードを一般公開するかどうかを指定します。                                                          |
| 知的財産侵害からの保護   | **いいえ**             | このモデルの使用には、Boxによる知的財産権の保証または保護は伴いません。このモデルの出力を使用することで発生する可能性もある知的財産の問題を考慮してください。   |

## その他のドキュメント

詳細については、[xAI Grok 3 Mini Betaの公式ドキュメント][xai-grok-models]を参照してください。

[xai-grok-models]: https://docs.x.ai/docs/models

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
