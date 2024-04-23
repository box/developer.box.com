---
rank: 6
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
total_steps: 6
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign
previous_page_id: box-sign/list-sign-requests
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/embedded-sign-client.md
---
# Embedded Sign client

[Box Embed][embed] allows you to embed Box Sign
features into your own website. This way, users
don't have to leave the website, go to Box Sign
to sign the document, and then come back to finish
the process.
Instead, Box Embed allows them
to complete the signing process
within the external website.

To integrate Box Sign experience within your
own website, you need the `iframable_embed_url`
parameter that is specifically designed to allow
signing documents within the HTML `iframe` tag.

A sample `iframable_embed_url` looks as follows:

```sh
https://app.box.com/embed/sign/document/f14d7098-a331-494b-808b-79bc7f3992a3/f14d7098-a331-494b-808b-79bc7f3992a4
```

To get the `iframeable_embed_url` pass the [`embed_url_external_user_id`][externalid] parameter for each signer when calling the [create sign request][signrequest] endpoint.
The returned response will contain a unique `iframeable_embed_url` for that signer.

To embed Sign features and make them
available to the users,
use the URL within the `iframe` tag:

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

For details on working with Box Embed, see [this guide][embedguide].

</Message>

Box Embed uses the [Cloud Game][cloudgame] widget to
prevent clickjacking.
In this case, when the user wants to sign
a document, they will have to interact
with the widget and drag a cloud to the correct
location before proceeding to document signing.

[embed]: g://embed/box-embed
[embedguide]: g://embed/box-embed#programmatically
[signrequest]: e://post-sign-requests
[externalid]: e://post-sign-requests#param-signers-embed_url_external_user_id
[cloudgame]: g://embed/box-embed#cloud-game