---
rank: 4
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
[versioning]: g://tooling/sdks/sdk-versioning