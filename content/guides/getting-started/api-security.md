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
application. In short, this means that you will not be able to bypass things
like content permissions, the waterfall folder structure, or Admin-level
requirements by leveraging the Box API. A good rule of thumb is that if you
cannot do it directly in the Box web application, you cannot do it via the API.

<ImageFrame center shadow border>
![Access Token Components](images/token_vendiagram.png)
</ImageFrame>

## Access Tokens

At the core of every Box API call is an Access Token. Because a username and
password cannot be used, the Box servers need a way of validating user identity.
Access Tokens represent the authenticated user and determines what content a
user can successfully call. Similar to using the Box Web App, you will only be
able to successfully interact with content the user associated with the Access 
Token either owns or is a collaborator on. This can be further restricted by
downscoping a token.

Access tokens are only valid for 60 minutes, but can be revoked at any time.
Once that time is up, a refresh token, valid for 60 days or one use, can be
passed in exchange for another access token. For security reasons, we do not
allow for long-lived access tokens.

<Message type=tip>
   Receiving an error, especially a 404, and don’t know why? A great place to
   start is checking to see what user is associated with your access token
   using the get current user endpoint.
</Message>

## Scopes

When an application is created in the [Developer Console][dc], the user must
configure application [scopes][scopes]. Scopes determine which of our 150+
endpoints an application can successfully call and are reflected in the
access provided by access tokens of the application. This means that granting
the write scope does not give a user automatic access to all content in a Box
enterprise, they’ll just be able to preform actions like renaming folders they
have access to or creating new ones. 

As an example, let’s say you create an application with just the manage users
and manage groups scope enabled. If you try to make an API call to get
information about a folder, even if you have access to it, you will receive a
403 error. However, if you make an API call to create a user, the call will be
successful as long as your Access Token is associated with an Admin who can
create users.

[dc]:
[scopes]: 