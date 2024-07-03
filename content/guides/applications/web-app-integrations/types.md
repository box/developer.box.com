---
rank: 1
related_endpoints: []
related_guides:
  - applications
  - applications/app-types/select
required_guides: []
related_resources: []
alias_paths: []
---

# Integrations Types

Currently, Box provides the Popup integration type.

## Popup Integrations

In a popup integration, Box opens a panel and loads the application's callback
URL configured for the integration. The application can display its own user
interface for the integration in the popup.

The integration receives a short-lived authorization code with this request,
which can be used to connect to the Box APIs, exchange the code for an Access
Token, and then use that to make API calls to Box.

<Message warning>
  Popup panels use HTML `<iframe>` tags to display the embedded content. To
  protect the security of Box's content, callback URLs should use SSL, and the
  response from the callback URL should include an `X-Frame-Options` header set
  to a random string value.
</Message>
