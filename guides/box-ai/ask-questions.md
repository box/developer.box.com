---
rank: 3
related_endpoints:
  - post_ai_ask
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/ask-questions
type: guide
total_steps: 3
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/text-gen
previous_page_id: box-ai/authentication
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ask-questions.md
---
# Ask questions

<Message type="warning">

This document is rendered for test purposes and contains content that
will change.

</Message>

The `POST /2.0/ai/ask` endpoint allows you to pass
a prompt and your content or the text representation
of your file to Box AI and return the
value with an HTTP 200 response and a JSON object.

You must always provide a file ID, as this
is how the Box AI API validates that you and
your instance of Box have access to Box AI.
You can optionally provide a string in
the content object, however the content string
will take precedence over the content of the file represented by the ID.