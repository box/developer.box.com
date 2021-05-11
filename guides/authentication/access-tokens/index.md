---
rank: 4
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/access-tokens
is_index: true
id: authentication/access-tokens
type: guide
total_steps: 8
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/access-tokens/refresh
previous_page_id: authentication/access-tokens/sdks
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/access-tokens/index.md
---
# Access Tokens

Access Tokens are at the core of every Box API call. They represent an
authenticated user to the Box servers and determine what files and folders an
application has access to.

<CTA to="guide://authentication/select">

Learn about the different ways an app can get authorized

</CTA>

## Application Types & Access Tokens

The following shows how each application type is expected to create an Access
Token.

<!-- markdownlint-disable line-length -->

| Box Application Type                  | How to get Access Token                          |
| ------------------------------------- | ------------------------------------------------ |
| Custom App + OAuth 2.0                | [Explicit user grant][oauth2-with-sdk]           |
| Custom App + JWT                      | [Exchange a JWT assertion][jwt-with-sdk]         |
| Custom App + Client Credentials Grant | [Use client ID and client secret][clientcred]    |
| Limited Access App + App Token        | Configure token in [Developer Console][devcon]   |
| Custom Skill                          | Access Token in event payload                    |
<!-- markdownlint-enable line-length -->

[jwt-with-sdk]: g://authentication/jwt/with-sdk
[oauth2-with-sdk]: g://authentication/oauth2/with-sdk
[devcon]: https://app.box.com/developers/console
[clientcred]: g://authentication/client-credentials