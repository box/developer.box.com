---
rank: 0
related_endpoints: []
related_guides: []
related_pages:
  - sdks-and-tools
related_resources: []
alias_paths: []
---

# CLI sample scripts

Box CLI scripts are designed to help you
automate your tasks. Currently,
the sample scripts library
provides several PowerShell scripts you can use
and customize. In order to run them, you will need to have the Box CLI
installed and configured. You can follow the [quick start guide][quickstart] to
get that done.

<Message type='warning'>
  Most of the below scripts require the user you run commands with to
  have Box [administrative privileges][7].
</Message>

## PowerShell scripts

* [Provision users and folders][1]
* [Deprovision users and archive folders][2]
* [Manage groups and collaborations][3]
* [Report inactive users][4]
* [Extract metadata][5]
* [Update user zones][6]
* [Manage Slack integration folder mappings][8]

[1]: g://cli/quick-start/powershell-script-templates
[2]: g://cli/scripts/deprovision-users
[3]: g://cli/scripts/manage-groups-collaborations
[4]: g://cli/scripts/report-inactive-users
[5]: g://cli/scripts/metadata-extraction
[6]: g://cli/scripts/user-zones-mass-update
[quickstart]: g://cli/quick-start/create-oauth-app/
[7]: https://support.box.com/hc/en-us/articles/360043694174-Understanding-Administrator-and-Co-Administrator-Permissions
[8]: g://cli/scripts/slack-integration-mappings