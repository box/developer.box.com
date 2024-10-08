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
---

# Get default AI agent configuration

<Message type="notice">
Box AI API is currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.

</Message>

The `GET /2.0/ai_agent_default` endpoint allows you to fetch the default configuration for AI services. 
Once you get the configuration details you can override them using the [`ai_agent`][ai-agent-config] parameter.

## Send a request

To send a request, use the
`GET /2.0/ai_agent_default` endpoint.

Make sure you have generated the developer token
to authorize your app. See [prerequisites for using Box AI][prereq]
for details.

<Samples id='get_ai_agent_default' />

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description| Example|
|--------|--------|-------|
|`language`| The language code the agent configuration is returned for. If the language is not supported, the default configuration is returned. | `ja-JP`| 
|**`mode`**|The mode used to filter the agent configuration. The value can be `ask`, `text_gen`, `extract`, or `extract_structured` depending on the result you want to achieve. |`ask`|
|`model`|The model you want to get the configuration for. To make sure your chosen model is supported, see the [list of models][models].| `azure__openai__gpt_3_5_turbo_16k`|

## Responses

The responses to the call may vary depending on the `mode` parameter value you choose.

<Tabs>

<Tab title='Ask'>

When you set the `mode` parameter to `ask` the response will be as follows:

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

<Tab title='Text gen'>

When you set the `mode` parameter to `text_gen` the response will be as follows:

```sh
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
```

</Tab>

<Tab title='Extract'>

When you set the `mode` parameter to `extract` the response will be as follows:

```sh
{
     "type": "ai_agent_extract",
     "basic_text": {
          "model": "google__gemini_1_5_flash_001",
          "system_message": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"displayName\": \"key display name\", \"type\": \"string\", \"description\": \"key description\"}]}. Leverage key description and key display name to identify where the key and value pairs are in the document. In certain cases, key description can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is ````document````",
          "prompt_template": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is ````{content}````",
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
          "system_message": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"displayName\": \"key display name\", \"type\": \"string\", \"description\": \"key description\"}]}. Leverage key description and key display name to identify where the key and value pairs are in the document. In certain cases, key description can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is ````document````",
          "prompt_template": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is ````{content}````",
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
```

</Tab>

<Tab title='Extract structured'>

When you set the `mode` parameter to `extract_structured` the response will be as follows:

```sh
{
     "type": "ai_agent_extract_structured",
     "basic_text": {
          "model": "google__gemini_1_5_flash_001",
          "system_message": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"prompt\": \"prompt to extract the value\", \"type\": \"date\"}]}. Leverage prompt for each key to identify where the key and value pairs are in the document. In certain cases, prompt can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is ````document````",
          "prompt_template": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is ````{content}````",
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
          "system_message": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"prompt\": \"prompt to extract the value\", \"type\": \"date\"}]}. Leverage prompt for each key to identify where the key and value pairs are in the document. In certain cases, prompt can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is ````document````",
          "prompt_template": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is ````{content}````",
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
```

</Tab>

</Tabs>

[prereq]: g://box-ai/prerequisites
[ai-agent-config]: g://box-ai/ai-agents/overrides-tutorial
[models]: g://box-ai/ai-models/index