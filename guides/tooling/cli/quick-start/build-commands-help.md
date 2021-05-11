---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/build-commands-help
rank: 3
total_steps: 5
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/options-and-bulk-commands
previous_page_id: tooling/cli/quick-start/install-and-configure
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/3-build-commands-help.md
---
# Building Commands and Help Feature

A full list of CLI commands can be found in the [GitHub repository][github].

If you do not see a command for an endpoint you need, you can build a
[custom request][custom].

<Message type=tip>

Use repository documentation in conjunction with reference documentation to
see information the help command does not provide. This includes
restrictions, token permission requirements, fields, etc.

</Message>

## Creating a folder with help

<!--alex ignore executing-->

Every CLI command begins with `box`. Add the option `--help` to any
command for help building it. For example, executing `box --help` will bring you
to a list of all possible object commands. Options are discussed more in
[step 4][four].

<ImageFrame center>

![Help](./help.png)

</ImageFrame>

<!--alex ignore execute-->

Then, for example, use the folder object and execute the command
`box folders --help`. This provides a list of all eligible actions for this
object.

<ImageFrame center>

![Help](./folders_help.png)

</ImageFrame>

<!-- markdownlint-disable line-length -->

Discover the required arguments for creating a folder: `box folders:create --help`

<!-- markdownlint-enable line-length -->

<ImageFrame center>

![Help](./folders_create_help.png)

</ImageFrame>

<!--alex ignore execute-->

Execute the command `box folders:create 0 "My CLI Folder"` and note the folder
ID returned in the response.

<Message type=tip>

The root level of the folder tree, the All Files page, is always represented
by folder ID 0.

</Message>

Log into **your** Box account. Can you see this folder in your folder tree?

<!--alex ignore executing-->

You cannot see this folder in your own Box account because you do not own, nor
are you collaborated in on the folder. You are executing commands as the
[Service Account][sa] and therefore the created folder lives in the
[Service Account's][sa] folder tree rather than your own.

<!-- markdownlint-disable line-length -->

<!--alex ignore execute-->

Now, execute the command:
`box folders:collaborations:add folder_id_created_above --role=editor --user-id=YOUR_USER_ID`

<!-- markdownlint-enable line-length -->

<Message type=tip>

To find your user ID, go to your All Files page and click the circle in the
top right-hand corner. Select **Account Settings** from the dropdown. Your
user ID is listed as the **Account ID** under the **Account** tab.

</Message>

Return to your All Files page. Can you see the folder now?

The second command used the [Service Account][sa], which owns the folder, to add
your user as an Editor-level collaborator on the folder. This surfaces the
folder in your own folder tree.

## Summary

- You used the help feature to create a folder
- You added a collaboration to the created folder and viewed it in Box

<Next>

I created my first folder and added a collaboration

</Next>

[github]: https://github.com/box/boxcli#command-topics-1
[custom]: https://github.com/box/boxcli/blob/master/docs/request.md
[sa]: g://getting-started/user-types/service-account
[four]: g://tooling/cli/quick-start/options-and-bulk-commands/#options