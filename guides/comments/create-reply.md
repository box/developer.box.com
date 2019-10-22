---
rank: 2
related_endpoints:
  - post_comments
related_guides:
  - comments/comment
required_guides: []
related_resources:
  - comment
alias_paths: []
cId: comments
scId: null
id: comments/create-reply
isIndex: false
---

# Create Reply

To create a reply to a previous comment, call the [`POST
/comments`][post_comments] API with the message of the new comment, as well as
the ID of the previous comment to leave the reply on.

<Samples id='post_comments' variant='as_reply' >

</Samples>

A reply's message can also mentions users using the `@` sign. To do so, add
the string `@[userid:name]` anywhere within the message. The `user_id` is the
target user's ID, where the `name` can be any custom phrase. In the Box UI this
name will link to the user's profile.

Then, pass this string as the `tagged_message` instead of the `message`.

<Samples id='post_comments' variant='as_reply_tag_user' >

</Samples>

[post_comments]: e://post_comments
