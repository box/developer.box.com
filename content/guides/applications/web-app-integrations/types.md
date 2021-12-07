---
rank: 1
related_endpoints: []
related_guides:
  - applications
  - applications/select
required_guides: []
related_resources: []
alias_paths: []
---

# Integrations Types

There are two types of Web App Integrations.

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

## Server-side Integration

In a server integration, accepting the confirmation prompt sends a request to
the final callback URL of the application without providing any extra UI to the
user.

The integration receives a short-lived authorization code with this request,
which can be used to connect to the Box APIs, exchange the code for an Access
Token, and then use that to make API calls to Box.
