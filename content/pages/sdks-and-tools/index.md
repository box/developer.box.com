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
---

# SDKs & Tools

The following SDKs and tools are developed and supported by Box.

## SDKs

Here you will find a list of SDKs
you can use to build your application.

<Message type='notice'>
The tables below list SDKs along with additional information
telling you if the project is maintained and has API
parity.

**Status:** Describes the current project status. To learn more about statuses visit [Box Open Source website][badges].
Active projects are actively developed by Box. They receive the latest security updates and new features. For
support with these projects please visit GitHub or [our Platform support forum][forum].

**API Parity**: Projects with full API parity are actively updated with all
platform functionality as this becomes available on the Box Platform. Projects
with partial API parity lack some functionality while we work on bringing
these projects to full parity.
</Message>

### SDKs

The table lists Box SDKs that you can use when building your
applications. For latest API support and features, use the next
generation SDKs.

| Platform                          | Status     | API Parity |
| --------------------------------- | ---------- | ---------- |
| [Java SDK][javasdk]               | Active     | Full       |
| [iOS Content SDK][iossdk]         | Active     | Full       |
| [Android Content SDK][androidsdk] | Deprecated | Partial    |
| [.NET SDK][dotnetsdk]             | Stable     | Full       |
| [Python SDK][pythonsdk]           | Stable     | Full       |
| [Node SDK][nodesdk]               | Stable     | Full       |

<Message type='warning'>
As of May 31, 2023 Android SDK is no
longer supported. You can still
use your existing Android SDK applications
with no impact, but you won't receive new features,
updates, or bug fixes.

If you would like to continue getting the
latest and greatest Android features, we
recommend using Java SDK to build apps on Android.
Refer to [this][android-docs] documentation for more details.
</Message>

### Next Generation SDKs

<Message type='warning'>
  As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts.

  Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDK with no impact, but you won't receive new features, updates, or bug fixes.

  All future development, including new features and updates for Next Generation SDKs, will now be delivered through Box core SDKs starting with version `v10`.

  For more details, see our [SDK versioning strategy document][versioning].
</Message

Here's what you can expect from generated SDKs:

- **Full API Support**: New Box SDKs empower developers with complete coverage of the Box API ecosystem. You can access all the latest features and functionalities offered by Box and build feature-rich applications.
- **Rapid API Updates**: The new auto-generation development approach allows for adding Box APIs to SDKs at a much faster pace (in a matter of days). This means you can leverage the most up-to-date features in your applications without delay.
- **Embedded Documentation**: All objects and parameters are documented directly in the source code of the SDK so all the necessary information is stored in one place.
- **Enhanced Convenience Methods**: The newly introduced convenience methods cover various aspects such as authentication, chunk uploads, exponential back-offs, automatic retries, type checkers which help to ensure that you’re using variables correctly, and much more.

## Box CLI

Box CLI is a user-friendly command line tool which
allows both technical and non-technical users to
leverage Box API to perform routine or bulk actions.

| Platform   | Status | API Parity |
| ---------- | ------ | ---------- |
| [CLI][cli] | Active | Full       |

## Postman Collection

[Postman][postman] is a tool that lets you build and test HTTP requests in an
easy-to-use interface without configuring a full development environment. The
**Box Postman Collection** is a set of preconfigured requests that make it
possible to get started with the Box API without having to manually configure
the requests.

The simplest way to get started with Postman is with our Postman Quick Start guide.

<CTA to='g://tooling/postman/quick-start'>
  Get Started with the Box Postman Collection
</CTA>

## Salesforce Developer Toolkit

The Box for Salesforce Developer Toolkit allows customers to programmatically
customize the behavior of the Box for Salesforce integration. The Toolkit
consists of several global APEX methods that can be used to trigger and extend
the default behavior. The global methods can update the internal Salesforce
record to Box folder mapping and handle permission management.

<Message type='notice'>
  This functionality is part of the latest Box for
  [Salesforce package][sf-package].
</Message>

<Message type='warning'>
  # What the Toolkit does NOT provide

The Toolkit is not a full-featured APEX wrapper for the BOX Content API. If
this is what you are looking for, have a look at the
[Box SDK for Salesforce][sf-sdk].
</Message>

## Box CLI

Box CLI is a user-friendly command line tool which
allows both technical and non-technical users to
leverage Box API to perform routine or bulk actions.

| Platform                          | Maintained?  | API Parity |
| --------------------------------- | ----------- | ------- |
| [CLI][cli]                        | Yes         | Full    |

## Official UI Libraries

Extend your application with pre-built UI components to browse, share, and
preview files on Box.

|                                                                   |                                                                             |                                                                                      |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Browse                                                            | Share                                                                       | Preview                                                                              |
| ![Browse][browseimg]                                              | ![Share][shareimg]                                                          | ![Preview][previewimg]                                                               |
| Navigate and manipulate your files on Box using our pre-built UI. | Share files with our pre-built UI elements for file & folder collaboration. | Review over 120 files types, from PDFs to HD videos, with a rich preview experience. |

| Platform   |                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iOS        | [Browse SDK][iosbrowsesdk], [Share SDK][iossharesdk], [Preview SDK][iospreviewsdk]                                                                                                    |
| Android    | [Browse SDK](https://github.com/box/box-android-browse-sdk), [Share SDK](https://github.com/box/box-android-share-sdk), [Preview SDK](https://github.com/box/box-android-preview-sdk) |
| Javascript | [Box UI Elements](g://embed/ui-elements)                                                                                                                                              |

## Unofficial & Community Tools

The following tools are developed by Box and maintained by Box and its community
members. These tools do not receive regular product updates or security updates.

| Platform                        | Maintained?                           | API Parity |
| ------------------------------- | ------------------------------------- | ---------- |
| [Salesforce SDK][salesforcesdk] | Limited, by Box and community members | Partial    |
| [Ruby SDK][rubysdk]             | Limited, by Box and community members | Partial    |
| [Client-side JS SDK][jssdk]     | Limited, by Box and community members | Partial    |

<Message type='notice'>
**Maintained:** Projects with limited maintenance are updated by Box in
collaboration with the community. They receive irregular security updates. If
you are a Box customer on a premium support plan, please contact customer
services for any urgent feature requests for these tools. For other support
queries with these projects please visit GitHub or [our Platform support forum][forum].

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
[android-docs]: https://github.com/box/box-java-sdk/blob/main/doc/android.md
[cli]: https://github.com/box/boxcli
[forum]: https://community.box.com/
[browseimg]: ./browse.jpg
[shareimg]: ./share.jpg
[previewimg]: ./preview.jpg
[iosbrowsesdk]: https://github.com/box/box-ios-browse-sdk
[iossharesdk]: https://github.com/box/box-ios-share-sdk
[iospreviewsdk]: https://github.com/box/box-ios-preview-sdk
[salesforcesdk]: https://github.com/box/box-salesforce-sdk
[rubysdk]: https://github.com/cburnette/boxr
[jssdk]: https://github.com/allenmichael/box-javascript-sdk
[postman]: https://postman.com
[badges]: https://opensource.box.com/badges/
[versioning]: g://tooling/sdks/sdk-versioning

<!-- i18n-enable localize-links -->

[sf-package]: https://support.box.com/hc/en-us/articles/360044195713-Installing-and-Configuring-Box-For-Salesforce
[sf-sdk]: https://github.com/box/box-salesforce-sdk

<!-- i18n-disable localize-links -->
