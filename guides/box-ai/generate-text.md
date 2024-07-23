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

<Samples id='post_ai_text_gen' >

</Samples>

Make sure you have generated the developer token
to authorize your app. See [Prerequisites for Box AI][prereq]
for details.

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

**Note**: The `items` array can have exactly one element.

| Parameter| Description| Example|
|--------|--------|-------|
|**`prompt`**| The request for Box AI to generate or refine the text. The prompt's length cannot exceed 10000 characters.|Create a meeting agenda for a weekly sales meeting.|
|**`items.id`**|Box file ID of the document. |`1233039227512`|
|**`items.type`**|The type of the supplied input. | `file`|
| `items.content` | The content of the item, often the text representation.  |     This article is about Box AI.    |
| `dialogue_history.prompt` | The prompt previously provided by the client and answered by the Large Language Model (LLM).  | "Make my email about public APIs sound more professional" |
| `dialogue_history.answer` | The answer previously provided by the LLM. |   "Here is a draft of your professional email about public APIs." |
| `dialogue_history.created_at` | The ISO date formatted timestamp of when the previous answer to the prompt was created.   | `2012-12-12T10:53:43-08:00` |
|`ai_agent` | The AI agent used to override the default agent configuration. To get the default settings, use the [`GET 2.0/ai_agent_default` endpoint][agent].| |

[prereq]: g://box-ai/prerequisites
[agent]: e://get_ai_agent_default