---
rank: 3
related_endpoints:
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/generate-text
  - box-ai/get-agent-default-config
---

# Ask questions to Box AI

<Message type="notice">
Box AI API is a beta feature, which means the
available capabilities may change.
Box AI API is available to all **Enterprise Plus** customers.

</Message>

Box AI API allows you to
ask a question about a supplied file or
a set of files, and get a response based on
the content.
For example, while viewing a document in Box,
you can ask Box AI to summarize the content.

## Send a request

To send a request containing your question,
use the `POST /2.0/ai/ask` endpoint and
provide the mandatory parameters.

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

### Authentication

Make sure you have generated the developer token
to authorize your app. See [prerequisites for using Box A][prereq]
for details.

### Parameters

To make a call, you need to pass the following parameters.
Mandatory parameters are in **bold**.

| Parameter    |Description                                                                                             | Available values                               | Example                     |
| ------------ | ------ | ----------- | --- |
| **`mode`** | The type of request. It can be a question about a single file or a set of files. For a single file, Box AI API supports up to 1MB of text representation. If the file size exceeds 1MB, the first 1MB of text representation will be processed. If you want to list multiple files, the limit is 25 files. If you set `mode` to `single_item_qa`, the `items` array can list only one element.| `single_item_qa`, `multiple_item_qa` | `single_item_qa`   |
| **`prompt`**   | The question about your document or content. The prompt's length cannot exceed 10000 characters. | | `What is this document about?` |
|**`items.id`**  | The Box file ID you want to provide as input. | | `112233445566`|
| **`items.type`** | The type of the provided input. Currently, it can be a single file or multiple files.  | `file`          | `file`   |
| `items.content` | The content of the item, often the text representation.  |     |  `An application programming interface (API) is a way for two or more computer programs or components to communicate with each other. It is a type of software interface...`    |
|`ai_agent` | The AI agent used to override the default agent configuration. You can use this parameter replace the default LLM with a custom one using the [`model`][model-param] parameter for shorter and longer texts, tweak the base [`prompt`][prompt-param] to allow for a more customized user experience, or change an LLM parameter, such as `temperature`, to make the results more or less creative. Before you use the `ai_agent` parameter, you can get the default configuration using the [`GET 2.0/ai_agent_default`][agent] request.|||

[prereq]: g://box-ai/prerequisites
[agent]: e://get_ai_agent_default
[model-param]: r://ai_agent_ask#param_basic_text_model
[prompt-param]: e://ai_agent_ask#param_basic_text_prompt_template