---
rank: 4
related_endpoints:
  - get_ai_agent_default
  - post_ai_text_gen
  - post_ai_ask
related_guides:
  - box-ai/ai-tutorials/prerequisites
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/default-agent-overrides
category_id: box-ai
subcategory_id: box-ai/ai-agents
is_index: false
id: box-ai/ai-agents/ai-agent-overrides
type: guide
total_steps: 3
sibling_id: box-ai/ai-agents
parent_id: box-ai/ai-agents
next_page_id: ''
previous_page_id: box-ai/ai-agents/get-agent-default-config
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-agents/ai-agent-overrides.md
fullyTranslated: true
---
# AIモデルの構成の上書き

<Message type="notice">

メタデータ抽出に関連するエンドポイントは、現在、BoxのMain Beta Agreementに従い提供されるベータ機能のため、利用可能な機能が変更される可能性があります。Box AI APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

`ai_agent`構成を使用すると、デフォルトのAIモデルの構成を上書きできます。これは、以下のエンドポイントで使用できます。

* [`POST ai/ask`][ask]
* [`POST ai/text_gen`][text-gen]
* [`POST ai/extract`][extract]
* [`POST ai/extract_structured`][extract-structured]

<Message type="tip">

デフォルト構成を取得するには、[`GET ai_agent_default`][agent]エンドポイントを使用してください。

</Message>

上書きの例を以下に示します。

* 組織のニーズに基づいて、デフォルトのAIモデルをカスタムのAIモデルに置き換える。
* ベースとなる`prompt`を微調整し、よりカスタマイズされたユーザーエクスペリエンスを実現する。
* `temperature`などのパラメータを変更して、結果の創造性を調整する。

## 構成のサンプル

`ai/ask`の場合の構成全体は以下のとおりです。

```sh
{
  "type": "ai_agent_ask",
  "basic_text": {
    "llm_endpoint_params": {
      "type": "openai_params",
      "frequency_penalty": 1.5,
      "presence_penalty": 1.5,
      "stop": "<|im_end|>",
      "temperature": 0,
      "top_p": 1
    },
    "model": "azure__openai__gpt_3_5_turbo_16k",
    "num_tokens_for_completion": 8400,
    "prompt_template": "It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.",
    "system_message": "You are a helpful travel assistant specialized in budget travel"
  },
  "basic_text_multi": {
    "llm_endpoint_params": {
      "type": "openai_params",
      "frequency_penalty": 1.5,
      "presence_penalty": 1.5,
      "stop": "<|im_end|>",
      "temperature": 0,
      "top_p": 1
    },
    "model": "azure__openai__gpt_3_5_turbo_16k",
    "num_tokens_for_completion": 8400,
    "prompt_template": "It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.",
    "system_message": "You are a helpful travel assistant specialized in budget travel"
  },
  "long_text": {
    "embeddings": {
      "model": "openai__text_embedding_ada_002",
      "strategy": {
        "id": "basic",
        "num_tokens_per_chunk": 64
      }
    },
    "llm_endpoint_params": {
      "type": "openai_params",
      "frequency_penalty": 1.5,
      "presence_penalty": 1.5,
      "stop": "<|im_end|>",
      "temperature": 0,
      "top_p": 1
    },
    "model": "azure__openai__gpt_3_5_turbo_16k",
    "num_tokens_for_completion": 8400,
    "prompt_template": "It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.",
    "system_message": "You are a helpful travel assistant specialized in budget travel"
  },
  "long_text_multi": {
    "embeddings": {
      "model": "openai__text_embedding_ada_002",
      "strategy": {
        "id": "basic",
        "num_tokens_per_chunk": 64
      }
    },
    "llm_endpoint_params": {
      "type": "openai_params",
      "frequency_penalty": 1.5,
      "presence_penalty": 1.5,
      "stop": "<|im_end|>",
      "temperature": 0,
      "top_p": 1
    },
    "model": "azure__openai__gpt_3_5_turbo_16k",
    "num_tokens_for_completion": 8400,
    "prompt_template": "It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.",
    "system_message": "You are a helpful travel assistant specialized in budget travel"
  }
}

```

### パラメータセットの相違点

`ask`、`text_gen`、`extract`、`extract_structured`に使用できるパラメータのセットは、APIコールに応じて若干異なります。

* `ask`エンドポイントのエージェント構成には、`basic_text`、`basic_text_multi`、`long_text`、`long_text_multi`パラメータが含まれます。これは、リクエストの対象となる項目を単一にするか複数にするかを指定するために使用する`mode`パラメータが原因です。`mode`として`multiple_item_qa`を選択した場合は、上書き用に`multi`パラメータも使用できます。

* `text_gen`のエージェント構成には、テキストの生成に使用される`basic_gen`パラメータが含まれます。

### LLMエンドポイントパラメータ

`llm_endpoint_params`構成のオプションは、全体的なAIモデルが[Google][google-params]ベースか、[OpenAI][openai-params]ベースか、[AWS][aws-params]ベースかによって異なります。

たとえば、どちらの`llm_endpoint_params`オブジェクトも`temperature`パラメータを受け入れますが、モデルによって結果が異なります。

GoogleモデルとAWSモデルの場合、[`temperature`][google-temp]はレスポンス生成時のサンプリングに使用されます。レスポンス生成は`top-P`と`top-K`が適用された場合に発生します。temperatureは、トークン選択におけるランダム性の程度を制御します。

OpenAIモデルの場合、[`temperature`][openai-temp]は、値が0～2の間のサンプリングtemperatureとなります。0.8のような高い値を指定すると、出力がよりランダムになるのに対し、0.2のような低い値を指定すると、出力はより焦点を絞った、決定的なものになります。独自の構成を導入する場合は、`temperature`と`top_p`の両方ではなく、いずれかを使用してください。

### システムメッセージ

`system_message`パラメータの目的は、LLMがその役割と実行するべき内容を理解するのを支援することです。たとえば、旅行日程を処理するソリューションの場合は、次のようなシステムメッセージを追加できます。

```sh
You are a travel agent aid. You are going to help support staff process large amounts of schedules, tickets, etc.

```

このメッセージは、送信するコンテンツとは別ですが、結果を改善できます。

### 完了に必要なトークンの数

`num_tokens_for_completion`パラメータは、Box AIが返すことのできる[トークン][openai-tokens]の数を表します。この数値は、使用されるモデルによって異なる場合があります。

[ask]: e://post_ai_ask#param_ai_agent

[text-gen]: e://post_ai_text_gen#param_ai_agent

[extract]: e://post_ai_extract#param_ai_agent

[extract-structured]: e://post_ai_extract_structured#param_ai_agent

[google-params]: r://ai-llm-endpoint-params-google

[openai-params]: r://ai-llm-endpoint-params-openai

[openai-tokens]: https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them

[agent]: e://get_ai_agent_default

[google-temp]: https://ai.google.dev/gemini-api/docs/models/generative-models#model-parameters

[openai-temp]: https://community.openai.com/t/temperature-top-p-and-top-k-for-chatbot-responses/295542

[aws-params]: r://ai-llm-endpoint-params-aws
