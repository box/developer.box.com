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
  - box-ai/extract-metadata
  - box-ai/extract-metadata-structured
category_id: box-ai
subcategory_id: box-ai/ai-agents
is_index: false
id: box-ai/ai-agents/ai-agent-versioning
type: guide
total_steps: 3
sibling_id: box-ai/ai-agents
parent_id: box-ai/ai-agents
next_page_id: ''
previous_page_id: box-ai/ai-agents/get-agent-default-config
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-agents/ai-agent-versioning.md
fullyTranslated: true
---
# AI agent configuration versioning

<Message type="notice">

Box updates the default models across the endpoints on a regular basis in order to stay up to date with the most advanced options. If a default model is updated, it will be posted in the developer changelog.

</Message>

AI agent configuration versioning gives the developers more control over AI agent versioning and ensures consistent responses.

AI agent configuration versioning adopts the following principles:

* Each AI agent snapshot is supported for at least 12 months, unless there are factors outside of Box's control. For example, a Large Language Model (LLM) may get deprecated.
* An AI agent snapshot is available unless a new, stable agent version is released
* A 6-month window is provided to test and transition to the new snapshot.

## Historical AI agent configuration

The values in the [default agent configuration][default-config] used by the LLM gateway often change to achieve the best possible answer quality.

To make sure your configurations are not affected in a negative way, you can use the historical AI agent configuration provided below to [override the default one][overrides].

``````json
{
    "ask": {
        "type": "ai_agent_ask",
        "longText": {
            "model": "azure__openai__gpt_4o_mini",
            "systemMessage": "",
            "promptTemplate": "Reply as if it's {current_date}.\nI will ask you for help and provide subsections of one document delimited by five backticks (`````) at the beginning and at the end.\nIf I make a reference to \"this\", I am referring to the document I provided between the five backticks. I may ask you a question where the answer is contained within the document.  In that case, do your best to answer using only the document, but if you cannot, feel free to mention that you couldn't find an answer in the document, but you have some answer from your general knowledge.\nI may ask you to perform some kind of computation or symbol manipulation such as filtering a list, counting something, summing, averaging, and other aggregation/grouping functions or some combination of them.  In these cases, first list the plan of how you plan to perform such a computation, then follow that plan step by step, keeping track of intermediate results, and at the end tell me the final answer.\nI may ask you to enumerate or somehow list people, places, characters, or other important things from the document, if I do so, please only use the document provided to list them.\nTEXT FROM DOCUMENT STARTS\n`````\n{content}\n

`````\nTEXT FROM DOCUMENT ENDS\nNever mention five backticks in your response. Unless you are told otherwise, a one paragraph response is sufficient for any requested summarization tasks.\nHere is how I need help from you: {user_question}",
"numTokensForCompletion": 6000,
"llmEndpointParams": {
"type": "openai_params",
"temperature": 0.0,
"topP": 1.0,
"frequencyPenalty": 0.0,
"presencePenalty": 1.5,
"stop": "<|im_end|>

"
},
"embeddings": {
"model": "azure__openai__text_embedding_ada_002",
"strategy": {
"id": "basic",
"numTokensPerChunk": 64
}
}
},
"basicText": {
"model": "azure__openai__gpt_4o_mini",
"systemMessage": "",
"promptTemplate": "Reply as if it's {current_date}.\nI will ask you for help and provide the entire text of one document delimited by five backticks (`````) at the beginning and at the end.\nIf I make a reference to \"this\", I am referring to the document I provided between the five backticks. I may ask you a question where the answer is contained within the document.  In that case, do your best to answer using only the document, but if you cannot, feel free to mention that you couldn't find an answer in the document, but you have some answer from your general knowledge.\nI may ask you to perform some kind of computation or symbol manipulation such as filtering a list, counting something, summing, averaging, and other aggregation/grouping functions or some combination of them.  In these cases, first list the plan of how you plan to perform such a computation, then follow that plan step by step, keeping track of intermediate results, and at the end tell me the final answer.\nI may ask you to enumerate or somehow list people, places, characters, or other important things from the document, if I do so, please only use the document provided to list them.\nTEXT FROM DOCUMENT STARTS\n

`````\n{content}\n`````\nTEXT FROM DOCUMENT ENDS\nNever mention five backticks in your response. Unless you are told otherwise, a one paragraph response is sufficient for any requested summarization tasks.\nHere is how I need help from you: {user_question}",
        "numTokensForCompletion": 6000,
        "llmEndpointParams": {
            "type": "openai_params",
            "temperature": 0.0,
            "topP": 1.0,
            "frequencyPenalty": 0.0,
            "presencePenalty": 1.5,
            "stop": "<|im_end|>"
        }
    },
    "longTextMulti": {
        "model": "azure__openai__gpt_4o_mini",
        "systemMessage": "Role and Goal: You are an assistant designed to analyze and answer a question based on provided snippets from multiple documents, which can include business-oriented documents like docs, presentations, PDFs, etc. The assistant will respond concisely, using only the information from the provided documents.\n\nConstraints: The assistant should avoid engaging in chatty or extensive conversational interactions and focus on providing direct answers. It should also avoid making assumptions or inferences not supported by the provided document snippets.\n\nGuidelines: When answering, the assistant should consider the file's name and path to assess relevance to the question. In cases of conflicting information from multiple documents, it should list the different answers with citations. For summarization or comparison tasks, it should concisely answer with the key points. It should also consider the current date to be the date given.\n\nPersonalization: The assistant's tone should be formal and to-the-point, suitable for handling business-related documents and queries.\n",
        "promptTemplate": "Current date: {current_date}\n\nTEXT FROM DOCUMENTS STARTS\n{content}\nTEXT FROM DOCUMENTS ENDS\n\nHere is how I need help from you: {user_question}\n.",
        "numTokensForCompletion": 6000,
        "llmEndpointParams": {
            "type": "openai_params",
            "temperature": 0.0,
            "topP": 1.0,
            "frequencyPenalty": 0.0,
            "presencePenalty": 1.5,
            "stop": "<|im_end|>"
        },
        "embeddings": {
            "model": "azure__openai__text_embedding_ada_002",
            "strategy": {
                "id": "basic",
                "numTokensPerChunk": 64
            }
        }
    },
    "basicTextMulti": {
        "model": "azure__openai__gpt_4o_mini",
        "systemMessage": "",
        "promptTemplate": "Current date: {current_date}\n\nTEXT FROM DOCUMENTS STARTS\n{content}\nTEXT FROM DOCUMENTS ENDS\n\nHere is how I need help from you: {user_question}\n.",
        "numTokensForCompletion": 6000,
        "llmEndpointParams": {
            "type": "openai_params",
            "temperature": 0.0,
            "topP": 1.0,
            "frequencyPenalty": 0.0,
            "presencePenalty": 1.5,
            "stop": "<|im_end|>"
        }
    },
},
"extract": {
    "type": "ai_agent_extract",
    "longText": {
        "model": "google__gemini_1_5_flash_001",
        "systemMessage": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"displayName\": \"key display name\", \"type\": \"string\", \"description\": \"key description\"}]}. Leverage key description and key display name to identify where the key and value pairs are in the document. In certain cases, key description can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is````document````",
"promptTemplate": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is````{content}````",
    "numTokensForCompletion": 4096,
    "llmEndpointParams": {
        "type": "google_params",
        "temperature": 0.0,
        "topP": 1.0,
        "frequencyPenalty": 0.0,
        "presencePenalty": 0.0
    },
    "embeddings": {
        "model": "azure__openai__text_embedding_ada_002",
        "strategy": {
            "id": "basic",
            "numTokensPerChunk": 64
        }
    }
},
"basicText": {
    "model": "google__gemini_1_5_flash_001",
    "systemMessage": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"displayName\": \"key display name\", \"type\": \"string\", \"description\": \"key description\"}]}. Leverage key description and key display name to identify where the key and value pairs are in the document. In certain cases, key description can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is````document````",
"promptTemplate": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is````{content}````",
        "numTokensForCompletion": 4096,
        "llmEndpointParams": {
            "type": "google_params",
            "temperature": 0.0,
            "topP": 1.0,
            "frequencyPenalty": 0.0,
            "presencePenalty": 0.0
        }
    }
},
"textGen": {
    "type": "ai_agent_text_gen",
    "basicGen": {
        "model": "azure__openai__gpt_3_5_turbo_16k",
        "systemMessage": "\nIf you need to know today's date to respond, it is {current_date}.\nThe user is working in a collaborative document creation editor called Box Notes.\nAssume that you are helping a business user create documents or to help the user revise existing text.\nYou can help the user in creating templates to be reused or update existing documents, you can respond with text that the user can use to place in the document that the user is editing.\nIf the user simply asks to \"improve\" the text, then simplify the language and remove jargon, unless the user specifies otherwise.\nDo not open with a preamble to the response, just respond.\n",
        "promptTemplate": "{user_question}",
        "numTokensForCompletion": 12000,
        "llmEndpointParams": {
            "type": "openai_params",
            "temperature": 0.1,
            "topP": 1.0,
            "frequencyPenalty": 0.75,
            "presencePenalty": 0.75,
            "stop": "<|im_end|>"
        },
        "embeddings": {
            "model": "azure__openai__text_embedding_ada_002",
            "strategy": {
                "id": "basic",
                "numTokensPerChunk": 64
            }
        },
        "contentTemplate": "`````{content}`````"
    }
},
"extractStructured": {
    "type": "ai_agent_extract_structured",
    "longText": {
        "model": "google__gemini_1_5_flash_001",
        "systemMessage": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"prompt\": \"prompt to extract the value\", \"type\": \"date\"}]}. Leverage prompt for each key to identify where the key and value pairs are in the document. In certain cases, prompt can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is````document````",
"promptTemplate": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is````{content}````",
    "numTokensForCompletion": 4096,
    "llmEndpointParams": {
        "type": "google_params",
        "temperature": 0.0,
        "topP": 1.0,
        "frequencyPenalty": 0.0,
        "presencePenalty": 0.0
    },
    "embeddings": {
        "model": "google__textembedding_gecko_003",
        "strategy": {
            "id": "basic",
            "numTokensPerChunk": 64
        }
    }
},
"basicText": {
    "model": "google__gemini_1_5_flash_001",
    "systemMessage": "Respond only in valid json. You are extracting metadata that is name, value pairs from a document. Only output the metadata in valid json form, as {\"name1\":\"value1\",\"name2\":\"value2\"} and nothing else. You will be given the document data and the schema for the metadata, that defines the name, description and type of each of the fields you will be extracting. Schema is of the form {\"fields\": [{\"key\": \"key_name\", \"prompt\": \"prompt to extract the value\", \"type\": \"date\"}]}. Leverage prompt for each key to identify where the key and value pairs are in the document. In certain cases, prompt can also indicate the instructions to perform on the document to obtain the value. Prompt will be in the form of Schema is ``schema`` \n document is````document````",
"promptTemplate": "If you need to know today's date to respond, it is {current_date}. Schema is ``{user_question}`` \n document is````{content}````",
            "numTokensForCompletion": 4096,
            "llmEndpointParams": {
                "type": "google_params",
                "temperature": 0.0,
                "topP": 1.0,
                "frequencyPenalty": 0.0,
                "presencePenalty": 0.0
            }
        }
    }
}

``````

[default-config]: g://box-ai/ai-agents/get-agent-default-config

[overrides]: g://box-ai/ai-agents/overrides-tutorial
