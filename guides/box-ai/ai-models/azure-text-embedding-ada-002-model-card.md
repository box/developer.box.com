---
rank: 8
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/azure-text-embedding-ada-002-model-card
type: guide
total_steps: 23
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/google-gemini-2-5-pro-preview-model-card
previous_page_id: box-ai/ai-models/azure-openai-gpt-4o-mini-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/azure-text-embedding-ada-002-model-card.md
fullyTranslated: true
---
# Azure text-embedding-ada-002

**Azure text-embedding-ada-002**は、軽量のタスクを処理するように設計されたマルチモーダルモデルです。

## モデルの詳細

| 項目            | 値                                       | 説明                                                                                 |
| ------------- | --------------------------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **text-embedding-ada-002**              | モデルの名前。                                                                            |
| APIモデル名       | `azure__openai__text_embedding_ada_002` | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Microsoft Azure**                     | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Microsoft Azure**                     | このモデルを提供する組織。                                                                      |
| リリース日         | **2022年12月**                            | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2021年9月**                             | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **8,000トークン**                           | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **該当なし**                                | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **1,000**                               | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                                 | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[Azure Embeddingsモデルの公式ドキュメント][azure-ai-embeddings]を参照してください。

[azure-ai-embeddings]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#embeddings

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
