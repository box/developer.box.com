---
rank: 0
type: quick-start
hide_step_number: true
hide_in_page_nav: true
icon: FiUsers
category_id: sso-identities-and-app-users
subcategory_id: sso-identities-and-app-users/connect-okta-to-app-users
is_index: true
id: sso-identities-and-app-users/connect-okta-to-app-users
total_steps: 6
sibling_id: sso-identities-and-app-users
parent_id: sso-identities-and-app-users
next_page_id: >-
  sso-identities-and-app-users/connect-okta-to-app-users/scaffold-application-code
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/sso-identities-and-app-users/connect-okta-to-app-users/0-index.md
---
# Connect Okta identities to Box App Users in a web app

[Okta][okta] is a popular access management and identity platform used by
companies to provide a unified method for managing and authenticating into
multiple applications with a single set of credentials and a single secure
dashboard.

When connected to a custom Box application, the [Okta APIs][okta-dev] may be
used to provide a single login mechanism to identify users within the Box
application, allowing you to have a unified experience between your unified
identity system (Okta) and the Box APIs.

<ImageFrame noborder center shadow>

![Okta Dashboard](./img/okta-dashboard.png)

</ImageFrame>

## Overview

This quick start guide will walk you through how to programmatically use Okta to
log in to a Box application, provision an app user in Box that is linked to
the Okta user, then make Box API calls on behalf of that user.

This will take you through the following steps.

1. [Scaffold your application code][step1] so that we have a web application that we can log in to.
2. [Setup and configure your Okta application][step2] and create a first user that we can use to log into the web app with, and eventually create a Box account for.
3. [Setup and configure your Box application][step3] so that we can connect your web application to Box.
4. [Create a log in flow for your application][step4], allowing the Okta user to log in to your web application.
5. [Find an existing Box user, and optionally create a Box user][step5] the first time that Okta user logs into your web application.
6. [And finally, run the application][step6] and the see the complete flow in action.

At the end of the tutorial we will output a single message to the browser. If
this is the first time an Okta user logs in to Box via the application, an
associated Box user will be created and the message
`New user created: {{USERNAME}}` will be output to the browser.

When attempting to log in with this user in subsequent attempts, a message
stating `Hello {{USERNAME}}` will now be output to the browser.

<Message warning>

To simplify this guide we will not create any user interface for the web
application. Instead we will provide some output via the application console /
terminal and directly as text output in the browser.

</Message>

<Next>

I am ready to get started

</Next>

[okta]: https://www.okta.com/
[okta-dev]: https://developer.okta.com/
[step1]: g://sso-identities-and-app-users/connect-okta-to-app-users/scaffold-application-code/
[step2]: g://sso-identities-and-app-users/connect-okta-to-app-users/configure-okta/
[step3]: g://sso-identities-and-app-users/connect-okta-to-app-users/configure-box/
[step4]: g://sso-identities-and-app-users/connect-okta-to-app-users/logging-into-app/
[step5]: g://sso-identities-and-app-users/connect-okta-to-app-users/find-or-create-box-users/
[step6]: g://sso-identities-and-app-users/connect-okta-to-app-users/run-the-app/