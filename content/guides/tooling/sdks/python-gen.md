---
rank: 8
related_endpoints: []
related_guides:
  - authentication/jwt
  - authentication/oauth2
related_pages:
  - sdks-and-tools
required_guides: []
related_resources: []
alias_paths: []
---

# Deprecated Python SDK

<Message type='warning'>
  As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts.

  Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDK with no impact, but you won't receive new features, updates, or bug fixes.

  All future development, including new features and updates for Next Generation SDKs, will now be delivered through Box core SDKs starting with version `v10`.

  For more details, see our [SDK versioning strategy document][versioning].
</Message>

You can use the **auto-generated** Box Python SDK to call Box APIs in a Python project.
This [next generation SDK][next-gen] brings along new functionality to designed to elevate the developer experience and streamline your integration with the Box Content Cloud.

## Installation

To install the auto-generated Python SDK run the following command from your terminal window or command prompt using [pip][pip].

```shell
pip install box-sdk-gen
```

## JWT application

When working with a Box App that uses server-side [JWT authentication][jwt], install the following additional module:

```shell
pip install "box-sdk-gen[jwt]"
```

[pip]: https://pypi.org/project/pip/
[jwt]: g://authentication/jwt
[next-gen]: g://tooling/sdks#next-generation-sdks
[py-gen]: https://github.com/box/box-python-sdk-gen
[versioning]: g://tooling/sdks/sdk-versioning