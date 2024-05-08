---
rank: 6
related_endpoints:
  - get-sign-templates
  - get-sign-templates-id
related_guides:
  - box-sign/create-sign-request
category_id: box-sign
subcategory_id: null
is_index: false
id: box-sign/sign-templates
type: guide
total_steps: 7
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign/embedded-sign-client
previous_page_id: box-sign/suppress-sign-notifications
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/sign-templates.md
---
# Create Sign Request with Sign Template

The Sign Request API allows you to use a predefined Box Sign
template when creating a sign request.
The template includes placeholders
that are automatically populated with data
when creating the request.

## Create Template

Start with creating a Box Sign template
that includes `text`, `date`,
and `signature` fields you will need for
you request.

See the [template guides][docuprep] guide
for detailed instructions.

## Get the Template ID

To send a sign request, you need to pass the ID
of the template you want to use.
List the templates to find the `template_id`.

<Samples id='get_templates' >

</Samples>

The response is similar to the following one
(abbreviated for guide purposes).
For the full response example, see
[Box Sign template API][template].

You can also learn more about the specific
parameters in the [Create Sign Request][signrequest] guide.

```json
"entries": [
  {
    "id": "6ae28666-03c4-4ac1-80db-06a90d3b1361",
    "name": "Contract.pdf",
    "parent_folder": {
      "id": "157064745449",
      "etag": "0",
      "type": "folder",
      "sequence_id": "0",
      "name": "My Sign Requests"
    },
    "source_files": [
      {
        "id": "1216382236853",
        "etag": "0",
        "type": "file",
        "sequence_id": "0",
        "sha1": "ca9c75cda0d5e3c3c9b0a1e6d42cb5e29a211ab6",
        "file_version": {
          "id": "1327286673653",
          "type": "file_version",
          "sha1": "ca9c75cda0d5e3c3c9b0a1e6d42cb5e29a211ab6"
        }
      }
    ],
    "signers": [
      {
        "email": "",
        "label": "reader",
        "public_id": "4Z8QZZV4",
        "role": "final_copy_reader",
        "is_in_person": false,
        "order": 1,
        "inputs": [...]
      },
      {
        "email": "",
        "label": "signer1",
        "public_id": "4Z8QZZV4",
        "role": "signer",
        "is_in_person": false,
        "order": 1,
        "inputs": [...]
      },
      {
        "email": "",
        "label": "signer2",
        "public_id": "13VK8794",
        "role": "signer",
        "is_in_person": false,
        "order": 1,
        "inputs": [
          {
            "document_tag_id": "signer2_full_name",
            "id": "da431975-55c5-4629-86ae-3fb12dda1386",
            "type": "text",
            "text_value": null,
            "is_required": true,
            "content_type": "full_name",
            ...
          },
          {
            "document_tag_id": null,
            "id": "b5a76a22-8d48-456e-a012-22a12fc91eb7",
            "type": "signature",
            ...
          },
          {
            "document_tag_id": null,
            "id": "7e0cc4ee-b878-4739-afde-acbf69b117b2",
            "type": "date",
            "date_value": null,
            ...
          }
        ],
      }
    ]
    ...
  }
]
```

## Create the sign request

Follow these steps to [create sign request][signrequest] using a template:

1. In the request body, provide the `template_id`:

    ```json
    {
      "template_id": "6ae28666-03c4-4ac1-80db-06a90d3b1361",
      "parent_folder": {
        "id": "123456789",
        "etag": "0",
        "type": "folder",
        "sequence_id": "0",
        "name": "My Sign Requests"
      },
      ...
    }
    ```

2. Add the signer email addresses and roles:

    ```json
    {
      "template_id": "6ae28666-03c4-4ac1-80db-06a90d3b1361",
      "parent_folder": {
        "id": "157064745449",
        "etag": "0",
        "type": "folder",
        "sequence_id": "0",
        "name": "My Sign Requests"
      },
      "signers": [
        {
          "email": "signer1@sample.com",
          "role": "signer"
        },
        {
          "email": "signer2@sample.com",
          "role": "signer"
        }
      ]
    }
    ```

3. Add the `prefill_tags` to populate the fields.

    <Message>

Make sure the signer order is the same as the one
displayed on the template. If the template had `signer1`
first and then `signer2`, the `POST` request must reflect
the same order to assign the proper signers.

</Message>

```json
{
  "template_id": "6ae28666-03c4-4ac1-80db-06a90d3b1361",
  "parent_folder": {
    "id": "123456789000",
    "etag": "0",
    "type": "folder",
    "sequence_id": "0",
    "name": "My Sign Requests"
  },
  "signers": [
    {
      "email": "signer1@sample.com",
      "role": "signer"
    },
    {
      "email": "signer2@sample.com",
      "role": "signer"
    }
  ],
  "prefill_tags": [
    {
      "document_tag_id": "signer1_full_name",
      "text_value": "Aaron Levie"
    },
    {
      "document_tag_id": "signer2_full_name",
      "text_value": "Albert Einstein"
    }
  ]
}
```

4. Send the `POST` request. The response will be similar to the following:

    ```json
    {
      "is_document_preparation_needed": false,
      ...
      "signers": [
        {
          "email": "reader@sample.com",
          "role": "final_copy_reader",
        },
        {
          "email": "signer1@sample.com",
          "role": "signer",
        },
        {
          "email": "signer2@sample.com",
          "role": "signer",
        }
      ],
      "id": "d02fefd2-15fa-431f-a127-2b4525616ae6",
      "prefill_tags": [
        {
          "document_tag_id": "signer1_full_name",
          "text_value": "Aaron Levie",
        },
        {
          "document_tag_id": "signer2_full_name",
          "text_value": "Albert Einstein",
        }
      ],
      "source_files": [],
      "parent_folder": {
        "id": "123456789000",
        "type": "folder",
        "name": "My Sign Requests"
      },
      "name": "Contract.pdf",
      "type": "sign-request",
      "status": "created",
      "sign_files": {
        "files": [
          {
            "id": "123456789",
            "type": "file",
            "name": "Contract.pdf",
          }
        ],
        "is_ready_for_download": true
      },
      "template_id": "6ae28666-03c4-4ac1-80db-06a90d3b1361"
    }
    ```

[signrequest]: e://post-sign-requests
[docuprep]: https://support.box.com/hc/en-us/articles/4404094944915-Creating-templates
[parentfolder]: g://box-sign/create-sign-request#parent-folder
[signers]: g://box-sign/create-sign-request#signers
[template]: e://get-sign-templates#response-example