---
rank: 7
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
notes: |-
  Lazy copy of old docs. Needs rethinking.
---

# Errors

The Box APIs uses [HTTP status codes][status-codes] to communicate if a request
has been successfully processed or not.

## Status codes

In general, the following rules can be applied to interpret the HTTP status
codes.

<!-- markdownlint-disable line-length -->

| HTTP Status Code |                                                                                                                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `200` to `299`   | Box received, understood, and accepted the API request. The request has either completed or is in the process of being completed.                                                                                             |
| `300` to `399`   | Box received, understood, and accepted the API request, yet the client must take further action in order to complete the request. Often this includes redirect to other URLs.                                                 |
| `400` to `499`   | An client error occurred when handling the request, often because the client either did not provide the right parameters, did not have access to the resources, or tried to perform an action that is otherwise not possible. |
| `500` to `599`   | Box received and accepted the request, but an error occurred within Box while handling it. These errors signify a problem with Box, not a problem with the client's request                                                   |

<!-- markdownlint-enable line-length -->

## Common error codes

### 400 Bad Request

<!-- markdownlint-disable line-length -->

| Error                                         | Message                                                                                                                           | Solution                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bad_digest`                                  | The specified `Content-MD5` did not match what we received                                                                        | While uploading a file, a `Content-MD5` header with the SHA-1 hash of the file can be supplied to ensure that the file is not corrupted in transit. The SHA-1 hash that was supplied in the request did not match what was received in the upload. Supply a valid SHA-1 hash of the uploaded file.                                                                        |
| `bad_request`                                 |                                                                                                                                   | Required parameters supplied in the API request are either missing or invalid. Check the extended error message in the response body for more details.                                                                                                                                                                                                                    |
| `cannot_make_collaborated_subfolder_private`  | Cannot move a collaborated folder to a private folder unless the new owner is explicitly specified                                | Specify the ID of the user that the content should be transferred to by setting the `owned_by.id` field in the request.                                                                                                                                                                                                                                                   |
| `collaborations_not_available_on_root_folder` | Root folder cannot be collaborated                                                                                                | You cannot set collaborators on a user's root folder (folder ID 0). Use a different folder ID than the root folder.                                                                                                                                                                                                                                                       |
| `cyclical_folder_structure`                   | Folder move creates cyclical folder structure                                                                                     | The folder ID specified in the folder move would create a cyclical folder structure (for example moving a folder to a sub-folder within itself). Change the folder ID for the folder move request.                                                                                                                                                                        |
| `folder_not_empty`                            | Cannot delete – folder not empty                                                                                                  | Delete all content from the folder before attempting to delete it.                                                                                                                                                                                                                                                                                                        |
| `invalid_collaboration_item`                  | Item type must be specified and set to 'folder'                                                                                   | The `item.type` field of the collaboration item should be set to folder.                                                                                                                                                                                                                                                                                                  |
| `invalid_grant`                               | Verify the authorization code is set correctly in your request, or your application likely needs to get a new authorization code. | The authorization code supplied in the API request is missing or no longer valid. Possible solutions are to verify that the access token is added correctly in the request. If correctly set, the access token may have expired. Attempt to refresh the access token or fetch a new one.                                                                                  |
| `invalid_grant`                               | Current date time must be before the expiration date time listed in the 'exp' claim.                                              | This error occurs when the Unix time on your local machine and the Box server are out of sync. To fix this error, update the Unix time on your machine to match a synchronized time server, then try the request again.                                                                                                                                                   |
| `invalid_limit`                               | Limit is not a valid number                                                                                                       | Add a valid numeric value for the supplied limit value.                                                                                                                                                                                                                                                                                                                   |
| `invalid_offset`                              | Offset is not a valid number                                                                                                      | Add a valid numeric value for the supplied offset value.                                                                                                                                                                                                                                                                                                                  |
| `invalid_request_parameters`                  | Invalid input parameters in request                                                                                               | Invalid parameters were sent in the API request. Check the API reference documentation for the correct request parameters that should be supplied for the API operation.                                                                                                                                                                                                  |
| `invalid_status`                              | You can change the status only if the collaboration is pending                                                                    | The status of a collaboration can only be updated to accepted or rejected by the user specified in the `accessible_by` field when the current status is set to pending.                                                                                                                                                                                                   |
| `invalid_upload_session_id`                   | The upload session ID provided in the URL is not of a valid format.                                                               | The session ID supplied when making a chunked upload API request was invalid. Use the same session ID from the session that was created.                                                                                                                                                                                                                                  |
| `item_name_invalid`                           | Item name invalid                                                                                                                 | Verify that the file's name is valid. Box only supports file or folder names that are 255 characters or less. File names containing non-printable ASCII, "/" or "\", names with leading or trailing spaces, and the special names “.” and “..” are also unsupported.                                                                                                      |
| `item_name_too_long`                          | Item name too long                                                                                                                | Shorten the length of the name that is being supplied for the item. The maximum length of a file or folder name in Box is 255 characters or less.                                                                                                                                                                                                                         |
| `password_reset_required`                     | User needs to reset password                                                                                                      | The user has not yet completed account [setup steps](https://community.box.com/t5/How-to-Guides-for-Admins/Adding-New-Users-to-Your-Box-Account/ta-p/175).                                                                                                                                                                                                                |
| `requested_page_out_of_range`                 | Requested representation page out of range                                                                                        | The range header supplied does not fit within the size of the specified item. Adjust the bounds to fit within the size of the item and try again.                                                                                                                                                                                                                         |
| `requested_preview_unavailable`               | Requested preview unavailable                                                                                                     | The thumbnail size requested for the file is not valid. See the reference docs for the API operation for available format sizes.                                                                                                                                                                                                                                          |
| `sync_item_move_failure`                      | Cannot move a synced item                                                                                                         | The item is set to be synced by the Box sync clients and cannot be moved. A possible solution is to set the `sync_state` of the item to `not_synced`.                                                                                                                                                                                                                     |
| `task_assignee_not_allowed`                   | Assigner does not have sufficient privileges to assign task to assignee                                                           | The user who is attempting to assign the task does not have the appropriate permissions to do so. Adjust the user permissions to allow the assignment of tasks.                                                                                                                                                                                                           |
| `terms_of_service_required`                   | User must accept custom terms of service before action can be taken                                                               | The admin of your Box account has set custom terms of service and the user has not logged in to accept the terms yet. The user will need to accept the terms of service, or the admin will have to disable them, in order to proceed. More information is available [here](https://community.box.com/t5/How-to-Guides-for-Admins/Using-Custom-Terms-Of-Service/ta-p/237). |
| `user_already_collaborator`                   | User is already a collaborator                                                                                                    | The user that you are attempting to collaborate in on an item is already collaborated on that item. This request is not needed.                                                                                                                                                                                                                                           |
| `metadata_after_file_contents`                | Metadata is included after file contents in a file upload request.                                                                | Include the file metadata before the file's contents.                                                                                                                                                                                                                                                                                                                     |

<!-- markdownlint-enable line-length -->

## 401 Unauthorized

<!-- markdownlint-disable line-length -->

| Error          | Message      | Solution                                                                                      |
| -------------- | ------------ | --------------------------------------------------------------------------------------------- |
| `unauthorized` | Unauthorized | Authorization token is not authorized, check extended error message in body for more details. |

<!-- markdownlint-enable line-length -->

## 403 Forbidden

<!-- markdownlint-disable line-length -->

| Error                                    | Message                                              | Solution                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access_denied_insufficient_permissions` | Access denied – insufficient permission              | This error is typically produced when scopes that are needed for the API operation were not enabled. See [here](https://community.box.com/t5/Developer-Troubleshooting/API-Troubleshooting-403-quot-access-denied-insufficient/ta-p/48536) for solution information.                                                                                            |
| `access_denied_item_locked`              | Access denied – item locked                          | You are attempting to access a locked item without appropriate permissions to access it. Unlock the item first, then try to access it again.                                                                                                                                                                                                                    |
| `access_from_location_blocked`           |                                                      | You’re attempting to log in to Box from a location that has not been approved by your admin. Please talk to your admin to resolve this issue.                                                                                                                                                                                                                   |
| `file_size_limit_exceeded`               | File size exceeds the folder owner’s file size limit | See [here](https://community.box.com/t5/How-to-Guides-for-Managing/Uploading-and-Downloading-Files-and-Folders/ta-p/18905#maxfilesize) for maximum file size limits based on account type.                                                                                                                                                                      |
| `forbidden`                              |                                                      | Client does not have permission to upload to this session. Only the user who initiated the upload session may upload to it.                                                                                                                                                                                                                                     |
| `incorrect_shared_item_password`         |                                                      | A password is required for the shared item, but it was either incorrect or not supplied.                                                                                                                                                                                                                                                                        |
| `storage_limit_exceeded`                 | Account storage limit reached                        | The storage limit of the account has been reached. Either [upgrade](https://community.box.com/t5/How-to-Guides-for-Billing/Upgrading-to-a-Business-or-Enterprise-Account/ta-p/25) your account or permanently delete content to continue. Content that is simply moved to the trash will still count towards the account total until it is permanently deleted. |
| `user_email_confirmation_required`       | User needs to complete email confirmation            | The user has not yet completed [steps](https://community.box.com/t5/How-to-Guides-for-Admins/Adding-New-Users-to-Your-Box-Account/ta-p/175) for email confirmation.                                                                                                                                                                                             |

<!-- markdownlint-enable line-length -->

## 404 Not Found

<!-- markdownlint-disable line-length -->

| Error                         | Message                     | Solution                                                                                                                        |
| ----------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `not_found`                   |                             | The resource could not be found. Check the extended error message in the response body for more details.                        |
| `not_trashed`                 | Item is not trashed         | The item that is to be permanently deleted is not in the trash. Send the item to the trash first.                               |
| `preview_cannot_be_generated` | Preview cannot be generated | You are not able to generate a preview thumbnail for the specified file.                                                        |
| `trashed`                     | Item is trashed             | The item that is to be accessed is in the trash and unavailable for modification. Move the item out of the trash and try again. |

<!-- markdownlint-enable line-length -->

## 405 Method Not Allowed

<!-- markdownlint-disable line-length -->

| Error                | Message            | Solution                                                                                                                                         |
| -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `method_not_allowed` | Method Not Allowed | The HTTP method used for the API operation is not allowed. Check the API reference documentation for the HTTP verb needed for the API operation. |

<!-- markdownlint-enable line-length -->

## 409 Conflict

<!-- markdownlint-disable line-length -->

| Error                         | Message                                                                                                                                                  | Solution                                                                                                                                                                                                                                                     |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `conflict`                    | A resource with this value already exists                                                                                                                | This error may be produced when the resource to be created already exists. Check the extended error message in the response body for more details.                                                                                                           |
| `item_name_in_use`            | Item with the same name already exists                                                                                                                   | This error is produced when a resource with the same name already exists. Ensure that the resource name being added / modified is unique.                                                                                                                    |
| `name_temporarily_reserved`   | The item name is reserved by another processing item. Wait and then retry the request, or wait and check the parent folder to see if the name is in use. | Two duplicate requests have been submitted at the same time. Box acknowledges the first and reserves the name, but a second duplicate request arrives before the first request has completed. Allow the first request to complete before sending the second. |
| `operation_blocked_temporary` | The operation is blocked by another ongoing operation                                                                                                    | This error is returned when trying to access a folder that is blocked by another folder operation, such as a move or copy. Try again at a later interval.                                                                                                    |
| `recent_similar_comment`      | A similar comment has been made recently                                                                                                                 | A similar comment was recently made, and the API has flagged it as a potential duplicate. Verify that the comment was indeed made, or modify the comment content and try again.                                                                              |
| `user_login_already_used`     | User with the specified login already exists                                                                                                             | A user with the same email already exists. Either refer to the existing user or specify a different email.                                                                                                                                                   |

<!-- markdownlint-enable line-length -->

## 410 Gone

<!-- markdownlint-disable line-length -->

| Error             | Solution                                                                                                                                                                                                                                                                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `session_expired` | The upload session associated with the given upload session ID has expired and can no longer be accessed.                                                                                                                                                                                                                                      |
| `upload_failed`   | The upload session is in an unrecoverable failed state and cannot continue. This or other requests have resulted in the upload session reaching a bad state (for example parts overlapping). Possible situations where this may arise include when the maximum number of parts has been exceeded or when overlapping parts have been uploaded. |

<!-- markdownlint-enable line-length -->

## 411 Length Required

<!-- markdownlint-disable line-length -->

| Error             | Message                                               | Solution                                                |
| ----------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| `length_required` | Content-Length header was required, but not provided. | Supply a content-length header within your API request. |

<!-- markdownlint-enable line-length -->

## 412 Precondition Failed

<!-- markdownlint-disable line-length -->

| Error                            | Message                                                                      | Solution                                                                |
| -------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `precondition_failed`            | The resource has been modified. Please retrieve the resource again and retry | Check the extended error message in the response body for more details. |
| `sync_state_precondition_failed` | The resource has been modified. Please retrieve the resource again and retry | Check the extended error message in the response body for more details. |

<!-- markdownlint-enable line-length -->

## 413 Request Entity Too Large

<!-- markdownlint-disable line-length -->

| Error                      | Message                  | Solution                                                                                                                                   |
| -------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request_entity_too_large` | Request Entity too Large | This error is produced when the size of the upload is more than the allowed maximum. Check the extended error message in the response body |

<!-- markdownlint-enable line-length -->

## 415 Unsupported Media Type

<!-- markdownlint-disable line-length -->

| Error                    | Message                                             | Solution                                                                                                                         |
| ------------------------ | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `unsupported_media_type` | Previews for `boxnote` files are not yet supported. | This error is produced when requested an embed preview of a Box Note. Embedded previews are currently unsupported for Box Notes. |

<!-- markdownlint-enable line-length -->

## 429 Too Many requests

<!-- markdownlint-disable line-length -->

| Error                 | Message                                             | Solution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rate_limit_exceeded` | Request rate limit exceeded, please try again later | The client is performing operations too quickly and has been rate limited. Client is advised to retry their request after the amount of time specified by the Retry-After header. There are four rate limits to be aware of. There is a limit of 10 API calls per second per user. There is also a limit of 4 uploads per second per user, 6 searches per second per user up to 60 searches per minute, and 12 searches per second per enterprise. To solve this error, consider either backing off when rate limits are hit using an exponential back off method, caching information when possible to reduce necessary calls, or imposing throttling on calls made from the application to Box. |

<!-- markdownlint-enable line-length -->

[status-codes]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
