---
rank: 5
related_endpoints: []
related_guides:
  - authentication/jwt
  - authentication/oauth2
related_pages:
  - sdks-and-tools
required_guides: []
related_resources: []
alias_paths:
  - /docs/box-for-salesforce-developer-toolkit
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/salesforce
type: guide
total_steps: 7
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks
previous_page_id: tooling/sdks/node
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/salesforce.md
---
# Install Salesforce SDK

The Salesforce SDK can be deployed directly to Sandbox or Developer
organizations by using the [Deploy to Salesforce][deploy_salesforce]
functionality.

<Message type='notice'>

"Deploy to Salesforce" functionality is not owned or maintained by Box.

</Message>

The SDK is also distributed as an unmanaged package:

- [Production/Developer Package][salesforce_pkg_prod]
- [Sandbox Package][salesforce_pkg_sandbox]

<Message type='warning'>

Unmanaged packages can't be upgraded once installed in a Salesforce org so
future upgrades will have to be applied by cloning the repositories locally
and updating classes from your IDE.

</Message>

[deploy_salesforce]: https://githubsfdeploy.herokuapp.com/?owner=box&repo=box-salesforce-sdk
[salesforce_pkg_prod]: https://cloud.box.com/Box-Apex-SDK
[salesforce_pkg_sandbox]: https://cloud.box.com/Box-Apex-SDK-Sandbox