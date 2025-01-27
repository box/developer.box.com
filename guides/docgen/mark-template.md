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
# ファイルをBox Doc Genテンプレートとして設定

既存のドキュメントをBox Doc Genテンプレートとして設定し、それを使用してドキュメントを生成できます。

## 開始する前に

Box Doc Gen APIの使用を開始する前に、[Box Doc Genの使い方][docgen-prerequisites]ガイドに記載されている手順に従って、カスタムアプリとBox Doc Genテンプレートを作成してください。

## リクエストの送信

質問を含むリクエストを送信するには、`POST /2.0/docgen_templates`エンドポイントを使用し、必須のパラメータを指定します。

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ           | 説明                                | 例          |
| --------------- | --------------------------------- | ---------- |
| **`file.id`**   | Box Doc Genテンプレートとして設定するファイルのID。  | `12345678` |
| **`file.type`** | 指定した入力データの種類。値は常に**`file`**になります。 | `file`     |

## ユースケース

### ファイルをBox Doc Genテンプレートとして設定する

次のサンプルでは、ファイルがBox Doc Genテンプレートとして認識されるように設定する方法を示します。

<Message type="notice">

ファイルは`.docx`形式である必要があります。

</Message>

<Samples id="post_docgen_templates_v2025.0">

</Samples>

### ファイルからBox Doc Genテンプレートの設定を削除する

ファイルのBox Doc Genテンプレートの設定が解除されるようにするには、`DELETE 2.0/docgen_templates/:template_id`リクエストを使用します。

<Samples id="delete_docgen_templates_id_v2025.0">

</Samples>

[docgen-prerequisites]: g://docgen/docgen-getting-started
