---
rank: 2
related_endpoints:
  - post_webhooks
related_guides:
  - webhooks/triggers
  - webhooks/v2
  - webhooks/v2/delete_v2
related_resources:
  - webhook
required_guides: []
alias_paths:
  - /webhooks/manage/for-file
  - /webhooks/manage/for-folder
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/create_v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/update_v2
previous_page_id: webhooks/v2/list_v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/create_v2.md
---
# Create Webhooks

V2 webhooks can monitor specific files or folders.

<Message type='warning'>

This API requires the application to have the "Manage Webhooks" scope enabled.

</Message>

To attach a webhook to a file, call the [create webhook][1] endpoint with the
type of `file`, the ID of the file, a URL to send webhook notifications to, and
a list of [triggers][2].

<Samples id='post_webhooks' >

</Samples>

To attach a webhook to an folder, call the [create webhook][1] endpoint with the
type of `folder`, the ID of the folder, a URL to send webhook notifications to,
and a list of [triggers][2].

<Samples id='post_webhooks' variant='for_folder' >

</Samples>

<Message type='notice'>

Webhooks do cascade, so if set on a parent folder it will also watch
subfolders for the selected triggers.

</Message>

## Ownership

It is best practice and strongly recommend to create webhooks with a
[Service Account][sa], or user that will not be deleted, to avoid potential
issues with webhook delivery due to loss of access to content.

Similar to files and folders, webhooks are owned by a user. If a user who owns a
webhook is deleted, they will lose access to all files and folders that they
previously had access to. Their webhooks will begin to fail validation, but our
webhook service will continue to send events and require retries.

## Webhook address

The notification URL specified in the `address` parameter must be a valid URL
that you specify when you create a webhook. Every time one of the triggers is
activated, this URL is called.

The notification URL must use standard port, `443` and should return
an HTTP status in the range of `200` to `299` within 30 seconds of receiving
the webhook payload.

## Webhook triggers

The triggers are a list of strings that specify the events that will cause the
webhook to fire. For example, if you want the webhook to be triggered
when a user uploads a file, use `FILE.UPLOADED`.

A list of available triggers is available [in this guide][2].

[1]: e://post_webhooks
[2]: g://webhooks/triggers
[sa]: g://getting-started/user-types/service-account