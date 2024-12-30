---
rank: 4
related_endpoints:
  - get_docgen_templates
  - get_docgen_templates_id
  - get_docgen_templates_id_tags
  - post_docgen_templates
related_guides:
  - docgen/docgen-getting-started
  - docgen/generate-document
category_id: docgen
subcategory_id: null
is_index: false
id: docgen/docgen-templates
type: guide
total_steps: 5
sibling_id: docgen
parent_id: docgen
next_page_id: docgen/docgen-jobs
previous_page_id: docgen/generate-document
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/docgen/docgen-templates.md
---
# Box Doc Gen templates

Box Doc Gen API allows you to retrieve information related to Box Doc Gen templates.

## Prerequisites

Before you start using Box Doc Gen API, follow the steps listed in the [get started with Box Doc Gen][docgen-prerequisites] guide to create a custom app and a Box Doc Gen template.

## List Box Doc Gen templates

To get a list of all created Box Doc Gen templates,
use the `GET /2.0/docgen_templates` endpoint. You don't have to provide any additional parameters.

<Samples id='get_docgen_templates' >

</Samples>

The response will contain an `entries` array listing the already created Box Doc Gen templates.

## Get a  Box Doc Gen template by ID

To get a specific Box Doc Gen template,
use the `GET /2.0/docgen_templates_id` endpoint and provide the `template_id`.

<Samples id='get_docgen_templates_id' >

</Samples>

The response will contain details of a file that was used as a Box Doc Gen template.

## List all Box Doc Gen tags in a template

To get a list of all tags used in a specific Box Doc Gen template,
use the `GET /2.0/docgen_templates_id_tags` endpoint and provide the `template_id`.

<Samples id='get_docgen_templates_id_tags' >

</Samples>

The response will contain an array listing the tags that were used for a particular template.

## List all document generation jobs for a template

To get a list of all created Box Doc Gen templates,
use the `GET /2.0/docgen_template_jobs_id` endpoint and provide the `template_id`.

<Samples id='get_docgen_template_jobs_id' >

</Samples>

The response will contain a list of Box Doc Gen jobs that were run to generate
documents.

[docgen-prerequisites]: g://docgen/docgen-getting-started