---
centered: true
rank: 0
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

<Next>Signing unstructured docs</Next>

[unstructured-docs]:page://sign/technical-use-cases/sign-unstructured-docs
[sign-templates]:page://sign/technical-use-cases/sign-template
[sign-structured-docs]:page://sign/technical-use-cases/sign-structured-docs