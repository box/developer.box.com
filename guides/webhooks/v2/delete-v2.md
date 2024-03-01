---
rank: 4
related_endpoints:
  - delete_webhooks_id
related_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/list-v2
required_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/list-v2
alias_paths:
  - /webhooks/manage/delete
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/delete-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/signatures-v2
previous_page_id: webhooks/v2/update-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/delete-v2.md
---
# Delete Webhooks

You can delete a webhook using the [Developer Console][console] or API.

## Developer Console

To delete a webhook follow the steps below.

1. Navigate to the **Webhooks** tab in the [Developer Console][console].
2. Select the webhook you want to delete by clicking on its ID.
3. Click the **Delete** button.
4. Confirm the action by clicking **Delete** under the warning message.

## API

To remove a webhook from a file or folder, you need to use the 
[remove webhook endpoint][delete] with the ID of the webhook. You can
get this value using the [list all webhooks endpoint][list].

<Samples id='delete_webhooks_id'>

</Samples>

## Additional reasons for deletion

Using [this][delete] endpoint is not the only way a webhook can be deleted.

The following reasons can cause webhooks to be deleted.

1. Deleting a Box application automatically deletes all webhooks associated with
   it.
2. Deleting all active Access Tokens associated with a webhook
   automatically deletes the webhook. This includes Developer Tokens and password.
3. A webhook is automatically deleted if the last successful delivery was
30 days ago and the period between the last successful delivery and
the last trigger date is more than 14 days.

In all of these cases Box sends a webhook payload with the
`WEBHOOK.DELETED` event name to the notification URL. The body of the payload
includes the following additional information.

```json
"additional_info": {
  "reason": "auto_cleanup"
}
```

[delete]: e://delete-webhooks-id
[list]: e://get-webhooks
[console]: https://app.box.com/developers/console