---
rank: 40
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/install-the-sdk
  - /docs/open-source-projects
  - /docs/community-supported-projects
category_id: tooling
subcategory_id: tooling/sdks
is_index: true
id: tooling/sdks
type: guide
total_steps: 10
sibling_id: tooling
parent_id: tooling
next_page_id: ''
previous_page_id: tooling/sdks/swift-gen
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/index.md
---
# SDKs

Box offers a set of SDKs
you can use to build your application.

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

The table lists legacy Box SDKs that you can use when building your
applications. For latest API support and features, use the next
generation SDKs.

| Platform   |  Maintained?  | API Parity |
| --- | ------- |-------- |
| [Java SDK][javasdk]   | Yes |    Partial    |
| [iOS Content SDK][iossdk]   |   Yes    |    Partial    |
| [Android Content SDK][androidsdk] |   No   |  Partial   |
| [.NET SDK][dotnetsdk]             | Yes  |    Partial    |
| [Python SDK][pythonsdk]           | Yes  |    Partial    |
| [Node SDK][nodesdk]               | Yes  |    Partial    |

<Message type='warning'>

As of May 31, 2023 Android SDK is no
longer supported. You can still
use your existing Android SDK applications
with no impact, but you won't receive new features,
updates, or bug fixes.

If you would like to continue getting the
latest and greatest Android features, use Java SDK to
build apps on Android.
Refer to [this][android-docs] documentation for more details.

</Message>

## Next generation SDKs

<Message type='warning'>

In mid-August, we will be deprecating the Box Next Gen SDKs in its current form. **Don’t worry, your existing code will continue to work without changes**.

## Why we are making this change

In keeping with industry best practices, we are consolidating the Next Gen and legacy SDKs into a single package. This makes migration efforts much easier and allows you to seamlessly add new capabilities to existing applications still powered by the legacy SDKs.

Ultimately, the Next Generation SDKs will replace the current legacy SDKs as the latest major version release. Read more to learn the details.

To learn more visit our SDK [versioning strategy document][versioning]

</Message>

The latest generation Box Python SDK, Box TypeScript
SDK, .NET SDK, and Swift SDK are designed to elevate the developer
experience and streamline your integration
with the Box Content Cloud.

Here's what you can expect from the new SDKs:

- **Full API Support**: New Box SDKs empower developers with complete coverage of the Box API ecosystem. You can access all the latest features and functionalities offered by Box and build feature-rich applications.
- **Rapid API Updates**: The new auto-generation development approach allows for adding Box APIs to SDKs at a much faster pace (in a matter of days). This means you can leverage the most up-to-date features in your applications without delay.
- **Embedded Documentation**: All objects and parameters are documented directly in the source code of the SDK so all the necessary information is stored in one place.
- **Enhanced Convenience Methods**: The newly introduced convenience methods cover various aspects such as authentication, chunk uploads, exponential back-offs, automatic retries, type checkers which help to ensure that you’re using variables correctly, and much more.

<!-- i18n-enable localize-links -->

[javasdk]: https://github.com/box/box-java-sdk
[dotnetsdk]: https://github.com/box/box-windows-sdk-v2
[pythonsdk]: https://github.com/box/box-python-sdk
[nodesdk]: https://github.com/box/box-node-sdk
[iossdk]: https://github.com/box/box-ios-sdk
[androidsdk]: https://github.com/box/box-android-sdk
[android-docs]: https://github.com/box/box-java-sdk/blob/main/doc/android.md
[versioning]: g://tooling/sdks/sdk-versioning
[forum]: https://community.box.com/sdks-and-tools-7

<!-- i18n-disable localize-links -->