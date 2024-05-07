---
rank: 2
alias_paths: []
---

# Chunked Uploads

The Chunked Upload API provides a way to reliably upload large files to Box by
chunking them into a sequence of parts that can be uploaded individually.

<!--alex ignore failed-->
By using this API the application uploads a file in part, allowing it to recover
from a failed request more reliably. It means an application only needs to
retry the upload of a single part instead of the entire file.

An additional benefit of chunked uploads is that parts can be uploaded
in parallel, allowing for a potential performance improvement.

## Overview

Chunked uploads require a sequence of API calls to be made.

1. **[Create an upload session][newsession]**: The application creates an upload session for a new file or new version of a file. The session defines the (new) name  of the file, its size, and the parent folder.
2. **[Upload parts][uploadparts]**: The application uploads the separate parts of the file as chunks.
3. **[Commit session][commit]**: The application commits the session, at which moment the integrity of the file is checked before it is placed in the location specified when the session was created.

<Message>
  Most of [the Box SDKs support chunked uploads][sdks] out of the Box, removing
  the complexity from the application code.
</Message>

## Restrictions

The Chunked Upload API is intended for large files with a minimum size of 20MB.
The API does not support uploads of files with a size smaller than this.

This API does not support re-uploading or overwriting of parts in a session.
Once a part has been uploaded, it is immutable.

The lifetime of an upload session is 7 days. During this time, the client can
upload parts at their own pace.

<!--alex ignore corruption-->
To avoid wasting resources, and avoid potential data corruption, client should
make sure that the underlying file has not been changed on disk since beginning
the upload.

[newsession]: g://uploads/chunked/create-session
[uploadparts]: g://uploads/chunked/upload-part
[commit]: g://uploads/chunked/commit-session
[sdks]: g://uploads/chunked/with-sdks
