---
rank: 3
related_endpoints:
  - post_ai_ask
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/ask-questions
type: guide
total_steps: 3
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/generate-text
previous_page_id: box-ai/prerequisites
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ask-questions.md
---
# Ask questions to Box AI

<Message type="notice">

Box AI API is a beta feature which means the
available capabilities may change.
Box AI API is available to all **Enterprise Plus** customers.

</Message>

## Endpoints

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

<Samples id='post_ai_ask' >

</Samples>

### Parameters

<!-- markdownlint-disable line-length -->

To make a call, you need to pass the following parameters.
Mandatory parameters are in bold.

| Parameter    | Description                                                                                             | Values                               | Example                     |
| ------------ | ------ | ----------- | --- |
| **`mode`** | The type of request. It can be a question about a single file or a set of files.  | `single_item_qa`, `multiple_item_qa` | `single_item_qa`   |
| **`prompt`**   | The question about your document or content. | What is the document about? |
|**`items.id`**  | The Box file ID you want to provide as input. | | `112233445566`|
| **`items.type`** | The type of the provided input. Currently, it can be a single file or multiple files.  | `file`          | `file`   |
| `items.content` | The content of the item, often the text representation.  |     |  This article is about Box AI.    |

<!-- markdownlint-enable line-length -->