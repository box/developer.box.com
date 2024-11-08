---
rank: 9
related_guides:
  - box-ai/ask-questions
  - box-ai/generate-text
  - box-ai/extract-metadata
  - box-ai/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/google-text-bison-model-card
type: guide
total_steps: 15
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/google-text-unicorn-model-card
previous_page_id: box-ai/ai-models/google-text-bison-32-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/google-text-bison-model-card.md
fullyTranslated: true
---
# Google Text Bison

**Google Text Bison**は、軽量のタスクを処理するように設計されたマルチモーダルモデルです。

## モデルの詳細

| 項目            | 値                     | 説明                                                                                 |
| ------------- | --------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **Google Text Bison** | モデルの名前。                                                                            |
| APIモデル名       | `google__text_bison`  | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Google**            | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Google**            | このモデルを提供する組織。                                                                      |
| リリース日         | **2023年5月**           | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2023年2月**           | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **8,000トークン**         | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **1,000トークン**         | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**              | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**               | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[Google Text Bisonの公式ドキュメント][vertex-text-models]を参照してください。

[vertex-text-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text

[overrides]: g://box-ai/ai-agents/overrides-tutorial
