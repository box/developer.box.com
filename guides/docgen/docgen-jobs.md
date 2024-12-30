---
rank: 5
related_endpoints:
  - get_docgen_jobs
  - get_docgen_batch_jobs_id
  - get_docgen_jobs_id
related_guides:
  - docgen/docgen-getting-started
  - docgen/generate-document
category_id: docgen
subcategory_id: null
is_index: false
id: docgen/docgen-jobs
type: guide
total_steps: 5
sibling_id: docgen
parent_id: docgen
next_page_id: ''
previous_page_id: docgen/docgen-templates
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/docgen/docgen-jobs.md
---
# Box Doc Gen jobs

A Box Doc Gen job runs when you make a request to generate a document.
The `document_generation_data` parameter in the the `POST` request is an array of entries that represent Box Doc Gen jobs run to generate a document.

<Samples id='post_docgen_batches' >

</Samples>

Box Doc Gen API allows you to get information about the Box Doc Gen jobs.

## Prerequisites

Before you start using Box Doc Gen API, follow the steps listed in [getting started Box Doc Gen][docgen-prerequisites] to create a custom app and a Box Doc Gen template.

## List all Box Doc Gen jobs

To get a list of all Box Doc Gen jobs that were run,
use the `GET /2.0/docgen_jobs` endpoint. You don't have to provide any additional parameters.

<Samples id='get_docgen_jobs' >

</Samples>

## Get a Box Doc Gen job by ID

To get a specific Box Doc Gen job,
use the `GET /2.0/docgen_jobs_id` endpoint and provide the `job_id`.

<Samples id='get_docgen_jobs_id' >

</Samples>

## Get Box Doc Gen jobs in batch with a specific ID

A single request can generate several documents. In such a case, a separate generation job is run for each document and all these jobs are included in one "batch" meaning a request.
To get all jobs performed within one request, use the `GET /2.0/docgen_batch_jobs_id` endpoint and provide the `batch_id`.

<Samples id='get_docgen_jobs_id' >

</Samples>

[docgen-prerequisites]: g://docgen/docgen-getting-started