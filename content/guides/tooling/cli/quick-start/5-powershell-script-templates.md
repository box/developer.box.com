---
type: quick-start
hide_in_page_nav: true
---

# Using Powershell Scripts with the Box CLI

By itself, the CLI is already powerful, but using it alongside a Powershell
script lets you complete repetitive tasks even quicker. We created an example
[scripts][scripts] folder within our CLI GitHub repository to help
jump start your development.

For this step in the quick start, we are going to use the
user provisioning and folder creation [script][script-1]
template. This script will use the Box CLI to
build and create a user (admin or service account) owned onboarding folder
structure, create managed users in bulk, and provision the new users by
collaborating them as viewer and uploaders into the newly created folder
structure.

<Message type=warning>
   Only service accounts and users with administrative privileges will be able
   to go through this part of the quick start. You can skip this step if you
   are not a Box administrator or using a service account.
</Message> 

<!-- INSERT VIDEO ONCE COMPLETE HERE-->

## Use case

The use case presented in this example is to illustrate the automatic 
creation of users:

- using a `.csv` file to load users in bulk
- have a predetermined folder structure associated to each user
- define the folder structure using a JSON file
- or create the folder structure by uploading from a local drive

## Pre-Requisites

### MacOS

- Install [PowerShell][pwsh]

### Linux

- Install the latest version of [dotnet core](https://dotnet.microsoft.com/download).
- Install [PowerShell][pwsh]

### Configure a Box application

You should also have a Box application created .
If you haven't done so yet, see [step 1][Step 1] of this quick start guide.
Alternatively, go to your [developer console][console], and follow the guide 
[Setup with OAuth 2.0][auth]

## Download script

```bash
git clone https://github.com/box/boxcli.git box-cli
cd box-cli/examples/User\ Creation\ \&\ Provisioning/
```

## Modify script configuration

You must adapt this script for your own environment.

### CSV Files

There are 3 example files to load users, `Employees_1.csv`, `Employees_5.csv`, 
and `Employees_10.csv`. Each will load 1, 5 or 10 new users.

Customize these files for this test run. For this example let's update the 
`Employeess_1.csv` with the following data:

```bash
firstName,lastName,email
Isaac,Newton,abc@abc.local
```

On the script file `Users_Create_Provision.ps1`, set which csv file you would 
like to load, for this example it will be `Employee_1.csv`:

```bash
#Set Employee List CSV Path
$EmployeeList = "./Employees_1.csv"
```

### Folders

There are two options to create folder structures. You create them from a JSON 
file, or upload them from your local drive.

### Using a JSON file

The `Folder_Structure.json` file represents the folder structure you want to create.
As an example we're going to create a `Market Research` and a `Sales Plays` 
folder, each with a subfolder `Statistics` and `Big Pharma` respectively.

On the script file `Users_Create_Provision.ps1` you also have some options to 
choose from.

The folder creation section in the script has the folder `Onboarding` hard 
coded. This means that whatever folders are present 
on the `Folder_Structure.json`, 
they will be created under this `Onboarding` folder.

```bash
#First create Onboarding folder owned by current user
$script:OnboardingFolderId = box folders:create 0 "Onboarding" --id-only 
Write-Output "Created a user owned Onboarding folder with id: $($OnboardingFolderId)"
```

Set the location of the `Folder_Structure.json`.

```bash
#Onboarding Folder Structure: Set either path build off JSON or directly
# upload a local folder
$FolderStructureJSONPath = "./Folder_Structure.json"
#$LocalUploadPath = "./OnboardingLocalUpload"
```

### Uploading from a local drive

The script is also shows the example of uploading a folder structure directly 
from the local file system.
If you want to try that, set the location of the local folder to upload:

```bash
#Onboarding Folder Structure: Set either path build off JSON or directly
# upload a local folder
#$FolderStructureJSONPath = "./Folder_Structure.json"
$LocalUploadPath = "./OnboardingLocalUpload"
```

Comment the `New-Folder-Structure` call, and uncomment the next section:

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

Now all you need to do is run the script.
Make sure when in `powershell` you are at the base directory relative to the 
scripts path per the configurations you specified in `Users_Create_Provision.ps1`:

```bash
rvb@lab:~/box-cli/examples/User Creation & Provisioning$ pwsh
PowerShell 7.2.4
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.

PS /home/rvb/box-cli/examples/User Creation & Provisioning>
```

And run the script:

```bash
PS /home/rvb/box-cli/examples/User Creation & Provisioning> ./Users_Create_Provision.ps1
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
Creating employee Managed User account with first name: Isaac, last name: 
Newton, email: abc@abc.local, and

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
Collaborated Managed User Isaac Newton to current user's Onboarding 
folder for provisioning
```

## Summary

- You explored using a Powershell script with the Box CLI to provision users
and create their initial folder tree. 

<Next>I know how to use the sample scripts to automate repetitive tasks</Next>

[scripts]: https://github.com/box/boxcli/tree/main/examples
[script-1]: https://github.com/box/boxcli/tree/main/examples/User%20Creation%20&%20Provisioning
[jwt-cli]: g://tooling/cli/jwt-cli
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[Step 1]: g://tooling/cli/quick-start/create-oauth-app/
[console]: https://app.box.com/developers/console
[auth]: g://authentication/oauth2/oauth2-setup
