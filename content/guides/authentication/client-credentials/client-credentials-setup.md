---
rank: 2
related_endpoints:
  - get_authorize
related_guides:
  - applications/select
  - authentication/select
  - authentication/oauth2/oauth2-setup
required_guides:
  - authentication/select
  - authentication/oauth2/oauth2-setup
related_resources: []
alias_paths:
  - /docs/construct-jwt-claim-manually
  - /guides/authentication/client-credentials
---

# Setup with Client Credentials Grant

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

<ImageFrame border center>
  ![Auth selection screen](../images/select-app-type.png)
</ImageFrame>

### 3. Select the type of authentication and application name

Select **Server Authentication (with Client Credentials Grant)** if you would 
like to verify  application identity with a client ID and client secret. Then, 
provide a name for your application and click **Create App**.

<Message warning>
Once you make a selection, you will not be able to change to a different 
authentication method without creating a new application.
</Message>

## App Authorization

Before the application can be used, a Box Admin needs to authorize the
application within the Box Admin Console.

Navigate to the **Authorization** tab for your application within the
[Developer Console][devconsole].

<ImageFrame border width="400" center>
  ![Add and Manage keys](../images/app-authorization.png)
</ImageFrame>

Click **Review and Submit** to send an email to your Box enterprise Admin for
approval. More information on this process is available in our 
[authorization guide][app-auth].

<CTA to='g://authorization/custom-app-approval'>
  Learn how to authorize a Custom Application
</CTA>

## Basic configuration

### Application Access

An application's access level determines which users and content your app may
access. By default, an application can only successfully interact with the
content of its [Service Account][sa] and any [App Users][user-types]. To also
access existing Managed Users of an enterprise, navigate to the 
**Application Access** settings accessible via the **Configuration** tab of the
[Developer console][devconsole] and set to **App + Enterprise Access**. 

<ImageFrame border>
  ![App access level](../images/app-access-level.png)
</ImageFrame>

### Application Scopes

An application's scopes determine which endpoints and resources an application
can successfully call. See the [scopes guide][scopes] for detailed information
on each option.

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
[scopes]: g://api-calls/permissions-and-errors/scopes
[cors]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
[user-types]: g://getting-started/user-types
[sa]: g://getting-started/user-types/service-account
[app-auth]: g://authorization
