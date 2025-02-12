---
rank: 8
related_endpoints:
  - post-ai-extract-structured
related_guides:
  - box-ai/ai-tutorials/prerequisites
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/extract-metadata-structured
alias_paths:
  - guides/box-ai/extract-metadata
category_id: box-ai
subcategory_id: box-ai/ai-tutorials
is_index: false
id: box-ai/ai-tutorials/extract-metadata
type: guide
total_steps: 6
sibling_id: box-ai/ai-tutorials
parent_id: box-ai/ai-tutorials
next_page_id: box-ai/ai-tutorials/extract-metadata-structured
previous_page_id: box-ai/ai-tutorials/default-agent-overrides
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-tutorials/extract-metadata.md
---
# Extract metadata from file (freeform)

Box AI API allows you to query a document and extract metadata based on a provided prompt.
**Freeform** means that the prompt can include a stringified version of formats such as JSON or XML, or even plain text.

## Before you start

Make sure you followed the steps listed in [getting started with Box AI][prereq] to create a custom app and authenticate.

## Send a request

To send a request, use the
`POST /2.0/ai/extract` endpoint.

<Samples id='post_ai_extract' >

</Samples>

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

<Message type='notice'>

The `items` array can have exactly one element.

</Message>

| Parameter| Description| Example|
|--------|--------|-------|
|**`prompt`**| The request for Box AI to generate or refine the text. The prompt's length cannot exceed 10000 characters.|Create a meeting agenda for a weekly sales meeting.|
|**`items.id`**|Box file ID of the document. The ID must reference an actual file with an extension. |`1233039227512`|
|**`items.type`**|The type of the supplied input. | `file`|
| `items.content` | The content of the item, often the text representation.  |    `This article is about Box AI`.    |
|`ai_agent` | The AI agent used to override the default agent configuration. This parameter allows you to, for example, replace the default LLM with a custom one using the [`model`][model-param] parameter, tweak the base [`prompt`][prompt-param] to allow for a more customized user experience, or change an LLM parameter, such as `temperature`, to make the results more or less creative. Before you use the `ai_agent` parameter, you can get the default configuration using the [`GET 2.0/ai_agent_default`][agent] request. For specific use cases, see the [AI model overrides tutorial][overrides].| |

## Use cases

This example shows you how to extract metadata from a sample invoice.

### Create the request

To get the response from Box AI, call `POST /2.0/ai/extract` endpoint with the following parameters:

* `prompt` that can be a query, or a structured or unstructured list of fields to extract.
* `type` and `id` of the file to extract the data from.

### Create the prompt

Depending on the use case and the level of detail, you can construct various prompts.

#### Use plain text

Because this endpoint allows freeform prompts, you can use plain text to get the information.

```bash
curl --location 'https://api.box.com/2.0/ai/extract' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ACCESS_TOKEN>' \
--data '{
    "prompt": "find the document type (invoice or po), vendor, total, and po number",
    "items": [
        {
            "type": "file",
            "id": "1443721424754"
        }
    ]
}'
```

In such a case, the response will be based on the keywords included in the text:

```bash
{
    "answer": "{\"Document Type\": \"Invoice\", \"Vendor\": \"Quasar Innovations\", \"Total\": \"$1,050\", \"PO Number\": \"003\"}",
    "created_at": "2024-05-31T10:30:51.223-07:00",
    "completion_reason": "done"
}
```

#### Use specific terms

If you don't want to write the entire sentence, the prompt can consist of terms that you expect to find in an invoice:

```bash
curl --location 'https://api.box.com/2.0/ai/extract' \
--header 'Content-Type: application/json' \
--header 'Authorization: <ACCESS_TOKEN>' \
--data '{
    "prompt": "{\"vendor\",\"total\",\"doctype\",\"date\",\"PO\"}",
    "items": [
        {
            "type": "file",
            "id": "1443721424754"
        }
    ]
}'
```

Using this approach results in a list of terms provided in the request and their values:

```bash
{
    "answer": "{\"vendor\": \"Quasar Innovations\", \"total\": \"$1,050\", \"doctype\": \"Invoice\", \"PO\": \"003\"}",
    "created_at": "2024-05-31T10:28:51.906-07:00",
    "completion_reason": "done"
}
```

#### Use key-value pairs

The prompt can also be a list of key-value pairs that helps Box AI to come up with the metadata structure. This approach requires listing the key-value pairs within a  `fields` array.

```bash
curl --location 'https://api.box.com/2.0/ai/extract' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ACCESS_TOKEN>' \
--data '{
          "prompt": "{\"fields\":   [{\"key\":\"vendor\",\"displayName\":\"Vendor\",\"type\":\"string\",\"description\":\ "Vendorname\"},{\"key\":\"documentType\",\"displayName\":\"Type\",\"type\":\"string\",\"description\":\"\"}]}",
    "items": [
        {
            "type": "file",
            "id": "1443721424754"
        }
    ]
}'
```

The response includes the `fields` present in the file, along with their values:

```bash
{
    "answer": "{\"vendor\": \"Quasar Innovations\", \"documentType\": \"Invoice\"}",
    "created_at": "2024-05-31T10:15:38.17-07:00",
    "completion_reason": "done"
}
```

[prereq]: g://box-ai/ai-tutorials/prerequisites
[agent]: e://get_ai_agent_default
[model-param]: r://ai_agent_text_gen#param_basic_gen_model
[prompt-param]: r://ai_agent_text_gen#param_basic_gen_prompt_template
[overrides]: g://box-ai/ai-agents/ai-agent-overrides