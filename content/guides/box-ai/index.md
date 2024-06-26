---
rank: 1
related_endpoints:
  - post_ai_text_gen
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/ask-questions
  - box-ai/generate-text
---

# Box AI

<Message type="notice">
Box AI API is a beta feature, which means the
available capabilities may change.
Box AI API is available to all **Enterprise Plus** customers.
</Message>

Box AI API allows you to use Box AI
functionality
in your custom applications. For example, you can
implement Box AI question and answer
functionality in your third party application,
or generate content right in
your product’s content editor.

## Box AI API capabilities

Box AI API provides a number of capabilities
designed to help you leverage Large Language Models (LLMs)
in your application workflows.

Currently, you can ask Box AI to answer
user questions, summarize the document content,
or generate text you can use in your documents.
You can also use [Box AI for UI Elements][boxaielement]
to embed Box AI functionality in your apps.

### Asking questions

You can use Box AI API to ask questions about
the content, for example, while working
on documents you store in Box.

Box AI can answer your questions about the
content or generate a summary based on the
file you supply.

![box ai in documents](./images/box-ai-in-doc.png)

Have a look at [Box AI for Documents][boxaidocs]
to see an example of how users can interact
with Box AI while
working with their documents.

### Generating text

You can use Box AI API to generate text
from scratch, from existing text within a Box Note, or
based on a given document in Preview.
For example, you can ask Box AI to create a template
or meeting agenda based on an article you are viewing in
Preview.

Another example is Box Notes that uses Box AI
to generate text
and refine the already existing note content.
For details, see [Box AI for Notes][boxainotes].

![box ai in notes](./images/box-ai-in-notes.png)

### Box AI for UI Elements

Box AI for UI Elements is available in Content Preview
allows asking questions about documents directly
within custom applications.
Check out how to use the [Box AI for UI Elements][boxaielement]
to embed Box AI functionality in your projects.

<!--alex ignore-->

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

<Message type="tip">

Switch the language to Japanese to get
better results for this language.

</Message>

## Box AI API in User Activity Report (UAR)

[User Activity Reports][uar] provide an overview of the
actions the users are taking in Box. Box Admins
use this report to view the actions made by their
users within a given time period, and this
includes interactions with Box AI. The report
contains the following action types Box admins can
select to get details for Box AI:

- `AI query`: User queried Box AI and received a response.
- `Failed AI query`: User queried Box AI but did not receive a response.

[boxainotes]: https://support.box.com/hc/en-us/articles/22198577315347-Box-AI-for-Notes
[boxaidocs]: https://support.box.com/hc/en-us/articles/22158484213267-Box-AI-for-Documents
[boxaielement]: g://embed/ui-elements/preview#box-ai-ui-element
[uar]: https://support.box.com/hc/en-us/articles/4415012490387-User-Activity-Report
