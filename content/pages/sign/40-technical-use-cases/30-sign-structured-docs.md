---
centered: true
rank: 3
---

# Signing structured docs

A structured document in the context of Box Sign is a document that includes specific tags that can be recognized by the Box Sign API. These tags are used to place the signature properties, like name, date, signature, etc., in the document, associated with a specific signer.

This allows your app to handle a dynamic generated document that is ready to be signed, which has a couple of advantages:

* The document can be dynamically generated, and the signature properties can be added to the document before creating the signature request, effectively bypassing the document preparation step.

* The document format can be handled outside Box Sign templates, allowing higher flexibility and integration with external document management systems.