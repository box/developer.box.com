---
rank: 1
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
---

# Methods and Operations

## Toolkit Details

Class Name: `box.Toolkit`

## Instance Variables

### `mostRecentError`

String to indicate the most recent error that occurred when calling instance
methods.

The presence of this string does not mean the operation did not succeed. It is
possible the error was recoverable; however, the lack of a value in this string
does indicate the operation was successful.

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

- None

Returns:

- `true` if the user's account existed and was deleted.
- `false` if the user's account was not deleted for any reason (including because it didn't exist).

### `deleteUserAssociation`

| Parameter | Type | Description                                             |
| --------- | ---- | ------------------------------------------------------- |
| `userId`  | id   | The Id of the user whose credentials are to be cleared. |

Returns:

- `true` if the user's account existed and was deleted.
- `false` if the user's account was not deleted for any reason (including because it didn't exist).

## Instance Methods - Constructors, Destructors

### `box.Toolkit()`

Parameters:

- None

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

- None

Returns:

- `Void`

### `commitChanges` with platform event

Treat this method as a destructor for the `box.Toolkit()` method.

This method is very similar to the `commitChanges` above. However, it uses
a platform event to commit changes to the database to perform DML statements
in a different transaction and avoid governor limits in some scenarios.

| Parameter          | Type      | Description                                                                   |
| ------------------ | --------- | ----------------------------------------------------------------------------- |
| `usePlatformEvent` | `boolean` | `true` if you're using a platform event. `false` to call the original method. |

Returns:

- `Void`

## Generic Methods

The Box for Salesforce Developer Toolkit provides a global method that accepts
an [HttpRequest][sf-httprequest] object as a parameter and returns an
[HttpResponse][sf-httpresponse] object. This method will utilize the
authentication details of the Service Account to make callouts to Box's APIs,
allowing you to focus on the business logic of your integration.

### `sendRequest`

| Parameter | Type                          | Description                                           |
| --------- | ----------------------------- | ----------------------------------------------------- |
| `request` | [HttpRequest][sf-httprequest] | An HttpRequest object with a set endpoint and method. |

Returns:

- An [HttpResponse][sf-httpresponse] object with the response details from calling Box's APIs.
- `Toolkit.BoxApiException` if there is any missing information from the HttpRequest input.
- `null` if there was an issue getting the authentication details for the Service Account. In this case, check `mostRecentError`.

## File Operations

### `createFileFromAttachment`

<Message type='notice'>
  Available in version 3.46 and above.

Salesforce has a String length limit of 6 million characters. Due to string
bloat in the base64 encoding/decoding process, this results in an effective
file size limit of 4.3 megabytes for synchronous Apex and 8.6 megabytes for
asynchronous Apex.
</Message>

| Parameter          | Type         | Description                                                                                                                                                                                                                                                 |
| ------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `att`              | `Attachment` | The attachment to be converted into a File in Box.                                                                                                                                                                                                          |
| `fileNameOverride` | `string`     | Optional - Name of the new file. If no value is passed in, the name of the attachment is used.                                                                                                                                                              |
| `folderIdOverride` | `string`     | Optional - Box folder id to place this attachment in. If no value is passed in, the file will be placed in the folder associated with the record that is the `parentId` of the attachment. If the record-specific folder doesn't exist, it will be created. |
| `accessToken`      | `string`     | Optional - if `accessToken` is sent, that value is used for the Box API call. Otherwise, the default account credentials are used.                                                                                                                          |

Returns:

- `string` returned is the id of the Box file that was created.
- `null` if there was an error. In this case, check `mostRecentError`.

### `getObjectFolderByRecordId`

| Parameter  | Type | Description                                                |
| ---------- | ---- | ---------------------------------------------------------- |
| `recordId` | `id` | Salesforce record id whose root folder id you want to get. |

Returns:

- `string` returned is the Box folder id of the object root folder for the record id passed in.

## Folder Operations

### `getRootFolderId`

Parameters:

- None

Returns:

- `string` returned is the Box folder id of the Salesforce root folder.

### `getObjectFolderByRecordId`

| Parameter  | Type | Description                                                |
| ---------- | ---- | ---------------------------------------------------------- |
| `recordId` | `id` | Salesforce record id whose root folder id you want to get. |

Returns:

- `string` returned is the Box folder id of the object root folder for the record id passed in.

### `getFolderUrl`

- This method gets the embed widget URL for a particular record so customers can use their own embed logic if desired.
- This method respects seamless login settings so the URL will automatically log the user in if seamless login is enabled.

| Parameter         | Type      | Description                                                                 |
| ----------------- | --------- | --------------------------------------------------------------------------- |
| `recordId`        | `id`      | Salesforce record id whose root folder id you want to get.                  |
| `isMobileContext` | `boolean` | Boolean to indicate whether the URL should be mobile (true) or not (false). |

Returns:

- `string` returned is a URL that points to the folder associated with the Salesforce record Id passed. This URL is for the Box Embed Widget and can be embedded in any Visualforce page.

### `createObjectFolderForRecordId`

| Parameter  | Type | Description                                                |
| ---------- | ---- | ---------------------------------------------------------- |
| `recordId` | `id` | Salesforce record id whose root folder id you want to get. |

Returns:

- `string` returned is the Box folder Id of the root folder that was created.
- If the root folder already existed, the value returned is the Box folder id of the root folder that already existed.

### `createFolder`

| Parameter        | Type     | Description                                                                                                                                 |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `folderName`     | `string` | Name of the folder to be created. Folder names are subject to some restrictions. [See here for more details.](endpoint://post_folders)      |
| `parentFolderId` | `string` | Parent Box folder this folder will be created in.                                                                                           |
| `accessToken`    | `string` | Optional - If `accessToken` is sent, that value is used for the Box API call,; otherwise, the default service account credentials are used. |

Returns:

- `string` returned is the Box folder id of the folder that was created.
- `null` is returned if a folder is not created. In this case, check `mostRecentError` for details.

### `createFolderForRecordId`

| Parameter             | Type      | Description                                                                                                                                                |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `recordId`            | `id`      | Salesforce record id that a Box folder will be created for.                                                                                                |
| `folderNameOverride`  | `string`  | By default, the record's name will be the folder name. If you want to name it something else, send that value here.                                        |
| `optCreateRootFolder` | `boolean` | Boolean to indicate whether to create the object root folder if it doesn't exist. If false is sent and the root folder does not exist, the call will fail. |

Returns:

- `string` returned is the Box folder id of the folder that was created.
- `null` is returned if a folder is not created. In this case, check `mostRecentError` for details.
- If the Salesforce record was already associated with a Box folder, the existing Box folder id is returned.

### `moveFolder`

| Parameter           | Type     | Description                                                                                                                                |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `folderId`          | `string` | Box folder Id of the folder to be moved.                                                                                                   |
| `newParentFolderId` | `string` | Box folder Id of the folder that will be the new parent folder.                                                                            |
| `accessToken`       | `string` | Optional - If `accessToken` is sent, that value is used for the Box API call. Otherwise, the default service account credentials are used. |

Returns:

- `true` if the folder was moved successfully.
- `false` if the folder was not moved successfully. Check `mostRecentError` for details.

### `getUrlForFolder`

| Parameter  | Type | Description       |
| ---------- | ---- | ----------------- |
| `recordId` | `id` | ID of the record. |

Returns:

- `pageReference` object with provided URL.
- `null` if the parameters are incorrect.

### `createFolderForRecordIdFromTemplate`

| Parameter             | Type      | Description                                                           |
| --------------------- | --------- | --------------------------------------------------------------------- |
| `recordId`            | `id`      | Salesforce record ID.                                                 |
| `templateFolderId`    | `string`  | Source folder which should be the template.                           |
| `folderNameOverride`  | `string`  | Name override of the new folder.                                      |
| `optCreateRootFolder` | `boolean` | Flag that determines if a root folder is created if it doesn't exist. |

Returns:

- Newly created `folder Id`.
- `null` if the parameters are incorrect.

## Folder Association Methods

### `getFolderAssociationsByRecordId`

| Parameter  | Type | Description                                                                   |
| ---------- | ---- | ----------------------------------------------------------------------------- |
| `recordId` | `id` | Salesforce record id that the folder mapping entries returned are related to. |

Returns:

- List returned is a collection of all folder mapping entries associated with this record.
- Generally, it will be an empty list if no folder mapping entries exist, but under some circumstances, it could be `null`.

### `getFolderIdByRecordId`

| Parameter  | Type | Description                                           |
| ---------- | ---- | ----------------------------------------------------- |
| `recordId` | `id` | Salesforce record id whose folder id you wish to get. |

Returns:

- `string` returned is the Box folder id associated with the Salesforce record id passed in.

### `getRecordIdByFolderId`

| Parameter  | Type     | Description    |
| ---------- | -------- | -------------- |
| `folderId` | `string` | Box folder id. |

Returns:

- `id` returned is the Salesforce record id associated with the Box folder id passed in.

### `createFolderAssociation`

| Parameter  | Type     | Description                                                      |
| ---------- | -------- | ---------------------------------------------------------------- |
| `recordId` | `id`     | Salesforce record Id that is being associated with a box folder. |
| `folderId` | `string` | Box folder Id being associated with a Salesforce record.         |

Returns:

- `box__FRUP__c` object - The FRUP object returned will be `null` if there was an error (check `mostRecentError`). Upon calling the `commitChanges` method, this FRUP entry will be inserted into the database. This method ensures consistency with other folder associations by not allowing the same folder to be associated with multiple records or vice versa.

## Collaboration Methods

<Message type='warning'>
  Collaborations created by the Box for Salesforce Developer Toolkit will not
  send collaboration emails to collaborators. Only the service account used for
  the Box for Salesforce integration will receive a collaboration email.
</Message>

### `createCollaboration`

| Parameter      | Type                            | Description                                                                                                                          |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `folderId`     | `string`                        | Box folder id to create a collaboration on.                                                                                          |
| `boxUserId`    | `string`                        | Box user id to be collaborated (either `boxUserId` or `emailAddress` is required but not both).                                      |
| `emailAddress` | `box.Toolkit.CollaborationType` | Email address of the box user to be.                                                                                                 |
| `collabType`   | `string`                        | Type of collaboration (see the `CollaborationType` enum definition).                                                                 |
| `accessToken`  | `string`                        | Optional - If sent, this value is used for authentication for the box API call; if `null`, the service account credentials are used. |

Returns:

- `string` returned is the id of the box collaboration that was created.
- `null` returned if there was an error. In this case, check `mostRecentError`.

### `createCollaborationOnRecord`

| Parameter         | Type                            | Description                                                                                                                                                                                                                                                            |
| ----------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`          | `id`                            | Salesforce user id to be collaborated.                                                                                                                                                                                                                                 |
| `recordId`        | `id`                            | Salesforce record id of the record folder to be collaborated on.                                                                                                                                                                                                       |
| `collabType`      | `box.Toolkit.CollaborationType` | Type of collaboration (see the `CollaborationType` enum definition).                                                                                                                                                                                                   |
| `optCreateFolder` | `boolean`                       | Boolean to indicate whether to create the Box folder associated for the Salesforce record id if it does not already exist. This also creates the root folder if it did not already exist. If set to `false` and the folder does not already exist, the call will fail. |

Returns:

- `string` returned is the id of the Box collaboration that was created.
- `null` returned if there was an error. In this case, check `mostRecentError`.

<!-- i18n-enable localize-links -->

[collab-type]: https://support.box.com/hc/en-us/articles/360044196413-Understanding-Collaborator-Permission-Levels
[sf-httprequest]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httprequest.htm
[sf-httpresponse]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse

<!-- i18n-disable localize-links -->

### `editCollaboration`

| Parameter     | Type     | Description                          |
| ------------- | -------- | ------------------------------------ |
| `collabId`    | `string` | Collaboration ID                     |
| `collabType`  | `enum`   | `Box.Toolkit.CollaborationType` enum |
| `accessToken` | `string` |                                      |

Returns:

- Boolean based on the transaction success.
- `false` if the parameters are incorrect.

### `deleteCollaboration`

| Parameter     | Type     | Description      |
| ------------- | -------- | ---------------- |
| `collabId`    | `string` | Collaboration ID |
| `accessToken` | `string` |                  |

Returns:

- Boolean based on the transaction success.
- `false` if the parameters are incorrect.

## Metadata

<Message type='info'>
  Check the `toolkit.mostRecentError` value for detailed error responses
  for all the methods.
</Message>

### `getBoxMetadataByFolderId`

This method calls the [get metadata instance on folder endpoint][1].

| Parameter      | Type     | Description                                                                 |
| -------------- | -------- | --------------------------------------------------------------------------- |
| `folderId`     | `string` | The ID of the Box Folder for which you want to create metadata.             |
| `scope`        | `string` | The scope of the metadata template. Value is one of `[global, enterprise]`. |
| `template_key` | `string` | The name of the metadata template.                                          |

Returns:

- `FolderMetadata` record associated with this folder, scope, and template key. You can find the custom values in `keyValuePairs` variable of this object.
- `null`, if:
    - the parameters are incorrect,
    - access to the folder is missing,
    - metadata cascade policy is not found.

### `createBoxMetadataByFolderId`

This method calls the [create metadata instance on folder][2] endpoint.

| Parameter       | Type                 | Description                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`      | `string`             | ID of the Box Folder for which you want to create metadata.                                                                                                                                                                                                                                                                                                 |
| `scope`         | `string`             | Scope of the metadata template. Value is one of [`global`, `enterprise`].                                                                                                                                                                                                                                                                                   |
| `template_key`  | `string`             | Name of the metadata template.                                                                                                                                                                                                                                                                                                                              |
| `keyValuePairs` | `List<KeyValuePair>` | This class work as a map. Provide key/value pairs as a list, for the attributes to send to Box Metadata. The key/value mappings follow the same pattern as the [API][2]. Number types `'3000'`and multi select values such as `'Customer;Order'`are represented as string inputs in the `value` field, as regular metadata values seen in the code samples. |

Returns:

- Newly created `FolderMetadata` object.
- `null`, if:
    - the parameters are incorrect,
    - access to the folder is missing,
    - metadata cascade policy is not found.

### `updateBoxMetadataByFolderId`

Calls the [update metadata instance on folder][3] endpoint.

| Parameter      | Type                         | Description                                                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`     | `string`                     | ID of the Box folder for which you want to update metadata.                                                                                                                                                                                                                                                           |
| `scope`        | `string`                     | The scope of the metadata template. Value is one of [`global`, `enterprise`]                                                                                                                                                                                                                                          |
| `template_key` | `string`                     | The name of the metadata template.                                                                                                                                                                                                                                                                                    |
| `mdUpdates`    | `List<FolderMetadataUpdate>` | Metadata updates. Provide the operation, path, and value. The metadata update records follow the same pattern as the [API][3]. Number types (`3000`) and multi select values such as `Customer;Order` are represented as string inputs in the `value` field, just as the regular metadata values in the code samples. |

Returns:

- Updated `FolderMetadata` object.
- `null`, if:
    - the parameters are incorrect,
    - access to the folder is missing,
    - metadata cascade policy is not found.

### `deleteBoxMetadataFolderId`

This method call the [delete metadata instance from folder][4] endpoint.

| Parameter      | Type     | Description                                                                  |
| -------------- | -------- | ---------------------------------------------------------------------------- |
| `folderId`     | `string` | ID of the Box folder for which you want to update metadata.                  |
| `scope`        | `string` | The scope of the metadata template. Value is one of [`global`, `enterprise`] |
| `template_key` | `string` | The name of the metadata template.                                           |

Returns:

- Boolean based on the transaction success.
- `false` can be returned if parameters are incorrect parameters or metadata is not found.

### `getMetadataCascadePolicyById`

This method calls the [get metadata cascade policy from folder][5]
endpoint. As it requires an ID, you need to call the
`getMetadataCascadePoliciesByFolderId` method first.

| Parameter  | Type     | Description                                        |
| ---------- | -------- | -------------------------------------------------- |
| `policyId` | `string` | The ID of the cascade policy you want to retrieve. |

Returns:

- `MetadataCascadePolicy` object retrieved from Box.
- `null`, if:
    - the parameters are incorrect,
    - access to the folder is missing,
    - metadata cascade policy is not found.

### `getMetadataCascadePoliciesByFolderId`

This method retrieves the cascade policies by providing a folder ID and
calling the [get metadata cascade policies][6] endpoint.

| Parameter           | Type      | Description                                                                                                             | Required |
| ------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- | -------- |
| `folderId`          | `string`  | Specifies for which folder to return the policies. This can't be used on the root folder with ID 0.                     | Yes      |
| `paginationMarker`  | `string`  | Defines the position marker at which to begin returning results. This is used for marker-based pagination.              | No       |
| `Offset`            | `integer` | The offset of the item at which to begin the response.                                                                  | No       |
| `ownerEnterpriseId` | `string`  | Enterprise ID for which to find the metadata cascade policies. If not specified, it defaults to the current enterprise. | No       |

Returns:

- List of `MetadataCascadePolicy` objects retrieved from Box.
- `null`, if:
    - the parameters are incorrect,
    - access to the folder is missing,
    - metadata cascade policy is not found.

### `createMetadataCascadePolicy`

This method creates cascade policies by providing a Box folder ID, scope,
template key, and by calling the [post metadata cascade policies][7] endpoint.

| Parameter      | Type     | Description                                                                        |
| -------------- | -------- | ---------------------------------------------------------------------------------- |
| `folderId`     | `string` | ID of the Box folder for which you want to create the metadata cascade policy.     |
| `scope`        | `string` | The scope of the metadata cascade policy. Value is one of [`global`, `enterprise`] |
| `template_key` | `string` | The name of the template key.                                                      |

Returns:

- Newly generated `MetadataCascadePolicy`.
- `null`, if:
    - the parameters are incorrect,
    - access to the folder is missing,
    - metadata cascade policy details are not found.

### `deleteMetadataCascadePolicy`

This method deletes the cascade policies by providing a cascade policy
ID and calling the [delete metadata cascade policies ID][8] endpoint.

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| `policyId` | `string` | The ID of the cascade policy you want to delete. |

Returns:

- Boolean based on the transaction success.
- `false` is returned if parameters are incorrect, access to the folder is missing, or the metadata cascade policy is not found.

### `enableAppActivity`

This method enables the given folder for App Activities by applying
metadata on the folder and cascading it down.

| Parameter  | Type     | Description                                                     |
| ---------- | -------- | --------------------------------------------------------------- |
| `folderId` | `string` | The ID of the Box folder for which you want to delete metadata. |

Returns:

- Boolean based on the transaction success.
- `false` in case of incorrect parameters.

## Salesforce and Slack

### `getIntegrationMappings`

This toolkit method calls the [get integration mappings][9] endpoint to get the
existing mappings.

| Parameter       | Type   | Description                                                                          |
| --------------- | ------ | ------------------------------------------------------------------------------------ |
| `integration`   | String | `Slack` is currently the only supported value.                                       |
| `partnerItemId` | String | ID of the mapped item on the provided integration side. Example: a Slack channel ID. |

Returns:

- A list of `IntegrationMapping` objects,
- `null` is returned if there are incorrect parameters, the access is missing, or the integration mappings is not found.

### `createIntegrationMapping`

This toolkit method calls the [get integration mappings][9] endpoint to create
the mappings.

<Message type='notice'>
When you map to a Slack channel,
`access_management_disabled` is set to `FALSE` by default.
This causes an automatic removal of collaborators that are not part
of the Slack channel member list. Depending on how your organization
sets up sharing in Box, we recommend to either enable
`access_ management_disabled` to `TRUE` by using the
`setSlackChannelAccessManagementDisabled` method, or use [groups][12].
This ensures no users are removed, regardless of Slack settings.
Collaborations are added or removed from Slack when a file is uploaded
to a Slack channel.
</Message>

| Parameter     | Type                 | Description                                    |
| ------------- | -------------------- | ---------------------------------------------- |
| `integration` | String               | `Slack` is currently the only supported value. |
| `mapping`     | `IntegrationMapping` | Apex defined type `IntegrationMapping`.        |

Returns:

- Boolean based on the transaction success.

### `deleteIntegrationMapping`

This toolkit method calls the [delete integration mappings][10] endpoint to
delete a mapping.

| Parameter              | Type   | Description                                    |
| ---------------------- | ------ | ---------------------------------------------- |
| `integration`          | String | `Slack` is currently the only supported value. |
| `integrationMappingId` | String | Retrieved from `getIntegrationMappings`.       |

Returns:

- Boolean based on the transaction success.

### `mapSfdcRecordToSlackChannel`

This toolkit method uses the above integration mapping methods and
provides a wrapper with four different use cases:

1. If a mapping does not exist in Salesforce or Slack, it creates a folder under the Box for Salesforce folder structure, and an integration mapping to link it with the Slack channel.
2. If a mapping only exists from Salesforce, it continues to use the folder and does not change the location. Creates an integration mapping to link it with the Slack Channel.
3. If a mapping only exists from Slack, it continues to use the folder and create an FRUP record for the Salesforce record to use the existing folder. This folder is likely to be outside of the Salesforce root folder.
4. If Salesforce and Slack have existing mappings but are not related to each other, it throws an error through `Toolkit.mostRecentError` or within a flow action, stating that the mappings already exist.

This method/invocable is used in a flow template provided in the Box
for Salesforce package `Create Box Folder/Slack Channel Mapping`.

<Message type='notice'> When you map to a Slack channel,
`access_management_disabled` is set to `FALSE` by default.
This causes an automatic removal of collaborators that are not part
of the Slack channel member list. Depending on how your organization
sets up sharing in Box, we recommend to either enable
`access_ management_disabled` to `TRUE` by using the
`setSlackChannelAccessManagementDisabled` method, or use [groups][12].
This ensures no users are removed, regardless of Slack settings.
Collaborations are added or removed from Slack when a file is uploaded
to a Slack channel.
</Message>

| Parameter               | Type   | Description                                                                                                             |
| ----------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| `recordId`              | ID     | Salesforce record ID.                                                                                                   |
| `slackChanneld`         | String |                                                                                                                         |
| `slackWorkspaceOrOrgId` | String | If Box for Slack is installed org-wide, provide the Org ID (for example E1234567), or the Workspace ID (e.g. T5555555). |

Returns:

- Boolean based on the transaction success.

### `setSlackChannelAccessManagementDisabled`

This toolkit method calls the [put integration mappings][11] endpoint to update
the access management deactivated setting.

This method/invocable is used in a flow template provided in the Box
for Salesforce package `Create Box Folder/Slack Channel Mapping`.

| Parameter   | Type    | Description                                                                                                                                                                                                           |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `channelId` | String  |                                                                                                                                                                                                                       |
| `disabled`  | Boolean | Indicates whether or not a channel member access to the underlying Box item should be automatically managed. Depending on the type of the channel, access is managed through creating collaborations or shared links. |

Returns:

- Boolean based on the transaction success.

[1]: e://get-folders-id-metadata-id-id
[2]: e://post-folders-id-metadata-id-id
[3]: e://put-folders-id-metadata-id-id
[4]: e://delete-folders-id-metadata-id-id
[5]: e://get-metadata-cascade-policies-id
[6]: e://get-metadata-cascade-policies
[7]: e://post-metadata-cascade-policies
[8]: e://delete-metadata-cascade-policies-id
[9]: e://get-integration-mappings-slack
[10]: e://delete-integration-mappings-slack-id
[11]: e://put-integration-mappings-slack-id
[12]: https://support.box.com/hc/articles/360043694554-Creating-and-Managing-Groups
