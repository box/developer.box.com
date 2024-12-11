---
rank: 1
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-agents/get-agent-default-config
  - box-ai/ai-tutorials/default-agent-overrides
alias_paths:
  - guides/box-ai/supported-models
category_id: box-ai
subcategory_id: box-ai/ai-models
is_index: true
id: box-ai/ai-models
type: guide
total_steps: 15
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/ai-models/azure-openai-gpt-4o-2024-05-13-model-card
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/index.md
fullyTranslated: true
---
# サポートされているAIモデル

<Message type="notice">

メタデータ抽出に関連するエンドポイントは、現在、BoxのMain Beta Agreementに従い提供されるベータ機能のため、利用可能な機能が変更される可能性があります。Box AI APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

## モデルの使用

サポートされているAIモデルを使用できます。

* [AIエージェントのデフォルト構成][agent]を取得する
* [`POST 2.0/ai/ask`][ask]、[`POST 2.0/ai/text_gen`][text-gen]、[`POST 2.0/ai/extract`][extract]、[`POST 2.0/ai/extract_structured`][extract-structured]の各エンドポイントで使用されるAIエージェントの構成を上書きする

APIコールで`model`パラメータを使用する際は、各タイルおよびモデルカードに表示されている**API名**を使用します。

たとえば、特定のモデルのAIエージェントの構成を取得するには、[model][ai-model]パラメータを使用して、API名`azure__openai__gpt_4o_mini`を指定します。プロバイダ名の後に**2つのアンダースコア**を使用していることを確認してください。

<Message type="notice">

このリストはモデルの提供状況により変更される可能性があります。**プレビュー**モードで提供されているモデルはパフォーマンスが大規模にテストされておらず、現状のままの利用となるため、モデル/出力の品質、可用性、精度には変動がある可能性があります。

</Message>

<TileGrid rows="2">

<Tile type="gpt" title="azure__openai__gpt_4o_mini" href="/guides/box-ai/ai-models/azure-openai-gpt-4o-mini-model-card">

軽量のタスクを処理するように設計されたマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

Box AI for Documentsのデフォルト

</strong>

<strong style="background-color: #e8e8e8">

Box AI for NotesのQ&Aのデフォルト

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="gpt" title="azure_openai__gpt_4o_2024_05_13" href="/guides/box-ai/ai-models/azure-openai-gpt-4o-2024-05-13-model-card">

複雑なマルチステップタスクの処理で非常に効率的なマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

Box AI for Hubsのデフォルト

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="gemini" title="google__gemini_1_5_flash_001" href="/guides/box-ai/ai-models/google-gemini-1-5-flash-001-model-card">

大量のタスクやレイテンシの影響を受けやすいアプリケーション向けに構築された、最速のGeminiマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

Box AI Extractのデフォルト

</strong>

<strong style="background-color: #fffbf3">

プレビュー

</strong>

</div>

</Tile>

<Tile type="gemini" title="google__gemini_1_5_pro_001" href="/guides/box-ai/ai-models/google-gemini-1-5-pro-001-model-card">

さまざまなマルチモーダルタスクで優れたパフォーマンスを発揮する基本モデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #fffbf3">

プレビュー

</strong>

</div>

</Tile>

<Tile type="gpt" title="azure__openai__text_embedding_ada_002" href="/guides/box-ai/ai-models/azure-text-embedding-ada-002-model-card">

最も優れた第2世代のテキスト埋め込みモデル。テキスト検索、コード検索、文の類似性判定に優れています。

<div>

<strong style="background-color: #e8e8e8">

埋め込み

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="model" title="google__textembedding_gecko" href="/guides/box-ai/ai-models/google-textembedding-gecko-model-card">

テキスト埋め込みモデル。テキストデータを、機械学習アルゴリズムで処理できる数値ベクトルに変換します。

<div>

<strong style="background-color: #e8e8e8">

埋め込み

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="model" title="google__textembedding_gecko_002" href="/guides/box-ai/ai-models/google-textembedding-gecko-002-model-card">

テキスト埋め込みモデル。テキストデータを、機械学習アルゴリズムで処理できる数値ベクトルに変換します。

<div>

<strong style="background-color: #e8e8e8">

埋め込み

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="model" title="google__textembedding_gecko_003" href="/guides/box-ai/ai-models/google-textembedding-gecko-003-model-card">

テキスト埋め込みモデル。テキストデータを、機械学習アルゴリズムで処理できる数値ベクトルに変換します。

<div>

<strong style="background-color: #e8e8e8">

埋め込み

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="palm" title="google__text_unicorn" href="/guides/box-ai/ai-models/google-text-unicorn-model-card">

広範な埋め込み知により、コーディングなどの複雑なタスクを処理できるモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="palm" title="google__text_bison" href="/guides/box-ai/ai-models/google-text-bison-model-card">

ドキュメントの要約、質問への回答、コンテンツ分類ラベルの作成が可能なモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="palm" title="google__text_bison_32k" href="/guides/box-ai/ai-models/google-text-bison-32-model-card">

ドキュメントの要約、質問への回答、コンテンツ分類ラベルの作成が可能な、強化された**text-bison**モデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="model" title="aws__claude_3_haiku" href="/guides/box-ai/ai-models/aws-claude-3-haiku-model-card">

創造性豊かな文章作成AIや会話AIなど、さまざまな言語タスク向けにカスタマイズされたモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

プレビュー

</strong>

</div>

</Tile>

<Tile type="model" title="aws__claude_3_sonnet" href="/guides/box-ai/ai-models/aws-claude-3-sonnet-model-card">

高度な言語タスク向けに設計されており、理解とコンテキスト処理に重点が置かれているモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

プレビュー

</strong>

</div>

</Tile>

<Tile type="model" title="aws__claude_3_5_sonnet" href="/guides/box-ai/ai-models/aws-claude-3-5-sonnet-model-card">

言語の理解と生成のタスクを強化するよう設計されたモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

プレビュー

</strong>

</div>

</Tile>

<Tile type="model" title="aws__titan_text_lite" href="/guides/box-ai/ai-models/aws-titan-text-lite-model-card">

高度な言語処理が可能なモデル。幅広いコンテキストを処理できるため、複雑なタスクに適しています。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

プレビュー

</strong>

</div>

</Tile>

</TileGrid>

[ask]: e://post_ai_ask

[text-gen]: e://post_ai_text_gen

[extract]: e://post_ai_extract

[extract-structured]: e://post_ai_extract_structured

[agent]: e://get_ai_agent_default

[azure-ai-gpt-3-5-model]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#gpt-35

[azure-ai-mini-4o-model]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=python-secure#gpt-4o-and-gpt-4-turbo

[vertex-ai-model]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#models

[vertex-ai-gemini-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-models

[vertex-text-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text

[azure-ai-embeddings]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#embeddings

[ai-model]: e://get-ai-agent-default#param-model

[aws-claude]: https://aws.amazon.com/bedrock/claude/

[aws-titan]: https://aws.amazon.com/bedrock/titan/