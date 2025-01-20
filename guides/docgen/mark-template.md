---
rank: 2
related_guides:
  - docgen/docgen-getting-started
  - docgen/docgen-templates
  - docgen/generate-document
related_endpoints:
  - post_docgen_batches_v2025.0
  - post_docgen_templates_v2025.0
category_id: docgen
subcategory_id: null
is_index: false
id: docgen/mark-template
type: guide
total_steps: 5
sibling_id: docgen
parent_id: docgen
next_page_id: docgen/generate-document
previous_page_id: docgen/docgen-getting-started
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/docgen/mark-template.md
fullyTranslated: true
---
# Mark file as Box Doc Gen template

You can mark an existing document as a Box Doc Gen template and use it to generate documents.

## 開始する前に

Before you start using Box Doc Gen API, follow the steps listed in the [get started with Box Doc Gen][docgen-prerequisites] guide to create a custom app and a Box Doc Gen template.

## リクエストの送信

質問を含むリクエストを送信するには、`POST /2.0/docgen_templates`エンドポイントを使用し、必須のパラメータを指定します。

### パラメータ

To make a call you need to pass the following parameters. Mandatory parameters are in **bold**.

| パラメータ           | 説明                                                          | 例          |
| --------------- | ----------------------------------------------------------- | ---------- |
| **`file.id`**   | ID of the file to be marked as the Box Doc Gen template.    | `12345678` |
| **`file.type`** | The type of provided input. The value is always **`file`**. | `file`     |

## ユースケース

### Mark a file as Box Doc Gen template

The following sample show you how to mark a file to ensure it is recognized as a Box Doc Gen template.

<Message type="notice">

The file must be in `.docx` format.

</Message>

<Samples id="post_docgen_templates_v2025.0">

</Samples>

### Remove Box Doc Gen template marking from a file

To make sure a file is no longer marked as a Box Doc Gen template, use the `DELETE 2.0/docgen_templates/:template_id` request.

<Samples id="delete_docgen_templates_id_v2025.0">

</Samples>

[docgen-prerequisites]: g://docgen/docgen-getting-started
