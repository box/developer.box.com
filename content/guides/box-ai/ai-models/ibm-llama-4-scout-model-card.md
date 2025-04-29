---
rank: 18
related_guides:
- box-ai/ai-tutorials/ask-questions
- box-ai/ai-tutorials/generate-text
- box-ai/ai-tutorials/extract-metadata
- box-ai/ai-tutorials/extract-metadata-structured
- box-ai/ai-agents/get-agent-default-config
---

# IBM Llama 3.2 Instruct

**IBM Llama 3.2 Instruct** is a, auto-regressive language model that uses a mixture-of-experts (MoE) architecture and incorporates early fusion for native multimodality.

## Model details

| Item | Value | Description |
|-----------|----------|----------|
|Model name|**IBM Llama 4 Scout**| The name of the model. |
|API model name|`ibm__llama_4_scout`| The name of the model that is used in the [Box AI API for model overrides][overrides]. The user must provide this exact name for the API to work. |
|Hosting layer| **IBM** | The trusted organization that securely hosts LLM. |
|Model provider|**Meta**| The organization that provides this model. |
|Release date|**April 5th 2025** | The release date for the model.|
| Knowledge cutoff date| **August 2024**| The date after which the model does not get any information updates. |
| Context length | **10m** | The maximum number of tokens that an LLM can process in a single input sequence. |
| Empirical throughput | N/A | The number of tokens the model can generate per second.|
| Open source | **Yes** | Specifies if the model's code is available for public use.|
| IP Infringement Protection | **No** | [Legal note][subprocessors]

## Additional documentation

For additional information, see [official IBM Llama 4 Scout documentation][IBM].

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
[subprocessors]: https://www.box.com/legal/subprocessors
[IBM]: https://www.ibm.com/docs/en/watsonx/w-and-w/2.1.0?topic=models-third-party-foundation