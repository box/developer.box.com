---
rank: 3
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
---

# Locating Common Values

## User IDs

### As a developer

To locate your own user ID via the Box Web Application, navigate to your
**All Files** page. Click the circle in the top right corner and select
**Account Settings** from the dropdown menu. Your user ID is the **Account ID**
value listed in the **Account Details** section of the **Account** tab.

To locate your user ID via API, navigate to the Developer Console and generate
a [developer token][devtoken]. Use this token with the
[get current user endpoint][currentuser], which will return your user ID as the
`id` of the [user object][uo].

### As an Admin

There are a few ways to locate user IDs using the Admin Console. 

If you have access to the [Content Manager][contentmanager], click on the user
in question from the left-hand users dropdown. The URL will reveal the URL of
the associated user. For example, for URL
`https://.app.box.com/master/content/2267862105/0/0`, the User ID is
`2267862105`. 

To locate user IDs via API, navigate to the Developer Console and generate
a [developer token][devtoken] or obtain an [Access Token][at] for yourself.
Then, make an API call to the [list enterprise users][leu] endpoint. This will
provide a list of all users in your enterprise. 

## Enterprise ID

### As a developer

To find your enterprise ID via API, navigate to the Developer Console and
generate a [developer token][devtoken]. Use this token with the
[get current user endpoint][currentuser] and request the `enterprise` field,
which will return the [enterprise object][uo-full] containing the enterprise ID.

### As an Admin

From the **Admin Console**, navigate to the **Account & Billing Tab**. The
Enterprise ID is located under **Account Information**. 

## Content IDs

### As a developer

To locate a file ID via the Box Web Application, navigate to the file preview in
your browser and look at the URL. For example, the file ID of
`https://app.box.com/file/1234567890` is `1234567890`.

To locate a folder ID via the Box Web Application, navigate into the folder and
look at the URL. For example, the folder ID of 
`https://app.box.com/folder/9876543210` is `9876543210`.

To locate content IDs via the API, you may want to start by listing all items at
the All Files level by passing `0` as the `folder_id` of the 
[list items in folder][lif] endpoint.

### As an Admin

If you have access to the [Content Manager][contentmanager], click on the user
in question from the left-hand users dropdown and then navigate to the content
in question. The URL will reveal the folder and/or file id. For example, for URL
`https://.app.box.com/master/content/1987212562/88560510648/0/532181212706`,
the User ID is `1987212562`, the folder ID is `88560510648` and the file ID
within that folder is `532181212706`. 

[contentmanager]: https://support.box.com/hc/en-us/articles/360044197333-Using-the-Content-Manager
[currentuser]: e://get-users-me
[devtoken]: g://authentication/tokens/developer-tokens
[uo]: e://resources/user
[uo-full]: e://resources/user--full
[at]: g://authentication/tokens/access-tokens
[leu]: e://get-users
[lif]: e://get-folders-id-items