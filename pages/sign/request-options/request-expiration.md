---
centered: true
rank: 5
related_guides:
  - box-sign
related_endpoints:
  - post_sign_requests
category_id: sign
subcategory_id: sign/30-request-options
is_index: false
id: sign/request-options/request-expiration
type: page
total_steps: 7
sibling_id: sign/request-options
parent_id: sign/request-options
next_page_id: sign/request-options/custom-email
previous_page_id: sign/request-options/resend-requests
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sign/30-request-options/50-request-expiration.md
---
# Request expiration

There are situations where you might need to set an expiration date for the
signature request.

For example, imagine a quote for a service that is valid for 30 days. This
proposal has to be signed by a certain date, and if not, the signature request
is no longer valid.

All you need to do is pass the `days_valid` parameter.

For example:

<Tabs>

<Tab title='cURL'>

```bash

curl --location 'https://api.box.com/2.0/sign_requests' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ej...3t'
--data-raw '{
    "days_valid":30,
    "parent_folder": {
        "id": "234102987614",
        "type": "folder"
    },
    "source_files": [
        {
            "id": "1358047520478",
            "type": "file"
        }
    ],
    "signers": [
        {
            "email": "signer@example.com",
            "role": "signer"
        }
    ]
}'
    
```

</Tab>

<Tab title='Python Gen SDK'>

```python

def sign_doc_single_more_options(
    ...

    days_valid: int = None,
) -> SignRequest:
    ...

    # sign document
    sign_request = client.sign_requests.create_sign_request(
        ...

        days_valid=days_valid,
    )

    return sign_request

```

</Tab>

</Tabs>

<Next>

Custom emails

</Next>