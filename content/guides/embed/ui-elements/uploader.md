---
rank: 8
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths: 
  - /docs/box-content-uploader
  - /docs/content-uploader
---

# Content Uploader

The Box Content Uploader UI Element allows developers to embed an upload widget
in their desktop or mobile web application. Users can select files or use drag
and drop to upload. Large files will be uploaded with the [Chunked
Upload](e://post-files-upload-sessions) API.

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
non-Box accounts (App Users), UI Elements should just work out of the box. The
reason for this is that UI Elements only expect a "token" to be passed in for
authentication, and Box provides two different ways to generate tokens - OAuth
and JWT.

<CTA to="g://authentication/select">
  Learn about selecting an authentication method
</CTA>

## Demo

### Uploader

<iframe
  height="560"
  scrolling="no"
  title="Box Content Uploader"
  src="//codepen.io/box-platform/embed/QvqGwr/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true"
  frameborder="no"
  allowtransparency="true"
  allowfullscreen="true"
  style="width: 100%;"
></iframe>

### Uploader as popup

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

## API

```js
const { ContentUploader } = Box;
const uploader = new ContentUploader();

/**
 * Shows the content uploader.
 *
 * @public
 * @param {String} folderId - Folder ID to upload to.
 * @param {String} accessToken - Box API access token.
 * @param {Object|void} [options] - Optional options.
 * @return {void}
 */
uploader.show(folderId, accessToken, options);

/**
 * Hides and clears HTML for the uploader.
 *
 * @public
 * @return {void}
 */
uploader.hide();

/**
 * Adds an event listener to the content uploader.
 * Listeners should be added before calling show()
 * so no events are missed.
 *
 * @public
 * @param {String} eventName Name of the event.
 * @param {Function} listener Callback function.
 * @return {void}
 */
uploader.addListener(eventName, listener);

/**
 * Removes an event listener from the content uploader.
 *
 * @public
 * @param {String} eventName Name of the event.
 * @param {Function} listener Callback function.
 * @return {void}
 */
uploader.removeListener(eventName, listener);

/**
 * Removes all event listeners from the content uploader.
 *
 * @public
 * @return {void}
 */
uploader.removeAllListeners();
```

<!-- markdownlint-disable line-length -->

### Parameters

| Parameter     | Type   | Description                                                                                                                                                                  |
| ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`    | String | Box Folder ID. This will be the ID of the folder from which you want files to be uploaded to. If you want to use the Box All Files folder, then use `0` as the `folderId`.   |
| `accessToken` | String | Box API access token to use. This should have upload access to the folder above. The value passed in for the token is assumed to never expire while the uploader is visible. |
| `options`     | Object | Optional options. See below for details.                                                                                                                                     |

### Options

| Parameter             | Type     | Default                                                    | Description                                                                                                                                                                                                                                                   |
| --------------------- | -------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container`           | String   | `document.body`                                            | CSS selector of the container in which the content uploader should be placed. Calling `hide()` will clear out this container.                                                                                                                                 |
| `sharedLink`          | String   |                                                            | Shared link URL, required if folder is shared and the access token doesn't belong to an owner or collaborator of the file.                                                                                                                                    |
| `sharedLinkPassword`  | String   |                                                            | Shared link password, required if shared link has a password.                                                                                                                                                                                                 |
| `onClose`             | Function |                                                            | Callback function for 'Close' button, which will appear when there are no files to upload or when all uploads are complete. If this option is not defined, the button will not appear.                                                                        |
| `modal`               | Object   |                                                            | When the modal attribute is specified, then the content uploader will not be created in-place. Instead a button will be created in the container and clicking this button will launch the content uploader in a modal popup. See below for the modal options. |
| `size`                | String   | `undefined`                                                | Indicates to the content uploader to fit within a small or large width container. Value can be absent or one of `small` or `large`. If absent the UI Element will adapt to its container and automatically switch between small width or large width mode.    |
| `isTouch`             | Boolean  | Defaults to the browser and device's default touch support | Indicates to the content explorer that it's is being rendered on a touch enabled device.                                                                                                                                                                      |
| `fileLimit`           | Number   | 100                                                        | The maximum number of files that can be uploaded at once. If more than `fileLimit` files are selected for upload, any beyond the first `fileLimit` files will not be included for uploaded. A warning message will be shown in the footer when this happens.  |
| `requestInterceptor`  | Function |                                                            | Function to intercept requests. For an example see [this CodePen](https://codepen.io/box-platform/pen/jLdxEv). Our underlying XHR library is `axios.js` and we follow a [similar approach for interceptors](https://github.com/axios/axios#interceptors).     |
| `responseInterceptor` | Function |                                                            | Function to intercept responses. For an example see [this CodePen](https://codepen.io/box-platform/pen/jLdxEv). Our underlying XHR library is `axios.js` and we follow a [similar approach for interceptors](https://github.com/axios/axios#interceptors).    |

### Modal Options

| Parameter          | Type     | Default         | Description                                   |
| ------------------ | -------- | --------------- | --------------------------------------------- |
| `buttonLabel`      | `String` |                 | Label for the button                          |
| `buttonClassName`  | `String` | Box Blue Button | CSS class to decorate the button              |
| `modalClassName`   | `String` |                 | CSS class to decorate the modal popup content |
| `overlayClassName` | `String` |                 | CSS class to decorate the modal popup overlay |

### Events

| Event Name | Event Data    | Description                                                                                                                                       |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `close`    |               | Will be fired when 'Close' button is clicked.                                                                                                     |
| `complete` | `Array<File>` | Will be fired when all uploads in the current view are complete. Event data will be an array of File Object.                                      |
| `upload`   | File          | Fired when a single file is successfully uploaded. Event data will be a File Object.                                                              |
| `error`    | Object        | Fired when a single file has an upload error. Event data will be an object with properties file from the File Web API and the error object error. |

<!-- markdownlint-enable line-length -->

## Scopes

If your application requires the end user to only be able to access a subset of
the Content Explorer functionality, you can use [Downscoping][downscope] to
appropriately downscope the Access Token to a resulting token that has the
desired set of permissions, and can thus, be securely passed to the end user
client initializing the Content Explorer.

Below are a set of UI Element-specific scopes to go alongside Downscoping. These
allow developers to enable/disable UI controls on the Content Explorer by
configuring the appropriate scopes on the downscoped token. To learn
more, see [Special Scopes for Box UI Elements][scopes].

### Base Scope

<!-- markdownlint-disable line-length -->

| Scope Name    | Permissions granted                                                                    |
| ------------- | -------------------------------------------------------------------------------------- |
| `base_upload` | Allows upload into the folder specific under "resource" of the Token Exchange request. |

### Sample Scenarios

| Scenario                                   | Scopes        |
| ------------------------------------------ | ------------- |
| User wants to upload files to a Box folder | `base_upload` |

<!-- markdownlint-enable line-length -->
