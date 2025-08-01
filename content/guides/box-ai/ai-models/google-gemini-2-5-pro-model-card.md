---
rank: 14
related_guides:
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/generate-text
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
  - box-ai/ai-agents/get-agent-default-config
---

# Google Gemini 2.5 Pro

**Google Gemini 2.5 Pro** is a multimodal model capable of solving complex problems. It can comprehend vast datasets and challenging problems from different information sources, including text, audio, images, video, and even entire code repositories.

## Model details

| Item  | Value | Description |
|-----------|----------|----------|
| Model name | **Google Gemini 2.5 Pro** | The name of the model. | 
| Model category | **Premium** | The category of the model: Standard or Premium. |
| API model name | `google__gemini_2_5_pro` | The name of the model that is used in the [Box AI API for model overrides][overrides]. The user must provide this exact name for the API to work. |
| Hosting layer | **Google** | The trusted organization that securely hosts LLM. |
| Model provider| **Google** | The organization that provides this model. |
| Release date | **June 17th 2025** | The release date for the model.|
| Knowledge cutoff date | **January 2025** | The date after which the model does not get any information updates. |
| Input context window | **1m tokens** | The number of tokens supported by the input context window.| 
| Maximum output tokens | **65k tokens** | The number of tokens that can be generated by the model in a single request.| 
| Empirical throughput | **Not specified** | The number of tokens the model can generate per second.|
| Open source | **No** | Specifies if the model's code is available for public use.|

## Additional documentation

For additional information, see [official Google Gemini 2.5 Pro documentation][vertex-ai-gemini-2-5-pro].

[vertex-ai-gemini-2-5-pro]: https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-pro
[overrides]: g://box-ai/ai-agents/ai-agent-overrides