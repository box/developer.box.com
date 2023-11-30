---
type: quick-start
hide_in_page_nav: true
category_id: cli
subcategory_id: cli/quick-start
is_index: false
id: cli/quick-start/build-commands-help
rank: 3
total_steps: 6
sibling_id: cli/quick-start
parent_id: cli/quick-start
next_page_id: cli/quick-start/options-and-bulk-commands
previous_page_id: cli/quick-start/install-and-configure
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/quick-start/3-build-commands-help.md
---
# Building Commands and Help Feature

A full list of CLI commands and usage information can be found in the
[GitHub repository][github].

<Message type='warning'>

Only Service Accounts and Admins are able to use some commands.
If your user is not authorized with the necessary scopes or you
configured your CLI to obtain a default token for another user, calls may
fail. Add `-v` or `--verbose` to your command for verbose error logging.

</Message>

If you do not see a command for an endpoint you need, you can build a
[custom request][custom].

<Message type='tip'>

Use repository documentation in conjunction with reference documentation to
see information the help command does not provide. This includes
restrictions, token permission requirements, fields, etc.

</Message>

<YouTube id='66wlIyS07Aw' >

</YouTube>

## First: Reset browser storage

Now that you've imported the Box API credentials into the CLI you should take a
moment to remove these credentials from your browser's storage.

<ResetButton id='cli,credentials,observable_events'>

Clear credentials

</ResetButton>

<Message warning>

Removing your API credentials from the browser storage ensures that no other
script can read your **Client ID** or **Client Secret**

</Message>

## Creating a folder with help

<!--alex ignore executing-->

Every CLI command begins with `box`. Add the option `--help` to any
command for help building it. For example, executing `box --help` will bring you
to a list of all possible object commands. Options are discussed more in
[step 4][four].

<ImageFrame center>

![Help](../images/help.png)

</ImageFrame>

<!--alex ignore execute-->

Then, for example, use the folder object and execute the command
`box folders --help`. This provides a list of all eligible actions for this
object.

<ImageFrame center>

![Help](../images/folders-help.png)

</ImageFrame>

<!-- markdownlint-disable line-length -->

Discover the required arguments for creating a folder: `box folders:create --help`

<!-- markdownlint-enable line-length -->

<ImageFrame center>

![Help](../images/folders-create-help.png)

</ImageFrame>

<!--alex ignore execute-->

Execute the command `box folders:create 0 "My CLI Folder"` and note the folder
ID returned in the response.

<Message type='tip'>

The root level of the folder tree, the All Files page, is always represented
by folder ID 0.

</Message>

Log into **your** Box account. Can you see this folder in your folder tree?

<Message type='warning'>

If you set up the Box CLI using JWT authentication, you will not see the
folder in your Box account. The folder will live in the service account
of the application that was created after application approval.

</Message>

## Summary

- You used the **help** feature to create a folder

<Next>

I created my first folder

</Next>

[github]: https://github.com/box/boxcli#command-topics-1
[custom]: https://github.com/box/boxcli/blob/master/docs/request.md
[sa]: page://platform/user-types/#service-account
[four]: g://cli/quick-start/options-and-bulk-commands/#options