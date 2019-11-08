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
cId: comments
scId: null
id: comments/create-comment
isIndex: false
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
