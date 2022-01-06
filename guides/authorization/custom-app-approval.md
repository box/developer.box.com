---
rank: 1
related_endpoints: []
related_guides:
  - authorization/limited-access-approval
  - authorization/custom-skill-approval
required_guides:
  - authorization
  - authentication/oauth2/oauth2-setup
  - authentication/jwt/jwt-setup
alias_paths:
  - /guides/applications/custom-apps/app-approval
category_id: authorization
subcategory_id: null
is_index: false
id: authorization/custom-app-approval
type: guide
total_steps: 4
sibling_id: authorization
parent_id: authorization
next_page_id: authorization/limited-access-approval
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authorization/custom-app-approval.md
---
# Custom App Approval

Server authentication applications using [JWT][jwt] or
[Client Credentials Grant][ccg] must be authorized by a Box Admin before use.

User authentication applications using [OAuth 2.0][oauth] may need to be
enabled by a Box Admin depending on the [unpublished apps setting][upa].

A Box Admin needs an application's Client ID in order to properly authorize or
enable it in the Admin Console.

## Approval Notifications

A semi-automated process to submit an app approval is available in the Developer
Console for JWT, Client Credentials Grant, and Limited Access applications.

Navigate to the **Authorization** tab for your application in the
[Developer Console][devconsole].

<ImageFrame border width="400" center>

![Add and Manage keys](images/app-authorization.png)

</ImageFrame>

Submitting the application for approval will send an email to your
enterprise's Primary Admin to approve the application. More information on this
process is available in our [support article on app authorization][app-auth].

## Manual Approval

The following steps provide instructions on how to manually approve the
application.

### As a developer

As the developer, navigate to the **Configuration** tab for your application
in the [Developer Console][devconsole]. Scroll down to the OAuth 2.0 Credentials
section and copy the Client ID value to provide to a Box Admin.

<Message>

# Finding a Box Admin

If you don't know your enterprise Admin, go to your Box [Account
Settings][settings] page and scroll to the bottom. If an admin contact is set
you should see their contact information under "Admin Contact".

</Message>

### As an Admin

As a Box Admin, navigate to the [Admin Console][adminconsole] and
select the **Apps** tab (1) from the left navigation panel. Then, click the
**Custom Apps Manager** tab (2) at the top of your screen. 

On both Server and User Authentication Apps screens, you
will see an **Add App** button in the top right corner to add a new app.

For Server Authentication Apps, you can also use the Custom Apps Manager table
to authorize and enable apps.

#### Server Authentication Apps

<ImageFrame border center>

![Server Apps tab](images/jwt_app_approval_flow.png)

</ImageFrame>

#### User Authentication Apps

<ImageFrame border center>

![User Apps tab](images/oauth_app_approval_flow.png)

</ImageFrame>

In the popup that appears, enter the client ID for the application that the
developer collected from the **Configuration** tab of the
[Developer Console][devconsole].

## Re-authorization on changes

When the application's scopes or access level change the application needs to be
re-authorized. Repeat the process above and request a new Access Token for the
new changes to take effect.

In the same section where the application was initially authorized, an Admin
can re-authorize the application by clicking on the ellipses to the right
of the application name to **Reauthorize App**.

<ImageFrame border center>

![Re-authorize app](images/reauthorize_app.png)

</ImageFrame>

<!-- i18n-enable localize-links -->

[devconsole]: https://app.box.com/developers/console
<!-- i18n-disable localize-links -->

[ccg]: g://authentication/client-credentials
<!-- i18n-enable localize-links -->

[settings]: https://app.box.com/account
[adminconsole]: https://app.box.com/master/settings/custom
<!-- i18n-disable localize-links -->

[jwt]: g://authentication/jwt
[app-token]: g://authentication/app-token
[oauth]: g://authentication/oauth2
[upa]: g://security/#enterprise-settings-and-authorization
<!-- i18n-enable localize-links -->

[app-auth]: https://support.box.com/hc/en-us/articles/360043697014-Authorizing-Apps-in-the-Box-App-Approval-Process
<!-- i18n-enable localize-links -->