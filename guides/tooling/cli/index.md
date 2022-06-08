---
rank: 0
related_endpoints: []
related_guides:
  - authentication/oauth2
  - authentication/oauth2/oauth2-setup
  - authentication/jwt
  - authentication/jwt/jwt-setup
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
  - authentication/jwt/jwt-setup
related_resources: []
alias_paths:
  - /docs/box-cli
  - /docs/installation-and-setup
  - /docs/commands-and-actions
  - /docs/command-line-interface-cli
category_id: tooling
subcategory_id: tooling/cli
is_index: true
id: tooling/cli
type: guide
total_steps: 1
sibling_id: tooling
parent_id: tooling
next_page_id: tooling/cli/jwt-cli
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/index.md
---
# CLI

The Box Command Line Interface (CLI) is a tool for making requests to
Box APIs from your terminal window or command prompt.

## Prerequisites

[Get started using the Box CLI with OAuth 2.0][qs].

## Sample Scripts

Using the Box CLI is great by itself, but it becomes even more powerful when
combined with a Powershell script. We've created a [library][scripts]
of script templates for you to get started automating repetitive tasks.

- [User provisioning and initial folder tree creation][script-1]

## Advanced

The GitHub page also has some additional guides that might be of interest to an
advanced CLI user.

- [Setup autocomplete][cli-autocomplete]
- [Configure another app][cli-add-config]
- [Switch accounts][cli-switch]
- [Token cache][cache]
- [Autocomplete][ac]

## Box CLI Using JWT Authentication

If you would rather use our [server authentication][jwt] method, check
out [this][jwt-page] guide.

## Box CLI Using Client Credentials Grant Authentication

If you would rather use our [CCG authentication][ccg] method, check out
[this][ccg-page] guide.

[cli]: https://github.com/box/boxcli
[cli-autocomplete]: https://github.com/box/boxcli/blob/master/docs/autocomplete.md
[cli-switch]: https://github.com/box/boxcli/blob/master/docs/configure.md#box-configureenvironmentsswitch-user-userid
[cli-add-config]: https://github.com/box/boxcli/blob/master/docs/configure.md#box-configureenvironmentsadd-path
[qs]: g://tooling/cli/quick-start/
[cache]: https://github.com/box/boxcli/blob/master/docs/configure.md#box-configureenvironmentsupdate-name
[ac]: https://github.com/box/boxcli/blob/master/docs/autocomplete.md
[jwt]: g://authentication/jwt
[jwt-page]: g://tooling/cli/jwt-cli
[scripts]: https://github.com/box/boxcli/tree/main/examples
[script-1]: https://github.com/box/boxcli/tree/main/examples/User%20Creation%20&%20Provisioning
[ccg]: g://authentication/client-credentials
[ccg-page]: https://github.com/box/boxcli#ccg-authentication