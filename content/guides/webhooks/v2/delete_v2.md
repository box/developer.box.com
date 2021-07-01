---
rank: 4
related_endpoints:
  - delete_webhooks_id
related_guides:
  - webhooks/v2/create_v2
  - webhooks/v2/list_v2
required_guides:
  - webhooks/v2/create_v2
  - webhooks/v2/list_v2
alias_paths:
  - /webhooks/manage/delete
---

# Delete Webhooks

To remove a webhook from a file or folder, you will need to use the 
[remove webhook endpoint][delete] with the ID of the webhook. This value can 
be obtained using the [list all webhooks endpoint][list].

<Samples id='delete_webhooks_id'></Samples>

## Additional reasons for deletion

Using this endpoint is not the only way a webhook can be deleted.

The following reasons can cause webhooks to be deleted.

1. Deleting a Box application automatically deletes all webhooks associated with
   the application.
2. Deleting all active Access Tokens associated with a webhook will
   automatically delete the webhook. This includes Developer Tokens and password
   resets.
3. If the last successful delivery was 30 days ago and the period between the
   last successful delivery date and the last trigger date was more than 14
   days, the webhook will be automatically deleted.

In all of these cases Box would send a webhook payload with the
`WEBHOOK.DELETED` event name to the notification URL. The body of the payload
will include the following additional information.

```json
"additional_info": {
  "reason": "auto_cleanup"
}
```

[delete]: e://delete-webhooks-id
[list]: e://get-webhooks