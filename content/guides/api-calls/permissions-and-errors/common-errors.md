---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources:
  - client_error
alias_paths:
  - /docs/error-codes
  - /docs/detailed-error-messages
  - /docs
notes: |-
  Lazy copy of old docs. Needs rethinking.
---

<!-- alex disable failed -->

# Common Errors

The Box APIs uses [HTTP status codes][status-codes] to communicate if a request
has been successfully processed or not.

## Client error

Most client errors in the HTTP 4XX, and some server errors in the HTTP 5XX range
returns a standard client error JSON object.

```json
{
  "type": "error",
  "status": 400,
  "code": "bad_digest",
  "help_url": "http://developers.box.com/docs/#errors",
  "message": "The specified content-md5 did not match what we received",
  "request_id": "abcdef123456"
}
```

Please see the [Client Error resource](resource://client_error) for more details.

## Common error codes

Please check our [Developer Troubleshooting Articles][articles]
for solution to common errors encountered when working with the Box APIs.

### 400 Bad Request

<!-- markdownlint-disable line-length -->

|              |                                                                                                                                                                                                                                                                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Error**    | `bad_digest`                                                                                                                                                                                                                                                                                                                                                              |
| **Message**  | The specified `content-md5` did not match what we received                                                                                                                                                                                                                                                                                                                |
| **Solution** | While uploading a file, a `content-md5` header with the SHA-1 hash of the file can be supplied to ensure that the file is not corrupted in transit. The SHA-1 hash that was supplied in the request did not match what was received in the upload. Supply a valid SHA-1 hash of the uploaded file.                                                                        |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `bad_request`                                                                                                                                                                                                                                                                                                                                                             |
| **Message**  |                                                                                                                                                                                                                                                                                                                                                                           |  |
| **Solution** | Required parameters supplied in the API request are either missing or invalid. Check the extended error message in the response body for more details.                                                                                                                                                                                                                    |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `cannot_make_collaborated_subfolder_private`                                                                                                                                                                                                                                                                                                                              |
| **Message**  | Cannot move a collaborated folder to a private folder unless the new owner is explicitly specified                                                                                                                                                                                                                                                                        |
| **Solution** | Specify the ID of the user that the content should be transferred to by setting the `owned_by.id` field in the request.                                                                                                                                                                                                                                                   |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `collaborations_not_available_on_root_folder`                                                                                                                                                                                                                                                                                                                             |
| **Message**  | Root folder cannot be collaborated                                                                                                                                                                                                                                                                                                                                        |
| **Solution** | You cannot set collaborators on a user's root folder (folder ID 0). Use a different folder ID than the root folder.                                                                                                                                                                                                                                                       |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `cyclical_folder_structure`                                                                                                                                                                                                                                                                                                                                               |
| **Message**  | Folder move creates cyclical folder structure                                                                                                                                                                                                                                                                                                                             |
| **Solution** | The folder ID specified in the folder move would create a cyclical folder structure (for example moving a folder to a subfolder within itself). Change the folder ID for the folder move request.                                                                                                                                                                         |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `folder_not_empty`                                                                                                                                                                                                                                                                                                                                                        |
| **Message**  | Cannot delete – folder not empty                                                                                                                                                                                                                                                                                                                                          |
| **Solution** | Delete all content from the folder before attempting to delete it.                                                                                                                                                                                                                                                                                                        |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `invalid_collaboration_item`                                                                                                                                                                                                                                                                                                                                              |
| **Message**  | Item type must be specified and set to 'folder'                                                                                                                                                                                                                                                                                                                           |
| **Solution** | The `item.type` field of the collaboration item should be set to folder.                                                                                                                                                                                                                                                                                                  |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `invalid_grant`                                                                                                                                                                                                                                                                                                                                                           |
| **Message**  | Verify the authorization code is set correctly in your request, or your application likely needs to get a new authorization code.                                                                                                                                                                                                                                         |
| **Solution** | The authorization code supplied in the API request is missing or no longer valid. Possible solutions are to verify that the access token is added correctly in the request. If correctly set, the access token may have expired. Attempt to refresh the access token or fetch a new one.                                                                                  |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `invalid_grant`                                                                                                                                                                                                                                                                                                                                                           |
| **Message**  | Current date time must be before the expiration date time listed in the 'exp' claim.                                                                                                                                                                                                                                                                                      |
| **Solution** | This error occurs when the Unix time on your local machine and the Box server are out of sync. To fix this error, update the Unix time on your machine to match a synchronized time server, then try the request again.                                                                                                                                                   |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `invalid_limit`                                                                                                                                                                                                                                                                                                                                                           |
| **Message**  | Limit is not a valid number                                                                                                                                                                                                                                                                                                                                               |
| **Solution** | Add a valid numeric value for the supplied limit value.                                                                                                                                                                                                                                                                                                                   |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `invalid_offset`                                                                                                                                                                                                                                                                                                                                                          |
| **Message**  | Offset is not a valid number                                                                                                                                                                                                                                                                                                                                              |
| **Solution** | Add a valid numeric value for the supplied offset value.                                                                                                                                                                                                                                                                                                                  |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `invalid_request_parameters`                                                                                                                                                                                                                                                                                                                                              |
| **Message**  | Invalid input parameters in request                                                                                                                                                                                                                                                                                                                                       |
| **Solution** | Invalid parameters were sent in the API request. Check the API reference documentation for the correct request parameters that should be supplied for the API operation.                                                                                                                                                                                                  |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `invalid_status`                                                                                                                                                                                                                                                                                                                                                          |
| **Message**  | You can change the status only if the collaboration is pending                                                                                                                                                                                                                                                                                                            |
| **Solution** | The status of a collaboration can only be updated to accepted or rejected by the user specified in the `accessible_by` field when the current status is set to pending.                                                                                                                                                                                                   |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `invalid_upload_session_id`                                                                                                                                                                                                                                                                                                                                               |
| **Message**  | The upload session ID provided in the URL is not of a valid format.                                                                                                                                                                                                                                                                                                       |
| **Solution** | The session ID supplied when making a chunked upload API request was invalid. Use the same session ID from the session that was created.                                                                                                                                                                                                                                  |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `item_name_invalid`                                                                                                                                                                                                                                                                                                                                                       |
| **Message**  | Item name invalid                                                                                                                                                                                                                                                                                                                                                         |
| **Solution** | Verify that the file's name is valid. Box only supports file or folder names that are 255 characters or less. File names containing non-printable ASCII, "/" or "\", names with leading or trailing spaces, and the special names “.” and “..” are also unsupported.                                                                                                      |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `item_name_too_long`                                                                                                                                                                                                                                                                                                                                                      |
| **Message**  | Item name too long                                                                                                                                                                                                                                                                                                                                                        |
| **Solution** | Shorten the length of the name that is being supplied for the item. The maximum length of a file or folder name in Box is 255 characters or less.                                                                                                                                                                                                                         |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `password_reset_required`                                                                                                                                                                                                                                                                                                                                                 |
| **Message**  | User needs to reset password                                                                                                                                                                                                                                                                                                                                              |
| **Solution** | The user has not yet completed account [setup steps](https://community.box.com/t5/How-to-Guides-for-Admins/Adding-New-Users-to-Your-Box-Account/ta-p/175).                                                                                                                                                                                                                |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `requested_page_out_of_range`                                                                                                                                                                                                                                                                                                                                             |
| **Message**  | Requested representation page out of range                                                                                                                                                                                                                                                                                                                                |
| **Solution** | The range header supplied does not fit within the size of the specified item. Adjust the bounds to fit within the size of the item and try again.                                                                                                                                                                                                                         |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `requested_preview_unavailable`                                                                                                                                                                                                                                                                                                                                           |
| **Message**  | Requested preview unavailable                                                                                                                                                                                                                                                                                                                                             |
| **Solution** | The thumbnail size requested for the file is not valid. See the reference docs for the API operation for available format sizes.                                                                                                                                                                                                                                          |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `sync_item_move_failure`                                                                                                                                                                                                                                                                                                                                                  |
| **Message**  | Cannot move a synced item                                                                                                                                                                                                                                                                                                                                                 |
| **Solution** | The item is set to be synced by the Box sync clients and cannot be moved. A possible solution is to set the `sync_state` of the item to `not_synced`.                                                                                                                                                                                                                     |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `task_assignee_not_allowed`                                                                                                                                                                                                                                                                                                                                               |
| **Message**  | Assigner does not have sufficient privileges to assign task to assignee                                                                                                                                                                                                                                                                                                   |
| **Solution** | The user who is attempting to assign the task does not have the appropriate permissions to do so. Adjust the user permissions to allow the assignment of tasks.                                                                                                                                                                                                           |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `terms_of_service_required`                                                                                                                                                                                                                                                                                                                                               |
| **Message**  | User must accept custom terms of service before action can be taken                                                                                                                                                                                                                                                                                                       |
| **Solution** | The admin of your Box account has set custom terms of service and the user has not logged in to accept the terms yet. The user will need to accept the terms of service, or the admin will have to disable them, in order to proceed. More information is available [here](https://community.box.com/t5/How-to-Guides-for-Admins/Using-Custom-Terms-Of-Service/ta-p/237). |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `user_already_collaborator`                                                                                                                                                                                                                                                                                                                                               |
| **Message**  | User is already a collaborator                                                                                                                                                                                                                                                                                                                                            |
| **Solution** | The user that you are attempting to collaborate in on an item is already collaborated on that item. This request is not needed.                                                                                                                                                                                                                                           |
|              |                                                                                                                                                                                                                                                                                                                                                                           |
| **Error**    | `metadata_after_file_contents`                                                                                                                                                                                                                                                                                                                                            |
| **Message**  | Metadata is included after file contents in a file upload request.                                                                                                                                                                                                                                                                                                        |
| **Solution** | Include the file metadata before the file's contents.                                                                                                                                                                                                                                                                                                                     |

<!-- markdownlint-enable line-length -->

### 401 Unauthorized

<!-- markdownlint-disable line-length -->

|              |                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------- |
| **Error**    | `unauthorized`                                                                                |
| **Message**  | Unauthorized                                                                                  |
| **Solution** | Authorization token is not authorized, check extended error message in body for more details. |

<!-- markdownlint-enable line-length -->

### 403 Forbidden

<!-- markdownlint-disable line-length -->

|              |                                                                                                                                                                                                                                                                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Error**    | `access_denied_insufficient_permissions`                                                                                                                                                                                                                                                                                                                        |
| **Message**  | Access denied – insufficient permission                                                                                                                                                                                                                                                                                                                         |
|              | This error is typically produced when scopes that are needed for the API operation were not enabled. See [here](https://community.box.com/t5/Developer-Troubleshooting/API-Troubleshooting-403-quot-access-denied-insufficient/ta-p/48536) for solution information.                                                                                            |
|              |                                                                                                                                                                                                                                                                                                                                                                 |
| **Error**    | `access_denied_item_locked`                                                                                                                                                                                                                                                                                                                                     |
| **Message**  | Access denied – item locked                                                                                                                                                                                                                                                                                                                                     |
| **Solution** | You are attempting to access a locked item without appropriate permissions to access it. Unlock the item first, then try to access it again.                                                                                                                                                                                                                    |
|              |                                                                                                                                                                                                                                                                                                                                                                 |
| **Error**    | `access_from_location_blocked`                                                                                                                                                                                                                                                                                                                                  |
| **Message**  |                                                                                                                                                                                                                                                                                                                                                                 |
| **Solution** | You’re attempting to log in to Box from a location that has not been approved by your admin. Please talk to your admin to resolve this issue.                                                                                                                                                                                                                   |
|              |                                                                                                                                                                                                                                                                                                                                                                 |
| **Error**    | `file_size_limit_exceeded`                                                                                                                                                                                                                                                                                                                                      |
| **Message**  | File size exceeds the folder owner’s file size limit                                                                                                                                                                                                                                                                                                            |
| **Solution** | See [here](https://community.box.com/t5/How-to-Guides-for-Managing/Uploading-and-Downloading-Files-and-Folders/ta-p/18905#maxfilesize) for maximum file size limits based on account type.                                                                                                                                                                      |
|              |                                                                                                                                                                                                                                                                                                                                                                 |
| **Error**    | `forbidden`                                                                                                                                                                                                                                                                                                                                                     |
| **Message**  |                                                                                                                                                                                                                                                                                                                                                                 |
| **Solution** | Client does not have permission to upload to this session. Only the user who initiated the upload session may upload to it.                                                                                                                                                                                                                                     |
|              |                                                                                                                                                                                                                                                                                                                                                                 |
| **Error**    | `forbidden_by_policy`                                                                                                                                                                                                                                                                                                                                           |
| **Message**  | Access denied – Blocked by Shield Access Policy                                                                                                                                                                                                                                                                                                                 |
| **Solution** | Shield access policies applied on your enterprise have prevented this action. Contact your enterprise admin to adjust the applied Shield access policies.                                                                                                                                                                                          |
|              |                                                                                                                                                                                                                                                                                                                                                                 |
| **Error**    | `forbidden_by_policy`                                                                                                                                                                                                                                                                                                                                           |
| **Message**  | Access denied – Blocked by Shield Malware Detection Rule                                                                                                                                                                                                                                                                                                        |
| **Solution** | An active Shield malware detection rule prevents download or local editing of potentially malicious content, but preview and online editing remain available. Contact your enterprise admin to adjust the applied Shield policies.                                                                                                                                                                                                        |
|              |                                                                                                                                                                                                                                                                                                                                                                 |
| **Error**    | `incorrect_shared_item_password`                                                                                                                                                                                                                                                                                                                                |
| **Message**  |                                                                                                                                                                                                                                                                                                                                                                 |
| **Solution** | A password is required for the shared item, but it was either incorrect or not supplied.                                                                                                                                                                                                                                                                        |
|              |                                                                                                                                                                                                                                                                                                                                                                 |
| **Error**    | `storage_limit_exceeded`                                                                                                                                                                                                                                                                                                                                        |
| **Message**  | Account storage limit reached                                                                                                                                                                                                                                                                                                                                   |
| **Solution** | The storage limit of the account has been reached. Either [upgrade](https://community.box.com/t5/How-to-Guides-for-Billing/Upgrading-to-a-Business-or-Enterprise-Account/ta-p/25) your account or permanently delete content to continue. Content that is simply moved to the trash will still count towards the account total until it is permanently deleted. |
|              |                                                                                                                                                                                                                                                                                                                                                                 |
| **Error**    | `user_email_confirmation_required`                                                                                                                                                                                                                                                                                                                              |
| **Message**  | User needs to complete email confirmation                                                                                                                                                                                                                                                                                                                       |
| **Solution** | The user has not yet completed [steps](https://community.box.com/t5/How-to-Guides-for-Admins/Adding-New-Users-to-Your-Box-Account/ta-p/175) for email confirmation.                                                                                                                                                                                             |

<!-- markdownlint-enable line-length -->

### 404 Not Found

<!-- markdownlint-disable line-length -->

|              |                                                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| **Error**    | `not_found`                                                                                                                     |
| **Message**  |                                                                                                                                 |
| **Solution** | The resource could not be found. Check the extended error message in the response body for more details.                        |
|              |                                                                                                                                 |
| **Error**    | `not_trashed`                                                                                                                   |
| **Message**  | Item is not trashed                                                                                                             |
| **Solution** | The item that is to be permanently deleted is not in the trash. Send the item to the trash first.                               |
|              |                                                                                                                                 |
| **Error**    | `preview_cannot_be_generated`                                                                                                   |
| **Message**  | Preview cannot be generated                                                                                                     |
| **Solution** | You are not able to generate a preview thumbnail for the specified file.                                                        |
|              |                                                                                                                                 |
| **Error**    | `trashed`                                                                                                                       |
| **Message**  | Item is trashed                                                                                                                 |
| **Solution** | The item that is to be accessed is in the trash and unavailable for modification. Move the item out of the trash and try again. |

<!-- markdownlint-enable line-length -->

### 405 Method Not Allowed

<!-- markdownlint-disable line-length -->

|              |                                                                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Error**    | `method_not_allowed`                                                                                                                             |
| **Message**  | Method Not Allowed                                                                                                                               |
| **Solution** | The HTTP method used for the API operation is not allowed. Check the API reference documentation for the HTTP verb needed for the API operation. |

<!-- markdownlint-enable line-length -->

### 409 Conflict

<!-- markdownlint-disable line-length -->

|              |                                                                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Error**    | `conflict`                                                                                                                                                                                                                                                   |
| **Message**  | A resource with this value already exists                                                                                                                                                                                                                    |
| **Solution** | This error may be produced when the resource to be created already exists. Check the extended error message in the response body for more details.                                                                                                           |
|              |                                                                                                                                                                                                                                                              |
| **Error**    | `item_name_in_use`                                                                                                                                                                                                                                           |
| **Message**  | Item with the same name already exists                                                                                                                                                                                                                       |
| **Solution** | This error is produced when a resource with the same name already exists. Ensure that the resource name being added / modified is unique.                                                                                                                    |
|              |                                                                                                                                                                                                                                                              |
| **Error**    | `name_temporarily_reserved`                                                                                                                                                                                                                                  |
| **Message**  | The item name is reserved by another processing item. Wait and then retry the request, or wait and check the parent folder to see if the name is in use.                                                                                                     |
| **Solution** | Two duplicate requests have been submitted at the same time. Box acknowledges the first and reserves the name, but a second duplicate request arrives before the first request has completed. Allow the first request to complete before sending the second. |
|              |                                                                                                                                                                                                                                                              |
| **Error**    | `operation_blocked_temporary`                                                                                                                                                                                                                                |
| **Message**  | The operation is blocked by another ongoing operation                                                                                                                                                                                                        |
| **Solution** | This error is returned when trying to access a folder that is blocked by another folder operation, such as a move or copy. Try again at a later interval.                                                                                                    |
|              |                                                                                                                                                                                                                                                              |
| **Error**    | `recent_similar_comment`                                                                                                                                                                                                                                     |
| **Message**  | A similar comment has been made recently                                                                                                                                                                                                                     |
| **Solution** | A similar comment was recently made, and the API has flagged it as a potential duplicate. Verify that the comment was indeed made, or modify the comment content and try again.                                                                              |
|              |                                                                                                                                                                                                                                                              |
| **Error**    | `user_login_already_used`                                                                                                                                                                                                                                    |
| **Message**  | User with the specified login already exists                                                                                                                                                                                                                 |
| **Solution** | A user with the same email already exists. Either refer to the existing user or specify a different email.                                                                                                                                                   |

<!-- markdownlint-enable line-length -->

### 410 Gone

<!-- markdownlint-disable line-length -->

|              |                                                                                                                                                                                                                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Error**    | `session_expired`                                                                                                                                                                                                                                                                                                                              |
| **Message**  |                                                                                                                                                                                                                                                                                                                                                |
| **Solution** | The upload session associated with the given upload session ID has expired and can no longer be accessed.                                                                                                                                                                                                                                      |
|              |                                                                                                                                                                                                                                                                                                                                                |
| **Error**    | `upload_failed`                                                                                                                                                                                                                                                                                                                                |
| **Message**  |                                                                                                                                                                                                                                                                                                                                                |
| **Solution** | The upload session is in an unrecoverable failed state and cannot continue. This or other requests have resulted in the upload session reaching a bad state (for example parts overlapping). Possible situations where this may arise include when the maximum number of parts has been exceeded or when overlapping parts have been uploaded. |

<!-- markdownlint-enable line-length -->

### 411 Length Required

<!-- markdownlint-disable line-length -->

|              |                                                         |
| ------------ | ------------------------------------------------------- |
| **Error**    | `length_required`                                       |
| **Message**  | content-length header was required, but not provided.   |
| **Solution** | Supply a content-length header within your API request. |

<!-- markdownlint-enable line-length -->

### 412 Precondition Failed

<!-- markdownlint-disable line-length -->

|              |                                                                              |
| ------------ | ---------------------------------------------------------------------------- |
| **Error**    | `precondition_failed`                                                        |
| **Message**  | The resource has been modified. Please retrieve the resource again and retry |
| **Solution** | Check the extended error message in the response body for more details.      |
|              |                                                                              |
| **Error**    | `sync_state_precondition_failed`                                             |
| **Message**  | The resource has been modified. Please retrieve the resource again and retry |
| **Solution** | Check the extended error message in the response body for more details.      |

<!-- markdownlint-enable line-length -->

### 413 Request Entity Too Large

<!-- markdownlint-disable line-length -->

|              |                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Error**    | `request_entity_too_large`                                                                                                                 |
| **Message**  | Request Entity too Large                                                                                                                   |
| **Solution** | This error is produced when the size of the upload is more than the allowed maximum. Check the extended error message in the response body |

<!-- markdownlint-enable line-length -->

### 415 Unsupported Media Type

<!-- markdownlint-disable line-length -->

|              |                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **Error**    | `unsupported_media_type`                                                                                                         |
| **Message**  | Previews for `boxnote` files are not yet supported.                                                                              |
| **Solution** | This error is produced when requested an embed preview of a Box Note. Embedded previews are currently unsupported for Box Notes. |

<!-- markdownlint-enable line-length -->

### 429 Too Many requests

<!-- markdownlint-disable line-length -->

|              |                                                                                                                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Error**    | `rate_limit_exceeded`                                                                                                                                                                                                                                                            |
| **Message**  | Request rate limit exceeded, please try again later                                                                                                                                                                                                                              |
| **Solution** | The client is performing operations too quickly and has been rate limited. Client is advised to retry their request after the amount of time specified by the `retry-after` header. There are [four rate limits](g://api-calls/permissions-and-errors/rate-limits) to be aware of. |

<!-- markdownlint-enable line-length -->

### 500 Internal Service Error

<!-- markdownlint-disable line-length -->

|              |                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| **Error**    | `internal_server_error`                                                                                      |
| **Message**  | Internal Server Error                                                                                        |
| **Solution** | Client should retry using [exponential back-off strategy](https://en.wikipedia.org/wiki/Exponential_backoff) |

<!-- markdownlint-enable line-length -->

### 502 Bad Gateway

<!-- markdownlint-disable line-length -->

|              |                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| **Error**    | `bad_gateway`                                                                                                |
| **Message**  |                                                                                                              |
| **Solution** | Client should retry using [exponential back-off strategy](https://en.wikipedia.org/wiki/Exponential_backoff) |

<!-- markdownlint-enable line-length -->

### 503 Unavailable

<!-- markdownlint-disable line-length -->

|              |                                                                              |
| ------------ | ---------------------------------------------------------------------------- |
| **Error**    | `unavailable`                                                                |
| **Message**  | Unavailable                                                                  |
| **Solution** | Please check our [API status page](https://status.box.com/) for information. |

<!-- markdownlint-enable line-length -->

[status-codes]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
[articles]: https://community.box.com/t5/Developer-Troubleshooting/tkb-p/Developertroubleshooting
