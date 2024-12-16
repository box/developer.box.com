---
rank: 8
related_endpoints: []
related_guides:
  - authentication/oauth2
  - cli/quick-start/powershell-script-templates
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
related_resources: []
category_id: cli
subcategory_id: cli/scripts
is_index: false
id: cli/scripts/slack-integration-mappings
type: guide
total_steps: 7
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: ''
previous_page_id: cli/scripts/deprovision-users
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/slack-integration-mappings.md
---
# Manage Slack integration folder mappings

This script helps manage the folder mappings between Slack and Box if using Box
as the content store for Slack. It creates a list of current Slack channel and
Box folder mappings and can create or update mappings based on input csv. This
script will maintain all permissions.

For more details, you can checkout the [Github repo][1].

## Prerequisites

### Clone script

Clone this GitHub repo or download files from the `/examples` directory

```bash
git clone https://github.com/box/boxcli.git
```

### Windows

Install the latest version of [dotnet core](https://dotnet.microsoft.com/download).

### MacOS & Linux

Install [PowerShell][pwsh]. Run the `pwsh` command to test the installation.

```bash
pwsh
```

Depending on the directory you are
running the command in, the output may differ.
For example:

```bash
PowerShell 7.2.5
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.

PS /Users/user/repos/boxcli/examples>
```

<message>

If you encounter issues make sure you installed both
[dotnet core](https://dotnet.microsoft.com/download) and
[PowerShell][pwsh].

</message>

### Box CLI Install

Configure and install the Box CLI using the OAuth [CLI Setup Quick Start][oauth-guide]. Make sure the user you use is an admin or co-admin.

### Enterprise configuration

* Configure and [install Box for Slack][install-slack] in the relevant Slack work spaces and organizations
* Box as the [content layer for Slack][content-layer] in enabled

## Run the script

Change the directory to the folder containing the script. In this example, it is the `Integration Mappings` folder.

```pwsh
rvb@lab:~/box-cli/examples/Integration Mappings$ pwsh
PowerShell 7.2.4
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.

PS /home/rvb/box-cli/examples/Integration Mappings>
```

Run the script with EXTRACT to extract current mappings:

```pwsh
./integration-mappings.ps1 -Action EXTRACT
```

or

Run the script with UPDATE to update current mappings:

```pwsh
./integration-mappings.ps1 -Action UPDATE
```

or

Run the script with CREATE to create new mappings:

```pwsh
./integration-mappings.ps1 -Action CREATE -MappingPath ./mapping_create_example.csv
```

By default, the csv file will save to and load from ./mappings.csv. If you wish to change this location, you can pass in a new path like so:

```pwsh
./integration-mappings.ps1 -Action EXTRACT -MappingPath ./mappings_new_location.csv
```

If you don't specify parameters, the script will prompt you to enter them.

When the script run is completed, you will see the following
output or a similar one.

When creating a mapping on a new channel, you must input a Box folder id, Slack channel id and Slack org id. You may use a Slack workspace ID in lieu of the org id. In that case, you would replace the csv column header `SlackOrgId` with `SlackWorkspaceId`.

```pwsh
Starting Process
Applying new mappings
Output [...]
All bulk input entries processed successfully.
```

## Logging

Logs are stored in a `logs` folder located in the main folder. You have access to these log files:

* `Integration-mappings_all.txt` that contains all log entries.
* `Integration-mappings_errors.txt` that contains only errors.

## Disclaimer

This project is a collection of open source examples and should not be treated as an officially supported product. Use at your own risk and as a source of example how to use Box CLI.

[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[oauth-guide]: g://cli/quick-start
[install-slack]: https://support.box.com/hc/en-us/articles/360044195313-Installing-and-Using-the-Box-for-Slack-Integration
[content-layer]: https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack
[1]: https://github.com/box/boxcli/tree/main/examples/Integration%20Mappings