---
centered: true
rank: 4
category_id: sign
subcategory_id: sign/30-request-options
is_index: false
id: sign/request-options/resend-requests
type: page
total_steps: 7
sibling_id: sign/request-options
parent_id: sign/request-options
next_page_id: sign/request-options/request-expiration
previous_page_id: sign/request-options/custom-urls
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sign/30-request-options/40-resend-requests.md
---
# Resend requests

What if the signer did not receive the email, the email was lost, or the
signer deleted the email by mistake?

You can resend the signature request email to the `signer` , either manually or
you can turn on the automatic resend option.

## Manual resend

To manually resend the signature request email to the signer, call the
`resend_sign_request` method on the `sign_requests` object. You can only do it
once every 10 minutes.

Here is an example:

<Tabs>

<Tab title='cURL'>

```curl
curl --location --request POST 'https://api.box.com/2.0/sign_requests/
52f6f86c-c0b3-401e-a4ec-1709f277c469/resend' \
    --header 'Authorization: Bearer ej...3t'
```

</Tab>

<Tab title='Python Gen SDK'>

```python
def sign_send_reminder(client: Client, sign_request_id: str):
    """Send reminder to signers"""
    sign_request = client.sign_requests.resend_sign_request(sign_request_id)
    return sign_request
```

</Tab>

</Tabs>

## Automatic resend

The automatic resend option sends a reminder email to signers that have
not signed the document yet, after 3, 8, 13, and 18 days.

To enable automatic resend set the `are_reminders_enabled` parameter to `true`.
For example:

<Tabs>

<Tab title='cURL'>

```curl
curl --location 'https://api.box.com/2.0/sign_requests' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer <access token>' \
    --data-raw '{
      "are_reminders_enabled": true,
      "parent_folder": {
        "id": "234102987614",
        "type": "folder"
      },
      "source_files": [
        {
          "id": "1355143830404",
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
    client: Client,
    document_id: str,
    destination_folder_id: str,
    signer_email: str,
    prep_needed: bool = False,
    auto_reminder: bool = False,
) -> SignRequest:
    """Single doc sign by single signer"""

    # Sign request params
    source_file = FileBase(id=document_id, type=FileBaseTypeField.FILE)
    destination_folder = FolderMini(
        id=destination_folder_id, type=FolderBaseTypeField.FOLDER
    )

    # signer
    signer = SignRequestCreateSigner(signer_email)

    # sign document
    sign_request = client.sign_requests.create_sign_request(
        signers=[signer],
        parent_folder=destination_folder,
        source_files=[source_file],
        is_document_preparation_needed=prep_needed,
        are_reminders_enabled=auto_reminder,
    )

    return sign_request

def main():
    ...

    # Sign with redirects
    sign_with_auto_reminder = sign_doc_single_more_options(
        client,
        SIMPLE_PDF,
        SIGN_DOCS_FOLDER,
        SIGNER_A,
        prep_needed=False,
        auto_reminder = True,
    )
```

</Tab>

</Tabs>