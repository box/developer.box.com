---
rank: 1
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths: []
cId: embed
scId: embed/ui-elements
id: embed/ui-elements/explorer
isIndex: false
---

# Content Explorer

The Box Content Explorer UI Element allows developers to embed a folder view of
content stored on Box in their desktop or mobile web application. The library
fetches information about a specified folder through the Box API and then
renders the content in a folder view, similar to the main Box web application.
Users can then navigate through the folder hierarchy and perform file operations
like rename, delete, and share.

## Browser Support

- Chrome, Firefox, Safari, and Edge (latest 2 versions)
- Limited support for Internet Explorer 11 (requires a `ES2015/Intl polyfill`)
- Mobile Chrome and Safari

<Message warning>

  # ES2015

Box UI Elements require an `ES2015`-capable browser supporting `Intl` (ECMAScript
Internationalization API). If your application supports Internet Explorer 11
or Safari 9, please include a polyfill library or a service like
[`polyfill.io`](https://polyfill.io) to smartly load only the polyfills your
users need. Box also hosts the `core-js` standard library at:

[`https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js`][polyfill]

</Message>

## Assets

### Current Version

- 10.1.0

### NPM

- [`www.npmjs.com/package/box-ui-elements`][npm]
- Use this when you are building a React based app and would like to import the
  components directly into your app at build time.

### Scripts and Stylesheets

- Use this when you are not building a React based app or you don't want to
  include the components as part of your app's build process.
- You only need to include `explorer.css` and one of `explorer.js` or
  `explorer.no.react.js`.
- [`explorer.css`][style]
  - Can also be used along with the NPM packaged component.
- [`explorer.js`][explorerjs]
  - Includes React and ReactDOM libraries
  - Use this when your project isn't already including React
  - The file size of this asset will be larger than the one below
- [`explorer.no.react.js`][explorernoreactjs]
  - Use this when both React and ReactDOM libraries are already loaded on the
    page
  - The content explorer expects `17 > version >= 16.2` of React and ReactDOM
    available on the page

## Supported Locales

The above asset URLs use `en-US`. If you want to use another locale, then
replace `en-US` in the URLs above with any of the following:

`en-AU`, `en-CA`, `en-GB`, `da-DK`, `de-DE`, `es-ES`, `fi-FI`, `fr-CA`, `fr-FR`,
`it-IT`, `ja-JP,`, `ko-KR`, `nb-NO`, `nl-NL`, `pl-PL`, `pt-BR`, `ru-RU`,
`sv-SE`, `tr-TR`, `zh-CN`, `zh-TW`

## Source Code & Releases

Source code for the Explorer Element is [hosted on GitHub][gh]. The repository
contains detailed documentation for usage and development. Please file any bugs
you encounter under the "Issues" tab with clear steps to reproduce. This
repository also holds a list of [releases][releases].

## Usage

There are two ways to use the Box Content Explorer. If you’re looking to build
something quick and simple, use it as a library as shown below in this
documentation. Alternatively, if you are a building a React based app, you can
pull in the component from our NPM package. For details refer to the NPM link
above. As we continue to roll this out, we will provide some level of access to
the source.

## CORS

To use UI elements an application needs to whitelist the domain the widget is
used on for Cross Origin Resource sharing. See the [CORS guide][cors] for more
details.

## Sample HTML

<!-- markdownlint-disable line-length -->

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Box Content Explorer Demo</title>

    <!-- polyfill.io only loads the polyfills your browser needs -->
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,Intl"></script>
    <!-- Alternatively, use polyfill hosted on the Box CDN
    <script src="https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js"></script>
    -->

    <!-- Latest version of the explorer css for your locale -->
    <link
      rel="stylesheet"
      href="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/explorer.css"
    />
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
        container: ".container"
      });
    </script>
  </body>
</html>
```

## Demo

<iframe
  height="560"
  scrolling="no"
  title="Box Content Explorer"
  src="//codepen.io/box-platform/embed/wdWWdN/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true"
  frameborder="no"
  allowtransparency="true"
  allowfullscreen="true"
  style="width: 100%;"
>

</iframe>

<!-- markdownlint-enable line-length -->

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

<!-- markdownlint-disable line-length -->

### Parameters

| Parameter     | Type   | Description                                                                                                                                                                      |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`    | String | Box Folder ID. This will be the ID of the folder you want to navigate. If you want to use the Box All Files folder, then use `0` as the `folderId`.                                |
| `accessToken` | String | Box API access token to use. This should have read/write access to the folder above. The value passed in for the token is assumed to never expire while the explorer is visible. |
| `options`     | Object | Optional options. See below for details. For example: `contentExplorer.show(FOLDER_ID, TOKEN, {canDelete: false})` would be used to hide the delete option.                      |

### Options

| Parameter              | Type     | Default                                                    | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------------------- | -------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container`            | String   | `document.body`                                            | CSS selector of the container in which the content explorer should be placed. Calling hide() will clear out this container.                                                                                                                                                                                                                         |
| `sortBy`               | String   | `name`                                                     | The initial sort by option for the content list. Value should be either `name` or `modified_at`.                                                                                                                                                                                                                                                    |
| `sortDirection`        | String   | `ASC`                                                      | The initial sort direction option for the content list. Value should be either `ASC` or `DESC`.                                                                                                                                                                                                                                                     |
| `logoUrl`              | String   |                                                            | URL of custom logo to show in header. If this value is the string box then the box logo will show.                                                                                                                                                                                                                                                  |
| `canPreview`           | Boolean  | `true`                                                     | If this option is set to `true` AND `can_preview` permission on the file is `true`, files on the content explorer will be clickable. Clicking on a file will launch preview of that file. This option has no effect when the file permission `can_preview` is set to `false`. This is only applicable to files that can be previewed.                 |
| `canDownload`          | Boolean  | `true`                                                     | Visually hides the download option if this is set to `false`. Hiding the option alone will not prevent deleting unless the file permissions also set `can_download` to `false`. This option has no effect when the file permission `can_download` is set to `false`. This is only applicable to files.                                              |
| `canDelete`            | Boolean  | `true`                                                     | Visually hides the delete option if this is set to `false`. Hiding the option alone will not prevent deleting unless the item permissions also set `can_delete` to `false`. This option has no effect when the item permission `can_delete` is set to `false`.                                                                                      |
| `canRename`            | Boolean  | `true`                                                     | Visually hides the rename option if this is set to `false`. Hiding the option alone will not prevent uploading unless the item permissions also set `can_rename` to `false`.                                                                                                                                                                        |
| `canUpload`            | Boolean  | `true`                                                     | Visually hides the upload option if this is set to `false`. Hiding the option alone will not prevent uploading unless the current folder permissions also set `can_upload` to `false`. This option has no effect when the folder permission `can_upload` is set to `false`.                                                                         |
| `canCreateNewFolder`   | Boolean  | `true`                                                     | Visually hides the create new folder option. Hiding the option alone will not prevent creating a new folder unless the folder item permissions also set `can_upload` to `false`. This option has no effect when the folder item permission `can_upload` is set to `false`.                                                                          |
| `canShare`             | Boolean  | `true`                                                     | Visually hides the share button if set to `false`. Hiding the button alone will not prevent sharing unless the item `permissions` also set `can_share` to false. This option has no effect when the item permission `can_share` is set to `false`.                                                                                                  |
| `canSetShareAccess`    | Boolean  | `true`                                                     | Visually hides the sharing drop down select that allows changing share access, if set to `false`. Hiding the select drop down alone will not prevent changing the share access unless the item permissions also set `can_set_share_access` to `false`. This option has no effect when the item permission `can_set_share_access` is set to `false`. |
| `sharedLink`           | String   |                                                            | Shared link URL, required if folder is shared and the access token doesn't belong to an owner or collaborator of the file.                                                                                                                                                                                                                          |
| `sharedLinkPassword`   | String   |                                                            | Shared link password, required if shared link has a password.                                                                                                                                                                                                                                                                                       |
| `size`                 | String   | `undefined`                                                | Indicates to the content explorer to fit within a small or large width container. Value can be absent or one of `small` or `large`. If absent the UI Element will adapt to its container and automatically switch between `small` width or `large` width mode.                                                                                      |
| `isTouch`              | Boolean  | Defaults to the browser and device's default touch support | Indicates to the content explorer that it's is being rendered on a touch enabled device.                                                                                                                                                                                                                                                            |
| `autoFocus`            | Boolean  | `false`                                                    | When set to `true`, the item grid will get focus on initial load.                                                                                                                                                                                                                                                                                   |
| `defaultView`          | String   | `files`                                                    | Value should either be `files` or `recents`. When set to `recents`, by default you will see recent items instead of the regular file/folder structure.                                                                                                                                                                                              |
| `requestInterceptor`   | Function |                                                            | Function to intercept requests. For an example see [this CodePen](https://codepen.io/box-platform/pen/jLdxEv). Our underlying XHR library is `axios.js` and we follow a [similar approach for interceptors](https://github.com/axios/axios#interceptors).                                                                                           |
| `responseInterceptor`  | Function |                                                            | Function to intercept responses. For an example see [this CodePen](https://codepen.io/box-platform/pen/jLdxEv). Our underlying XHR library is `axios.js` and we follow a [similar approach for interceptors](https://github.com/axios/axios#interceptors).                                                                                          |
| `ContentOpenWithProps` | Object   | `{ show: false }`                                          | Allows you to show the Open With Element when previewing via the explorer.                                                                                                                                                                                                                                                                          |

### Events

| Event Name | Event Data                    | Description                                 |
| ---------- | ----------------------------- | ------------------------------------------- |
| `select`   | `Array<File|Web Link|Folder>` | Will be fired when item rows are selected.  |
| `rename`   | `File|Web Link|Folder`        | Will be fired when an item is renamed.      |
| `preview`  | `File`                        | Will be fired when a file is previewed.     |
| `download` | `Array<File>`                 | Will be fired when items are downloaded.    |
| `delete`   | `Array<File>`                 | Will be fired when items are deleted.       |
| `upload`   | `Array<File>`                 | Will be fired when items are uploaded.      |
| `navigate` | `Folder`                      | Will be fired when navigating into folders. |
| `create`   | Folder                        | Will be fired when a new folder is created  |

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
more, see [Special Scopes for Box UI Elements][scopes].

### Base Scope

<!-- markdownlint-disable line-length -->

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

<!-- markdownlint-enable line-length -->

[polyfill]: https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js
[style]: https://cdn01.boxcdn.net/platform/elements/10.1.0/en-US/explorer.css
[explorerjs]: https://cdn01.boxcdn.net/platform/elements/10.1.0/en-US/explorer.js
[explorernoreactjs]: https://cdn01.boxcdn.net/platform/elements/10.1.0/en-US/explorer.no.react.js
[gh]: https://github.com/box/box-ui-elements
[releases]: https://github.com/box/box-ui-elements/releases
[cors]: guide//best-practices/cors
[npm]: https://www.npmjs.com/package/box-ui-elements
[downscope]: guide://authentication/access-tokens/downscope
[scopes]: guide://api-calls/permissions-and-errors/scopes
