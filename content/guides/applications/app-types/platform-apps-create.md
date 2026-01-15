---
title: "Create a Platform App"
rank: 10
related_endpoints: []
related_guides:
  - authentication/select
required_guides: []
related_resources: []
alias_paths:
  - /docs/use-case-recipes
  - /v2/docs/box-api-recipes
---

A Platform App allows for interaction with our 150+ endpoints.
For example, downloading/uploading, searching, applying metadata, and more.

## Prerequisites

Access to the [Developer Console][dev-console].

## Create a Platform App

1. Navigate to the [Developer Console][dev-console].
2. Select **Create Platform App**.
3. Provide a name for your app.
4. Select the authentication method you want to use.
5. Click **Create App**.

## Configure application settings

After you create a Platform App, the settings screen is displayed.

### General settings

- **App Name** — the name you set up during the app creation. You can change it here if needed.
- **App Description** — provide a description for your app (optional).
- **Contact Email** — this is set to the developer of the application by default.  

  Keep in mind that once you publish your app, this email is publicly visible to Box users
  who view your app in the [Integrations][integrations]. We recommend changing it to a
  support email address so users can reach out in case of any issues with the integration.

### Configuration

- **Purpose** — select the purpose of your app from the drop-down list.  
  Depending on the option you choose, you might need to specify further details.

| Purpose | Details |
|------|---------|
| **Automation**, **Custom Portal** | Specify if the app is built by a customer or partner. |
| **Integration** | Specify the integration category, the external system name (if applicable), and whether the app is built by a customer or partner. |
| *Other* | Specify the app purpose and whether it is built by a customer or partner. |

- **Authentication Method** — choose how your app will authenticate to the Box APIs.

Depending on the authentication method you choose, you need to specify further details.

| Authentication Method | Details |
|------|---------|
| **OAuth 2.0** | Specify the client ID and client secret. |
| **JWT** | Add a public key or generate a public/private key pair. Choose the app access level. |
| **Client Credentials Grant** | Specify the client ID and client secret. Choose the app access level. |

- **Developer Token** — a developer token is created automatically when you create a Platform App.
- **Application Scopes** — choose the scopes you want to grant to your app. See the [scopes guide][scopes] for detailed information on each option.
- **Advanced Features** — enable the advanced features your application requires.
- **CORS Domains** — add the domains you want to allow requests from.

## Related guides

- **[Select Auth Method](/guides/authentication/select)** — GUIDE

[dev-console]: https://app.box.com/developers/console
[integrations]: /guides/applications/integrations
[scopes]: /guides/api-calls/permissions-and-errors/scopes
