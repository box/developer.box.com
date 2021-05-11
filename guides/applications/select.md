---
rank: 1
related_endpoints: []
related_guides:
  - authentication/select
required_guides: []
related_resources: []
alias_paths:
  - /docs/use-case-recipes
  - /v2/docs/box-api-recipes
category_id: applications
subcategory_id: null
is_index: false
id: applications/select
type: guide
total_steps: 2
sibling_id: applications
parent_id: applications
next_page_id: applications/app-gallery
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/select.md
---
# Select App Type

Upon creating a new Box application in the [Developer Console][dev-console],
you must select one of the following types of applications. The type of
application you select is dependent on the use case for your project and only
impacts the available authentication methods when configuring your application.
You cannot change this selection later on.

<ImageFrame shadow center>

![App Type Selection](images/select-app-type.png)

</ImageFrame>

## Custom App

<!-- markdownlint-disable line-length -->

|                            |                                                                            |
| -------------------------- | -------------------------------------------------------------------------- |
| **Authentication methods** | [OAuth 2.0][oauth2], [JWT][jwt], or Client Credentials Authentication      |
| **Notable Features**        | Webhooks, App Gallery, and Web App Integrations                           |

<!-- markdownlint-enable line-length -->

Custom App encompasses most use cases and is the most flexible option.
This application type allows for interaction with our 150+ endpoints.
For example, downloading/uploading, searching, applying metadata and more.

<CTA to="g://applications/custom-apps">

Learn more about Custom Apps

</CTA>

## Limited Access App

|                            |                                       |
| -------------------------- | ------------------------------------- |
| **Authentication methods** | [App Token][app-token]                |
| **Notable Features**       | Limited API access                    |

A Limited Access App is best for leveraging [Box View][view-app] or previewing
Box content within another application. This type of application can only
interact with a limited number of endpoints.

## Custom Skills

|                            |                                |
| -------------------------- | ------------------------------ |
| **Authentication methods** | Access Tokens in Skills events |
| **Notable Features**       | Limited API access             |

A Custom Skill, or Box Skill is a type of application that performs custom
processing for files uploaded to Box. Skills are designed to make it possible to
use third-party Machine Learning services to automatically extract information
from files uploaded to Box.

<CTA to="g://applications/custom-skills">

Learn more about Custom Skills

</CTA>

[oauth2]: g://authentication/oauth2
[jwt]: g://authentication/jwt
[app-token]: g://authentication/app-token
[custom-apps]: g://applications/custom-apps
[dev-console]: https://app.box.com/developers/console
[view-app]: https://developer.box.com/guides/embed/box-view/