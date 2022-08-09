---
rank: 35
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
---

# CLI

The Box Command Line Interface (CLI) is a tool for making requests to
Box APIs from your terminal window or command prompt.

## Quick start

[Get started using the Box CLI with OAuth 2.0][qs].

## Sample scripts

Using the Box CLI is great by itself, but it becomes even more powerful when
combined with a Powershell script. We've created a [library][scripts]
of script templates for you to get started automating repetitive tasks.

- [Explore sample scripts][scripts-docs]

## Advanced

The GitHub page also has some additional guides that might be of interest to an
advanced CLI user.

- [Setup autocomplete][cli-autocomplete]
- [Configure another app][cli-add-config]
- [Switch accounts][cli-switch]
- [Token cache][cache]
- [Bulk actions][bulk]

## Box CLI Using JWT Authentication

If you would rather use our [server authentication][jwt] method, check
out [this][jwt-page] guide.

## Box CLI Using Client Credentials Grant Authentication

If you would rather use our [CCG authentication][ccg] method, check out
[this][ccg-page] guide.

[cli]: https://github.com/box/boxcli
[cli-autocomplete]: https://github.com/box/boxcli/blob/main/docs/autocomplete.md
[cli-switch]: https://github.com/box/boxcli/blob/main/docs/configure.md#box-configureenvironmentsswitch-user-userid
[cli-add-config]: https://github.com/box/boxcli/blob/main/docs/configure.md#box-configureenvironmentsadd-path
[qs]: g://cli/quick-start/
[cache]: https://github.com/box/boxcli/blob/main/docs/configure.md#box-configureenvironmentsupdate-name
[jwt]: g://authentication/jwt
[jwt-page]: g://cli/cli-docs/jwt-cli
[scripts]: https://github.com/box/boxcli/tree/main/examples
[scripts-docs]: g://cli/scripts/index
[ccg]: g://authentication/client-credentials
[ccg-page]: https://github.com/box/boxcli/tree/main/docs/configure.md#box-configureenvironmentsadd-path
[bulk]: https://github.com/box/boxcli/blob/mains/docs/Bulk%20actions/README.md
