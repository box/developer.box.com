---
rank: 2
alias_paths: []
---

# Chunked Uploads

The Chunked Upload API provides a way to reliably upload large files to Box by
chunking them into a sequence of parts that can be uploaded individually.

By using this API the application uploads a file in part, allowing it to recover
from a request failure more reliably. It means an application only needs to
retry the upload of a single part instead of the entire file.

An additional benefit of chunked uploads is that parts can be uploaded
in parallel, allowing for a potential performance improvement.

## Overview

Chunked uploads require a sequence of API calls to be made.

1. **Create an upload session**: The application creates an upload session
   for a [new file][newsession] or [new version of a file][newversion]. The
   session defines the (new) name  of the file, its size, and the parent folder.
2. **Upload parts**: The application [uploads the separate pars][uploadparts] of
   the file as chunks.
3. **Commit session:** The application [commits the session][commit], at which
   moment the integrity of the file is checked before it is placed in the
   location specified when the session was created.

## Restrictions

The Chunked Upload API is intended for large files with a minimum size of 20MB.
The API does not support uploads of files with a size smaller than this.

This API does not support re-uploading or overwriting of parts in a session.
Once a part has been uploaded, it is immutable.

The lifetime of an upload session is 7 days. During this time, the client can
upload parts at their own pace.

To avoid wasting resources, and avoid potential data corruption, client should
make sure that the underlying file has not been changed on disk since beginning
the upload.

[newsession]: g://uploads/chunked/create-session
[newversion]: g://uploads/chunked/create-session-for-existing-file
[uploadparts]: g://uploads/chunked/upload-part
[commit: g://uploads/chunked/commit-session
