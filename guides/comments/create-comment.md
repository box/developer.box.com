---
rank: 1
related_endpoints:
  - post_comments
related_guides:
  - comments/create-reply
required_guides: []
related_resources:
  - comment
alias_paths: []
category_id: comments
subcategory_id: null
is_index: false
id: comments/create-comment
type: guide
total_steps: 2
sibling_id: comments
parent_id: comments
next_page_id: comments/create-reply
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/comments/create-comment.md
---
# Create Comment

To create a comment, call the [`POST /comments`][post_comments] API with the
message of the comment, as well as the ID of the file to leave the comment on.

<Samples id='post_comments' >

</Samples>

A comment's message can also mentions users using the `@` sign. To do so, add
the string `@[userid:name]` anywhere within the message. The `user_id` is the
target user's ID, where the `name` can be any custom phrase. In the Box UI this
name will link to the user's profile.

Then, pass this string as the `tagged_message` instead of the `message`.

<Samples id='post_comments' variant='tag_user' >

</Samples>

[post_comments]: e://post_comments