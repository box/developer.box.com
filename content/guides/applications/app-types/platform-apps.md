---
rank: 20
alias_paths:
  - /docs/custom-applications
  - /docs/custom-integrations
  - /docs/partner-integrations
  - /docs/getting-started-box-platform
  - /docs/box-platform
  - /docs/applications/custom-apps
related_guides:
  - authentication/oauth2
  - authentication/jwt
  - authentication/client-credentials
---

# Platform App

Platform Apps encompass most use cases and is the most flexible application type.

A platform application typically presents Box functionality to a user within a
custom interface. Box offers pre-built, customizable user interface components,
known as [UI Elements][uie], for functionality like browsing, searching, and
previewing content.

## Authentication methods

Platform Apps support [OAuth 2.0][oauth2], [JWT][jwt], and
[Client Credentials Grant][cc].

<CTA to='g://authentication/select'>
  Learn more about authentication methods
</CTA>

## When to use

A Platform App is best used when the application:

- Wants to use [OAuth 2.0][oauth2], [JWT][jwt] or [Client Credentials Grant][cc] for authentication.
- Wants to upload and download files
- Wants the freedom to access both their own files, as well as files owned by [managed or external users][users].
- Wants the option to list the application in the Box Integrations
- Wants to provide integration into the Box Web App

## Use cases

Example use cases for a Platform App include:

- A file vault in an application that allows an end user to access files that have been shared with them, while also providing access for employees to the same files through the Box Web app.

  An example of this is financial advisor sharing statements and investment
  prospectuses with investors that can be viewed and commented on within a
  platform application.

- A file upload feature in an application that allows an end user to submit and upload files from within a custom-built application to Box. These uploads then initiate a business process with the Box Web app.

  An example of this is a candidate submitting a PDF of a resume to a
  recruiting portal then can then be routed to an appropriate employee for
  review.

## Approval

Platform Apps may require approval before use.

<CTA to='g://authorization/custom-app-approval'>
  Learn how to approve Platform Apps
</CTA>

[oauth2]: g://authentication/oauth2
[jwt]: g://authentication/jwt
[cc]: g://authentication/client-credentials
[uie]: g://embed/ui-elements
[users]: g;//getting-started/user-types/#managed-users/
