---
rank: 4
related_endpoints:
  - get_ai_agent_default
  - post_ai_text_gen
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/ask-questions
  - box-ai/generate-text
category_id: box-ai
subcategory_id: box-ai/ai-agents
is_index: false
id: box-ai/ai-agents/overrides-tutorial
type: guide
total_steps: 2
sibling_id: box-ai/ai-agents
parent_id: box-ai/ai-agents
next_page_id: ''
previous_page_id: box-ai/ai-agents/get-agent-default-config
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-agents/overrides-tutorial.md
fullyTranslated: true
---
# AIモデルの構成の上書き

<Message type="notice">

Box AI APIは、現在、BoxのMain Beta Agreementに従い提供されるベータ機能のため、利用可能な機能は変更される可能性があります。Box AI APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

`agent_ai`構成を使用すると、デフォルトのAIモデルの構成を上書きできます。これは、以下のエンドポイントで使用できます。

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

`ai/ask`の場合の構成のサンプルは以下のとおりです。

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

`llm_endpoint_params`構成のオプションは、全体的なAIモデルが[Google][google-params]ベースか[OpenAI][openai-params]ベースかによって異なります。

たとえば、どちらの`llm_endpoint_params`オブジェクトも`temperature`パラメータを受け入れますが、モデルによって結果が異なります。

Googleモデルの場合、[`temperature`][google-temp]はレスポンス生成時のサンプリングに使用されます。レスポンス生成は`top-P`と`top-K`が適用された場合に発生します。temperatureは、トークン選択におけるランダム性の程度を制御します。

OpenAIモデルの場合、[`temperature`][openai-temp]は、値が0～2の間のサンプリングtemperatureとなります。0.8のような高い値を指定すると、出力がよりランダムになるのに対し、0.2のような低い値を指定すると、出力はより焦点を絞った、決定的なものになります。独自の構成を導入する場合は、`temperature`と`top_p`の両方ではなく、いずれかを使用してください。

### システムメッセージ

`system_message`パラメータの目的は、LLMがその役割と実行するべき内容を理解するのを支援することです。たとえば、旅行日程を処理するソリューションの場合は、次のようなシステムメッセージを追加できます。

```sh
You are a travel agent aid. You are going to help support staff process large amounts of schedules, tickets, etc.

```

このメッセージは、送信するコンテンツとは別ですが、結果を改善できます。

### 完了に必要なトークンの数

`num_tokens_for_completion`パラメータは、Box AIが返すことのできる[トークン][openai-tokens]の数を表します。この数値は、使用されるモデルによって異なる場合があります。

## ユースケース: Box AI Q&A

この例では、`prompt_template`パラメータを使用してクエリの結果を変更する方法を示します。最初の手順として、Box AIに対し、Box AI for Documentsに関するドキュメントの要約を依頼します。指定されているドキュメントは1つだけなので、`mode`パラメータは`single_item_qa`に設定されています。

```sh
curl -i -L POST "https://api.box.com/2.0/ai/ask" \
-H "content-type: application/json" \
-H "authorization: <Bearer TOKEN>" \
-d '{
     "mode": "single_item_qa",
     "prompt": "Summarize this article about Box AI for Documents",
     "items": [
          {
               "type": "file",
               "id": "123467890"
          }
       ]
     }'

```

次のようなレスポンスが返されます。

```sh
{
    "answer": "Box AI for Documents is a tool that enhances document analysis by allowing users to summarize content, identify key points, and draft outlines directly from files in Box. It supports various file types, including text documents, spreadsheets, and presentation slides. Users can initiate interactions with Box AI through the web app, where they can select suggestions or type specific questions. Responses are generated in real time, and users have options to save or clear chat history. The document also provides guidelines for effective inquiries and troubleshooting tips for potential issues with using Box AI.",
    "created_at": "2024-10-08T00:29:07.283-07:00",
    "completion_reason": "done"
}

```

結果をさらに改善するには、`prompt_template`パラメータを使用して、Box AIに対する指示をさらに追加できます。この例では、レスポンスの語調を変更しましょう。

```sh
{
    "prompt": "Summarize this article about Box AI for Documents",
    "mode": "single_item_qa",
    "items": [
        {
            "id": "123467890",
            "type": "file"
        }
    ],
    "ai_agent": {
        "type": "ai_agent_ask",
        "basic_text": {
            "prompt_template": "prompt_template": "{user_question} Write the summary in an informal way.{content}"
        },
      }
    }
}

```

レスポンスは若干砕けた表現になります。

```sh
{
    "answer": "Box AI for Documents is a tool that helps you analyze and gain insights from your documents in Box. You can use it to summarize content, identify key points, and draft outlines, making it easier to handle meeting notes, reports, and marketing materials. To get started, just open a file in the Box web app and click the Box AI button. It offers quick suggestions like summarizing the document or checking for next steps. Responses are generated in real time, and you can save them or clear chat history as needed. Just remember, Box AI only pulls info from the document you're viewing, so be specific with your questions!",
    "created_at": "2024-10-08T00:38:01.767-07:00",
    "completion_reason": "done"
}

```

## ユースケース: テキストの生成

この例では、`ai_agent`のオプションでAIモデルを変更した場合にテキストの生成方法にどのような影響があるかを示します。

最初に、`POST ai/text_gen`エンドポイントを使用してテキストを生成しましょう。このエンドポイントは、デフォルトで、OpenAI 3.5 turboモデルを使用しています。

```sh
curl -i -L POST "https://api.box.com/2.0/ai/text_gen" \
     -H "content-type: application/json" \
     -H "authorization: Bearer TOKEN" \
     -d '{
          "prompt": "Write a short post about Box AI for documents.Make it highlight the benefits of the solution. You can add some emoticons.",
          "items": [
               {
                    "id": "123467890",
                    "type": "file"
               }
          ]
     }

```

レスポンスは次のようになります。

```sh
{
    "answer": "🌟 Exciting News! 🌟\n\nIntroducing Box AI for documents - your new best friend in creating smarter, more efficient content! 🤖💡\n\n🔹 Say goodbye to manual searching and organizing - Box AI does it all for you!\n🔹 Enjoy lightning-fast document analysis and categorization.\n🔹 Boost productivity with automated suggestions and smart recommendations.\n🔹 Collaborate seamlessly with real-time insights and intelligent tagging.\n\nExperience the future of document creation with Box AI - making work easier, faster, and more fun! 🚀💻 #BoxAI #SmartDocuments",
    "created_at": "2024-10-08T01:19:06.22-07:00",
    "completion_reason": "done"
}

```

`ai_agent`構成を使用してモデルを変更しましょう。

```sh
curl -i -L POST "https://api.box.com/2.0/ai/text_gen" \
     -H "content-type: application/json" \
     -H "authorization: Bearer TOKEN" \
     -d '{
          "prompt": "Write a short post about Box AI for documents.Make it highlight the benefits of the solution. You can add some emoticons.",
          "items": [
               {
                    "id": "123467890",
                    "type": "file"
               }
          ],
          "ai_agent": {
               "type": "ai_agent_text_gen",
               "basic_gen": {
                 "model": "openai__gpt_4o_2024_05_13"
          }
       }
     }

```

モデルを切り替えた後は、レスポンスが若干異なります。

```sh
{
    "answer": "🚀 **Boost Your Productivity with Box AI for Documents!** 📄✨\n\nSay goodbye to tedious document creation and editing! With Box AI, you can streamline your workflow and focus on what truly matters. Here’s why you’ll love it:\n\n1. **Smart Suggestions** 🤖: Get real-time recommendations to enhance your content.\n2. **Automated Formatting** 📝: Ensure consistency across all your documents effortlessly.\n3. **Collaboration Made Easy** 👥: Work seamlessly with your team, no matter where they are.\n4. **Time-Saving Templates** ⏳: Use pre-built templates to speed up document creation.\n5. **Enhanced Accuracy** ✅: Reduce errors with intelligent proofreading.\n\nTransform the way you work with documents and experience a new level of efficiency with Box AI! 🌟",
    "created_at": "2024-10-08T01:28:36.777-07:00",
    "completion_reason": "done"
}

```

ご覧のとおり、ある程度異なったレスポンスになったことがわかります。モデルの切り替えにより、Box AIに対する操作を最適化し、ニーズに最適なモデルを選択できます。

## ユースケース: メタデータ抽出

モデルを切り替えると、メタデータ抽出の結果も異なる場合があります。契約書のサンプルを使用して、メタデータを抽出しましょう。この例で使用されているモデルはGoogle Geminiです。

```sh
curl -i -L 'https://api.box.com/2.0/ai/extract' \
     -H 'content-type: application/json' \
     -H 'authorization: Bearer TOKEN' \
     -d '{
        "prompt": "Extract any data that would be good metadata to save for future contracts.",
        "items": [
          {
            "type": "file",
            "id": "123456789"
          }
        ]
      }'

```

レスポンスは一連のメタデータになります。

```sh
{
    "answer": "{\"Buyer Legal Entity Name\": \"Acme Retail Corp.\", \"Supplier Legal Entity Name\": \"Acme Manufacturing Inc.\", \"Buyer Contact Person\": \"Jane Doe\", \"Supplier Contact Person\": \"Eva Smith\", \"Payment Term\": \"payment in full before pickup of goods\", \"Invoice Currency\": \"Euro\", \"Incoterm\": \"FCA Amsterdam\", \"Governing Law\": \"laws state jurisdiction in which supplier is located\", \"Effective Date\": \"March 27, 2024\", \"Buyer Signature Date\": \"March 28th, 2024\", \"Supplier Signature Date\": \"March 28th, 2024\"}",
    "created_at": "2024-10-08T01:53:14.993-07:00",
    "completion_reason": "done"
}

```

モデルを最新のOpenAIオプションに変更しましょう。

```sh
curl -i -L 'https://api.box.com/2.0/ai/extract' \
     -H 'content-type: application/json' \
     -H 'authorization: Bearer TOKEN' \
     -d '{
        "prompt": "Extract any data that would be good metadata to save for future contracts.",
        "items": [
          {
            "type": "file",
            "id": "123456789"
          }
        ],
          "ai_agent": {
            "type": "ai_agent_extract",
            "basic_text": {
                "model": "openai__gpt_4o_2024_05_13"
            }
         }
      }'

```

このモデルを使用すると、結果として、レスポンスにはさらに多くのメタデータエントリが列挙されます。

```sh
{
    "answer": "{\"Effective Date\": \"March 27, 2024\", \"Supplier Legal Entity Name\": \"Acme Manufacturing Inc.\", \"Supplier Registered Office Address\": \"123 Main Street\", \"Supplier Contact Person(s)\": \"Eva Smith\", \"Buyer Legal Entity Name\": \"Acme Retail Corp.\", \"Buyer Registered Office Address\": \"456 Market Avenue\", \"Buyer Contact Person(s)\": \"Jane Doe\", \"Incoterm\": \"FCA Amsterdam\", \"Payment Term\": \"payment in full before pickup of goods\", \"Invoice Currency\": \"Euro\", \"Buyer Printed Name\": \"Jane Doe\", \"Buyer Date\": \"March 28th, 2024\", \"Buyer Title / Position\": \"CEO\", \"Seller Printed Name\": \"Eve Smith\", \"Seller Date\": \"March 28th, 2024\", \"Seller Title / Position\": \"Sales Manager\"}",
    "created_at": "2024-10-08T01:54:28.099-07:00",
    "completion_reason": "done"
}

```

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
