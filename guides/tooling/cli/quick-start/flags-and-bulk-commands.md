---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/flags-and-bulk-commands
rank: 4
total_steps: 5
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/next-steps
previous_page_id: tooling/cli/quick-start/build-commands-help
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/4-flags-and-bulk-commands.md
---
# Using Options and Bulk Commands

## Options

Options provide additional, optional functionality to use with a CLI command.
You may also hear these referred to as flags or arguments. As mentioned in the
previous step, `--help` is an example of an option.

To see all valid options for a command, visit the [GitHub repository][github].

For example, look at the command documentation for [deleting folders][df]. You
will see a list of options to use with this command, such as `--recursive` or
`--force`.

## As-User Header

To use the [as-user header][asuser], add `--as-user=USERID` option to the end of
the command.

For example, the following command will create a folder called `Example_Folder`
at the root level in user ID 123456’s account.

```bash
box folders:create 0 Example_Folder --as-user=123456
```

<Message type=warning>

Only Service Accounts and Admins are able to use the as-user header.
If your application was not authorized with the necessary scopes or you
configured your CLI to obtain a default token for another user, this call may
fail. Add `-v` or `--verbose` to your command for verbose error logging.

</Message>

## Bulk Commands
<!--alex ignore execute-->

A csv file can be used to execute commands in bulk. Each row of the spreadsheet
is treated as an individual API call.
<!--alex ignore execute-->

To execute a bulk command, use the option `--bulk-file-path=pathtoacsv`, where
`pathtoacsv` is replaced with a local path of a csv file
containing the necessary information.

<!-- markdownlint-disable line-length -->

As an example, let's create folders using the command `box folders:create --bulk-file-path=pathtoacsv`
<!-- markdownlint-enable line-length -->

<Message type=tip>

You can drag the csv file from your finder window/file explorer to the
terminal/command line window to auto-populate the path.

</Message>

To determine column names for your csv, visit the [GitHub repository][github]
documentation and look at the argument names or use the `--help` option. In this
case, these are `PARENTID` and `NAME` and are case insensitive. Here is a csv
[template][csv] for this bulk create folders example command.

<!--alex ignore executing-->

Executing the command below creates three folders at the root level, 0, of the
Service Account's folder tree.

<!-- markdownlint-disable line-length -->

`box folders:create --bulk-file-path=/Users/ExampleUser/Desktop/bulkcreatefolders.csv`
<!-- markdownlint-enable line-length -->

## Bulk Commands with Options

<!-- markdownlint-disable line-length -->

Passing an option in a command will automatically apply to it to each row in
the csv. For example, `box folders:collaborations:create --bulk-file-path=pathtocsv --role=editor`
will create collaborations for each user in the csv as an editor.
<!-- markdownlint-enable line-length -->

However, you can also use options in the csv. Building on the last example,
instead of using the `--role=editor` option in the command itself, this can
become a column called `role`. The command itself is
<!-- markdownlint-disable line-length -->

`box folders:collaborations:create --bulk-file-path=pathtocsv`.
<!-- markdownlint-enable line-length -->

## Summary

* You used an option with a command and/or a bulk command.

<Next>

I know how to use options and bulk commands

</Next>

[github]: https://github.com/box/boxcli#command-topics-1
[df]: https://github.com/box/boxcli/blob/master/docs/folders.md#box-foldersdelete-id
[asuser]: g://authentication/jwt/as-user/
[csv]: https://cloud.box.com/s/0jowjhf85dnnjt9i5pd9va1fu54i1m0m