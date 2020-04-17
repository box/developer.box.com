---
rank: 0
type: quick-start
hide_step_number: true
hide_in_page_nav: true
category_id: identity-management
subcategory_id: identity-management/quick-start
is_index: true
id: identity-management/quick-start
total_steps: 6
sibling_id: identity-management
parent_id: identity-management
next_page_id: identity-management/quick-start/scaffold-application-code
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/master/content/guides/identity-management/quick-start/0-index.md
---

# Okta app user provisioning

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

This guide will take you through the following steps.

1. [Scaffold your application code][step1] so that
we have a web application that we can log in to.
1. [Setup and configure your Okta application][step2] and create
a first user that we can use to log into the web app with, and eventually
create a Box account for.
1. [Setup and configure your Box application][step3] so that we
can connect your web application to Box.
1. [Create a log in flow for your application][step4],
allowing the Okta user to log in to your web application.
1. [Find an existing Box user, and optionally create a Box user][step5] the
first time that Okta user logs into your web application.
1. [And finally, run the application][step6] and the see
the complete flow in action.

<Message warning>

To simplify this guide we will not create any user interface for the web
application. Instead we will provide some output via the application console /
terminal, or directly as text output in the browser.

</Message>

<Next>

I am ready to get started

</Next>

[okta]: https://www.okta.com/
[okta-dev]: https://developer.okta.com/
[step1]: g://identity-management/quick-start/scaffold-application-code/
[step2]: g://identity-management/quick-start/configure-okta/
[step3]: g://identity-management/quick-start/configure-box/
[step4]: g://identity-management/quick-start/logging-into-app/
[step5]: g://identity-management/quick-start/find-or-create-box-users/
[step6]: g://identity-management/quick-start/run-the-app/
