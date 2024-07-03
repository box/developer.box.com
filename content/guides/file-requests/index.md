---
rank: 140
related_endpoints:
  - post_file_requests_id_copy
  - get_file_requests_id
  - put_file_requests_id
  - delete_file_requests_id
related_guides: []
required_guides: []
related_resources:
  - file_request
---

# File Requests

Box File Request gives you a fast and secure way to request files and
associated metadata from anyone.  Using a drag-and-drop graphic
interface, you can create a web form that enables you to:

* Securely request files from anyone, no matter whether they have a Box account, without adding collaborators on a folder.
* Solicit additional information with metadata form fields, which you can set as required/optional.
* Enable extra security and tracking with link settings.
* Kick off automated workflows using Box Relay.

The **File Request API** gives you the power to create new file requests
based on an existing file request, update file request settings, activate
and deactivate, and delete file requests programmatically.

## Use Cases

The File Request API is especially useful in situations where folders are
automatically created when a new case, project, or customer is created in an
external system. For each of these folders a file request can be automatically
generated, allowing customers and other users to upload documents to the
project.

For example.

* **Case management** - In this situation each customer support case has its own associated folder and a new file request can be sent out to a customer, requesting them to submit case related documents to the folder.
* **Project management** - In this situation each project has its own associated folder for each project defined in an external system. The API can be used to automatically create a **"Client Documents"** folder within this folder, and a link can be sent to the client to allow them to upload documents on demand.
* **Employee "drop" folder** - In this situation every new loan advisor in a bank has a personal folder in Box. To help them work with their clients a "drop" subfolder is automatically generated for them with an associated file request, allowing their clients to automatically upload documents to their advisor's personal folder.

## Limitations

Currently, the API only allows the creation of new file requests by copying
an existing file request associated to another folder. Please check our guide
to create a template folder with a template file request.
