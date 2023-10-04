---
rank: 10
alias_paths:
  - /docs/usage-patterns
  - /docs/quickstart-guides
  - /docs/getting-started-box-integration
  - /docs/get-started-with-the-box-api
  - /docs/app-management
  - /docs/configuring-box-platform 
---

# Applications

## Overview

The following is an overview of the different Box Application types you can
create. 

<ImageFrame border center>
  ![Application Types](./images/select-app-type.png)
</ImageFrame>

<!-- markdownlint-disable line-length -->

| Application Type              | Authentication Methods                                              |
| ----------------------------- | ------------------------------------------------------------------- |
| [Custom App][custom-apps]     | [OAuth 2.0][oauth2], [JWT][jwt], or [Client Credentials Grant][ccg] |
| [Limited Access App][laa]     | [App Token][apptoken]                                               |
| [Custom Skill][custom-skills] | No selection needed                                                 |

<!-- markdownlint-enable line-length -->

<CTA to="guide://applications/select">
  Learn how to select an application type
</CTA>

<!-- markdownlint-enable line-length -->

## App insights

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

[oauth2]: g://authentication/oauth2
[jwt]: g://authentication/jwt
[apptoken]: g://authentication/app-token
[devtoken]: g://authentication/tokens/developer-tokens
[custom-apps]: g://applications/custom-apps
[custom-skills]: g://applications/custom-skills
[ccg]: g://authentication/client-credentials/
[laa]: g://applications/limited-access-apps/
[insights]: https://support.box.com/hc/en-us/articles/20738406915219-Platform-Insights