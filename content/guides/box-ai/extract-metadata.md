---
rank: 8
related_endpoints:
  - post-ai-extract-structured
related_guides:
  - box-ai/extract-metadata-structured
  - box-ai/prerequisites
---

# Extract metadata from file (freeform)

<Message type="notice">
Box AI API is currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.

</Message>

Box AI API allows you to query a document and extract metadata based on a provided prompt.
**Freeform** means that the prompt can include a stringified version of formats such as JSON or XML, or even plain text.

## Send a request

To send a request, use the
`POST /2.0/ai/extract` endpoint.

Make sure you have generated the developer token
to authorize your app. See [prerequisites for using Box AI][prereq]
for details.

<Samples id='post_ai_extract' />

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
| `dialogue_history.prompt` | The prompt previously provided by the client and answered by the Large Language Model (LLM).  | `Make my email about public APIs sound more professional` |
| `dialogue_history.answer` | The answer previously provided by the LLM. |   `Here is a draft of your professional email about public APIs.` |
| `dialogue_history.created_at` | The ISO date formatted timestamp of when the previous answer to the prompt was created.   | `2012-12-12T10:53:43-08:00` |
|`ai_agent` | The AI agent used to override the default agent configuration. This parameter allows you to, for example, replace the default LLM with a custom one using the [`model`][model-param] parameter, tweak the base [`prompt`][prompt-param] to allow for a more customized user experience, or change an LLM parameter, such as `temperature`, to make the results more or less creative. Before using the `ai_agent` parameter, you can get the default configuration using the [`GET 2.0/ai_agent_default`][agent] request.| | 

## Use case

Let's assume you want to extract the vendor name, invoice number, and a few more details from the following sample invoice:

![sample invoice](./images/sample-invoice.png)

### Create the request

To get the response from Box AI, call `POST /2.0/ai/extract` endpoint with the following parameters:

  * `prompt` that can be a query, or a structured or unstructured list of fields to extract.
  * `type` and `id` of the file to extract the data from.

### Create the prompt

Depending on the use case and the level of detail, you can construct various prompts.

#### Using keywords

The prompt can include a list of keywords that you expect to find in an invoice:

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

Using this approach results in a list of keywords provided in the request and their values:

```bash
{
    "answer": "{\"vendor\": \"Quasar Innovations\", \"total\": \"$1,050\", \"doctype\": \"Invoice\", \"PO\": \"003\"}",
    "created_at": "2024-05-31T10:28:51.906-07:00",
    "completion_reason": "done"
}
```

#### Using key-value pairs

The prompt can be a list of key-value pairs that helps Box AI to come up with the metadata structure:

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

The response includes the fields present in the file, along with their values:

```bash
{
    "answer": "{\"vendor\": \"Quasar Innovations\", \"documentType\": \"Invoice\"}",
    "created_at": "2024-05-31T10:15:38.17-07:00",
    "completion_reason": "done"
}
```

#### Using plain text

You can also use plain text:

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

In such a case, the response will be based on the keywords included in the query:

```bash
{
    "answer": "{\"Document Type\": \"Invoice\", \"Vendor\": \"Quasar Innovations\", \"Total\": \"$1,050\", \"PO Number\": \"003\"}",
    "created_at": "2024-05-31T10:30:51.223-07:00",
    "completion_reason": "done"
}
```

[prereq]: g://box-ai/prerequisites
[agent]: e://get_ai_agent_default
[model-param]: r://ai_agent_text_gen#param_basic_gen_model
[prompt-param]: r://ai_agent_text_gen#param_basic_gen_prompt_template