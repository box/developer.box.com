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
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/python
type: guide
total_steps: 10
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/node
previous_page_id: tooling/sdks/java
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/python.md
---
# Install Python SDK

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