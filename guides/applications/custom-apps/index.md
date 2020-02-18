---
rank: 1
alias_paths:
  - /docs/custom-applications
  - /docs/custom-integrations
  - /docs/partner-integrations
  - /docs/getting-started-box-platform
  - /docs/box-platform
category_id: applications
subcategory_id: applications/custom-apps
is_index: true
id: applications/custom-apps
type: guide
total_steps: 4
sibling_id: applications
parent_id: applications
next_page_id: applications/custom-apps/jwt-setup
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/master/./content/guides/applications/custom-apps/index.md
---

# Custom Apps

By far the more flexible way to use Box Platform is through a **Custom App**
integration.

Custom Apps support [OAuth 2.0][oauth2], [JWT][jwt], and [App Token][app-token]
authentication. They allow the application to manipulate files and folders, as
well as interact with tasks, legal holds, and other enterprise-level properties.

A custom application typically presents Box functionality to a user within a
custom interface. Box offers pre-built user interface components known as UI
Elements for functionality like browsing, search, viewing and more that can be
customized, or you can build your own.

## Authentication methods

Custom Apps support three different types of authentication that determine the
abilities and restrictions of your application. The following is a quick
overview of the key differences.

<!-- markdownlint-disable line-length -->

|                                   | OAuth 2.0 | JWT | App Tokens |
| --------------------------------- | --------- | --- | ---------- |
| Requires user involvement?        | Yes       | No  | No         |
| Requires admin approval?          | No        | Yes | Yes        |
| Can act on behalf of other users? | Yes       | Yes | No         |
| Do users see Box?                 | Yes       | No  | No         |
| Can create App Users?             | No        | Yes | No         |

<!-- markdownlint-enable line-length -->

<CTA to='g://authentication/select'>
Learn more about the different types of authentication

</CTA>

## When to use a Custom App

A Custom App is best used when the application:

- Wants to use [OAuth 2.0][oauth2], [JWT][jwt], or [App Token][app-token] authentication
- Wants to upload and download files
- Wants the freedom to access both their own files, as well as files owned by
other users, even external users.
- Wants the option to list the application in the Box App Gallery
- Wants to provide integration into the Box Web App

[oauth2]: guide://authentication/oauth2
[jwt]: guide://authentication/jwt
[app-token]: guide://authentication/app-token
