---
rank: 1
alias_paths:
  - /docs/usage-patterns
  - /docs/quickstart-guides
  - /docs/getting-started-box-integration
  - /docs/get-started-with-the-box-api
  - /docs/app-management
  - /docs/configuring-box-platform
category_id: applications
subcategory_id: null
is_index: true
id: applications
type: guide
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/index.md
---
# Applications

Box Developer Console allows you to create applications
you can then use to integrate with Box.
My Apps view displays a list of already created applications
and gives you quick access to their configuration details
and additional options. This way, you don't need to open
the app each time you want to generate
a Developer Token or copy the Client ID.

![My apps](./images/my-apps-page.png)

## Features

The My Apps page allows you to:

1. Create [a new app][select].
1. View application description using the `i` icon.
1. Copy the Client ID using the `copy` icon.
1. Check application [enablement][enablement]
and [authorization][authorization] status.
1. Use a menu available for every entry to access
the configuration details of your application or to generate a [Developer Token][token].

## App Insights

Admins and co-admins can access the Platform Insights
dashboard that provides a comprehensive
view of the organization’s platform usage.
This includes app-related data, such as:

* The total number of API calls per application.
* A list of top applications within the enterprise.
* A list of pending application approvals.
* A list of applications awaiting enablement.

See [Platform Insights][insights] for details.

<Message type='notice'>

You need the following permissions to access
and view Platform Insights:
* View settings and apps for your company
* Edit settings and apps for your company
* Run new reports and access existing reports

</Message>

[token]: g://authentication/tokens/developer-tokens
[authorization]: g://authorization
[enablement]: g://authorization/custom-app-approval#user-authentication-apps
[select]: g://applications/app-types/select
[insights]: https://support.box.com/hc/en-us/articles/20738406915219-Platform-Insights