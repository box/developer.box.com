---
alias_paths:
  - /docs/api-changelog
centered: true
rank: 0
---

<!-- alex disable postman-postwoman -->

# Changelog

For historical changelog entries, please see our
[2019](page://changelog/2019) and
[2018 release notes](page://changelog/2018).

## 2020-04-01 / New `classification` field for Files

A new optional field has been made available within the `Field` object,
`classification`. This field represents the classification that is currently
applied to a file.

The classification can be requested via any endpoint that returns a file, like
the [Get file information](endpoint://get-files-id) and supports [requesting
additional `fields`](g://api-calls/request-extra-fields).

```js
{
  "id": "123456789",
  "type": "file",
  "etag": "1",
  "classification": {     
    "name": "Top Secret",     
    "definition": "Content that should not be shared outside the company."
     "color": { 
         "background": "#FF0000",
         "foreground": "#FF00CC" 
     }
  }
}
```

The classification can be set through the API, Box Shield, or by a user using
the web application.

## 2020-02-03 / Preview SDK `v2.34.0` Released

Version `2.34.0` of the Preview SDK has been released. New JavaScript and CSS
Preview files have been made available. To adopt new changes, please see the
[UI Elements manual installation][ui-elements-manual-install] links for Content
Preview.

Please see the `v2.34.0` [release notes][preview-2.34-release-notes] for a list
of all feature changes.

## 2020-01-22 / Preview SDK `v2.33.1` Released

Version `2.33.1` of the Preview SDK has been released. New JavaScript and CSS
Preview files have been made available. To adopt new changes, please see the
[UI Elements manual installation][ui-elements-manual-install] links for Content
Preview.

Please see the `v2.33.1` [release notes][preview-2.33-release-notes] for a list
of all feature changes.

## 2020-01-20 / Refreshed Postman Collection & Quick Start

The Box Postman collection has been updated with new features and an integrated
quick-start guide. Key features include:

* An end-to-end [Postman quick-start guide][postman-quick-start-guide] that
  helps users to install Postman, set up a Box App, and load their API
  credentials into Postman.
* A [restructured Postman collection][postman-collection] for the Box APIs that
  automatically detects when API credentials have expired and offers integrated
  solutions for refreshing these credentials when needed.

The [legacy Postman collection][legacy-postman-collection] will remain available
for the foreseeable future.

[postman-quick-start-guide]: g://tooling/postman/quick-start
[postman-collection]: g://tooling/postman/install
[legacy-postman-collection]: g://tooling/postman/legacy

[ui-elements-manual-install]: g://embed/ui-elements/installation/#manual-installation
[preview-2.34-release-notes]: https://github.com/box/box-content-preview/releases/tag/v2.34.0
[preview-2.33-release-notes]: https://github.com/box/box-content-preview/releases/tag/v2.33.1
