---
rank: 260
alias_paths: []
---

# Uploads

The Box API supports two distinct methods of file upload. The [direct file
upload API][direct] supports files up to 50MB in size and sends all the binary
data to the Box API in 1 API request.

The [chunked upload APIs][chunked] support files from 20MB in size and allow an
application to upload the file in parts, allowing for more control to catch any
errors and retry parts individually.

<Message type='tip'>
To upload files to the Archive folder, you need to first enable the [Global
Content Manager][GCM] (GCM) scope in the Developer Console.
</Message>

## Upload limits

Upload limits are dictated by the type of account of the authenticated user.
More information can be found [in our community article on this topic][fsizes].

## Preflight check

The Pre-flight check API allows an application to verify that a file will be
accepted by Box before it uploads any bytes. It can both be used for new files,
as well as uploading new versions of existing files.

<CTA to='g://uploads/check'>
  Learn more about pre-flight checks
</CTA>

## Upload domain

Uploads to Box happen via a different domain (`upload.box.com`) than regular API
calls. This is something to keep in mind when writing your own upload code. All
the Box SDKs will take care of choosing the right domain for the right API call.

[direct]: g://uploads/direct
[chunked]: g://uploads/chunked
[GCM]: g://api-calls/permissions-and-errors/scopes
<!-- i18n-enable localize-links -->
[fsizes]: https://support.box.com/hc/en-us/articles/360043697314-Understand-the-Maximum-File-Size-You-Can-Upload-to-Box
<!-- i18n-disable localize-links -->
