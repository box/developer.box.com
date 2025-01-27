---
rank: 5
related_endpoints:
  - get_docgen_jobs_v2025.0
  - get_docgen_batch_jobs_id_v2025.0
  - get_docgen_jobs_id_v2025.0
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
fullyTranslated: true
---
# Box Doc Genジョブ

Box Doc Genジョブは、ドキュメントを生成するリクエストを行うと実行されます。`POST`リクエスト内の`document_generation_data`パラメータは、ドキュメントを生成するためのBox Doc Genジョブの実行を表すエントリの配列です。

<Samples id="post_docgen_batches_v2025.0">

</Samples>

Box Doc Gen APIを使用すると、Box Doc Genジョブに関する情報を取得できます。

## 前提条件

Box Doc Gen APIの使用を開始する前に、[Box Doc Genの使い方][docgen-prerequisites]ガイドに記載されている手順に従って、カスタムアプリとBox Doc Genテンプレートを作成してください。

## すべてのBox Doc Genジョブのリストを取得

実行されたすべてのBox Doc Genジョブのリストを取得するには、`GET /2.0/docgen_jobs`エンドポイントを使用します。追加のパラメータを指定する必要はありません。

<Samples id="get_docgen_jobs_v2025.0">

</Samples>

## IDを指定してBox Doc Genジョブを取得

特定のBox Doc Genジョブを取得するには、`GET /2.0/docgen_jobs_id`エンドポイントを使用して、`job_id`を指定します。

<Samples id="get_docgen_jobs_id_v2025.0">

</Samples>

## 特定のIDを使用してバッチ内のGet Box Doc Genジョブを取得

単一のリクエストで複数のドキュメントを生成できます。このような場合、個別の生成ジョブが各ドキュメントに対して実行され、これらすべてのジョブが1つの「バッチ」(つまり、1つのリクエスト) に含まれます。1つのリクエスト内で実行されたすべてのジョブを取得するには、`GET /2.0/docgen_batch_jobs_id`エンドポイントを使用し、`batch_id`を指定します。

<Samples id="get_docgen_jobs_id_v2025.0">

</Samples>

[docgen-prerequisites]: g://docgen/docgen-getting-started
