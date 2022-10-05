---
rank: 7
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

This script extracts metadata details for all the
files and folders in any Box folder and
saves the result in a CSV spreadsheet for
each metadata template.

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

   <Message>
      If you encounter issues make sure you installed both 
      [dotnet core](https://dotnet.microsoft.com/download) and 
      [PowerShell][pwsh].
   </Message>

### Box application

To use the script, you will need a Box application
with OAuth 2.0 authentication. If you don't have one,
go to your [Developer Console][console], and follow the 
[Setup with OAuth 2.0][auth] guide.

## Configure the script 

1. Clone the `boxcli` GitHub repository 
   or download the files from [`examples`][examples] directory.

   ```bash
     git clone https://github.com/box/boxcli.git
   ```

2. Specify the `folderID` of the folder you want the script to scan
   for metadata.

   ```bash
   [string]$FolderID = "",
   ```

3. Specify the `userID` if you want to run the script on behalf of a different  
   user.

   ```bash
   [string]$UserID = "",
   ```

   <Message>
   If you don't specify parameters explicitly, the script
   will prompt you to enter them.
   </Message>

## Run the script

1. Change the directory to the folder containing the script. 
   In this example, it is the `Metadata Extraction` folder.
   
   ```bash
     rvb@lab:~/box-cli/examples/Metadata Extraction$ pwsh
     PowerShell 7.2.4
     Copyright (c) Microsoft Corporation.
     https://aka.ms/powershell
     Type 'help' to get help.
     PS /home/rvb/box-cli/examples/Metadata Extraction>
   ```

2. Run the script.
   
   ```bash
    ./Metadata-extraction.ps1 -folderId 123456789 -userId 123456789
   ```

   When the script finishes, you will see the following 
   output or a similar one.

   ```bash
    Pulling data from Folder ID: 173961139760
    Extracting metadata as user ID: 20718545815
    Reading Item ID: 1016853559790
    Metadata saved to: MetadataTemplate_properties.csv
   ```

## Logging

Logs are stored in a `logs` folder located in the main folder. 
You have access to these log files:

* `Metadata-extraction_all.txt` that contains all log entries.
* `Metadata-extraction_errors.txt` that contains only errors.

[scripts]: https://github.com/box/boxcli/tree/main/examples
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[quickstart]: g://cli/quick-start/create-oauth-app/
[console]: https://app.box.com/developers/console
[auth]: g://authentication/oauth2/oauth2-setup
[examples]:https://github.com/box/boxcli/tree/main/examples/Metadata%20Extraction