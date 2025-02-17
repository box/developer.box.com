---
rank: 0
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /guides/authentication/access-tokens
category_id: authentication
subcategory_id: authentication/tokens
is_index: true
id: authentication/tokens
type: guide
total_steps: 8
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/tokens/api-calls
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/tokens/index.md
---
# Tokens

At the core of every Box API call is an Access Token.
Similar to using the Box Web App, you will only be able to successfully interact
with content the user associated with the Access Token either a collaborator on
or owns. This can be further restricted by [downscoping][ds] a token.

<Message warning>

Required access scopes, application access, enabled advanced settings, user
permissions, and endpoint-specific restrictions all work together to determine
which API calls will be successful. For example, even if a user has
collaborator access to a folder, a call to get information about the folder
will not be successful if the read scope is not granted to the application.

</Message>

## Types of tokens

| Type                     | Duration           |
| ------------------------ | ------------------ |
| [Access Token][at]       | 60 minutes         |
| [Refresh Token][rt]      | 60 days or one use |
| [Developer Token][dt]    | 60 minutes         |

## Application Types & Access Tokens

The following shows how each application type is expected to create an Access
Token.

| Box Application Type                  | How to get Access Token                          |
| ------------------------------------- | ------------------------------------------------ |
| Platform App + OAuth 2.0                | [Explicit user grant][oauth2-with-sdk]           |
| Platform App + JWT                      | [Exchange a JWT assertion][jwt-with-sdk]         |
| Platform App + Client Credentials Grant | [Use client ID and client secret][clientcred]    |
| Limited Access App + App Token        | Configure token in [Developer Console][devcon]   |
| Custom Skill                          | Access Token in event payload                    |

[jwt-with-sdk]: g://authentication/oauth2/without-sdk
[oauth2-with-sdk]: g://authentication/oauth2/without-sdk
[devcon]: https://app.box.com/developers/console
[clientcred]: g://authentication/client-credentials
[ds]: g://authentication/tokens/downscope
[at]: g://authentication/tokens/access-tokens
[rt]: g://authentication/tokens/refresh
[dt]: g://authentication/tokens/developer-tokens