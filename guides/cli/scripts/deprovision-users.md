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
id: cli/scripts/deprovision-users
type: guide
total_steps: 6
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: ''
previous_page_id: cli/scripts/extract-metadata
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/deprovision-users.md
---
# Deprovision users and archive folders

This script allows you to deprovision and delete a list of users.
It performs the following steps:

1. Transfers the user content to the another user's root folder
under `Employee Archive`.
2. Deletes the user.

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
go to your [Developer Console][console], and follow the guide
[Setup with OAuth 2.0][auth].

## Configure the script

Clone the `boxcli` GitHub repository
or download the files from [`examples`][examples] directory.

```bash
git clone https://github.com/box/boxcli.git
```

Set your own path to the CSV file with the list of employees.

```bash
$EmployeeList = "./Employees_to_delete.csv"
```

Customize the `Employees_to_delete.csv` input file of
employee accounts you want to delete
by providing their email addresses.
For example:

```bash
name,email
Managed User 1,ManagedUser1@test.com
```

To set the user ID which will be the new owner of user content
before deleting the user, set the `NewFilesOwnerID` parameter to the
user ID you want.
If no value is provided before running the script, it will prompt you to
provide one or press **Enter** to use the user ID of the currently authenticated
user.

### Optional flags

(Optional) To skip transfer of user content before
deleting the user, set the `TransferContent` parameter to `N`.

```bash
$TransferContent = "N"
```

(Optional) Change the `EmployeeArchiveFolderName`
to any name of your choice.

```bash
$EmployeeArchiveFolderName = "Employee Archive"
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
./Users_Deprovision.ps1
```

When the script run is completed, you will see the following
output or a similar one.

```bash
Transfered employee content Managed User 1
with User ID: 19927131476 to Employee Archive Folder
Deleted user 19927131476
Deleted employee Managed User 1
```

### Optional flags

To run the script in a simulation mode,
add the `DryRun` boolean flag.
Dry run doesn't mean that API calls won't be made,
but that create, update, or delete calls will be skipped.

```bash
./Users_Deprovision.ps1 -DryRun
```

To set the new files owner ID at runtime, add the
`NewFilesOwnerID` string flag. It will overwrite the
value specified in the script before.

```bash
./Users_Deprovision.ps1 -NewFilesOwnerID 12345
```

## Logging

Logs are stored in a `logs` folder located in the main folder.
You have access to these log files:

* `Users_Deprovision_all.txt` that contains all log entries
* `Users_Deprovision_errors.txt` that contains only errors.

[scripts]: https://github.com/box/boxcli/tree/main/examples
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[quickstart]: g://cli/quick-start/create-oauth-app/
[console]: https://app.box.com/developers/console
[auth]: g://authentication/oauth2/oauth2-setup
[examples]:https://github.com/box/boxcli/tree/main/examples/User%20Deprovisioning
[employeelist]:[https://github.com/box/boxcli/blob/main/examples/User%20Deprovisioning/Users_Deprovision.ps1#L12