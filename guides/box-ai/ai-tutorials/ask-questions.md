---
rank: 2
related_endpoints:
  - post_ai_ask
related_guides:
  - box-ai/ai-tutorials/prerequisites
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
category_id: box-ai
subcategory_id: box-ai/ai-tutorials
is_index: false
id: box-ai/ai-tutorials/ask-questions
type: guide
total_steps: 6
sibling_id: box-ai/ai-tutorials
parent_id: box-ai/ai-tutorials
next_page_id: box-ai/ai-tutorials/generate-text
previous_page_id: box-ai/ai-tutorials/prerequisites
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-tutorials/ask-questions.md
fullyTranslated: true
---
# Box AIに質問する

<Message type="notice">

Box AI APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

Box AI APIを使用すると、指定した1ファイルまたは一連のファイルについて質問し、そのコンテンツに基づいた応答を得ることができます。たとえば、Boxでドキュメントを表示している場合に、Box AIに対して、コンテンツの要約を求めることができます。

## 開始する前に

Make sure you followed the steps listed in [prerequisites for using Box AI][prereq] to create a custom app and authenticate.

## リクエストの送信

質問を含むリクエストを送信するには、`POST /2.0/ai/ask`エンドポイントを使用し、必須のパラメータを指定します。

<Samples id="post_ai_ask">

</Samples>

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ                         | 説明                                                                                                                                                                                                                                                                                                                                                                                                   | 使用可能な値                                                          | 例                                                                                                                                                                           |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`mode`**                    | リクエストのタイプ。1つのファイルと一連のファイルのどちらに関する質問かを指定できます。1ファイルの場合、Box AI APIは、最大1 MBのテキストレプリゼンテーションをサポートします。ファイルサイズが1 MBを超えた場合は、テキストレプリゼンテーションの最初の1 MBが処理されます。複数のファイルのリストを取得する場合、上限は25ファイルです。`mode`を`single_item_qa`に設定すると、`items`配列には要素を1つしか取得できません。                                                                                                                                                             | `single_item_qa`, `multiple_item_qa`                            | `single_item_qa`                                                                                                                                                            |
| **`prompt`**                  | ドキュメントまたはコンテンツに関する質問。プロンプトの長さは10000文字以内にする必要があります。                                                                                                                                                                                                                                                                                                                                                   |                                                                 | `What is this document about?`                                                                                                                                              |
| `dialogue_history.prompt`     | 以前にクライアントによって提供され、大規模言語モデル (LLM) が回答したプロンプト。                                                                                                                                                                                                                                                                                                                                                         | `Make my email about public APIs sound more professional`       |                                                                                                                                                                             |
| `dialogue_history.answer`     | 以前にLLMから提供された回答。                                                                                                                                                                                                                                                                                                                                                                                     | `Here is a draft of your professional email about public APIs.` |                                                                                                                                                                             |
| `dialogue_history.created_at` | プロンプトに対する前回の回答が作成された時点のISO日付形式のタイムスタンプ。                                                                                                                                                                                                                                                                                                                                                              | `2012-12-12T10:53:43-08:00`                                     |                                                                                                                                                                             |
| `include_citations`           | 回答で引用情報を返すかどうかを指定します。                                                                                                                                                                                                                                                                                                                                                                                | `true`, `false`                                                 | `true`                                                                                                                                                                      |
| **`items.id`**                | 入力データとして指定するBoxファイルID。                                                                                                                                                                                                                                                                                                                                                                               |                                                                 | `112233445566`                                                                                                                                                              |
| **`items.type`**              | 指定した入力データのタイプ。現在は、1つのファイルまたは複数のファイルを指定できます。                                                                                                                                                                                                                                                                                                                                                          | `file`                                                          | `file`                                                                                                                                                                      |
| `items.content`               | The content of the item. Usually it is the text representation.                                                                                                                                                                                                                                                                                                                                      |                                                                 | `An application programming interface (API) is a way for two or more computer programs or components to communicate with each other. It is a type of software interface...` |
| `ai_agent`                    | デフォルトのエージェント構成を上書きするために使用されるAIエージェント。このパラメータを使用すると、短いテキストや長いテキストを表す[`model`][model-param]パラメータを使用してデフォルトのLLMをカスタムのLLMに置き換えたり、よりカスタマイズされたユーザーエクスペリエンスを実現できるようにベースとなる[`prompt`][prompt-param]を微調整したり、`temperature`などのLLMパラメータを変更して結果の創造性を調整したりすることができます。`ai_agent`パラメータを使用する前に、[`GET 2.0/ai_agent_default`][agent]リクエストを使用してデフォルト構成を取得できます。具体的なユースケースについては、[AIモデルの上書きに関するチュートリアル][overrides]を参照してください。 |                                                                 |                                                                                                                                                                             |

## ユースケース

## Ask questions about an item

This example shows how to ask a question about one or more items using the `POST ask/ai` API. When using this endpoint, remember to specify the `mode` parameter depending on the number of items you want to supply.

```sh
curl -i -L POST "https://api.box.com/2.0/ai/ask" \
     -H "content-type: application/json" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
    "mode": "single_item_qa",
    "items": [
        {
            "id": "12345678",
            "type": "file"
        }
    ],
    "prompt": "List the guidelines on creating questions in Box AI for Documents"
}'

```

The response will be as follows:

```sh
{
    "answer": "The guidelines for working with questions in Box AI for Documents are as follows:\n\n1. Box AI pulls information only from the document loaded in preview.\n2. If questions fall outside the scope of the document, Box AI will inform you that it cannot answer.\n3. Be specific when asking questions; use parameters like numbered lists, brevity, tables, and central themes or key points.\n4. Aim to stay within the scope of the document.\n5. Focus on text-based responses only.",
    "created_at": "2024-11-04T02:30:09.557-08:00",
    "completion_reason": "done"
}

```

## Ask questions with `content` parameter

If you use the `content` parameter as the source of input for Box AI, it will use it as the primary source.

```sh
curl -i -L POST "https://api.box.com/2.0/ai/ask" \
     -H "content-type: application/json" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
    "mode": "single_item_qa",
    "items": [
        {
            "id": "12345678",
            "type": "file",
            "content": "This is a document about Box AI For documents. It consists of the functionality summary and guidelines on how to work with Box AI. Additionally, it provides a set of best practices for creating questions."
        }
    ],
    "prompt": "List the guidelines on creating questions in Box AI for Documents"
}'

```

The response to this request is based on the `content` parameter instead of the file's content:

```sh
{
    "answer": "The document does not provide specific guidelines on working with questions in Box AI for Documents. It only mentions that it includes a set of best practices for creating questions, but the details of those guidelines are not included in the text provided. If you have more information or another document, I can help further!",
    "created_at": "2024-11-04T02:31:51.125-08:00",
    "completion_reason": "done"
}

```

## Ask questions with `citations` parameter

Setting the `citations` parameter to `true` causes the response to include excerpts from source file or files Box AI used to compile the answer.

```sh
curl -i -L POST "https://api.box.com/2.0/ai/ask" \
     -H "content-type: application/json" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
    "mode": "multiple_item_qa",
    "include_citations": true,
    "items": [
        {
            "id": "12345678",
            "type": "file"
        }
    ],
    "prompt": "List the guidelines on working with responses in Box AI for Documents"
}'

```

The resulting answer includes the source file and direct content citations.

```sh
{
    "answer": "The guidelines for working with questions in Box AI for Documents are as follows:\n\n1. Box AI pulls information only from the document loaded in preview, and cannot answer questions outside its scope.\n2. Be specific when asking questions; use parameters like numbered lists, brevity, tables, and central themes or key points.\n3. Examples of better phrasing include asking for a numbered list of key points instead of just \"list key points,\" and requesting a succinct outline of important points rather than a general inquiry about the document's purpose.\n4. Stay within the scope of the document and focus on text-based responses only.",
    "created_at": "2024-11-04T02:35:00.578-08:00",
    "completion_reason": "done",
    "citations": [
        {
            "type": "file",
            "id": "12345678",
            "name": "Box AI for Documents.docx",
            "content": "Guidelines for Box AI questions\nBox AI pulls information only from the document you loaded in preview."
        },
        {
            "type": "file",
            "id": "12345678",
            "name": "Box AI for Documents.docx",
            "content": "If you ask any questions outside of the scope of the document, Box AI informs you that it cannot answer the question with the information provided."
        },
        {
            "type": "file",
            "id": "12345678",
            "name": "Box AI for Documents.docx",
            "content": "As you ask Box AI to analyze your document, consider these suggestions:\n· Be as specific as possible."
        },
        {
            "type": "file",
            "id": "12345678",
            "name": "Box AI for Documents.docx",
            "content": "Box AI for Documents\n\nWhen viewing a document in Box, you can ask Box AI to summarize document content, search key points, and write outline drafts based on your document files."
        }
    ]
}

```

[prereq]: g://box-ai/ai-tutorials/prerequisites

[agent]: e://get_ai_agent_default

[model-param]: r://ai_agent_ask#param_basic_text_model

[prompt-param]: e://ai_agent_ask#param_basic_text_prompt_template

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
