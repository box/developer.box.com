---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/powershell-script-templates
rank: 5
total_steps: 6
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/next-steps
previous_page_id: tooling/cli/quick-start/options-and-bulk-commands
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/5-powershell-script-templates.md
---
# Using Powershell Scripts with the Box CLI

By itself, the CLI is already powerful, but using it alongside a Powershell
script lets you complete repetitive tasks even quicker. We created an example
[scripts][scripts] folder within our CLI GitHub repository to help
jump start your development.

For this step in the quick start, we are going to use the
user provisioning and folder creation [script][script-1]
template. This script will use the Box CLI to
build and create a user (admin or service account) owned onboarding folder
structure, create managed users in bulk, and provision the new users by
collaborating them as viewer and uploaders into the newly created folder
structure.

<Message type=warning>

Only service accounts and users with administrative privileges will be able
to go through this part of the quick start. You can skip this step if you
are not a Box administrator or using a service account.

</Message>

<!-- INSERT VIDEO ONCE COMPLETE HERE-->

## Powershell Install

INSERT DESCRIPTION

## Download Script

INSERT DESCRIPTION

## Modify Input Parameters

INSERT DESCRIPTION

## Run Script

INSERT DESCRIPTION

## Next Steps

INSERT DESCRIPTION

## Summary

* You explored using a Powershell script with the Box CLI to provision users
and create their initial folder tree.

<Next>

I know how to use the sample scripts to automate repetitive tasks

</Next>

[scripts]: https://github.com/box/boxcli/tree/main/examples
[script-1]: https://github.com/box/boxcli/tree/main/examples/User%20Creation%20&%20Provisioning
[jwt-cli]: g://tooling/cli/jwt-cli