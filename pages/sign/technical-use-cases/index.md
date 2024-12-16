---
centered: true
rank: 20
category_id: sign
subcategory_id: sign/20-technical-use-cases
is_index: true
id: sign/technical-use-cases
type: page
total_steps: 3
sibling_id: sign
parent_id: sign
next_page_id: ''
previous_page_id: sign/technical-use-cases/sign-structured-docs
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sign/20-technical-use-cases/index.md
---
# Technical use cases

In your application you will be signing different documents from many sources.
How can your application process such documents in order for them to be
recognized by the Box Sign service?

A signature request can have multiple requirements, or inputs, beyond the
traditional signature, such as name, date, and initials. These inputs
are called signature properties. The Box Sign service needs to know where to
place these inputs in the document, and how to recognize them.

The first step is to consider if the document has the necessary information for
the Box Sign service to recognize the signature properties.

If not, then the [document is unstructured][unstructured-docs], and should be
prepared before sending the signature request. This is called document
preparation, and is an extra step automatically created by the Box Sign service.

There are two other types of documents that already have the necessary
information for the Box Sign service to recognize the signature properties.
The [sign templates][sign-templates], managed in the Box application, and the
[structured documents][sign-structured-docs], which are dynamically generated
documents, containing specific tags representing the signature properties.

<Next>

Signing unstructured docs

</Next>

[unstructured-docs]: page://sign/technical-use-cases/sign-unstructured-docs
[sign-templates]: page://sign/technical-use-cases/sign-template
[sign-structured-docs]: page://sign/technical-use-cases/sign-structured-docs