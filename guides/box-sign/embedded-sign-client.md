---
rank: 7
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - guides/box-sign/create-sign-request/#embedded-sign-client
category_id: box-sign
subcategory_id: null
is_index: false
id: box-sign/embedded-sign-client
type: guide
total_steps: 7
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign
previous_page_id: box-sign/sign-templates
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/embedded-sign-client.md
fullyTranslated: true
---
# Signクライアントの埋め込み機能

[Box Embed][embed]を使用すると、ウェブサイトにBox Signの機能を埋め込むことができます。これにより、ユーザーはウェブサイトを離れ、Box Signにアクセスしてドキュメントに署名し、プロセスを完了するために戻る必要がなくなります。代わりに、Box Embedを使用すると、外部のウェブサイト内で署名プロセスを完了できます。

Box Signのエクスペリエンスをウェブサイトに統合するには、HTMLの`iframe`タグ内のドキュメントへの署名を許可するために設計された`iframable_embed_url`パラメータが必要です。

`iframable_embed_url`のサンプルは次のようになります。

```sh
https://app.box.com/embed/sign/document/f14d7098-a331-494b-808b-79bc7f3992a3/f14d7098-a331-494b-808b-79bc7f3992a4

```

`iframeable_embed_url`を取得するには、[署名リクエストを作成][signrequest]エンドポイントを呼び出す際に各署名者の[`embed_url_external_user_id`][externalid]パラメータを渡します。返されるレスポンスには、その署名者の一意の`iframeable_embed_url`が含まれます。

Signの機能を埋め込み、ユーザーが使用できるようにするには、`iframe`タグ内でURLを使用します。

```sh
<iframe
  src="https://app.box.com/embed/sign/document/f14d7098-a331-494b-808b-79bc7f3992a3/f14d7098-a331-494b-808b-79bc7f3992a4"
  width="{pixels}"
  height="{pixels}"
  frameborder="0"
  allowfullscreen
  webkitallowfullscreen
  msallowfullscreen
></iframe>

```

<Message>

Box Embedの使用の詳細については、[こちらのガイド][embedguide]を参照してください。

</Message>

Box Embedでは、クリックジャッキングを防ぐために[クラウド (雲) ゲーム][cloudgame]ウィジェットを使用します。この場合、ユーザーはドキュメントに署名する際に、このウィジェットを操作し、クラウド (雲) を適切な位置にドラッグしてから、ドキュメントへの署名に進む必要があります。

[embed]: g://embed/box-embed

[embedguide]: g://embed/box-embed#programmatically

[signrequest]: e://post-sign-requests

[externalid]: e://post-sign-requests#param-signers-embed_url_external_user_id

[cloudgame]: g://embed/box-embed#cloud-game
