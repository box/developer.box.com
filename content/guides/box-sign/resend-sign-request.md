---
rank: 2
related_endpoints:
  - post-sign-requests-id-resend
related_guides:
  - box-sign/create-sign-request
  - box-sign/cancel-sign-request
  - box-sign/sign-templates
---

# Resend Box Sign Request

The [resend a Box sign request endpoint][resend] can be used to resend request
emails to any remaining signers.

A Box Sign request cannot be resent if the [status][status] is: `signed`,
`cancelled`, `declined`, `expired`, `error_sending`, or `error_converting`.

If a Box Sign request was recently sent, you will need to wait 10 minutes before
resending. If you try before this time has passed you will receive a 400 error.

<Message type='tip'>
Reminder emails can be enabled when creating a Box Sign request to avoid the
need to resend the request.
</Message>

<Samples id='post_sign_requests_id_resend' />

[resend]: e://post-sign-requests-id-resend
[status]: g://box-sign/create-sign-request/#request-status
