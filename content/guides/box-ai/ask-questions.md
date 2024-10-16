---
rank: 3
related_endpoints:
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/generate-text
  - box-ai/ai-agents/get-agent-default-config
  - box-ai/ai-agents/overrides-tutorial
---

# Ask questions to Box AI

<Message type="notice">
Box AI API is available to all Enterprise Plus customers.

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

<Samples id='post_ai_ask' />

### Authentication

Make sure you have generated the developer token
to authorize your app. See [prerequisites for using Box AI][prereq]
for details.

### Parameters

To make a call, you need to pass the following parameters.
Mandatory parameters are in **bold**.

| Parameter    |Description                                                                                             | Available values                               | Example                     |
| ------------ | ------ | ----------- | --- |
| **`mode`** | The type of request. It can be a question about a single file or a set of files. For a single file, Box AI Platform API supports up to 1MB of text representation. If the file size exceeds 1MB, the first 1MB of text representation will be processed. If you want to list multiple files, the limit is 25 files. If you set `mode` to `single_item_qa`, the `items` array can list only one element.| `single_item_qa`, `multiple_item_qa` | `single_item_qa`   |
| **`prompt`**   | The question about your document or content. The prompt's length cannot exceed 10000 characters. | | `What is this document about?` |
| `dialogue_history.prompt` | The prompt previously provided by the client and answered by the Large Language Model (LLM).  | `Make my email about public APIs sound more professional` |
| `dialogue_history.answer` | The answer previously provided by the LLM. |   `Here is a draft of your professional email about public APIs.` |
| `dialogue_history.created_at` | The ISO date formatted timestamp of when the previous answer to the prompt was created.   | `2012-12-12T10:53:43-08:00` |
|`include_citations`| Specifies if the citations should be returned in the answer.| `true`, `false`| `true`|
|**`items.id`**  | The Box file ID you want to provide as input. | | `112233445566`|
| **`items.type`** | The type of the provided input. Currently, it can be a single file or multiple files.  | `file`          | `file`   |
| `items.content` | The content of the item, often the text representation.  |     |  `An application programming interface (API) is a way for two or more computer programs or components to communicate with each other. It is a type of software interface...`    |
|`ai_agent` | The AI agent used to override the default agent configuration. You can use this parameter replace the default LLM with a custom one using the [`model`][model-param] parameter for shorter and longer texts, tweak the base [`prompt`][prompt-param] to allow for a more customized user experience, or change an LLM parameter, such as `temperature`, to make the results more or less creative. Before you use the `ai_agent` parameter, you can get the default configuration using the [`GET 2.0/ai_agent_default`][agent] request. For specific use cases, see the [AI model overrides tutorial][overrides]. ||

[prereq]: g://box-ai/prerequisites
[agent]: e://get_ai_agent_default
[model-param]: r://ai_agent_ask#param_basic_text_model
[prompt-param]: e://ai_agent_ask#param_basic_text_prompt_template
[overrides]: g://box-ai/ai-agents/overrides-tutorial