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
total_steps: 24
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/ai-models/openai-gpt-5-reasoning-alpha-model-card
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/index.md
fullyTranslated: true
---
# サポートされているAIモデル

Boxでは、さまざまなAIモデルがサポートされており、アクセスレベルと機能レベルという2つの側面で分類されます。

## アクセスレベル

### コアモデル

このモデルは、Box AIに組み込まれており、デフォルトですべてのお客様が利用できます。構成は必要ありません。

### 顧客希望で有効化できるモデル

このモデルは、Box管理者が管理コンソールで有効にするか、Boxに有効にするようリクエストする必要があります。一部のモデルは、追加の条件や料金の対象になる場合があります。

## 機能レベル

### 標準モデル

基本的な要約、Q&A、短いまたはシンプルなドキュメントからの構造化データの抽出など、高速でコスト効率のよいタスク向けに設計されており、大量のあまり複雑でないユースケースに最適です。

### プレミアムモデル

より高度な推論、大きなコンテキストウィンドウ、長いコンテンツ、複雑なコンテンツ、またはドメイン固有のコンテンツに対する優れたパフォーマンスを提供します。マルチステップ推論、大規模なメタデータ階層の理解、長いドキュメントや非構造化ドキュメントの分析などの高度なタスクに適しています。

<Message type="notice">

モデルは、顧客希望で有効化できるモデルかつプレミアムモデルにすることも、コアモデルかつ標準モデルにすることもできます。つまり、アクセルレベルと機能レベルは、それぞれ独立した分類です (たとえば、モデルは、アクセスレベルに関係なくどちらの機能レベルにもなる可能性があります)。この2つの分類は相互に補完します。

</Message>

## モデルの使用

サポートされているAIモデルの使用方法を以下に示します。

* [AIエージェントのデフォルト構成][agent]を取得する
* [`POST 2.0/ai/ask`][ask]、[`POST 2.0/ai/text_gen`][text-gen]、[`POST 2.0/ai/extract`][extract]、[`POST 2.0/ai/extract_structured`][extract-structured]の各エンドポイントで使用されるAIエージェントの構成を上書きする

APIコールで`model`パラメータを使用する際は、各タイルおよびモデルカードに表示されている**API名**を使用します。

たとえば、特定のモデルのAIエージェントの構成を取得するには、[model][ai-model]パラメータを使用して、API名`azure__openai__gpt_4o_mini`を指定します。プロバイダ名の後に**2つのアンダースコア**を使用していることを確認してください。

<Message type="notice">

このリストはモデルの提供状況により変更される可能性があります。

**ベータ**モードで提供されているモデルはパフォーマンスが大規模にテストされておらず、現状のままでの利用となるため、モデル/出力の品質、可用性、精度にはばらつきがある可能性があります。

</Message>

## Box AIのコアモデル

Box AIには以下のモデルが搭載されています。Box AIと統合されているこれらのモデルは、エンタープライズグレードの標準に準拠しながら、さまざまなユースケースを支援します。各モデルの機能、対象のアプリケーション、利用に関して該当するガイドラインなどの情報については、以下をご確認ください。

<TileGrid rows="2">

<Tile type="gpt" title="openai__gpt_5_reasoning_alpha" href="/guides/box-ai/ai-models/openai-gpt-5-reasoning-alpha-model-card">

高度な推論機能と長いコンテキストの理解を備えたマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

</div>

</Tile>

<Tile type="gpt" title="azure__openai__gpt_4_1_mini" href="/guides/box-ai/ai-models/azure-openai-gpt-4-1-mini-model-card">

軽量のタスクを処理するように設計されたマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

Box AI for Hubsのデフォルト

</strong>

<strong style="background-color: #e8e8e8">

Box AI for Documentsのデフォルト

</strong>

<strong style="background-color: #e8e8e8">

Box AI for NotesのQ&Aのデフォルト

</strong>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #fdfad8">

標準

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP High

</strong>

<strong style="background-color: #e1f8ff">

DOD IL2

</strong>

</div>

</Tile>

<Tile type="gpt" title="azure__openai__gpt_4_1" href="/guides/box-ai/ai-models/azure-openai-gpt-4-1-model-card">

複雑なマルチステップタスクの処理で非常に効率的なマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP High

</strong>

<strong style="background-color: #e1f8ff">

DOD IL2

</strong>

</div>

</Tile>

<Tile type="gpt" title="azure__openai__gpt_4o_mini" href="/guides/box-ai/ai-models/azure-openai-gpt-4o-mini-model-card">

軽量のタスクを処理するように設計されたマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #fdfad8">

標準

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP High

</strong>

<strong style="background-color: #e1f8ff">

DOD IL2

</strong>

</div>

</Tile>

<Tile type="gpt" title="azure__openai__gpt_4o" href="/guides/box-ai/ai-models/azure-openai-gpt-4o-model-card">

複雑なマルチステップタスクの処理で非常に効率的なマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #fffbf3">

プレビュー

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP High

</strong>

<strong style="background-color: #e1f8ff">

DOD IL2

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

<strong style="background-color: #fdfad8">

標準

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP High

</strong>

<strong style="background-color: #e1f8ff">

DOD IL2

</strong>

</div>

</Tile>

<Tile type="gemini" title="google__gemini_2_5_pro" href="/guides/box-ai/ai-models/google-gemini-2-5-pro-model-card">

100万トークンのコンテキストウィンドウと高度な推論機能が備わっている、Geminiマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP High

</strong>

<strong style="background-color: #e1f8ff">

DOD IL5

</strong>

</div>

</Tile>

<Tile type="gemini" title="google__gemini_2_0_flash_001" href="/guides/box-ai/ai-models/google-gemini-2-0-flash-001-model-card">

大規模かつ高頻度のタスクに最適になるよう設計されたGeminiマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #fdfad8">

標準

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP High

</strong>

<strong style="background-color: #e1f8ff">

DOD IL5

</strong>

</div>

</Tile>

<Tile type="gemini" title="google__gemini_2_0_flash_lite_preview" href="/guides/box-ai/ai-models/google-gemini-2-0-flash-lite-preview-02-05">

軽量のタスクを処理するように設計されたGeminiマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

Box AI Extractのデフォルト

</strong>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #fdfad8">

標準

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP High

</strong>

<strong style="background-color: #e1f8ff">

DOD IL5

</strong>

</div>

</Tile>

<Tile type="model" title="aws__claude_4_5_sonnet" href="/guides/box-ai/ai-models/aws-claude-4-5-sonnet-model-card">

複雑なエージェント、コーディング、自律的なマルチステップワークフローに優れているモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #fdfad8">

プレミアム

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

</div>

</Tile>

<Tile type="model" title="aws__claude_4_sonnet" href="/guides/box-ai/ai-models/aws-claude-4-5-sonnet-model-card">

日常的なユースケースに最先端のパフォーマンスをもたらすモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

</div>

</Tile>

<Tile type="model" title="aws__claude_4_opus" href="/guides/box-ai/ai-models/aws-claude-4-opus-model-card">

コーディングや複雑な問題解決に優れており、最先端のエージェント製品を支えるモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

</div>

</Tile>

<Tile type="model" title="aws__claude_3_7_sonnet" href="/guides/box-ai/ai-models/aws-claude-3-7-sonnet-model-card">

言語の理解と生成のタスクを強化するよう設計されたモデル

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

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

利用可能

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

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

利用可能

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

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

利用可能

</strong>

<strong style="background-color: #fdfad8">

標準

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

利用可能

</strong>

<strong style="background-color: #fdfad8">

標準

</strong>

<strong style="background-color: #e1f8ff">

FedRAMP Moderate

</strong>

</div>

</Tile>

<Tile type="model" title="ibm__llama_3_2_90b_vision_instruct" href="/guides/box-ai/ai-models/ibm-llama-3-2-90b-vision-instruct-model-card">

ドキュメントレベルの理解、図表やグラフの解釈、画像の見出し作成向けに構築されたモデルです。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #fdfad8">

標準

</strong>

</div>

</Tile>

<Tile type="model" title="ibm__llama_4_scout" href="/guides/box-ai/ai-models/ibm-llama-4-scout-model-card">

テキストとマルチモーダルのエクスペリエンスを可能にする、ネイティブのマルチモーダルAIモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

<strong style="background-color: #fdfad8">

標準

</strong>

</div>

</Tile>

</TileGrid>

## 顧客希望で有効化できるモデル

Box AIの一部の顧客は、リクエストに応じて追加のAIモデルを有効にしたり、管理コンソールから利用できる追加のAIモデルを有効にしたりすることができます。これらのモデルの使用は、追加の条件の対象になる場合があります。顧客希望で有効化できるモデルを選択すると、顧客は、選択した追加の[サブプロセッサ][subprocessors]によって自身のデータが処理される可能性があることに同意したことになります。

<TileGrid rows="2">

<Tile type="model" title="xai__grok_3_beta" href="/guides/box-ai/ai-models/xai-grok-3-beta-model-card">

データの抽出、コーディング、テキストの要約など、企業のユースケースに優れているモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #f0e2ff">

ベータ

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

</div>

</Tile>

<Tile type="model" title="xai__grok_3_mini_reasoning_beta" href="/guides/box-ai/ai-models/xai-grok-3-mini-beta-model-card">

深い専門知識を必要としない、論理ベースのタスクに適している軽量のモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #f0e2ff">

ベータ

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

</div>

</Tile>

<Tile type="gpt" title="openai__gpt_o3" href="/guides/box-ai/ai-models/openai-gpt-o3-model-card">

複雑なマルチステップタスクの処理で非常に効率的なマルチモーダルモデル。

<div>

<strong style="background-color: #f0e2ff">

ベータ

</strong>

<strong style="background-color: #f8d59b">

プレミアム

</strong>

</div>

</Tile>

</TileGrid>

[ask]: e://post_ai_ask

[text-gen]: e://post_ai_text_gen

[extract]: e://post_ai_extract

[extract-structured]: e://post_ai_extract_structured

[agent]: e://get_ai_agent_default

[azure-ai-mini-4o-model]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=python-secure#gpt-4o-and-gpt-4-turbo

[vertex-ai-model]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#models

[vertex-ai-gemini-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-models

[vertex-text-models]: https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text

[azure-ai-embeddings]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#embeddings

[ai-model]: e://get-ai-agent-default#param-model

[aws-claude]: https://aws.amazon.com/bedrock/claude/

[aws-titan]: https://aws.amazon.com/bedrock/titan/

[subprocessors]: https://www.box.com/legal/subprocessors
