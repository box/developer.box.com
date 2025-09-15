---
rank: 3
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/box-content-explorer
  - /docs/content-explorer
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/explorer
type: guide
total_steps: 17
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/explorer-metadata-v1
previous_page_id: embed/ui-elements/browser
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/explorer.md
---
# Content Explorer

The Box Content Explorer UI Element allows developers to embed a folder view of
content stored on Box in their desktop or mobile web application. The library
fetches information about a specified folder through the Box API and then
renders the content in a folder view, similar to the main Box web application.
Users can then navigate through the folder hierarchy and perform file operations
like rename, delete, and share.

Content Explorer comes with a metadata view that uses
metadata query to find files and folders based
on their metadata. The data is then displayed in the embedded view.

## Installation

[Learn how to install](g://embed/ui-elements/installation) Box UI elements
either through NPM or the Box CDN.

## Authentication

The UI Elements are designed in an authentication agnostic way so whether
you are using UI Elements for users who have Box accounts (Managed Users) or
non-Box accounts (App Users), UI Elements should work out of the box. The
reason for this is that UI Elements only expect a "token" to be passed in for
authentication, and Box provides two different ways to generate tokens - OAuth
and JWT.

<CTA to="g://authentication/select">

Learn about selecting an authentication method

</CTA>

## Sample HTML

```html
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="utf-8" />
        <title>Box Content Explorer Demo</title>

        <!-- Latest version of the explorer css for your locale -->
        <link
            rel="stylesheet"
            href="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/explorer.css" />
    </head>
    <body>
        <div class="container" style="height:600px"></div>
        <!-- Latest version of the explorer js for your locale -->
        <script src="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/explorer.js"></script>
        <script>
            var folderId = "123";
            var accessToken = "abc";
            var contentExplorer = new Box.ContentExplorer();
            contentExplorer.show(folderId, accessToken, {
                container: ".container",
            });
        </script>
    </body>
</html>
```

## Demo

<iframe height="560" scrolling="no" title="Box Content Explorer" src="//codepen.io/box-platform/embed/wdWWdN/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;" >

</iframe>

## API

```js
const { ContentExplorer } = Box;
const contentExplorer = new ContentExplorer();

/**
 * Shows the content explorer.
 *
 * @param {string} folderId - The root folder id
 * @param {string} accessToken - Box API access token
 * @param {Object} [options] - Options
 * @return {void}
 */
contentExplorer.show(folderId, accessToken, options);

/**
 * Hides the content explorer, removes all event listeners, and clears out the
 * HTML.
 *
 * @return {void}
 */
contentExplorer.hide();

/**
 * Clears out the internal in-memory
 * cache for the content explorer forcing
 * re-load of items via the API.
 *
 * @public
 * @return {void}
 */
contentExplorer.clearCache();

/**
 * Adds an event listener to the content explorer. Listeners should be added
 * before calling show() so no events are missed.
 *
 * @param {string} eventName - Name of the event
 * @param {Function} listener - Callback function
 * @return {void}
 */
contentExplorer.addListener(eventName, listener);

/**
 * Removes an event listener from the content explorer.
 *
 * @param {string} eventName - Name of the event
 * @param {Function} listener - Callback function
 * @return {void}
 */
contentExplorer.removeListener(eventName, listener);

/**
 * Removes all event listeners from the content explorer.
 *
 * @return {void}
 */
contentExplorer.removeAllListeners();
```

### Parameters

| Parameter     | Type   | Description                                                                                                                                                                      |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`    | String | Box Folder ID. This will be the ID of the folder you want to navigate. If you want to use the Box All Files folder, then use `0` as the `folderId`.                              |
| `accessToken` | String | Box API access token to use. This should have read/write access to the folder above. The value passed in for the token is assumed to never expire while the explorer is visible. |
| `options`     | Object | Optional options. See below for details. For example: `contentExplorer.show(FOLDER_ID, TOKEN, {canDelete: false})` would be used to hide the delete option.                      |

### Options

| Parameter              | Type     | Default                                                    | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------------------- | -------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container`            | String   | `document.body`                                            | CSS selector of the container in which the content explorer should be placed. Calling hide() will clear out this container.                                                                                                                                                                                                                         |
| `sortBy`               | String   | `name`                                                     | The initial sort by option for the content list. Value can be either `id`, `name`, `date` or `size`.                                                                                                                                                                                                                                                |
| `sortDirection`        | String   | `ASC`                                                      | The initial sort direction option for the content list. Value should be either `ASC` or `DESC`.                                                                                                                                                                                                                                                     |
| `logoUrl`              | String   |                                                            | URL of custom logo to show in header. If this value is the string box then the box logo will show.                                                                                                                                                                                                                                                  |
| `canPreview`           | Boolean  | `true`                                                     | If this option is set to `true` AND `can_preview` permission on the file is `true`, files on the content explorer will be clickable. Clicking on a file will launch preview of that file. This option has no effect when the file permission `can_preview` is set to `false`. This is only applicable to files that can be previewed.               |
| `canDownload`          | Boolean  | `true`                                                     | Visually hides the download option if this is set to `false`. Hiding the option alone will not prevent downloading unless the file permissions also set `can_download` to `false`. This option has no effect when the file permission `can_download` is set to `false`. This is only applicable to files.                                           |
| `canDelete`            | Boolean  | `true`                                                     | Visually hides the delete option if this is set to `false`. Hiding the option alone will not prevent deleting unless the item permissions also set `can_delete` to `false`. This option has no effect when the item permission `can_delete` is set to `false`.                                                                                      |
| `canRename`            | Boolean  | `true`                                                     | Visually hides the rename option if this is set to `false`. Hiding the option alone will not prevent renaming unless the item permissions also set `can_rename` to `false`.                                                                                                                                                                         |
| `canUpload`            | Boolean  | `true`                                                     | Visually hides the upload option if this is set to `false`. Hiding the option alone will not prevent uploading unless the current folder permissions also set `can_upload` to `false`. This option has no effect when the folder permission `can_upload` is set to `false`.                                                                         |
| `canCreateNewFolder`   | Boolean  | `true`                                                     | Visually hides the create new folder option. Hiding the option alone will not prevent creating a new folder unless the folder item permissions also set `can_upload` to `false`. This option has no effect when the folder item permission `can_upload` is set to `false`.                                                                          |
| `canShare`             | Boolean  | `true`                                                     | Visually hides the share button if set to `false`. Hiding the button alone will not prevent sharing unless the item `permissions` also set `can_share` to false. This option has no effect when the item permission `can_share` is set to `false`.                                                                                                  |
| `canSetShareAccess`    | Boolean  | `true`                                                     | Visually hides the sharing drop down select that allows changing share access, if set to `false`. Hiding the select drop down alone will not prevent changing the share access unless the item permissions also set `can_set_share_access` to `false`. This option has no effect when the item permission `can_set_share_access` is set to `false`. |
| `sharedLink`           | String   |                                                            | Shared link URL, required if folder is shared and the access token doesn't belong to an owner or collaborator of the file.                                                                                                                                                                                                                          |
| `sharedLinkPassword`   | String   |                                                            | Shared link password, required if shared link has a password.                                                                                                                                                                                                                                                                                       |
| `size`                 | String   | `undefined`                                                | Indicates to the content explorer to fit within a small or large width container. Value can be absent or one of `small` or `large`. If absent the UI Element will adapt to its container and automatically switch between `small` width or `large` width mode.                                                                                      |
| `isTouch`              | Boolean  | Defaults to the browser and device's default touch support | Indicates to the Content Explorer that it's is being rendered on a touch enabled device.                                                                                                                                                                                                                                                            |
| `autoFocus`            | Boolean  | `false`                                                    | When set to `true`, the item grid will get focus on initial load.                                                                                                                                                                                                                                                                                   |
| `defaultView`          | String   | `files`                                                    | Value can be either be `files`, `recents` or `metadata`. When set to `recents`, by default you will see recent items instead of the regular file/folder structure. `metadata` is required to display the metadata view in Content Explorer. If not provided, you'll get a regular folder view.                                                      |
| `requestInterceptor`   | Function |                                                            | Function to intercept requests. For an example see [this CodePen](https://codepen.io/box-platform/pen/jLdxEv). Our underlying XHR library is `axios.js` and we follow a [similar approach for interceptors](https://github.com/axios/axios#interceptors).                                                                                           |
| `responseInterceptor`  | Function |                                                            | Function to intercept responses. For an example see [this CodePen](https://codepen.io/box-platform/pen/jLdxEv). Our underlying XHR library is `axios.js` and we follow a [similar approach for interceptors](https://github.com/axios/axios#interceptors).                                                                                          |
| `ContentOpenWithProps` | Object   | `{ show: false }`                                          | Allows you to show the Open With Element when previewing via the explorer.                                                                                                                                                                                                                                                                          |
| `token`                | String   |                                                            | Developer token generated in the Developer Console.                                                                                                                                                                                                                                                                                                 |
| `metadataQuery`        | Object   |                                                            | Metadata query used to get the information for the metadata view.                                                                                                                                                                                                                                                                                   |
| `rootFolderID`         | String   |                                                            | Folder ID with a metadata template applied. `metadataQuery` will apply to this folder.                                                                                                                                                                                                                                                              |
| `fieldsToShow`         | Object   |                                                            | The metadata fields/columns to view - must be valid field names from the metadata template.                                                                                                                                                                                                                                                         |

### Events

| Event Name | Event Data                           | Description                                 |
| ---------- | ------------------------------------ | ------------------------------------------- |
| `select`   | `Array<File \| Web Link \| Folder>`  | Will be fired when item rows are selected.  |
| `rename`   | `File \| Web Link \| Folder`         | Will be fired when an item is renamed.      |
| `preview`  | `File`                               | Will be fired when a file is previewed.     |
| `download` | `Array<File>`                        | Will be fired when items are downloaded.    |
| `delete`   | `Array<File>`                        | Will be fired when items are deleted.       |
| `upload`   | `Array<File>`                        | Will be fired when items are uploaded.      |
| `navigate` | `Folder`                             | Will be fired when navigating into folders. |
| `create`   | `Folder`                             | Will be fired when a new folder is created  |

## Keyboard Shortcuts

When the item grid has focus, either manually by clicking on it or
programmatically via javascript or via the above mentioned `autoFocus` prop, the
following keyboard shortcuts will work if their corresponding operations are
applicable and allowed.

| Key                     | Action                             |
| ----------------------- | ---------------------------------- |
| `Arrow Up`              | Previous item row                  |
| `Arrow Down`            | Next item row                      |
| `Ctrl/Cmd + Arrow Up`   | First item row                     |
| `Ctrl/Cmd + Arrow Down` | Last item row                      |
| `/`                     | Search                             |
| `Shift + X`             | Select an item row                 |
| `Delete`                | Delete the selected item           |
| `Enter`                 | Open the selected item             |
| `Shift + R`             | Rename the selected item           |
| `Shift + S`             | Share the selected item            |
| `Shift + D`             | Download the selected item         |
| `g then f`              | Navigates to the root folder       |
| `g then u`              | Upload to the current folder       |
| `g then b`              | Focuses the root folder breadcrumb |
| `g then r`              | Recent items                       |

## Scopes

If your application requires the end user to only be able to access a subset of
the Content Explorer functionality, you can use [Downscoping][downscope] to
appropriately downscope the Access Token to a resulting token that has the
desired set of permissions, and can thus, be securely passed to the end user
client initializing the Content Explorer.

Below are a set of UI Element-specific scopes to go alongside Downscoping. These
allow developers to enable/disable UI controls on the Content Explorer by
configuring the appropriate scopes on the downscoped token. To learn
more, see [Dedicated Scopes for Box UI Elements][scopes].

### Base Scope

| Scope Name      | Permissions granted                                                               |
| --------------- | --------------------------------------------------------------------------------- |
| `base_explorer` | Allows access to content in the folder tree based on user/file/token permissions. |

### Feature Scopes

| Scope Name      | Permissions granted                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| `item_preview`  | Automatically enables preview of the file, upon user click (requires Preview UI Element to be referenced) |
| `item_download` | Allows files/folders contents to be downloaded                                                            |
| `item_rename`   | Allows files/folders to be renamed                                                                        |
| `item_share`    | Allows sharing of resource specified under "resource" of the downscope request.                           |
| `item_delete`   | Allows file/folders to be deleted                                                                         |

### Sample Scenarios

| Scenario                                                                                  | Scopes                                                                                                            |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| User want to navigate folder structure (basic functionality)                              | `base_explorer`                                                                                                   |
| User want basic functionality + preview                                                   | `base_explorer` + `item_preview`                                                                                  |
| User want basic functionality + preview + download                                        | `base_explorer` + `item_preview` + `item_download`                                                                |
| User want basic functionality + preview + download + rename file/folder names             | `base_explorer` + `item_preview` + `item_download` + `item_rename`                                                |
| User wants all functionality (basic, preview, download, rename, share, upload and delete) | `base_explorer` + `item_preview` + `item_download` + `item_rename` + `item_delete` + `item_share` + `item_upload` |

## Custom actions

You can expand the actions in the **More Options** menu for files and folders in Content Explorer and Content Picker. Your custom options show when user clicks the ellipsis button.

To customize the **More Options** menu, pass an array of custom actions to `itemActions`.

```js
contentExplorer.show(configData.FOLDER_ID, configData.ACCESS_TOKEN, {
    container: ".container",
    itemActions: customActions,
});
```

The array can include multiple actions. The action object should include the `label` and `onAction` callback functions. You can filter the custom actions to appear only on a specific item `type`, by passing the `file` or `folder` value. The `filter` value is used for advanced filtering, for example by a specific file extension:

```js
const customActions = [
    {
        label: "Preview in New Window",
        onAction: (item) => alert('action ' + item),
        type: 'file',
    },
    {
        label: "Open in Box.com",
        onAction: (item) => window.open("https://app.box.com"),
    },
    {
        label: "Export",
        onAction: (item) => console.log('action ' + item),
        filter: (item) => item.extension?.toLowerCase() === 'pdf',
    }
];
```

See the implemented examples in CodePen:

<iframe height="560" scrolling="no" title="Box custom icons" src="https://codepen.io/box-platform/embed/EaaMMKQ?default-tab=html%2Cresult" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;" >

</iframe>

[downscope]: guide://authentication/tokens/downscope
[scopes]: guide://api-calls/permissions-and-errors/scopes
[box-app]: g:///applications/app-types
[token]: g://authentication/tokens/developer-tokens
[templates]: g://metadata/templates
[metadata-project]: https://github.com/box-community/content-explorer-metadata/tree/main
[apply-templates]: https://support.box.com/hc/en-us/articles/360044196173-Using-Metadata
[metadata-query]: g://metadata/queries
[get-template]: g://metadata/templates/get/#get-a-metadata-template-by-name
[creating-templates-api]: g:///metadata/templates/create
[appjs]: https://github.com/box-community/content-explorer-metadata/blob/main/src/App.js
[blogpost]: https://medium.com/box-developer-blog/metadata-view-in-box-content-explorer-4978e47e97e9