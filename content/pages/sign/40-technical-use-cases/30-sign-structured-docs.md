---
centered: true
rank: 3
---

# Signing structured docs

A structured document in the context of Box Sign is a document that includes specific tags that can be recognized by the Box Sign API. These tags are used to place the signature properties, like name, date, signature, etc., in the document, associated with a specific signer.

This allows your app to handle a dynamic generated document that is ready to be signed, which has a couple of advantages:

* The document can be dynamically generated, and the signature properties can be added to the document before creating the signature request, effectively bypassing the document preparation step.

* The document format can be handled outside Box Sign templates, allowing higher flexibility and integration with external document management systems.

## Anatomy of a structured document

Here is an example of a structured document:

![Using tags in a word document](images/sing-structured-tags-sample.png)

In the sample above `[[c|1]]` means a checkbox assigned to signer 1, and `[[s|1]]` means a signature pad assigned to signer 1. Notice how the signature pad is using font size 48 to reserve space vertically for the signature.

The `[[t|1|id:tag_full_name|n:enter your complete name]]` means a name tag assigned to signer 1, with the label `enter your complete name`, and using an id of `tag_full_name`.

Check out this support note for a complete description of all the tags available.

Setting the tags to the same color as the background will make them invisible, but they will still be there.

The number in the tags refer to the signer number, so `[[c|1]]` is the checkbox for signer 1, `[[c|2]]` is the checkbox for signer 2, and so on, NOT the signing order.

Tag 0 is reserved for the sender, which always exist. So even if the sender does not need to input any data into the document, the other signers must start with 1.

## Create a signature request from a structured document

This is the same as creating a signature request for an unstructured document. You just need to, at minimum, specify the document, the receiving folder and the email of the `signer`.

Since the structured document already contains the signature properties details and location, we can bypass the document preparation.

Consider this method:

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```python

def create_sign_request_structured(
    client: Client, file_id: str, signer_email: str
) -> SignRequest:
    """Create a sign request with structured data"""

    # Sign request params
    source_file = FileBase(id=file_id, type=FileBaseTypeField.FILE)
    parent_folder = FolderMini(
        id=SIGN_DOCS_FOLDER, type=FolderBaseTypeField.FOLDER
    )
    signer = SignRequestCreateSigner(signer_email)

    # Create a sign request
    sign_request = client.sign_requests.create_sign_request(
        signers=[signer],
        parent_folder=parent_folder,
        source_files=[source_file],
    )

    return sign_request

def main():
    ...

    # Create a sign request with structured data
    sign_request = create_sign_request_structured(
        client, STRUCTURED_DOC, SIGNER_A
    )
    check_sign_request(sign_request)    

```

</Tab>
</Tabs>

Resulting in:

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```yaml

Simple sign request: 6878e048-e9bd-4fb1-88c6-8e502783e8d0
  Status: converting
  Signers: 2
    final_copy_reader: ...@gmail.com
    signer: YOUR_EMAIL+a@gmail.com
  Prepare url: None

```

</Tab>
</Tabs>

If we go to the `signer` email inbox, open the email from Box Sign, click on the `Review and Sign` button, we'll see the document with the signature properties in place:

![Document with the properties in place](images/sign-structured-signing-document.png)

After completing the process the signed document looks like this:

![Signed document](images/sign-structured-doc-finished.png)


## Pre-populate the signature attributes

If we have an external id in the document tags we can use it to pre-populate their values. For example, we have a tag with the id tag_full_name we can use it to pre-populate the name of the signer.

Consider this method:

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```python

def create_sign_request_structured_with_prefill(
    client: Client, file_id: str, signer_name, signer_email: str
) -> SignRequest:
    """Create a sign request with structured data"""

    # Sign request params
    source_file = FileBase(id=file_id, type=FileBaseTypeField.FILE)
    parent_folder = FolderMini(
        id=SIGN_DOCS_FOLDER, type=FolderBaseTypeField.FOLDER
    )
    signer = SignRequestCreateSigner(signer_email)

    # tags
    tag_full_name = SignRequestPrefillTag(
        document_tag_id="tag_full_name",
        text_value=signer_name,
    )

    # Create a sign request
    sign_request = client.sign_requests.create_sign_request(
        signers=[signer],
        parent_folder=parent_folder,
        source_files=[source_file],
        prefill_tags=[tag_full_name],
    )

    return sign_request

def main():
    ...

    # Create a sign request with name pre populate
    sign_request_pre_pop = create_sign_request_structured_with_prefill(
        client, STRUCTURED_DOC, "Rui Barbosa", SIGNER_A
    )
    check_sign_request(sign_request_pre_pop)    

```

</Tab>
</Tabs>

Resulting in:

<Tabs>
<Tab title='cURL'>
    
```json
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```yaml

Simple sign request: 7b86e46c-72ba-4568-a6ff-787077cca007
  Status: converting
  Signers: 2
    final_copy_reader: ...@gmail.com
    signer: YOUR_EMAIL+a@gmail.com
  Prepare url: None

```

</Tab>
</Tabs>

And the document now has the name pre-populated:

![Document ready for sign with the name pre-populated](images/sign-structure-name-pre-pop.png)

## Extract information from a signed document

Lets say we want to extract the name of the signer, and the other properties from the signed document. This is useful if you need to tie the information from the sign request back into your systems.

Lets create a method to extract the information from the signed request:

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```python

def check_sign_request_by_id(client: Client, sign_request_id: str):
    """Check sign request by id"""
    sign_request = client.sign_requests.get_sign_request_by_id(sign_request_id)

    print(f"\nSimple sign request: {sign_request.id}")
    print(f"  Status: {sign_request.status.value}")

    print(f"  Signers: {len(sign_request.signers)}")
    for signer in sign_request.signers:
        print(f"    {signer.role.value}: {signer.email}")
        for input in signer.inputs:
            content_type = input.content_type
            value = None

            if content_type == SignRequestSignerInputTypeField.CHECKBOX:
                value = input.checkbox_value
            elif content_type == SignRequestSignerInputTypeField.TEXT:
                value = input.text_value
            elif content_type == SignRequestSignerInputTypeField.DATE:
                value = input.date_value

            print(
                f"      {input.type.value}: {value if value is not None else '<other>'}"
            )

    print(f"  Prepare url: {sign_request.prepare_url}")

def main():
    ...

    # Latest sign request
    LATEST_SIGN_REQUEST = "7b86e46c-72ba-4568-a6ff-787077cca007"
    check_sign_request_by_id(client, LATEST_SIGN_REQUEST)    

```

</Tab>
</Tabs>

Resulting in:

<Tabs>
<Tab title='cURL'>
    
```json
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```yaml

Simple sign request: 7b86e46c-72ba-4568-a6ff-787077cca007
  Status: signed
  Signers: 2
    final_copy_reader: ...@gmail.com
    signer: YOUR_EMAIL+a@gmail.com
      checkbox: True
      text: Rui Barbosa
      date: 2023-11-15
      signature: <other>
  Prepare url: None

```

</Tab>
</Tabs>

## Final thoughts

Structured documents are a great way to integrate with external document management systems, creating dynamic documents that are ready for signature.

If your document signature requirements have a lot of options, you can pre-populate these from another data source and save the user time. But please remember that the user who owns these properties can always change them.

The same way that after the document is signed you can extract the information from the signature request, which is useful if you need to tie it back into your systems.