---
rank: 7
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


---
# Manage groups and collaborations

This script uses Box CLI to create or update groups, add users to the groups, and finally to define collaborations based on group and folder data.
The script consists of two parts. You can run them both or opt each out.

## Create or update groups 

1. The script uses the `.csv` file specified for the `UserGroupAdditionPath` parameter. The file lists rows with group names and user emails. The same group name for several users, and one user can belong to several groups. The [sample file][samplefile] provides an example of such configuration.
2. If the group doesn't exist, the script will create it. If it does exist, it might be updated based on the provided. data.


## Create collaborations

1. The script takes the `.csv` file specified for the `CollaborationsCreationPath` parameter. The file contains a number of rows with group names, folder IDs, and collaboration roles. 
2. For each row, the script checks if a group exists and if it's not already added as a collaborator to the corresponding folder. 
3. If both of these conditions are met, the script assigns the group to a folder using the role defined in the `CollaborationRole` column. 

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

### Box application

To use the script, you will need a Box application
with OAuth 2.0 authentication. If you don't have one,
go to your [developer console][console], and follow the guide 
[Setup with OAuth 2.0][auth].

## Configure the script

1. Clone the `boxcli` GitHub repository 
or download the files from [`examples`][examples] directory.

   ```bash
    git clone https://github.com/box/boxcli.git
   ```

2. Set the path to the `.csv` file with the list groups and user emails.

   ```bash
    $UserGroupAdditionPath = "./User_Group_Addition.csv"
   ```
    * `UserEmail` is the primary email address for the user in Box. 
    * `GroupName` is the name of the group.

   If the group with a specific name does not exist, the script will create it.

3. Set your own path to the `.csv` file with the list groups and user emails.

   ```bash
    $CollaborationsCreationPath = "./Collaborations_Creation.csv"
   ```

    * `GroupName` is name of the group the script will add as a collaborator to the folder. 
    * `FolderId` is the folder ID the collaborator will be added to.
    * `CollaborationRole` is the name of the role used when creating a collaboration.

    To define the available roles, set the `AvailableCollaborationRoles` parameter:

    ```bash
    $AvailableCollaborationRoles = @("editor", "viewer", "previewer", "uploader", "previewer_uploader", "viewer_uploader", "co-owner")
    ```

4. (Optional) It might happen that a group already is a collaborator for a
   specific folder, but with a role other than what the .`csv` defines. The script will inform you about it without making any changes to an existing collaboration. 
   If you want to update an existing collaboration with role defined in `.csv` file, you need to pass an additional switch `-UpdateExistingCollabs` when running the script.

    ```bash
    Mass_Groups_Collabs_Update.ps1 -UpdateExistingCollabs
    ```
   
5. (Optional) To update groups without creating
    collaborations, add the `-SkipCollabsCreation` boolean flag when running the script:
  
    ```bash
    Mass_Groups_Collabs_Update.ps1 -SkipCollabsCreation
    ```

6. (Optional) To create collaborations without any group updates, add the `-SkipGroupsUpdate` boolean flag when running the script:
  
    ```bash
    Mass_Groups_Collabs_Update.ps1 -SkipGroupsUpdate
    ```

## Run the script

Change the directory to the folder containing the script. 
   In this example, it is the `User Deprovisioning` folder.
   
   ```bash
   rvb@lab:~/box-cli/examples/User Deprovisioning$ pwsh
   PowerShell 7.2.4
   Copyright (c) Microsoft Corporation.

   https://aka.ms/powershell
   Type 'help' to get help.
     
   PS /home/rvb/box-cli/examples/User Deprovisioning>
   ```

Run the script.
   
   ```bash
    ./Mass_Groups_Collabs_Update.ps1
   ```

## Logging

Logs are stored in a `logs` folder located in the main folder. 
You have access to these log files:

* `Mass_Groups_Collabs_Update_all.txt` that contains all log entries
* `Mass_Groups_Collabs_Update_errors.txt` that contains only errors.

[scripts]: https://github.com/box/boxcli/tree/main/examples
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[quickstart]: g://cli/quick-start/create-oauth-app/
[console]: https://app.box.com/developers/console
[auth]: g://authentication/oauth2/oauth2-setup
[samplefile]: https://github.com/box/boxcli/blob/main/examples/Mass%20Groups%20%26%20Collaborations%20Update/User_Group_Addition.csv