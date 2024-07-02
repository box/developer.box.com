---
rank: 5
related_endpoints:
  - post-sign-requests
related_guides:
  - box-sign/create-sign-request
---

# Suppress default Box Sign notifications

Box Sign API allows you to suppress the default Box
email notifications sent during the Sign workflow.
​​This feature facilitates the ownership of Box Sign
notifications with the following options:

* You can use a fully-customized email notification
  template to send emails from your domain.
* Apart from emails, you can send push notifications
  or text messages.​

<Message type="notice">

When you choose to suppress Box email notifications, your organization assumes responsibility for ensuring the delivery to Signers of all notifications at the appropriate time in the signing process and with the appropriate content, in compliance with all applicable laws and regulations, including with respect to obtaining Signer consent to the delivery methods used, if applicable. 

</Message>

## Using Box Sign API to suppress default notifications

To suppress Box Sign email notifications, you must
set the following parameters:

1. Set the `suppress_notifications` parameter in
   the [`signers`][signers] object to `true` to turn
   the notifications off.
2. Set the [`embed_url_external_user_id`][externalid] parameter
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

## Signing Log entries

When Box Sign default notifications are suppressed, the Signing Log will indicate that the sender has suppressed all Box Sign notifications. The log will also provide information on the system used for purposes of notification delivery and the user ID of the signer on your organization’s system, as provided to Box Sign through your API integration. 

[signers]: e://post-sign-requests/#param-signers
[externalid]: e://post-sign-requests/#param-signers-embed_url_external_user_id
