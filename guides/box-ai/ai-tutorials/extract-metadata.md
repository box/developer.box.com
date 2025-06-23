---
rank: 8
related_endpoints:
  - post-ai-extract-structured
related_guides:
  - box-ai/ai-tutorials/prerequisites
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/extract-metadata-structured
alias_paths:
  - guides/box-ai/extract-metadata
category_id: box-ai
subcategory_id: box-ai/ai-tutorials
is_index: false
id: box-ai/ai-tutorials/extract-metadata
type: guide
total_steps: 6
sibling_id: box-ai/ai-tutorials
parent_id: box-ai/ai-tutorials
next_page_id: box-ai/ai-tutorials/extract-metadata-structured
previous_page_id: box-ai/ai-tutorials/default-agent-overrides
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-tutorials/extract-metadata.md
fullyTranslated: true
---
# ファイルからメタデータを抽出する (自由形式)

Box AI APIを使用すると、ドキュメントまたは画像に対してクエリを実行し、指定したプロンプトに基づいてメタデータを抽出できます。**自由形式**とは、JSONやXMLなどの形式の文字列化バージョン、またはプレーンテキストをプロンプトに含めることができるという意味です。

## 開始する前に

Make sure you followed the steps listed in [getting started with Box AI][prereq] to create a platform app and authenticate.

## リクエストの送信

リクエストを送信するには、`POST /2.0/ai/extract`エンドポイントを使用します。

<Samples id="post_ai_extract">

</Samples>

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

<Message type="notice">

`items`配列に含めることができる要素は1つだけです。

</Message>

| パラメータ            | 説明                                                                                                                                                                                                                                                                                                                                                                                        | 例                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| **`prompt`**     | Box AIに対するテキストの生成またはリファインのリクエスト。プロンプトの長さは10000文字以内にする必要があります。                                                                                                                                                                                                                                                                                                                             | 週1回の営業会議のアジェンダを作成してください。        |
| **`items.id`**   | ドキュメントのBoxファイルID。IDは、拡張子が付いている実際のファイルを参照する必要があります。                                                                                                                                                                                                                                                                                                                                        | `1233039227512`                 |
| **`items.type`** | 指定した入力データのタイプ。                                                                                                                                                                                                                                                                                                                                                                            | `file`                          |
| `items.content`  | 項目のコンテンツ (多くの場合はテキストレプリゼンテーション)。                                                                                                                                                                                                                                                                                                                                                          | `This article is about Box AI`. |
| `ai_agent`       | デフォルトのエージェント構成を上書きするために使用されるAIエージェント。このパラメータを使用すると、たとえば、[`model`][model-param]パラメータを使用してデフォルトのLLMをカスタムのLLMに置き換えたり、よりカスタマイズされたユーザーエクスペリエンスを実現できるようにベースとなる[`prompt`][prompt-param]を微調整したり、`temperature`などのLLMパラメータを変更して結果の創造性を調整したりすることができます。`ai_agent`パラメータを使用する前に、[`GET 2.0/ai_agent_default`][agent]リクエストを使用してデフォルト構成を取得できます。具体的なユースケースについては、[AIモデルの上書きに関するチュートリアル][overrides]を参照してください。 |                                 |

## ユースケース

この例では、サンプル請求書からメタデータを抽出する方法を示します。

### リクエストの作成

Box AIから応答を取得するには、以下のパラメータを使用して、`POST /2.0/ai/extract`エンドポイントを呼び出します。

* クエリか、抽出するフィールドの構造化リストまたは非構造化リストを指定できる`prompt`。
* データの抽出元となるファイルの`type`および`id`。

### プロンプトの作成

ユースケースや詳細度に応じて、さまざまなプロンプトを作成できます。

#### プレーンテキストを使用する

このエンドポイントでは自由形式のプロンプトが許可されているため、プレーンテキストを使用して情報を取得できます。

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

その場合、レスポンスは、テキストに含まれているキーワードに基づいて作成されます。

```bash
{
    "answer": "{\"Document Type\": \"Invoice\", \"Vendor\": \"Quasar Innovations\", \"Total\": \"$1,050\", \"PO Number\": \"003\"}",
    "created_at": "2024-05-31T10:30:51.223-07:00",
    "completion_reason": "done"
}

```

#### 特定の用語を使用する

文全体を書かなくても、請求書に含まれることが予想される用語でプロンプトを構成できます。

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

このアプローチを使用すると、以下のように、リクエストで指定した用語のリストとその値が返されます。

```bash
{
    "answer": "{\"vendor\": \"Quasar Innovations\", \"total\": \"$1,050\", \"doctype\": \"Invoice\", \"PO\": \"003\"}",
    "created_at": "2024-05-31T10:28:51.906-07:00",
    "completion_reason": "done"
}

```

#### キー/値ペアを使用する

プロンプトには、Box AIがメタデータの構造を認識するのに役立つキー/値ペアのリストを指定することができます。このアプローチでは、`fields`配列内にキー/値ペアを列挙する必要があります。

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

レスポンスには、以下のように、ファイル内に存在する`fields`とその値が含まれます。

```bash
{
    "answer": "{\"vendor\": \"Quasar Innovations\", \"documentType\": \"Invoice\"}",
    "created_at": "2024-05-31T10:15:38.17-07:00",
    "completion_reason": "done"
}

```

[prereq]: g://box-ai/ai-tutorials/prerequisites

[agent]: e://get_ai_agent_default

[model-param]: r://ai_agent_text_gen#param_basic_gen_model

[prompt-param]: r://ai_agent_text_gen#param_basic_gen_prompt_template

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
