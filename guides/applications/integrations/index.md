---
rank: 1
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
category_id: applications
subcategory_id: applications/integrations
is_index: true
id: applications/integrations
type: guide
total_steps: 0
sibling_id: applications
parent_id: applications
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/integrations/index.md
fullyTranslated: true
---
# 統合

[Box Integrations][app-center] is the first place for Box users to find out about applications they can use in combination with Box. If your application can be used by other enterprises, listing your service in under **Integrations** can be a great way to find new users. Integrations group apps into sections so that you can quickly find featured, most popular, or recently added apps.

![統合](./images/box-integrations.png)

## Developing a platform app or becoming a Box Partner

If you need more information on developing a platform app for the Box Integrations or becoming a Box Partner, visit our [Box Partner Resources][bp] guides on our community site.

## Publishing a platform app

Use the following steps to publish a platform app in Box Integrations.

### 前提条件

アプリケーションは、以下の要件を満たす必要があります。

* The platform app is in a finished state and ready for production usage.
* The platform app leverages OAuth 2.0 authentication, as Integrations do not support any other authentication methods.
* You are a developer with access to the platform app in the **Developer Console**.

### 手順

1. Navigate to the Developer Console > **My Platform Apps** and select the app you want to publish.

2. 上部のメニューで \[**公開**] タブを選択します。

   ![Publishing tab for an application](./images/publishing-app.png)

3. Read through the submission checklist and check the confirmation checkbox if your app meets all the requirements.

4. Fill in the form by providing:

   * the categories your app falls under
   * a short and a long description 
   * screenshots and an app icon
   * supplementary information that will be used to support the users

5. Use the **Preview** button in the top right corner to see how your application will look when listed.

6. Finally, submit the application for approval by clicking the **Submit for Approval** button. Once a request for approval is received, the Box Partner team will be notified and review your request as soon as possible. For any questions, email [`integrate@box.com`][email].

## Unpublishing a platform app

Once approved and published, a platform app can be unpublished from the same control panel:

1. Navigate to the **Developer Console** and select your platform app. 
2. Select the **Publishing** tab.
3. You can now unpublish the app.

[app-center]: https://app.box.com/services

[email]: mailto:integrate@box.com

[bp]: https://support.box.com/hc/en-us/sections/21356597387539-Box-Partner-Programs
