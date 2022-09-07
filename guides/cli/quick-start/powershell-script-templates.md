---
type: quick-start
hide_in_page_nav: true
alias_paths:
  - /guides/tooling/cli/quick-start/powershell-script-templates
category_id: cli
subcategory_id: cli/quick-start
is_index: false
id: cli/quick-start/powershell-script-templates
rank: 5
total_steps: 6
sibling_id: cli/quick-start
parent_id: cli/quick-start
next_page_id: cli/quick-start/next-steps
previous_page_id: cli/quick-start/options-and-bulk-commands
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/quick-start/5-powershell-script-templates.md
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
If you haven't done so yet, see [step 1][Step 1] of this quick start guide.
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

### Prepare the user list

You can use the following sample files to load users:
`Employees_1.csv`, `Employees_5.csv`, and `Employees_10.csv`.
Each will load 1, 5 or 10 new users.

Customize these files for a test run. For example, update the
`Employees_1.csv` with the following data:

```bash
firstName,lastName,email
Isaac,Newton,abc@abc.local
```

In the `Users_Create_Provision.ps1` script file, specify which `.csv`
file you would like to load.

```bash
#Set Employee List CSV Path
$EmployeeList = "./Employees_1.csv"
```

### Create folder structure

You can either create a folder structure from a JSON
file or upload it from your local drive.

#### Use a JSON file

The `Folder_Structure.json` file contains the folder structure you want to create.
As an example you will create a `Market Research` and a `Sales Plays`
folder, each with a subfolder `Statistics` and `Big Pharma` respectively.
The script will place this folder structure
under the `Onboarding` folder.

```bash
#First create Onboarding folder owned by current user
$script:OnboardingFolderId = box folders:create 0 "Onboarding" --id-only 
Write-Output "Created a user owned Onboarding folder with id: $($OnboardingFolderId)"
```

Provide the location of the `Folder_Structure.json` file.

```bash
#Onboarding Folder Structure: Set either path build off JSON or directly
# upload a local folder
$FolderStructureJSONPath = "./Folder_Structure.json"
#$LocalUploadPath = "./OnboardingLocalUpload"
```

#### Upload file from local drive

You can also upload a folder structure directly
from the local file system:

1. Set the path to your local folder:

```bash
#Onboarding Folder Structure: Set either path build off JSON or directly
# upload a local folder
#$FolderStructureJSONPath = "./Folder_Structure.json"
$LocalUploadPath = "./OnboardingLocalUpload"
```

2. Comment the `New-Folder-Structure` call, and uncomment the next section:

```bash
#Create Folder Structure from JSON
#New-Folder-Structure

#OR directly upload Folder structure to current user's root folder
# from local directory

$script:OnboardingFolderId = box folders:upload $LocalUploadPath --id-only
Write-Output "Uploaded local folder structre to current user's root folder 
with $($script:OnboardingFolderId)"
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

<Next>

I know how to use the sample scripts to automate repetitive tasks

</Next>

[scripts]: https://github.com/box/boxcli/tree/main/examples
[script-1]: https://github.com/box/boxcli/tree/main/examples/User%20Creation%20&%20Provisioning
[jwt-cli]: g://cli/cli-docs/jwt-cli
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[Step 1]: g://cli/quick-start/create-oauth-app/
[console]: https://app.box.com/developers/console
[auth]: g://authentication/oauth2/oauth2-setup