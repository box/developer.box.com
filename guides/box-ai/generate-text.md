---
rank: 6
related_endpoints:
  - post_ai_text_gen
related_guides:
  - box-ai/prerequisites
  - box-ai/ask-questions
  - box-ai/get-agent-default-config
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/generate-text
type: guide
total_steps: 5
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/get-agent-default-config
previous_page_id: box-ai/ask-questions
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/generate-text.md
fullyTranslated: true
---
# Box AIを使用してテキストを生成する

<Message type="notice">

Box AIのPlatform APIは、現在ベータ版のため、利用可能な機能が変更される可能性があります。Box AIのPlatform APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

Box AIを使用すると、提供されたコンテンツに基づいてテキストを生成できます。たとえば、Box Notesで参照または作成したコンテンツに基づいてテンプレートを生成するようBox AIに求めることができます。その後、生成されたテキストを直接ドキュメントに埋め込むことができます。

## リクエストの送信

リクエストを送信するには、`POST /2.0/ai/text_gen`エンドポイントを使用します。

```curl
curl -i -L POST "https://api.box.com/2.0/ai/text_gen" \
     -H "content-type: application/json" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
          "prompt": "Write a social media post about protein powder.",
          "items": [
         {
            "id": "12345678",
            "type": "file",
            "content": "More information about protein powders"
        },
        ],
          "dialogue_history": [
            {
                "prompt": "Make my email about public APIs sound more professional",
                "answer": "Here is the first draft of your professional email about public APIs",
                "created_at": "2013-12-12T10:53:43-08:00"
            },
            {
                "prompt": "Can you add some more information?",
                "answer": "Public API schemas provide necessary information to integrate with APIs...",
                "created_at": "2013-12-12T11:20:43-08:00"
            }
        ],
          "ai_agent": {
            "type": "ai_agent_text_gen",
            "basic_gen": {
              "model": "openai__gpt_3_5_turbo",
              "system_message": "You are a helpful travel assistant specialized in budget travel",
              "prompt_template": "It is `{current_date}`, and I have $8000 and want to spend a week in Azores. What should I see?",
              "num_tokens_for_completion": 8400,
              "llm_endpoint_params": {
                "type": "openai_params",
                "temperature": 2.0,
                "top_p": 1.0,
                "frequency_penalty": 1.5,
                "presence_penalty": 1.5,
                "stop": "<|im_end|>"
              },
              "embeddings": {
                "model": " openai__text_embedding_ada_002",
                "strategy": {
                  "id": "basic",
                  "num_tokens_per_chunk": 64
                }
              },
              "content_template": "---{content}---"
           }
        }
     }'

```

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AIを使用するための前提条件][prereq]を確認してください。

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

**注**: `items`配列に含めることができる要素は1つだけです。

| パラメータ                         | 説明                                                                                                                                                                                                                                                                                                                             | 例                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **`prompt`**                  | Box AIに対するテキストの生成またはリファインのリクエスト。プロンプトの長さは10000文字以内にする必要があります。                                                                                                                                                                                                                                                                  | 週1回の営業会議の議題を作成してください。                                           |
| **`items.id`**                | ドキュメントのBoxファイルID。                                                                                                                                                                                                                                                                                                              | `1233039227512`                                                 |
| **`items.type`**              | 指定した入力データのタイプ。                                                                                                                                                                                                                                                                                                                 | `file`                                                          |
| `items.content`               | 項目のコンテンツ (多くの場合はテキストレプリゼンテーション)。                                                                                                                                                                                                                                                                                               | `This article is about Box AI`.                                 |
| `dialogue_history.prompt`     | 以前にクライアントによって提供され、大規模言語モデル (LLM) が回答したプロンプト。                                                                                                                                                                                                                                                                                   | `Make my email about public APIs sound more professional`       |
| `dialogue_history.answer`     | 以前にLLMから提供された回答。                                                                                                                                                                                                                                                                                                               | `Here is a draft of your professional email about public APIs.` |
| `dialogue_history.created_at` | プロンプトに対する前回の回答が作成された時点のISO日付形式のタイムスタンプ。                                                                                                                                                                                                                                                                                        | `2012-12-12T10:53:43-08:00`                                     |
| `ai_agent`                    | デフォルトのエージェント構成を上書きするために使用されるAIエージェント。このパラメータを使用すると、たとえば、[`model`][model-param]パラメータを使用してデフォルトのLLMをカスタムのLLMに置き換えたり、よりカスタマイズされたユーザーエクスペリエンスを実現できるようにベースとなる[`prompt`][prompt-param]を微調整したり、`temperature`などのLLMパラメータを変更して結果の創造性を調整したりすることができます。`ai_agent`パラメータを使用する前に、[`GET 2.0/ai_agent_default`][agent]リクエストを使用してデフォルト構成を取得できます。 |                                                                 |

[prereq]: g://box-ai/prerequisites

[agent]: e://get_ai_agent_default

[model-param]: r://ai_agent_text_gen#param_basic_gen_model

[prompt-param]: r://ai_agent_text_gen#param_basic_gen_prompt_template
