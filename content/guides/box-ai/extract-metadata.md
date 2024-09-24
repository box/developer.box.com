---
rank: 8
related_endpoints:
  - post-ai-extract-structured
related_guides:
  - box-ai/extract-metadata-structured
  - box-ai/prerequisites
---

# Extract metadata from file (freeform)

<Message type="notice">
Box AI Platform API is currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI Platform API is available to all Enterprise Plus customers.

</Message>

Box AI Platform API allows you to extract metadata in a freeform way
from the provided file and return it in the form of key-value pairs.
To use this endpoint, you don't need any metadata templates,
as providing the prompt and the input file is enough to get the answer.

## Send a request

To send a request, use the
`POST /2.0/ai/extract` endpoint.

Make sure you have generated the developer token
to authorize your app. See [prerequisites for using Box AI][prereq]
for details.

<Samples id='post_ai_extract' />

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

<Message type='notice'>
The `items` array can have exactly one element.

</Message>

| Parameter| Description| Example|
|--------|--------|-------|
|**`prompt`**| The request for Box AI to generate or refine the text. The prompt's length cannot exceed 10000 characters.|Create a meeting agenda for a weekly sales meeting.|
|**`items.id`**|Box file ID of the document. The ID must reference an actual file with an extension. |`1233039227512`|
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