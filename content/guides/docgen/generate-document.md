---
rank: 3
related_guides:
  - docgen/docgen-getting-started
  - docgen/mark-template
related_endpoints:
  - post_docgen_batches
  - post_docgen_templates
---

# Generate documents

The `POST /2.0/docgen_batches` endpoint allows you to generate a document using Box Doc Gen template as input. 

## Prerequisites

Before you start using Box Doc Gen API, follow the steps listed in [getting started Box Doc Gen][docgen-prerequisites] to create a custom app and a Box Doc Gen template.

## Send a request 

To generate a document or a set of documents,
use the `POST /2.0/docgen_batches` endpoint.

### Parameters

To make a call, you need to pass the following parameters.
Mandatory parameters are in **bold**.

| Parameter    |Description         | Example                     |
| ------------ | ------ | --- |
| **`file.id`** | ID of the file to be marked as Box Doc Gen template. | `12345678` |
| **`file.type`** | The type of provided input. The value is always **`file`**. | `file` |
| `file_version` | The file version of a template. | `12345` |
| **`input_source`** | The input source for generated document. The value has to be `api` for all the API-based document generation requests. | `api` |
| **`output_type`** | The output file type. | `docx` |
| **`destination_folder.id`** | The ID of the folder where the generated document will be stored. | `12345678` |
| **`destination_folder.type`** | The type of the destination item. Since the generated files are stored in folders, the value is always **`folder`**. | `file` |
| **`document_generation_data.generated_file_name`** | The name of the generated file. | `New_Template` |
| **`document_generation_data.user_input`**  | The JSON data to be used to generate document. | `{"id": 2, "name": "Ink  Cartridge", "type": "non-fragile"}`|

## Use case

When your Box Doc Gen template and JSON data is ready, you can make a request to Box Doc Gen API to generate documents.

A sample call looks as follows:

<Samples id='post_docgen_batches' />

When the request is being processed, each entry in the `document_generation_data` array is treated as a separate document generation job that Box Doc Gen adds to the document generation queue. 

Generated documents will be saved in the designated folder.

[docgen-prerequisites]: g://docgen/docgen-getting-started