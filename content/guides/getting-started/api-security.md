---
rank: 4
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
---

# Understanding API Security

Whether it is your first time using the Box API or you are a Box Admin tasked
with authorizing custom applications, it is critical you understand the
security mechanisms in place to protect content stored in Box. 

The Box API follows the same security principals and restrictions as the Box web
application. This means that you will not be able to bypass content
[permissions][perm], the [waterfall folder structure][waterfall], or Admin-only
requirements by leveraging the Box API. A good rule of thumb is that if you
cannot preform an action directly in the Box web application, you cannot do it
via the API.

## Access Tokens

At the core of every Box API call is an [Access Token][at]. Because a username
and password cannot be used, the Box servers need a way of validating user
identity. The full capability of an Access Token encompasses user permissions,
application scopes, and token permissions. 

<ImageFrame center shadow border>
![Access Token Components](images/token_vendiagram.png)
</ImageFrame>

Access Tokens represent the authenticated user and determine what content a
user can successfully call. Similar to using the Box Web App, you will only be
able to successfully interact with content the user, associated with the Access 
Token, either owns or is a collaborator on. This can be further restricted by
[downscoping][downscope] a token.

[Access Tokens][at] are only valid for 60 minutes, but can be [revoked][revoked]
earlier if needed. Once an Access Token expires, when using an OAuth 2.0
application, a [Refresh Token][rt], valid for 60 days or one use,
can be [exchanged][exchange] for another Access Token. Alternatively, when using
a Server Authentication application, the 
[request access token endpoint][gettoken] can be called for a new token. For
security reasons we do not allow long-lived access tokens.

<Message type=tip>
   Receiving an error, especially a 404, and don’t know why? A great place to
   start is checking to see what user is associated with your access token
   using the get current user endpoint.
</Message>

## Scopes

[Scopes][scopes] are configured in the [Developer Console][dc] upon application
creation and determine which of the 150+ endpoints an application can
successfully call. Because scopes work in conjunction with user permissions,
granting the write scope does not automatically provide a user with access to
all content in a Box enterprise. 

For example, take an application with only the manage users and manage groups
scopes enabled. If an Access Token of this application tried to make an API call
to get information about a folder, even if the associated user owned it, it
would receive a 403 error. This is because the read scope is required to
preform this action.

## Restricted endpoints 

There are some API endpoints that only Admins or Co-Admins, with the [proper
granted [permissions][coadminperm], can successfully use. As a general rule of
thumb, if only an Admin or Co-Admin can perform an action via the Box Admin
Console, an Access Token associated with one of these users is required to 
complete an API call for the same action. This is called out in our API
[reference][reference] documentation for a given endpoint if it is required.

Some Admin-restricted endpoints include:

- Creating, deleting, or getting information about [users][users]
- Creating, deleting, or modifying [groups][groups]
- Viewing user or enterprise [events][events]

Other endpoints can only be used by an Admin user's Access token if the
enterprise purchased add-on products such as Box Governance or Box Shield. Some
of these endpoints include:

- Interacting with [security classifications][sc]
- Interacting with [legal hold policies][lh] and [assignments][lha]
- Interacting with [retention policies][retention] and [assignments][rassign]

## Application Access

Application access is only configured in the [Developer Console][dc] for
applications leveraging [Server Authentication (with JWT)][jwt]. This determines
the [types of users][usertypes] that can be used with the application. The two
options are **app access only** or **app + enterprise access**.

Upon authorizing a JWT application in the Box Admin Console, a 
[Service Account][serviceaccount] (AutomationUser_xxxx_@boxdevedition.com) for
the application is automatically generated. This account is an Admin-like user
that can only be accessed via the API. This user can then be used to create
user’s of the application called [App Users][appusers]. If an application only
needs to interact with the Service Account and App Users, **app only access**
must be selected. If an application needs to interact with [managed users][mu]
and their existing Box content, app + enterprise access must be selected. 

<Message type=tip>
   Remember, granting app + enterprise access does not mean the app gets access
   to all the content in the Box enterprise.
</Message>

As an example, take a JWT application that has the read/write scopes,
app only access, and is properly authorized in the Admin console. If, a
managed user obtains an access token for the application and makes an API call
to a folder they own that call would receive a 400 error with the message
“Cannot obtain token based on the enterprise configuration for your app”. Even
though the user has access to the content, the correct scopes and the app is 
authorized, authorization, the selected application access only
allows for the service account and app users to interact with the application.

[perm]: https://support.box.com/hc/en-us/articles/360044196413-Understanding-Collaborator-Permission-Levels
[waterfall]: https://support.box.com/hc/en-us/articles/360043697254-Understanding-Folder-Permissions
[downscope]: g://authentication/tokens/downscope
[at]: g://authentication/tokens
[revoked]: e://post-oauth2-revoke
[rt]: g://authentication/tokens/refresh
[gettoken]: e://post-oauth2-token
[exchange]: e://reference/post-oauth2-token--refresh/
[coadminperm]: https://support.box.com/hc/en-us/articles/360044194393-Granting-And-Modifying-Co-Admin-Permissions
[reference]: https://developer.box.com/reference/
[dc]: https://app.box.com/developers/console
[scopes]: g://api-calls/permissions-and-errors/scopes
[users]: e://resources/user
[groups]: e://resources/group
[events]: e://resources/event
[sc]: e://resources/classification
[lh]: e://resources/legal-hold-policy
[lha]: e://resources/legal-hold-policy-assignment
[retention]: e://resources/retention-policies
[rassign]: e://resources/retention-policy-assignment
[jwt]: g://authentication/jwt
[usertypes]: g://getting-started/user-types
[serviceaccount]: g://getting-started/user-types/service-account
[appusers]: g://getting-started/user-types/app-users
[mu]: g://getting-started/user-types/managed-users