---
rank: 4
related_endpoints:
  - get_docgen_templates_v2025.0
  - get_docgen_templates_id_v2025.0
  - get_docgen_templates_id_tags_v2025.0
  - post_docgen_templates_v2025.0
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
fullyTranslated: true
---
# Box Doc Genテンプレート

Box Doc Gen APIを使用すると、Box Doc Genテンプレートに関連した情報を取得できます。

## 前提条件

Box Doc Gen APIの使用を開始する前に、[Box Doc Genの使い方][docgen-prerequisites]ガイドに記載されている手順に従って、PlatformアプリとBox Doc Genテンプレートを作成してください。

## Box Doc Genテンプレートのリストを取得

作成されたすべてのBox Doc Genテンプレートのリストを取得するには、`GET /2.0/docgen_templates`エンドポイントを使用します。追加のパラメータを指定する必要はありません。

<Samples id="get_docgen_templates_v2025.0">

</Samples>

レスポンスには、すでに作成済みのBox Doc Genテンプレートを列挙する`entries`配列が含まれます。

## IDを指定してBox Doc Genテンプレートを取得

特定のBox Doc Genテンプレートを取得するには、`GET /2.0/docgen_templates_id`エンドポイントを使用し、`template_id`を指定します。

<Samples id="get_docgen_templates_id_v2025.0">

</Samples>

レスポンスには、Box Doc Genテンプレートとして使用されたファイルの詳細が含まれます。

## テンプレートのすべてのドキュメント生成ジョブのリストを取得

作成済みのすべてのBox Doc Genテンプレートのリストを取得するには、`GET /2.0/docgen_template_jobs_id`エンドポイントを使用し、`template_id`を指定します。

<Samples id="get_docgen_template_jobs_id_v2025.0">

</Samples>

レスポンスには、ドキュメントを生成するために実行されたBox Doc Genジョブのリストが含まれます。

[docgen-prerequisites]: g://docgen/docgen-getting-started
