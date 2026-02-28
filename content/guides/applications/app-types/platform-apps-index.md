---
rank: 20
alias_paths:
  - /docs/custom-applications
  - /docs/custom-integrations
  - /docs/partner-integrations
  - /docs/getting-started-box-platform
  - /docs/box-platform
  - /guides/applications/custom-apps
related_guides:
  - authentication/oauth2
  - authentication/jwt
  - authentication/client-credentials
---

# Platform App

Platform App typically presents Box functionality to a user through a
custom interface. Box offers pre-built, customizable user interface components,
known as [UI Elements][uie], for functionalities like browsing, searching, and
previewing content.

## Authentication methods

Platform Apps support [OAuth 2.0][oauth2], [JWT][jwt], and
[Client Credentials Grant][cc] authentication methods.

👉 **[Learn more about authentication methods](https://staging.developer.box.com/guides/authentication/select/)**

## When to use

Use a Platform App when you want to:

- Use [OAuth 2.0][oauth2], [JWT][jwt] or [Client Credentials Grant][cc] for authentication
- Upload and download files
- Access both your own files and files owned by [managed or external users][users]
- List the application in the Box Integrations
- Provide integration into the Box Web App

## Use cases

Example use cases include:

- A file vault in an application that allows an end user to access files that have been shared with them, while also providing access for employees to the same files through the Box Web app.

  An example of this is a financial advisor sharing statements and investment
  prospectuses with investors that can be viewed and commented on within a
  platform application.

- A file upload feature in an application that allows an end user to submit and upload files from within a custom-built application to Box. These uploads then initiate a business process with the Box Web app.

  An example of this is a candidate submitting a PDF of a resume to a
  recruiting portal, which can then be routed to an appropriate employee for
  review.

## Approval

Platform Apps may require approval before use.

👉 **[Learn how to approve Platform Apps](https://developer.box.com/guides/authorization/platform-app-approval/)**

## Related guides

- **[OAuth 2.0 Auth](https://developer.box.com/guides/authentication/oauth2/)** 
- **[JWT Auth](https://developer.box.com/guides/authentication/jwt/)**
- **[Client Credentials Grant](https://developer.box.com/guides/authentication/client-credentials/index)**

[oauth2]: /guides/authentication/oauth2
[jwt]: /guides/authentication/jwt
[cc]: /guides/authentication/client-credentials
[uie]: /guides/embed/ui-elements
[users]: /platform/user-types/#managed-users/
