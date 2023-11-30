---
rank: 3
related_endpoints:
  - get_users_id
  - get_users
related_guides:
  - getting-started/user-types
required_guides: []
related_resources:
  - user
alias_paths:
  - /guides/authentication/user-types/app-users
hide: true
category_id: getting-started
subcategory_id: getting-started/user-types
is_index: false
id: getting-started/user-types/app-users
type: guide
total_steps: 3
sibling_id: getting-started/user-types
parent_id: getting-started/user-types
next_page_id: getting-started/user-types
previous_page_id: getting-started/user-types/service-account
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/user-types/app-users.md
---
# App Users

App users are only accessible via the API, meaning they do not have login
credentials. They can be created by a [Service Account][sa] and therefore are
only applicable to applications leveraging server to server authentication. App
Users are tied to the application used to create them, and while they can
collaborate on content outside of the application, the user itself cannot be
moved under another application.

## Creation

App users are created using a [Service Account][sa] access token to call the
[create user endpoint][createuser]. The `is_platform_access_only` body parameter
must be set to true or a [managed user][managed] is created instead.

Since every Box account must have an email address, Box assigns one. The format
will always be `AppUser_AppServiceID_RandomString@boxdevedition.com`. For
example: `AppUser_1234567_LOCqkWI79A@boxdevedition.com`.

The numbers surrounded by underscores are also unique to the application and
are called a Service ID. To locate a Service ID in the [Developer Console][dc],
click on on the tile for an application and look at the URL. For example,
`https://exampl.app.box.com/developers/console/app/1234567` . As you can see,
this application corresponds to the App User in the example above.

## Use Cases

App Users extend the functionality of Box’s Platform to applications serving any
user, regardless of if they have an existing Box account. App users are often
used by applications that manage their own user authentication, but want to
store the data in unique Box user accounts.

- *Customer Portals*: Websites or applications where clients or patients can log
  in to access information provided by employees at a company and/or to store and
  retrieve their own sensitive documents.
- *Vendor Portals*: Content distribution sites for companies to provide materials
  including marketing collateral, price lists, product information, sales
  agreements or contracts, and other documents to vendors. Box's groups and
  permission model allow for companies to organize content for partners based on
  partner criteria and/or tier.
- *Branded Customer Facing Applications*: The ability to create App Users on
 behalf of an end-user allows companies to build seamless customer-facing
 features such as permissions, auditing, and reporting. This is particularly
 valuable for regulated industries such as Financial Services and Healthcare.
 Moreover, user-based data from our [reporting capabilities][events] allows
 developers to leverage analytic tools to better understand user behavior.

## Permissions

App Users cannot see or interact any content in the folder tree of the Service
Account unless explicitly added as a collaborator. Again, because App Users does
not have login credentials, they cannot access content outside of the
Custom Application.

## UI Access

App users are accessible via the [Users & Groups tab][uag-tab] of the Admin
Console. To filter for these users, use the view options button > Role >
App Users.

<ImageFrame center shadow border>

![Filter for App Users](./app_users_filter.png)

</ImageFrame>

App Users are also accessible through the [Content Manager][cm] in the Admin
Console.

## Folder Tree and Collaboration

Each App User has its own folder tree and content ownership capabilities. By
default this folder tree is empty because they do not initially own or
collaborate on content. This is similar to when you first land on your All Files
page in a newly provisioned Box account.

To collaborate an App User on existing content use the assigned email
address to invite them as you would any other user. If you are instead adding
the collaboration [via the API][collabapi] you will need to use an Access Token
for a user that already has access to the content and has the appropriate
collaboration permissions to invite collaborators.

[sa]: g://getting-started/user-types/service-account/
[createuser]: e://post-users
[managed]: g://getting-started/user-types/managed-users/
[dc]: https://app.box.com/developers/console
[events]: e://get-events/
<!-- i18n-enable localize-links -->

[uag-tab]: https://support.box.com/hc/en-us/articles/360043695714-Admin-Console-Guide
[cm]: https://support.box.com/hc/en-us/articles/360044197333-Using-the-Content-Manager
<!-- i18n-disable localize-links -->

[collabapi]: e://post-collaborations/