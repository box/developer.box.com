---
rank: 5
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths: 
  - /docs/box-content-picker
  - /docs/content-picker
---

# Content Picker

The Box Content Picker UI Element allows developers to add support for selecting
files and folders from Box in their desktop or mobile web application. The
library fetches information about a specified folder through the Box API and
renders the content in a folder view. Users can select files or folders and this
content information is then passed to another part of the application.

## Installation

[Learn how to install](g://embed/ui-elements/installation) Box UI elements
either through NPM or the Box CDN.

<Message>
  # Browser support

UI elements have [limited support](g://embed/ui-elements/browser) for
older browsers. Make sure to add the right polyfills for your targeted browsers.

</Message>

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

<!-- markdownlint-disable line-length -->

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Box File Selection</title>

    <!-- polyfill.io only loads the polyfills your browser needs -->
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,Intl"></script>
    <!-- Alternatively, use polyfill hosted on the Box CDN
    <script src="https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js"></script>
    -->

    <!-- Latest version of the picker css for your locale -->
    <link
      rel="stylesheet"
      href="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/picker.css"
    />
  </head>
  <body>
    <div class="container" style="height:600px"></div>
    <!-- Latest version of the picker js for your locale -->
    <script src="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/picker.js"></script>
    <script>
      var folderId = "123";
      var accessToken = "abc";
      var filePicker = new Box.FilePicker();
      filePicker.show(folderId, accessToken, {
        container: ".container"
      });
    </script>
  </body>
</html>
```

## Demo

### File Selection Demo

<iframe
  height="560"
  scrolling="no"
  title="Box File Picker"
  src="//codepen.io/box-platform/embed/PWPxBm/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true"
  frameborder="no"
  allowtransparency="true"
  allowfullscreen="true"
  style="width: 100%;"
></iframe>

### Folder Selection Demo

<iframe
  height="560"
  scrolling="no"
  title="Box Folder Picker"
  src="//codepen.io/box-platform/embed/WRQLey/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true"
  frameborder="no"
  allowtransparency="true"
  allowfullscreen="true"
  style="width: 100%;"
></iframe>

### File Selection + Preview Demo

<iframe
  height="560"
  scrolling="no"
  title="Box File Picker + Box Preview"
  src="//codepen.io/box-platform/embed/oBjJgL/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true"
  frameborder="no"
  allowtransparency="true"
  allowfullscreen="true"
  style="width: 100%;"
></iframe>

### File Selection as a popup

<iframe
  height="560"
  scrolling="no"
  title="Box File Picker and Uploader as popups"
  src="//codepen.io/box-platform/embed/oWEKdq/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true"
  frameborder="no"
  allowtransparency="true"
  allowfullscreen="true"
  style="width: 100%;"
></iframe>

<Message>
  # Access Token

These demos may not fully function until you provide a valid access token. For
testing purposes, you can use your temporary developer token. This will need
to be updated under the JS tab in the demo.

</Message>

<!-- markdownlint-enable line-length -->

## API

```js
const { FilePicker } = Box;
const filePicker = new FilePicker();

/**
 * Shows the file selection.
 *
 * @public
 * @param {String} folderId - The root folder id.
 * @param {String} accessToken - The API access token.
 * @param {Object|void} [options] - Optional options.
 * @return {void}
 */
filePicker.show(folderId, accessToken, options);

/**
 * Hides the file picker, removes all event listeners, and clears out the HTML.
 *
 * @public
 * @return {void}
 */
filePicker.hide();

/**
 * Clears out the internal in-memory cache for the file picker. This forces
 * items to be reloaded from the API.
 *
 * @public
 * @return {void}
 */
filePicker.clearCache();

/**
 * Adds an event listener to the file picker. Listeners should be added before
 * calling show() so no events are missed.
 *
 * @public
 * @param {String} eventName - Name of the event.
 * @param {Function} listener - Callback function.
 * @return {void}
 */
filePicker.addListener(eventName, listener);

/**
 * Removes an event listener from the file picker.
 *
 * @public
 * @param {String} eventName - Name of the event.
 * @param {Function} listener - Callback function.
 * @return {void}
 */
filePicker.removeListener(eventName, listener);

/**
 * Removes all event listeners from the file picker.
 *
 * @public
 * @return {void}
 */
filePicker.removeAllListeners();
```

<!-- markdownlint-disable line-length -->

### Parameters

| Parameter     | Type   | Description                                                                                                                                                                      |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`    | String | Box Folder ID. This will be the ID of the folder from which you want the content to be picked. If you want to use the Box All Files folder, then use `0` as the `folderId`.      |
| `accessToken` | String | Box API access token to use. This should have read/write access to the folder above. The value passed in for the token is assumed to never expire while the explorer is visible. |
| `options`     | Object | Optional options. See below for details. For example: `contentExplorer.show(FOLDER_ID, TOKEN, {canDelete: false})` would be used to hide the delete option.                      |

### Options

| Parameter             | Type            | Default                                                                                            | Description                                                                                                                                                                                                                                                                                                                    |
| --------------------- | --------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `container`           | `String`        | `document.body`                                                                                    | CSS selector of the container in which the content picker should be placed. Calling hide() will clear out this container.                                                                                                                                                                                                      |
| `sortBy`              | `String`        | `name`                                                                                             | The initial sort by option for the content list. Value should be either name or `date`.                                                                                                                                                                                                                                   |
| `sortDirection`       | `String`        | `ASC`                                                                                              | The initial sort direction option for the content list. Value should be either `ASC` or `DESC`.                                                                                                                                                                                                                                    |
| `logoUrl`             | `String`        | URL of custom logo to show in header. If this value is the string box then the box logo will show. |
| `extensions`          | `Array<string>` | `[]`                                                                                               | Array of file extensions to be allowed for selection. for example `['doc', 'ppt']`. Applicable only to the File Picker and not the Folder Picker. If any extensions are provided, only those will have the ability to be selected. An empty array signifies all the file extensions are allowed for selection.                 |
| `maxSelectable`       | `Number`        | `Infinity`                                                                                         | Number of files or folders that can be selected. Specify 1 if you want only 1 file or folder selected.                                                                                                                                                                                                                         |
| `canUpload`           | `Boolean`       | `true`                                                                                             | Visually hides the upload option if this is set to `false`. Hiding the option alone will not prevent uploading unless the current folder permissions also set `can_upload` to `false`. This option has no effect when the folder permission `can_upload` is set to `false`.                                                    |
| `canSetShareAccess`   | `Boolean`       | `true`                                                                                             | Visually hides the sharing drop down select if set to `false`. Hiding the select drop down alone will not prevent changing the share access unless the folder item permissions also set `can_set_share_access` to `false`. This option has no effect when the folder item permission `can_set_share_access` is set to `false`. |
| `canCreateNewFolder`  | `Boolean`       | `true`                                                                                             | Visually hides the create new folder option. Hiding the option alone will not prevent creating a new folder unless the folder item permissions also set `can_upload` to `false`. This option has no effect when the folder item permission `can_upload` is set to false.                                                       |
| `sharedLink`          | `String`        |                                                                                                    | Shared link URL, required if folder is shared and the access token doesn't belong to an owner or collaborator of the file.                                                                                                                                                                                                     |
| `sharedLinkPassword`  | `String`        |                                                                                                    | Shared link password, required if shared link has a password.                                                                                                                                                                                                                                                                  |
| `modal`               | `Object`        |                                                                                                    | When the modal attribute is specified, then the content pickers will not be created in-place. Instead a button will be created in the container and clicking this button will launch the content picker in a modal popup.                                                                                                      |  |
| `size`                | `String`        | `undefined`                                                                                        | Indicates to the content picker to fit within a `small` or `large` width container. Value can be absent or one of `small` or `large`. If absent the UI Element will adapt to its container and automatically switch between small width or large width mode.                                                                   |
| `isTouch`             | Boolean         | Defaults to the browser and device's default touch support                                         | Indicates to the content explorer that it's is being rendered on a touch enabled device.                                                                                                                                                                                                                                       |
| `autoFocus`           | `Boolean`       | `false`                                                                                            | When set to `true`, the item grid will get focus on initial load.                                                                                                                                                                                                                                                              |
| `defaultView`         | String          | `files`                                                                                            | Value should either be `files` or `recents`. When set to `recents`, by default you will see recent items instead of the regular file/folder structure.                                                                                                                                                                         |
| `chooseButtonLabel`   | `String`        |                                                                                                    | String to re-label the Choose button                                                                                                                                                                                                                                                                                           |
| `cancelButtonLabel`   | `String`        |                                                                                                    | String to re-label the Cancel button                                                                                                                                                                                                                                                                                           |
| `requestInterceptor`  | `Function`      |                                                                                                    | Function to intercept requests. For an example see [this CodePen](https://codepen.io/box-platform/pen/jLdxEv). Our underlying XHR library is `axios.js` and we follow a [similar approach for interceptors](https://github.com/axios/axios#interceptors).                                                                      |
| `responseInterceptor` | `Function`      |                                                                                                    | Function to intercept responses. For an example see [this CodePen](https://codepen.io/box-platform/pen/jLdxEv). Our underlying XHR library is `axios.js` and we follow a [similar approach for interceptors](https://github.com/axios/axios#interceptors).                                                                     |

### Modal Options

| Parameter          | Type     | Default         | Description                                   |
| ------------------ | -------- | --------------- | --------------------------------------------- |
| `buttonLabel`      | `String` |                 | Label for the button                          |
| `buttonClassName`  | `String` | Box Blue Button | CSS class to decorate the button              |
| `modalClassName`   | `String` |                 | CSS class to decorate the modal popup content |
| `overlayClassName` | `String` |                 | CSS class to decorate the modal popup overlay |

### Events

| Event Name | Event Data                    | Description                                                                                                                                                                                         |
| ---------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `choose`   | `Array<File|Web Link|Folder>` | Will be fired when the Choose button is pressed. Event data will be an array of Folder Object or File Object or Web Link object depending upon whether it was a file selection or folder selection. |
| `cancel`   |                               | Will be fired when the Cancel button is pressed                                                                                                                                                     |

<!-- markdownlint-enable line-length -->

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
| `Enter`                 | Open the selected item             |
| `g then f`              | Navigates to the root folder       |
| `g then u`              | Upload to the current folder       |
| `g then b`              | Focuses the root folder breadcrumb |
| `g then s`              | Shows the selected items           |
| `g then x`              | Cancel                             |
| `g then c`              | Choose                             |
| `g then r`              | Recent items                       |

## Scopes

If your application requires the end user to only be able to access a subset of
the Content Picker functionality, you can use [Downscoping][downscope] to
appropriately downscope the Access Token to a resulting token that has the
desired set of permissions, and can thus, be securely passed to the end user
client initializing the Content Picker.

Below are a set of UI Element-specific scopes to go alongside Downscoping. These
allow developers to enable/disable UI controls on the Content Picker by
configuring the appropriate scopes on the downscoped token. To learn
more, see [Dedicated Scopes for Box UI Elements][scopes].

<!-- markdownlint-disable line-length -->

| Scope Name    | Permissions granted                                                              |
| ------------- | -------------------------------------------------------------------------------- |
| `base_picker` | Allows access to content in the folder tree based on user/file/token permissions |

### Feature Scopes

| Scope Name    | Permissions granted                                                                  |
| ------------- | ------------------------------------------------------------------------------------ |
| `item_share`  | Allows sharing of resource specified under "resource" of the Token Exchange request. |
| `item_upload` | Allows upload in the content picker                                                  |

### Sample Scenarios

| Scenario                                                                                                                                         | Scopes                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| User wants to only navigate a folder structure and pick a file / folder                                                                          | `base_picker`                                |
| User wants to navigate a folder structure, pick a file / folder and also set access level                                                        | `base_picker` + `item_share`                 |
| User wants to navigate a folder structure, pick a file / folder and also upload a file / folder                                                  | `base_picker` + `item_upload`                |
| User should be able to navigate a folder structure and pick a file / folder, upload a file / folder, and also set access level for a file/folder | `base_picker` + `item_share` + `item_upload` |

<!-- markdownlint-enable line-length -->

[downscope]: guide://authentication/access-tokens/downscope
[scopes]: guide://api-calls/permissions-and-errors/scopes
