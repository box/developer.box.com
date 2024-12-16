---
rank: 5
related_endpoints: []
related_guides:
  - authentication/oauth2
  - cli/scripts/provision-users-folders
  - cli/scripts/deprovision-users
  - cli/scripts/user-zones-mass-update
  - cli/scripts/report-inactive-users
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
related_resources: []
category_id: cli
subcategory_id: cli/scripts
is_index: false
id: cli/scripts/manage-groups-collaborations
type: guide
total_steps: 7
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: cli/scripts/metadata-extraction
previous_page_id: cli/scripts/report-inactive-users
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/manage-groups-collaborations.md
---
# Manage groups and collaborations

## Script structure

This script uses Box CLI to create or update groups, add users to them, and finally to create collaborations between groups and folders.
The script consists of two parts described in detail in the sections below. You can run them both or use the optional flags to decide which part to run.

### Create or update groups

1. The script uses the `.csv` file you specify for the `UserGroupAdditionPath` parameter. The file lists group names and user emails. When creating the file, you can use the same group name for several users, and assign one user to several groups. For example:

    |`GroupName`| `UserEmail`|
    |-----------|------------|
    |Group1| `ManagedUser1@test.com`|
    |Group1| `ManagedUser2@test.com`|
    |Group2| `ManagedUser3@test.com`|
    |Group3| `ManagedUser1@test.com`|

2. If the group doesn't exist, the script creates it. If it does exist, the script can update the entries based on the provided data.

### Create or update collaborations

1. The script uses the `.csv` file you specify for the `CollaborationsCreationPath` parameter. The file lists group names, folder IDs, and collaboration roles.

2. For each row, the script checks if a group exists and if it's not already added as a collaborator to the corresponding folder. For example:

    |`GroupName`| `FolderId`| `CollaborationRole`|
    |-----------|-----------|--------------------|
    |Group1| 1111111| editor|
    |Group2| 1111111| viewer_uploader|
    |Group2| 2222222| viewer |
    |Group3| 1111111| viewer_uploader|

3. If both of these conditions are met, the script assigns the group to a folder using the role defined in the `CollaborationRole` column. Also, if a group already exists, but the `CollaborationRole` changed, the script will update it if you pass the `-UpdateExistingCollabs` flag when running the script.

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
    git clone https://github.com/box/boxcli.git boxcli
    cd boxcli/examples/Mass\ Groups\ \&\ Collaborations\ Update/
    ```

2. Set the path to the `.csv` file with the list of groups and user emails.

    ```bash
    $UserGroupAdditionPath = "./User_Group_Addition.csv"
    ```

    * `UserEmail` is the primary email address for the user in Box.
    * `GroupName` is the name of the group.

3. Set your own path to the `.csv` file with the list groups and user emails.

    ```bash
    $CollaborationsCreationPath = "./Collaborations_Creation.csv"
    ```

    * `GroupName` is name of the group the script will add as a collaborator to the folder.
    * `FolderId` is the folder ID the collaborator will be added to.
    * `CollaborationRole` is the name of the role used when creating a collaboration.

    You can configure the available roles by setting the `AvailableCollaborationRoles` parameter:

    ```bash
    $AvailableCollaborationRoles = @("editor", "viewer", "previewer", "uploader", "previewer_uploader", "viewer_uploader", "co-owner")
    ```

## Run the script

1. Run the Powershell command.

    ```bash
    pwsh
    ```

2. Run the script.

    ```bash
    ./Mass_Groups_Collabs_Update.ps1
    ```

### Optional flags

You can use flags to run run or skip specific parts of the script.

* If a group already is set as a collaborator for a specific folder but with a role other than defined in the .`csv` file, the script will inform you about it. It will not make any changes to an existing collaboration. If you want to update an existing collaboration with role defined in `.csv` file, set an additional `-UpdateExistingCollabs` flag when running the script.

    ```bash
    Mass_Groups_Collabs_Update.ps1 -UpdateExistingCollabs
    ```

* To update groups without creating collaborations, add the `-SkipCollabsCreation` boolean flag when running the script:

    ```bash
    Mass_Groups_Collabs_Update.ps1 -SkipCollabsCreation
    ```

* To create collaborations without any group updates, add the `-SkipGroupsUpdate` boolean flag when running the script:

    ```bash
    Mass_Groups_Collabs_Update.ps1 -SkipGroupsUpdate
    ```

## Logging

Logs are stored in the `logs` folder located in the main folder.
You have access to these log files:

* `Mass_Groups_Collabs_Update_all.txt` that contains all log entries
* `Mass_Groups_Collabs_Update_errors.txt` that contains only errors.

[examples]: https://github.com/box/boxcli/tree/main/examples
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[quickstart]: g://cli/quick-start/create-oauth-app
[console]: https://app.box.com/developers/console
[auth]: g://authentication/oauth2/oauth2-setup