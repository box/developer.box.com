---
rank: 3
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
# Update user zones

This [script][script] provisions users to a specific
data residency zone within a Multizone Box tenant.
It performs the following steps:

1. It uses admin or co-admin login email address to find the associated enterprise and the zone policy assigned to this enterprise. An assigned zone policy is inherited by all users unless specified otherwise. It is sometimes called the **default zone**.
2. It performs zone assignment based on an input `.csv` file containing user email addresses and zone mappings.

<message>
Usually, you use the script once to do the initial provisioning of user zones, but you can also use it for subsequent runs to make zone assignment updates.
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

### Set up application with JWT authentication

To use the script, you will need the [Box CLI with JWT authentication][jwtapp]
installed and configured.

When creating the app, use the **Configuration** tab
to configure the following settings:

* In **App Access Level**, select `App + Enterprise Access`.
* In **Application Scopes** > **Administrative Actions**, select `Manage Enterprise Properties`, `Manage Users`.
* In **Advanced Features**, select `Generate user access tokens`.

### Adjust admin settings

Make sure Box Admin or Co-Admin has at least `Manage Users` privileges.
To check this setting:

1. Go **Users & Groups** section in the Admin Console.
2. Click the user account you want to verify.
3. Go to **Edit User Access permissions** section to grant the administrative privileges for users and groups.

## Prepare the `.csv` file

The `.csv` file must have two columns with the following headers: **Email** and **Region**.

* **Email** contains the primary email address of a Box user.
* **Region**  contains the user-friendly name for the zone to which the script will assign the user. This name is provided by the [ZonesTable][zonestable] that is a hash table used to define zones. The keys are the zone's user-friendly names, and the corresponding value is the global ID of the zone.

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
  Consult the Box Consulting or Customer Success manager to get the IDs corresponding to the zones enabled in a specific enterprise.
</message>

A sample input `.csv` file containing emails and zone names is provided with this script. Its content looks as follows:

| Email|Region|
|------|-------|
|`betty@company.com`|US|
|`roger@company.com`|France|
|`sally@company.com`|JapanSingapore|

## Configure the script

Set the `UserZonesUpdatePath` to point to your `.csv` file.

```bash
$UserZonesUpdatePath = "./your_file_name.csv"
```

Update the `adminEmail` to the admin or `co-admin` login email address of the account the script will use to make zone assignments.
If you don't specify this value, the script will prompt you for it.

```bash
$adminEmail = "john@box.com"
```

## Run the script

Run the Powershell command.

```bash
pwsh
```

Run the script.

```bash
./Mass_Update_User_Zones.ps1
```

### Optional flags

To run the script in a simulation mode,
add the `simulate` boolean flag.

```bash
./Mass_Update_User_Zones.ps1 -DryRun
```

## Logging

Logs are stored in a `logs` folder located in the main folder.
You have access to these log files:

* `Mass_Update_User_Zones_all.txt` that contains all log entries.
* `Mass_Update_User_Zones_errors.txt` that contains only errors.

[zonesguide]: https://support.box.com/hc/en-us/articles/360044193533-Assigning-Zones-through-the-Admin-Console
[script]: https://github.com/box/boxcli/tree/main/examples/Mass%20Update%20User%20Zones
[zonespage]: https://www.box.com/zones
[zonestable]: https://github.com/box/boxcli/blob/main/examples/Mass%20Update%20User%20Zones/Mass_Update_User_Zones.ps1#L23
[jwtapp]: g://cli/cli-docs/jwt-cli
[scripts]: https://github.com/box/boxcli/tree/main/examples
[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2
[console]: https://app.box.com/developers/console
