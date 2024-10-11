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
id: tooling/sdks/node
type: guide
total_steps: 9
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/salesforce
previous_page_id: tooling/sdks/python-gen
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/node.md
---
# Install Node SDK (Deprecated)

You can use Box Node SDK to call Box APIs in a Node
project.

<Message type='notice'>

[Node SDK][node] is currently in maintenance mode and will be deprecated soon.
This means only critical security updates and bug fixes will be
implemented.
It is recommended to use the [auto-generated TypeScript SDK][ts-gen].

</Message>

<CTA to="https://github.com/box/box-node-sdk">

Learn more about Node SDK on GitHub

</CTA>

## NPM installation

To install the Node SDK run the following command from your terminal
window or command prompt using the [Node Package Manager][npm].

```shell
npm install box-node-sdk --save
```

## Yarn installation

Similarly, the SDK can be installed using the [Yarn package][yarn] manager.

```shell
yarn add box-node-sdk
```

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[ts-gen]: g://tooling/sdks/typescript-gen
[node]: https://github.com/box/box-node-sdk