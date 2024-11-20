---
rank: 4
related_endpoints:
  - get_ai_agent_default
  - post_ai_text_gen
  - post_ai_ask
related_guides:
  - box-ai/ai-tutorials/prerequisites
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/ai-agent-overrides
alias_paths:
  - guides/box-ai/ai-agent-overrides
category_id: box-ai
subcategory_id: box-ai/ai-tutorials
is_index: false
id: box-ai/ai-tutorials/default-agent-overrides
type: guide
total_steps: 6
sibling_id: box-ai/ai-tutorials
parent_id: box-ai/ai-tutorials
next_page_id: box-ai/ai-tutorials/extract-metadata
previous_page_id: box-ai/ai-tutorials/generate-text
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-tutorials/default-agent-overrides.md
fullyTranslated: true
---
# AIモデルの構成の上書き

<Message type="notice">

メタデータ抽出に関連するエンドポイントは、現在、BoxのMain Beta Agreementに従い提供されるベータ機能のため、利用可能な機能が変更される可能性があります。Box AI APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

## 開始する前に

Make sure you followed the steps listed in [getting started with Box AI][prereq] to create a custom app and authenticate. To get more context, read about [agent overrides][agent-overrides].

## 上書き用のプロンプト

この例では、`prompt_template`パラメータを使用してクエリの結果を変更する方法を示します。最初の手順として、Box AIに対し、Box AI for Documentsに関するドキュメントの要約を依頼します。指定されているドキュメントは1つだけなので、`mode`パラメータは`single_item_qa`に設定されています。

```sh
curl -i -L POST "https://api.box.com/2.0/ai/ask" \
-H "content-type: application/json" \
-H "authorization: <Bearer TOKEN>" \
-d '{
     "mode": "single_item_qa",
     "prompt": "Summarize this article about Box AI for Documents",
     "items": [
          {
               "type": "file",
               "id": "123467890"
          }
       ]
     }'

```

次のようなレスポンスが返されます。

```sh
{
    "answer": "Box AI for Documents is a tool that enhances document analysis by allowing users to summarize content, identify key points, and draft outlines directly from files in Box. It supports various file types, including text documents, spreadsheets, and presentation slides. Users can initiate interactions with Box AI through the web app, where they can select suggestions or type specific questions. Responses are generated in real time, and users have options to save or clear chat history. The document also provides guidelines for effective inquiries and troubleshooting tips for potential issues with using Box AI.",
    "created_at": "2024-10-08T00:29:07.283-07:00",
    "completion_reason": "done"
}

```

結果をさらに改善するには、`prompt_template`パラメータを使用して、Box AIに対する指示をさらに追加できます。この例では、レスポンスの語調を変更しましょう。

```sh
{
    "prompt": "Summarize this article about Box AI for Documents",
    "mode": "single_item_qa",
    "items": [
        {
            "id": "123467890",
            "type": "file"
        }
    ],
    "ai_agent": {
        "type": "ai_agent_ask",
        "basic_text": {
            "prompt_template": "prompt_template": "{user_question} Write the summary in an informal way.{content}"
        },
      }
    }
}

```

レスポンスは若干砕けた表現になります。

```sh
{
    "answer": "Box AI for Documents is a tool that helps you analyze and gain insights from your documents in Box. You can use it to summarize content, identify key points, and draft outlines, making it easier to handle meeting notes, reports, and marketing materials. To get started, just open a file in the Box web app and click the Box AI button. It offers quick suggestions like summarizing the document or checking for next steps. Responses are generated in real time, and you can save them or clear chat history as needed. Just remember, Box AI only pulls info from the document you're viewing, so be specific with your questions!",
    "created_at": "2024-10-08T00:38:01.767-07:00",
    "completion_reason": "done"
}

```

## AIモデルの上書き (テキスト生成)

この例では、`ai_agent`のオプションでAIモデルを変更した場合にテキストの生成方法にどのような影響があるかを示します。

最初に、`POST ai/text_gen`エンドポイントを使用してテキストを生成しましょう。このエンドポイントは、デフォルトで、OpenAI 3.5 turboモデルを使用しています。

```sh
curl -i -L POST "https://api.box.com/2.0/ai/text_gen" \
     -H "content-type: application/json" \
     -H "authorization: Bearer TOKEN" \
     -d '{
          "prompt": "Write a short post about Box AI for documents.Make it highlight the benefits of the solution. You can add some emoticons.",
          "items": [
               {
                    "id": "123467890",
                    "type": "file"
               }
          ]
     }

```

レスポンスは次のようになります。

```sh
{
    "answer": "🌟 Exciting News! 🌟\n\nIntroducing Box AI for documents - your new best friend in creating smarter, more efficient content! 🤖💡\n\n🔹 Say goodbye to manual searching and organizing - Box AI does it all for you!\n🔹 Enjoy lightning-fast document analysis and categorization.\n🔹 Boost productivity with automated suggestions and smart recommendations.\n🔹 Collaborate seamlessly with real-time insights and intelligent tagging.\n\nExperience the future of document creation with Box AI - making work easier, faster, and more fun! 🚀💻 #BoxAI #SmartDocuments",
    "created_at": "2024-10-08T01:19:06.22-07:00",
    "completion_reason": "done"
}

```

`ai_agent`構成を使用してモデルを変更しましょう。

```sh
curl -i -L POST "https://api.box.com/2.0/ai/text_gen" \
     -H "content-type: application/json" \
     -H "authorization: Bearer TOKEN" \
     -d '{
          "prompt": "Write a short post about Box AI for documents.Make it highlight the benefits of the solution. You can add some emoticons.",
          "items": [
               {
                    "id": "123467890",
                    "type": "file"
               }
          ],
          "ai_agent": {
               "type": "ai_agent_text_gen",
               "basic_gen": {
                 "model": "openai__gpt_4o_2024_05_13"
          }
       }
     }

```

モデルを切り替えた後は、レスポンスが若干異なります。

```sh
{
    "answer": "🚀 **Boost Your Productivity with Box AI for Documents!** 📄✨\n\nSay goodbye to tedious document creation and editing! With Box AI, you can streamline your workflow and focus on what truly matters. Here’s why you’ll love it:\n\n1. **Smart Suggestions** 🤖: Get real-time recommendations to enhance your content.\n2. **Automated Formatting** 📝: Ensure consistency across all your documents effortlessly.\n3. **Collaboration Made Easy** 👥: Work seamlessly with your team, no matter where they are.\n4. **Time-Saving Templates** ⏳: Use pre-built templates to speed up document creation.\n5. **Enhanced Accuracy** ✅: Reduce errors with intelligent proofreading.\n\nTransform the way you work with documents and experience a new level of efficiency with Box AI! 🌟",
    "created_at": "2024-10-08T01:28:36.777-07:00",
    "completion_reason": "done"
}

```

ご覧のとおり、ある程度異なったレスポンスになったことがわかります。モデルの切り替えにより、Box AIに対する操作を最適化し、ニーズに最適なモデルを選択できます。

## AIモデルの上書き (メタデータ抽出)

モデルを切り替えると、メタデータ抽出の結果も異なる場合があります。契約書のサンプルを使用して、メタデータを抽出しましょう。この例で使用されているモデルはGoogle Geminiです。

```sh
curl -i -L 'https://api.box.com/2.0/ai/extract' \
     -H 'content-type: application/json' \
     -H 'authorization: Bearer TOKEN' \
     -d '{
        "prompt": "Extract any data that would be good metadata to save for future contracts.",
        "items": [
          {
            "type": "file",
            "id": "123456789"
          }
        ]
      }'

```

レスポンスは一連のメタデータになります。

```sh
{
    "answer": "{\"Buyer Legal Entity Name\": \"Acme Retail Corp.\", \"Supplier Legal Entity Name\": \"Acme Manufacturing Inc.\", \"Buyer Contact Person\": \"Jane Doe\", \"Supplier Contact Person\": \"Eva Smith\", \"Payment Term\": \"payment in full before pickup of goods\", \"Invoice Currency\": \"Euro\", \"Incoterm\": \"FCA Amsterdam\", \"Governing Law\": \"laws state jurisdiction in which supplier is located\", \"Effective Date\": \"March 27, 2024\", \"Buyer Signature Date\": \"March 28th, 2024\", \"Supplier Signature Date\": \"March 28th, 2024\"}",
    "created_at": "2024-10-08T01:53:14.993-07:00",
    "completion_reason": "done"
}

```

モデルを最新のOpenAIオプションに変更しましょう。

```sh
curl -i -L 'https://api.box.com/2.0/ai/extract' \
     -H 'content-type: application/json' \
     -H 'authorization: Bearer TOKEN' \
     -d '{
        "prompt": "Extract any data that would be good metadata to save for future contracts.",
        "items": [
          {
            "type": "file",
            "id": "123456789"
          }
        ],
          "ai_agent": {
            "type": "ai_agent_extract",
            "basic_text": {
                "model": "openai__gpt_4o_2024_05_13"
            }
         }
      }'

```

このモデルを使用すると、結果として、レスポンスにはさらに多くのメタデータエントリが列挙されます。

```sh
{
    "answer": "{\"Effective Date\": \"March 27, 2024\", \"Supplier Legal Entity Name\": \"Acme Manufacturing Inc.\", \"Supplier Registered Office Address\": \"123 Main Street\", \"Supplier Contact Person(s)\": \"Eva Smith\", \"Buyer Legal Entity Name\": \"Acme Retail Corp.\", \"Buyer Registered Office Address\": \"456 Market Avenue\", \"Buyer Contact Person(s)\": \"Jane Doe\", \"Incoterm\": \"FCA Amsterdam\", \"Payment Term\": \"payment in full before pickup of goods\", \"Invoice Currency\": \"Euro\", \"Buyer Printed Name\": \"Jane Doe\", \"Buyer Date\": \"March 28th, 2024\", \"Buyer Title / Position\": \"CEO\", \"Seller Printed Name\": \"Eve Smith\", \"Seller Date\": \"March 28th, 2024\", \"Seller Title / Position\": \"Sales Manager\"}",
    "created_at": "2024-10-08T01:54:28.099-07:00",
    "completion_reason": "done"
}

```

[agent-overrides]: g://box-ai/ai-agents/ai-agent-overrides

[prereq]: g://box-ai/ai-tutorials/prerequisites
