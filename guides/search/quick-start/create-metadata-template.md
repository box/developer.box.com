---
type: quick-start
hide_in_page_nav: true
category_id: search
subcategory_id: search/quick-start
is_index: false
id: search/quick-start/create-metadata-template
rank: 1
total_steps: 5
sibling_id: search/quick-start
parent_id: search/quick-start
next_page_id: search/quick-start/locate-template-info
previous_page_id: search/quick-start
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/quick-start/1-create-metadata-template.md
---
# Create a Metadata Template

There are two ways to create a new metadata template: via the Admin Console or
via the API using an Admin Access Token. If you already have a metadata template
created that you would like to use you can skip to the next step.

## Admin Console

To create a template via the Admin Console, navigate to:

**Admin Console** > **Content** Tab > **Metadata** > **Create New**

<ImageFrame center>

![Create Metadata Template](./images/create-template.png)

</ImageFrame>

<Message warning>

The metadata feature is reserved for Business Plus accounts and above. To
upgrade your account, please contact your Box account team.

</Message>

Once you select **Create New**, you are brought to a form used to create a new
template, which is shown below. Select a **Dropdown-Single Select** format.

<Message warning>

Selecting a Dropdown-Multi Select format will change the structure of you query
later on in this quick-start.

</Message>

<ImageFrame center>

![Metadata Template Form](./images/template-form.png)

</ImageFrame>

## API

Creating a metadata template via the API requires an [Access Token][at]
associated with a Box Admin or Co-Admin with permission to
**create and edit metadata templates for your company**. If you are not sure
who your token is associated with, make an API call to the
[get current user endpoint][current-user]. The easiest way to obtain a token
meeting these requirements is to log in as an Admin or Co-Admin, pull up the
application in the [Developer Console][dc], and click
**Generate Developer Token** under the **Configuration** tab.
[Developer tokens][dt] are always be associated with the user logged into the
Developer Console when the button is clicked.

Using [Postman][postman] and the [Box Postman Collection][post-collab], below is
an example of what an API call looks like to create the same metadata template
created above using the Admin Console.

<ImageFrame center>

![Create Template API Call](./images/create-call.png)

</ImageFrame>

<Message tip>

If you would like to use a different template format than a Dropdown-Single
Select, you will need to consult our reference documentation, as the body of the
API call will differ from the example above.

</Message>

The response to this API call provides crucial information you will need later.
If you created your template via the UI, you will learn how to obtain this
information in the next step.

<Next>

I created a metadata template

</Next>

[at]: g://authentication/tokens
[current-user]: e://get-users-me
[dc]: https://account.box.com/developers/console
[dt]: g://authentication/tokens/developer-tokens
[postman]: https://postman.com/
[post-collab]: g://tooling/postman