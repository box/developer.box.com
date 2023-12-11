---
centered: true
rank: 2
---

# Signing using templates

A Box Sign template is a specific type of document that not only contains the 
text, but also the signature requirements and placement.

Essentially a Box Sign template is a document that is prepared for signing in 
advanced, and as such can be sent directly to the signer or signers.

Required fields include the signature pad, the full name, the date, and many 
more options.

These fields have an owner, meaning they are populated by the signer and can 
not be shared between them. They can be `mandatory` or `optional` , and be 
pre-populated by your application. However even if pre-populated, they can 
always be changed by the `signer`.

Within the Box web app, the template not only sets the signature fields, but 
also the number of signers, the order in which they sign, other roles and 
recipients such as `approver`, and `final_copy_recipient`, email notification 
settings, and a few more options.

For a complete set of options of the signature request please refer to the 
[Signature Request][signature-request] section.

These templates are exclusively created and managed in the Box Sign web app, 
and can be used to create signature requests using the API or the web app.

Lets start by creating a template.

## Creating a template

From the Box app navigate to the sign menu on the left, then select templates.

![Navigating to templates under Box Sign](images/sign-template-navigate.png)

Then, click on the New Template button, chose or upload document, from Box.

![Selecting a document when creating a template](images/sign-template-selecting-template.png)

For example, drag and drop a date, a name and a signature pad to the template, 
like so:

![Adding the signature, name, and date to the template](images/sign-template-signature-props.png)

Save the template.

## Identify the template

In order to work with templates in the Box Sign API we are going to need the 
`template_id` . Consider this method to list all the templates available to the user:

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```python

def sign_templates_list(client: Client):
    """List all sign templates"""
    sign_templates = client.sign_templates.get_sign_templates()
    print(f"\nSign templates: {len(sign_templates.entries)}")
    for sign_template in sign_templates.entries:
        print(f"  {sign_template.id} - {sign_template.name}")

def main():
    """Simple script to demonstrate how to use the Box SDK"""
    conf = ConfigOAuth()
    client = get_client_oauth(conf)

    user = client.users.get_user_me()
    print(f"\nHello, I'm {user.name} ({user.login}) [{user.id}]")

    sign_templates_list(client)

```

</Tab>
</Tabs>

Returns something similar to:

<Tabs>
<Tab title='cURL'>
    
```json
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```yaml

Hello, I'm Rui Barbosa [18622116055]

Sign templates: 1
  94e3815b-f7f5-4c2c-8a26-e9ba5c486031 - Simple-PDF.pdf

```

</Tab>
</Tabs>

## Creating a signature request from a template

The big advantage of using templates is that we do not need to worry about 
document preparation. Most of the signature options can be already set in the 
template it self.

This is how the flow would look like:

tk - flow diagram

Consider this example:

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```python

def create_sign_request(client: Client, template_id: str, signer_email: str):
    """Create sign request from template"""
    parent_folder = FolderMini(
        id=SIGN_DOCS_FOLDER, type=FolderBaseTypeField.FOLDER
    )

    signer = SignRequestCreateSigner(
        email=signer_email,
    )

    sign_request = client.sign_requests.create_sign_request(
        signers=[signer],
        parent_folder=parent_folder,
        template_id=template_id,
    )

    return sign_request

def main():
    ...

    # Create sign request from template
    sign_request = create_sign_request(client, TEMPLATE_SIMPLE, SIGNER_A)
    check_sign_request(sign_request)    

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

Simple sign request: b25674a2-540b-4201-ae18-a78f05ef1a9a
  Status: created
  Signers: 2
    final_copy_reader: ...@gmail.com
    signer: YOUR_EMAIL+a@gmail.com
  Prepare url: None

```

</Tab>
</Tabs>

The signer will receive an email from Box.com with a link to the document, and 
will be able to sign it. 

<Message size='small'>

Notice that there was no document preparation required, since the template 
already had the signature requirements, but the date was automatically 
populated with the current date.

</Message>

## Pre-populate the signature attributes
From a usability perspective, it is a good idea to pre-populate the inputs you 
require from your users, to reduce some of the friction.

<Message size='small'>

Please note that some inputs maybe intentionally left unpopulated. For example, 
suppose your legal department specifies that the “Yes, I agree” must be 
explicitly set by the signer.

</Message>

Using the Box app sign template editor, we can assign an `external_id` to each 
of the inputs, and have our app populate them from any data source.

Let’s implement this for the name.

Go back to the template design and add an id to the name field, like so:

![Assigning a tag id to a signature property input](images/sign-template-add-id-to-name-prop.png)

Save the template.

Let’s create a new method to pre-populate the name:

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```python

def create_sign_request_name_default(
    client: Client, template_id: str, signer_name, signer_email: str
):
    """Create sign request from template"""
    parent_folder = FolderMini(
        id=SIGN_DOCS_FOLDER, type=FolderBaseTypeField.FOLDER
    )

    signer = SignRequestCreateSigner(
        email=signer_email,
    )

    # tags
    tag_full_name = SignRequestPrefillTag(
        document_tag_id="signer_full_name",
        text_value=signer_name,
    )

    sign_request = client.sign_requests.create_sign_request(
        signers=[signer],
        parent_folder=parent_folder,
        prefill_tags=[tag_full_name],
        template_id=template_id,
    )

    return sign_request

def main():
    ...

    # Create sign request from template with name
    sign_request_name = create_sign_request_name_default(
        client, TEMPLATE_SIMPLE, "Signer A", SIGNER_A
    )
    check_sign_request(sign_request_name)    

```

Resulting in:

</Tab>
</Tabs>

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```yaml

Simple sign request: adab1740-eeba-4392-a3f5-defddc79c946
  Status: created
  Signers: 2
    final_copy_reader: ...@gmail.com
    signer: ...+a@gmail.com
  Prepare url: None

```

</Tab>
</Tabs>

Open the signer inbox and complete the sign request.

![Signing the document](images/sign-template-name-populated.png)

Notice that the name is now pre-populated. However the `signer` can still 
change it.

## Get more information about a template

We’ve seen that we can list the templates available to a user.

But we can also get more information about a specific template.

Let’s create a method that returns basic information of a template, but details 
all the signature requirements:

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```python

def sign_template_print_info(client: Client, template_id: str):
    sign_template = client.sign_templates.get_sign_template_by_id(template_id)
    print(f"\nSign template: {sign_template.id} - {sign_template.name}")
    print(f"  Signers: {len(sign_template.signers)}")
    for signer in sign_template.signers:
        print(f"    {signer.role.value}")
        if len(signer.inputs) > 0:
            print("      Tag ID\t Type\t Required")
        for input in signer.inputs:
            print(
                f"      {input.document_tag_id} {input.type.value} {input.is_required}"
            )

def main():
    ...

    # Print sign template details
    sign_template_print_info(client, TEMPLATE_SIMPLE)            

```

Resulting in:

</Tab>
</Tabs>

<Tabs>
<Tab title='cURL'>
    
```bash
    
```
    
</Tab>
<Tab title='Python Gen SDK'>

```yaml

Sign template: 94e3815b-f7f5-4c2c-8a26-e9ba5c486031 - Simple-PDF.pdf
  Signers: 2
    final_copy_reader
    signer
      Tag ID            Type      Required
      None              date      True
      signer_full_name  text      True
      None              signature True

```

</Tab>
</Tabs>

Notice that the `signer_full_name` is the `tag_id` we used to pre-populate the 
name.

## Final thoughts

Templates are a form of signing structured documents where the signature 
requirements are already defined, and placed on the document.

This not only keeps your contract management team happy, but it also creates a 
consistent and low level of effort process for your users.

Finally if your document signature requirements have a lot of options, you can 
pre-populate these from another data source and save the user some time. But 
please remember that the user who owns these properties can always change them.

There is no API entry point to create a template, so you will have to create 
and manage them manually from the Box app.

However there is a workaround for that, if the document already includes 
signature tags that can be used by the Box Sign engine. Take a look at our 
[Structured Docs][structured-docs] section for more information.

[signature-request]:page://sign/signature-request
[structured-docs]:page://sign/technical-use-cases/sign-structured-docs