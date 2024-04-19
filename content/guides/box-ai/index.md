---
rank: 1
related_endpoints:
  - post_ai_text_gen
  - post_ai_ask
related_guides:
  - box-ai/ask-questions
  - box-ai/generate-text
---

# Box AI

<Message type="notice">
Box AI API is a beta feature which means the
available capabilities may change.
Box AI API is available to all Enterprise Plus customers.

</Message>

Box AI API allows you to use Box AI
functionality
in your custom applications. For example, you can 
implement Box AI question and answer
functionality in your third party integration
or generate content right in
your product’s content editor.

## Box AI capabilities

Box AI API provides a number of capabilities
designed to help you build Large
Language Models (LLMs) into
your applications workflows.
Currently, you can use Box AI to 
answer posted questions or generate text.

### Asking questions

You can interact with Box AI
to ask questions about provided content,
for example while working on documents stored in Box.
Box AI can answer your questions about the content
or generate a summary.

Read [Box AI for documents][boxaidocs] 
to see how users can interact with Box AI while
working on their files.

### Generating text

You can use Box AI to generate text
based on provided content.
For example, you can ask Box AI to create a template
or an email based on an article you supply.

Box Notes uses Box AI to generate text
and refine the already existing note content.
For details, see [Box AI for Notes][boxainotes].

## Supported languages

Box AI works in a number of languages including
English, Japanese, French, Spanish, and many more.
However, the underlying models are primarily
trained on English language documents. This means
that prompts in other languages may return answers
of lower quality than in English. Tests have shown
satisfactory results for summarizing, checking grammar
and spelling, and answering questions, but bear in mind
that the results may be different than in English.

[boxainotes]: https://support.box.com/hc/en-us/articles/22198577315347-Box-AI-for-Notes
[boxaidocs]: https://support.box.com/hc/en-us/articles/22158484213267-Box-AI-for-Documents