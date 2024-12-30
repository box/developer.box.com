---
rank: 2
related_guides:
  - docgen/docgen-getting-started
  - docgen/docgen-templates
  - docgen/generate-document
related_endpoints:
  - post_docgen_batches
  - post_docgen_templates
---

# Mark file as Doc Gen template

You can mark an existing document as a Box Doc Gen template and use it to generate documents.

## Before you start

Make sure you followed the steps listed in [getting started Box Doc Gen][docgen-prerequisites] to create a custom app and a Box Doc Gen template.
You can then proceed to use the Box Doc Gen API.

## Send a request

To send a request containing your question,
use the `POST /2.0/docgen_templates` endpoint and
provide the mandatory parameters.

### Parameters

To make a call, you need to pass the following parameters.
Mandatory parameters are in **bold**.

| Parameter    |Description         | Example                     |
| ------------ | ------ | --- |
| **`file.id`** | ID of the file to be marked as the Box Doc Gen template. | `12345678` |
| **`file.type`** | The type of provided input. The value is always **`file`**. | `file` |

## Use cases

### Mark a file as Box Doc Gen template

The following sample show you how to mark a file to ensure it is recognized as a Box Doc Gen template. 

<Message type='notice'>
The file must be in `.docx` format.
</Message>

<Samples id='post_docgen_templates' />

### Remove Box Doc Gen template marking from a file

To make sure a file is no longer marked as a Box Doc Gen template, 
use the `DELETE 2.0/docgen_templates/:template_id` request.

<Samples id='delete_docgen_templates_id' />

[docgen-prerequisites]: g://docgen/docgen-getting-started