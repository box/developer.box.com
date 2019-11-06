---
rank: 2
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths: []
---

# Browser Support

Box UI elements are supported in the following browsers.

- Chrome, Firefox, Safari, and Edge (latest 2 versions)
- Limited support for Internet Explorer 11 (requires a `ES2015/Intl polyfill`)
- Mobile Chrome and Safari

## ES2015 `Intl` Polyfill

Most Box UI Elements require an `ES2015`-capable browser supporting `Intl`
(ECMAScript Internationalization API). If your application needs to support
Internet Explorer 11 or Safari 9, please include a polyfill library or a service
like [`polyfill.io`](https://polyfill.io) to smartly load only the polyfills
your users need. Box also hosts the `core-js` standard library at:

[`https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js`][polyfill]

## Promises Polyfill

The Preview UI Element uses Promises. If your application needs to supports
Internet Explorer 11, please include your favorite polyfill library or a service
like [`polyfill.io`](https://polyfill.io) to smartly load only the polyfills
your users need. Box also hosts a copy of the Bluebird promise library at:

[`https://cdn01.boxcdn.net/polyfills/bluebird/3.5.1/bluebird.min.js`][bluebird]

[polyfill]: https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js
[bluebird]: https://cdn01.boxcdn.net/polyfills/bluebird/3.5.1/bluebird.min.js
