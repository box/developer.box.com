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

---
# Deprovision users and archive folders

<!-- markdownlint-disable line-length -->

This script allows you to deprovision and delete a list of users.
It performs the following steps:

1. Transfers the user content to the another user's root folder under specified in `EmployeeArchiveFolderName` parameter.
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

### Box CLI

To use the script, you will need the Box CLI
installed and configured. You can get this done by going through
our [quick start guide][quickstart]. The user you use to login with should
be the main Box admin or co-admin.

## Configure the script

1. Clone the `boxcli` GitHub repository and cd into this example's folder or download the files from [`examples`][examples] directory.

    ```bash
        git clone https://github.com/box/boxcli.git boxcli
        cd boxcli/examples/User\ Deprovisioning/
    ```

2. Create the list of employees for deletion in `.csv`.

    The header row should look like as follows:

    ```bash
    name, email
    ```

    where:

    * `name` is the name of the user in Box.
    * `email` is the primary email address of the user in Box.

    For example:

    |`name`| `email`|
    |------|--------|
    |Managed User 1| ManagedUser1@test.com|
    |Managed User 2| ManagedUser2@test.com|
    |Managed User 3| ManagedUser3@test.com|

### List of parameters

  |`Parameter`| `Description`| `Required` | `Default Value` |
  |-----------|--------------|------------|-----------------|
  |`EmployeeList`|  Path to Employee List CSV with employees to be deleted. | Yes | - |
  |`SkipTransferContent`| Set this flag to skip transfer of user content before deletion when running the script. Otherwise user's content will be transferred. | No | `False` |
  |`NewFilesOwnerID`|  The ID of the user to transfer files to before deleting the user. If not specified, the script will prompt to input in the interactive mode, or use the current authenticated user ID to receive the content.| No | If not specified, the script will prompt to input in the interactive mode, or use the current authenticated user ID. |
  |`EmployeeArchiveFolderName`|The name of a folder, where users' content will be moved to if `SkipTransferContent` is set to `False`. If a folder with this name already exists in the user's `NewFilesOwnerID` root folder, it will be used. Otherwise, a new one will be created.|Yes|`Employee Archive`|
  |`DryRun`|A flag that determines the script should be run in a mode, where no delete/create/update calls will be made, only read ones. |No|`False`|

### Define script parameters

You can the following options to pass parameters.

* Use hardcoded value in script.

    To use this option, update all required parameters listed in the [script parameters section][parameters] before running.

* Run script with parameters.

    You can specify parameters while providing the command. For example:

    ```bash
    PS > ./Users_Deprovision.ps1 -EmployeeList ./Employees_to_delete.csv `
    -NewFilesOwnerID  123456789
    -EmployeeArchiveFolderName "Employee Archive"
    ```

    or

    ```bash
    PS > ./Users_Deprovision.ps1 -EmployeeList ./Employees_to_delete.csv `
    -SkipTransferContent
    ```

    If you don't specify parameters, the script will prompt you to enter it.

    ```bash
    PS > ./Users_Deprovision.ps1
    Please enter the path to the employee list CSV file:
    ./Employees_to_delete.csv
    Please specify the user ID of the user who will own the files of the users being deprovisioned.
    Press Enter if you want to use the current user as the new owner.
    User ID: 1234567689
    Starting User Deprovisioning script...
    ```

## Run the script

Now all you need to do is run the script.

1. Run the Powershell command.

    ```bash
    pwsh
    ```

2. Run the script:

    ```bash
    ./Users_Deprovision.ps1
    ```

    When all parameters are defined, you will see following output to confirm the script started:

    ```bash
    PS /home/rvb/box-cli/examples/User Deprovisioning> ./Users_Deprovision.ps1
    Starting User Deprovisioning script...
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
[parameters]: https://github.com/box/boxcli/tree/main/examples/User%20Deprovisioning/Users_Deprovision.ps1#L17-L36
[employeelist]: https://github.com/box/boxcli/blob/main/examples/User%20Deprovisioning/Users_Deprovision.ps1#L12
