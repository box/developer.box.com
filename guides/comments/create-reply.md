---
rank: 2
related_endpoints:
  - post_comments
related_guides:
  - comments/create-comment
required_guides: []
related_resources:
  - comment
alias_paths: []
category_id: comments
subcategory_id: null
is_index: false
id: comments/create-reply
type: guide
total_steps: 2
sibling_id: comments
parent_id: comments
next_page_id: comments
previous_page_id: comments/create-comment
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/comments/create-reply.md
---
# 返信の作成

以前のコメントへの返信を作成するには、新しいコメントのメッセージと、返信を残す以前のコメントのIDを指定して[`POST
/comments`][post_comments] APIを呼び出します。

<Samples id="post_comments" variant="as_reply">

</Samples>

返信のメッセージでは、`@`記号を使用してユーザーをメンションすることもできます。そのためには、メッセージ内の任意の場所に`@[userid:name]`という文字列を追加します。`user_id`はターゲットユーザーのIDで、`name`には任意のカスタムフレーズを使用できます。Box UIでは、この名前がユーザーのプロフィールにリンクされます。

次に、この文字列を`message`ではなく`tagged_message`として渡します。

<Samples id="post_comments" variant="as_reply_tag_user">

</Samples>

[post_comments]: e://post_comments
