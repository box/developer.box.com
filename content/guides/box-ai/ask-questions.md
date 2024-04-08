---
rank: 3
related_endpoints:
  - post_ai_ask
---
# Ask questions to Box AI

<Message type="warning">
This document is rendered for test purposes and contains content that
will change.

</Message>

## Endpoint

The `POST /2.0/ai/ask` endpoint allows post a question
regarding a specific file or a set of files
to Box AI to get a response to your question.

## Parameters 

<!-- markdownlint-disable line-length -->

To make a call, you need to pass the following parameters:

| Parameter| Description|Values| Example|
|--------|--------|-------|-------|
|`items.id`|The Box file ID you want to supply as input. Box AI API will pull the text representation of this file.||`1233039227512`|
|`items.type`|The type of the supplied input. | `file`, `folder`, `hub`|`file`|
|`mode`| The type of request. It can be a question about a single file or a set of files. |`single_item_qa`, `multiple_item_qa`|`single_item_qa` |
|`prompt`|The question about your document or content.||What is the document about?|

<!-- markdownlint-enable line-length -->
## Sample call

<Samples id='post_ai_ask' />