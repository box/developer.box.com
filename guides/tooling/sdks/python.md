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
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/python
type: guide
total_steps: 6
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/node
previous_page_id: tooling/sdks/java
source_url: >-
  https://github.com/box/developer.box.com/blob/master/./content/guides/tooling/sdks/python.md
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
