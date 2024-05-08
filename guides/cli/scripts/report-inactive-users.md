---
rank: 4
related_endpoints: []
related_guides:
  - authentication/oauth2
  - cli/scripts/provision-users-folders
  - cli/scripts/deprovision-users
  - cli/scripts/user-zones-mass-update
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
related_resources: []
category_id: cli
subcategory_id: cli/scripts
is_index: false
id: cli/scripts/report-inactive-users
type: guide
total_steps: 7
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: cli/scripts/manage-groups-collaborations
previous_page_id: cli/scripts/user-zones-mass-update
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/report-inactive-users.md
---
# Report inactive users

This script generates a CSV file with a list of users who have been inactive for a number of days. It performs the following steps:

1. Looks for the users who have the role `user`.

    <message>

    The script does not consider other roles, such as `AppUser`.

    </message>

2. Uses [Box Events][boxevents] to check if the user performed any actions for a specified number of days. The default list of event types includes: `LOGIN`,`UPLOAD`,`COPY`,`MOVE`,`PREVIEW`,`DOWNLOAD`,`EDIT`,`DELETE`,`UNDELETE`,`LOCK`,`UNLOCK`, `NEW_USER`. You can modify this list in the script settings.
3. Adds users who didn't perform any actions to a `.csv` file with inactive users. You can use this file as input for other scripts, for example to [deprovision users][deprovisionscript].

## Prerequisites

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

### Box CLI

To use the script, you will need the Box CLI
installed and configured. You can get this done by going through
our [quick start guide][quickstart]. The user you use to login with should
be the main Box admin or co-admin.

## Configure the script

1. Clone the `boxcli` GitHub repository and cd into this example's folder or download the files from [`examples`][examples] directory.

    ```bash
    git clone https://github.com/box/boxcli.git
    cd boxcli/examples/Inactive\ Users\ Report/
    ```

2. Set the number of days you want the script to scan for user events. If you   don't specify this value or leave the default, the script will prompt you to enter it.

    ```bash
    $daysInactive = "10"
    ```

3. (Optional) To change the report output file name, define the `ReportOutputFile` parameter.

    ```bash
    $ReportOutputFile = $ReportName + ".csv"
    ```

4. (Optional) To change event types, define the list for `eventType` parameter.

    ```bash
    $eventType = "LOGIN,UPLOAD,COPY,MOVE"
    ```

## Run the script

Run the Powershell command.

```bash
pwsh
```

Run the script.

```bash
./Inactive_Users_Report.ps1
```

When the script run is completed, you will see the following
output or a similar one.

```bash
Transfered employee content Managed User 1
with User ID: 19927131476 to Employee Archive Folder
Deleted user 19927131476
Deleted employee Managed User 1
```

## Logging

Logs are stored in the `logs` folder located in the main folder.
You have access to these log files:

* `Inactive_Users_Report_all.txt` that contains all log entries
* `Inactive_Users_Report_errors.txt` that contains only errors.

[scripts]: https://github.com/box/boxcli/tree/main/examples
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[quickstart]: g://cli/quick-start/create-oauth-app/
[boxevents]: https://developer.box.com/reference/resources/event/
[deprovisionscript]: g://cli/scripts/deprovision-users
[console]: https://app.box.com/developers/console
[auth]: g://authentication/oauth2/oauth2-setup
[examples]: https://github.com/box/boxcli/tree/main/examples/Inactive%20Users%20Report