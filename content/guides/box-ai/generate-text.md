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

## Send a request

To send a request, use the
`POST /2.0/ai/text_gen` endpoint.

<Samples id='post_ai_text_gen' />

### Parameters 

<!-- markdownlint-disable line-length -->

To make a call, you must pass the following parameters:

| Parameter| Description|Values| Example|
|--------|--------|-------|-------|
|`items.id`|Box file ID of the document you want to supply as input.||`1233039227512`|
|`items.type`|The type of the supplied input. | `file` |`file`|
|`mode`| The type of request. It can be a question about a single file or a set of files. |`single_item_qa`, `multiple_item_qa`|`single_item_qa` |
|`prompt`|The question about your document or content.||What is the document about?|

<!-- markdownlint-enable line-length -->

### Question context

The `dialogue_history` parameter allows you
to provide additional context for your question by
referring to a previous answer, prompt,
or date when an answer or prompt was created.

[boxainotes]: https://support.box.com/hc/en-us/articles/22198577315347-Box-AI-for-Notes