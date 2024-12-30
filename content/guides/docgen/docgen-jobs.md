---
rank: 5
related_endpoints:
  - get_docgen_jobs
  - get_docgen_batch_jobs_id
  - get_docgen_jobs_id
related_guides:
  - docgen/docgen-getting-started
  - docgen/generate-document
---

# Box Doc Gen jobs

A Box Doc Gen job runs when you make a request to generate a document.
The `document_generation_data` parameter in the the `POST` request is an array of entries that represent Box Doc Gen jobs run to generate a document.

<Samples id='post_docgen_batches' />

Box Doc Gen API allows you to get information about the Box Doc Gen jobs.

## Prerequisites

Make sure you followed the steps listed in [getting started Box Doc Gen][docgen-prerequisites] to create a custom app and a Box Doc Gen template.
You can then proceed to use the Box Doc Gen API.

## List all Box Doc Gen jobs

To get a list of all Box Doc Gen jobs that were run,
use the `GET /2.0/docgen_jobs` endpoint. You don't have to provide any additional parameters.

<Samples id='get_docgen_jobs' />

## Get a Box Doc Gen job by ID

To get a specific Box Doc Gen job, 
use the `GET /2.0/docgen_jobs_id` endpoint and provide the `job_id`.

<Samples id='get_docgen_jobs_id' />

## Get Box Doc Gen jobs in batch with a specific ID

A single request can generate several documents. In such a case, a separate generation job is run for each document and all these jobs are included in one "batch" meaning a request.
To get all jobs performed within one request, use the `GET /2.0/docgen_batch_jobs_id` endpoint and provide the `batch_id`. 

<Samples id='get_docgen_jobs_id' />

[docgen-prerequisites]: g://docgen/docgen-getting-started