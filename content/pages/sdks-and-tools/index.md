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
Separately, we have listed the next generation
Python and Typescript SDKs, which are the
newest addition.
They are still a beta feature, but we encourage
you to give them a try and explore all the
features they bring along.

<Message type='notice'>
The tables below list SDKs along with additional information
telling you if the project is maintained and has API
parity.

**Maintained:** Fully maintained projects are actively developed by Box. They
receive the latest security updates and new features. For support with these
projects please visit GitHub or [our Platform support forum][forum].

**API Parity**: Projects with full API parity are actively updated with all
platform functionality as this becomes available on the Box Platform. Projects
with partial API parity lack some functionality while we work on bringing
these projects to full parity.
</Message>

### Next generation SDKs

The latest generation Box Python SDK and Box Typescript
<<<<<<< HEAD
SDK are designed to to elevate the developer
=======
SDK are designed to elevate the developer
>>>>>>> 915012954fc3c28e346563fe997dffbe176f949a
experience and streamline your integration
with the Box Content Cloud.

<Message type='notice'>
<<<<<<< HEAD
New Typescript and Python SDKs are a Beta feature.
=======
New Typescript and Python SDKs are in a Public Beta phase.
>>>>>>> 915012954fc3c28e346563fe997dffbe176f949a
</Message>

Here's what you can expect from the new SDKs:

<<<<<<< HEAD
* **Full API Support** New Box SDKs empower developers
=======
* **Full API Support**: New Box SDKs empower developers
>>>>>>> 915012954fc3c28e346563fe997dffbe176f949a
 with complete coverage of the Box API ecosystem.
 You can access all the latest features and
functionalities offered by Box and build feature-rich applications.
* **Rapid API Updates**: The new auto-generation development
approach allows for adding Box APIs to
SDKs at a much faster pace (in a matter of days). 
This means you can leverage the most up-to-date
features in your applications without delay.
<<<<<<< HEAD
* **Embedded Documentation**  All objects and parameters
are documented directly in the source code of the SDK
so all the necessary information is stored in one place.
* **Enhanced Convenience Methods** The newly introduced
=======
* **Embedded Documentation**:  All objects and parameters
are documented directly in the source code of the SDK
so all the necessary information is stored in one place.
* **Enhanced Convenience Methods**: The newly introduced
>>>>>>> 915012954fc3c28e346563fe997dffbe176f949a
convenience methods cover various aspects such as
authentication, chunk uploads, exponential back-offs, 
automatic retries, type checkers which
help to ensure that you’re using variables correctly, 
and much more.

| Platform                          | Maintained?  | API Parity |
| --------------------------------- | ----------- | ------- |
| [Python SDK][pythongensdk] (Beta)      | Yes         | Full    |
| [Typescript SDK][tsgensdk] (Beta)      | Yes         | Full    |

### SDKs

The table lists Box SDKs that you can use
when building your applications.

| Platform                          | Maintained? | API Parity |
| --------------------------------- | ----------- | ------- |
| [Java SDK][javasdk]               | Yes         | Full    |
| [.NET SDK][dotnetsdk]             | Yes         | Full    |
| [Python SDK][pythonsdk]           | Yes         | Full    |
| [Node SDK][nodesdk]               | Yes         | Full    |
| [iOS Content SDK][iossdk]         | Yes         | Full    |
| [Android Content SDK][androidsdk] | No          | Partial |

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

<!-- markdownlint-disable line-length -->

|         |        |           |
| ------- | ------ | --------- |
| Browse  | Share  |Preview    |
| ![Browse][browseimg]   | ![Share][shareimg]   | ![Preview][previewimg]     |
| Navigate and manipulate your files on Box using our pre-built UI. | Share files with our pre-built UI elements for file & folder collaboration. | Review over 120 files types, from PDFs to HD videos, with a rich preview experience. |

| Platform   |      |
| ---------- | ---------------- |
| iOS  | [Browse SDK][iosbrowsesdk], [Share SDK][iossharesdk], [Preview SDK][iospreviewsdk]                                                                                                    |
| Android    | [Browse SDK](https://github.com/box/box-android-browse-sdk), [Share SDK](https://github.com/box/box-android-share-sdk), [Preview SDK](https://github.com/box/box-android-preview-sdk) |
| Javascript | [Box UI Elements](guide://embed/ui-elements/)    |  

  <!-- markdownlint-enable line-length -->

## Unofficial & Community Tools

The following tools are developed by Box and maintained by Box and its community
members. These tools do not receive regular product updates or security updates.

  <!-- markdownlint-disable line-length -->

| Platform   | Maintained?    | API Parity  |
| ---------- | ---------------| ------- |
| [Salesforce SDK][salesforcesdk] | Limited, by Box and community members |Partial |
| [Ruby SDK][rubysdk]             | Limited, by Box and community members | Partial |
| [Client-side JS SDK][jssdk]     | Limited, by Box and community members | Partial |

  <!-- markdownlint-enable line-length -->

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
[forum]: https://forum.box.com/
[browseimg]: ./browse.jpg
[shareimg]: ./share.jpg
[previewimg]: ./preview.jpg
[iosbrowsesdk]: https://github.com/box/box-ios-browse-sdk
[iossharesdk]: https://github.com/box/box-ios-share-sdk
[iospreviewsdk]: https://github.com/box/box-ios-preview-sdk
[salesforcesdk]: https://github.com/box/box-salesforce-sdk
[rubysdk]: https://github.com/cburnette/boxr
[jssdk]: https://github.com/allenmichael/box-javascript-sdk
[pythongensdk]: https://github.com/box/box-python-sdk-gen
<<<<<<< HEAD
[tsgensdk]: https://github.com/box/box-typescript-sdk-gen
=======
[tsgensdk]: https://github.com/box/box-typescript-sdk-gen
>>>>>>> 915012954fc3c28e346563fe997dffbe176f949a
