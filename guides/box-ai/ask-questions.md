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
previous_page_id: box-ai/authentication
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ask-questions.md
---
# Ask questions to Box AI

<Message type="warning">

Work in progress, content may change.

</Message>

Box AI API allows you to
ask a question about a file or a set of files,
and get a response based on this content.
For example, while viewing a document in Box,
you can ask Box AI to summarize the content.

## Send a request

To send a request containing your question,
use the `POST /2.0/ai/ask` endpoint.

<Samples id='post_ai_ask' >

</Samples>

### Parameters

<!-- markdownlint-disable line-length -->

To make a call, you need to pass the following parameters:

| Parameter| Description|Values| Example|
|--------|--------|-------|-------|
|`items.id`|The Box file ID you want to supply as input. Box AI API will pull the text representation of this file.||`112233445566`|
|`items.type`|The type of the supplied input. | `file`, `folder`, `hub`|`file`|
|`mode`| The type of request. It can be a question about a single file or a set of files. |`single_item_qa`, `multiple_item_qa`|`single_item_qa` |
|`prompt`|The question about your document or content.||What is the document about?|

<!-- markdownlint-enable line-length -->