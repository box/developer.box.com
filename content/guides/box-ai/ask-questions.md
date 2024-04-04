---
rank: 3
related_endpoints:
  - post_ai_ask
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