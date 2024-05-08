---
rank: 5
related_endpoints:
  - post-sign-requests
related_guides:
  - box-sign/create-sign-request
category_id: box-sign
subcategory_id: null
is_index: false
id: box-sign/suppress-sign-notifications
type: guide
total_steps: 7
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign/sign-templates
previous_page_id: box-sign/list-sign-requests
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/suppress-sign-notifications.md
---
# Suppress default Box Sign notifications

Box Sign API allows you to suppress the default Box
email notifications sent during the Sign workflow.
​​This feature facilitates the ownership of Box Sign
notifications, by giving you the following options:

* You can use a fully-customized email notification
  template to send emails from your domain.
* You can trigger notifications using various
  notification mechanisms like push notifications
  or text messages.​

## Using API to suppress default Box notifications

To suppress Box email notifications, you must
set the following parameters:

1. Set the `suppress_notification` parameter in
   the [`signers`][signers] object to `true` to turn
   the notifications off.
2. Set the [`embed_url_external_user_id` parameter][externalid]
   to specify the user who will not receive notifications.

This configuration turns off the
automatic Box Sign email notifications
for a given user. As a result, you can configure
and send your own notifications.

```curl
curl -i -X POST "https://api.box.com/2.0/sign_requests" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
       "signers": [
          {    
            "role": "signer",
            "email": "example_email@box.com"
            "suppress_notifications": true
            "embed_url_external_user_id": "1234"
          }
        ],
       "source_files": [
          {
            "type": "file",
            "id": "123456789"
          }
       ],
       "parent_folder": 
          {
            "type": "folder",
            "id": "0987654321"
          }
     }'
```

[signers]: e://post-sign-requests/#param-signers
[externalid]: e://post-sign-requests/#param-signers-embed_url_external_user_id