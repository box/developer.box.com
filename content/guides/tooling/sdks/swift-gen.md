---
rank: 10
related_endpoints: []
related_guides: []
related_pages:
 - sdks-and-tools
required_guides: []
related_resources: []
alias_paths: []
---

# Deprecated Swift SDK

<Message type='warning'>
  As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts.

  Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDK with no impact, but you won't receive new features, updates, or bug fixes.

  All future development, including new features and updates for Next Generation SDKs, will now be delivered through Box core SDKs starting with version `v10`.

  For more details, see our [SDK versioning strategy document][versioning].
</Message

You can use Box Swift SDK to call Box APIs in a Swift
project.

## Swift Package Manager

[Swift Package Manager][spm] is a tool for managing the distribution of Swift code. It is integrated with the Swift build system to automate the process of downloading, compiling, and linking dependencies.

To add a dependency to your Xcode project:

1. Select **File** > **Add Package Dependency** in your Xcode project.
2. Click the **plus** icon > **Add Package Collection**.
2. Enter the following repository URL: `https://github.com/box/box-swift-sdk-gen.git` and click **Load**.

Alternatively you can add a dependency to the dependencies value of your `Package.swift`.

For detailed instructions, please see the official documentation for [Swift Package Manager][spm] and [XCode documentation][xcode].

## Carthage

Carthage is a decentralized dependency manager which builds your dependencies and provides you with binary frameworks.

To add a dependency to `BoxSdkGen`:

1. add the following line to your `Cartfile` :

```bash
git "https://github.com/box/box-swift-sdk-gen.git"
```

2. Run:

```bash
carthage bootstrap --use-xcframeworks
```

3. Drag the built `xcframework` from **Carthage/Build** into your project.

For more detailed instructions, please see the [official documentation for Carthage][carthage].

[spm]: https://www.swift.org/documentation/package-manager/
[xcode]: https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app
[carthage]: https://github.com/Carthage/Carthage#adding-frameworks-to-an-application
[versioning]: g://tooling/sdks/sdk-versioning