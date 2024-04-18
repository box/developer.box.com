---
hide: true
---

<!-- does not need translation -->

# Publication

Once the Gatsby site is compiled, it's automatically pushed to
the Netlify CDN by the Netlify CI/CD server.

There are currently 3 live sites:

- [production]
- [staging]
- [Japan]

They are resolved to the Netlify Edge CDN, which is tied to the
Netlify build process and handles most of the DevOps complexity
in developer documentation build.

## Service worker caching

Developer documentation site is offline-first, meaning
that it loads even if the user doesn't have an internet connection -
as long as they've loaded the site once before.

Therefore, cache invalidation is a two-pronged process, where the site first
loads the cached version, and the new site content is loaded in
the background.

## Translation process

All the translations are picked up by the translation team from GitHub.
They currently translate OpenAPI spec and Guides/Microcopy.

This is the current process:

<!-- markdownlint-disable line-length -->

- The Moji team once a month creates a snapshot of the `en` branch to the `en-snapshot` branch of the OpenAPI spec and markdown files.
- The team parses the files and sends all tokens to our translation server, Mojito.
- When all strings are translated, they are inserted to the snapshot and written to the `jp` branch, which triggers a rebuild of the Japan site.

<!-- markdownlint-enable line-length -->

## Staging

The [staging] page is automatically built from the sources on the `staging`
branch of the OpenAPI and content repositories to `en-staging` branches.
They trigger a build of the `staging` branch of the Gatsby site.

[production]: https://developer.box.com
[staging]: https://staging.developer.box.com
[Japan]: https://ja.developer.box.com
