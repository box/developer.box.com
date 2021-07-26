---
rank: 1
---

# Create Box Sign Request

At a minimum, using the [create Box Sign request endpoint][create] requires
selecting a file for signature, a destination folder for the signed
document/[signing log][log], and designating signers. 

<Samples id='post_sign_requests' />

## Files

Each Box Sign request begins with a file that needs to be signed. If the file
does not already exist in Box, it must be [uploaded][upload], in a separate
API call, prior to creating the request. At this time, only one file can be
signed per request. This file ID is specified in the `source_files` body
parameter.

<Message type='warning'>
The sender must have download privileges to the file in Box. Please review our
[collaboration levels][collab] to ensure this requirement is met.
</Message>

Supported file types include:

- All [documents][documents]
- All [presentations][presentations]
- Images: `png`, `jpg`, `jpeg`, `tiff` only
- Text-based files: `.csv`, `.txt` only

All file types are converted to `.pdf` for the signature process. This converted
document can be found in the `parent_folder` upon successfully sending a
request. This means that the final, signed document is a `.pdf` regardless of
the original file type. As each signer completes the request, Box Sign will
automatically add a new file version.

File size limits are determined by your account type. Please see our
[uploads guide][uploads] for more information. 

## Parent folder

The folder ID specified in the `parent_folder` body parameter determines the
destination of the final signed document and [signing log][log]. This folder
cannot be the All Files or root level, which is represented by folder ID `0`. 

## Signers

Each signer must be assigned a [role][role]:  signer, approver, or final copy
reader.

If sender is not given a role, a signer with the role `final_copy_reader` is
automatically created. This means they only receive a copy of the final, signed
document and [signing log][log].

Signers do not need to have an existing Box account, nor create one, in order to
sign documents. Unlike other API endpoints, signers are invited by email address
and not Box `user_id`. 

<Message type='warning'> 
Box Sign will only attempt to send signing emails to the email addresses
provided for signers in the request. For Box users, this does not include email
aliases unless specified. Please double check to ensure all provided signer
email addresses are valid.
</Message>

## Multiple signers and signing order

Signing order is determined by ordering the provided `order` numbers from
smallest to largest. If two numbers are the same, signers will receive the
request at the same time.

Initially, only the signer(s) with the lowest assigned `order` number will
receive a Box Sign request email. Once they sign, the following user(s) will
an email and so on. Box Sign automatically adds a new version of the
document to the `parent_folder` as each user signs.  

If any signer declines, any remaining signers will not receive a Box Sign
request email. The overall request is declined.

<ImageFrame border center shadow>
  ![Multiple signer flow](images/multiple_signer_flow.png)
</ImageFrame>

## Document preparation

Preparing a document prior to sending a Box Sign request allows developers to
add date, text, checkbox, and/or signature placeholders for signers. This can be
done via a UI or [tags][tags] directly in the document. If this is not done,
signers receive an unprepared document and can place signatures and fields at
their own discretion. However, developers can leverage controls in the request
that allow them to turn on and off features for the unprepared document. 

Setting `is_document_preparation_needed` to `true` provides a `prepare_url` in
the response. Visiting this link in your browser allows you to complete document
preparation and send the request via UI. 

To learn more about document tags, please see our [support article][tags].

<Message type='warning'>
Prefill tags created in a template via the Box web app cannot be accessed from
the API.
</Message>

<ImageFrame border center shadow>
  ![Prepare options](images/prepare.png)
</ImageFrame>

## Request status

- `converting`: The file is converting to a `.pdf` for the signing process once
  the request is sent
- `created`: If `document_preparation_is_needed` is set to `true`, but the
  `prepare_url` has not yet been visited
- `sent`: The request was successfully sent, but no signer has
  interacted with it
- `viewed`: Once the first, or only, signer clicks on **Review document** in
  the signing email or visited the signing URL
- `signed`: All signers completed the request
- `cancelled`: If the request is cancelled via UI or API
- `declined`: If any signer declines the request
- `error_converting`: An issue was encountered while converting the file to a
  `.pdf`
- `error_sending`: An issue was encountered while sending the request
- `expired`: The date of expiration has passed with outstanding, incomplete
  signatures 

Encountering an error status requires creating a new sign request to retry.

<ImageFrame border center shadow>
  ![Status diagram](images/status.png)
</ImageFrame>

[upload]: e://post-files-content/
[documents]: g://representations/supported-file-types/#documents
[presentations]: g://representations/supported-file-types/#presentations
[uploads]: g://uploads/direct
[create]: e://post-sign-requests
[tags]: https://support.box.com/hc/en-us/articles/4404085855251-Creating-templates-using-tags
[log]: https://support.box.com/hc/en-us/articles/4404095202579-Viewing-the-signing-log
[role]: https://support.box.com/hc/en-us/articles/4404105660947-Roles-for-signers
[collab]: https://support.box.com/hc/en-us/articles/360044196413-Understanding-Collaborator-Permission-Levels
