---
rank: 8
related_endpoints: []
related_guides:
  - authentication/jwt
  - cli/scripts/provision-users-folders
  - cli/scripts/deprovision-users
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/jwt/jwt-setup
related_resources: []

---
# Assign users to zones

This [script][script] provisions users to a specific 
data residency zone within a Multizone Box tenant.
It performs the following steps:

<!-- markdownlint-disable line-length -->

1. First it uses admin or co-admin login email address to find the associated enterprise and the zone policy assigned to this enterprise. An assigned zone policy is inherited by all users unless specified otherwise. It is sometimes called the **default zone**.
2. Next, it performs zone assignment based on an input `.csv` file containing user email addresses and zone mappings.

<message>
This script is designed to be run once to do the initial provisioning of user zones, however, it can also be used for subsequent runs to make zone assignment updates.
</message>

If you would like to use Admin Console for zone assignment, see [this guide][zonesguide].
For more information about Box Zones, see the [official website][zonespage].

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

### Box application with JWT authentication

To use the script, you will need a [Box application with JWT authentication][jwtapp]. 

When creating the application in your developer console, go to **Configuration**
tab to configure the following settings:

* Under **App Access Level**, select `App + Enterprise Access`
* Under **Application Scopes** > **Administrative Actions**, select `Manage Enterprise Properties`, `Manage Users`.
* Under **Advanced Features**, select `Generate user access tokens`.

Additionally, make sure Box Admin or Co-Admin account users have at least `Manage Users` privileges.

## Prepare the `.csv` file

Make sure your `.csv` file has two columns with the following headers: **Email** and **Region**. 

* **Email** contains the primary email address of a Box user. 
* **Region**  contains the user-friendly name for the zone to which the user will be assigned. This name is defined in the [ZonesTable][zonestable] that is a hash table defining zones. The keys are the zones' user-friendly names, and the corresponding value is the global ID of the zone. 

```bash
 $ZonesTable = @{
 US = "100001"             #US
 GermanyIreland = "100002" #Germany/Ireland with in region uploads/downloads/previews
 Australia = "100003"      #Australia
 Japan = "100004"          #Japan with in region uploads/downloads/previews
 Canada = "100005"         #Canada
 JapanSingapore = "100007" #Japan/Singapore with in region uploads/downloads/previews
 UKGermany = "100008"      #UK/Germany
 UK = "100009"             #UK with in region uploads/downloads/previews
 France = "100012"         #France
 }

```
  
<message>
  Consult the BC or CSM contact to get the IDs corresponding to the zones enabled in a specific enterprise.
</message>
 
An [example input `.csv` file][examplecsv] containing emails and zone names is provided along with this script, and its content looks as follows:

| Email|Region|
|------|-------|
|betty@company.com|US|
|roger@company.com|France|
|sally@company.com|JapanSingapore|

## Configure the script

Set the `UserZonesUpdatePath` to point to your `.csv` file.

```bash
$UserZonesUpdatePath = "./your_file_name.csv"
```

Update the `adminEmail` to the admin or `co-admin` login email address of    the account the script will use to make zone assignments. 
If you don't specify this value, you will be prompted for it when running the script.

```bash
$adminEmail = "john@box.com"
```

## Run the script

Change the directory to the folder containing the script. 
In this example, it is the `Mass Update User Zones` folder.
   
```bash
rvb@lab:~/box-cli/examples/Mass Update User Zones$ pwsh
PowerShell 7.2.4
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.

PS /home/rvb/box-cli/examples/Mass Update User Zones>
```

Run the script.
   
   ```bash
    ./Mass_Update_User_Zones.ps1
   ```

(Optional) To run the script in a simulation mode, 
add the `simulate` boolean flag.

```bash
./Mass_Update_User_Zones.ps1 -simulate
```

## Logging

Logs are stored in a `logs` folder located in the main folder. 
You have access to these log files:

* `Mass_Update_User_Zones_all.txt` that contains all log entries
* `Mass_Update_User_Zones_errors.txt` that contains only

<!-- markdownlint-enable line-length -->

[zonesguide]: https://support.box.com/hc/en-us/articles/360044193533-Assigning-Zones-through-the-Admin-Console
[script]: https://github.com/box/boxcli/tree/main/examples/Mass%20Update%20User%20Zones
[zonespage]: https://www.box.com/zones
[zonestable]: https://github.com/box/boxcli/blob/main/examples/Mass%20Update%20User%20Zones/Mass_Update_User_Zones.ps1#L23
[jwtapp]: g://cli/cli-docs/jwt-cli
[scripts]: https://github.com/box/boxcli/tree/main/examples
[examplecsv]: https://github.com/box/boxcli/blob/main/examples/Mass%20Update%20User%20Zones/User_Zones_Update.csv
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[console]: https://app.box.com/developers/console