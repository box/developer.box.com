---
rank: 6
related_endpoints:
  - post_ai_text_gen
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/text-gen
type: guide
total_steps: 7
sibling_id: box-ai
parent_id: box-ai
next_page_id: ''
previous_page_id: box-ai/ask-questions
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/text-gen.md
---
# Text generation

<Message type="notice>

This document is rendered for test purposes and contains content that
will change.

</Message>

The `POST /2.0/ai/text_gen` endpoint sends you prompt
and your content or the text representation of your file
to Box AI and return the value with an HTTP 200 response
and a JSON object documented below. You must always provide
a file ID, as this is how the Box AI API
validates that you and your instance
of Box have access to Box AI. You can optionally
provide a string in the content object, however
the content string will take precedence over
the content of the file represented by the id.
You can use `dialogue_history` parameter to keep track
of previous text generation requests in a given session.