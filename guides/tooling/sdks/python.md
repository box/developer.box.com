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
cId: tooling
scId: tooling/sdks
id: tooling/sdks/python
isIndex: false
---

# Install Python SDK

The Box Python SDK can be used to make API calls to the Box APIs in a Python
project.

<CTA to="https://github.com/box/box-python-sdk">
Learn more about the Python SDK on GitHub

</CTA>

## Installation

To install the Python SDK run the following command from your terminal
window or command prompt using [pip][pip].

```shell
pip install boxsdk
```

## JWT application

When working with a Box App that uses server-side [JWT authentication][jwt], the
following additional module needs to be installed.

```shell
pip install "boxsdk[jwt]"
```

<CTA to="https://github.com/box/box-python-sdk">
Learn more about the Python SDK on GitHub

</CTA>

[pip]: https://pypi.org/project/pip/
[jwt]: g://authentication/jwt
