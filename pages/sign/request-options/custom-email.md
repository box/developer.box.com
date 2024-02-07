---
centered: true
rank: 6
category_id: sign
subcategory_id: sign/30-request-options
is_index: false
id: sign/request-options/custom-email
type: page
total_steps: 7
sibling_id: sign/request-options
parent_id: sign/request-options
next_page_id: sign/request-options/in-person
previous_page_id: sign/request-options/request-expiration
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sign/30-request-options/60-custom-email.md
fullyTranslated: true
---
# Custom email and notifications

## Email subject and body

By default, the email sent to the signers contains a link to the document, a generic subject, and a generic message.

If you are using templates managed within Box, the subject and message body can be set in the template itself.

However, if you are not using templates, you can still customize the email messages sent to the signers by passing the `email_subject` and the `email_message` parameters.

Both parameters accept strings, but the `email_message` parameter also accepts HTML with some limitations.

Only some HTML tags are allowed. Links included in the message are also converted to hyperlinks in the email.

The message parameter may contain the following HTML tags:

* `a`, `abbr`, `acronym`, `b`, `blockquote`, `code`, `em`, `i`, `ul`, `li`,
  `ol`, `strong`

Custom styles on these tags are not allowed.

<message size="small"></message>

Be aware that when the text to HTML ratio is too high, the email may end up in spam filters or clipped.

</Message>

例:

<Tabs>

<Tab title="cURL">

```bash

curl --location 'https://api.box.com/2.0/sign_requests' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ej...3t'
--data-raw '{
    "email_subject":"All we need is your signature to get started",
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

<Tab title="Python Gen SDK">

```python

def sign_doc_single_more_options(
    client: Client,
    ...

    email_subject: str = None,
    email_message: str = None,
) -> SignRequest:
    ...

    # sign document
    sign_request = client.sign_requests.create_sign_request(
        ...

        email_subject=email_subject,
        email_message=email_message,
    )

    return sign_request

def main():
    ...

    # Sign with custom email subject
    sign_custom_email_subject = sign_doc_single_more_options(
        client,
        SIMPLE_PDF,
        SIGN_DOCS_FOLDER,
        SIGNER_A,
        prep_needed=False,
        email_subject="All we need is your signature to get started",
    )  

```

</Tab>

</Tabs>

## Manual notification

By now, you've noticed that the signature request sends an email notification to the signers by default. This email is sent from a `box.com` domain and email system.

You can take over the notification process by setting the `embed_url_external_user_id` parameter to an identifier of your choice for a specific signer.

By setting this parameter, the signer will not receive an email notification, and within the signature request, you get back both an `embed_url` and an `iframeable_embed_url`.

The `embed_url` can be opened directly, so it is suitable for your app to send it in an email, or by any other notifications system for the signer to open.

The `iframeable_embed_url` is suited to be used with the [Box Embedded Sign Client][embed], which allows you to embed the Box Sign client on an iframe within your web app.

For example see this request:

<Tabs>

<Tab title="cURL">

```bash

--header 'Content-Type: application/json' \
--header 'Authorization: Bearer fN...dD' 
--data-raw '{
    "is_document_preparation_needed": false,
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
            "embed_url_external_user_id":"1234",
            "role": "signer"
        }
    ]
}'

```

</Tab>

<Tab title="Python Gen SDK">

```python

def sign_doc_embed_url(
    client: Client,
    document_id: str,
    destination_folder_id: str,
    signer_email: str,
    signer_embed_url_id: str,
) -> SignRequest:
    # Sign request params
    source_file = FileBase(id=document_id, type=FileBaseTypeField.FILE)
    destination_folder = FolderMini(
        id=destination_folder_id, type=FolderBaseTypeField.FOLDER
    )

    signer = SignRequestCreateSigner(
        email=signer_email,
        embed_url_external_user_id=signer_embed_url_id,
    )

    # sign document
    sign_request = client.sign_requests.create_sign_request(
        signers=[signer],
        parent_folder=destination_folder,
        source_files=[source_file],
    )

    return sign_request


def main():
    """Simple script to demonstrate how to use the Box SDK"""
    conf = ConfigOAuth()
    client = get_client_oauth(conf)
    # Sign with phone verification
    sign_with_embed_url = sign_doc_embed_url(
        client,
        SIMPLE_PDF,
        SIGN_DOCS_FOLDER,
        SIGNER_A,
        SIGNER_A_EXTERNAL_ID,
    )
    check_sign_request(sign_with_embed_url)    

```

</Tab>

</Tabs>

Returns (simplified):

<Tabs>

<Tab title="cURL">

```json

{
    "is_document_preparation_needed": false,
    "signers": [
        {
            "email": "sender@example.com",
            "role": "final_copy_reader",
        },
        {
            "email": "signer@example.com",
            "role": "signer",
            "embed_url_external_user_id": "1234",
            "embed_url": "https://app.box.com/sign/document/22a990ce-4e24-463b-b2f4-124820fe161a/9331fe9ac85650d61645d4b0fd30fe3e0ebee7921720ab6ecca587654d3cd875/",
            "iframeable_embed_url": "https://app.box.com/embed/sign/document/22a990ce-4e24-463b-b2f4-124820fe161a/9331fe9ac85650d61645d4b0fd30fe3e0ebee7921720ab6ecca587654d3cd875/"
        }
    ],
    "id": "22a990ce-4e24-463b-b2f4-124820fe161a",
}

```

</Tab>

<Tab title="Python Gen SDK">

```yaml

Simple sign request: 22a990ce-4e24-463b-b2f4-124820fe161a-defddc79c946
  Status: created
  Signers: 2
    final_copy_reader: sender@example.com
    signer: signer@example.com
    embed_url: https://app.box.com/sign/document/...
    iframeable_embed_url: https://app.box.com/embed/sign/document/...
  Prepare url: None

```

</Tab>

</Tabs>

You can now take the embedded URLs and use your own notification process or embed the signature client within your own app.

[embed]: guide://box-sign/embedded-sign-client
