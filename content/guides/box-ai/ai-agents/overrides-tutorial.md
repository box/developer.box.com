---
rank: 4
related_endpoints:
  - get_ai_agent_default
  - post_ai_text_gen
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/ask-questions
  - box-ai/generate-text
---

# Override AI model configuration

<Message type="notice">
Box AI API is currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.

</Message>

The `agent_ai` configuration allows you to override the default AI model configuration. It is available for the following endpoints:

* [`POST ai/ask`][ask]
* [`POST ai/text_gen`][text-gen]
* [`POST ai/extract`][extract]
* [`POST ai/extract_structured`][extract-structured]

<Message type='tip'>

Use the [`GET ai_agent_default`][agent] endpoint to fetch the default configuration.

</Message>

The override examples include:

* Replacing the default AI model with a custom one based on your organization's needs.
* Tweaking the base `prompt` to allow a more customized user experience.
* Changing a parameter, such as `temperature`, to make the results more or less creative.

## Sample configuration

A sample configuration for `ai/ask` is as follows:

```sh
{
  "type": "ai_agent_ask",
  "basic_text": {
    "llm_endpoint_params": {
      "type": "openai_params",
      "frequency_penalty": 1.5,
      "presence_penalty": 1.5,
      "stop": "<|im_end|>",
      "temperature": 0,
      "top_p": 1
    },
    "model": "azure__openai__gpt_3_5_turbo_16k",
    "num_tokens_for_completion": 8400,
    "prompt_template": "It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.",
    "system_message": "You are a helpful travel assistant specialized in budget travel"
  },
  "basic_text_multi": {
    "llm_endpoint_params": {
      "type": "openai_params",
      "frequency_penalty": 1.5,
      "presence_penalty": 1.5,
      "stop": "<|im_end|>",
      "temperature": 0,
      "top_p": 1
    },
    "model": "azure__openai__gpt_3_5_turbo_16k",
    "num_tokens_for_completion": 8400,
    "prompt_template": "It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.",
    "system_message": "You are a helpful travel assistant specialized in budget travel"
  },
  "long_text": {
    "embeddings": {
      "model": "openai__text_embedding_ada_002",
      "strategy": {
        "id": "basic",
        "num_tokens_per_chunk": 64
      }
    },
    "llm_endpoint_params": {
      "type": "openai_params",
      "frequency_penalty": 1.5,
      "presence_penalty": 1.5,
      "stop": "<|im_end|>",
      "temperature": 0,
      "top_p": 1
    },
    "model": "azure__openai__gpt_3_5_turbo_16k",
    "num_tokens_for_completion": 8400,
    "prompt_template": "It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.",
    "system_message": "You are a helpful travel assistant specialized in budget travel"
  },
  "long_text_multi": {
    "embeddings": {
      "model": "openai__text_embedding_ada_002",
      "strategy": {
        "id": "basic",
        "num_tokens_per_chunk": 64
      }
    },
    "llm_endpoint_params": {
      "type": "openai_params",
      "frequency_penalty": 1.5,
      "presence_penalty": 1.5,
      "stop": "<|im_end|>",
      "temperature": 0,
      "top_p": 1
    },
    "model": "azure__openai__gpt_3_5_turbo_16k",
    "num_tokens_for_completion": 8400,
    "prompt_template": "It is `{current_date}`, consider these travel options `{content}` and answer the `{user_question}`.",
    "system_message": "You are a helpful travel assistant specialized in budget travel"
  }
}
```

### Differences in parameter sets

The set of parameters available for `ask`, `text_gen`, `extract`, `extract_structured` differs slightly, depending on the API call.

  * The agent configuration for the `ask` endpoint includes `basic_text`,   `basic_text_multi`, `long_text` and `long_text_multi` parameters. This is because of the `mode` parameter you use to specify if the request is for a single item or multiple items. If you selected `multiple_item_qa` as the `mode`, you can also use `multi` parameters for overrides.

  * The agent configuration for `text_gen` includes the `basic_gen` parameter
    that is used to generate text.

### LLM endpoint params

The `llm_endpoint_params` configuration options differ depending on the overall AI model being [Google][google-params] or [OpenAI][openai-params] based.

For example, both `llm_endpoint_params` objects accept a `temperature` parameter, but the outcome differs depending on the model.

For Google models, the temperature is used for sampling during response generation, which occurs when `top-P` and `top-K` are applied. Temperature controls the degree of randomness in the token selection.

For OpenAI models, temperature is the sampling temperature with values between 0 and 2. Higher values like 0.8 make the output more random, while lower values like 0.2 make it more focused and deterministic. When introducing your own configuration, use `temperature` or or `top_p` but not both.

### System message

The `system_message` parameter's aim is to help the LLM understand its role and what it’s supposed to do. 
For example, if your solution is processing travel itineraries, you can add a system message saying:

```sh
You are a travel agent aid. You are going to help support staff process large amounts of schedules, tickets, etc.
```

This message is separate from the content you send in, but it can improve the results.

### Number of tokens for completion

The `num_tokens_for_completion` parameter represents the number of [tokens][openai-tokens] Box AI can return. This number can vary based on the model used.

## Use case: Box AI Q&A 

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

## Use case: Generating text

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

## Use case: Metadata extraction

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

[ask]: e://post_ai_ask#param_ai_agent
[text-gen]: e://post_ai_text_gen#param_ai_agent
[extract]: e://post_ai_extract#param_ai_agent
[extract-structured]: e://post_ai_extract_structured#param_ai_agent
[google-params]: r://ai-llm-endpoint-params-google
[openai-params]: r://ai-llm-endpoint-params-openai
[openai-tokens]: https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them
[agent]: e://get_ai_agent_default