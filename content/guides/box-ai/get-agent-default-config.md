---
rank: 7
related_endpoints:
  - get_ai_agent_default
  - post_ai_text_gen
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/ask-questions
  - box-ai/generate-text
---

# Get default AI agent configuration

<Message type="notice">
Box AI API is currently in beta which means the
available capabilities may change.
Box AI API is available to all Enterprise Plus customers.

</Message>

The `GET /2.0/ai_agent_default` endpoint allows you to fetch the default configuration for AI services. 
Once you get the configuration details, you can override them using the `ai_agent` parameter available in the [`POST /2.0/ai/ask`][ask] and [`POST /2.0/ai/text_gen`][text-gen] requests.

Override examples include:

* Replacing the default LLM with a custom one based on your organization's needs.
* Tweaking the base prompt to allow a more customized user experience.
* Changing a parameter, such as `temperature`, to make the results more or less creative.

## Send a request

To send a request, use the
`GET /2.0/ai_agent_default` endpoint.

Make sure you have generated the developer token
to authorize your app. See [prerequisites for using Box AI][prereq]
for details.

<Samples id='get_ai_agent_default' />

### Parameters

To make a call, you must pass the following parameters. Mandatory parameters are in **bold**.

| Parameter| Description| Example|
|--------|--------|-------|
|`language`| The language code the agent configuration is returned for. If the language is not supported, the default configuration is returned. | `ja-JP`| 
|**`mode`**|The mode used to filter the agent configuration. The value can be `ask` or `text_gen`. |`ask`|
|`model`|The model you want to get the configuration for. To make sure your chosen model is supported, see the [list of models][models].| `openai__gpt_3_5_turbo`|

[prereq]: g://box-ai/prerequisites
[ask]: e://post_ai_ask#param_ai_agent
[text-gen]: e://post_ai_text_gen#param_ai_agent
[models]: g://box-ai/supported-models