---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/install-and-configure
rank: 2
total_steps: 5
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/cli-installation
previous_page_id: tooling/cli/quick-start/create-jwt-app
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/2-install-and-configure.md
---
# CLI Installation and Configuration

Installers are available for Windows and macOS, and the raw source-code is
available for building the CLI in other environments.

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

The source code for the CLI is also available via [the GitHub page][cli].

## Download configuration file

The CLI needs to be configured to point to a configuration file so that it can
[authenticate][auth] and then make API calls as the authenticated user. By
default the CLI will always authenticate as the JWT application’s
[Service Account][sa].

<ImageFrame center>

![CLI Configuration Diagram](./cli-config-diagram.png)

</ImageFrame>

To download the configuration file, visit the configuration tab in the
[Developer Console][dc] for the JWT application created in step 1.
Click **Generate a Public/Private Keypair**, which will automatically start the
download.

<Message warning>

For security reasons 2FA must be enabled on your Box account to successfully
generate a public/private keypair.

</Message>

## Rename and move configuration file

Locate the downloaded file on your machine which has a default name in the
format: `EnterpriseID_publicKeyID_config.json`. You may leave this name or
choose to rename it. This guide assumes the file is renamed to `config.json`.

<Message warning>

It is critical you place the file to a location where it will not be
inadvertently deleted or moved. If this occurs you will need to repeat the
steps below to reconfigure the CLI to point to the file.

</Message>

## Run configuration command

Then, open the terminal or command line and type the command:

`box configure:environments:add PathToConfigFileHere`

For example:
`box configure:environments:add /Users/ExampleUser/Documents/CLI/config.json`

<Message type=tip>

You can drag the file from your machine to the terminal/command line window
to auto-populate the path for you.

</Message>

## Confirm configuration

To confirm successful configuration, use the command `box users:get`.

A successful response will provide details about the Service Account user
associated with your Access Token:

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

By default, you are automatically authenticated as the application’s
Service Account]. It is possible to change the default user. This guide
assumes you do not change the default user.

</Message>

<Next>

I installed and configured the CLI

</Next>

[cli]: https://github.com/box/boxcli
[auth]: g://authentication/jwt/without-sdk/
[sa]: g://authentication/user-types/service-account/
[dc]: https://app.box.com/developers/console