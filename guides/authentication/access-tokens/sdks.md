---
rank: 3
related_endpoints: []
related_guides:
  - authentication/access-tokens/developer-tokens
  - authentication/select
required_guides:
  - tooling/sdks
related_resources:
  - access_token
alias_paths: []
cId: authentication
scId: authentication/access-tokens
id: authentication/access-tokens/sdks
isIndex: false
---

# Using in SDKs

The SDKs have direct support for JWT and OAuth 2.0 authentication, yet in some
cases your application might need to provide an Access Token to the SDK directly.

<Samples id='x_auth' variant='init_with_access_and_refresh_token' >

</Samples>

## Developer Token

Similarly, developer tokens can be used directly in SDKs without needing any
further SDK configuration.

<Samples id='x_auth' variant='init_with_dev_token' >

</Samples>

## App Token

When using App Token authentication it is possible to directly pass the App
Token to the SDKs.

<Samples id='x_auth' variant='init_with_app_token' >

</Samples>
