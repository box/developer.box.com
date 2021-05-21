---
type: quick-start
hide_in_page_nav: true
---

# CLI Installation and Configuration

Installers are available for Windows and macOS. However, the raw source-code is
available if you would like to build the CLI in other environments.

## Windows & macOS Installers

To install the latest CLI on your machine, download the latest
`.exe` for Windows or `.pkg` for macOS for the latest release.

<CTA to="https://github.com/box/boxcli/releases">
  Download the latest CLI installer
</CTA>

## Linux & Node install

Additionally, the CLI can be installed as a Node package on any platform,
including Linux. For this to work you will need to have
[Node JS](https://nodejs.org/) installed on your machine.

```bash
npm install --global @box/cli
```

## Source Code

The source code for the CLI is available via [GitHub][cli].

## Run configuration command

You will now need to configure the CLI to point to to the configuration file
downloaded in step 1.

<ImageFrame center>
  ![CLI Configuration Diagram](./cli-config-diagram.png)
</ImageFrame>

<!--alex ignore execute-->

Open your terminal or command line and execute the
command: `box configure:environments:add PathToConfigFileHere`, replacing
`PathToConfigHere` with the path to your `config.json` file.

<!-- markdownlint-disable line-length -->

For example: 
`box configure:environments:add /Users/ExampleUser/Documents/CLI/config.json`

<!-- markdownlint-enable line-length -->

<Message type=tip>
   You can drag the csv file from the Finder/File Explorer to the
   terminal/command line window to auto-populate the path.
</Message>

## Confirm configuration

To confirm successful configuration, use the command `box users:get`.

A successful response will provide details about the [Service Account][sa] user
associated with your [Access Token][at]:

```json
Type: user
ID: ''0123456789''
Name: Box CLI - Quickstart Example
Login: AutomationUser_123456_8jSo6Lqvko@boxdevedition.com
Created At: '2020-01-01T09:45:01-07:00'
Modified At: '2021-03-01T09:30:05-07:00'
Language: en
Timezone: America/Los_Angeles
Space Amount: 999999999999999
Space Used: 6291500
Max Upload Size: 16106127360
Status: active
Job Title: ''
Phone: ''
Address: example+user@box.com
Avatar URL: ''
Notification Email: []
```

<Message type=tip>
   By default, JWT applications automatically obtain an Access Token for the
   Service Account. It is possible to change the default user, but this guide
   assumes you do not do this. 
</Message>

## Summary

- You installed the CLI
- You configured the CLI to point to your application's configuration file
- You confirmed the user associated with your Access Token

<Next>I installed and configured the CLI</Next>

[cli]: https://github.com/box/boxcli
[auth]: g://authentication/jwt/without-sdk/
[sa]: g://authentication/user-types/service-account/
[at]: g://authentication/access-tokens/
[dc]: https://app.box.com/developers/console
