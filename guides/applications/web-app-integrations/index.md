---
rank: 3
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/web-application-integrations
cId: applications
scId: applications/web-app-integrations
id: applications/web-app-integrations
isIndex: true
---

# Web App Integration

Box Platform enables an application to provide features to Box users
directly within the Box web application. Web App Integrations enable
applications become part of the Box user experience, allowing users to share and
edit files with third-party applications.

## Features

Using a Web App Integration, a user can modify, share, or edit documents and
folders stored in Box using a third-party application. The application can
interact with any Box content and perform any action supported by Box. It can
offer new features to Box users through the Integrations popup menu.

<ImageFrame border shadow width='400' center>

![Integration example](../images/integration-popup.png)

</ImageFrame>

By enabling a Web App Integration an application can be added to these menus,
allowing users to use their files in the application. Integrations can be
restricted to certain content types and file extensions.

## Adding Web App Integration to an App

To make an application's features available to Box users, create [Custom
App][custom-app] application in the [developer console][devconsole] using [OAuth
2.0][oauth2] authentication.

It must then be configured to support the features of the Box API that it needs
and be release through the [Box App Gallery][app-gallery].

Once an application is released through the App Gallery, users can add it to
their Box accounts by visiting the App Gallery and use its features from the
context menus provided by files and folders.

[app-gallery]: g://applications/app-gallery
[custom-app]: g://applications/custom-apps/oauth2-setup
[oauth2]: g://authentication/oauth2
[devconsole]: https://app.box.com/developers/console
