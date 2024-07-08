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
id: tooling/sdks/python-gen
type: guide
total_steps: 7
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/node
previous_page_id: tooling/sdks/java
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/python-gen.md
---
# Install Python SDK (Generated)

You can use the **auto-generated** Box Python SDK to call Box APIs in a Python project.
This [next generation SDK][next-gen] brings along new functionality to designed to elevate the developer experience and streamline your integration with the Box Content Cloud.

<CTA to="https://github.com/box/box-python-sdk-gen">

Learn more about auto-generated Python SDK on GitHub

</CTA>

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