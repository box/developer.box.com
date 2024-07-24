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
---
# Generate text with Box AI

<Message type="notice">

Box AI API is a beta feature which means the
available capabilities may change.
Box AI API is available to all Enterprise Plus customers.

</Message>

You can use Box AI to generate text
based on provided content.
For example, you can ask Box AI to
generate a template based
on the content you read or create in Box Notes.
Then you can embed the generated text
directly into your document.

## Send a request

To send a request, use the
`POST /2.0/ai/text_gen` endpoint.

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

Make sure you have generated the developer token
to authorize your app. See [prerequisites for using Box AI][prereq]
for details.

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

**Note**: The `items` array can have exactly one element.

| Parameter| Description| Example|
|--------|--------|-------|
|**`prompt`**| The request for Box AI to generate or refine the text. The prompt's length cannot exceed 10000 characters.|Create a meeting agenda for a weekly sales meeting.|
|**`items.id`**|Box file ID of the document. |`1233039227512`|
|**`items.type`**|The type of the supplied input. | `file`|
| `items.content` | The content of the item, often the text representation.  |    `This article is about Box AI`.    |
| `dialogue_history.prompt` | The prompt previously provided by the client and answered by the Large Language Model (LLM).  | `Make my email about public APIs sound more professional` |
| `dialogue_history.answer` | The answer previously provided by the LLM. |   `Here is a draft of your professional email about public APIs.` |
| `dialogue_history.created_at` | The ISO date formatted timestamp of when the previous answer to the prompt was created.   | `2012-12-12T10:53:43-08:00` |
|`ai_agent` | The AI agent used to override the default agent configuration. This parameter allows you to, for example, replace the default LLM with a custom one using the [`model`][model-param] parameter, tweak the base [`prompt`][prompt-param] to allow for a more customized user experience, or change an LLM parameter, such as `temperature`, to make the results more or less creative. Before using the `ai_agent` parameter, you can get the default configuration using the [`GET 2.0/ai_agent_default`][agent] request.| |

[prereq]: g://box-ai/prerequisites
[agent]: e://get_ai_agent_default
[model-param]: r://ai_agent_text_gen#param_basic_gen_model
[prompt-param]: r://ai_agent_text_gen#param_basic_gen_prompt_template