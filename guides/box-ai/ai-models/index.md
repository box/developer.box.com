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
total_steps: 22
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/ai-models/azure-openai-gpt-o4-mini-model-card
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-models/index.md
fullyTranslated: true
---
# サポートされているAIモデル

There are two types of AI models supported by Box: core and customer-enabled.

The core Box AI models are default in the Box AI service and are available to all customers.

The customer-enabled models are available for Box admins to enable in the Admin Console, or to request to have them available. In some instances, these models can be subject to additional terms.

## モデルの使用

How to use the supported AI models:

* [AIエージェントのデフォルト構成][agent]を取得する
* [`POST 2.0/ai/ask`][ask]、[`POST 2.0/ai/text_gen`][text-gen]、[`POST 2.0/ai/extract`][extract]、[`POST 2.0/ai/extract_structured`][extract-structured]の各エンドポイントで使用されるAIエージェントの構成を上書きする

APIコールで`model`パラメータを使用する際は、各タイルおよびモデルカードに表示されている**API名**を使用します。

たとえば、特定のモデルのAIエージェントの構成を取得するには、[model][ai-model]パラメータを使用して、API名`azure__openai__gpt_4o_mini`を指定します。プロバイダ名の後に**2つのアンダースコア**を使用していることを確認してください。

<Message type="notice">

The list may change depending on the model availability. Models offered in **Beta** mode have not been fully performance-tested at scale and are made available on an as-is basis. You may experience variability in model/output quality, availability, and accuracy.

</Message>

## Core Box AI Models

Box AI is powered by the following AI models. These models are integrated with Box AI to facilitate various use cases while adhering to enterprise grade standards. Below, you’ll find information about each model, including its capabilities, intended applications, and applicable usage guidelines.

<TileGrid rows="2">

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

</div>

</Tile>

<Tile type="gpt" title="azure__openai__gpt_o3" href="/guides/box-ai/ai-models/azure-openai-gpt-o3-model-card">

複雑なマルチステップタスクの処理で非常に効率的なマルチモーダルモデル。

<div>

<strong style="background-color: #fffbf3">

ベータ

</strong>

</div>

</Tile>

<Tile type="gpt" title="azure__openai__gpt_o4-mini" href="/guides/box-ai/ai-models/azure-openai-gpt-o4-mini-model-card">

複雑なマルチステップタスクの処理で非常に効率的なマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #fffbf3">

ベータ

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

</div>

</Tile>

<Tile type="gpt" title="azure__openai__gpt_4o" href="/guides/box-ai/ai-models/azure-openai-gpt-4o-model-card">

複雑なマルチステップタスクの処理で非常に効率的なマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

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

<Tile type="gemini" title="google__gemini_2_5_pro_preview" href="/guides/box-ai/ai-models/google-gemini-2-5-pro-review-model-card">

大規模で大量かつ高頻度のタスクに最適になるよう設計されたGeminiマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="gemini" title="google__gemini_2_5_flash_preview" href="/guides/box-ai/ai-models/google-gemini-2-5-flash-preview-model-card">

大規模で大量かつ高頻度のタスクに最適になるよう設計されたGeminiマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="gemini" title="google__gemini_2_0_flash_001" href="/guides/box-ai/ai-models/google-gemini-2-0-flash-001-model-card">

大規模で大量かつ高頻度のタスクに最適になるよう設計されたGeminiマルチモーダルモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

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

</div>

</Tile>

<Tile type="gemini" title="google__gemini_1_5_flash_001" href="/guides/box-ai/ai-models/google-gemini-1-5-flash-001-model-card">

大量のタスクやレイテンシの影響を受けやすいアプリケーション向けに構築されたGeminiマルチモーダルモデル。

<div>

<strong style="background-color: #e1ffe7">

利用可能

</strong>

</div>

</Tile>

<Tile type="gemini" title="google__gemini_1_5_pro_001" href="/guides/box-ai/ai-models/google-gemini-1-5-pro-001-model-card">

さまざまなマルチモーダルタスクで優れたパフォーマンスを発揮する基本モデル。

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

利用可能

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

</div>

</Tile>

<Tile type="model" title="aws__claude_3_7_sonnet" href="/guides/box-ai/ai-models/aws-claude-3-7-sonnet-model-card">

言語の理解と生成のタスクを強化するよう設計されたモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

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

</div>

</Tile>

<Tile type="model" title="ibm__llama_3_2_90b_vision_instruct" href="/guides/box-ai/ai-models/ibm-llama-3-2-90b-vision-instruct-model-card">

A model built for document-level understanding, interpretation of charts and graphs, and captioning of images.

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #e1ffe7">

利用可能

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

</div>

</Tile>

</TileGrid>

## Customer-enabled models

Certain Box AI customers may enable additional AI models upon their request and/or otherwise made available to them through their admin console. Use of these models may be subject to additional terms. By selecting a customer-enabled model, customer acknowledges that their data may be processed by additional [subprocessors][subprocessors] of their choice.

<TileGrid rows="2">

<Tile type="model" title="xai__grok_3_beta" href="/guides/box-ai/ai-models/xai-grok-3-beta-model-card">

データの抽出、コーディング、テキストの要約など、企業のユースケースに優れているモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #fffbf3">

ベータ

</strong>

</div>

</Tile>

<Tile type="model" title="xai__grok_3_mini_beta" href="/guides/box-ai/ai-models/xai-grok-3-mini-beta-model-card">

深い専門知識を必要としない、論理ベースのタスクに適している軽量のモデル。

<div>

<strong style="background-color: #e8e8e8">

チャット

</strong>

<strong style="background-color: #fffbf3">

ベータ

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
