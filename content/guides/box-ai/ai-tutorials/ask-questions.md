---
rank: 2
related_endpoints:
  - post_ai_ask
related_guides:
  - box-ai/ai-tutorials/prerequisites
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
alias_paths:
  - guides/box-ai/ask-questions
---

# Ask questions to Box AI

<Message type="notice">
Box AI API is available to all Enterprise Plus and Enterprise Advanced customers.

</Message>

Box AI API allows you to
ask a question about a supplied file or
a set of files, and get a response based on
the content.
For example, while viewing a document in Box,
you can ask Box AI to summarize the content.

## Before you start

Make sure you followed the steps listed in [getting started with Box AI][prereq] to create a custom app and authenticate.

## Send a request

To send a request containing your question,
use the `POST /2.0/ai/ask` endpoint and
provide the mandatory parameters.

<Samples id='post_ai_ask' />

### Parameters

To make a call, you need to pass the following parameters.
Mandatory parameters are in **bold**.

| Parameter    |Description                                                                                             | Available values                               | Example                     |
| ------------ | ------ | ----------- | --- |
| **`mode`** | The type of request. It can be a question about a single file or a set of files. For a single text files, Box AI API supports up to 1MB of text representation. If the file size exceeds 1MB, the first 1MB of text representation will be processed. If you want to list multiple files, the limit is 25 files. Box AI handles image documents with a resolution of 1024 x 1024 pixels, with a maximum of 5 images or 5 pages for multi-page images. If the number of image or image pages exceeds 5, the first 5 images or pages will be processed. If you set mode to `single_item_qa`, the items array can list only one element. Currently Box AI does not support multi-modal requests. If both images and text are sent Box AI will only process the text.| `single_item_qa`, `multiple_item_qa` | `single_item_qa`   |
| **`prompt`**   | The question about your document or content. The prompt's length cannot exceed 10000 characters. | | `What is this document about?` |
| `dialogue_history.prompt` | The prompt previously provided by the client and answered by the Large Language Model (LLM).  | `Make my email about public APIs sound more professional` |
| `dialogue_history.answer` | The answer previously provided by the LLM. |   `Here is a draft of your professional email about public APIs.` |
| `dialogue_history.created_at` | The ISO date formatted timestamp of when the previous answer to the prompt was created.   | `2012-12-12T10:53:43-08:00` |
|`include_citations`| Specifies if the citations should be returned in the answer.| `true`, `false`| `true`|
|**`items.id`**  | The Box file ID you want to provide as input. | | `112233445566`|
| **`items.type`** | The type of the provided input. Currently, it can be a single file or multiple files.  | `file`          | `file`   |
| `items.content` | The content of the item. Usually it is the text representation.  |     |  `An application programming interface (API) is a way for two or more computer programs or components to communicate with each other. It is a type of software interface...`    |
|`ai_agent` | The AI agent used to override the default agent configuration. You can use this parameter replace the default LLM with a custom one using the [`model`][model-param] parameter for shorter and longer texts, tweak the base [`prompt`][prompt-param] to allow for a more customized user experience, or change an LLM parameter, such as `temperature`, to make the results more or less creative. Before you use the `ai_agent` parameter, you can get the default configuration using the [`GET 2.0/ai_agent_default`][agent] request. For specific use cases, see the [AI model overrides tutorial][overrides]. ||

## Use cases

## Ask questions about an item

This example shows how to ask a question about one or more items using the `POST ask/ai` API. When using this endpoint, remember to specify the `mode` parameter depending on the number of items you want to supply. 

```sh
curl -i -L POST "https://api.box.com/2.0/ai/ask" \
     -H "content-type: application/json" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
    "mode": "single_item_qa",
    "items": [
        {
            "id": "12345678",
            "type": "file"
        }
    ],
    "prompt": "List the guidelines on creating questions in Box AI for Documents"
}'
```

The response will be as follows:

```sh
{
    "answer": "The guidelines for working with questions in Box AI for Documents are as follows:\n\n1. Box AI pulls information only from the document loaded in preview.\n2. If questions fall outside the scope of the document, Box AI will inform you that it cannot answer.\n3. Be specific when asking questions; use parameters like numbered lists, brevity, tables, and central themes or key points.\n4. Aim to stay within the scope of the document.\n5. Focus on text-based responses only.",
    "created_at": "2024-11-04T02:30:09.557-08:00",
    "completion_reason": "done"
}
```

## Ask questions with `content` parameter

If you use the `content` parameter as the source of input for Box AI, it will use it as the primary source.

```sh
curl -i -L POST "https://api.box.com/2.0/ai/ask" \
     -H "content-type: application/json" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
    "mode": "single_item_qa",
    "items": [
        {
            "id": "12345678",
            "type": "file",
            "content": "This is a document about Box AI For documents. It consists of the functionality summary and guidelines on how to work with Box AI. Additionally, it provides a set of best practices for creating questions."
        }
    ],
    "prompt": "List the guidelines on creating questions in Box AI for Documents"
}'
```

The response to this request is based on the `content` parameter instead of the file's content:

```sh
{
    "answer": "The document does not provide specific guidelines on working with questions in Box AI for Documents. It only mentions that it includes a set of best practices for creating questions, but the details of those guidelines are not included in the text provided. If you have more information or another document, I can help further!",
    "created_at": "2024-11-04T02:31:51.125-08:00",
    "completion_reason": "done"
}
```

## Ask questions with `citations` parameter

Setting the `citations` parameter to `true` causes the response to include excerpts from source file or files Box AI used to compile the answer.

```sh
curl -i -L POST "https://api.box.com/2.0/ai/ask" \
     -H "content-type: application/json" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
    "mode": "multiple_item_qa",
    "include_citations": true,
    "items": [
        {
            "id": "12345678",
            "type": "file"
        }
    ],
    "prompt": "List the guidelines on working with responses in Box AI for Documents"
}'
```

The resulting answer includes the source file and direct content citations.

```sh
{
    "answer": "The guidelines for working with questions in Box AI for Documents are as follows:\n\n1. Box AI pulls information only from the document loaded in preview, and cannot answer questions outside its scope.\n2. Be specific when asking questions; use parameters like numbered lists, brevity, tables, and central themes or key points.\n3. Examples of better phrasing include asking for a numbered list of key points instead of just \"list key points,\" and requesting a succinct outline of important points rather than a general inquiry about the document's purpose.\n4. Stay within the scope of the document and focus on text-based responses only.",
    "created_at": "2024-11-04T02:35:00.578-08:00",
    "completion_reason": "done",
    "citations": [
        {
            "type": "file",
            "id": "12345678",
            "name": "Box AI for Documents.docx",
            "content": "Guidelines for Box AI questions\nBox AI pulls information only from the document you loaded in preview."
        },
        {
            "type": "file",
            "id": "12345678",
            "name": "Box AI for Documents.docx",
            "content": "If you ask any questions outside of the scope of the document, Box AI informs you that it cannot answer the question with the information provided."
        },
        {
            "type": "file",
            "id": "12345678",
            "name": "Box AI for Documents.docx",
            "content": "As you ask Box AI to analyze your document, consider these suggestions:\n· Be as specific as possible."
        },
        {
            "type": "file",
            "id": "12345678",
            "name": "Box AI for Documents.docx",
            "content": "Box AI for Documents\n\nWhen viewing a document in Box, you can ask Box AI to summarize document content, search key points, and write outline drafts based on your document files."
        }
    ]
}
```

[prereq]: g://box-ai/ai-tutorials/prerequisites
[agent]: e://get_ai_agent_default
[model-param]: r://ai_agent_ask#param_basic_text_model
[prompt-param]: e://ai_agent_ask#param_basic_text_prompt_template
[overrides]: g://box-ai/ai-agents/ai-agent-overrides