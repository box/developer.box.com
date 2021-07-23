---
rank: 300
---

# Box Sign

Programmatically harness the full functionality of the Box Sign web app
experience by leveraging Box Sign’s API endpoints to create, list, resend, and
cancel sign requests.

## Enablement

If your account type supports access to Box Sign, you will be able to make
requests via the Box Sign API. Supported tariffs include: Business, Business
Plus, Enterprise, Enterprise Suites, Enterprise Plus, or Starter. To locate your
account type, navigate to **Account Settings** and scroll down to the
**Account Details** section of the **Account** tab. For Admin details on
restricting access, please see our [support article][restrict].  

## Required Scopes

The following scopes must be enabled for an application before use of Box Sign's
endpoints.

- [Read all files and folders stored in Box][read]
- [Write all files and folders stored in Box][write]
- [Manage signature requests][sign]

<Message type='warning'>
  Depending on the selected authentication method and enterprise's settings,
  your application may require Admin authorization or re-authorization before
  successful use of any newly selected scopes.
</Message>

## Rate Limits

Please see our rate limit guide for more information.

## Testing

Due to the feature parity, it may be useful to familiarize yourself with Box
Sign functionality using the Box web app before leveraging the API. As with all
API endpoints, we recommend testing via sandbox environment to eliminate the
risk of impacting production content.

[read]: g://api-calls/permissions-and-errors/scopes/#read-all-files-and-folders
[write]: g://api-calls/permissions-and-errors/scopes/#read-and-write-all-files-and-folders
[sign]: g://api-calls/permissions-and-errors/scopes/#manage-signature-requests
[restrict]: https://support.box.com/hc/en-us/articles/4404076971155-Enabling-Box-Sign
