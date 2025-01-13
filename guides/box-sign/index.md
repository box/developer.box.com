---
rank: 225
category_id: box-sign
subcategory_id: null
is_index: true
id: box-sign
type: guide
total_steps: 7
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: box-sign/embedded-sign-client
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/index.md
---
# Box Sign

Programmatically harness the full functionality of the Box Sign web app
experience by leveraging Box Sign’s API endpoints to create, list, resend, and
cancel sign requests.

## Enablement

The following account types support requests through the Box Sign API:
Business, Business Plus, Enterprise, Enterprise Suites, Enterprise Plus, and
Enterprise Advanced.
To locate your account type, navigate to **Account Settings** and scroll down
to the **Account Details** section of the **Account** tab. For Admin details on
restricting access, please see our [support article][restrict].

## Required scopes

The following [scopes][scopes] must be enabled for an application before use of
Box Sign's endpoints.

- [Read all files and folders stored in Box][read]
- [Write all files and folders stored in Box][write]
- [Manage signature requests][sign]

<Message type='warning'>

Depending on the selected authentication method and enterprise's settings,
your application may require Admin authorization or re-authorization before
successful use of any newly selected scopes.

</Message>

## Events

Please see our [events guide][eg] for more information.

## Webhooks

Please see our [webhooks guide][wh] for more information.

## Rate Limits

Please see our [rate limit guide][ratelimit] for more information.

## Testing

Due to the feature parity, it may be useful to familiarize yourself with
[Box Sign functionality using the Box web app][webapp] before leveraging the
API. As with all API endpoints, we recommend testing via
[developer sandbox environment][sandbox] to eliminate the risk of impacting
production content.

[scopes]: g://api-calls/permissions-and-errors/scopes
[read]: g://api-calls/permissions-and-errors/scopes/#read-all-files-and-folders
[write]: g://api-calls/permissions-and-errors/scopes/#read-and-write-all-files-and-folders
[sign]: g://api-calls/permissions-and-errors/scopes/#manage-signature-requests
<!-- i18n-enable localize-links -->

[restrict]: https://support.box.com/hc/en-us/articles/4404076971155-Enabling-Box-Sign
<!-- i18n-disable localize-links -->

[ratelimit]: g://api-calls/permissions-and-errors/rate-limits/#per-api-rate-limits
<!-- i18n-enable localize-links -->

[webapp]: https://support.box.com/hc/en-us/articles/4404105810195-Sending-a-document-for-signature
[sandbox]: https://support.box.com/hc/en-us/articles/360043697274-Managing-developer-sandboxes-for-Box-admins
<!-- i18n-disable localize-links -->

[eg]: g://events/event-triggers/sign-events
[wh]: g://webhooks/triggers