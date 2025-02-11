---
rank: 4
related_endpoints:
<<<<<<< HEAD
  - get_docgen_templates
  - get_docgen_templates_id
  - get_docgen_templates_id_tags
  - post_docgen_templates
=======
  - get_docgen_templates_v2025.0
  - get_docgen_templates_id_v2025.0
  - get_docgen_templates_id_tags_v2025.0
  - post_docgen_templates_v2025.0
>>>>>>> 01ddeb2b22e1f38b16259cc6f2219596057ef27b
related_guides:
  - docgen/docgen-getting-started
  - docgen/generate-document
---

# Box Doc Gen templates

Box Doc Gen API allows you to retrieve information related to Box Doc Gen templates.

## Prerequisites

Before you start using Box Doc Gen API, follow the steps listed in the [get started with Box Doc Gen][docgen-prerequisites] guide to create a custom app and a Box Doc Gen template.

## List Box Doc Gen templates

To get a list of all created Box Doc Gen templates,
use the `GET /2.0/docgen_templates` endpoint. You don't have to provide any additional parameters.

<<<<<<< HEAD
<Samples id='get_docgen_templates' />
=======
<Samples id='get_docgen_templates_v2025.0' />
>>>>>>> 01ddeb2b22e1f38b16259cc6f2219596057ef27b

The response will contain an `entries` array listing the already created Box Doc Gen templates.

## Get a  Box Doc Gen template by ID

To get a specific Box Doc Gen template,
use the `GET /2.0/docgen_templates_id` endpoint and provide the `template_id`.

<<<<<<< HEAD
<Samples id='get_docgen_templates_id' />
=======
<Samples id='get_docgen_templates_id_v2025.0' />
>>>>>>> 01ddeb2b22e1f38b16259cc6f2219596057ef27b

The response will contain details of a file that was used as a Box Doc Gen template.

## List all document generation jobs for a template

To get a list of all created Box Doc Gen templates,
use the `GET /2.0/docgen_template_jobs_id` endpoint and provide the `template_id`.

<<<<<<< HEAD
<Samples id='get_docgen_template_jobs_id' />

The response will contain a list of Box Doc Gen jobs that were run to generate 
=======
<Samples id='get_docgen_template_jobs_id_v2025.0' />

The response will contain a list of Box Doc Gen jobs that were run to generate
>>>>>>> 01ddeb2b22e1f38b16259cc6f2219596057ef27b
documents.

[docgen-prerequisites]: g://docgen/docgen-getting-started