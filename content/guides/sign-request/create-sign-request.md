---
rank: 4
---

# Create Sign Request

Creating a sign request entails: 

1. A file in Box requiring signature(s)
2. Document preparation
3. Selecting request options
4. Sending the sign request

At this time, only one file, `source_files`, can be signed per request and must
be uploaded to Box prior to creating a sign request.

## Document preparation

Preparing a document prior to sending a sign request allows developers to
specify add date, text, checkbox, and/or signature placeholders for signers. If
this is not done, the signer will recieve an uprepared document that
allows them to freely place signatures and fields.

Document preparation can be done via UI or tags.

### UI

Setting `is_document_preparation_needed` to `true` provides a `prepare_url` in
the response to then visit in your browser to complete preparation via UI. 

### Tags

Tags can be placed within the document itself and are useful if you want to use
the same document multiple times, but do not want to prepare the document each
time.

Tags need to start with `[[` and end with `]]`, with the tag data separated by a
pipe `|`. The first letter of the tag represents the tag type and must be one of
the following:

- `t` for text
- `d` for date
- `s` for signature
- `c` for checkbox

The second piece of data is an integer representing the index of the signer for
which the placeholder is intended. The numbers are used to make distinctions
between the signers and group multiple tags to one specific signer.

The sender is always the first email address added, which means the sender is
always `s|0`. If the sender does not need to add a signature or other fields, 
`s|0` will be assigned to the next signer.

Mismatches in the amount of declared placeholders and available signers are
silently ignored. The extra placeholders will not show up if more than the
amount of signers. If there are no placeholders for a signer, they will get an 
unprepared document. 

Tag modifiers are available to further customize tags. The following key/value
pairs can be used after the signer index.

<!-- markdownlint-disable line-length -->

| Modifier | Purpose                                   | Values                                                                      |
| -------- | ----------------------------------------- | --------------------------------------------------------------------------- |
| `r`      | makes a placeholder required              | `1`/`true` required, `0`/`false` not required                               |
| `m`      | makes a text placeholder multiline        | `1`/`true` multiline, `0`/`false` single line                               |
| `n`      | sets a label/name on a text placeholder   | a string                                                                    |
| `p`      | prefill text/date placeholders            | a string, `0`/`false` on a date placeholder to not prefill the current date |
| `id`     | assigns an external_id to the placeholder | an id                                                                       |

<!-- markdownlint-enable line-length -->

| Example                                            | Behavior                                           |
| -------------------------------------------------- | -------------------------------------------------- | 
| `[[c|0|r:1                                ]] `     | required checkbox                                  | 
| `[[c|0|r:0                                ]] `     | not required checkbox                              |
| `[[c|0|p:1                                ]] `     | a checkbox that is checked by default              |
| `[[d|0|n:Birth date|p:0                   ]] `     | a non-filled date date with the label 'Birth date' |

<Message type='tip'>
Changing the font size and adding spaces changes the size of the placeholder. 
Making the font color of tags white prevents them from being visible to signers.
We recommend ensuring there is proper spacing between tags and testing before
sending! 
</Message> 

### Signers

Signers can be specified in the API request and/or when using the UI. 

A signer is automatically created for the user associated with the Access Token
creating the sign request. However, their role is set to
`final_copy_reader` and therefore will not receive a request for signature.

## Request options

<Message type='warning'>
When creating sign requests we strongly discourage disabling dates, text,
emails, attachments, or uploaded signatures. These features were carefully
selected to optimize the usability of Box Sign.
</Message>

## Example document