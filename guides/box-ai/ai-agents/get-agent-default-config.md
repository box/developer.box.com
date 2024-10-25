---
rank: 2
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
id: box-ai/ai-agents/get-agent-default-config
type: guide
total_steps: 2
sibling_id: box-ai/ai-agents
parent_id: box-ai/ai-agents
next_page_id: box-ai/ai-agents/overrides-tutorial
previous_page_id: box-ai/ai-agents
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-agents/get-agent-default-config.md
fullyTranslated: true
---
# AIエージェントのデフォルト構成を取得する

<Message type="notice">

Box AI APIは、現在、BoxのMain Beta Agreementに従い提供されるベータ機能のため、利用可能な機能は変更される可能性があります。Box AI APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

`GET /2.0/ai_agent_default`エンドポイントを使用すると、AIサービスのデフォルト構成を取得できます。構成の詳細を取得したら、[`ai_agent`][ai-agent-config]パラメータを使用して構成を上書きできます。

## リクエストの送信

リクエストを送信するには、`GET /2.0/ai_agent_default`エンドポイントを使用します。

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AIを使用するための前提条件][prereq]を確認してください。

<Samples id="get_ai_agent_default">

</Samples>

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ      | 説明                                                                                              | 例                                  |
| ---------- | ----------------------------------------------------------------------------------------------- | ---------------------------------- |
| `language` | 返されるエージェントの構成の言語コード。その言語がサポートされていない場合は、デフォルト構成が返されます。                                           | `ja-JP`                            |
| **`mode`** | エージェントの構成にフィルタをかけるためのモード。値は、取得したい結果に応じて、`ask`、`text_gen`、`extract`、または`extract_structured`にします。 | `ask`                              |
| `model`    | 構成を取得する対象となるモデル。選択したモデルがサポートされていることを確認するには、[モデルのリスト][models]を参照してください。                          | `azure__openai__gpt_3_5_turbo_16k` |

## レスポンス

コールに対するレスポンスは、選択した`mode`パラメータ値によって異なる場合があります。

<Tabs>

<Tab title="質問">

`mode`パラメータを`ask`に設定すると、レスポンスは次のようになります。

```sh
{
     "type": "ai_agent_ask",
     "basic_text": {
          "model": "azure__openai__gpt_4o_mini",
          "system_message": "",
          "prompt_template": "prompt_template": "{user_question}Write it in an informal way.{content}"
        },
          "num_tokens_for_completion": 6000,
          "llm_endpoint_params": {
               "temperature": 0,
               "top_p": 1,
               "frequency_penalty": 0,
               "presence_penalty": 1.5,
               "stop": "<|im_end|>",
               "type": "openai_params"
          }
     },
     "long_text": {
          "model": "azure__openai__gpt_4o_mini",
          "system_message": "",
          "prompt_template": "prompt_template": "{user_question}Write it in an informal way.{content}"
        },
          "num_tokens_for_completion": 6000,
          "llm_endpoint_params": {
               "temperature": 0,
               "top_p": 1,
               "frequency_penalty": 0,
               "presence_penalty": 1.5,
               "stop": "<|im_end|>",
               "type": "openai_params"
          },
          "embeddings": {
               "model": "azure__openai__text_embedding_ada_002",
               "strategy": {
                    "id": "basic",
                    "num_tokens_per_chunk": 64
               }
          }
     },
     "basic_text_multi": {
          "model": "azure__openai__gpt_4o_mini",
          "system_message": "",
          "prompt_template": "Current date: {current_date}\n\nTEXT FROM DOCUMENTS STARTS\n{content}\nTEXT FROM DOCUMENTS ENDS\n\nHere is how I need help from you: {user_question}\n.",
          "num_tokens_for_completion": 6000,
          "llm_endpoint_params": {
               "temperature": 0,
               "top_p": 1,
               "frequency_penalty": 0,
               "presence_penalty": 1.5,
               "stop": "<|im_end|>",
               "type": "openai_params"
          }
     },
     "long_text_multi": {
          "model": "azure__openai__gpt_4o_mini",
          "system_message": "Role and Goal: You are an assistant designed to analyze and answer a question based on provided snippets from multiple documents, which can include business-oriented documents like docs, presentations, PDFs, etc. The assistant will respond concisely, using only the information from the provided documents.\n\nConstraints: The assistant should avoid engaging in chatty or extensive conversational interactions and focus on providing direct answers. It should also avoid making assumptions or inferences not supported by the provided document snippets.\n\nGuidelines: When answering, the assistant should consider the file's name and path to assess relevance to the question. In cases of conflicting information from multiple documents, it should list the different answers with citations. For summarization or comparison tasks, it should concisely answer with the key points. It should also consider the current date to be the date given.\n\nPersonalization: The assistant's tone should be formal and to-the-point, suitable for handling business-related documents and queries.\n",
          "prompt_template": "Current date: {current_date}\n\nTEXT FROM DOCUMENTS STARTS\n{content}\nTEXT FROM DOCUMENTS ENDS\n\nHere is how I need help from you: {user_question}\n.",
          "num_tokens_for_completion": 6000,
          "llm_endpoint_params": {
               "temperature": 0,
               "top_p": 1,
               "frequency_penalty": 0,
               "presence_penalty": 1.5,
               "stop": "<|im_end|>",
               "type": "openai_params"
          },
          "embeddings": {
               "model": "azure__openai__text_embedding_ada_002",
               "strategy": {
                    "id": "basic",
                    "num_tokens_per_chunk": 64
               }
          }
     }
}

```

</Tab>

<Tab title="テキスト生成">

`mode`パラメータを`text_gen`に設定すると、レスポンスは次のようになります。

``````sh
{
     "type": "ai_agent_text_gen",
     "basic_gen": {
          "model": "azure__openai__gpt_3_5_turbo_16k",
          "system_message": "\nIf you need to know today's date to respond, it is {current_date}.\nThe user is working in a collaborative document creation editor called Box Notes.\nAssume that you are helping a business user create documents or to help the user revise existing text.\nYou can help the user in creating templates to be reused or update existing documents, you can respond with text that the user can use to place in the document that the user is editing.\nIf the user simply asks to \"improve\" the text, then simplify the language and remove jargon, unless the user specifies otherwise.\nDo not open with a preamble to the response, just respond.\n",
          "prompt_template": "{user_question}",
          "num_tokens_for_completion": 12000,
          "llm_endpoint_params": {
               "temperature": 0.1,
               "top_p": 1,
               "frequency_penalty": 0.75,
               "presence_penalty": 0.75,
               "stop": "<|im_end|>",
               "type": "openai_params"
          },
          "embeddings": {
               "model": "azure__openai__text_embedding_ada_002",
               "strategy": {
                    "id": "basic",
                    "num_tokens_per_chunk": 64
               }
          },
          "content_template": "`````{content}`````"
     }
}

``````

</Tab>

<Tab title="抽出">

`mode`パラメータを`extract`に設定すると、レスポンスは次のようになります。

`````sh
{
     "type": "ai_agent_extract",
     "basic_text": {
          "model": "google__gemini_1_5_flash_001",
          "system_message": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"displayName\": \"key display name\", \"type\": \"string\", \"description\": \"key description\"}]}. Leverage key description and key display name to identify where the key and value pairs are in the document. In certain cases, key description can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is````document````",
"prompt_template": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is````{content}````",
     "num_tokens_for_completion": 4096,
     "llm_endpoint_params": {
          "temperature": 0,
          "top_p": 1,
          "top_k": null,
          "type": "google_params"
     }
},
"long_text": {
     "model": "google__gemini_1_5_flash_001",
     "system_message": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"displayName\": \"key display name\", \"type\": \"string\", \"description\": \"key description\"}]}. Leverage key description and key display name to identify where the key and value pairs are in the document. In certain cases, key description can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is````document````",
"prompt_template": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is````{content}````",
          "num_tokens_for_completion": 4096,
          "llm_endpoint_params": {
               "temperature": 0,
               "top_p": 1,
               "top_k": null,
               "type": "google_params"
          },
          "embeddings": {
               "model": "azure__openai__text_embedding_ada_002",
               "strategy": {
                    "id": "basic",
                    "num_tokens_per_chunk": 64
               }
          }
     }
}

`````

</Tab>

<Tab title="抽出 (構造化)">

`mode`パラメータを`extract_structured`に設定すると、レスポンスは次のようになります。

`````sh
{
     "type": "ai_agent_extract_structured",
     "basic_text": {
          "model": "google__gemini_1_5_flash_001",
          "system_message": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"prompt\": \"prompt to extract the value\", \"type\": \"date\"}]}. Leverage prompt for each key to identify where the key and value pairs are in the document. In certain cases, prompt can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is````document````",
"prompt_template": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is````{content}````",
     "num_tokens_for_completion": 4096,
     "llm_endpoint_params": {
          "temperature": 0,
          "top_p": 1,
          "top_k": null,
          "type": "google_params"
     }
  },
"long_text": {
     "model": "google__gemini_1_5_flash_001",
     "system_message": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"prompt\": \"prompt to extract the value\", \"type\": \"date\"}]}. Leverage prompt for each key to identify where the key and value pairs are in the document. In certain cases, prompt can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is````document````",
"prompt_template": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is````{content}````",
          "num_tokens_for_completion": 4096,
          "llm_endpoint_params": {
               "temperature": 0,
               "top_p": 1,
               "top_k": null,
               "type": "google_params"
             },
          "embeddings": {
               "model": "google__textembedding_gecko_003",
               "strategy": {
                    "id": "basic",
                    "num_tokens_per_chunk": 64
               }
          }
     }
}

`````

</Tab>

</Tabs>

[prereq]: g://box-ai/prerequisites

[models]: g://box-ai/supported-models

[ai-agent-config]: g://box-ai/ai-agents/overrides-tutorial

[override-tutorials]: g://box-ai/ai-agents/overrides-tutorial
