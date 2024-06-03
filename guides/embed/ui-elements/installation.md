---
rank: 1
related_endpoints: []
related_guides:
  - authentication/select
  - security/cors
required_guides: []
related_resources: []
alias_paths: []
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/installation
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/browser
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/installation.md
---
# Installation

UI Elements can be used either by downloading the Javascript libraries
directly from the Box CDN or by installing our [NPM package][npm]. All UI
Elements require their corresponding CSS stylesheet to render properly.

## NPM installation

Use this when you are building a React based app and would like to import the
components directly into your app at build time.

```sh
npm install box-ui-elements
# yarn add box-ui-elements
```

<CTA to="https://www.npmjs.com/package/box-ui-elements">

Learn more on the NPM website

</CTA>

<Message type='warning'>

## Content Preview

Use the Content Preview SDK if you need a specific
version of the preview library. Otherwise,
use Content Preview UI Element wrapper.

</Message>

## Manual installation

All the UI elements are also available directly from the Box CDN.

| Element                                              | Version  | File                                                                                                                                                                            |
| ---------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Content Explorer](g://embed/ui-elements/explorer)   | `20.0.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/explorer.css`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/explorer.css)                              |
|                                                      |          | JS with React [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/explorer.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/explorer.js)                      |
|                                                      |          | JS without React [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/explorer.no.react.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/explorer.no.react.js) |
| [Content Open With](g://embed/ui-elements/open-with) | `20.0.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/openwith.css`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/openwith.css)                              |
|                                                      |          | JS with React [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/openwith.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/openwith.js)                      |
|                                                      |          | JS without React [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/openwith.no.react.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/openwith.no.react.js) |
| [Content Picker](g://embed/ui-elements/picker)       | `20.0.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/picker.css`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/picker.css)                                  |
|                                                      |          | JS with React [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/picker.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/picker.js)                          |
|                                                      |          | JS without React [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/picker.no.react.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/picker.no.react.js)     |
| [Content Sidebar](g://embed/ui-elements/sidebar)     | `20.0.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/sidebar.css`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/sidebar.css)                                |
|                                                      |          | JS with React [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/sidebar.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/sidebar.js)                        |
|                                                      |          | JS without React [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/sidebar.no.react.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/sidebar.no.react.js)   |
| [Content Uploader](g://embed/ui-elements/uploader)   | `20.0.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/uploader.css`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/uploader.css)                              |
|                                                      |          | JS with React [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/uploader.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/uploader.js)                      |
|                                                      |          | JS without React [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/uploader.no.react.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/uploader.no.react.js) |
| [Content Preview UI Element](https://github.com/box/box-content-preview)     | `20.0.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/preview.css`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/preview.css)                                  |
|                                                      |    `20.0.0`       | JS [`https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/preview.js`](https://cdn01.boxcdn.net/platform/elements/20.0.0/en-US/preview.js)                                     |
| [Content Preview SDK](g://embed/ui-elements/preview)     | `2.106.0` | CSS [`https://cdn01.boxcdn.net/platform/preview/2.106.0/en-US/preview.css`](https://cdn01.boxcdn.net/platform/preview/2.106.0/en-US/preview.css)                                  |
|                                                      |       | JS [`https://cdn01.boxcdn.net/platform/preview/2.106.0/en-US/preview.js`](https://cdn01.boxcdn.net/platform/preview/2.106.0/en-US/preview.js)                                     |

Use these links to either download the elements code to your application's
code, or embed them straight into your page from the CDN.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <!-- Latest version of the explorer css for your locale -->
    <link
      rel="stylesheet"
      href="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/explorer.css"
    />
  </head>
  <body>
    <!-- Latest version of the explorer js for your locale -->
    <script src="https://cdn01.boxcdn.net/platform/elements/{VERSION}/en-US/explorer.js"></script>
    ...
  </body>
</html>
```

For Box Preview, the sample would look slightly different.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Box Content Preview Demo</title>

    <!-- Latest version of Box Content Preview for en-US locale -->
    <script src="https://cdn01.boxcdn.net/platform/preview/{VERSION}/en-US/preview.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn01.boxcdn.net/platform/preview/{VERSION}/en-US/preview.css"
    />
  </head>
  <body>
    <div class="preview-container" style="height:400px; width:100%;"></div>
    <script>
      var preview = new Box.Preview();
      preview.show("93392244621", "EqFyi1Yq1tD9mxY8F38sxDfp73pFd7FP", {
        container: ".preview-container",
        showDownload: true,
      });
    </script>
  </body>
</html>
```

### Versions

Most of the UI elements have 2 distinct versions.

- A standard `*.js` file (e.g. `explore.js`) that includes React and ReactDOM in the bundle.
  - Use this when you are not building a React based app or you don't want to include the components as part of your app's build process.
  - It includes React and ReactDOM libraries.
  - The file size of this asset will be larger than the one below.
- A smaller `*.no.react.js` file (e.g. `explore.no.react.js`) that does not get bundled with React and ReactDOM.
  - Use this when both React and ReactDOM libraries are already loaded on the application.
  - These libraries expect a React and ReactDOM `>= 16.6` and `< 18`.

<message>
Only one of the two `js` files and the additional `css` file need to be added
to a project.

</message>

### Supported Locales

The above asset URLs use `en-US`. If you want to use another locale, then
replace `en-US` in the URLs above with any of the following:

`en-AU`, `en-CA`, `en-GB`, `da-DK`, `de-DE`, `es-ES`, `fi-FI`, `fr-CA`, `fr-FR`,
`it-IT`, `ja-JP,`, `ko-KR`, `nb-NO`, `nl-NL`, `pl-PL`, `pt-BR`, `ru-RU`,
`sv-SE`, `tr-TR`, `zh-CN`, `zh-TW`

## Self-hosting Content Preview

To serve the Box Content Preview library from your own server, follow these
steps.

### 1. Download release

Either fork the repository and check out the version you want to serve or
download the specific version as a zip.

- Check out a specific version with `git checkout v2.106.0`.
- Download a specific version as a zip from the [releases][preview-releases] page.

### 2. Install dependencies

Install the dependencies and build the library with the following command.

```sh
yarn install && yarn build:i18n && yarn build:prod
```

### 3. Serve files

Self-serve everything except for the `dev` folder from the `/dist` folder. You
must not alter the folder structure and `third-party` needs to be in the same
folder as `2.106.0`.

For example, if you self-host using a `box-assets` directory, these URLs must
be accessible:

- `https://cdn.YOUR_SITE.com/box-assets/2.106.0/en-US/preview.js`
- `https://cdn.YOUR_SITE.com/box-assets/third-party/text/2.65.0/papaparse.min.js`
- `https://cdn.YOUR_SITE.com/box-assets/third-party/model3d/1.12.0/three.min.js`

## Authentication

In order to initialize any of the UI Elements, an application will need to
provide a valid Access Token.

<CTA to="g://authentication/select">

Learn how to authenticate an application

</CTA>

It is also recommended to [downscope][downscope] an Access Token before passing
it into an insecure environment (the user's web browser).

UI Elements only expect any Access Token to be passed in for authentication, and
can therefore be used for any type of authentication available from Box
Platform.

For testing purposes, a [Developer Token][devtoken] can be used.

## CORS

To use UI Elements, an application needs to allow the domain the widget is
used on for Cross Origin Resource sharing. See the [CORS guide][cors] for more
details.

## Source Code & Releases

Source code for Box UI Elements is [hosted on GitHub][gh]. The repository
contains detailed documentation for usage and development. Please file any bugs
you encounter under the "Issues" tab with clear steps to reproduce. This
repository also holds a list of [releases][releases].

[cors]: g://security/cors
[downscope]: g://authentication/tokens/downscope
[devtoken]: g://authentication/tokens/developer-tokens
[npm]: https://www.npmjs.com/package/box-ui-elements
[gh]: https://github.com/box/box-ui-elements
[releases]: https://github.com/box/box-ui-elements/releases
[downscope]: g://authentication/tokens/downscope
[scopes]: g://api-calls/permissions-and-errors/scopes
[preview-releases]: https://github.com/box/box-content-preview/releases