---
rank: 1
---

# Create Box Sign Request

At a minimum, using the create sign request endpoint requires selecting a file
for signature, a destination folder for the signed document/signing log, and
designating signers. 

<Samples id='post_sign_requests' />

## Files

Each sign request begins with a file that needs to be signed. If the file does
not already exist in Box, it must be uploaded, in a separate request, prior to
creating the sign request. At this time, only one file can be signed per
request. This file ID is specified in the `source_files` body parameter.

<Message type='warning'>
The sender must have download privileges to the file in Box. Please review our
collaboration levels to ensure this requirement is met.
</Message>

Supported file types include:

- All [documents][documents]
- All [presentations][presentations]
- Images: `png`, `jpg`, `jpeg`, `tiff` only
- Text-based files: `.csv`, `.txt` only

All file types are converted to `.pdf` for the signature process, which can be
found in the `parent_folder` upon successfully sending a sign request. This
means that the final, signed document is a `.pdf` regardless of the original
file type. As each signer completes the request, Box Sign will automatically add
a new file version.

File size limits are determined by your account type. Please see our
[uploads guide][uploads] for more information. 

### Parent folder

The folder ID specified in the `parent_folder` body parameter determines the
destination of the final signed document and signing log. This folder cannot be
the All Files or root level, which is represented by folder ID `0`. 

## Signers

Each signer must be assigned a role:  signer, approver, or final copy reader.

If the user creating the sign request is not given a role, a signer with the
role `final_copy_reader` is automatically created. This means they only receive
a copy of the final, signed document and signing log.

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

Initially, only the first signer will receive a sign request email. Once the
first signer signs, the following user will receive a sign request email and so
on. Box Sign automatically adds a new version of the document to the
`parent_folder` as each user signs.  

If any signer declines, any remaining signers will not receive a sign request
email. The overall sign request is cancelled.

<ImageFrame noborder center shadow>
  ![Okta Dashboard](images/)
</ImageFrame>

## Document preparation

Preparing a document prior to sending a sign request allows developers to add
date, text, checkbox, and/or signature placeholders for signers. This can be
done via a UI or tags directly in the document. If this is not done, signers
receive an unprepared document and place signatures and fields at their own
discretion. 

Setting `is_document_preparation_needed` to `true` provides a `prepare_url` in
the response. Visiting this link in your browser allows you to complete document
preparation and send the request via UI. 

To learn more about document tags, please see our support article.

## Request options

<Message type='warning'>
When creating sign requests, we discourage disabling dates, text, emails,
attachments, or uploaded signatures. These features were carefully selected to
optimize the usability and experience of Box Sign.
</Message>

## Request status

- `converting`: The file is converting to a `.pdf` for the signing process after
  the sign request is sent
- `created`: If `document_preparation_is_needed` is set to true, but the
  `prepare_url` has not yet been visited
- `sent`: The sign request was successfully sent, but no signer has interacted
  with the sign request email 
- `viewed`: If there is only one signer, once that signer has clicked on
  **Review document** from the signing email or visited the signing URL. If
  there are multiple signers, once the first user clicked on Review document
  from the signing email or visited the signing URL.
- `signed`: All signers completed the sign request
- `cancelled`: If the sign request is cancelled via UI or API
- `declined`: If any signer declines the sign request
- `error_converting`: An issue was encountered while converting the file to a
  `.pdf`
- `error_sending`: An issue was encountered while sending the sign request
- `expired`: The date of expiration has passed with outstanding, incomplete
  signatures 

Encountering an error status requires creating a new sign request to retry.

[documents]: g://representations/supported-file-types/#documents
[presentations]: g://representations/supported-file-types/#presentations
[uploads]: g://uploads/direct