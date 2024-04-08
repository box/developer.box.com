---
rank: 6
related_endpoints:
  - post_ai_text_gen
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/text-gen
type: guide
total_steps: 3
sibling_id: box-ai
parent_id: box-ai
next_page_id: ''
previous_page_id: box-ai/ask-questions
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/text-gen.md
---
# Generate text with Box AI API

<Message type="warning">

This document is rendered for test purposes and contains content that
will change.

</Message>

## Endpoints

The `POST /2.0/ai/text_gen` endpoint allows you to pass
a prompt and input content to Box AI and receive a response to
your question. Additionally, you can add a context
to your question using your previous prompts.

## Parameters

<!-- markdownlint-disable line-length -->

To make a call, you must pass the following parameters:

| Parameter| Description|Values| Example|
|--------|--------|-------|-------|
|`items.id`|The Box file ID you want to supply as input. Box AI API will pull the text representation of this file.||`1233039227512`|
|`items.type`|The type of the supplied input. | `file`, `folder`, `hub`|`file`|
|`mode`| The type of request. It can be a question about a single file or a set of files. |`single_item_qa`, `multiple_item_qa`|`single_item_qa` |
|`prompt`|The question about your document or content.||What is the document about?|

<!-- markdownlint-enable line-length -->

### Question context

The `dialogue_history` parameter allows you
to provide the context for your question by
referring to a previous answer, prompt,
or date when a an answer or prompt was created.

## Sample call

<Samples id='post_ai_text_gen' >

</Samples>