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

| Application Type              | Authentication Methods            |
| ----------------------------- | ----------------------------------|
| [Custom App][custom-apps]     | [OAuth 2.0][oauth2] or [JWT][jwt] |
| Limited Access App            | [App token][apptoken]             |
| [Custom Skill][custom-skills] | No authorization needed           |

<!-- markdownlint-enable line-length -->

<CTA to="guide://applications/select">
  Learn how to select an application type
</CTA>

<!-- markdownlint-enable line-length -->

[oauth2]: guide://authentication/oauth2
[jwt]: guide://authentication/jwt
[apptoken]: guide://authentication/app-token
[devtoken]: guide://authentication/access-tokens/developer-tokens
[custom-apps]: g://applications/custom-apps
[custom-skills]: g://applications/custom-skills
