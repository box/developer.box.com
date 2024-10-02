---
rank: 8
related_endpoints:
  - post-ai-extract-structured
related_guides:
  - box-ai/extract-metadata-structured
  - box-ai/prerequisites
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/extract-metadata
type: guide
total_steps: 6
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/extract-metadata-structured
previous_page_id: box-ai/generate-text
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/extract-metadata.md
fullyTranslated: true
---
# Extract metadata from file (freeform)

<Message type="notice">

Box AI API is currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.

</Message>

Box AI API allows you to query a document and extract metadata based on a provided prompt. **Freeform** means that the prompt can include a stringified version of formats such as JSON or XML, or even plain text.

## リクエストの送信

リクエストを送信するには、`POST /2.0/ai/extract`エンドポイントを使用します。

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AIを使用するための前提条件][prereq]を確認してください。

<Samples id="post_ai_extract">

</Samples>

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

<Message type="notice">

The `items` array can have exactly one element.

</Message>

| パラメータ                         | 説明                                                                                                                                                                                                                                                                                                                             | 例                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **`prompt`**                  | Box AIに対するテキストの生成またはリファインのリクエスト。プロンプトの長さは10000文字以内にする必要があります。                                                                                                                                                                                                                                                                  | 週1回の営業会議の議題を作成してください。                                           |
| **`items.id`**                | Box file ID of the document. The ID must reference an actual file with an extension.                                                                                                                                                                                                                                           | `1233039227512`                                                 |
| **`items.type`**              | 指定した入力データのタイプ。                                                                                                                                                                                                                                                                                                                 | `file`                                                          |
| `items.content`               | 項目のコンテンツ (多くの場合はテキストレプリゼンテーション)。                                                                                                                                                                                                                                                                                               | `This article is about Box AI`.                                 |
| `dialogue_history.prompt`     | 以前にクライアントによって提供され、大規模言語モデル (LLM) が回答したプロンプト。                                                                                                                                                                                                                                                                                   | `Make my email about public APIs sound more professional`       |
| `dialogue_history.answer`     | 以前にLLMから提供された回答。                                                                                                                                                                                                                                                                                                               | `Here is a draft of your professional email about public APIs.` |
| `dialogue_history.created_at` | プロンプトに対する前回の回答が作成された時点のISO日付形式のタイムスタンプ。                                                                                                                                                                                                                                                                                        | `2012-12-12T10:53:43-08:00`                                     |
| `ai_agent`                    | デフォルトのエージェント構成を上書きするために使用されるAIエージェント。このパラメータを使用すると、たとえば、[`model`][model-param]パラメータを使用してデフォルトのLLMをカスタムのLLMに置き換えたり、よりカスタマイズされたユーザーエクスペリエンスを実現できるようにベースとなる[`prompt`][prompt-param]を微調整したり、`temperature`などのLLMパラメータを変更して結果の創造性を調整したりすることができます。`ai_agent`パラメータを使用する前に、[`GET 2.0/ai_agent_default`][agent]リクエストを使用してデフォルト構成を取得できます。 |                                                                 |

## ユースケース

Let's assume you want to extract the vendor name, invoice number, and a few more details from the following sample invoice:

![sample invoice](./images/sample-invoice.png)

### Create the request

To get the response from Box AI, call `POST /2.0/ai/extract` endpoint with the following parameters:

* `prompt` that can be a query, or a structured or unstructured list of fields to extract.
* `type` and `id` of the file to extract the data from.

### Create the prompt

Depending on the use case and the level of detail, you can construct various prompts.

#### Using keywords

The prompt can include a list of keywords that you expect to find in an invoice:

```bash
curl --location 'https://api.box.com/2.0/ai/extract' \
--header 'Content-Type: application/json' \
--header 'Authorization: <ACCESS_TOKEN>' \
--data '{
    "prompt": "{\"vendor\",\"total\",\"doctype\",\"date\",\"PO\"}",
    "items": [
        {
            "type": "file",
            "id": "1443721424754"
        }
    ]
}'

```

Using this approach results in a list of keywords provided in the request and their values:

```bash
{
    "answer": "{\"vendor\": \"Quasar Innovations\", \"total\": \"$1,050\", \"doctype\": \"Invoice\", \"PO\": \"003\"}",
    "created_at": "2024-05-31T10:28:51.906-07:00",
    "completion_reason": "done"
}

```

#### Using key-value pairs

The prompt can be a list of key-value pairs that helps Box AI to come up with the metadata structure:

```bash
curl --location 'https://api.box.com/2.0/ai/extract' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ACCESS_TOKEN>' \
--data '{
          "prompt": "{\"fields\":   [{\"key\":\"vendor\",\"displayName\":\"Vendor\",\"type\":\"string\",\"description\":\ "Vendorname\"},{\"key\":\"documentType\",\"displayName\":\"Type\",\"type\":\"string\",\"description\":\"\"}]}",
    "items": [
        {
            "type": "file",
            "id": "1443721424754"
        }
    ]
}'

```

The response includes the fields present in the file, along with their values:

```bash
{
    "answer": "{\"vendor\": \"Quasar Innovations\", \"documentType\": \"Invoice\"}",
    "created_at": "2024-05-31T10:15:38.17-07:00",
    "completion_reason": "done"
}

```

#### Using plain text

You can also use plain text:

```bash
curl --location 'https://api.box.com/2.0/ai/extract' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ACCESS_TOKEN>' \
--data '{
    "prompt": "find the document type (invoice or po), vendor, total, and po number",
    "items": [
        {
            "type": "file",
            "id": "1443721424754"
        }
    ]
}'

```

In such a case, the response will be based on the keywords included in the query:

```bash
{
    "answer": "{\"Document Type\": \"Invoice\", \"Vendor\": \"Quasar Innovations\", \"Total\": \"$1,050\", \"PO Number\": \"003\"}",
    "created_at": "2024-05-31T10:30:51.223-07:00",
    "completion_reason": "done"
}

```

[prereq]: g://box-ai/prerequisites

[agent]: e://get_ai_agent_default

[model-param]: r://ai_agent_text_gen#param_basic_gen_model

[prompt-param]: r://ai_agent_text_gen#param_basic_gen_prompt_template
