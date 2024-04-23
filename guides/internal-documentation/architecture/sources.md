---
hide: true
category_id: internal-documentation
subcategory_id: internal-documentation/architecture
is_index: false
id: internal-documentation/architecture/sources
rank: 1
type: guide
total_steps: 3
sibling_id: internal-documentation/architecture
parent_id: internal-documentation/architecture
next_page_id: internal-documentation/architecture/build
previous_page_id: internal-documentation/architecture
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/architecture/1-sources.md
---
<!-- does not need translation -->

# Sources

A set of sources, managed by technical publications team (in collaboration
with the developer relations team) and other teams, is used to
build the content for Box developer documentation.
The sources are stored in GitHub repositories.

<ImageFrame center shadow border>

![Sources](./images/Sources2.png)

</ImageFrame>

## Site sources managed by Tech Pubs and Dev Rel teams

- [Box Platform API] - a set of files that represent the Open API 3.0 specification for the Box Platform API. These files describe up-to-date contents of the API endpoints.
- [developer.box.com, box.dev] - a set of files that represent the microcopy, locale configuration, guides, and pages for the developer documentation site.
- [Framework] - source for the Gatsby templates and importers for the developer documentation site.
- [Changelog] - markdown source for all release notes for Box Platform: APIs, SDKs, UI elements, and CLI.

## Site sources managed by other teams

- [CLI] - source code and documentation with code samples for the Box CLI.
- [Python SDK] - source code and documentation with code samples for the Box Python SDK.
- [Node SDK] - source code and documentation with code samples for the Box Node SDK.
- [Java SDK] - source code and documentation with code samples for the Box Java SDK.
- [.NET SDK] - source code and documentation with code samples for the Box .NET SDK.

## Source validation

The OpenAPI 3.0 Specification is kept in separate files to make it easier for
contributors to edit them. When there are any changes, the source is validated
and tested before source resolving occurs.

For the OpenAPI 3.0 specification we ensure that:

- files conform to the OpenAPI 3.0 specification,
- all descriptions and titles pass spell checks for the `en-US` locale,
- there is no insensitive language in the documentation,
- the specification contains all the information necessary to build the site.

All validation is handled by using Jest, Spectral, AlexJS, and GitHub actions.
The status of the build can be monitored on GitHub and in the `#devrel-build`
Slack channel.

## Source resolving

As the sources from **OpenAPI 3.0 Specification** and **Microcopy, locales and**
**guides** start off as multiple files, they are compiled into single files with
the [Stoplight's JSON Resolver]. The resolved content is published back to the
`en` branch of the source for the content in English.
Then the translation team pick up the files, translates them, and writes them
back to additional branches for each translation (for example `jp`).

[Box Platform API]: https://github.com/box/box-openapi
[developer.box.com]: https://github.com/box/developer.box.com
[Framework]: https://github.com/box/developer.box.com-framework
[Changelog]: https://github.com/box/box-developer-changelog
[CLI]: https://github.com/box/boxcli
[Python SDK]: https://github.com/box/box-python-sdk
[Node SDK]: https://github.com/box/box-node-sdk
[Java SDK]: https://github.com/box/box-java-sdk
[.NET SDK]: https://github.com/box/box-windows-sdk
[Stoplight's JSON Resolver]: https://github.com/stoplightio/json-ref-resolver