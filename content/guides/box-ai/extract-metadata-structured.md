---
rank: 9
related_endpoints:
  - post-ai-extract
related_guides:
  - box-ai/prerequisites
  - box-ai/extract-metadata
  - box-ai/ai-agents/get-agent-default-config
  - box-ai/ai-agents/overrides-tutorial
---

# Extract metadata from file (structured)

<Message type="notice">
Box AI API is currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.

</Message>

With Box AI API, you can extract metadata from the provided file
and get the result in the form of key-value pairs. 
As input, you can either create a structure using the `fields` parameter, or use an already defined metadata template.
To learn more about creating templates, see [Creating metadata templates in the Admin Console][templates-console] or use the [metadata template API][templates-api].

## Send a request

To send a request, use the
`POST /2.0/ai/extract_structured` endpoint.

Make sure you have generated the developer token
to authorize your app. See [prerequisites for using Box AI][prereq]
for details.

<Samples id='post_ai_extract_structured' />

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

<Message type='notice'>
The `items` array can have exactly one element.
</Message>

| Parameter                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Example                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **`metadata_template`**              | The metadata template containing the fields to extract. For your request to work, you must provide either `metadata_template` or `fields`, but not both.                                                                                                                                                                                                                                                                                                                                                                  |                                                          |
| **`metadata_template.type`**         | The type of metadata template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `metadata_template`                                      |
| **`metadata_template.scope`**        | The scope of the metadata template that can either be `global` or `enterprise`. Global templates are those available to any Box enterprise, whereas `enterprise` templates are bound to a specific enterprise.                                                                                                                                                                                                                                                                                                            | `metadata_template`                                      |
| **`metadata_template.template_key`** | The name of your metadata template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `invoice`                                                |
| **`items.id`**                       | Box file ID of the document. The ID must reference an actual file with an extension.                                                                                                                                                                                                                                                                                                                                                                                                                                      | `1233039227512`                                          |
| **`items.type`**                     | The type of the supplied input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `file`                                                   |
| `items.content`                      | The content of the item, often the text representation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `This article is about Box AI`.                          |
| `fields.type`                        | The type of the field. It include but is not limited to `string`, `float`, `date`, `enum`, and `multiSelect`.                                                                                                                                                                                                                                                                                                                                                                                                             | `string`                                                 |
| `fields.description`                 | A description of the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `The person's name.`                                     |
| `fields.displayName`                 | The display name of the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `Name`                                                   |
| `fields.key`                         | A unique identifier for the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `name`                                                   |
| `fields.options`                     | A list of options for this field. This is most often used in combination with the `enum` and `multiSelect` field types.                                                                                                                                                                                                                                                                                                                                                                                                   | `[{"key":"First Name"},{"key":"Last Name"}]`             |
| `fields.options.key`                 | A unique identifier for the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `First Name`                                             |
| `fields.prompt`                      | Additional context about the key (identifier) that may include how to find and format it.                                                                                                                                                                                                                                                                                                                                                                                                                                 | `Name is the first and last name from the email address` |
| `ai_agent`                           | The AI agent used to override the default agent configuration. This parameter allows you to, for example, replace the default LLM with a custom one using the [`model`][model-param] parameter, tweak the base [`prompt`][prompt-param] to allow for a more customized user experience, or change an LLM parameter, such as `temperature`, to make the results more or less creative. Before you use the `ai_agent` parameter, you can get the default configuration using the [`GET 2.0/ai_agent_default`][agent] request. For specific use cases, see the [AI model overrides tutorial][overrides]. |                                                          |

## Use case

Let's assume you want to extract the vendor name, invoice number, and a few more details from the following sample invoice:

![sample invoice](./images/sample-invoice.png)

### Create the request

To get the response from Box AI, call `POST /2.0/ai/extract` endpoint with the following parameters:

- `items.type` and `items.id` to specify the file to extract the data from.
- `fields` to specify the data that you want to extract from the given file.
- `metadata_template` to supply an already existing metadata template.

<Message type='notice'>

You can use either `fields` or `metadata_template` to specify your structure, but not both.

</Message>

### Using `fields` parameter

The `fields` parameter allows you to specify the data you want to extract. Each `fields` object has a subset of parameters you can use to add more information about the searched data. 
For example, you can add the field type, description, or even a prompt with some additional context.

```bash
curl --location 'https://api.box.com/2.0/ai/extract_structured' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ACCESS_TOKEN>'' \
--data '{
    "items": [
        {
            "id": "1517628697289",
            "type": "file"
        }
    ],
    "fields": [
        {
            "key": "document_type",
            "type": "enum",
            "prompt": "what type of document is this?",
            "options": [
                {
                    "key": "Invoice"
                },
                {
                    "key": "Purchase Order"
                },
                {
                    "key": "Unknown"
                }
            ]
        },
        {
            "key": "document_date",
            "type": "date"
        },
        {
            "key": "vendor",
            "description": "The name of the entity.",
            "prompt": "Which vendor is sending this document.",
            "type": "string"
        },
        {
            "key": "document_total",
            "type": "float"
        }
    ]
  }'
```

The response lists the specified fields and their values:

```bash
{
    "document_date": "2024-02-13",
    "vendor": "Quasar Innovations",
    "document_total": $1050,
    "document_type": "Purchase Order"
}
```

### Using metadata template

If you prefer to use a metadata template, you can provide its `template_key`, `type`, and `scope`.

```bash
curl --location 'https://api.box.com/2.0/ai/extract_structured' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ACCESS_TOKEN>' \
--data '{
    "items": [
        {
            "id": "1517628697289",
            "type": "file"
        }
    ],
    "metadata_template": {
        "template_key": "rbInvoicePO",
        "type": "metadata_template",
        "scope": "enterprise_1134207681"
    }
}'
```

The response lists the fields included in the metadata template and their values:

```bash
{
  "documentDate": "February 13, 2024",
  "total": "$1050",
  "documentType": "Purchase Order",
  "vendor": "Quasar Innovations",
  "purchaseOrderNumber": "003"
}
```

[prereq]: g://box-ai/prerequisites
[agent]: e://get_ai_agent_default
[model-param]: r://ai_agent_text_gen#param_basic_gen_model
[prompt-param]: r://ai_agent_text_gen#param_basic_gen_prompt_template
[templates-console]: https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates
[templates-api]: g://metadata/templates/create
[overrides]: g://box-ai/ai-agents/overrides-tutorial