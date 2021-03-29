---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/app-authorization
rank: 2
total_steps: 4
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/cli-installation
previous_page_id: tooling/cli/quick-start/create-jwt-app
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/2-app-authorization.md
---
# App authorization

All applications leveraging Server Authentication must be authorized in the
Admin Console before making successful API calls. This is because all JWT
applications have a [Service Account][sa], which, based on the applications
[scopes][scopes], may be able to perform Admin actions.

Steps for developers and Admins can be found in our [authorization guide][ag].

You will know when an application is ready for use by visiting its Authorization
tab in the [Developer Console][dc]. The state and status must be enabled and
authorized.

<ImageFrame center>

![App Authorized](./app-authorized.png)

</ImageFrame>

<Next>

My app is authorized

</Next>

[sa]: g://authentication/user-types/service-account/
[scopes]: g://api-calls/permissions-and-errors/scopes/
[ag]: g://applications/custom-apps/app-approval/
[dc]: https://app.box.com/developers/console