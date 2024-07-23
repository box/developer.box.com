---
rank: 8
related_guides:
  - box-ai/ask-questions
  - box-ai/generate-text
  - box-ai/get-agent-default-config
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/supported-models
type: guide
total_steps: 5
sibling_id: box-ai
parent_id: box-ai
next_page_id: ''
previous_page_id: box-ai/get-agent-default-config
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/supported-models.md
---
# Supported AI models

The table list the supported AI models you can use to:

* get the [default AI agent configuration][agent],
* override the AI agent configuration used in [`POST 2.0/ai/ask`][ask] and [`POST 2.0/ai/text_gen`][text-gen] endpoints.

<Message type='notice'>

The list is subject to changes depending on the model availability.
**Preview** means you can use the model, but its full availability
is not guaranteed.

</Message>

|Provider | Family | Model | Availability|
|---------------| -------|-------| ------------|
|OpenAI         | GPT| `gpt-3.5-turbo`          | available|
|Microsoft Azure| GPT| `gpt-3.5-turbo`          | available|
|GCP Vertex| Gecko   | `textembedding-gecko`    | available|
|GCP Vertex |Gecko| `textembedding-gecko@002`| available|
|GCP Vertex|Gecko| `textembedding-gecko@003`| available|
|GCP Vertex| Gemini  | `gemini 1.0 pro` | preview|
|GCP Vertex|Gemini|`gemini 1.5 flash`| preview|
|GCP Vertex|PaLM| `text-unicorn`| available|
|GCP Vertex |PaLM|`text-bison`| available|

[ask]: e://post_ai_ask
[text-gen]: e://post_ai_text_gen
[agent]: e://get_ai_agent_default