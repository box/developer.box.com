---
rank: 6
related_endpoints:
 - post_ai_text_gen

---
# Generate text with Box AI

<Message type="notice">
Box AI API is a beta feature which means the
available capabilities may change.
Box AI API is available to all Enterprise Plus customers.

</Message>

You can use Box AI to generate text
based on provided content.
You will need to supply the input file (or files)
Box AI will base the answer on. 

## Send a request

To send a request, use the
`POST /2.0/ai/text_gen` endpoint.

<Samples id='post_ai_text_gen' />

Make sure you have generated the developer token
to authorize your app. See [Prerequisites for Box AI][prereq]
for details.

### Parameters 

<!-- markdownlint-disable line-length -->

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description|Values| Example|
|--------|--------|-------|-------|
|**`prompt`**|The question about your document or content.||What is the document about?|
|**`items.id`**|Box file ID of the document you want to supply as input.||`1233039227512`|
|**`items.type`**|The type of the supplied input. | `file` |`file`|
| `items.content` | The content of the item, often the text representation.  |     |  This article is about Box AI.    |
| `dialogue_history.prompt` | The prompt previously provided by the client and answered by the LLM. |     | "Make my email about public APIs sound more professional" |
| `dialogue_history.answer` | The answer previously provided by the LLM. |     | Here is the first draft of your professional email about public APIs. |
| `dialogue_history.created_at` | The ISO date formatted timestamp of when the previous answer to the prompt was created. |     | `2012-12-12T10:53:43-08:00` |

<!-- markdownlint-enable line-length -->

[prereq]: g://box-ai/prerequisites