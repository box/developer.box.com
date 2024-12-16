---
type: quick-start
hide_in_page_nav: true
category_id: search
subcategory_id: search/quick-start
is_index: false
id: search/quick-start/locate-template-info
rank: 2
total_steps: 5
sibling_id: search/quick-start
parent_id: search/quick-start
next_page_id: search/quick-start/apply-template-to-file
previous_page_id: search/quick-start/create-metadata-template
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/quick-start/2-locate-template-info.md
---
# Locate Information about a Metadata Template

<Message warning>

If you created your metadata template using the API and have the successful
response on hand, you can skip this step.

</Message>

If you created your metadata template via the Admin Console, you will need
obtain an [Access Token][at] for an Admin or Co-Admin with permission to
**Create and edit metadata templates for your company**. As mentioned in
step 1, the easiest way to obtain a token meeting these requirements is to log
in as an Admin or Co-Admin, pull up the application in the
[Developer Console][dc], and click **Generate Developer Token** under the
**Configuration** tab.

Use this token to make an API call to the
[list all metadata templates for enterprise endpoint][metadata-list], as shown
below. You should be able to find information about your template in the
response. Specifically, note the `scope` and `templateKey`.

<ImageFrame center>

![List All Templates](./images/list-all-templates.png)

</ImageFrame>

<Next>

I obtained the details about my template

</Next>

[at]: g://authentication/tokens
[dc]: https://account.box.com/developers/console
[metadata-list]: e://get-metadata-templates-enterprise/