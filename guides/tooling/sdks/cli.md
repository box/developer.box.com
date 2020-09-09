---
rank: 5
related_endpoints: []
related_guides:
  - authentication/jwt
  - applications/custom-apps/jwt-setup
related_pages:
  - sdks-and-tools
required_guides:
  - applications/custom-apps/jwt-setup
related_resources: []
alias_paths:
  - /docs/box-cli
  - /docs/installation-and-setup
  - /docs/commands-and-actions
  - /docs/command-line-interface-cli
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/cli
type: guide
total_steps: 6
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks
previous_page_id: tooling/sdks/node
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/cli.md
---
# Install Box CLI

The Box Command Line Interface (CLI) is a tool for making requests to
Box APIs from your terminal window or command prompt.

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

## Quick Start

To get started, first [set up a Box Custom App][jwt-guide] using Server-side
Authentication with JWT and download the JSON configuration file from the
Configuration page of your app in the [developer Console][devconsole]. Then, set
up the CLI by pointing it to your configuration file:.

```cli
box configure:environments:add [PATH_TO_CONFIG_FILE]
```

Next, make your first API call by listing the content of the JWT app's Service
Account.

```cli
box folders:get 0
```

<Message>

The root folder for any account always has ID `0`. A JWT application does not
automatically authenticate as an actual managed user, instead it uses a
Service Account. See [User Types](g://authentication/user-types) for more details.

</Message>

## Setup & Commands

For a complete list of steps to set up your CLI environment and start working
with the CLI post-install are available on our [Box CLI GitHub page][cli].

The GitHub page also has some additional guides that might be of interest to an
advanced CLI user.

* [Setup autocomplete][cli-autocomplete]
* [Configure another app][cli-add-config]
* [Switch accounts][cli-switch]
* [A full list of commands][cli-commands]

[cli]: https://github.com/box/boxcli
[cli-releases]: https://github.com/box/boxcli/releases
[cli-getting-started]: https://github.com/box/boxcli#getting-started
[cli-commands]: https://github.com/box/boxcli#command-topics
[jwt-guide]: g://applications/custom-apps/jwt-setup
[devconsole]: https://app.box.com/developers/console
[cli-autocomplete]: https://github.com/box/boxcli/blob/master/docs/autocomplete.md
[cli-switch]: https://github.com/box/boxcli/blob/master/docs/configure.md#box-configureenvironmentsswitch-user-userid
[cli-add-config]: https://github.com/box/boxcli/blob/master/docs/configure.md#box-configureenvironmentsadd-path