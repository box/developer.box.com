---
rank: 6
related_endpoints: []
related_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/update-v2
required_guides: []
alias_paths:
  - /webhooks/limitations
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/limitations-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: ''
previous_page_id: webhooks/v2/signatures-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/limitations-v2.md
---
# Limitations

## One webhook per item

There's a limit of one webhook for each item (file or folder), each application
and each authenticated user.

Once a webhook is attached to an item, no second webhook can be attached,
even if the second webhook would respond to a different trigger event.

Example: a webhook is set up by `John Doe` to watch
`FILE.UPLOADED` events in a folder with the name `Junk`, for an application
named `CleanupApp`. At that point, no second webhook can
be added to the `Junk` folder by the `CleanupApp` by `John Doe`, even if it
is to trigger for an `FILE.DOWNLOADED` event.

To listen to another event, [update][update] the existing webhook or create a
new application.

## 1000 webhooks limit

There is a limit of 1000 webhooks for each application and each user.

To create more webhooks for a user, create another application or
[update existing webhooks][update] to apply to higher levels in the folder tree.

## Notification URL restrictions

The notification URL or `address` for a webhook must be a valid HTTPS URL that
resolves to a valid IP address. It needs to have a certificate signed
by a reputable certificate authority. Box does not support self-signed SSL
certificates.

The IP address of the server must be publicly accessible from the internet and
cannot be a `(*.)box.com` address. The port used in the URL must be the
standard HTTPS port (`443`). Notifications will not be delivered to other ports.

## No webhooks on root folder

V2 webhooks cannot be created on the root folder, which is the folder with ID
`0`. Instead, you will need to use a [v1 webhook][v1].

<Message type='notice'>

When the permissions on an item prevent an action from occurring,
no notification is sent for the attempted action.

</Message>

## Reasons for webhook deletion

The following reasons can cause webhooks to be deleted.

1. Deleting a Box application automatically deletes all webhooks associated with
   it.
2. Deleting all active Access Tokens associated with a webhook
automatically deletes the webhook. This includes Developer Tokens and password.
3. A webhook is automatically deleted if the last successful delivery was 30
days ago and the period between the last successful delivery and the last
trigger date is more than 14 days.

In all of these cases Box sends a webhook payload with the
`WEBHOOK.DELETED` event name to the notification URL. The body of the payload
includes the following additional information.

```json
"additional_info": {
  "reason": "auto_cleanup"
}
```

[v1]: g://webhooks/v1
[update]: g://webhooks/v2/update-v2