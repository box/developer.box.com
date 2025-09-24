---
rank: 9
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/box-content-sidebar
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/sidebar
type: guide
total_steps: 18
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/uploader
previous_page_id: embed/ui-elements/preview
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/sidebar.md
---
# Content Sidebar

The Box Content Sidebar UI Element allows developers to add support for viewing
file related metadata (incl. Box Skills) and Activity Feed (incl. versions,
comments and tasks) in their desktop or mobile web application.

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
    <title>Box Content Sidebar</title>

    <!-- Latest version of the sidebar css for your locale -->
    <link
      rel="stylesheet"
      href="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/sidebar.css"
    />
  </head>
  <body>
    <div class="container" style="height:600px"></div>
    <!-- Latest version of the sidebar js for your locale -->
    <script src="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/sidebar.js"></script>
    <script>
      var fileId = "123";
      var accessToken = "abc";

      // At least one of the sub-sidebars (details, activity feed, skills, metadata) need to be turned on for something to render. Details is iteself further divided into notices, properties, access stats and versions, one of which need to be enabled for the details sidebar to render.
      var sidebar = new Box.ContentSidebar();
      sidebar.show(fileId, accessToken, {
        container: ".container",
        detailsSidebarProps: {
          hasNotices: true,
          hasProperties: true,
          hasAccessStats: true,
          hasVersions: true
        },
        hasActivityFeed: true,
        hasSkills: true,
        hasMetadata: true
      });
    </script>
  </body>
</html>
```

## Demo

### Stand-alone Sidebar

<iframe height="800" scrolling="no" title="Box Content Sidebar" src="//codepen.io/box-platform/embed/xjbBvv/?height=560&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;" >

</iframe>

### Sidebar with Content Preview

<iframe height="800" scrolling="no" title="Box Content Preview with Sidebar" src="//codepen.io/box-platform/embed/pqBMgM/?height=800&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;" >

</iframe>

### Sidebar with Content Explorer

<iframe height="800" scrolling="no" title="Box Content Explorer with Sidebar" src="//codepen.io/box-platform/embed/ERVXMa/?height=800&theme-id=27216&default-tab=result&embed-version=2&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;" >

</iframe>

## API

```js
const { ContentSidebar } = Box;
const sidebar = new ContentSidebar();

/**
 * Shows the file selection.
 *
 * @public
 * @param {String} fileId - The file id.
 * @param {String} token - The API access token.
 * @param {Object|void} [options] - Optional options.
 * @return {void}
 */
sidebar.show(fileId, token, options);

/**
 * Hides the sidebar, removes all event listeners, and clears out the HTML.
 *
 * @public
 * @return {void}
 */
sidebar.hide();

/**
 * Clears out the internal in-memory cache for the sidebar. This forces
 * items to be reloaded from the API.
 *
 * @public
 * @return {void}
 */
sidebar.clearCache();

/**
 * Adds an event listener to the sidebar. Listeners should be added before
 * calling show() so no events are missed.
 *
 * @public
 * @param {String} eventName - Name of the event.
 * @param {Function} listener - Callback function.
 * @return {void}
 */
sidebar.addListener(eventName, listener);

/**
 * Removes an event listener from the sidebar.
 *
 * @public
 * @param {String} eventName - Name of the event.
 * @param {Function} listener - Callback function.
 * @return {void}
 */
sidebar.removeListener(eventName, listener);

/**
 * Removes all event listeners from the sidebar.
 *
 * @public
 * @return {void}
 */
sidebar.removeAllListeners();
```

### Parameters

| Parameter | Type   | Description                                                                                                                                                               |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fileId`  | String | Box File ID. This will be the ID of the file for which you want the sidebar.                                                                                              |
| `token`   | String | Box API access token to use. It can have read/write access to the file above. The value passed in for the token is assumed to never expire while the sidebar is visible. |
| `options` | Object | Additional options. For example, `sidebar.show(FILE_ID, TOKEN, {hasProperties: true})` would be used to show file properties in the sidebar.                              |

### Options

| Parameter             | Type     | Default         | Description                                                                                                                                                                                                                                                |
| --------------------- | -------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container`           | String   | `document.body` | CSS selector of the container in which the content sidebar should be placed. Calling `hide()` will clear out this container.                                                                                                                               |
| `hasActivityFeed`     | Boolean  | `false`         | Set to true to show the activity feed that includes versions, comments and tasks.                                                                                                                                                                          |
| `hasMetadata`         | Boolean  | `false`         | Set to true to show box metadata for the file.                                                                                                                                                                                                             |
| `hasSkills`           | Boolean  | `false`         | Set to true to show the file skills data.                                                                                                                                                                                                                  |
| `detailsSidebarProps` | Object   | `{}`            | See section below.                                                                                                                                                                                                                                         |
| `requestInterceptor`  | Function |                 | Function to intercept requests. For an example see [this CodePen](https://codepen.io/box-platform/pen/jLdxEv). Our underlying XHR library is `axios.js` and we follow a [similar approach for interceptors](https://github.com/axios/axios#interceptors).  |
| `responseInterceptor` | Function |                 | Function to intercept responses. For an example see [this CodePen](https://codepen.io/box-platform/pen/jLdxEv). Our underlying XHR library is `axios.js` and we follow a [similar approach for interceptors](https://github.com/axios/axios#interceptors). |

### `detailsSidebarProps`

| Parameter        | Type    | Default | Description                                                      |
| ---------------- | ------- | ------- | ---------------------------------------------------------------- |
| `hasProperties`  | Boolean | `false` | Set to true to show file properties in the details sidebar.      |
| `hasAccessStats` | Boolean | `false` | Set to true to show file access stats in the details sidebar.    |
| `hasVersions`    | Boolean | `false` | Set to true to show file versions in the details sidebar.        |
| `hasNotices`     | Boolean | `false` | Set to true to show file related notices in the details sidebar. |

## Scopes

If your application requires the end user to only be able to access a subset of
the Content Sidebar's functionality, you can use [Downscoping][downscope] to
appropriately downscope the Access Token to a resulting token that has the
desired set of permissions, and can thus, be securely passed to the end user
client initializing the Content Sidebar.

Below are a set of UI Element-specific scopes to go alongside Downscoping. These
allow developers to enable/disable UI controls on the Content Sidebar by
configuring the appropriate scopes on the downscoped token. To learn
more, see [Dedicated Scopes for Box UI Elements][scopes].

### Base Scope

| Scope Name     | Permissions granted                                            |
| -------------- | -------------------------------------------------------------- |
| `base_sidebar` | Allows the user to get basic file info needed for the sidebar. |

### Feature Scopes

| Scope Name     | Permissions granted                     |
| -------------- | --------------------------------------- |
| `item_comment` | Allows adding and editing comments.     |
| `item_rename`  | Allows editing of file description.     |
| `item_upload`  | Allows editing of file metadata.        |
| `item_task`    | Allows creating and resolving of tasks. |

[downscope]: guide://authentication/tokens/downscope
[scopes]: guide://api-calls/permissions-and-errors/scopes