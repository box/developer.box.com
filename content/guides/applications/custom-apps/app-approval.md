---
rank: 4
related_endpoints: []
related_guides: []
required_guides: 
  - applications/limited-access/app-token-setup
  - authentication/jwt/jwt-setup
related_resources: []
alias_paths: []
---

# App Approval

Application that are configured with [JWT][jwt], [Client Credentials Grant][ca],
or [App Token][app-token] authentication must be authorized by a Box enterprise
Admin before it can be used.

## Approval Notifications

A semi-automated process for app approval is available in the Developer Console.

Navigate to the **Authorization** tab for your application in the
[Developer console][devconsole].

<ImageFrame border width="400" center>
  ![Add and Manage keys](../images/app-authorization.png)
</ImageFrame>

Submitting the application for approval will send an email to your
enterprise's Admin to approve the application. More information on this
process is available in our [support article on app authorization][app-auth].

## Manual Approval

If the above process is not an option, the following steps provide
instructions on how to manually approve the application.

### As developer

As the developer, navigate to the **Configuration** tab for your application
in the [Developer Console][devconsole]. Scroll down to the OAuth 2.0 Credentials
section and copy the Client ID value to provide to your Box Admin.

<Message>
  # Finding a Box Admin

  If you don't know your enterprise Admin, go to your Box [Account
  Settings][settings] page and scroll to the bottom. If an admin contact is set
  you should see their contact  information under "Admin Contact".
</Message>

### As Admin

As a Box Admin, navigate to the [Admin Console][adminconsole] and
select the **Apps** tab (1) from the left navigation panel. Then, click the
**Custom Apps** tab (2) at the top of your screen. On this screen, you will
see a **+** button in the top right corner to add a new app authorization.

<ImageFrame border center>
  ![Apps tab](../images/apps.png)
</ImageFrame>

In the popup that appears, enter the client ID for the application that the
developer collected from the **Configuration** tab of the Developer Console.

## Re-authorization on changes

When the application's scopes or access level change the application needs to be
re-authorized. Repeat the process above and request a new Access Token for the
new changes to take effect.

In the same section where the application was initially authorized, an Admin
can re-authorize the application by clicking on the ellipses to the right
of the application name and selecting "Reauthorize App".

<ImageFrame border center>
  ![Re-authorize app](../images/app-reauthorize.png)
</ImageFrame>

[devconsole]: https://app.box.com/developers/console
[ca]: g://authentication/jwt/without-sdk/#client-credentials-grant
[settings]: https://app.box.com/account
[adminconsole]: https://app.box.com/master/settings/custom
[jwt]: g://authentication/jwt
[app-token]: g://authentication/app-token
[app-auth]: https://community.box.com/t5/Managing-Developer-Sandboxes/Authorizing-Apps-in-the-Box-App-Approval-Process/ta-p/77293
