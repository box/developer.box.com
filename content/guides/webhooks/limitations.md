---
rank: 1
related_endpoints: []
related_guides:
  - webhooks/manage/for-file
  - webhooks/manage/update
required_guides: []
alias_paths: []
---

# Limitations

The following are a few limitations affecting webhooks in Box.

## One webhook per item

There's a limit of one webhook per item (file or folder) per application per
authenticated user.

Once a webhook has been attached to an item no second webhook can be attached,
even if this second webhook would respond to a different trigger event.

For example, let's assume a webhook has been set up to watch for `FILE.UPLOADED`
events in a folder with the name `Junk`, by an application with the name
`MyGreatApp` and for a the user `John Doe`. At that point, no second webhook can
be added to the same folder, for the same app, and for the same user, even if it
is to trigger for a `FILE.DOWNLOADED` event.

To listen to another event, either update the existing webhook, create a new
application, or ideally parse the different events in your application when the
webhook payloads are delivered.

## 1000 webhooks per application, per user

There is a limit of 1000 webhooks per application, per user.

In other words, up to 1000 webhooks can be created by any application for any
user and no more. To create more webhooks for a user, either create another
application or apply the webhook to a higher level item in the folder structure.

## Notification URL restrictions

The notification URL, or `address` for a webhook must be a valid HTTPS URL that
resolves to a valid IP address and should have a certificate signed by a
reputable certificate authority. Box does not support self-signed SSL
certificates.

The IP address of the server must be publicly accessible from the internet and
it must not be a `(*.)box.com` address. The port used in the URL must be the
standard HTTPS port (`443`). Notifications will not be delivered to other ports.

## No webhooks on root folder

Webhooks can not be created on the root folder of a user, which is the folder
with the ID of `0`.
