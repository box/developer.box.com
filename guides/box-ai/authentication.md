---
rank: 2
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/authentication
type: guide
total_steps: 3
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/ask-questions
previous_page_id: box-ai
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/authentication.md
---
# Authentication

<Message type="warning">

This document is rendered for test purposes and contains content that
will change.

</Message>

The easiest way to handle authentication is to
use a developer token.

<Message type="notice">

Developer token is only valid for one hour.

</Message>

From your scope-enabled app, Box Platform will
automatically include the appropriate scope,
allowing you to begin testing and coding immediately.
You can also use OAuth2.
In this case, you must specifically request
the `AI.readwrite` scope.