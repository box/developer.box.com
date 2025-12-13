---
rank: 13
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: false
id: box-ai/ai-models/google-gemini-3-pro-model-card
type: guide
total_steps: 31
sibling_id: box-ai/ai-models
parent_id: box-ai/ai-models
next_page_id: box-ai/ai-models/google-gemini-2-5-pro-model-card
previous_page_id: box-ai/ai-models/azure-openai-gpt-4o-mini-model-card
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/google-gemini-3-pro-model-card.md
fullyTranslated: true
---
# Google Gemini 3 Pro

**Google Gemini 3 Pro**は、複雑なタスク向けのネイティブのマルチモーダルモデルです。このモデルは、テキスト、音声、画像、動画、コードリポジトリ全体を含むさまざまな情報源を処理することにより、膨大なデータセットを理解して困難な問題を解決できます。

## モデルの詳細

| 項目            | 値                       | 説明                                                                                 |
| ------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| モデル名          | **Google Gemini 3 Pro** | モデルの名前。                                                                            |
| モデルのカテゴリ      | **プレミアム**               | モデルのカテゴリ: 標準またはプレミアム。                                                              |
| APIモデル名       | `google__gemini_3_pro`  | [Box AI APIでのモデルの上書き][overrides]に使用されるモデルの名前。APIを動作させるには、ユーザーがこの名前を正確に指定する必要があります。 |
| ホスティングレイヤー    | **Google**              | LLMを安全にホストする、信頼できる組織。                                                              |
| モデルプロバイダ      | **Google**              | このモデルを提供する組織。                                                                      |
| リリース日         | **2025年11月18日**         | モデルのリリース日。                                                                         |
| ナレッジカットオフ日    | **2025年1月**             | モデルが情報の更新を取得しなくなった日付。                                                              |
| 入力コンテキストウィンドウ | **100万トークン**            | 入力コンテキストウィンドウでサポートされるトークン数。                                                        |
| 出力トークンの最大数    | **65,000トークン**          | 1回のリクエストでモデルが生成できるトークン数。                                                           |
| 経験に基づいたスループット | **指定なし**                | モデルが1秒あたりに生成できるトークン数。                                                              |
| オープンソース       | **いいえ**                 | モデルのコードを一般公開するかどうかを指定します。                                                          |

## その他のドキュメント

詳細については、[Google Gemini 3 Proの公式ドキュメント][vertex-ai-gemini-3-pro]を参照してください。

[vertex-ai-gemini-3-pro]: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/3-pro

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
