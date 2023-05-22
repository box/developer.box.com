---
rank: 1
related_endpoints: []
related_guides:
  - authentication/select
  - security/cors
required_guides: []
related_resources: []
alias_paths: []
---

# Installation

UI Elements can be used either by downloading the Javascript libraries
directly or by pulling from our NPM packages. All UI Elements also
require their corresponding CSS stylesheet to render properly.

All of the UI elements are available both through [NPM][npm] as well as for
direct download.

<Message>
  There are two ways to use the Box UI elements. If you’re looking to build
  something quickly, use it as a library as shown below in this
  documentation. Alternatively, if you are a building a React based app, you can
  pull in the component from our NPM package. For details refer to the NPM link
  above. As we continue to roll this out, we will provide some level of access
  to the source.
</Message>

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

<Message warning>
  # Content Preview

The content Content Preview element is currently not available via NPM.

</Message>

## Manual installation

All the UI elements are also available directly from the Box CDN.

<!-- markdownlint-disable line-length -->

| Element                                              | Version  | File                                                                                                                                                                            |
| ---------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Content Explorer](g://embed/ui-elements/explorer)   | `17.1.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/explorer.css`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/explorer.css)                              |
|                                                      |          | JS with React [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/explorer.js`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/explorer.js)                      |
|                                                      |          | JS without React [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/explorer.no.react.js`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/explorer.no.react.js) |
| [Content Open With](g://embed/ui-elements/open-with) | `17.1.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/openwith.css`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/openwith.css)                              |
|                                                      |          | JS with React [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/openwith.js`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/openwith.js)                      |
|                                                      |          | JS without React [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/openwith.no.react.js`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/openwith.no.react.js) |
| [Content Picker](g://embed/ui-elements/picker)       | `17.1.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/picker.css`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/picker.css)                                  |
|                                                      |          | JS with React [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/picker.js`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/picker.js)                          |
|                                                      |          | JS without React [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/picker.no.react.js`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/picker.no.react.js)     |
| [Content Sidebar](g://embed/ui-elements/sidebar)     | `17.1.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/sidebar.css`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/sidebar.css)                                |
|                                                      |          | JS with React [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/sidebar.js`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/sidebar.js)                        |
|                                                      |          | JS without React [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/sidebar.no.react.js`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/sidebar.no.react.js)   |
| [Content Uploader](g://embed/ui-elements/uploader)   | `17.1.0` | CSS [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/uploader.css`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/uploader.css)                              |
|                                                      |          | JS with React [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/uploader.js`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/uploader.js)                      |
|                                                      |          | JS without React [`https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/uploader.no.react.js`](https://cdn01.boxcdn.net/platform/elements/17.1.0/en-US/uploader.no.react.js) |
| [Content Preview](g://embed/ui-elements/preview)     | `2.93.0` | CSS [`https://cdn01.boxcdn.net/platform/preview/2.93.0/en-US/preview.css`](https://cdn01.boxcdn.net/platform/preview/2.93.0/en-US/preview.css)                                  |
|                                                      |          | JS [`https://cdn01.boxcdn.net/platform/preview/2.93.0/en-US/preview.js`](https://cdn01.boxcdn.net/platform/preview/2.93.0/en-US/preview.js)                                     |

Use these links to either download the elements code to your application's
code, or embed them straight into your page from the CDN.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
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

    <!-- polyfill.io only loads the polyfills your browser needs -->
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise"></script>
    <!-- Alternatively, use polyfills hosted on the Box CDN
  <script src="https://cdn01.boxcdn.net/polyfills/bluebird/3.5.1/bluebird.min.js"></script>
  -->

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

<!-- markdownlint-enable line-length -->

### Versions

Most of the UI elements have 2 distinct versions.

- A standard `*.js` file (for example `explore.js`) that includes React and
  ReactDOM in the bundle.
  - Use this when you are not building a React based app or you don't want to
    include the components as part of your app's build process.
  - It includes React and ReactDOM libraries.
  - The file size of this asset will be larger than the one below.
- A smaller `*.no.react.js` file (for example `explore.no.react.js`) that does
  not get bundled with React and ReactDOM.
  - Use this when both React and ReactDOM libraries are already loaded on the
    application.
  - These libraries expect a React and ReactDOM `>= 16.2` and `< 17`.

<message>
  Only one of the 2 `js` files, and the additional `css` file need to be added
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

- Check out a specific version with `git checkout v2.93.0`.
- Download a specific version as a zip from the [releases][preview-releases]
  page.

### 2. Install dependencies

Install the dependencies and build the library with the following command.

```sh
yarn install && yarn build:i18n && yarn build:prod
```

### 3. Serve files

Self-serve everything except for the `dev` folder from the `/dist` folder. You
must not alter the folder structure and `third-party` needs to be in the same
folder as `2.93.0`.

For example, if you self-host using a `box-assets` directory, these URLs must
be accessible:

- `https://cdn.YOUR_SITE.com/box-assets/2.93.0/en-US/preview.js`
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

To use UI elements an application needs to allow the domain the widget is
used on for Cross Origin Resource sharing. See the [CORS guide][cors] for more
details.

## Source Code & Releases

Source code for the Explorer Element is [hosted on GitHub][gh]. The repository
contains detailed documentation for usage and development. Please file any bugs
you encounter under the "Issues" tab with clear steps to reproduce. This
repository also holds a list of [releases][releases].

[cors]: g://security/cors
[downscope]: g://authentication/tokens/downscope
[devtoken]: g://authentication/tokens/developer-tokens
[npm]: https://www.npmjs.com/package/box-ui-elements
[polyfill]: https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js
[gh]: https://github.com/box/box-ui-elements
[releases]: https://github.com/box/box-ui-elements/releases
[npm]: https://www.npmjs.com/package/box-ui-elements
[downscope]: g://authentication/tokens/downscope
[scopes]: g://api-calls/permissions-and-errors/scopes
[preview-releases]: https://github.com/box/box-content-preview/releases
