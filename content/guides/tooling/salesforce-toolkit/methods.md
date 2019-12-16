---
rank: 1
related_endpoints: []
related_guides: 
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
---

<!-- alex disable failed -->

# Methods and Operations

## Toolkit Details

Class Name: `box.Toolkit`

## Instance Variables

### `mostRecentError`

String to indicate the most recent error that occurred when calling instance
methods.

The presence of this string does not mean the operation failed. It is possible
the error was recoverable; however, the lack of a value in this string does
indicate the operation was successful.

### `Enum CollaborationType`

Enum to indicate the [type of collaboration][collab-type].

Possible values: `EDITOR`, `VIEWER`, `PREVIEWER`, `UPLOADER`, `COOWNER`,
`OWNER`, `PREVIEWERUPLOADER`, or `VIEWERUPLOADER`

## Static Methods

### `deleteServiceUserAssociation`

Method to clear association between Service Account and Box for Salesforce
integration. This can be used to change the service account if an incorrect one
is being used.

Parameters:

* None

Returns:

* `true` if the user's account existed and was deleted.
* `false` if the user's account was not deleted for any reason (including
because it didn't exist).

### `deleteUserAssociation`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `userId` | id | The Id of the user whose credentials are to be cleared. |

<!-- markdownlint-enable line-length -->

Returns:

* `true` if the user's account existed and was deleted.
* `false` if the user's account was not deleted for any reason (including
because it didn't exist).

## Instance Methods (Constructors / Destructors)

### `box.Toolkit()`

Parameters:

* None

### `commitChanges`

Treat this method as a destructor for the `box.Toolkit()` method.

<Message type='warning'>
  This method is critical. It must be called after all folder / collaboration
  operations are complete. Every time. No Exceptions.
</Message>

Since Salesforce doesn't allow callouts after database updates / inserts /
deletes have occurred, the Toolkit class maintains some collections of objects
to be inserted once all callout operations are complete. If this method is not
called, those objects won't be in the database, and the tables that keep track
of user / record / folder associations will be out of sync and will need some
advanced debugging to fix.

Parameters:

* None

Returns:

* `Void`

## Generic Methods

The Box for Salesforce Developer Toolkit provides a global method that accepts
an [HttpRequest][sf-httprequest] object as a parameter and returns an
[HttpResponse][sf-httpresponse] object. This method will utilize the
authentication details of the Service Account to make callouts to Box's APIs,
allowing you to focus on the business logic of your integration.

### `sendRequest`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | [HttpRequest][sf-httprequest] | An HttpRequest object with a set endpoint and method. |

<!-- markdownlint-enable line-length -->

Returns:

* An [HttpResponse][sf-httpresponse] object with the response details from
calling Box's APIs.
* `Toolkit.BoxApiException` if there is any missing information from the
HttpRequest input.
* `null` if there was an issue getting the authentication details for the
Service Account. In this case, check `mostRecentError`.

## File Operations

### `createFileFromAttachment`

<Message type='notice'>
  Available in version 3.46 and above.

  Salesforce has a String length limit of 6 million characters. Due to string
  bloat in the base64 encoding/decoding process, this results in an effective
  file size limit of 4.3 megabytes.
</Message>

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `att` | `Attachment` | The attachment to be converted into a File in Box. |
| `fileNameOverride` | `string` | Optional - Name of the new file. If no value is passed in, the name of the attachment is used. |
| `folderIdOverride` | `string` | Optional - Box folder id to place this attachment in. If no value is passed in, the file will be placed in the folder associated with the record that is the `parentId` of the attachment. If the record-specific folder doesn't exist, it will be created. |
| `accessToken` | `string` | Optional - if `accessToken` is sent, that value is used for the Box API call. Otherwise, the default account credentials are used. |

<!-- markdownlint-enable line-length -->

Returns:

* `string` returned is the id of the Box file that was created.
* `null` if there was an error. In this case, check `mostRecentError`.

### `getObjectFolderByRecordId`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recordId` | `id` | Salesforce record id whose root folder id you want to get. |

<!-- markdownlint-enable line-length -->

Returns:

* `string` returned is the Box folder id of the object root folder for the
record id passed in.

## Folder Operations

### `getRootFolderId`

Parameters:

* None

Returns:

* `string` returned is the Box folder id of the Salesforce root folder.

### `getObjectFolderByRecordId`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recordId` | `id` | Salesforce record id whose root folder id you want to get. |

<!-- markdownlint-enable line-length -->

Returns:

* `string` returned is the Box folder id of the object root folder for the
record id passed in.

### `getFolderUrl`

* This method gets the embed widget URL for a particular record so customers
can use their own embed logic if desired.
* This method respects seamless login settings so the URL will automatically
log the user in if seamless login is enabled.

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recordId` | `id` | Salesforce record id whose root folder id you want to get. |
| `isMobileContext` | `boolean` | Boolean to indicate whether the URL should be mobile (true) or not (false). |

<!-- markdownlint-enable line-length -->

Returns:

* `string` returned is a URL that points to the folder associated with the
Salesforce record Id passed. This URL is for the Box Embed Widget and can be
embedded in any Visualforce page.

### `createObjectFolderForRecordId`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recordId` | `id` | Salesforce record id whose root folder id you want to get. |

<!-- markdownlint-enable line-length -->

Returns:

* `string` returned is the Box folder Id of the root folder that was created.
* If the root folder already existed, the value returned is the Box folder id
of the root folder that already existed.

### `createFolder`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `folderName` | `string` | Name of the folder to be created. Folder names are subject to some restrictions. [See here for more details.](endpoint://post_folders) |
| `parentFolderId` | `string` | Parent Box folder this folder will be created in. |
| `accessToken` | `string` | Optional - If `accessToken` is sent, that value is used for the Box API call,; otherwise, the default service account credentials are used. |

<!-- markdownlint-enable line-length -->

Returns:

* `string` returned is the Box folder id of the folder that was created.
* `null` is returned if a folder is not created. In this case, check
`mostRecentError` for details.

### `createFolderForRecordId`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recordId` | `id` | Salesforce record id that a Box folder will be created for. |
| `folderNameOverride` | `string` | By default, the record's name will be the folder name. If you want to name it something else, send that value here. |
| `optCreateRootFolder` | `boolean` | Boolean to indicate whether to create the object root folder if it doesn't exist. If false is sent and the root folder does not exist, the call will fail. |

<!-- markdownlint-enable line-length -->

Returns:

* `string` returned is the Box folder id of the folder that was created.
* `null` is returned if a folder is not created. In this case, check
`mostRecentError` for details.
* If the Salesforce record was already associated with a Box folder, the
existing Box folder id is returned.

### `moveFolder`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `folderId` | `string` | Box folder Id of the folder to be moved. |
| `newParentFolderId` | `string` | Box folder Id of the folder that will be the new parent folder. |
| `accessToken` | `string` | Optional - If `accessToken` is sent, that value is used for the Box API call. Otherwise, the default service account credentials are used. |

<!-- markdownlint-enable line-length -->

Returns:

* `true` if the folder was moved successfully.
* `false` if the folder was not moved successfully. Check `mostRecentError` for details.

## Folder Association Methods

### `getFolderAssociationsByRecordId`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recordId` | `id` | Salesforce record id that the folder mapping entries returned are related to. |

<!-- markdownlint-enable line-length -->

Returns:

* List returned is a collection of all folder mapping entries associated with
this record.
* Generally, it will be an empty list if no folder mapping entries exist, but
under some circumstances, it could be `null`.

### `getFolderIdByRecordId`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recordId` | `id` | Salesforce record id whose folder id you wish to get. |

<!-- markdownlint-enable line-length -->

Returns:

* `string` returned is the Box folder id associated with the Salesforce record
id passed in.

### `getRecordIdByFolderId`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `folderId` | `string` | Box folder id. |

<!-- markdownlint-enable line-length -->

Returns:

* `id` returned is the Salesforce record id associated with the Box folder id
passed in.

### `createFolderAssociation`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recordId` | `id` | Salesforce record Id that is being associated with a box folder. |
| `folderId` | `string` | Box folder Id being associated with a Salesforce record. |

<!-- markdownlint-enable line-length -->

Returns:

* `boxFRUPc` object - The FRUP object returned will be `null` if there was an
error (check `mostRecentError`). Upon calling the `commitChanges` method, this
FRUP entry will be inserted into the database. This method ensures consistency
with other folder associations by not allowing the same folder to be associated
with multiple records or vice versa.

## Collaboration Methods

<Message type='warning'>
  Collaborations created by the Box for Salesforce Developer Toolkit will not
  send collaboration emails to collaborators. Only the service account used for
  the Box for Salesforce integration will receive a collaboration email.
</Message>

### `createCollaboration`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `folderId` | `string` | Box folder id to create a collaboration on. |
| `boxUserId` | `string` | Box user id to be collaborated (either `boxUserId` or `emailAddress` is required but not both). |
| `emailAddress` | `box.Toolkit.CollaborationType` | Email address of the box user to be. |
| `collabType` | `string` | Type of collaboration (see the `CollaborationType` enum definition). |
| `accessToken` | `string` | Optional - If sent, this value is used for authentication for the box API call; if `null`, the service account credentials are used. |

<!-- markdownlint-enable line-length -->

Returns:

* `string` returned is the id of the box collaboration that was created.
* `null` returned if there was an error. In this case, check `mostRecentError`.

### `createCollaborationOnRecord`

<!-- markdownlint-disable line-length -->

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `userId` | `id` | Salesforce user id to be collaborated. |
| `recordId` | `id` | Salesforce record id of the record folder to be collaborated on. |
| `collabType` | `box.Toolkit.CollaborationType` | Type of collaboration (see the `CollaborationType` enum definition). |
| `optCreateFolder` | `boolean` | Boolean to indicate whether to create the Box folder associated for the Salesforce record id if it does not already exist. This also creates the root folder if it did not already exist. If set to `false` and the folder does not already exist, the call will fail. |

<!-- markdownlint-enable line-length -->

Returns:

* `string` returned is the id of the Box collaboration that was created.
* `null` returned if there was an error. In this case, check `mostRecentError`.

[collab-type]: https://community.box.com/t5/Collaborate-By-Inviting-Others/Understanding-Collaborator-Permission-Levels/ta-p/144
[sf-httprequest]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httprequest.htm
[sf-httpresponse]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse
