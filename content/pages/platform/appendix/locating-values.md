---
rank: 6
related_endpoints:
- get-users-me
- get-users
- get-folders-id-items
related_guides: []
required_guides: []
related_resources: []
alias_paths:
    - /getting-started/locating-values/
---

# Locating Common Values

## User IDs

### As a developer

To locate your own user ID via the Box web app, navigate to your **All Files**
page. Click the circle in the top right corner and select **Account Settings**
from the dropdown menu. Your user ID is the **Account ID** value listed in the
**Account Details** section of the **Account** tab.

To locate your user ID via API, navigate to the Developer Console and generate
a [Developer Token][devtoken] or obtain an [Access Token][at] for yourself. Use
this token with the [get current user endpoint][currentuser], which will
return your user ID in the `id` field.

### As an Admin

If your account type provides access to the [Content Manager][contentmanager],
click on the user in question from user list. The URL will
reveal their user ID. For example,
`https://.app.box.com/master/content/2267862105/0/0`, the user ID is
`2267862105`. 

To locate user IDs via API, navigate to the Developer Console and generate
a [Developer Token][devtoken] or obtain an [Access Token][at] for yourself.
Then, make an API call to the [list enterprise users][leu] endpoint. This will
provide a list of all users in your enterprise.

## Enterprise ID

### As a developer

To find your enterprise ID via API, navigate to the Developer Console and
generate a [Developer Token][devtoken] or obtain an [Access Token][at] for
yourself. Use this token with the [get current user endpoint][currentuser] and
request the `enterprise` field.

### As an Admin

From the **Admin Console**, navigate to the **Account & Billing Tab**. The
Enterprise ID is located under the **Account Information** section. 

## Content IDs

### As a developer

To locate a file ID via the Box web app, navigate to the file's
preview in your browser and look at the URL. For example, the file ID of
`https://app.box.com/file/1234567890` is `1234567890`.

To locate a folder ID via the Box web app, navigate into the folder and
look at the URL. For example, the folder ID of 
`https://app.box.com/folder/9876543210` is `9876543210`.

To locate content IDs via the API, you may want to start by listing all items at
the All Files level by passing `0` as the `folder_id` of the 
[list items in folder][lif] endpoint. 

### As an Admin

If you have access to the [Content Manager][contentmanager], click on the user
in question from the user list and then navigate to the content. The URL will
reveal the folder and/or file id. For example,
`https://app.box.com/master/content/1987212562/88560510648/0/532181212706`.
The User ID is `1987212562`, the folder ID is `88560510648` and the file ID
within that folder is `532181212706`. 

<!-- i18n-enable localize-links -->
[contentmanager]: https://support.box.com/hc/en-us/articles/360044197333-Using-the-Content-Manager
<!-- i18n-disable localize-links -->
[currentuser]: e://get-users-me
[devtoken]: g://authentication/tokens/developer-tokens
[uo]: e://resources/user
[uo-full]: e://resources/user--full
[at]: g://authentication/tokens/access-tokens
[leu]: e://get-users
[lif]: e://get-folders-id-items