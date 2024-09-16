---
rank: 9
related_endpoints:
  - post-ai-extract
related_guides:
  - box-ai/prerequisites
  - box-ai/ask-questions
  - box-ai/get-agent-default-config
---

# Extract metadata with Box AI API (structured)

<Message type="notice">
Box AI API is currently in beta which means the
available capabilities may change.
Box AI API is available to all Enterprise Plus customers.

</Message>

With Box AI Platform API, you can extract metadata from the provided file
and return it in the form of key-value pairs.
Use this endpoint if you already have a metadata template that
you can use to obtain data.
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

**Note**: The `items` array can have exactly one element.

| Parameter                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Example                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **`metadata_template`**              | The metadata template containing the fields to extract. For your request to work, you must provide either `metadata_template` or `fields`, but not both.                                                                                                                                                                                                                                                                                                                                                                  |                                                          |
| **`metadata_template.type`**         | The type of metadata template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `metadata_template`                                      |
| **`metadata_template.scope`**        | The scope of the metadata template that can either be `global` or `enterprise`. Global templates are those available to any Box enterprise, whereas `enterprise` templates are bound to a specific enterprise.                                                                                                                                                                                                                                                                                                            | `metadata_template`                                      |
| **`metadata_template.template_key`** | The name of your metadata template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `invoice`                                                |
| **`items.id`**                       | Box file ID of the document.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `1233039227512`                                          |
| **`items.type`**                     | The type of the supplied input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `file`                                                   |
| `items.content`                      | The content of the item, often the text representation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `This article is about Box AI`.                          |
| `fields.type`                        | The type of the field. It include but is not limited to `string`, `float`, `date`, `enum`, and `multiSelect`.                                                                                                                                                                                                                                                                                                                                                                                                             | `string`                                                 |
| `fields.description`                 | A description of the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `The person's name.`                                     |
| `fields.displayName`                 | The display name of the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `Name`                                                   |
| `fields.key`                         | A unique identifier for the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `name`                                                   |
| `fields.options`                     | A list of options for this field. This is most often used in combination with the `enum` and `multiSelect` field types.                                                                                                                                                                                                                                                                                                                                                                                                   | `[{"key":"First Name"},{"key":"Last Name"}]`             |
| `fields.options.key`                 | A unique identifier for the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `First Name`                                             |
| `fields.prompt`                      | Additional context about the key (identifier) that may include how to find and format it.                                                                                                                                                                                                                                                                                                                                                                                                                                 | `Name is the first and last name from the email address` |
| `ai_agent`                           | The AI agent used to override the default agent configuration. This parameter allows you to, for example, replace the default LLM with a custom one using the [`model`][model-param] parameter, tweak the base [`prompt`][prompt-param] to allow for a more customized user experience, or change an LLM parameter, such as `temperature`, to make the results more or less creative. Before using the `ai_agent` parameter, you can get the default configuration using the [`GET 2.0/ai_agent_default`][agent] request. |                                                          |

[prereq]: g://box-ai/prerequisites
[agent]: e://get_ai_agent_default
[model-param]: r://ai_agent_text_gen#param_basic_gen_model
[prompt-param]: r://ai_agent_text_gen#param_basic_gen_prompt_template
[templates-console]: https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates
[templates-api]: g://metadata/templates/create
