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
# コメントの作成

コメントを作成するには、コメントのメッセージと、コメントを残すファイルのIDを指定して[`POST /comments`][post_comments] APIを呼び出します。

<Samples id="post_comments">

</Samples>

コメントのメッセージでは、`@`記号を使用してユーザーをメンションすることもできます。そのためには、メッセージ内の任意の場所に`@[userid:name]`という文字列を追加します。`user_id`はターゲットユーザーのIDで、`name`には任意のカスタムフレーズを使用できます。Box UIでは、この名前がユーザーのプロフィールにリンクされます。

次に、この文字列を`message`ではなく`tagged_message`として渡します。

<Samples id="post_comments" variant="tag_user">

</Samples>

[post_comments]: e://post_comments
