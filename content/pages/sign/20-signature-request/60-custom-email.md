---
centered: true
rank: 6
---

# Custom email

By default, the email sent to the signers contains a link to the document, a 
generic subject, and a generic message.

If you are using templates managed within Box, these can be set on the template 
itself.

However, if not using templates, you can still customize the email messages 
sent to the signers by passing the `email_subject` and the `email_message` 
parameters. 

Both parameters accept strings, however the `email_message` parameter 
also accepts HTML with some limitations.

Only some HTML tags are allowed. Links included in the message are also 
converted to hyperlinks in the email. 

<Message type='notice'>
The message parameter may contain the following HTML tags
`a`, `abbr`, `acronym`, `b`, `blockquote`, `code`, `em`, `i`, `ul`, `li`, `ol`, 
and `strong`.

Custom styles on these tags are not allowed.
</Message>

Be aware that when the text to HTML ratio is too high, the email may end up in 
spam filters or clipped.

For example:

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

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