---
rank: 3
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

# Install Python SDK (Deprecated)

You can use Box Python SDK to call Box APIs in a Python project.

<Message type='notice'>
 [Python SDK](https://github.com/box/box-python-sdk)
 is currently in maintenance mode and will be deprecated soon.
 This means only critical security updates and bug fixes will be
 implemented.
 It is recommended to use the [auto-generated Python SDK][python-gen].
</Message>

<CTA to="https://github.com/box/box-python-sdk">
  Learn more about Python SDK on GitHub
</CTA>

## Installation

To install the Python SDK run the following command from your terminal
window or command prompt using [pip][pip].

```shell
pip install boxsdk
```

## JWT application

When working with a Box App that uses server-side [JWT authentication][jwt], install the following additional module:

```shell
pip install "boxsdk[jwt]"
```

[pip]: https://pypi.org/project/pip/
[jwt]: g://authentication/jwt
[python-gen]: g://tooling/sdks/python-gen
