---
rank: 2
related_endpoints: []
related_guides:
  - authentication/jwt
required_guides:
  - authentication/select
  - applications/custom-apps
  - applications/custom-apps/app-approval
related_resources: []
alias_paths:
  - /docs/setting-up-a-jwt-app
  - /docs/authentication-with-jwt
  - /docs/app-auth
category_id: applications
subcategory_id: applications/custom-apps
is_index: false
id: applications/custom-apps/jwt-setup
type: guide
total_steps: 4
sibling_id: applications/custom-apps
parent_id: applications/custom-apps
next_page_id: applications/custom-apps/app-token-setup
previous_page_id: applications/custom-apps
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/custom-apps/jwt-setup.md
---
# Setup with JWT

A Custom App can be set up to use server-side authentication with
[JWT][jwt].

<CTA to='g://authentication/jwt'>

Learn how JWT authentication works

</CTA>

## Prerequisites

To set up a Custom App using server-side authentication, you will need to ensure
you have access the [Developer Console][devconsole] from your Box enterprise
account. Alternatively, you may sign up for a [developer account][devaccount].

## App creation steps

### 1. Navigate to the Developer Console

Log into Box and navigate to the [Developer Console][devconsole].
Select **Create New App**.

### 2. Select the type of application

Select **Custom App** from the list of application types. A modal will appear to
prompt a selection for the next step.

<ImageFrame border width="400" center>

![Auth selection screen](../images/select-app-type.png)

</ImageFrame>

### 3. Select the type of authentication and app name

Select **Server Authentication (with JWT)** and provide a unique name for your
application. Click **Create App**.

<ImageFrame border width="600" center>

![App name form](../images/custom-app-selection-jwt.png)

</ImageFrame>

## JWT keypair

JWT authentication works through a public/private RSA keypair.
Once a Custom App is created leveraging JWT authentication, a keypair can
be generated via the [Developer Console][devconsole] or you can generate your
own and supply Box with the public key.

### Generate a keypair (Recommended)

If you would like to use a Box generated keypair, navigate to the
[Developer Console][devconsole] where you can generate a configuration file.
This file includes a public/private keypair and a number of other application
details that are necessary for authentication.

To generate this file, navigate to the **Configuration** tab of the
[Developer Console][devconsole] and scroll down to the
**Add and Manage Public Keys** section.

<ImageFrame border width="600" center>

![Add and Manage keys](../images/app-add-keys.png)

</ImageFrame>

Click the **Generate a Public/Private Keypair** button to have Box generate a
keypair you. This will trigger the download of a JSON configuration file that
you can move to your application code.

<Message danger>

For security reasons, Box will not store your private key. If you lose your
private key, you will need to reset the entire keypair.

</Message>

### Manually add keypair

Alternatively, you may generate your own keypair and then upload the public key
to the [Developer Console][devconsole].

To create a keypair using OpenSSL, open a terminal window and run the
following commands.

```shell
openssl genrsa -des3 -out private.pem 2048
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```

<Message>

# For Windows Systems

Windows users can install and use the [Cygwin][cygwin] package to run OpenSSL.

</Message>

Then, navigate to configuration tab for your application in the
[Developer console][devconsole]and scroll down to the
**Add and Manage Public Keys** section.

<ImageFrame border width="600" center>

![Add and Manage keys](../images/app-add-keys.png)

</ImageFrame>

Click the **Add a Public Key** button, enter the public key generated using the
steps above and click **Verify and Save**.

## App Authorization

Once a keypair is successfully added to your application your Box enterprise
Admin needs to authorize the application within the Box Admin Console.

Navigate to the **General Settings** tab for your application within the
[developer console][devconsole] and scroll down to the **App Authorization**
section.

<ImageFrame border width="400" center>

![Add and Manage keys](../images/app-authorization.png)

</ImageFrame>

Click **Submit and Review** to send an email to your Box enterprise Admin for
approval. More information on this process is available in our
[support article for app authorization][app-auth].

### Re-authorization after making configuration changes

When the application's scopes or access level change the application needs to be
re-authorized. Repeat the process above and request a new Access Token for the
new changes to take effect.

## Basic configuration

Before the application can be used, some additional, basic configuration is
required.

### Application Access

By default, an application can only successfully interact with its own data and
the data of any [App Users][user-types]. To also work with
existing Managed Users in the entire enterprise the application navigate to the
**Application Access** settings accessible via the **Configuration** tab of the
[Developer console][devconsole]. Set to **Enterprise**. 

<ImageFrame border>

![App access level](../images/app-access-level.png)

</ImageFrame>

### Application Scopes

Scopes define what permissions your application has in order to access data. See
the [scopes guide][scopes] for detailed information on each option.

<ImageFrame border width="600" center>

![App scopes](../images/app-scopes.png)

</ImageFrame>

### CORS Domains

If your application makes API calls from front-end browser code in
Javascript, the domain that these calls are made from will need to be
added to an allow-list due to [Cross Origin Resource Sharing][cors],
also known as CORS. If all requests will be made from server-side code,
you may skip this section.

To add the full URI(s) to the allow-list, navigate to the **CORS Domain**
section at the bottom of the **Configuration** tab in the
[Developer console][devconsole].

<ImageFrame border>

![App CORS config](../images/app-cors.png)

</ImageFrame>

[devconsole]: https://app.box.com/developers/console
[devaccount]: https://account.box.com/signup/n/developer
[devtoken]: g://authentication/access-tokens/developer-tokens
[scopes]: g://api-calls/permissions-and-errors/scopes
[cors]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
[user-types]: g://authentication/user-types
[cygwin]: http://www.cygwin.com/
[app-auth]: https://community.box.com/t5/Managing-Developer-Sandboxes/Authorizing-Apps-in-the-Box-App-Approval-Process/ta-p/77293
[jwt]: g://authentication/jwt