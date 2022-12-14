---
rank: 50
related_endpoints: []
related_guides: 
  - authentication/oauth2/oauth2-setup
  - authentication/oauth2
required_guides: []
related_resources: []
alias_paths: 
  - /docs/publishing-your-application
  - /guides/applications/app-gallery
  - /guides/applications/app-gallery/
---

# App Center

The [Box App Center][app-center] is the first place for Box users to find out
about applications that they can use in combination with Box. If your
application is suited to be used by other enterprises, listing your service in
the App Center can be a great way to find new users.
App center groups apps into sections so that you can 
quickly find featured, most popular, or recently added apps. 

<ImageFrame shadow center>
  ![App Center](./images/app-center.png)
</ImageFrame>

## Developing and app or becoming a Box Partner

If you would more information on developing an application for the Box App
Center or becoming a Box Partner, visit our [Box Partner Resources][bp] guides
on our community site.

## Publishing an app

Use the following steps to publish an application in the [App
Center][app-center].

### Prerequisites

Your application must meet the following requirements:

* The application is in a finished state and ready for production usage.
* The application leverages OAuth 2.0 authentication, as the App Center does
  not support any other authentication methods.
* You are a developer with access to the application in the
  [Developer Console][devconsole].

### 1. Log in to the Developer Console

Navigate to the [Developer Console][devconsole] and select your application to
submit to the App Center.

### 2. Fill in the form

Select the **App Center** tab from the top menu.

<ImageFrame center border shadow>
  ![App Center panel](./images/app-menu.png)
</ImageFrame>

Click the button to "Submit My App".

<ImageFrame center border shadow width='400'>
  ![Submit My App button](./images/submit-app.png)
</ImageFrame>

Then, fill in the form with your application's categories, a short and a long
description, screenshots and an app icon.

### 3. Preview the listing

Select the "Preview" button to see a preview of your application listing.

<ImageFrame center border shadow>
  ![Preview and Submit](./images/submit-and-approve.png)
</ImageFrame>

### 4. Submit for approval

Finally, submit the application for approval by clicking the "Submit for
Approval" button.

<Message>
  # Approval completion

  Once a request for approval is received, the Box Partner team will be
  notified and review your request as soon as possible. 

  For any questions, please email [`integrate@box.com`][email] or submit a 
  support ticket.
</Message>

## Unpublishing an application

Once approved and published, an application can be unpublished from the same
control panel. Navigate to the [Developer Console][devconsole] and select
your application. Then, select the "App Center" panel from the left-hand
sidebar. The app can be unpublished from this page.

[app-center]: https://app.box.com/services
[devconsole]: https://account.box.com/developers/services
[email]: mailto:integrate@box.com
[bp]: https://support.box.com/hc/en-us/sections/360009473734-Box-Partner-Resources
