---
type: quick-start
hide_in_page_nav: true
alias_paths:
  - /guides/tooling/cli/quick-start/powershell-script-templates
---

# Using PowerShell Scripts with the Box CLI

By itself, the CLI is already powerful, but using it alongside a PowerShell
script lets you complete repetitive tasks even quicker. We created an example
[scripts][scripts] folder within our CLI GitHub repository to help
jump start your development.

To show you how CLI scripts work, we are going to use the
provision and create users [script][script-1]
template.

This script uses the Box CLI to build and create an
onboarding folder structure, create managed users in bulk,
and provision such new users by adding them to the newly created
folder structure as collaborators with viewer or uploader roles.

<Message type=warning>
   This part of the quick start for service accounts 
   and users with administrative privileges only. 
   Skip this step if you are not a Box administrator
   or you do not use a service account.
</Message>

<!-- INSERT VIDEO ONCE COMPLETE HERE-->

## Use case

To automatically create users and folder structure, the script
performs the following steps:

1. Uses a `.csv` file to load employee data in bulk.
2. Defines folder structure using a JSON file or uploads
   the structure from the user's local directory.
3. Creates a managed user a predetermined folder structure to each user.

## Prerequisites

### Windows

Install the latest version of [dotnet core](https://dotnet.microsoft.com/download).

### MacOS & Linux

Install [PowerShell][pwsh]

<message>
If you encounter issues make sure you installed both 
[dotnet core](https://dotnet.microsoft.com/download) and 
[PowerShell][pwsh]
</message>

### Configured Box application

You should have a Box application created.
If you haven't done so yet, see [step 1][step 1] of this quick start guide.
Alternatively, go to your [developer console][console], and follow the guide
[Setup with OAuth 2.0][auth].

## Download the script

Clone the script to a directory of your choice
and navigate to that directory.

```bash
git clone https://github.com/box/boxcli.git box-cli
cd box-cli/examples/User\ Creation\ \&\ Provisioning/
```

## Configure the script settings

Adapt the script to run in your own environment.
In this example, you will use the sample data provided
with the script.

### Prepare the parameters

There are a few parameters you need to supply before running the script:

- `EmployeeList`: Path to Employee List CSV.
- `RootFolderParentID`: Destination folder ID for your changes,
either when using a JSON file as input to create folder structure,
or uploading a local structure. It is set to `0` by default,
but feel free to set it to your needs.
- `FolderStructureJSONPath`: Your own Folder Structure JSON Path.
You can also change the `RootFolderName`.
It's the name of the folder that will be created as the parent for folders
from the JSON structure.
It's set to `Onboarding` by default, but feel free to set it to your needs.
- `LocalUploadPath`: Local directory to upload folder structure directly.

**Note**: Please specify either a local upload path or a folder structure JSON
path, not both.

### Update the user list

You can use the following sample files to load users:
`Employees_1.csv`, `Employees_5.csv`, and `Employees_10.csv`.
Each will load 1, 5 or 10 new users.

Customize these files for a test run. For example, update the
`Employees_1.csv` with the following data:

```bash
firstName,lastName,email
Isaac,Newton,abc@abc.local
```

With the `EmployeeList` parameter, specify which `.csv` file you would like
to load data from.

### Create folder structure

You can either create a folder structure from a JSON
file or upload it from your local drive.

#### Use a JSON file

The `Folder_Structure.json` file contains the folder structure you want to create.
As an example you will create a `Market Research` and a `Sales Plays`
folder, each with a subfolder `Statistics` and `Big Pharma` respectively.
The script will place this folder structure
under the `Onboarding` folder.

With the `FolderStructureJSONPath` parameter, provide the location of the
`Folder_Structure.json` file.

#### Upload file from local drive

You can also upload a folder structure directly
from the local file system. With the `LocalUploadPath` parameter, provide the
path to your local folder you want to upload.

### Update the parameters

You have 3 ways to pass parameters before run script:

- Use static value in script:

  Please update all needed parameters in the script before running.

  ```bash
  # Set Employee List CSV Path
  $EmployeeList = ""

  # Onboarding Folder Structure: Set either path build off JSON or directly
  # upload a local folder
  $FolderStructureJSONPath = ""
  $LocalUploadPath = ""

  # Name of folder that will be created as parent root folder for folders
  # defined in json file
  $RootFolderName = "Onboarding"

  # ID of folder, wherein root folder will be created if using JSON structure,
  # otherwise it's a destination folder for local uploaded folder structure.
  $RootFolderParentID = ""
  ```

- Run script with parameters:

  You can also specify parameters while run the script, for example:

  ```bash
  PS > ./Users_Create_Provision.ps1 -EmployeeList ./Employees_1.csv `
      -LocalUploadPath ./OnboardingLocalUpload `
      -RootFolderName Onboarding `
      -RootFolderParentID 0

  Starting User Creation & Provisioning script...
  ```

- Input the parameters while prompt

  If some parameters are still missing at runtime,
  the script will prompt you to input them:

  ```bash
  PS > ./Users_Create_Provision.ps1
  Please enter the path to the employee list CSV file:
  ./Employees_1.csv
  Please enter the path to the folder structure JSON file or the local upload path:
  Folder_Structure.json
  Folder structure JSON path set to: Folder_Structure.json
  Please enter the ID of the parent folder for the root folder:
  0
  Starting User Creation & Provisioning script...
  ```

## Run the script

1. Change the directory to the folder containing the script.
   In this example, it is the `User Creation & Provisioning`
   folder.

   ```bash
   rvb@lab:~/box-cli/examples/User Creation & Provisioning$ pwsh
   PowerShell 7.2.4
   Copyright (c) Microsoft Corporation.

   https://aka.ms/powershell
   Type 'help' to get help.

   /home/rvb/box-cli/examples/User Creation & Provisioning>
   ```

2. Run the script:

   ```bash
   PS /home/rvb/box-cli/examples/User Creation & Provisioning> ./Users_Create_Provision.ps1
   ```

   The response will be similar to the following:

   ```bash
   Starting User Creation & Provisioning script...


   firstName lastName email
   --------- -------- -----
   Isaac     Newton   abc@abc.local
   Extracting folder structure
   Found current User ID: 18622116055

   Created a user owned Onboarding folder with id: 164734146745

   Created subfolder Market Research under Onboarding folder with id: 164735375585

   Created subfolder under Statistics folder with id: 164734956242

   Created subfolder Sales Plays under Onboarding folder with id: 164735683001

   Created subfolder under Big Pharma folder with id: 164736160637
   Creating employee Managed User account with first name:
   Isaac, last name: Newton, email: abc@abc.local, and

   Created Managed user with id: 19605663027

   Type: collaboration
       ID: '37250833128'
   Created By:
       Type: user
       ID: '18622116055'
   Name: Rui Barbosa
   Login: barduinor@gmail.com
   Created At: '2022-06-07T13:58:05-07:00'
   Modified At: '2022-06-07T13:58:05-07:00'
   Expires At: null
   Status: accepted
   Accessible By:
       Type: user
       ID: '19605663027'
       Name: Isaac Newton
       Login: abc@abc.local
   Invite Email: null
   Role: viewer uploader
   Acknowledged At: '2022-06-07T13:58:05-07:00'
   Item:
       Type: folder
       ID: '164734146745'
       Sequence ID: '0'
       ETag: '0'
   Name: Onboarding
   Collaborated Managed User Isaac Newton to current users
   Onboarding folder for provisioning
   ```

## Summary

You explored automation using a PowerShell script with the
Box CLI to provision users
and create an initial folder structure.

<Next>I know how to use the sample scripts to automate repetitive tasks</Next>

[scripts]: https://github.com/box/boxcli/tree/main/examples
[script-1]: https://github.com/box/boxcli/tree/main/examples/User%20Creation%20&%20Provisioning
[jwt-cli]: g://cli/cli-docs/jwt-cli
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[step 1]: g://cli/quick-start/create-oauth-app/
[console]: https://app.box.com/developers/console
[auth]: g://authentication/oauth2/oauth2-setup
