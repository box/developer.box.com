---
rank: 3
related_endpoints:
  - get_ai_agent_default
  - post_ai_text_gen
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/ask-questions
  - box-ai/generate-text
---

# AI agent configuration parameters

The `ai_agent` parameter allows you to define specific options for your agent.

## Parameters

You can pass the `agent_ai` parameter when performing the following API calls:

* [`POST ai/ask`][ask]
* [`POST ai/text_gen`][text-gen]
* [`POST ai/extract`][extract]
* [`POST ai/extract_structured`][extract-structured]

For example, the configuration for `ai/ask` is as follows:

```bash
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

The set of parameters is similar for `ask`, `text_gen`, `extract`, `extract_structured`, however there are certain differences:

  * The agent configuration for the `ask` endpoint includes `basic_text`,   `basic_text_multi`, `long_text` and `long_text_multi` parameters. This is because of the `mode` parameter that allows you to specify if the request is for a single item or multiple items. In this context, `multi` means that multiple documents have been sent in using the `multiple_item_qa` ask mode.

  * The agent configuration  for `text_gen` includes the `basic_gen` parameter
    that is used to generate text.

### LLM endpoint params

The `llm_endpoint_params` configuration options differ depending on the overall AI model being [Google][google-params] or [OpenAI][openai-params] based.

For example, both `llm_endpoint_params` objects accept a `temperature` field, but the outcome differs depending on the model.

For Google models, the temperature is used for sampling during response generation, which occurs when `top-P` and `top-K` are applied. Temperature controls the degree of randomness in the token selection.

For OpenAI models, temperature is the sampling temperature with values between 0 and 2. Higher values like 0.8 make the output more random, while lower values like 0.2 make it more focused and deterministic. When introducing your own configuration, use `temperature` or or `top_p` but not both.

### System message

The `system_message` parameter's aim is to help the LLM understand its role and what it’s supposed to do. 
For example, if your solution is processing travel itineraries, you can add a system message saying _You are a travel agent aid. You are going to help support staff process large amounts of schedules, tickets, etc._ This message is separate from the content you send in, but it can improve the results.

### Number of tokens for completion

The `num_tokens_for_completion` parameter represents the number of [tokens][openai-tokens] Box AI can return. This number can vary based on the model used.

[ask]: e://post_ai_ask#param_ai_agent
[text-gen]: e://post_ai_text_gen#param_ai_agent
[extract]: e://post_ai_extract#param_ai_agent
[extract-structured]: e://post_ai_extract_structured#param_ai_agent
[google-params]: r://ai-llm-endpoint-params-google
[openai-params]: r://ai-llm-endpoint-params-openai
[openai-tokens]: https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them