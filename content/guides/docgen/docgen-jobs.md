---
rank: 5
related_endpoints:
<<<<<<< HEAD
  - get_docgen_jobs
  - get_docgen_batch_jobs_id
  - get_docgen_jobs_id
=======
  - get_docgen_jobs_v2025.0
  - get_docgen_batch_jobs_id_v2025.0
  - get_docgen_jobs_id_v2025.0
>>>>>>> 01ddeb2b22e1f38b16259cc6f2219596057ef27b
related_guides:
  - docgen/docgen-getting-started
  - docgen/generate-document
---

# Box Doc Gen jobs

A Box Doc Gen job runs when you make a request to generate a document.
The `document_generation_data` parameter in the `POST` request is an array of entries that represent Box Doc Gen jobs run to generate a document.

<<<<<<< HEAD
<Samples id='post_docgen_batches' />
=======
<Samples id='post_docgen_batches_v2025.0' />
>>>>>>> 01ddeb2b22e1f38b16259cc6f2219596057ef27b

Box Doc Gen API allows you to get information about the Box Doc Gen jobs.

## Prerequisites

Before you start using Box Doc Gen API, follow the steps listed in the [get started with Box Doc Gen][docgen-prerequisites] guide to create a custom app and a Box Doc Gen template.

## List all Box Doc Gen jobs

To get a list of all Box Doc Gen jobs that were run,
use the `GET /2.0/docgen_jobs` endpoint. You don't have to provide any additional parameters.

<<<<<<< HEAD
<Samples id='get_docgen_jobs' />

## Get a Box Doc Gen job by ID

To get a specific Box Doc Gen job, 
use the `GET /2.0/docgen_jobs_id` endpoint and provide the `job_id`.

<Samples id='get_docgen_jobs_id' />
=======
<Samples id='get_docgen_jobs_v2025.0' />

## Get a Box Doc Gen job by ID

To get a specific Box Doc Gen job,
use the `GET /2.0/docgen_jobs_id` endpoint and provide the `job_id`.

<Samples id='get_docgen_jobs_id_v2025.0' />
>>>>>>> 01ddeb2b22e1f38b16259cc6f2219596057ef27b

## Get Box Doc Gen jobs in batch with a specific ID

A single request can generate several documents. In such a case, a separate generation job is run for each document and all these jobs are included in one "batch" meaning a request.
<<<<<<< HEAD
To get all jobs performed within one request, use the `GET /2.0/docgen_batch_jobs_id` endpoint and provide the `batch_id`. 

<Samples id='get_docgen_jobs_id' />
=======
To get all jobs performed within one request, use the `GET /2.0/docgen_batch_jobs_id` endpoint and provide the `batch_id`.

<Samples id='get_docgen_jobs_id_v2025.0' />
>>>>>>> 01ddeb2b22e1f38b16259cc6f2219596057ef27b

[docgen-prerequisites]: g://docgen/docgen-getting-started