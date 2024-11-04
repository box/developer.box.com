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
---

# Override AI model configuration

<Message type="notice">
Endpoints related to metadata extraction are currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.
</Message>

## Before you start

Make sure you followed the steps listed in [prerequisites for using Box AI][prereq] to create a custom app and authenticate.
To get more context, read about [agent overrides][agent-overrides].

## Override prompt

This example shows how to use the `prompt_template` parameter to change the 
query result.
The first step is to ask Box AI to summarize a document about Box AI for Documents.
The `mode` parameter is set to `single_item_qa` because only one document is supplied.

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

You will get a response similar to the following:

```sh
{
    "answer": "Box AI for Documents is a tool that enhances document analysis by allowing users to summarize content, identify key points, and draft outlines directly from files in Box. It supports various file types, including text documents, spreadsheets, and presentation slides. Users can initiate interactions with Box AI through the web app, where they can select suggestions or type specific questions. Responses are generated in real time, and users have options to save or clear chat history. The document also provides guidelines for effective inquiries and troubleshooting tips for potential issues with using Box AI.",
    "created_at": "2024-10-08T00:29:07.283-07:00",
    "completion_reason": "done"
}
```

To further improve the result, you can use the `prompt_template` parameter to add some more instructions for Box AI. In this example, let's change the tone of the response.

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

The response would be slightly less formal:

```sh
{
    "answer": "Box AI for Documents is a tool that helps you analyze and gain insights from your documents in Box. You can use it to summarize content, identify key points, and draft outlines, making it easier to handle meeting notes, reports, and marketing materials. To get started, just open a file in the Box web app and click the Box AI button. It offers quick suggestions like summarizing the document or checking for next steps. Responses are generated in real time, and you can save them or clear chat history as needed. Just remember, Box AI only pulls info from the document you're viewing, so be specific with your questions!",
    "created_at": "2024-10-08T00:38:01.767-07:00",
    "completion_reason": "done"
}
```

## Override AI model (text generation)

This example shows you how changing the AI model in the `ai_agent` options can influence the way the text is generated.

First let's generate some text using the `POST ai/text_gen` endpoint. This endpoint is using the OpenAI 3.5 turbo model by default.

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

The response is as follows:

```sh
{
    "answer": "🌟 Exciting News! 🌟\n\nIntroducing Box AI for documents - your new best friend in creating smarter, more efficient content! 🤖💡\n\n🔹 Say goodbye to manual searching and organizing - Box AI does it all for you!\n🔹 Enjoy lightning-fast document analysis and categorization.\n🔹 Boost productivity with automated suggestions and smart recommendations.\n🔹 Collaborate seamlessly with real-time insights and intelligent tagging.\n\nExperience the future of document creation with Box AI - making work easier, faster, and more fun! 🚀💻 #BoxAI #SmartDocuments",
    "created_at": "2024-10-08T01:19:06.22-07:00",
    "completion_reason": "done"
}
```

Let's change the model using the `ai_agent` configuration:

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

After the model switch, the response is slightly different:

```sh
{
    "answer": "🚀 **Boost Your Productivity with Box AI for Documents!** 📄✨\n\nSay goodbye to tedious document creation and editing! With Box AI, you can streamline your workflow and focus on what truly matters. Here’s why you’ll love it:\n\n1. **Smart Suggestions** 🤖: Get real-time recommendations to enhance your content.\n2. **Automated Formatting** 📝: Ensure consistency across all your documents effortlessly.\n3. **Collaboration Made Easy** 👥: Work seamlessly with your team, no matter where they are.\n4. **Time-Saving Templates** ⏳: Use pre-built templates to speed up document creation.\n5. **Enhanced Accuracy** ✅: Reduce errors with intelligent proofreading.\n\nTransform the way you work with documents and experience a new level of efficiency with Box AI! 🌟",
    "created_at": "2024-10-08T01:28:36.777-07:00",
    "completion_reason": "done"
}
```

As you can see the responses differ to some extent. Thanks to the model switch, you can optimize your interaction with Box AI and choose the most suitable model for your needs.

## Override AI model (metadata extraction)

Switching models can also give us different results for metadata extraction.
Let's use a sample contract to extract the metadata. In this example, the model used is Google Gemini.

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

The response is a set of metadata:

```sh
{
    "answer": "{\"Buyer Legal Entity Name\": \"Acme Retail Corp.\", \"Supplier Legal Entity Name\": \"Acme Manufacturing Inc.\", \"Buyer Contact Person\": \"Jane Doe\", \"Supplier Contact Person\": \"Eva Smith\", \"Payment Term\": \"payment in full before pickup of goods\", \"Invoice Currency\": \"Euro\", \"Incoterm\": \"FCA Amsterdam\", \"Governing Law\": \"laws state jurisdiction in which supplier is located\", \"Effective Date\": \"March 27, 2024\", \"Buyer Signature Date\": \"March 28th, 2024\", \"Supplier Signature Date\": \"March 28th, 2024\"}",
    "created_at": "2024-10-08T01:53:14.993-07:00",
    "completion_reason": "done"
}
```

Let's change the model to the most recent OpenAI option:

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

Using this model results in a response listing more metadata entries:

```sh
{
    "answer": "{\"Effective Date\": \"March 27, 2024\", \"Supplier Legal Entity Name\": \"Acme Manufacturing Inc.\", \"Supplier Registered Office Address\": \"123 Main Street\", \"Supplier Contact Person(s)\": \"Eva Smith\", \"Buyer Legal Entity Name\": \"Acme Retail Corp.\", \"Buyer Registered Office Address\": \"456 Market Avenue\", \"Buyer Contact Person(s)\": \"Jane Doe\", \"Incoterm\": \"FCA Amsterdam\", \"Payment Term\": \"payment in full before pickup of goods\", \"Invoice Currency\": \"Euro\", \"Buyer Printed Name\": \"Jane Doe\", \"Buyer Date\": \"March 28th, 2024\", \"Buyer Title / Position\": \"CEO\", \"Seller Printed Name\": \"Eve Smith\", \"Seller Date\": \"March 28th, 2024\", \"Seller Title / Position\": \"Sales Manager\"}",
    "created_at": "2024-10-08T01:54:28.099-07:00",
    "completion_reason": "done"
}
```

[agent-overrides]: g://box-ai/ai-agents/ai-agent-overrides
[prereq]: g://box-ai/ai-tutorials/prerequisites
