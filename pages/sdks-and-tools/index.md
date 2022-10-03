---
alias_paths:
  - /sdks
  - /docs/sdks-and-tools
  - /docs/sdks
  - /docs/box-sdks
  - /docs/mobile-sdks
  - /page/sdks
  - /docs/box-sdk-license
centered: true
category_id: sdks-and-tools
subcategory_id: null
is_index: true
id: sdks-and-tools
rank: 0
type: page
total_steps: 0
sibling_id: pages
parent_id: pages
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sdks-and-tools/index.md
---
# SDKs & Tools

The following tools are actively developed and supported by Box. These tools
receive regular product updates, as well as security updates.

## Official SDKs & CLIs

| Platform                          | Maintained? | Parity? |
| --------------------------------- | ----------- | ------- |
| [Java SDK][javasdk]               | Yes         | Full    |
| [.NET SDK][dotnetsdk]             | Yes         | Full    |
| [Python SDK][pythonsdk]           | Yes         | Full    |
| [Node SDK][nodesdk]               | Yes         | Full    |
| [CLI][cli]                        | Yes         | Full    |
| [iOS Content SDK][iossdk]         | Yes         | Full    |
| [Android Content SDK][androidsdk] | Yes         | Partial |

<Message type='notice'>

**Maintained:** Fully maintained projects are actively developed by Box. They
receive the latest security updates and new features. For support with these
projects please visit GitHub or [our Platform support forum][forum].

**API Parity**: Projects with full API parity are actively updated with all
platform functionality as this becomes available on the Box Platform. Projects
with partial API parity lack some functionality while we work on bringing
these projects to full parity.

</Message>

## Official UI Libraries

Extend your application with pre-built UI components to browse, share, and
preview files on Box.

<!-- markdownlint-disable line-length -->

|                                                                   |                                                                             |                                                                                      |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Browse                                                            | Share                                                                       | Preview                                                                              |
| ![Browse][browseimg]                                              | ![Share][shareimg]                                                          | ![Preview][previewimg]                                                               |
| Navigate and manipulate your files on Box using our pre-built UI. | Share files with our pre-built UI elements for file & folder collaboration. | Review over 120 files types, from PDFs to HD videos, with a rich preview experience. |

| Platform   |                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iOS        | [Browse SDK][iosbrowsesdk], [Share SDK][iossharesdk], [Preview SDK][iospreviewsdk]                                                                                                    |
| Android    | [Browse SDK](https://github.com/box/box-android-browse-sdk), [Share SDK](https://github.com/box/box-android-share-sdk), [Preview SDK](https://github.com/box/box-android-preview-sdk) |
| Javascript | [Box UI Elements](guide://embed/ui-elements/)                                                                                                                                                |

<!-- markdownlint-enable line-length -->

<Message type='notice'>

**Maintained:** Fully maintained projects are actively developed by Box. They
receive the latest security updates and new features.  For support with these
projects please visit GitHub or [our Platform support
forum][forum]."

</Message>

## Unofficial & Community Tools

The following tools are developed by Box and maintained by Box and its community
members. These tools do not receive regular product updates or security updates.

<!-- markdownlint-disable line-length -->

| Platform                        | Maintained?                           | Parity  |
| ------------------------------- | ------------------------------------- | ------- |
| [Salesforce SDK][salesforcesdk] | Limited, by Box and community members | Partial |
| [Ruby SDK][rubysdk]             | Limited, by Box and community members | Partial |
| [Client-side JS SDK][jssdk]     | Limited, by Box and community members | Partial |

<!-- markdownlint-enable line-length -->

<Message type='notice'>

**Maintained:** Projects with limited maintenance are updated by Box in
collaboration with the community. They receive irregular security updates. If
you are a Box customer on a premium support plan, please contact customer
services for any urgent feature requests for these tools. For other support
queries with these projects please visit GitHub or [our Platform support
forum][forum].

**API Parity:**  Projects with limited API parity can lack some functionality
as new features are not automatically rolled out to these projects as they
become available for the Box Platform. If you are a Box customer on a premium
support plan, please contact customer services for any urgent feature requests
for these tools.

</Message>

[javasdk]: https://github.com/box/box-java-sdk
[dotnetsdk]: https://github.com/box/box-windows-sdk-v2
[pythonsdk]: https://github.com/box/box-python-sdk
[nodesdk]: https://github.com/box/box-node-sdk
[iossdk]: https://github.com/box/box-ios-sdk
[androidsdk]: https://github.com/box/box-android-sdk
[cli]: https://github.com/box/boxcli
[forum]: https://community.box.com/t5/Platform-and-Development-Forum/bd-p/DeveloperForum
[browseimg]: ./browse.jpg
[shareimg]: ./share.jpg
[previewimg]: ./preview.jpg
[iosbrowsesdk]: https://github.com/box/box-ios-browse-sdk
[iossharesdk]: https://github.com/box/box-ios-share-sdk
[iospreviewsdk]: https://github.com/box/box-ios-preview-sdk
[salesforcesdk]: https://github.com/box/box-salesforce-sdk
[rubysdk]: https://github.com/cburnette/boxr
[jssdk]: https://github.com/allenmichael/box-javascript-sdk