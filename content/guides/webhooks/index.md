---
rank: 280
related_endpoints:
  - get_webhooks
  - get_webhooks_id
  - post_webhooks
  - put_webhooks_id
  - delete_webhooks_id
related_resources:
  - webhook
required_guides: []
alias_paths:
  - /docs/work-with-webhooks
  - /docs/file-workflow-with-webhooks
  - /docs/webhooks
  - /docs/getting-started-with-webhooks-v2
---

# Webhooks

Webhooks allow you to monitor Box content for events, and receive notifications
to a URL of your choice when they occur. For example, a workflow may include
waiting for a file to be downloaded to delete a shared link. A webhook can be
set on the file and upon notification of the download event, a script can launch
to make an API call to delete the shared link. 

<ImageFrame center shadow border>
  ![Webhook developer console](./images/webhooksV2preview.png)
</ImageFrame>

## Versions

There are two types of webhooks: V1 and V2, which are compared below.

<Message type='notice'>
  For the ease of use, better security, more event triggers to choose from,
  and automatic retries we recommend to use V2 webhooks.
</Message>

| V1                                                                    | V2                                                                   |
| --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Created in the [Developer Console][console].                                      | Created in the [Developer Console][console] or with an API call.                                             |
| Set at the root level.                                                 | Set on specific files/folders, but cannot set at the root.            |
| Select from 14 event triggers.                                         | Select from 30+ event triggers.                                       |
| Provides selected callback parameters.                                 | Payload includes full object response & additional context info.      |
| No retry mechanism after notification delivery failure.                | Retries up to 10 times after notification delivery failure.           |
| Does not support payload verification.                                 | Supports payload verification.                                       |
| Notification URL can be HTTP or HTTPS.                                 | Notification URL must be HTTPS.                                       |
| Does not scale well.                                                   | Scales well and has increased reliability.                            |

[console]: https://app.box.com/developers/console