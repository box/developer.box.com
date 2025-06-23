---
rank: 3
related_guides:
  - docgen/docgen-getting-started
  - docgen/mark-template
related_endpoints:
  - post_docgen_batches_v2025.0
  - post_docgen_templates_v2025.0
category_id: docgen
subcategory_id: null
is_index: false
id: docgen/generate-document
type: guide
total_steps: 5
sibling_id: docgen
parent_id: docgen
next_page_id: docgen/docgen-templates
previous_page_id: docgen/mark-template
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/docgen/generate-document.md
fullyTranslated: true
---
# ドキュメントの生成

`POST /2.0/docgen_batches`エンドポイントを使用すると、Box Doc Genテンプレートを入力データとして使用してドキュメントを生成できます。

## 前提条件

Before you start using Box Doc Gen API, follow the steps listed in the [get started with Box Doc Gen][docgen-prerequisites] guide to create a platform app and a Box Doc Gen template.

## リクエストの送信

ドキュメント (複数可) を生成するには、`POST /2.0/docgen_batches`エンドポイントを使用します。

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ                                              | 説明                                                               | 例                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| **`file.id`**                                      | Box Doc Genテンプレートとして設定するファイルのID。                                 | `12345678`                                                   |
| **`file.type`**                                    | 指定した入力データの種類。値は常に**`file`**になります。                                | `file`                                                       |
| `file_version`                                     | テンプレートのファイルバージョン。                                                | `12345`                                                      |
| **`input_source`**                                 | 生成されるドキュメントの入力ソース。この値は、APIベースのすべてのドキュメント生成リクエストで`api`にする必要があります。 | `api`                                                        |
| **`output_type`**                                  | 出力ファイルの種類。                                                       | `docx`, `pdf`                                                |
| **`destination_folder.id`**                        | 生成されたドキュメントが保存されるフォルダのID。                                        | `12345678`                                                   |
| **`destination_folder.type`**                      | 保存先の項目の種類。生成されたファイルはフォルダに保存されるため、値は常に**`folder`**になります。          | `file`                                                       |
| **`document_generation_data.generated_file_name`** | 生成されるファイルの名前。                                                    | `New_Template`                                               |
| **`document_generation_data.user_input`**          | ドキュメントの生成に使用するJSONデータ。                                           | `{"id": 2, "name": "Ink  Cartridge", "type": "non-fragile"}` |

## ユースケース

Box Doc GenテンプレートとJSONデータを準備できたら、Box Doc Gen APIにドキュメント生成のリクエストを行うことができます。

コールのサンプルは次のようになります。

<Samples id="post_docgen_batches_v2025.0">

</Samples>

リクエストが処理されている間、`document_generation_data`配列の各エントリは個別のドキュメント生成ジョブとして処理され、そのジョブは、Box Doc Genによってドキュメント生成キューに追加されます。

生成されたドキュメントは、指定したフォルダに保存されます。

[docgen-prerequisites]: g://docgen/docgen-getting-started
