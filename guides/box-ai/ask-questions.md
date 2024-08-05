---
rank: 3
related_endpoints:
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/generate-text
  - box-ai/get-agent-default-config
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/ask-questions
type: guide
total_steps: 5
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/generate-text
previous_page_id: box-ai/prerequisites
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ask-questions.md
fullyTranslated: true
---
# Box AIに質問する

<Message type="notice">

Box AIのPlatform APIは、現在ベータ版のため、利用可能な機能が変更される可能性があります。Box AIのPlatform APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

Box AI APIを使用すると、指定した1ファイルまたは一連のファイルについて質問し、そのコンテンツに基づいた応答を得ることができます。たとえば、Boxでドキュメントを表示している場合に、Box AIに対して、コンテンツの要約を求めることができます。

## リクエストの送信

質問を含むリクエストを送信するには、`POST /2.0/ai/ask`エンドポイントを使用し、必須のパラメータを指定します。

```curl
curl -i -L POST "https://api.box.com/2.0/ai/ask" \
     -H "content-type: application/json" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
         "mode": "single_item_qa",
         "prompt": "What is the value provided by public APIs based on this document?",
         "items": [
        {
            "type": "file",
            "id": "9842787262"
        }
       ],
          "ai_agent": {
            "type": "ai_agent_ask",
            "long_text": {
              "model": "openai__gpt_3_5_turbo",
              "system_message": "You are a helpful travel assistant specialized in budget travel",
              "prompt_template": "It is `{current_date}`, and I have $8000 and want to spend a week in the Azores. What should I see?",
              "num_tokens_for_completion": 8400,
              "llm_endpoint_params": {
                "type": "openai_params",
                "temperature": 0.0,
                "top_p": 1.0,
                "frequency_penalty": 1.5,
                "presence_penalty": 1.5,
                "stop": "<|im_end|>"
              },
              "embeddings": {
                "model": "openai__text_embedding_ada_002",
                "strategy": {
                  "id": "basic",
                  "num_tokens_per_chunk": 8400
                }
              }
            },
            "basic_text": {
              "model": ""openai__gpt_3_5_turbo"",
              "system_message": "You are a helpful travel assistant specialized in budget travel",
              "prompt_template": "It is `{current_date}`, and I have $8000 and want to spend a week in the Azores. What should I see?",
              "num_tokens_for_completion": 8400,
              "llm_endpoint_params": {
                "type": "openai_params",
                "temperature": 0.0,
                "top_p": 1.0,
                "frequency_penalty": 1.5,
                "presence_penalty": 1.5,
                "stop": "<|im_end|>"
              }
            },
              "long_text_multi": {
                "model": "openai__gpt_3_5_turbo",
                "system_message": "You are a helpful travel assistant specialized in budget travel",
                "prompt_template": "It is `{current_date}`, and I have $8000 and want to spend a week in the Azores. What should I see?",
                "num_tokens_for_completion": 8400,
                "llm_endpoint_params": {
                  "type": "openai_params",
                  "temperature": 0.0,
                  "top_p": 1.0,
                  "frequency_penalty": 1.5,
                  "presence_penalty": 1.5,
                  "stop": "<|im_end|>"
                },
                "embeddings": {
                  "model": "openai__text_embedding_ada_002",
                  "strategy": {
                    "id": "basic",
                    "num_tokens_per_chunk": 8400
                  }
                }
              },
              "basic_text_multi": {
                "model": ""openai__gpt_3_5_turbo"",
                "system_message": "You are a helpful travel assistant specialized in budget travel",
                "prompt_template": "It is `{current_date}`, and I have $8000 and want to spend a week in the Azores. What should I see?",
                "num_tokens_for_completion": 8400,
                  "llm_endpoint_params": {
                    "type": "openai_params",
                    "temperature": 0.0,
                    "top_p": 1.0,
                    "frequency_penalty": 1.5,
                    "presence_penalty": 1.5,
                    "stop": "<|im_end|>"
                  }
        }
      }'

```

### 認証

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AIを使用するための前提条件][prereq]を確認してください。

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ            | 説明                                                                                                                                                                                                                                                                                                                                        | 使用可能な値                               | 例                                                                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`mode`**       | リクエストのタイプ。1つのファイルと一連のファイルのどちらに関する質問かを指定できます。1ファイルの場合、Box AI APIは、最大1 MBのテキストレプリゼンテーションをサポートします。ファイルサイズが1 MBを超えた場合は、テキストレプリゼンテーションの最初の1 MBが処理されます。複数のファイルのリストを取得する場合、上限は25ファイルです。`mode`を`single_item_qa`に設定すると、`items`配列には要素を1つしか取得できません。                                                                                                  | `single_item_qa`, `multiple_item_qa` | `single_item_qa`                                                                                                                                                            |
| **`prompt`**     | ドキュメントまたはコンテンツに関する質問。プロンプトの長さは10000文字以内にする必要があります。                                                                                                                                                                                                                                                                                        |                                      | `What is this document about?`                                                                                                                                              |
| **`items.id`**   | 入力データとして指定するBoxファイルID。                                                                                                                                                                                                                                                                                                                    |                                      | `112233445566`                                                                                                                                                              |
| **`items.type`** | 指定した入力データのタイプ。現在は、1つのファイルまたは複数のファイルを指定できます。                                                                                                                                                                                                                                                                                               | `file`                               | `file`                                                                                                                                                                      |
| `items.content`  | 項目のコンテンツ (多くの場合はテキストレプリゼンテーション)。                                                                                                                                                                                                                                                                                                          |                                      | `An application programming interface (API) is a way for two or more computer programs or components to communicate with each other. It is a type of software interface...` |
| `ai_agent`       | デフォルトのエージェント構成を上書きするために使用されるAIエージェント。このパラメータを使用すると、短いテキストや長いテキストを表す[`model`][model-param]パラメータを使用してデフォルトのLLMをカスタムのLLMに置き換えたり、よりカスタマイズされたユーザーエクスペリエンスを実現できるようにベースとなる[`prompt`][prompt-param]を微調整したり、`temperature`などのLLMパラメータを変更して結果の創造性を調整したりすることができます。`ai_agent`パラメータを使用する前に、[`GET 2.0/ai_agent_default`][agent]リクエストを使用してデフォルト構成を取得できます。 |                                      |                                                                                                                                                                             |

[prereq]: g://box-ai/prerequisites

[agent]: e://get_ai_agent_default

[model-param]: r://ai_agent_ask#param_basic_text_model

[prompt-param]: e://ai_agent_ask#param_basic_text_prompt_template
