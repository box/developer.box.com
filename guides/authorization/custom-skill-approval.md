---
rank: 4
related_endpoints:
  - post_files_id_metadata_global_boxSkillsCards
related_guides:
  - authorization/platform-app-approval
  - authorization/limited-access-approval
required_guides:
  - authorization
  - skills/handle/setup/
alias_paths: []
category_id: authorization
subcategory_id: null
is_index: false
id: authorization/custom-skill-approval
type: guide
total_steps: 4
sibling_id: authorization
parent_id: authorization
next_page_id: authorization
previous_page_id: authorization/common-errors
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authorization/custom-skill-approval.md
---
# Custom Skill Approval

Custom Skills will must be enabled on a folder by the enterprise's Box Admin
before use.

## As a developer

As the developer, navigate to the application in the
[Developer Console][devconsole] and copy the application's Client ID to provide
to your admin.

<Message>

# Finding a Box Admin

If you don't know your enterprise Admin, go to the Box [account
settings][settings] page and scroll to the bottom. If an Admin contact is set
you should see contact  information under "Admin Contact".

</Message>

## As an Admin

To enable a Custom Skill application, navigate to the
[Skills section of the Box Admin Console][adminconsole] and click the
"Add Skill" link to add a new skill.

Enter the Client ID (API key) for the Custom Skill application. This is the
Client ID provided by the developer.

Click "Next" and select the folder(s) where the Box Skill application should
operate.

<ImageFrame border>

![Select a skill to add](images/skills-select.png)

</ImageFrame>

There are two options here:

* **All content in your company** authorizes the Skill at the root folder of every user. This results in every file uploaded to any folder being processed by the Box Skill application.
* **Select a list of folders** enables the application to a specific folder or set of folders on which the Skill application operates.

<ImageFrame border>

![Select a skill to add](images/skills-confirm.png)

</ImageFrame>

Click "Enable Skill" and accept the terms and agreements. The Custom Skill is
now enabled. Any new content added to the selected folder(s) will now trigger an
event to be sent to the Invocation URL configured in the Box
[Developer Console][devconsole].

<Message>

# 10 Skill applications per enterprise

There is a limit of 10 enabled Skills per enterprise at any given time. Please
contact your Box Sales Representative to enable more skills in an enterprise.

</Message>

[adminconsole]: https://app.box.com/master/skills
[devconsole]: https://app.box.com/developers/console