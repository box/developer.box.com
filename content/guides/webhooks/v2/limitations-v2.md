---
rank: 6
related_endpoints: []
related_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/update-v2
required_guides: []
alias_paths:
  - /webhooks/limitations
---

# Limitations

## One webhook per item

There's a limit of one webhook per item (file or folder) per application per
authenticated user.

Once a webhook is attached to an item, no second webhook can be attached even if
the second webhook would respond to a different trigger event.

For example, let's assume a webhook is set up by `John Doe` to watch
`FILE.UPLOADED` events in a folder with the name `Junk` for an application 
named `CleanupApp`. At that point, no second webhook can
be added to the `Junk` folder by the `CleanupApp` by `John Doe`, even if it
is to trigger for a `FILE.DOWNLOADED` event.

To listen to another event, [update][update] the existing webhook or create a
new application.

## 1000 webhooks per application, per user

There is a limit of 1000 webhooks per application, per user.

To create more webhooks for a user, create another application or
[update existing webhooks][update] to apply to higher levels in the folder tree.

## Notification URL restrictions

The notification URL, or `address` for a webhook must be a valid HTTPS URL that
resolves to a valid IP address. In addition, it should have a certificate signed
by a reputable certificate authority, as Box does not support self-signed SSL
certificates.

The IP address of the server must be publicly accessible from the internet and
cannot be a `(*.)box.com` address. The port used in the URL must be the
standard HTTPS port (`443`). Notifications will not be delivered to other ports.

## No webhooks on root folder

V2 webhooks cannot be created on the root folder, which is the folder with ID
`0`. Instead, you will need to leverage a [v1 webhook][v1].

<Message type='notice'>
  When the permissions on an item prevent an action from occurring,
  no notification is sent for the attempted action.
</Mesage>

[v1]: g://webhooks/v1
[update]: g://webhooks/v2/update-v2