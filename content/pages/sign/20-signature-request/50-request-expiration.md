---
centered: true
rank: 5
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