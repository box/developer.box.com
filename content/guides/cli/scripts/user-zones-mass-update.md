---
rank: 8
related_endpoints: []
related_guides:
  - authentication/oauth2
  - cli/scripts/provision-users-folders
  - cli/scripts/deprovision-users
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
related_resources: []

---
# Mass update user zones

This script provisions users to the specified data residency zone within a Multizone Box tenant.


The script uses a `.csv` file containing user email addresses and zone mappings as input and performs the zone assignment. To do this, it uses the admin or co-admin login email address to look up the associated enterprise and the zone policy assigned to the enterprise.

<message>
Such zone policy inherited by all users unless otherwise specified. It is referred to as the "default zone".
</message>

Zone assignments are interpreted using the ZonesTable. This script is designed to be run once to do the initial provisioning of user zones, however, it can also be used for subsequent runs to make zone updates ad hoc.

If you would like to use Admin Console for zone assignment, see [this guide][zonesguide]. 
For more information about Box Zones, see the [official webpage][zonespage]

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

To use the script, you will need a Box application. If you don't have one
go to your [developer console][console], and follow the guide 
[Setup with OAuth 2.0][auth].

## Configure the script


## Run the script



[zonesguide]: https://support.box.com/hc/en-us/articles/360044193533-Assigning-Zones-through-the-Admin-Console
[zonespage]: https://www.box.com/zones
[scripts]: https://github.com/box/boxcli/tree/main/examples
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[quickstart]: g://cli/quick-start/create-oauth-app/
[console]: https://app.box.com/developers/console
[auth]: g://authentication/oauth2/oauth2-setup
[examples]:https://github.com/box/boxcli/tree/main/examples/User%20Deprovisioning
[employeelist]:[https://github.com/box/boxcli/blob/main/examples/User%20Deprovisioning/Users_Deprovision.ps1#L12
