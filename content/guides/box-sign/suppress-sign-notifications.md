---
rank: 5
related_endpoints:
  - post-sign-requests
related_guides:
  - box-sign/create-sign-request
---

# Suppress default Box Sign notifications

Box Sign allows you to suppress the **default** Box email
notifications during Sign workflow.​​ This feature gives you
the ownership of your notifications, allowing you to decide
who should receive the notification, and how such notification
will look like.
Suppressing default notifications means new options, such as:

* using a fully-customized email notification template to send emails from your domain
* trigger messages using different notification mechanisms like push notifications or text messages.​

## Using API to suppress default Box notifications

You can control sending default Box email notification with the `suppress_notification` parameter in the [`signers`][signers] object. 
If you set it  to `true` for a particular signer, 
automatic Box Sign emails are turned off, allowing
you to send your own notifications.

```curl
curl -i -X POST "https://api.box.com/2.0/sign_requests" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
       "signers": [
          {    
            "role": "signer",
            "email": "example_email@box.com"
            "suppress_notifications": true
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