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

<Samples id='post_ai_ask' />

### Authentication

Make sure you have generated the developer token
to authorize your app. See [Getting Started with Box AI][prereq]
for details.

### Parameters

To make a call, you need to pass the following parameters.
Mandatory parameters are in **bold**.

| Parameter    |Description                                                                                             | Available values                               | Example                     |
| ------------ | ------ | ----------- | --- |
| **`mode`** | The type of request. It can be a question about a single file or a set of files. For a single file, Box AI API supports up to 1MB of text representation. If the file size exceeds 1MB, the first 1MB of text representation will be processed. If you want to list multiple files, the limit is 25 files. If you set `mode` to `single_item_qa`, the `items` array can list only one element.| `single_item_qa`, `multiple_item_qa` | `single_item_qa`   |
| **`prompt`**   | The question about your document or content. The prompt's length cannot exceed 10000 characters. | | "What is this document about?" |
|**`items.id`**  | The Box file ID you want to provide as input. | | `112233445566`|
| **`items.type`** | The type of the provided input. Currently, it can be a single file or multiple files.  | `file`          | `file`   |
| `items.content` | The content of the item, often the text representation.  |     |  “An application programming interface (API) is a way for two or more computer programs or components to communicate with each other. It is a type of software interface...”    |
|`ai_agent` | The AI agent used to override the default agent configuration settings. To get the default settings, use the [`GET 2.0/ai_agent_default` endpoint][agent].| |

[prereq]: g://box-ai/prerequisites
[agent]: e://get_ai_agent_default