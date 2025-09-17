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
---

# Box SDKs

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

The table lists Box SDKs that you can use when building your
applications. For latest API support and features, use the next
generation SDKs.

| Platform   |  Maintained?  | API Parity |
| --- | ------- |-------- |
| [Java SDK][javasdk]   | Yes |    Full    |
| [iOS Content SDK][iossdk]   |   Yes    |    Full    |
| [.NET SDK][dotnetsdk]             | Yes  |    Full    |
| [Python SDK][pythonsdk]           | Yes  |    Full    |
| [Node SDK][nodesdk]               | Yes  |    Full    |
| [Android Content SDK][androidsdk] |   No   |  Full   |

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

## Next Generation SDKs

<Message type='warning'>
  As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts.

  Don't worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDKs with no impact, but you won't receive new features, updates, or bug fixes.

  In keeping with industry best practices, we are consolidating the Box Next Generation SDKs and Box core SDKs into a single package for each programming language. This makes migration efforts much easier and allows seamless additions of new capabilities to existing applications still powered by Box core SDKs, which were maintained manually.

  All future development, including new features and updates for the Next Generation SDKs, will be delivered through Box core SDKs starting with version `v10`. Currently, `v10` is available as a separate branch.

  For more details, see our [SDK versioning strategy document][versioning].
</Message>

The latest generation Box Python SDK, Box TypeScript
SDK, .NET SDK, and Swift SDK are designed to elevate the developer
experience and streamline your integration
with Box Content Cloud.

Here's what you can expect from the new SDKs:

- **Full API support**: New Box SDKs empower developers with complete coverage of the Box API ecosystem. You can access all the latest features and functionalities offered by Box and build feature-rich applications.
- **Rapid API updates**: The new auto-generation development approach allows you to add Box APIs to SDKs at a much faster pace (in a matter of days). This means you can leverage the most up-to-date features in your applications without delay.
- **Embedded documentation**: All objects and parameters are documented directly in the source code of the SDK so all the necessary information is stored in one place.
- **Enhanced convenience methods**: The newly introduced convenience methods cover various aspects such as authentication, chunk uploads, exponential back-offs, automatic retries, type checkers which help to ensure that you’re using variables correctly, and much more.

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