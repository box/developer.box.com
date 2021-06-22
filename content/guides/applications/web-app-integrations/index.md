---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/web-application-integrations
  - /docs/box-web-application-integrations
---

# Web App Integration

Box Platform enables an application to provide features to Box users directly
within the Box web application. Web App Integrations allow applications become
part of the Box user experience, allowing users to share and edit files with
third-party applications.

## Features

Using a Web App Integration, a user can modify, share, or edit content stored in
Box using a third-party application. It can also offer new features to Box users
through [Recommended Apps][recommended-apps], which show up in Box Preview.

<ImageFrame border shadow width='600' center>
  ![Integration example](../images/recommended-apps-preview.png)
</ImageFrame>

By enabling a Web App Integration, an application can be added to Recommended
Apps, allowing users to use their files in the application. Integrations can be
restricted to certain content types and file extensions.

## Adding Web App Integration to an App

To make an application's features available to Box users, create a
[Custom App][custom-app] in the [Developer Console][devconsole] using
[OAuth 2.0][oauth2] authentication. It must then be released through the
[Box App Gallery][app-gallery].

Once an application is released through the App Gallery, users can add it to
their Box account by visiting the App Gallery, adding it, and using its features
via Recommended Apps.

[app-gallery]: g://applications/app-gallery
[custom-app]: g://authentication/oauth2/oauth2-setup
[oauth2]: g://authentication/oauth2
[devconsole]: https://app.box.com/developers/console
[recommended-apps]: https://community.box.com/t5/Organizing-and-Tracking-Content/Installing-Recommended-Apps-in-your-Enterprise/ta-p/80134
