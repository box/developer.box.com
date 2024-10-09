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
# ファイルからメタデータを抽出する (自由形式)

<Message type="notice">

Box AI APIは、現在、BoxのMain Beta Agreementに従い提供されるベータ機能のため、利用可能な機能が変更される可能性があります。Box AI APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

Box AI APIを使用すると、ドキュメントを照会し、指定したプロンプトに基づいてメタデータを抽出できます。**自由形式**とは、JSONやXMLなどの形式の文字列化バージョン、またはプレーンテキストをプロンプトに含めることができるという意味です。

## リクエストの送信

リクエストを送信するには、`POST /2.0/ai/extract`エンドポイントを使用します。

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AIを使用するための前提条件][prereq]を確認してください。

<Samples id="post_ai_extract">

</Samples>

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

<Message type="notice">

`items`配列に含めることができる要素は1つだけです。

</Message>

| パラメータ                         | 説明                                                                                                                                                                                                                                                                                                                             | 例                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **`prompt`**                  | Box AIに対するテキストの生成またはリファインのリクエスト。プロンプトの長さは10000文字以内にする必要があります。                                                                                                                                                                                                                                                                  | 週1回の営業会議の議題を作成してください。                                           |
| **`items.id`**                | ドキュメントのBoxファイルID。IDは、拡張子が付いている実際のファイルを参照する必要があります。                                                                                                                                                                                                                                                                             | `1233039227512`                                                 |
| **`items.type`**              | 指定した入力データのタイプ。                                                                                                                                                                                                                                                                                                                 | `file`                                                          |
| `items.content`               | 項目のコンテンツ (多くの場合はテキストレプリゼンテーション)。                                                                                                                                                                                                                                                                                               | `This article is about Box AI`.                                 |
| `dialogue_history.prompt`     | 以前にクライアントによって提供され、大規模言語モデル (LLM) が回答したプロンプト。                                                                                                                                                                                                                                                                                   | `Make my email about public APIs sound more professional`       |
| `dialogue_history.answer`     | 以前にLLMから提供された回答。                                                                                                                                                                                                                                                                                                               | `Here is a draft of your professional email about public APIs.` |
| `dialogue_history.created_at` | プロンプトに対する前回の回答が作成された時点のISO日付形式のタイムスタンプ。                                                                                                                                                                                                                                                                                        | `2012-12-12T10:53:43-08:00`                                     |
| `ai_agent`                    | デフォルトのエージェント構成を上書きするために使用されるAIエージェント。このパラメータを使用すると、たとえば、[`model`][model-param]パラメータを使用してデフォルトのLLMをカスタムのLLMに置き換えたり、よりカスタマイズされたユーザーエクスペリエンスを実現できるようにベースとなる[`prompt`][prompt-param]を微調整したり、`temperature`などのLLMパラメータを変更して結果の創造性を調整したりすることができます。`ai_agent`パラメータを使用する前に、[`GET 2.0/ai_agent_default`][agent]リクエストを使用してデフォルト構成を取得できます。 |                                                                 |

## ユースケース

以下のサンプル請求書から、ベンダー名、請求書番号などの詳細情報を抽出する必要があるとします。

![サンプル請求書](./images/sample-invoice.png)

### リクエストの作成

Box AIから応答を取得するには、以下のパラメータを使用して、`POST /2.0/ai/extract`エンドポイントを呼び出します。

* クエリか、抽出するフィールドの構造化リストまたは非構造化リストを指定できる`prompt`。
* データの抽出元となるファイルの`type`および`id`。

### プロンプトの作成

ユースケースや詳細度に応じて、さまざまなプロンプトを作成できます。

#### キーワードを使用する

プロンプトには、請求書内で見つかると予想されるキーワードのリストを含めることができます。

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

このアプローチを使用すると、以下のように、リクエストで指定したキーワードのリストとその値が返されます。

```bash
{
    "answer": "{\"vendor\": \"Quasar Innovations\", \"total\": \"$1,050\", \"doctype\": \"Invoice\", \"PO\": \"003\"}",
    "created_at": "2024-05-31T10:28:51.906-07:00",
    "completion_reason": "done"
}

```

#### キー/値ペアを使用する

プロンプトには、Box AIがメタデータの構造を認識するのに役立つキー/値ペアのリストを指定することができます。

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

応答には、以下のように、ファイル内に存在するフィールドとその値が含まれます。

```bash
{
    "answer": "{\"vendor\": \"Quasar Innovations\", \"documentType\": \"Invoice\"}",
    "created_at": "2024-05-31T10:15:38.17-07:00",
    "completion_reason": "done"
}

```

#### プレーンテキストを使用する

以下のように、プレーンテキストを使用することもできます。

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

その場合、応答は、クエリに含まれているキーワードに基づいて作成されます。

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
