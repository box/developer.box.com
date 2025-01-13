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
  - box-ai/ai-tutorials/default-agent-overrides
---

# Override AI model configuration

<Message type="notice">
Endpoints related to metadata extraction are currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.
</Message>

The `ai_agent` configuration allows you to override the default AI model configuration. It is available for the following endpoints:

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

A complete configuration for `ai/ask` is as follows:

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
    "model": "azure__openai__gpt_4o_mini",
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
    "model": "azure__openai__gpt_4o_mini",
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
    "model": "azure__openai__gpt_4o_mini",
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
    "model": "azure__openai__gpt_4o_mini",
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

The `llm_endpoint_params` configuration options differ depending on the overall AI model being [Google][google-params], [OpenAI][openai-params] or [AWS][aws-params] based.

For example, both `llm_endpoint_params` objects accept a `temperature` parameter, but the outcome differs depending on the model.

For Google and AWS models, the [`temperature`][google-temp] is used for sampling during response generation, which occurs when `top-P` and `top-K` are applied. Temperature controls the degree of randomness in the token selection.

For OpenAI models, [`temperature`][openai-temp] is the sampling temperature with values between 0 and 2. Higher values like 0.8 make the output more random, while lower values like 0.2 make it more focused and deterministic. When introducing your own configuration, use `temperature` or or `top_p` but not both.

### System message

The `system_message` parameter's aim is to help the LLM understand its role and what it’s supposed to do. 
For example, if your solution is processing travel itineraries, you can add a system message saying:

```sh
You are a travel agent aid. You are going to help support staff process large amounts of schedules, tickets, etc.
```

This message is separate from the content you send in, but it can improve the results.

### Number of tokens for completion

The `num_tokens_for_completion` parameter represents the number of [tokens][openai-tokens] Box AI can return. This number can vary based on the model used.

[ask]: e://post_ai_ask#param_ai_agent
[text-gen]: e://post_ai_text_gen#param_ai_agent
[extract]: e://post_ai_extract#param_ai_agent
[extract-structured]: e://post_ai_extract_structured#param_ai_agent
[google-params]: r://ai-llm-endpoint-params-google
[openai-params]: r://ai-llm-endpoint-params-openai
[openai-tokens]: https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them
[agent]: e://get_ai_agent_default
[google-temp]: https://ai.google.dev/gemini-api/docs/models/generative-models#model-parameters
[openai-temp]: https://community.openai.com/t/temperature-top-p-and-top-k-for-chatbot-responses/295542
[aws-params]: r://ai-llm-endpoint-params-aws