---
rank: 2
related_endpoints: []
related_guides:
  - applications/custom-apps/oauth2-setup
  - authentication/oauth2
required_guides: []
related_resources: []
alias_paths:
  - /docs/publishing-your-application
category_id: applications
subcategory_id: null
is_index: false
id: applications/app-gallery
type: guide
total_steps: 2
sibling_id: applications
parent_id: applications
next_page_id: applications
previous_page_id: applications/select
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/applications/app-gallery.md
---
# App Gallery

The [Box App Gallery][app-gallery] is the first place for Box users to find out
about applications that they can use in combination with Box. If your
application is suited to be used by other enterprises, listing your service in
the App Gallery can be a great way to find new users.

## Publishing an app

Use the following steps to publish an application in the [App
Gallery][app-gallery].

### Prerequisites

To publish an application you will need to pass the following requirements.

* The application needs to be in a finished state, ready for production usage
* The application should use OAuth 2.0 authentication as the App Gallery does
  not support JWT or App Token authentication.
* You need to be a developer with access to the application in the
  [Developer Console][devconsole].

### 1. Log in to the Developer Console

Head over to the [Developer Console][devconsole] and select your application to
submit to the gallery.

### 2. Fill in the form

Select the "App Gallery" panel from the left-hand sidebar.

<ImageFrame center shadow border width='200'>

![App Gallery panel](./images/app-sidebar.png)

</ImageFrame>

Click the button to "Submit My App".

<ImageFrame center border shadow width='400'>

![Submit My App button](./images/submit-app.png)

</ImageFrame>

Then, fill in the form with your application's categories, a short and a long
description, some screenshots and an app icon.

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

Once an approval has been submitted, the partner team at Box will be notified
about your request. They will follow up with the request to arrange for any
testing instructions if needed. Similarly, the partner team will also reach
out when the application has been published in the App Gallery.

For any questions, please feel free to email [`integrate@box.com`][email] or the
[forum][forum].

</Message>

## Unpublishing an app

Once approved and published, an application can be unpublished from the same
control panel. Head over to the [Developer Console][devconsole] and select
your application. Then, select the "App Gallery" panel from the left-hand
sidebar. The app can be unpublished from this page.

[app-gallery]: https://app.box.com/services
[devconsole]: https://account.box.com/developers/services
[forum]: https://community.box.com/t5/Developer-Forum/bd-p/DeveloperForum
[email]: mailto:integrate@box.com