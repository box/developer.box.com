---
rank: 5
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
# Deprovision users

This script allows you to deprovision and delete a list of users. 
It performs the following steps:

1. Transfers the user content to the current admin
user's root folder under `Employee Archive`.
2. Deletes the user.

## Prerequisites

### Windows

Install the latest version of [dotnet core](https://dotnet.microsoft.com/download).

### MacOS & Linux

1. Install [PowerShell][pwsh].

    <message>
    If you encounter issues make sure you installed both 
    [dotnet core](https://dotnet.microsoft.com/download) and 
    [PowerShell][pwsh].
    </message>

2. Test PowerShell:

   ```bash
    pwsh 
   ```

    The output should be similar to the following:

   ```bash
    PowerShell 7.2.5
    Copyright (c) Microsoft Corporation.

    https://aka.ms/powershell
    Type 'help' to get help.

    PS /Users/user/repos/boxcli/examples> 
   ```

### Configured Box application

To use the script, you will need a Box application. If you don't have one
go to your [developer console][console], and follow the guide 
[Setup with OAuth 2.0][auth].

## Configure the script

1. Clone the `boxcli` GitHub repository:

    ```bash
    git clone https://github.com/box/boxcli.git
    ```

    You can also download the files from [`examples`][examples] directory.

2. Set your own path to the CSV file with the list of employees.

   ```bash
   $EmployeeList = "./Employees_to_delete.csv"
   ```

3. Customize the `Employees_to_delete.csv` input file of 
   employee accounts you want to delete 
   by providing their email addresses. 
   For example:

    ```bash
    name,email
    Managed User 1,ManagedUser1@test.com
    ```

4. (Optional) To skip transfer of user content before
   deleting the user, set the `TransferContent` parameter to `N`.

   ```bash
   $TransferContent = "N"
   ```

5. (Optional) Change the `EmployeeArchiveFolderName` 
   to any name of your choice.

   ```bash
   $EmployeeArchiveFolderName = "Employee Archive"
   ```

## Run the script

1. Change the directory to the folder containing the script. 
    In this example, it is the `User Deprovisioning` folder.

   ```bash
    rvb@lab:~/box-cli/examples/User Deprovisioning$ pwsh
    PowerShell 7.2.4
    Copyright (c) Microsoft Corporation.

    https://aka.ms/powershell
    Type 'help' to get help.
    PS /home/rvb/box-cli/examples/User Deprovisioning>
   ```

2. Run the script:

   ```bash
    ./Users_Deprovision.ps1
   ```

    When the script run is completed, you will see the following, 
    or similar, message:

   ```bash
    Transfered employee content Managed User 1
    with User ID: 19927131476 to Employee Archive Folder
    Deleted user 19927131476
    Deleted employee Managed User 1
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
